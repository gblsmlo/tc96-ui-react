import { Subheadline } from '@/components/ui/subheadline'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'

const meta = {
	args: {
		children: 'Subheadline content',
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
	component: Subheadline,
	parameters: {
		a11y: { test: 'error' },
	},
	tags: ['autodocs'],
	title: 'Components/Subheadline',
} satisfies Meta<typeof Subheadline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Section Subheadline',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const subheadline = canvas.getByText('Section Subheadline')

		await expect(subheadline).toBeInTheDocument()
		await expect(subheadline.tagName).toBe('H2')
		await expect(subheadline).toHaveClass('text-3xl')
	},
}

export const AsH1: Story = {
	args: {
		as: 'h1',
		children: 'H1 Subheadline (36px)',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const subheadline = canvas.getByText('H1 Subheadline (36px)')

		await expect(subheadline.tagName).toBe('H1')
		await expect(subheadline).toHaveClass('text-4xl')
	},
}

export const AsH2: Story = {
	args: {
		as: 'h2',
		children: 'H2 Subheadline (30px)',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const subheadline = canvas.getByText('H2 Subheadline (30px)')

		await expect(subheadline.tagName).toBe('H2')
		await expect(subheadline).toHaveClass('text-3xl')
	},
}

export const AsH3: Story = {
	args: {
		as: 'h3',
		children: 'H3 Subheadline (24px)',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const subheadline = canvas.getByText('H3 Subheadline (24px)')

		await expect(subheadline.tagName).toBe('H3')
		await expect(subheadline).toHaveClass('text-2xl')
	},
}

export const AsH4: Story = {
	args: {
		as: 'h4',
		children: 'H4 Subheadline (20px)',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const subheadline = canvas.getByText('H4 Subheadline (20px)')

		await expect(subheadline.tagName).toBe('H4')
		await expect(subheadline).toHaveClass('text-xl')
	},
}

export const AsH5: Story = {
	args: {
		as: 'h5',
		children: 'H5 Subheadline (18px)',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const subheadline = canvas.getByText('H5 Subheadline (18px)')

		await expect(subheadline.tagName).toBe('H5')
		await expect(subheadline).toHaveClass('text-lg')
	},
}

export const AsH6: Story = {
	args: {
		as: 'h6',
		children: 'H6 Subheadline (16px)',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const subheadline = canvas.getByText('H6 Subheadline (16px)')

		await expect(subheadline.tagName).toBe('H6')
		await expect(subheadline).toHaveClass('text-base')
	},
}

export const ColorPrimary: Story = {
	args: {
		children: 'Primary Subheadline',
		color: 'primary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const subheadline = canvas.getByText('Primary Subheadline')

		await expect(subheadline).toHaveClass('text-primary')
	},
}

export const ColorSecondary: Story = {
	args: {
		children: 'Secondary Subheadline',
		color: 'secondary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const subheadline = canvas.getByText('Secondary Subheadline')

		await expect(subheadline).toHaveClass('text-secondary')
	},
}

export const ColorMuted: Story = {
	args: {
		children: 'Muted Subheadline',
		color: 'muted',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const subheadline = canvas.getByText('Muted Subheadline')

		await expect(subheadline).toHaveClass('text-muted')
	},
}

export const AsLink: Story = {
	args: {
		as: 'a',
		children: 'Clickable Subheadline',
		href: '/section',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const link = canvas.getByText('Clickable Subheadline')

		await expect(link.tagName).toBe('A')
		await expect(link).toHaveAttribute('href', '/section')
	},
}

export const ManualSizeOverride: Story = {
	args: {
		as: 'h3',
		children: 'H3 with H1 size',
		size: 'h1',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const subheadline = canvas.getByText('H3 with H1 size')

		await expect(subheadline.tagName).toBe('H3')
		await expect(subheadline).toHaveClass('text-4xl')
	},
}

export const WithCustomClass: Story = {
	args: {
		children: 'Custom Styled Subheadline',
		className: 'underline',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const subheadline = canvas.getByText('Custom Styled Subheadline')

		await expect(subheadline).toHaveClass('underline')
	},
}

export const AllHeadingLevels: Story = {
	render: () => (
		<div className="space-y-4">
			<Subheadline as="h1">H1 Subheadline (36px)</Subheadline>
			<Subheadline as="h2">H2 Subheadline (30px)</Subheadline>
			<Subheadline as="h3">H3 Subheadline (24px)</Subheadline>
			<Subheadline as="h4">H4 Subheadline (20px)</Subheadline>
			<Subheadline as="h5">H5 Subheadline (18px)</Subheadline>
			<Subheadline as="h6">H6 Subheadline (16px)</Subheadline>
		</div>
	),
}

export const AllColors: Story = {
	render: () => (
		<div className="space-y-4">
			<Subheadline color="primary">Primary Color</Subheadline>
			<Subheadline color="secondary">Secondary Color</Subheadline>
			<Subheadline color="muted">Muted Color</Subheadline>
		</div>
	),
}

export const CombinedVariants: Story = {
	args: {
		as: 'h3',
		children: 'Large Secondary Subheadline',
		color: 'secondary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const subheadline = canvas.getByText('Large Secondary Subheadline')

		await expect(subheadline).toHaveClass('text-2xl')
		await expect(subheadline).toHaveClass('text-secondary')
	},
}

export const LinkWithColor: Story = {
	args: {
		as: 'a',
		children: 'Primary Link Subheadline',
		color: 'primary',
		href: '/section',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const link = canvas.getByText('Primary Link Subheadline')

		await expect(link.tagName).toBe('A')
		await expect(link).toHaveAttribute('href', '/section')
		await expect(link).toHaveClass('text-primary')
	},
}
