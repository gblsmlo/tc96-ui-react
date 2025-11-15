# Test Plan: Automated Release Workflow

## Overview

This document provides comprehensive testing procedures for the automated release workflow. The workflow automates GitHub release creation and npm package publishing based on version changes in package.json.

## Prerequisites

Before testing, ensure you have:
- Write access to the repository
- npm authentication token configured in GitHub secrets (`NODE_AUTH_TOKEN`)
- GitHub Actions enabled for the repository
- Permissions to create releases and push to main branch

## Test Scenarios

### 1. Version Bump Detection

**Objective**: Verify that the workflow correctly detects version changes in package.json

**Requirements Tested**: 1.1, 1.2, 1.5

#### Test Case 1.1: Patch Version Bump

**Steps**:
1. Create a new branch from main:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b test/patch-version-bump
   ```

2. Update the version in `package.json` (patch bump):
   ```bash
   # If current version is 0.4.2, change to 0.4.3
   npm version patch --no-git-tag-version
   ```

3. Commit and push the change:
   ```bash
   git add package.json
   git commit -m "chore: bump version to 0.4.3"
   git push origin test/patch-version-bump
   ```

4. Create and merge a pull request to main

5. Navigate to Actions tab and observe the "release" workflow

**Expected Results**:
- Workflow triggers automatically on merge to main
- Version detection step shows: "Version changed from 0.4.2 to 0.4.3"
- `should_release` output is set to `true`
- `version` output is set to `0.4.3`

#### Test Case 1.2: Minor Version Bump

**Steps**:
1. Follow the same process as Test Case 1.1, but use:
   ```bash
   npm version minor --no-git-tag-version
   ```

**Expected Results**:
- Version detection correctly identifies the minor version change
- Release creation proceeds with the new minor version

#### Test Case 1.3: Major Version Bump

**Steps**:
1. Follow the same process as Test Case 1.1, but use:
   ```bash
   npm version major --no-git-tag-version
   ```

**Expected Results**:
- Version detection correctly identifies the major version change
- Release creation proceeds with the new major version

#### Test Case 1.4: No Version Change

**Steps**:
1. Create a new branch from main:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b test/no-version-change
   ```

2. Make a code change without modifying package.json version:
   ```bash
   # Edit any source file
   echo "// test comment" >> src/index.ts
   git add src/index.ts
   git commit -m "chore: add test comment"
   git push origin test/no-version-change
   ```

3. Create and merge a pull request to main

4. Navigate to Actions tab and observe the "release" workflow

**Expected Results**:
- Workflow triggers on merge to main
- Version detection step shows: "No version change detected"
- `should_release` output is set to `false`
- Release creation step is skipped
- No new GitHub release is created

### 2. Release Creation

**Objective**: Verify that GitHub releases are created correctly when version changes are detected

**Requirements Tested**: 1.1, 1.3, 1.4, 3.1

#### Test Case 2.1: Successful Release Creation

**Steps**:
1. Complete Test Case 1.1 (patch version bump)

2. After the workflow completes, navigate to the Releases page:
   - Go to repository homepage
   - Click "Releases" in the right sidebar

3. Verify the new release details

**Expected Results**:
- A new release is created with tag `v0.4.3` (matching the new version)
- Release name is `v0.4.3`
- Release notes are automatically generated from commit history
- Release is not marked as draft
- Release is not marked as prerelease
- Release includes the commit that changed the version

#### Test Case 2.2: Release Notes Content

**Steps**:
1. After completing Test Case 2.1, examine the release notes

**Expected Results**:
- Release notes include the commit message(s) since the last release
- If PRs were merged, they are listed with PR numbers
- Contributors are listed (if applicable)
- "What's Changed" section is present

#### Test Case 2.3: Concurrent Release Prevention

**Steps**:
1. Create two branches with different version bumps:
   ```bash
   git checkout -b test/version-bump-1
   npm version patch --no-git-tag-version
   git add package.json
   git commit -m "chore: bump to 0.4.3"
   git push origin test/version-bump-1
   
   git checkout main
   git checkout -b test/version-bump-2
   npm version patch --no-git-tag-version
   git add package.json
   git commit -m "chore: bump to 0.4.3"
   git push origin test/version-bump-2
   ```

