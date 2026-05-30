import { MainContent } from '@/components/layout/main-content'
import { Heading, Text } from '@/components/ui'
import { cn } from '@/libs/utils'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { forwardRef } from 'react'
import {
	heroContentVariants,
	heroHeaderVariants,
	heroMediaVariants,
	heroVariants,
} from './hero.variants'

export type HeroProps = ComponentPropsWithoutRef<'section'> &
	VariantProps<typeof heroVariants> & {
		children: ReactNode
	}

export const Hero = forwardRef<HTMLElement, HeroProps>(
	({ className, variant, children, ...props }, ref) => {
		return (
			<section className={cn(heroVariants({ variant }), className)} ref={ref} {...props}>
				{children}
			</section>
		)
	},
)
Hero.displayName = 'Hero'

export type HeroContentProps = ComponentPropsWithoutRef<'div'> &
	VariantProps<typeof heroContentVariants> & {
		children: ReactNode
	}

export const HeroContent = forwardRef<HTMLDivElement, HeroContentProps>(
	({ className, layout, children, ...props }, ref) => {
		return (
			<div className={cn(heroContentVariants({ layout }), className)} ref={ref} {...props}>
				{children}
			</div>
		)
	},
)
HeroContent.displayName = 'HeroContent'

export type HeroHeaderProps = ComponentPropsWithoutRef<'div'> &
	VariantProps<typeof heroHeaderVariants> & {
		children: ReactNode
	}

export const HeroHeader = forwardRef<HTMLDivElement, HeroHeaderProps>(
	({ layout, className, children, ...props }, ref) => {
		return (
			<div className={cn(heroHeaderVariants({ layout }), className)} ref={ref} {...props}>
				{children}
			</div>
		)
	},
)
HeroHeader.displayName = 'HeroHeader'

export type HeroTitleProps = ComponentPropsWithoutRef<'h1'> & {
	children: ReactNode
}

export const HeroTitle = forwardRef<HTMLHeadingElement, HeroTitleProps>(
	({ className, children, ...props }, ref) => {
		return (
			<Heading as="h1" className={cn('text-balance', className)} ref={ref} size="2xl" {...props}>
				{children}
			</Heading>
		)
	},
)
HeroTitle.displayName = 'HeroTitle'

export type HeroDescriptionProps = ComponentPropsWithoutRef<'p'> & {
	children: ReactNode
}

export const HeroDescription = forwardRef<HTMLParagraphElement, HeroDescriptionProps>(
	({ className, children, ...props }, ref) => {
		return (
			<Text className={cn('text-muted-foreground', className)} ref={ref} size="lg" {...props}>
				{children}
			</Text>
		)
	},
)
HeroDescription.displayName = 'HeroDescription'

export type HeroActionsProps = ComponentPropsWithoutRef<'div'> & {
	children: ReactNode
}

export const HeroActions = forwardRef<HTMLDivElement, HeroActionsProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div className={cn('flex flex-wrap items-center gap-4', className)} ref={ref} {...props}>
				{children}
			</div>
		)
	},
)
HeroActions.displayName = 'HeroActions'

export type HeroMediaProps = ComponentPropsWithoutRef<'img'> &
	VariantProps<typeof heroMediaVariants>

export const HeroMedia = forwardRef<HTMLImageElement, HeroMediaProps>(
	({ className, variant, alt = '', ...props }, ref) => {
		return (
			<img
				alt={alt}
				className={cn(heroMediaVariants({ variant }), className)}
				ref={ref}
				{...props}
			/>
		)
	},
)
HeroMedia.displayName = 'HeroMedia'

export function HeroSubHeading({ children }: { children: ReactNode }) {
	return <Text>{children}</Text>
}
