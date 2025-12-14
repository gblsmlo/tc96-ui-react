import { describe, expect, it } from 'vitest'
import { badgeVariants } from './badge.variants'

describe('badgeVariants', () => {
	describe('Base styles', () => {
		it('should include base inline-flex and items-center classes', () => {
			const result = badgeVariants()
			expect(result).toContain('inline-flex')
			expect(result).toContain('items-center')
		})

		it('should include rounded-full class', () => {
			const result = badgeVariants()
			expect(result).toContain('rounded-full')
		})

		it('should include border class', () => {
			const result = badgeVariants()
			expect(result).toContain('border')
		})

		it('should include font-medium class', () => {
			const result = badgeVariants()
			expect(result).toContain('font-medium')
		})

		it('should include transition-colors class', () => {
			const result = badgeVariants()
			expect(result).toContain('transition-colors')
		})

		it('should include focus ring classes', () => {
			const result = badgeVariants()
			expect(result).toContain('focus:outline-none')
			expect(result).toContain('focus:ring-2')
			expect(result).toContain('focus:ring-ring')
			expect(result).toContain('focus:ring-offset-2')
		})

		it('should include SVG pointer-events-none class', () => {
			const result = badgeVariants()
			expect(result).toContain('[&_svg]:pointer-events-none')
		})

		it('should include SVG sizing class', () => {
			const result = badgeVariants()
			expect(result).toMatch(/\[&_svg:not\(\[class\*="size-"\]\)\]:size-3\.5/)
		})

		it('should include SVG shrink-0 class', () => {
			const result = badgeVariants()
			expect(result).toContain('[&_svg]:shrink-0')
		})

		it('should include gap-2 class', () => {
			const result = badgeVariants()
			expect(result).toContain('gap-2')
		})
	})

	describe('Default variants', () => {
		it('should apply secondary variant by default', () => {
			const result = badgeVariants()
			expect(result).toContain('border-secondary')
			expect(result).toContain('bg-secondary')
			expect(result).toContain('text-secondary-foreground')
		})

		it('should apply base size by default', () => {
			const result = badgeVariants()
			expect(result).toContain('px-3')
			expect(result).toContain('py-1')
			expect(result).toContain('text-sm')
		})

		it('should apply defaults when called with empty object', () => {
			const result = badgeVariants({})
			expect(result).toContain('border-secondary')
			expect(result).toContain('bg-secondary')
			expect(result).toContain('px-3')
			expect(result).toContain('text-sm')
		})
	})

	describe('Size variants', () => {
		it('should apply small size classes when size is "sm"', () => {
			const result = badgeVariants({ size: 'sm' })
			expect(result).toContain('px-2')
			expect(result).toContain('py-1')
			expect(result).toContain('text-xs')
		})

		it('should apply base size classes when size is "base"', () => {
			const result = badgeVariants({ size: 'base' })
			expect(result).toContain('px-3')
			expect(result).toContain('py-1')
			expect(result).toContain('text-sm')
		})

		it('should not include other size classes when sm is selected', () => {
			const result = badgeVariants({ size: 'sm' })
			expect(result).not.toContain('px-3')
			expect(result).not.toContain('text-sm')
			expect(result).toContain('text-xs')
		})

		it('should not include other size classes when base is selected', () => {
			const result = badgeVariants({ size: 'base' })
			expect(result).not.toContain('px-2')
			expect(result).not.toContain('text-xs')
			expect(result).toContain('text-sm')
		})
	})

	describe('Variant styles', () => {
		it('should apply primary variant classes', () => {
			const result = badgeVariants({ variant: 'primary' })
			expect(result).toContain('border-primary')
			expect(result).toContain('bg-primary')
			expect(result).toContain('text-primary-foreground')
		})

		it('should apply secondary variant classes', () => {
			const result = badgeVariants({ variant: 'secondary' })
			expect(result).toContain('border-secondary')
			expect(result).toContain('bg-secondary')
			expect(result).toContain('text-secondary-foreground')
		})

		it('should apply outline variant classes', () => {
			const result = badgeVariants({ variant: 'outline' })
			expect(result).toContain('border')
			expect(result).toContain('bg-transparent')
			expect(result).toContain('text-secondary-foreground')
		})

		it('should apply success variant classes', () => {
			const result = badgeVariants({ variant: 'success' })
			expect(result).toContain('border-transparent')
			expect(result).toContain('bg-success')
			expect(result).toContain('text-success-foreground')
		})

		it('should apply success variant with dark mode classes', () => {
			const result = badgeVariants({ variant: 'success' })
			expect(result).toContain('dark:bg-success/30')
		})

		it('should apply warning variant classes', () => {
			const result = badgeVariants({ variant: 'warning' })
			expect(result).toContain('border-transparent')
			expect(result).toContain('bg-warning')
			expect(result).toContain('text-warning-foreground')
		})

		it('should apply warning variant with dark mode classes', () => {
			const result = badgeVariants({ variant: 'warning' })
			expect(result).toContain('dark:bg-warning/30')
		})

		it('should apply destructive variant classes', () => {
			const result = badgeVariants({ variant: 'destructive' })
			expect(result).toContain('border-transparent')
			expect(result).toContain('bg-destructive')
			expect(result).toContain('text-destructive-foreground')
		})

		it('should apply destructive variant with dark mode classes', () => {
			const result = badgeVariants({ variant: 'destructive' })
			expect(result).toContain('dark:bg-destructive/30')
		})
	})

	describe('Variant and size combinations', () => {
		it('should combine primary variant with small size', () => {
			const result = badgeVariants({ variant: 'primary', size: 'sm' })
			expect(result).toContain('border-primary')
			expect(result).toContain('bg-primary')
			expect(result).toContain('px-2')
			expect(result).toContain('text-xs')
		})

		it('should combine primary variant with base size', () => {
			const result = badgeVariants({ variant: 'primary', size: 'base' })
			expect(result).toContain('border-primary')
			expect(result).toContain('bg-primary')
			expect(result).toContain('px-3')
			expect(result).toContain('text-sm')
		})

		it('should combine secondary variant with small size', () => {
			const result = badgeVariants({ variant: 'secondary', size: 'sm' })
			expect(result).toContain('border-secondary')
			expect(result).toContain('bg-secondary')
			expect(result).toContain('px-2')
			expect(result).toContain('text-xs')
		})

		it('should combine outline variant with small size', () => {
			const result = badgeVariants({ variant: 'outline', size: 'sm' })
			expect(result).toContain('bg-transparent')
			expect(result).toContain('px-2')
			expect(result).toContain('text-xs')
		})

		it('should combine success variant with base size', () => {
			const result = badgeVariants({ variant: 'success', size: 'base' })
			expect(result).toContain('bg-success')
			expect(result).toContain('px-3')
			expect(result).toContain('text-sm')
		})

		it('should combine warning variant with small size', () => {
			const result = badgeVariants({ variant: 'warning', size: 'sm' })
			expect(result).toContain('bg-warning')
			expect(result).toContain('px-2')
			expect(result).toContain('text-xs')
		})

		it('should combine destructive variant with base size', () => {
			const result = badgeVariants({ variant: 'destructive', size: 'base' })
			expect(result).toContain('bg-destructive')
			expect(result).toContain('px-3')
			expect(result).toContain('text-sm')
		})
	})

	describe('Edge cases', () => {
		it('should handle undefined variant (use default)', () => {
			const result = badgeVariants({ variant: undefined })
			expect(result).toContain('border-secondary')
			expect(result).toContain('bg-secondary')
		})

		it('should handle undefined size (use default)', () => {
			const result = badgeVariants({ size: undefined })
			expect(result).toContain('px-3')
			expect(result).toContain('text-sm')
		})

		it('should handle null as input', () => {
			const result = badgeVariants(null as any)
			expect(result).toContain('border-secondary')
			expect(result).toContain('bg-secondary')
			expect(result).toContain('px-3')
			expect(result).toContain('text-sm')
		})

		it('should be a pure function - same input produces same output', () => {
			const input = { variant: 'primary' as const, size: 'sm' as const }
			const result1 = badgeVariants(input)
			const result2 = badgeVariants(input)
			expect(result1).toBe(result2)
		})

		it('should produce different outputs for different inputs', () => {
			const result1 = badgeVariants({ variant: 'primary' })
			const result2 = badgeVariants({ variant: 'secondary' })
			expect(result1).not.toBe(result2)
		})
	})

	describe('Class string structure', () => {
		it('should return a string', () => {
			const result = badgeVariants()
			expect(typeof result).toBe('string')
		})

		it('should not have leading or trailing whitespace', () => {
			const result = badgeVariants()
			expect(result).toBe(result.trim())
		})

		it('should have space-separated classes', () => {
			const result = badgeVariants()
			const classes = result.split(' ')
			expect(classes.length).toBeGreaterThan(1)
			expect(classes.every(c => c.length > 0)).toBe(true)
		})

		it('should not have double spaces', () => {
			const result = badgeVariants()
			expect(result).not.toMatch(/\s{2,}/)
		})
	})

	describe('Border handling', () => {
		it('should include border for primary variant', () => {
			const result = badgeVariants({ variant: 'primary' })
			expect(result).toMatch(/\bborder\b/)
		})

		it('should include border-transparent for success variant', () => {
			const result = badgeVariants({ variant: 'success' })
			expect(result).toContain('border-transparent')
		})

		it('should include border-transparent for warning variant', () => {
			const result = badgeVariants({ variant: 'warning' })
			expect(result).toContain('border-transparent')
		})

		it('should include border-transparent for destructive variant', () => {
			const result = badgeVariants({ variant: 'destructive' })
			expect(result).toContain('border-transparent')
		})

		it('should include border for outline variant', () => {
			const result = badgeVariants({ variant: 'outline' })
			expect(result).toMatch(/\bborder\b/)
		})
	})

	describe('Typography', () => {
		it('should always include font-medium', () => {
			const variants = ['primary', 'secondary', 'outline', 'success', 'warning', 'destructive'] as const
			variants.forEach(variant => {
				const result = badgeVariants({ variant })
				expect(result).toContain('font-medium')
			})
		})

		it('should use text-sm for base size', () => {
			const result = badgeVariants({ size: 'base' })
			expect(result).toContain('text-sm')
		})

		it('should use text-xs for small size', () => {
			const result = badgeVariants({ size: 'sm' })
			expect(result).toContain('text-xs')
		})
	})

	describe('Spacing', () => {
		it('should use py-1 for all sizes', () => {
			expect(badgeVariants({ size: 'sm' })).toContain('py-1')
			expect(badgeVariants({ size: 'base' })).toContain('py-1')
		})

		it('should use px-2 for small size', () => {
			const result = badgeVariants({ size: 'sm' })
			expect(result).toContain('px-2')
		})

		it('should use px-3 for base size', () => {
			const result = badgeVariants({ size: 'base' })
			expect(result).toContain('px-3')
		})
	})

	describe('Dark mode support', () => {
		it('should include dark mode classes for success variant', () => {
			const result = badgeVariants({ variant: 'success' })
			expect(result).toMatch(/dark:bg-success\/30/)
		})

		it('should include dark mode classes for warning variant', () => {
			const result = badgeVariants({ variant: 'warning' })
			expect(result).toMatch(/dark:bg-warning\/30/)
		})

		it('should include dark mode classes for destructive variant', () => {
			const result = badgeVariants({ variant: 'destructive' })
			expect(result).toMatch(/dark:bg-destructive\/30/)
		})
	})

	describe('All possible combinations test', () => {
		const sizes = ['sm', 'base'] as const
		const variants = ['primary', 'secondary', 'outline', 'success', 'warning', 'destructive'] as const

		sizes.forEach(size => {
			variants.forEach(variant => {
				it(`should generate valid classes for ${variant} variant with ${size} size`, () => {
					const result = badgeVariants({ variant, size })
					
					// Verify base classes are always present
					expect(result).toContain('inline-flex')
					expect(result).toContain('items-center')
					expect(result).toContain('rounded-full')
					expect(result).toContain('font-medium')
					
					// Verify it's a valid string with classes
					expect(typeof result).toBe('string')
					expect(result.length).toBeGreaterThan(0)
					
					// Verify no empty classes
					const classes = result.split(' ')
					expect(classes.every(c => c.trim().length > 0)).toBe(true)
				})
			})
		})
	})

	describe('Type safety and CVA integration', () => {
		it('should work with type-safe variant props', () => {
			const props: { variant: 'primary'; size: 'sm' } = {
				variant: 'primary',
				size: 'sm'
			}
			const result = badgeVariants(props)
			expect(result).toContain('border-primary')
			expect(result).toContain('px-2')
		})

		it('should work with partial props', () => {
			const props: { variant?: 'success' } = {
				variant: 'success'
			}
			const result = badgeVariants(props)
			expect(result).toContain('bg-success')
			expect(result).toContain('px-3') // default size
		})
	})
})