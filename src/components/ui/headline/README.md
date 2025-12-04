# Headline Component

A polymorphic headline component for large, prominent headings with automatic size mapping based on semantic HTML heading levels.

## Features

- **Polymorphic**: Render as `h1`-`h6` or `a` (link)
- **Type-Safe**: Full TypeScript support with element-specific props
- **Auto-Sizing**: Automatic size mapping based on heading level
- **Color Variants**: Primary, secondary, and muted colors
- **Accessible**: Semantic HTML with proper heading hierarchy
- **Ref Support**: Forward refs with correct typing

## Installation

```bash
# This component is part of the UI library
# No separate installation needed
```

## Basic Usage

```tsx
import { Headline } from '@/components/ui/headline'

// Default h1 (60px)
<Headline>Main Page Title</Headline>

// Specific heading level (auto-sized)
<Headline as="h2">Section Title</Headline>

// As link
<Headline as="a" href="/page">Clickable Headline</Headline>

// With color variant
<Headline color="primary">Primary Headline</Headline>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'a'` | `'h1'` | The HTML element to render |
| `size` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | Auto-mapped from `as` | Manual size override |
| `color` | `'primary' \| 'secondary' \| 'muted'` | - | Text color variant |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Content to display |
| `ref` | `React.Ref<HTMLElement>` | - | Forward ref to the element |
| `...props` | `ComponentProps<T>` | - | Native props based on `as` value |

### Size Mapping (Automatic)

When you don't specify a `size` prop, it's automatically mapped from the `as` prop:

| `as` Value | Auto Size | Tailwind Class | Pixel Size |
|------------|-----------|----------------|------------|
| `h1` | `h1` | `text-6xl` | 60px |
| `h2` | `h2` | `text-5xl` | 48px |
| `h3` | `h3` | `text-4xl` | 36px |
| `h4` | `h4` | `text-3xl` | 30px |
| `h5` | `h5` | `text-2xl` | 24px |
| `h6` | `h6` | `text-xl` | 20px |

### Color Variants

- `primary`: Primary brand color
- `secondary`: Secondary brand color
- `muted`: Muted/subdued text

## Examples

### All Heading Levels

```tsx
<Headline as="h1">H1 Headline (60px)</Headline>
<Headline as="h2">H2 Headline (48px)</Headline>
<Headline as="h3">H3 Headline (36px)</Headline>
<Headline as="h4">H4 Headline (30px)</Headline>
<Headline as="h5">H5 Headline (24px)</Headline>
<Headline as="h6">H6 Headline (20px)</Headline>
```

### Color Variants

```tsx
<Headline color="primary">Primary Headline</Headline>
<Headline color="secondary">Secondary Headline</Headline>
<Headline color="muted">Muted Headline</Headline>
```

### As Link

```tsx
// HTML anchor
<Headline as="a" href="/about" color="primary">
  About Us
</Headline>

// Next.js Link
import Link from 'next/link'
<Headline as={Link} href="/blog">
  Blog
</Headline>
```

### Manual Size Override

```tsx
// H2 element with H1 size
<Headline as="h2" size="h1">
  Visually Large H2
</Headline>

// H3 element with H5 size
<Headline as="h3" size="h5">
  Smaller H3
</Headline>
```

### With Custom Styling

```tsx
<Headline className="underline italic" color="secondary">
  Custom Styled Headline
</Headline>
```

## Size Hierarchy

The Headline component is designed for the largest text in your application:

- **Headline**: 20px - 60px (text-xl to text-6xl)
- **Subheadline**: 16px - 36px (text-base to text-4xl)
- **Text**: 14px - 20px (text-sm to text-xl)

This ensures clear visual hierarchy across your typography system.

## Type Safety

The component provides full type safety for element-specific props:

```tsx
// ✅ Valid: 'a' accepts href
<Headline as="a" href="/home">Link</Headline>

// ❌ Error: 'h1' doesn't have href
<Headline as="h1" href="/home">Error</Headline>

// ❌ Error: 'div' is not allowed
<Headline as="div">Error</Headline>
```

## Accessibility

- Uses semantic HTML heading elements (h1-h6)
- Maintains proper heading hierarchy
- Supports all native ARIA attributes
- Color variants respect contrast requirements

### Best Practices

1. **Use one h1 per page**: Each page should have exactly one h1 element
2. **Don't skip levels**: Go from h1 → h2 → h3, not h1 → h3
3. **Use for structure**: Headings should reflect content structure, not just visual size
4. **Override size when needed**: Use `size` prop if visual hierarchy differs from semantic hierarchy

## Use Cases

### When to Use

- ✅ Page titles and main headings
- ✅ Section headers in hero sections
- ✅ Large, prominent text that needs attention
- ✅ Marketing headlines

### When NOT to Use

- ❌ Body text (use `Text` component)
- ❌ Subsection headings (use `Subheadline` component)
- ❌ Small labels or captions

## Related Components

- `Subheadline`: For subsection headings (smaller than Headline)
- `Text`: For body text and smaller content
- `Link`: For navigation links without heading semantics
