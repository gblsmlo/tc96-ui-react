import { cn } from '@/libs/utils'
import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { buttonVariants } from './button.variants'

export type ButtonProps = ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
	const Component = asChild ? Slot : 'button'

	return (
		<Component
			className={cn(buttonVariants({ className, size, variant }))}
			data-slot="button"
			{...props}
		/>
	)
}
