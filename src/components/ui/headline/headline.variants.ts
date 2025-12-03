import { cva } from 'class-variance-authority'

export const headlineVariants = cva('font-bold leading-tight tracking-tight text-foreground', {
	defaultVariants: {
		color: 'primary',
		size: 'h1',
	},
	variants: {
		color: {
			muted: 'text-muted',
			primary: 'text-primary',
			secondary: 'text-secondary',
		},
		size: {
			h1: 'text-6xl',
			h2: 'text-5xl',
			h3: 'text-4xl',
			h4: 'text-3xl',
			h5: 'text-2xl',
			h6: 'text-xl',
		},
	},
})
