import { cn } from '@/libs/utils'
import type { PropsWithAs } from '@/shared/types/polymorphic'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { forwardRef } from 'react'
import { headlineVariants } from './headline.variants'

type HeadlineProps = VariantProps<typeof headlineVariants> & {
	children: ReactNode
}

type AllowedHeadlineElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a'

type HeadlineComponentProps<T extends AllowedHeadlineElements = 'h1'> = PropsWithAs<
	HeadlineProps,
	T
> &
	Omit<ComponentPropsWithoutRef<T>, keyof HeadlineProps>

type HeadlineComponent = <T extends AllowedHeadlineElements = 'h1'>(
	props: HeadlineComponentProps<T> & { ref?: React.Ref<HTMLElement> },
) => React.ReactElement | null

const HeadlinePolymorphic = forwardRef<
	HTMLElement,
	HeadlineComponentProps<AllowedHeadlineElements>
>(({ as, children, size, color, className, ...props }, ref) => {
	const Component = (as || 'h1') as ElementType

	const autoSize = size || (as as HeadlineProps['size']) || 'h1'

	return (
		<Component
			className={cn(headlineVariants({ color, size: autoSize }), className)}
			ref={ref}
			{...props}
		>
			{children}
		</Component>
	)
})

HeadlinePolymorphic.displayName = 'Headline'

export const Headline = HeadlinePolymorphic as HeadlineComponent
