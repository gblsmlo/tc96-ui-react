import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
	'inline-flex items-center rounded-full border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-3.5 [&_svg]:shrink-0 gap-2',
	{
		defaultVariants: {
			size: 'base',
			variant: 'secondary',
		},
		variants: {
			size: {
				base: 'px-3 py-1 text-sm',
				sm: 'px-2 py-1 text-xs',
			},
			variant: {
				destructive:
					'border border-transparent dark:bg-destructive/30 bg-destructive text-destructive-foreground',
				outline: 'border bg-transparent text-secondary-foreground',
				primary: 'border border-primary bg-primary text-primary-foreground',
				secondary: 'border border-secondary bg-secondary text-secondary-foreground',
				success: 'border border-transparent dark:bg-success/30 bg-success text-success-foreground',
				warning: 'border border-transparent dark:bg-warning/30 bg-warning text-warning-foreground',
			},
		},
	},
)
