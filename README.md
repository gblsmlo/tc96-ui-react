
<div align="center">

# @tc96/ui-react
A modern, accessible React component library for product teams

[![npm version](https://img.shields.io/npm/v/@tc96/ui-react?style=flat&colorA=18181B&colorB=0EA5E9)](https://www.npmjs.com/package/@tc96/ui-react)
[![npm downloads](https://img.shields.io/npm/dm/@tc96/ui-react?style=flat&colorA=18181B&colorB=0EA5E9)](https://www.npmjs.com/package/@tc96/ui-react)
[![CI](https://github.com/gblsmlo/tc96-design-system/workflows/ci/badge.svg)](https://github.com/gblsmlo/tc96-design-system/actions)
[![License](https://img.shields.io/github/license/gblsmlo/tc96-design-system?style=flat&colorA=18181B&colorB=0EA5E9)](https://github.com/gblsmlo/tc96-design-system/blob/main/LICENSE)

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white&labelColor=18181B)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white&labelColor=18181B)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white&labelColor=18181B)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite&logoColor=white&labelColor=18181B)
![Storybook](https://img.shields.io/badge/Storybook-10-FF4785?style=flat&logo=storybook&logoColor=white&labelColor=18181B)
![Test Coverage](https://img.shields.io/badge/Coverage-Vitest-729B1B?style=flat&logo=vitest&logoColor=white&labelColor=18181B)

</div>

## ✨ Overview

- **Themeable**: Consistent UI powered by Tailwind v4 tokens (OKLCH color space)
- **Accessible**: Built on Radix UI primitives with WCAG AA compliance and a11y testing
- **Type-safe**: Typed variants with CVA for predictable APIs and excellent DX
- **Tree-shakeable**: Dual ESM/CJS builds via Vite, optimized bundle size
- **Tested**: Comprehensive Storybook stories with Vitest interaction tests


## Installation

```bash
pnpm add @tc96/ui-react
```

**Quick Start:**

```tsx
// 1. Import styles (once in your app entry)
import '@tc96/ui-react/dist/styles.css'

// 2. Use components
import { Button, Badge, Avatar } from '@tc96/ui-react'

export default function App() {
  return (
    <div>
      <Avatar src="/user.jpg" fallback="JD" />
      <Badge variant="success">Active</Badge>
      <Button variant="primary">Get Started</Button>
    </div>
  )
}
```

## Development

```bash
# Install dependencies
pnpm install

# Start Storybook dev server
pnpm dev

# Run tests
pnpm test
pnpm test-storybook

# Type checking
pnpm check:type

# Lint & format
pnpm lint:fix

# Build library
pnpm build
```

## Project Structure:
```
src/
├── components/ui/     # UI components with CVA variants
├── stories/           # Storybook stories & interaction tests
├── styles/            # Tailwind v4 design tokens
└── index.ts           # Public exports

dist/                  # Build output (ESM, CJS, types, CSS)
```

## Contributing

Contributions are welcome! Please:

1. Check existing [issues](https://github.com/gblsmlo/tc96-ui-react/issues) or create a new one
2. Fork the repository and create a feature branch
3. Run `pnpm check:type` and `pnpm lint:fix` before submitting
4. Submit a Pull Request with a clear description


## License
MIT License - see [LICENSE](./LICENSE) for details.

