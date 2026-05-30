import { cva } from 'class-variance-authority'

export const heroVariants = cva('flex flex-col overflow-x-hidden', {
	defaultVariants: {
		variant: 'default',
	},
	variants: {
		variant: {
			centered: 'min-h-[calc(100dvh-4rem)] justify-center gap-12 py-16 sm:py-24 lg:py-32',
			compact: 'gap-8 py-12 sm:py-16 lg:py-20',
			default:
				'min-h-[calc(100dvh-4rem)] justify-between gap-12 pt-8 sm:gap-16 sm:pt-16 lg:gap-24 lg:pt-24',
			split: 'min-h-[calc(100dvh-4rem)] justify-between gap-8 pt-8 sm:pt-16 lg:pt-20',
		},
	},
})

export const heroHeaderVariants = cva('flex flex-col gap-4 px-4', {
	defaultVariants: {
		layout: 'centered',
	},
	variants: {
		layout: {
			centered: 'flex flex-col items-center text-center',
		},
	},
})

export const heroContentVariants = cva('mx-auto flex w-full container', {
	defaultVariants: {
		layout: 'centered',
	},
	variants: {
		layout: {
			centered: 'flex-col items-center gap-8 text-center',
			split: 'flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16',
			stacked: 'flex-col gap-8',
		},
	},
})

export const heroMediaVariants = cva('w-full', {
	defaultVariants: {
		variant: 'default',
	},
	variants: {
		variant: {
			default: 'object-cover',
			rounded: 'rounded-2xl object-cover',
			shadow: 'rounded-xl object-cover shadow-2xl',
		},
	},
})
