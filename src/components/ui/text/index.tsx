import { cn } from '@/libs/utils'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { textVariants } from './text.variants'

type TextElement = 'p' | 'span'

export type TextProps = ComponentPropsWithoutRef<'p'> &
	VariantProps<typeof textVariants> & {
		as?: TextElement
	}

export const Text = forwardRef<HTMLParagraphElement | HTMLSpanElement, TextProps>(
	({ className, size, as, ...props }) => {
		const Component: ElementType = as || 'p'

		return (
			<Component className={cn(textVariants({ size }), className)} data-slot="text" {...props} />
		)
	},
)

Text.displayName = 'Text'
