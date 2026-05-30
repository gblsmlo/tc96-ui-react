import { Header, HeaderCenter, HeaderLeft, HeaderRight } from '@/components/blocks/header'
import {
	Hero,
	HeroActions,
	HeroContent,
	HeroDescription,
	HeroHeader,
	HeroTitle,
} from '@/components/blocks/hero'
import { Logo } from '@/components/logo'
import { Badge, Button, Text } from '@/components/ui'
import { NavigationLinks } from '@/components/ui/navigation-links'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sun } from 'lucide-react'
import { expect, within } from 'storybook/test'

const meta = {
	component: Hero,
	parameters: {
		a11y: { test: 'error' },
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	title: 'Blocks/Hero',
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Centered: Story = {
	args: { children: null, variant: 'default' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const section = canvas.getByRole('region', { hidden: true })

		await expect(section).toBeInTheDocument()
	},
	render: () => (
		<>
			<Header>
				<HeaderLeft>
					<Logo />
				</HeaderLeft>
				<HeaderCenter>
					<NavigationLinks
						data={{
							items: [
								{ href: '/', title: 'Home' },
								{ href: '/about', title: 'About' },
								{ href: '/contact', title: 'Contact' },
							],
						}}
					/>
				</HeaderCenter>
				<HeaderRight>
					<Button aria-label="Mode theme action" isIcon variant="ghost">
						<Sun className="h-4 w-4" />
					</Button>
				</HeaderRight>
			</Header>
			<Hero>
				<HeroContent layout="centered">
					<HeroHeader layout="centered">
						<div className="rounded-full border bg-background/80 px-2 py-1.5">
							<div className="flex items-center justify-center gap-2.5">
								<Badge size="sm">AI-Powered</Badge>
								<Text className="mr-1" size="sm">
									Solution for client-facing businesses
								</Text>
							</div>
						</div>

						<HeroTitle>
							Sizzling Summer Delights
							<br />
							<span className="relative">
								Effortless
								<svg
									aria-hidden="true"
									className="absolute inset-x-0 bottom-0 w-full translate-y-1/2 max-sm:hidden"
									fill="none"
									height="12"
									viewBox="0 0 223 12"
									width="223"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551"
										stroke="url(#paint0_linear_10365_68643)"
										strokeLinecap="round"
										strokeWidth="2"
									/>
									<defs>
										<linearGradient
											gradientUnits="userSpaceOnUse"
											id="paint0_linear_10365_68643"
											x1="18.8541"
											x2="42.6487"
											y1="3.72033"
											y2="66.6308"
										>
											<stop stopColor="var(--primary)" />
											<stop offset="1" stopColor="var(--primary-foreground)" />
										</linearGradient>
									</defs>
								</svg>
							</span>{' '}
							Recipes for Parties!
						</HeroTitle>

						<HeroDescription>
							Dive into a world of flavor this summer with our collection of Sizzling Summer
							Delights!
							<br />
							From refreshing appetizers to delightful desserts
						</HeroDescription>
					</HeroHeader>

					<HeroActions>
						<Button>
							<a href="#get-started">Get Started Now</a>
						</Button>

						<Button variant="outline">
							<a href="#get-started">Live Demo</a>
						</Button>
					</HeroActions>
				</HeroContent>
			</Hero>
		</>
	),
}