2. Merge both PRs in quick succession

3. Observe the workflow runs in the Actions tab

**Expected Results**:
- Concurrency control prevents simultaneous release creation
- Only one release is created
- The second workflow run is cancelled or waits for the first to complete

### 3. NPM Publishing

**Objective**: Verify that the package is correctly published to npm after release creation

**Requirements Tested**: 2.1, 2.2, 2.3, 2.4, 4.1, 4.2, 4.3, 4.4

#### Test Case 3.1: Successful Package Publishing

**Steps**:
1. Complete Test Case 2.1 (successful release creation)

2. Wait for the "publish" job to trigger automatically

3. Monitor the workflow in the Actions tab:
   - Click on the workflow run
   - Expand the "publish" job
   - Review each step's output

4. Verify the package on npm:
   ```bash
   npm view <your-package-name> version
   ```

**Expected Results**:
- Publish job triggers automatically when release is published
- pnpm is installed (version 10)
- Node.js 22 is set up correctly
- Prepare script is deleted successfully
- Dependencies install with frozen lockfile
- Build completes without errors
- Package publishes to npm successfully
- npm registry shows the new version

#### Test Case 3.2: Build Failure Handling

**Steps**:
1. Create a branch with a version bump and intentional build error:
   ```bash
   git checkout -b test/build-failure
   npm version patch --no-git-tag-version
   # Introduce a TypeScript error in a source file
   echo "const x: string = 123;" >> src/index.ts
   git add .
   git commit -m "chore: bump version with build error"
   git push origin test/build-failure
   ```

2. Merge the PR and observe the workflow

**Expected Results**:
- Release is created successfully
- Publish job triggers
- Build step fails with compilation errors
- Publish step is not executed
- Workflow run shows failure status
- Package is NOT published to npm
- Previous version remains on npm

#### Test Case 3.3: Authentication Verification

**Steps**:
1. Verify that the `NODE_AUTH_TOKEN` secret is configured:
   - Go to repository Settings
   - Navigate to Secrets and variables > Actions
   - Confirm `NODE_AUTH_TOKEN` exists

2. Complete a normal release (Test Case 2.1)

3. Check the publish job logs for authentication

**Expected Results**:
- Publish step uses the authentication token
- No authentication errors appear in logs
- Package publishes successfully

### 4. Error Handling and Edge Cases

**Objective**: Verify that the workflow handles error conditions gracefully

#### Test Case 4.1: First Commit Scenario

**Steps**:
1. This test is primarily for new repositories
2. If testing on existing repo, review the version detection logic for the edge case handling

**Expected Results**:
- If no previous commit exists, workflow handles gracefully
- No errors are thrown
- `should_release` is set to `false`

#### Test Case 4.2: Duplicate Version Publishing

**Steps**:
1. Attempt to publish a version that already exists on npm:
   - Manually trigger a release with an existing version tag
   - Or revert package.json version and try to merge

**Expected Results**:
- npm publish fails with "version already exists" error
- Workflow shows failure status
- Error message is clear in logs

#### Test Case 4.3: Invalid Version Format

**Steps**:
1. Create a branch with an invalid version format:
   ```bash
   git checkout -b test/invalid-version
   # Manually edit package.json with invalid version
   # Change version to something like "invalid"
   git add package.json
   git commit -m "test: invalid version"
   git push origin test/invalid-version
   ```

2. Merge and observe

**Expected Results**:
- Workflow may create a release with the invalid tag
- npm publish will likely fail due to invalid version
- Error is logged clearly

## Rollback Procedures

### Scenario 1: Workflow Malfunction

**When to Use**: The automated workflow is creating incorrect releases or failing consistently

**Steps**:
1. Disable the automated workflow:
   ```bash
   # Rename the workflow file to disable it
   git mv .github/workflows/release.yaml .github/workflows/release.yaml.disabled
   git commit -m "chore: disable automated release workflow"
   git push origin main
   ```

2. Restore the backup workflow:
   ```bash
   git mv .github/workflows/release.yaml.backup .github/workflows/release.yaml
   git commit -m "chore: restore manual release workflow"
   git push origin main
   ```

