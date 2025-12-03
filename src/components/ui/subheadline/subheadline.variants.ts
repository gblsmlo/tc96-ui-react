import { cva } from 'class-variance-authority'

export const subheadlineVariants = cva(
	'font-semibold leading-snug tracking-tight text-foreground',
	{
		defaultVariants: {
			color: 'muted',
			size: 'h2',
		},
		variants: {
			color: {
				muted: 'text-muted',
				primary: 'text-primary',
				secondary: 'text-secondary',
			},
			size: {
				h1: 'text-4xl',
				h2: 'text-3xl',
				h3: 'text-2xl',
				h4: 'text-xl',
				h5: 'text-lg',
				h6: 'text-base',
			},
		},
	},
)
