# Required Dependencies for Unit Tests

## Installation Command

To enable the unit tests created for the Badge component, run:

```bash
pnpm add -D @testing-library/react @testing-library/jest-dom jsdom
```

## Why These Dependencies?

### @testing-library/react
- **Purpose**: Provides React-specific testing utilities
- **Used in**: `src/components/ui/badge/index.test.tsx`
- **Functions used**: `render()`, `cleanup()`
- **Version**: Latest compatible with React 19

### @testing-library/jest-dom
- **Purpose**: Provides custom jest/vitest matchers for DOM testing
- **Used in**: All test files
- **Matchers used**: 
  - `toBeInTheDocument()`
  - `toHaveClass()`
  - `toHaveAttribute()`
  - `toHaveTextContent()`
  - And many more DOM-specific assertions
- **Version**: Latest

### jsdom
- **Purpose**: Provides a DOM implementation for Node.js
- **Used in**: Vitest unit test environment
- **Required by**: The unit test project in `vite.config.mts`
- **Version**: Latest

## Updated package.json (devDependencies section)

Add these lines to your `devDependencies` in `package.json`:

```json
{
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "jsdom": "^25.0.1",
    // ... existing dependencies
  }
}
```

## Verification

After installing, verify the tests work:

```bash
# Run unit tests only
pnpm vitest --project=unit

# Run all tests (unit + storybook)
pnpm test

# Run with coverage
pnpm vitest --project=unit --coverage
```

## Alternative: Without Installing Dependencies

If you prefer not to add these dependencies immediately, the Storybook tests in `badge.stories.tsx` will still work as they use the browser-based testing approach that's already configured.

The unit tests in `badge.variants.test.ts` and `index.test.tsx` require the above dependencies to run.