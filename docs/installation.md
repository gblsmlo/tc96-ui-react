# Installation Guide

This guide will help you install and configure `@tc96/ui-react` in your project.

## Quick Start

### 1. Install the Package

```bash
pnpm add @tc96/ui-react
# or
npm install @tc96/ui-react
# or
yarn add @tc96/ui-react
```

### 2. Install Peer Dependencies

This library requires React 19 or higher:

```bash
pnpm add react@^19 react-dom@^19
```

### 3. Import Styles

Import the CSS file once in your application entry point:

```tsx
// src/main.tsx or src/index.tsx (for Vite/CRA)
// or app/layout.tsx (for Next.js App Router)
import '@tc96/ui-react/dist/styles/index.css'
```

### 4. Use Components

```tsx
import { Button, Badge, Avatar } from '@tc96/ui-react'

export default function App() {
  return (
    <div>
      <Button variant="primary" size="base">
        Click me
      </Button>
      <Badge variant="default">New</Badge>
      <Avatar src="/avatar.jpg" alt="User" />
    </div>
  )
}
```

## Tailwind CSS Configuration

To get the full benefit of the design system and customize the theme, configure Tailwind CSS in your project.

### 1. Install Tailwind CSS

If you haven't already:

```bash
pnpm add -D tailwindcss
```

### 2. Use the Tailwind Preset

Create or update your `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss"
import twincamPreset from "@tc96/ui-react/tailwind-preset"

export default {
  presets: [twincamPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tc96/ui-react/dist/**/*.{js,mjs}",
  ],
  // Optional: extend the preset with your own customizations
  theme: {
    extend: {
      // Add your custom styles here
    },
  },
} satisfies Config
```

> **Important:** Make sure to include the library's dist folder in your `content` array for proper tree-shaking.

### 3. Import Tailwind Directives

Create or update your main CSS file (e.g., `src/index.css`):

```css
@import "tailwindcss";
```

For Tailwind v3, use:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Framework-Specific Setup

### Next.js (App Router)

1. Install the package and peer dependencies
2. Import styles in `app/layout.tsx`:

```tsx
import '@tc96/ui-react/dist/styles/index.css'
import './globals.css' // Your Tailwind CSS file

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

3. Configure Tailwind as shown above

### Next.js (Pages Router)

1. Install the package and peer dependencies
2. Import styles in `pages/_app.tsx`:

```tsx
import '@tc96/ui-react/dist/styles/index.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

### Vite

1. Install the package and peer dependencies
2. Import styles in `src/main.tsx`:

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@tc96/ui-react/dist/styles/index.css'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Create React App

1. Install the package and peer dependencies
2. Import styles in `src/index.tsx`:

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@tc96/ui-react/dist/styles/index.css'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

## TypeScript Configuration

The library includes TypeScript definitions out of the box. No additional configuration is needed.

If you encounter type issues, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler", // or "node"
    "esModuleInterop": true,
    "jsx": "react-jsx"
  }
}
```

## Dark Mode Support

The library includes built-in dark mode support using Tailwind CSS's class-based dark mode.

Add the `dark` class to your HTML element to enable dark mode:

```tsx
// Toggle dark mode
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark')
}
```

Or use a dark mode provider like `next-themes`:

```bash
pnpm add next-themes
```

```tsx
// app/providers.tsx (Next.js App Router)
'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
```

## Available Components

- **Button** - Primary action buttons with variants and sizes
- **IconButton** - Compact button for icon-only actions
- **Badge** - Status indicators and labels
- **Avatar** - User profile images with fallback
- **Heading** - Semantic headings with typography variants
- **Text** - Text components with size variants
- **Stack** - Vertical layout container
- **Inline** - Horizontal layout container
- **Input** - Form input field
- **NavigationLinks** - Navigation link components
- **NavigationMenu** - Accessible navigation menu
- **Header** - Page header block component

For detailed component documentation, visit our [Storybook](https://github.com/gblsmlo/tc96-ui-react).

## Troubleshooting

### Styles not applied

1. Ensure you've imported the CSS file: `import '@tc96/ui-react/dist/styles/index.css'`
2. Check that the import comes before your own CSS
3. Verify the library's dist folder is in your Tailwind `content` array

### TypeScript errors

1. Ensure you're using TypeScript 5.0 or higher
2. Clear your TypeScript cache: `rm -rf node_modules/.cache`
3. Restart your TypeScript server

### Build errors with Tailwind

1. Make sure you've added the library to your Tailwind `content` configuration
2. Ensure you're using the preset correctly
3. Check that Tailwind CSS and required plugins are installed

### Dark mode not working

1. Verify the `dark` class is being applied to your HTML element
2. Check that `darkMode: 'class'` is set in your Tailwind config (if using v3)
3. Ensure you've imported the library's CSS file

## Tree-Shaking

The library is fully tree-shakeable. Only import the components you need:

```tsx
// Good - only imports Button
import { Button } from '@tc96/ui-react'

// Avoid - imports everything
import * as UI from '@tc96/ui-react'
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Getting Help

- [GitHub Issues](https://github.com/gblsmlo/tc96-ui-react/issues)
- [Documentation](https://github.com/gblsmlo/tc96-ui-react)
