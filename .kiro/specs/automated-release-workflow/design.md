# Design Document

## Overview

This design implements an automated release and publishing workflow using the GRAPPL (GitHub Releases for Automated Package Publishing) action. The workflow will replace the current manual release process with an automated system that triggers on version changes in package.json.

The solution consists of a single GitHub Actions workflow file that handles both release creation and npm publishing in a coordinated manner.

## Architecture

### Workflow Structure

The workflow will use a two-stage approach:

1. **Release Stage**: Monitors the main branch for version changes and creates GitHub releases
2. **Publish Stage**: Triggers on release creation and publishes to npm

### Trigger Mechanism

- **Primary Trigger**: Push events to the main branch
- **Secondary Trigger**: Release published events (for the publish job)

### Concurrency Control

- Release creation will use concurrency groups to prevent multiple simultaneous releases
- The workflow will cancel in-progress runs when new commits are pushed

## Components and Interfaces

### 1. GRAPPL Action Configuration

**Action**: `googleapis/release-please-action@v4` (alternative) or custom implementation using `softprops/action-gh-release@v2`

Based on the GRAPPL marketplace listing, we'll use a workflow that:
- Detects version changes in package.json
- Creates GitHub releases with auto-generated notes
- Triggers the publish workflow

**Key Configuration Parameters**:
```yaml
- token: GitHub token for authentication
- tag-name: Version from package.json (e.g., v0.4.2)
- name: Release name
- body: Auto-generated release notes
- draft: false (publish immediately)
- prerelease: false (unless version contains pre-release identifiers)
```

### 2. Version Detection Logic

The workflow will:
1. Check out the repository with full history
2. Compare the current package.json version with the previous commit
3. Determine if a version bump occurred
4. Extract the new version for tagging

### 3. Publish Job

The publish job will:
- Trigger on `release.published` events
- Use pnpm for dependency management
- Build the project before publishing
- Authenticate with npm using secrets

**Job Dependencies**:
```yaml
on:
  release:
    types: [published]
```

## Data Models

### Workflow Inputs

```yaml
# No manual inputs required - fully automated
```

### Workflow Outputs

```yaml
# Release creation outputs
- release_created: boolean indicating if a release was created
- tag_name: the git tag created (e.g., v0.4.2)
- upload_url: URL for uploading release assets
```

### Environment Variables

```yaml
# Publish job
- NODE_AUTH_TOKEN: npm authentication token (from secrets)
- NODE_VERSION: 22
- PNPM_VERSION: 10
```

## Implementation Details

### Workflow File Structure

**File**: `.github/workflows/release.yaml`

The workflow will be restructured to:

1. **Release Job** (runs on push to main):
   - Checkout with full history
   - Detect version changes
   - Create GitHub release if version changed
   - Output release information

2. **Publish Job** (runs on release published):
   - Setup Node.js and pnpm
   - Install dependencies
   - Build project
   - Publish to npm

### Version Detection Strategy

We'll use a bash script to compare versions:

```bash
# Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")

# Get previous version (from previous commit)
git checkout HEAD~1 package.json
PREVIOUS_VERSION=$(node -p "require('./package.json').version")
git checkout HEAD package.json

# Compare versions
if [ "$CURRENT_VERSION" != "$PREVIOUS_VERSION" ]; then
  echo "Version changed from $PREVIOUS_VERSION to $CURRENT_VERSION"
  echo "should_release=true" >> $GITHUB_OUTPUT
  echo "version=$CURRENT_VERSION" >> $GITHUB_OUTPUT
fi
```

### Release Notes Generation

GitHub's automatic release notes feature will be used:
- Generates notes from commit messages
- Groups by PR labels
- Includes contributor list

## Error Handling

### Build Failures

- IF the build step fails, THEN the publish job will fail
- The release will remain on GitHub but the package won't be published
- Manual intervention required to fix and re-trigger

### Publishing Failures

- IF npm publish fails (e.g., version already exists), THEN the job will fail
- Error logs will be available in GitHub Actions
- The release will remain but can be deleted if needed

### Authentication Failures

- IF GitHub token is invalid, THEN release creation will fail
- IF npm token is invalid, THEN publishing will fail
- Both require updating secrets in repository settings

### Version Conflict Detection

- The workflow will not prevent duplicate releases
- npm will reject duplicate version publishes
- Maintainers should ensure version bumps are unique

## Testing Strategy

### Manual Testing

1. **Test version bump detection**:
   - Create a branch with a version bump
   - Merge to main
   - Verify release is created

2. **Test publish workflow**:
   - Verify npm package is published
   - Check package version on npm registry
   - Verify package contents are correct

3. **Test no-change scenario**:
   - Push commits without version changes
   - Verify no release is created

### Validation Checks

- Verify workflow syntax using GitHub Actions validator
- Test with dry-run mode if available
- Check permissions are correctly configured

### Rollback Plan

- Keep the current release.yaml as release.yaml.backup
- If issues occur, revert to manual release process
- Document any issues encountered for future improvements

## Migration from Current Workflow

### Current State

The existing workflow:
- Triggers on manual release creation
- Publishes to npm when a release is published
- Requires manual GitHub release creation

### Migration Steps

1. Backup current workflow
2. Update workflow to add release creation job
3. Keep publish job largely unchanged
4. Test with a patch version bump
5. Monitor first automated release

### Backward Compatibility

- The publish job remains compatible with manual releases
- If automation fails, manual releases still work
- No breaking changes to the publish process