3. Resume manual release process:
   - Create releases manually through GitHub UI
   - Publish job will still trigger on manual releases

### Scenario 2: Incorrect Release Created

**When to Use**: A release was created with wrong version or content

**Steps**:
1. Delete the incorrect release:
   - Go to Releases page
   - Click on the incorrect release
   - Click "Delete this release"
   - Confirm deletion

2. Delete the associated tag:
   ```bash
   git tag -d v0.4.3
   git push origin :refs/tags/v0.4.3
   ```

3. If package was published to npm:
   - If within 72 hours, unpublish:
     ```bash
     npm unpublish <package-name>@0.4.3
     ```
   - If after 72 hours, publish a new patch version with fixes

### Scenario 3: Failed Publish After Release

**When to Use**: Release was created but npm publish failed

**Steps**:
1. Fix the issue that caused the publish failure (build error, auth issue, etc.)

2. Manually trigger the publish:
   ```bash
   # Checkout the release tag
   git checkout v0.4.3
   
   # Install dependencies
   pnpm install --frozen-lockfile
   
   # Build
   pnpm build
   
   # Publish
   npm publish
   ```

3. Alternatively, delete the release and recreate it after fixing the issue

### Scenario 4: Revert to Previous Version

**When to Use**: A published version has critical issues and needs to be reverted

**Steps**:
1. Create a new branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b revert/to-previous-version
   ```

2. Bump to a new patch version:
   ```bash
   npm version patch --no-git-tag-version
   ```

3. Revert the problematic changes:
   ```bash
   git revert <commit-hash-of-bad-changes>
   ```

4. Commit and merge:
   ```bash
   git add .
   git commit -m "revert: rollback to stable version"
   git push origin revert/to-previous-version
   ```

5. Create PR and merge to trigger new release

**Note**: Never unpublish versions from npm unless absolutely necessary (security issues). Instead, publish a new version with fixes.

## Validation Checklist

After implementing or modifying the workflow, verify:

- [ ] Workflow syntax is valid (no YAML errors)
- [ ] All required secrets are configured
- [ ] Permissions are correctly set (contents: write, pull-requests: write)
- [ ] Concurrency controls are in place
- [ ] Version detection logic handles edge cases
- [ ] Release creation uses correct tag format
- [ ] Publish job has all required steps
- [ ] Build process completes successfully
- [ ] npm authentication works
- [ ] Error handling is appropriate
- [ ] Documentation is up to date

## Monitoring and Maintenance

### Regular Checks

1. **Weekly**: Review failed workflow runs in Actions tab
2. **After each release**: Verify package appears on npm within 5 minutes
3. **Monthly**: Review workflow execution times and optimize if needed

### Common Issues and Solutions

| Issue | Symptom | Solution |
|-------|---------|----------|
| Authentication failure | Publish fails with 401/403 | Regenerate npm token and update secret |
| Build timeout | Workflow times out during build | Optimize build process or increase timeout |
| Concurrent releases | Multiple releases for same version | Check concurrency configuration |
| Missing release notes | Release created without notes | Verify commit message format |

## Success Criteria

The workflow is considered successful when:

1. Version bumps consistently trigger releases
2. Releases are created with correct tags and notes
3. Packages publish to npm within 5 minutes of release
4. No manual intervention is required for standard releases
5. Error conditions are handled gracefully with clear logs
6. Rollback procedures work when needed

## Test Execution Log

Use this section to track test execution:

| Test Case | Date | Tester | Result | Notes |
|-----------|------|--------|--------|-------|
| 1.1 Patch Version Bump | | | | |
| 1.2 Minor Version Bump | | | | |
| 1.3 Major Version Bump | | | | |
| 1.4 No Version Change | | | | |
| 2.1 Successful Release | | | | |
| 2.2 Release Notes | | | | |
| 2.3 Concurrent Prevention | | | | |
| 3.1 Successful Publishing | | | | |
| 3.2 Build Failure | | | | |
| 3.3 Authentication | | | | |
| 4.1 First Commit | | | | |
| 4.2 Duplicate Version | | | | |
| 4.3 Invalid Version | | | | |
