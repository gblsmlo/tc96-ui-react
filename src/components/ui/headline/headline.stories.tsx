import { Headline } from '@/components/ui/headline'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'

const meta = {
	args: {
		children: 'Headline content',
	},
	argTypes: {
		as: {
			control: 'select',
			description: 'The HTML heading element to render',
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a'],
		},
		color: {
			control: 'select',
			description: 'The text color variant',
			options: ['primary', 'secondary', 'muted'],
		},
		size: {
			control: 'select',
			description: 'The heading size (auto-mapped from as prop if not specified)',
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
		},
	},
	component: Headline,
	parameters: {
		a11y: { test: 'error' },
	},
	tags: ['autodocs'],
	title: 'Components/Headline',
} satisfies Meta<typeof Headline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Main Headline',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const headline = canvas.getByText('Main Headline')

		await expect(headline).toBeInTheDocument()
		await expect(headline.tagName).toBe('H1')
		await expect(headline).toHaveClass('text-6xl')
	},
}

export const AsH1: Story = {
	args: {
		as: 'h1',
		children: 'H1 Headline (60px)',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const headline = canvas.getByText('H1 Headline (60px)')

		await expect(headline.tagName).toBe('H1')
		await expect(headline).toHaveClass('text-6xl')
	},
}

export const AsH2: Story = {
	args: {
		as: 'h2',
		children: 'H2 Headline (48px)',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const headline = canvas.getByText('H2 Headline (48px)')

		await expect(headline.tagName).toBe('H2')
		await expect(headline).toHaveClass('text-5xl')
	},
}

export const AsH3: Story = {
	args: {
		as: 'h3',
		children: 'H3 Headline (36px)',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const headline = canvas.getByText('H3 Headline (36px)')

		await expect(headline.tagName).toBe('H3')
		await expect(headline).toHaveClass('text-4xl')
	},
}

export const AsH4: Story = {
	args: {
		as: 'h4',
		children: 'H4 Headline (30px)',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const headline = canvas.getByText('H4 Headline (30px)')

		await expect(headline.tagName).toBe('H4')
		await expect(headline).toHaveClass('text-3xl')
	},
}

export const AsH5: Story = {
	args: {
		as: 'h5',
		children: 'H5 Headline (24px)',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const headline = canvas.getByText('H5 Headline (24px)')

		await expect(headline.tagName).toBe('H5')
		await expect(headline).toHaveClass('text-2xl')
	},
}

export const AsH6: Story = {
	args: {
		as: 'h6',
		children: 'H6 Headline (20px)',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const headline = canvas.getByText('H6 Headline (20px)')

		await expect(headline.tagName).toBe('H6')
		await expect(headline).toHaveClass('text-xl')
	},
}

export const ColorPrimary: Story = {
	args: {
		children: 'Primary Headline',
		color: 'primary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const headline = canvas.getByText('Primary Headline')

		await expect(headline).toHaveClass('text-primary')
	},
}

export const ColorSecondary: Story = {
	args: {
		children: 'Secondary Headline',
		color: 'secondary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const headline = canvas.getByText('Secondary Headline')

		await expect(headline).toHaveClass('text-secondary')
	},
}

export const ColorMuted: Story = {
	args: {
		children: 'Muted Headline',
		color: 'muted',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const headline = canvas.getByText('Muted Headline')

		await expect(headline).toHaveClass('text-muted')
	},
}

export const AsLink: Story = {
	args: {
		as: 'a',
		children: 'Clickable Headline',
		href: '/page',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const link = canvas.getByText('Clickable Headline')

		await expect(link.tagName).toBe('A')
		await expect(link).toHaveAttribute('href', '/page')
	},
}

export const ManualSizeOverride: Story = {
	args: {
		as: 'h2',
		children: 'H2 with H1 size',
		size: 'h1',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const headline = canvas.getByText('H2 with H1 size')

		await expect(headline.tagName).toBe('H2')
		await expect(headline).toHaveClass('text-6xl')
	},
}

export const WithCustomClass: Story = {
	args: {
		children: 'Custom Styled Headline',
		className: 'underline italic',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const headline = canvas.getByText('Custom Styled Headline')

		await expect(headline).toHaveClass('underline')
		await expect(headline).toHaveClass('italic')
	},
}

export const AllHeadingLevels: Story = {
	render: () => (
		<div className="space-y-4">
			<Headline as="h1">H1 Headline (60px)</Headline>
			<Headline as="h2">H2 Headline (48px)</Headline>
			<Headline as="h3">H3 Headline (36px)</Headline>
			<Headline as="h4">H4 Headline (30px)</Headline>
			<Headline as="h5">H5 Headline (24px)</Headline>
			<Headline as="h6">H6 Headline (20px)</Headline>
		</div>
	),
}

export const AllColors: Story = {
	render: () => (
		<div className="space-y-4">
			<Headline color="primary">Primary Color</Headline>
			<Headline color="secondary">Secondary Color</Headline>
			<Headline color="muted">Muted Color</Headline>
		</div>
	),
}

export const CombinedVariants: Story = {
	args: {
		as: 'h2',
		children: 'Large Secondary Headline',
		color: 'secondary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const headline = canvas.getByText('Large Secondary Headline')

		await expect(headline).toHaveClass('text-5xl')
		await expect(headline).toHaveClass('text-secondary')
	},
}

export const LinkWithColor: Story = {
	args: {
		as: 'a',
		children: 'Primary Link Headline',
		color: 'primary',
		href: '/destination',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const link = canvas.getByText('Primary Link Headline')

		await expect(link.tagName).toBe('A')
		await expect(link).toHaveAttribute('href', '/destination')
		await expect(link).toHaveClass('text-primary')
	},
}
