import { cva } from 'class-variance-authority'

export const avatarVariants = cva('relative flex shrink-0 overflow-hidden rounded-full', {
	defaultVariants: {
		size: 'base',
	},
	variants: {
		size: {
			base: 'size-10 text-sm',
			lg: 'size-12 text-base',
			sm: 'size-8 text-xs',
		},
	},
})

export const avatarImageVariants = cva('aspect-square h-full w-full')
