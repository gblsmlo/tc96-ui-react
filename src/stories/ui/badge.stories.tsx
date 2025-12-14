import { Badge, type BadgeProps } from '@/components/ui/badge'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import { expect, within } from 'storybook/test'

const meta = {
	args: {
		'data-testid': 'badge',
	},
	argTypes: {
		children: {
			control: 'text',
			description: 'Content to display inside the badge',
			table: {
				type: { summary: 'ReactNode' },
			},
		},
		size: {
			control: 'inline-radio',
			defaultValue: 'base',
			description: 'Defines the size of the Badge component.',
			options: ['sm', 'base'],
		},
		variant: {
			control: 'select',
			description: 'Defines the variant style of the Badge component.',
			options: ['primary', 'secondary', 'outline', 'success', 'warning', 'destructive'],
			table: {
				defaultValue: { summary: 'secondary' },
				type: { summary: 'primary | secondary | outline | success | warning | destructive' },
			},
		},
	},
	component: Badge,
	tags: ['autodocs'],
	title: 'Components/Badge',
} satisfies Meta<BadgeProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Default',
		variant: 'secondary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge')

		await expect(badge).toHaveAttribute('data-slot', 'badge')

		await expect(badge).toHaveClass(
			'border border-secondary bg-secondary text-secondary-foreground',
			'font-medium px-3 py-1 text-sm',
		)
	},
}

export const Primary: Story = {
	args: {
		children: 'Primary Color',
		variant: 'primary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge')

		await expect(badge).toHaveClass(/border/, /bg-primary/, /text-primary-foreground/)
	},
}

export const Outline: Story = {
	args: {
		children: 'Outline',
		variant: 'outline',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge')

		await expect(badge).toHaveClass(/border/, /bg-transparent/, /text-secondary-foreground/)
	},
}

export const States: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badges = canvas.getAllByRole('generic')

		await expect(badges.length).toBeGreaterThanOrEqual(3)

		const successBadge = canvas.getByTestId('badge-success')
		await expect(successBadge).toHaveClass(
			/bg-success/,
			/border-transparent/,
			/text-success-foreground/,
		)

		const warningBadge = canvas.getByTestId('badge-warning')
		await expect(warningBadge).toHaveClass(
			/bg-warning/,
			/border-transparent/,
			/text-warning-foreground/,
		)

		const errorBadge = canvas.getByTestId('badge-error')
		await expect(errorBadge).toHaveClass(
			/border-transparent/,
			/bg-destructive/,
			/text-destructive-foreground/,
		)
	},
	render: () => (
		<div className="flex items-center gap-3">
			<Badge data-testid="badge-success" variant="success">
				Success
			</Badge>
			<Badge data-testid="badge-warning" variant="warning">
				Warning
			</Badge>
			<Badge data-testid="badge-error" variant="destructive">
				Error
			</Badge>
		</div>
	),
}

export const StatesWithIcons: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const success = canvas.getByTestId('badge-success-icon')
		await expect(success.querySelector('svg')).toBeInTheDocument()
		await expect(success).toHaveClass(/bg-success/, /text-success-foreground/)

		const warning = canvas.getByTestId('badge-warning-icon')
		await expect(warning.querySelector('svg')).toBeInTheDocument()
		await expect(warning).toHaveClass(/bg-warning/, /text-warning-foreground/)

		const error = canvas.getByTestId('badge-error-icon')
		await expect(error.querySelector('svg')).toBeInTheDocument()
		await expect(error).toHaveClass(/bg-destructive/, /text-destructive-foreground/)
	},
	render: () => (
		<div className="flex items-center gap-3">
			<Badge data-testid="badge-success-icon" variant="success">
				<CheckCircle />
				Success
			</Badge>
			<Badge data-testid="badge-warning-icon" variant="warning">
				<AlertTriangle />
				Warning
			</Badge>
			<Badge data-testid="badge-error-icon" variant="destructive">
				<XCircle />
				Error
			</Badge>
		</div>
	),
}

export const Sizes: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const small = canvas.getByTestId('badge-size-sm')
		await expect(small).toBeInTheDocument()
		await expect(small).toHaveClass(/px-2/, /py-1/, /text-xs/)

		const base = canvas.getByTestId('badge-size-base')
		await expect(base).toBeInTheDocument()
		await expect(base).toHaveClass(/px-3/, /py-1/, /text-sm/)
	},
	render: () => (
		<div className="flex items-center gap-3">
			<Badge data-testid="badge-size-sm" size="sm" variant="secondary">
				Small
			</Badge>
			<Badge data-testid="badge-size-base" size="base" variant="secondary">
				Base
			</Badge>
		</div>
	),
}

export const WithIcon: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge')

		const icon = badge.querySelector('svg')
		await expect(icon).toBeInTheDocument()
	},
	render: () => (
		<Badge data-testid="badge" variant="secondary">
			<CheckCircle />
			Verified
		</Badge>
	),
}
