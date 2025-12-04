# Subheadline Component

A polymorphic subheadline component for subsection headings with automatic size mapping based on semantic HTML heading levels.

## Features

- 🎨 **Polymorphic**: Render as `h1`-`h6` or `a` (link)
- 🔒 **Type-Safe**: Full TypeScript support with element-specific props
- 📏 **Auto-Sizing**: Automatic size mapping based on heading level
- 🎭 **Color Variants**: Primary, secondary, and muted colors
- ♿ **Accessible**: Semantic HTML with proper heading hierarchy
- 🔗 **Ref Support**: Forward refs with correct typing

## Installation

```bash
# This component is part of the UI library
# No separate installation needed
```

## Basic Usage

```tsx
import { Subheadline } from '@/components/ui/subheadline'

// Default h2 (30px)
<Subheadline>Section Title</Subheadline>

// Specific heading level (auto-sized)
<Subheadline as="h3">Subsection Title</Subheadline>

// As link
<Subheadline as="a" href="/section">Clickable Subheadline</Subheadline>

// With color variant
<Subheadline color="primary">Primary Subheadline</Subheadline>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'a'` | `'h2'` | The HTML element to render |
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
| `h1` | `h1` | `text-4xl` | 36px |
| `h2` | `h2` | `text-3xl` | 30px |
| `h3` | `h3` | `text-2xl` | 24px |
| `h4` | `h4` | `text-xl` | 20px |
| `h5` | `h5` | `text-lg` | 18px |
| `h6` | `h6` | `text-base` | 16px |

### Color Variants

- `primary`: Primary brand color
- `secondary`: Secondary brand color
- `muted`: Muted/subdued text

## Examples

### All Heading Levels

```tsx
<Subheadline as="h1">H1 Subheadline (36px)</Subheadline>
<Subheadline as="h2">H2 Subheadline (30px)</Subheadline>
<Subheadline as="h3">H3 Subheadline (24px)</Subheadline>
<Subheadline as="h4">H4 Subheadline (20px)</Subheadline>
<Subheadline as="h5">H5 Subheadline (18px)</Subheadline>
<Subheadline as="h6">H6 Subheadline (16px)</Subheadline>
```

### Color Variants

```tsx
<Subheadline color="primary">Primary Subheadline</Subheadline>
<Subheadline color="secondary">Secondary Subheadline</Subheadline>
<Subheadline color="muted">Muted Subheadline</Subheadline>
```

### As Link

```tsx
// HTML anchor
<Subheadline as="a" href="/section" color="primary">
  Section Link
</Subheadline>

// Next.js Link
import Link from 'next/link'
<Subheadline as={Link} href="/category">
  Category
</Subheadline>
```

### Manual Size Override

```tsx
// H3 element with H1 size
<Subheadline as="h3" size="h1">
  Visually Large H3
</Subheadline>

// H2 element with H4 size
<Subheadline as="h2" size="h4">
  Smaller H2
</Subheadline>
```

### With Custom Styling

```tsx
<Subheadline className="underline" color="secondary">
  Custom Styled Subheadline
</Subheadline>
```

### Typical Page Structure

```tsx
<Headline as="h1">Main Page Title</Headline>

<Subheadline as="h2">First Section</Subheadline>
<Text>Section content...</Text>

<Subheadline as="h3">Subsection</Subheadline>
<Text>Subsection content...</Text>

<Subheadline as="h2">Second Section</Subheadline>
<Text>Section content...</Text>
```

## Size Hierarchy

The Subheadline component sits between Headline and Text:

- **Headline**: 20px - 60px (text-xl to text-6xl)
- **Subheadline**: 16px - 36px (text-base to text-4xl) ← You are here
- **Text**: 14px - 20px (text-sm to text-xl)

This ensures clear visual hierarchy across your typography system.

## Type Safety

The component provides full type safety for element-specific props:

```tsx
// ✅ Valid: 'a' accepts href
<Subheadline as="a" href="/section">Link</Subheadline>

// ❌ Error: 'h2' doesn't have href
<Subheadline as="h2" href="/section">Error</Subheadline>

// ❌ Error: 'div' is not allowed
<Subheadline as="div">Error</Subheadline>
```

## Accessibility

- Uses semantic HTML heading elements (h1-h6)
- Maintains proper heading hierarchy
- Supports all native ARIA attributes
- Color variants respect contrast requirements

### Best Practices

1. **Follow heading hierarchy**: Don't skip levels (h1 → h2 → h3)
2. **Use for subsections**: Subheadlines are for breaking up content within sections
3. **Pair with Headline**: Use Headline for main titles, Subheadline for subsections
4. **Override size when needed**: Use `size` prop if visual hierarchy differs from semantic hierarchy

## Use Cases

### When to Use

- ✅ Section headings within a page
- ✅ Subsection titles
- ✅ Card headers
- ✅ Article section titles

### When NOT to Use

- ❌ Main page titles (use `Headline` component)
- ❌ Body text (use `Text` component)
- ❌ Small labels or captions (use `Text` component)

## Related Components

- `Headline`: For main page titles and large headings
- `Text`: For body text and smaller content
- `Link`: For navigation links without heading semantics
