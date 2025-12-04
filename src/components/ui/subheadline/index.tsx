import { cn } from '@/libs/utils'
import type { PropsWithAs } from '@/shared/types/polymorphic'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { forwardRef } from 'react'
import { subheadlineVariants } from './subheadline.variants'

type SubheadlineProps = VariantProps<typeof subheadlineVariants> & {
	children: ReactNode
}

type AllowedSubheadlineElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a'

type SubheadlineComponentProps<T extends AllowedSubheadlineElements = 'h2'> = PropsWithAs<
	SubheadlineProps,
	T
> &
	Omit<ComponentPropsWithoutRef<T>, keyof SubheadlineProps>

type SubheadlineComponent = <T extends AllowedSubheadlineElements = 'h2'>(
	props: SubheadlineComponentProps<T> & { ref?: React.Ref<HTMLElement> },
) => React.ReactElement | null

const SubheadlinePolymorphic = forwardRef<
	HTMLElement,
	SubheadlineComponentProps<AllowedSubheadlineElements>
>(({ as, children, size, color, className, ...props }, ref) => {
	const Component = (as || 'h2') as ElementType

	const autoSize = size || (as as SubheadlineProps['size']) || 'h2'

	return (
		<Component
			className={cn(subheadlineVariants({ color, size: autoSize }), className)}
			ref={ref}
			{...props}
		>
			{children}
		</Component>
	)
})

SubheadlinePolymorphic.displayName = 'Subheadline'

export const Subheadline = SubheadlinePolymorphic as SubheadlineComponent
