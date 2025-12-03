import { Text } from '@/components/ui/text'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useRef } from 'react'
import { expect, userEvent, within } from 'storybook/test'

const meta = {
	args: {
		children: 'Text content',
		size: 'base',
	},
	argTypes: {
		as: {
			control: 'select',
			description: 'The HTML element to render',
			options: ['p', 'span', 'div', 'a', 'button', 'label'],
		},
		color: {
			control: 'select',
			description: 'The text color variant',
			options: ['primary', 'secondary', 'muted', 'destructive'],
		},
		size: {
			control: 'select',
			description: 'The text size variant',
			options: ['sm', 'base', 'lg', 'xl'],
		},
	},
	component: Text,
	parameters: {
		a11y: { test: 'error' },
	},
	tags: ['autodocs'],
	title: 'Components/Text',
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Default text content',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Default text content')

		await expect(text).toBeInTheDocument()
		await expect(text).toHaveTextContent('Default text content')
		await expect(text.tagName).toBe('P')
	},
}

export const AsSpan: Story = {
	args: {
		as: 'span',
		children: 'Span text',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Span text')

		await expect(text.tagName).toBe('SPAN')
	},
}

export const AsDiv: Story = {
	args: {
		as: 'div',
		children: 'Div container',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Div container')

		await expect(text.tagName).toBe('DIV')
	},
}

export const SizeSmall: Story = {
	args: {
		children: 'Small text (14px)',
		size: 'sm',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Small text (14px)')

		await expect(text).toHaveClass('text-sm')
	},
}

export const SizeBase: Story = {
	args: {
		children: 'Base text (16px)',
		size: 'base',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Base text (16px)')

		await expect(text).toHaveClass('text-base')
	},
}

export const SizeLarge: Story = {
	args: {
		children: 'Large text (18px)',
		size: 'lg',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Large text (18px)')

		await expect(text).toHaveClass('text-lg')
	},
}

export const SizeXLarge: Story = {
	args: {
		children: 'Extra large text (20px)',
		size: 'xl',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Extra large text (20px)')

		await expect(text).toHaveClass('text-xl')
	},
}

export const ColorPrimary: Story = {
	args: {
		children: 'Primary color text',
		color: 'primary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Primary color text')

		await expect(text).toHaveClass('text-primary')
	},
}

export const ColorSecondary: Story = {
	args: {
		children: 'Secondary color text',
		color: 'secondary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Secondary color text')

		await expect(text).toHaveClass('text-secondary')
	},
}

export const ColorMuted: Story = {
	args: {
		children: 'Muted color text',
		color: 'muted',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Muted color text')

		await expect(text).toHaveClass('text-muted')
	},
}

export const ColorDestructive: Story = {
	args: {
		children: 'Destructive color text',
		color: 'destructive',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Destructive color text')

		await expect(text).toHaveClass('text-destructive')
	},
}

// ============================================
// Polymorphic Props
// ============================================

export const AsLink: Story = {
	args: {
		as: 'a',
		children: 'Click this link',
		href: '/dashboard',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const link = canvas.getByText('Click this link')

		await expect(link.tagName).toBe('A')
		await expect(link).toHaveAttribute('href', '/dashboard')
	},
}

export const AsButton: Story = {
	args: {
		as: 'button',
		children: 'Click me',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByText('Click me')

		await expect(button.tagName).toBe('BUTTON')
		await expect(button).toBeEnabled()
	},
}

export const AsButtonDisabled: Story = {
	args: {
		as: 'button',
		children: 'Disabled button',
		disabled: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByText('Disabled button')

		await expect(button).toBeDisabled()
	},
}

export const AsLabel: Story = {
	args: {
		as: 'label',
		children: 'Email address',
		htmlFor: 'email-input',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const label = canvas.getByText('Email address')

		await expect(label.tagName).toBe('LABEL')
		await expect(label).toHaveAttribute('for', 'email-input')
	},
}

// ============================================
// Interactive Tests
// ============================================

export const ButtonClick: Story = {
	args: {
		as: 'button',
		children: 'Click to test',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByText('Click to test')

		// Verify button is clickable
		await userEvent.click(button)
		await expect(button).toBeInTheDocument()
	},
}

export const LinkNavigation: Story = {
	args: {
		as: 'a',
		children: 'Navigate here',
		href: '#test-section',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const link = canvas.getByText('Navigate here')

		await expect(link).toHaveAttribute('href', '#test-section')
		// Verify link is accessible
		await expect(link).toBeVisible()
	},
}

// ============================================
// Custom Styling
// ============================================

export const WithCustomClass: Story = {
	args: {
		children: 'Custom styled text',
		className: 'text-blue-600 font-bold underline',
		size: 'lg',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Custom styled text')

		await expect(text).toHaveClass('text-blue-600')
		await expect(text).toHaveClass('font-bold')
		await expect(text).toHaveClass('underline')
		await expect(text).toHaveClass('text-lg')
	},
}

export const CombinedVariants: Story = {
	args: {
		children: 'Large primary text',
		color: 'primary',
		size: 'xl',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Large primary text')

		await expect(text).toHaveClass('text-xl')
		await expect(text).toHaveClass('text-primary')
	},
}

// ============================================
// Composition Examples
// ============================================

export const AllSizes: Story = {
	render: () => (
		<div className="space-y-2">
			<Text size="sm">Small text (14px)</Text>
			<Text size="base">Base text (16px)</Text>
			<Text size="lg">Large text (18px)</Text>
			<Text size="xl">Extra large text (20px)</Text>
		</div>
	),
}

export const AllColors: Story = {
	render: () => (
		<div className="space-y-2">
			<Text color="primary">Primary color</Text>
			<Text color="secondary">Secondary color</Text>
			<Text color="muted">Muted color</Text>
			<Text color="destructive">Destructive color</Text>
		</div>
	),
}

export const InlineComposition: Story = {
	render: () => (
		<Text>
			This is a paragraph with{' '}
			<Text as="span" className="font-bold text-blue-600">
				highlighted text
			</Text>{' '}
			and{' '}
			<Text as="span" className="text-red-500 italic">
				italic text
			</Text>
			.
		</Text>
	),
}

export const FormExample: Story = {
	render: () => (
		<div className="space-y-2">
			<Text as="label" className="font-medium" htmlFor="username" size="sm">
				Username
			</Text>
			<input
				className="w-full rounded border px-3 py-2"
				id="username"
				placeholder="Enter username"
				type="text"
			/>
			<Text color="muted" size="sm">
				Choose a unique username
			</Text>
		</div>
	),
}

// ============================================
// Accessibility Tests
// ============================================

export const AccessibleContrast: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="bg-white p-4">
				<Text className="text-slate-900">Dark text on light background</Text>
			</div>
			<div className="bg-slate-900 p-4">
				<Text className="text-white">Light text on dark background</Text>
			</div>
		</div>
	),
}

export const WithRef: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Focusable text with ref')
		const button = canvas.getByText('Focus text above')

		// Click button to focus text
		await userEvent.click(button)

		// Verify text is focused
		await expect(text).toHaveFocus()
	},
	render: function WithRefStory() {
		const textRef = useRef<HTMLParagraphElement>(null)

		return (
			<div className="space-y-4">
				<Text className="border-2 border-dashed p-4" ref={textRef} tabIndex={0}>
					Focusable text with ref
				</Text>
				<button
					className="rounded bg-blue-500 px-4 py-2 text-white"
					onClick={() => textRef.current?.focus()}
					type="button"
				>
					Focus text above
				</button>
			</div>
		)
	},
}
