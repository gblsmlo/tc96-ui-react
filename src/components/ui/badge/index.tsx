import { cn } from '@/libs/utils'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import { badgeVariants } from './badge.variants'

export type BadgeProps = ComponentPropsWithoutRef<'div'> &
	VariantProps<typeof badgeVariants> & {
		'data-testid'?: string
	}

export const Badge = forwardRef<ComponentRef<'div'>, BadgeProps>(
	({ className, variant, size, ...props }, ref) => (
		<div
			className={cn(badgeVariants({ size, variant }), className)}
			data-slot="badge"
			ref={ref}
			{...props}
		/>
	),
)

Badge.displayName = 'Badge'
