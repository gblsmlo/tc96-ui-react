import { cn } from '@/libs/utils'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import { badgeVariants } from './badge.variants'

type BadgeProps = ComponentPropsWithoutRef<'div'> & VariantProps<typeof badgeVariants>

const Badge = forwardRef<ComponentRef<'div'>, BadgeProps>(
	({ className, variant, ...props }, ref) => (
		<div
			className={cn(badgeVariants({ variant }), className)}
			data-slot="badge"
			data-testid="badge"
			ref={ref}
			{...props}
		/>
	),
)

Badge.displayName = 'Badge'

export { Badge, badgeVariants, type BadgeProps }
