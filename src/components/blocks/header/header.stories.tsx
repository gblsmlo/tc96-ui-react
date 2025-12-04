import { Header, HeaderCenter, HeaderLeft, HeaderRight } from '@/components/blocks/header'
import { Button } from '@/components/ui/button'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sun } from 'lucide-react'
import { expect, within } from 'storybook/test'

const meta = {
	component: Header,
	parameters: {
		a11y: { test: 'error' },
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	title: 'Blocks/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: { children: null },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const header = canvas.getByRole('banner')

		await expect(header).toBeInTheDocument()
	},
	render: () => (
		<Header>
			<HeaderLeft>
				<div className="h-8 w-8 rounded-full bg-primary" />
			</HeaderLeft>
			<HeaderCenter>
				<nav className="flex gap-6">
					<a className="font-medium text-sm hover:text-primary" href="/">
						Home
					</a>
					<a className="font-medium text-sm hover:text-primary" href="/features">
						Features
					</a>
					<a className="font-medium text-sm hover:text-primary" href="/pricing">
						Pricing
					</a>
				</nav>
			</HeaderCenter>
			<HeaderRight>
				<Button size="sm" variant="ghost">
					<Sun className="h-4 w-4" />
				</Button>
				<Button size="sm">Download</Button>
			</HeaderRight>
		</Header>
	),
}

export const WithAuthButtons: Story = {
	args: { children: null },
	render: () => (
		<Header>
			<HeaderLeft>
				<div className="h-8 w-8 rounded-full bg-primary" />
				<span className="font-bold text-lg">Brand</span>
			</HeaderLeft>
			<HeaderCenter>
				<nav className="flex gap-6">
					<a className="font-medium text-sm hover:text-primary" href="/">
						Home
					</a>
					<a className="font-medium text-sm hover:text-primary" href="/features">
						Features
					</a>
				</nav>
			</HeaderCenter>
			<HeaderRight>
				<Button size="sm" variant="ghost">
					Login
				</Button>
				<Button size="sm">Sign Up</Button>
			</HeaderRight>
		</Header>
	),
}

export const GhostVariant: Story = {
	args: { children: null },
	render: () => (
		<div className="bg-zinc-900 p-8">
			<Header variant="ghost">
				<HeaderLeft className="text-white">
					<div className="h-8 w-8 rounded-full bg-white" />
					<span className="font-bold text-lg">Brand</span>
				</HeaderLeft>
				<HeaderCenter>
					<nav className="flex gap-6">
						<a className="font-medium text-sm text-white hover:text-white/80" href="/">
							Home
						</a>
					</nav>
				</HeaderCenter>
				<HeaderRight>
					<Button size="sm" variant="ghost">
						Login
					</Button>
					<Button size="sm">Sign Up</Button>
				</HeaderRight>
			</Header>
		</div>
	),
}

export const Minimal: Story = {
	args: { children: null },
	render: () => (
		<Header>
			<HeaderLeft>
				<div className="h-8 w-8 rounded-full bg-primary" />
				<span className="font-bold text-lg">Brand</span>
			</HeaderLeft>
			<HeaderRight>
				<Button size="sm">Get Started</Button>
			</HeaderRight>
		</Header>
	),
}
