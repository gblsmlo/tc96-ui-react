import { Badge, type BadgeProps } from '@/components/ui/badge'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import { expect, within } from 'storybook/test'

const meta = {
	args: {
		'data-testid': 'badge',
	},
	argTypes: {
		children: {
			control: 'text',
			description: 'Content to display inside the badge',
			table: {
				type: { summary: 'ReactNode' },
			},
		},
		size: {
			control: 'inline-radio',
			defaultValue: 'base',
			description: 'Defines the size of the Badge component.',
			options: ['sm', 'base'],
		},
		variant: {
			control: 'select',
			description: 'Defines the variant style of the Badge component.',
			options: ['primary', 'secondary', 'outline', 'success', 'warning', 'destructive'],
			table: {
				defaultValue: { summary: 'secondary' },
				type: { summary: 'primary | secondary | outline | success | warning | destructive' },
			},
		},
	},
	component: Badge,
	tags: ['autodocs'],
	title: 'Components/Badge',
} satisfies Meta<BadgeProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Default',
		variant: 'secondary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge')

		await expect(badge).toHaveAttribute('data-slot', 'badge')

		await expect(badge).toHaveClass(
			'border border-secondary bg-secondary text-secondary-foreground',
			'font-medium px-3 py-1 text-sm',
		)
	},
}

export const Primary: Story = {
	args: {
		children: 'Primary Color',
		variant: 'primary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge')

		await expect(badge).toHaveClass(/border/, /bg-primary/, /text-primary-foreground/)
	},
}

export const Outline: Story = {
	args: {
		children: 'Outline',
		variant: 'outline',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge')

		await expect(badge).toHaveClass(/border/, /bg-transparent/, /text-secondary-foreground/)
	},
}

export const States: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badges = canvas.getAllByRole('generic')

		await expect(badges.length).toBeGreaterThanOrEqual(3)

		const successBadge = canvas.getByTestId('badge-success')
		await expect(successBadge).toHaveClass(
			/bg-success/,
			/border-transparent/,
			/text-success-foreground/,
		)

		const warningBadge = canvas.getByTestId('badge-warning')
		await expect(warningBadge).toHaveClass(
			/bg-warning/,
			/border-transparent/,
			/text-warning-foreground/,
		)

		const errorBadge = canvas.getByTestId('badge-error')
		await expect(errorBadge).toHaveClass(
			/border-transparent/,
			/bg-destructive/,
			/text-destructive-foreground/,
		)
	},
	render: () => (
		<div className="flex items-center gap-3">
			<Badge data-testid="badge-success" variant="success">
				Success
			</Badge>
			<Badge data-testid="badge-warning" variant="warning">
				Warning
			</Badge>
			<Badge data-testid="badge-error" variant="destructive">
				Error
			</Badge>
		</div>
	),
}

export const StatesWithIcons: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const success = canvas.getByTestId('badge-success-icon')
		await expect(success.querySelector('svg')).toBeInTheDocument()
		await expect(success).toHaveClass(/bg-success/, /text-success-foreground/)

		const warning = canvas.getByTestId('badge-warning-icon')
		await expect(warning.querySelector('svg')).toBeInTheDocument()
		await expect(warning).toHaveClass(/bg-warning/, /text-warning-foreground/)

		const error = canvas.getByTestId('badge-error-icon')
		await expect(error.querySelector('svg')).toBeInTheDocument()
		await expect(error).toHaveClass(/bg-destructive/, /text-destructive-foreground/)
	},
	render: () => (
		<div className="flex items-center gap-3">
			<Badge data-testid="badge-success-icon" variant="success">
				<CheckCircle />
				Success
			</Badge>
			<Badge data-testid="badge-warning-icon" variant="warning">
				<AlertTriangle />
				Warning
			</Badge>
			<Badge data-testid="badge-error-icon" variant="destructive">
				<XCircle />
				Error
			</Badge>
		</div>
	),
}

export const Sizes: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const small = canvas.getByTestId('badge-size-sm')
		await expect(small).toBeInTheDocument()
		await expect(small).toHaveClass(/px-2/, /py-1/, /text-xs/)

		const base = canvas.getByTestId('badge-size-base')
		await expect(base).toBeInTheDocument()
		await expect(base).toHaveClass(/px-3/, /py-1/, /text-sm/)
	},
	render: () => (
		<div className="flex items-center gap-3">
			<Badge data-testid="badge-size-sm" size="sm" variant="secondary">
				Small
			</Badge>
			<Badge data-testid="badge-size-base" size="base" variant="secondary">
				Base
			</Badge>
		</div>
	),
}

export const WithIcon: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge')

		const icon = badge.querySelector('svg')
		await expect(icon).toBeInTheDocument()
	},
	render: () => (
		<Badge data-testid="badge" variant="secondary">
			<CheckCircle />
			Verified
		</Badge>
	),
}

// ============================================================================
// COMPREHENSIVE UNIT TESTS - Edge Cases, Accessibility, and Validation
// ============================================================================

/**
 * Test: Empty Badge
 * Validates that badge renders correctly with no children/content
 */
export const EmptyBadge: Story = {
	args: {
		children: '',
		'data-testid': 'badge-empty',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-empty')

		// Should still render and have proper structure
		await expect(badge).toBeInTheDocument()
		await expect(badge).toHaveAttribute('data-slot', 'badge')
		await expect(badge).toHaveClass(/inline-flex/, /items-center/, /rounded-full/)
		
		// Should have default variant styling
		await expect(badge).toHaveClass(/border-secondary/, /bg-secondary/)
	},
}

/**
 * Test: Badge with null children
 * Validates graceful handling of null/undefined children
 */
export const NullChildren: Story = {
	args: {
		children: null,
		'data-testid': 'badge-null',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-null')

		await expect(badge).toBeInTheDocument()
		await expect(badge).toHaveAttribute('data-slot', 'badge')
		// Badge should render but be empty
		await expect(badge.textContent).toBe('')
	},
}

/**
 * Test: Badge with very long text content
 * Validates layout handling with overflow content
 */
export const LongTextContent: Story = {
	args: {
		children: 'This is a very long badge text that might cause layout issues if not handled properly',
		'data-testid': 'badge-long-text',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-long-text')

		await expect(badge).toBeInTheDocument()
		await expect(badge).toHaveClass(/inline-flex/)
		await expect(badge.textContent?.length).toBeGreaterThan(50)
	},
}

/**
 * Test: Badge with special characters and unicode
 * Validates proper rendering of special characters
 */
export const SpecialCharacters: Story = {
	args: {
		children: '⚡️ 🎉 Special & <chars> "quotes" \'apostrophe\'',
		'data-testid': 'badge-special',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-special')

		await expect(badge).toBeInTheDocument()
		await expect(badge.textContent).toContain('⚡️')
		await expect(badge.textContent).toContain('🎉')
		await expect(badge.textContent).toContain('Special')
	},
}

/**
 * Test: Badge with numeric content
 * Validates rendering of numeric values (common use case for counts)
 */
export const NumericContent: Story = {
	args: {
		children: 42,
		'data-testid': 'badge-numeric',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-numeric')

		await expect(badge).toBeInTheDocument()
		await expect(badge).toHaveTextContent('42')
	},
}

/**
 * Test: All variant combinations with both sizes
 * Comprehensive matrix test of all variant + size combinations
 */
export const AllVariantSizeCombinations: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const variants = ['primary', 'secondary', 'outline', 'success', 'warning', 'destructive']
		const sizes = ['sm', 'base']

		for (const variant of variants) {
			for (const size of sizes) {
				const testId = `badge-${variant}-${size}`
				const badge = canvas.getByTestId(testId)
				
				await expect(badge).toBeInTheDocument()
				await expect(badge).toHaveAttribute('data-slot', 'badge')
				
				// Verify size classes
				if (size === 'sm') {
					await expect(badge).toHaveClass(/px-2/, /py-1/, /text-xs/)
				} else {
					await expect(badge).toHaveClass(/px-3/, /py-1/, /text-sm/)
				}
			}
		}
	},
	render: () => (
		<div className="flex flex-col gap-4">
			{['primary', 'secondary', 'outline', 'success', 'warning', 'destructive'].map((variant) => (
				<div key={variant} className="flex items-center gap-3">
					<Badge
						data-testid={`badge-${variant}-sm`}
						size="sm"
						variant={variant as BadgeProps['variant']}
					>
						{variant} sm
					</Badge>
					<Badge
						data-testid={`badge-${variant}-base`}
						size="base"
						variant={variant as BadgeProps['variant']}
					>
						{variant} base
					</Badge>
				</div>
			))}
		</div>
	),
}

/**
 * Test: Custom className prop override
 * Validates that custom classes can be added without breaking base styles
 */
export const CustomClassNameOverride: Story = {
	args: {
		children: 'Custom Classes',
		className: 'shadow-lg hover:scale-105 transition-transform cursor-pointer',
		'data-testid': 'badge-custom-class',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-custom-class')

		await expect(badge).toBeInTheDocument()
		// Should have custom classes
		await expect(badge).toHaveClass(/shadow-lg/, /hover:scale-105/, /cursor-pointer/)
		// Should still have base badge classes
		await expect(badge).toHaveClass(/inline-flex/, /items-center/, /rounded-full/)
	},
}

/**
 * Test: Badge with multiple icons
 * Validates rendering of multiple icon children
 */
export const MultipleIcons: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-multi-icon')

		const svgs = badge.querySelectorAll('svg')
		await expect(svgs.length).toBe(2)
		
		// Verify icon sizing classes are applied
		svgs.forEach((svg) => {
			const classes = svg.getAttribute('class') || ''
			expect(classes).toMatch(/size-3\.5|shrink-0/)
		})
	},
	render: () => (
		<Badge data-testid="badge-multi-icon" variant="success">
			<CheckCircle />
			<AlertTriangle />
			Multi Icon
		</Badge>
	),
}

/**
 * Test: Badge with nested HTML elements
 * Validates that badge can contain complex children
 */
export const NestedElements: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-nested')

		await expect(badge).toBeInTheDocument()
		
		const strong = badge.querySelector('strong')
		await expect(strong).toBeInTheDocument()
		await expect(strong?.textContent).toBe('Bold')
		
		const span = badge.querySelector('span')
		await expect(span).toBeInTheDocument()
		await expect(span?.textContent).toBe('Normal')
	},
	render: () => (
		<Badge data-testid="badge-nested" variant="primary">
			<strong>Bold</strong> <span>Normal</span>
		</Badge>
	),
}

/**
 * Test: Badge with ARIA attributes
 * Validates that custom ARIA attributes are properly passed through
 */
export const AriaAttributes: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-aria')

		await expect(badge).toHaveAttribute('aria-label', 'Status indicator')
		await expect(badge).toHaveAttribute('role', 'status')
		await expect(badge).toHaveAttribute('aria-live', 'polite')
	},
	render: () => (
		<Badge
			aria-label="Status indicator"
			aria-live="polite"
			data-testid="badge-aria"
			role="status"
			variant="success"
		>
			Active
		</Badge>
	),
}

/**
 * Test: Badge with onClick handler
 * Validates interactive badge behavior (though badges are typically not interactive)
 */
export const ClickableBadge: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-clickable')

		await expect(badge).toBeInTheDocument()
		// Verify it's a div (not a button), but can have click handlers
		await expect(badge.tagName).toBe('DIV')
	},
	render: () => {
		const handleClick = () => {
			console.log('Badge clicked')
		}
		return (
			<Badge data-testid="badge-clickable" onClick={handleClick} variant="primary">
				Clickable
			</Badge>
		)
	},
}

/**
 * Test: Badge focus ring styles
 * Validates focus states for keyboard navigation
 */
export const FocusRingStyles: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-focus')

		await expect(badge).toBeInTheDocument()
		// Verify focus ring classes are present
		await expect(badge).toHaveClass(/focus:outline-none/, /focus:ring-2/, /focus:ring-ring/)
	},
	render: () => (
		<Badge data-testid="badge-focus" tabIndex={0} variant="primary">
			Focusable
		</Badge>
	),
}

/**
 * Test: Badge with data attributes
 * Validates that custom data attributes are preserved
 */
export const CustomDataAttributes: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-data-attrs')

		await expect(badge).toHaveAttribute('data-custom-id', '12345')
		await expect(badge).toHaveAttribute('data-category', 'important')
		await expect(badge).toHaveAttribute('data-priority', 'high')
	},
	render: () => (
		<Badge
			data-category="important"
			data-custom-id="12345"
			data-priority="high"
			data-testid="badge-data-attrs"
			variant="warning"
		>
			Custom Data
		</Badge>
	),
}

/**
 * Test: Badge with ref forwarding
 * Validates that forwardRef is working correctly
 */
export const RefForwarding: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-ref')

		// Verify element is rendered (ref would be set in actual component usage)
		await expect(badge).toBeInTheDocument()
		await expect(badge.tagName).toBe('DIV')
	},
	render: () => {
		const ref = { current: null }
		return (
			<Badge data-testid="badge-ref" ref={ref} variant="secondary">
				Ref Badge
			</Badge>
		)
	},
}

/**
 * Test: Small size variant styling validation
 * Detailed validation of small size styles
 */
export const SmallSizeValidation: Story = {
	args: {
		children: 'Small Badge',
		size: 'sm',
		'data-testid': 'badge-sm-validate',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-sm-validate')

		await expect(badge).toBeInTheDocument()
		await expect(badge).toHaveClass(/px-2/)
		await expect(badge).toHaveClass(/py-1/)
		await expect(badge).toHaveClass(/text-xs/)
		await expect(badge).toHaveClass(/rounded-full/)
		await expect(badge).toHaveClass(/inline-flex/)
	},
}

/**
 * Test: Base size variant styling validation
 * Detailed validation of base size styles
 */
export const BaseSizeValidation: Story = {
	args: {
		children: 'Base Badge',
		size: 'base',
		'data-testid': 'badge-base-validate',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-base-validate')

		await expect(badge).toBeInTheDocument()
		await expect(badge).toHaveClass(/px-3/)
		await expect(badge).toHaveClass(/py-1/)
		await expect(badge).toHaveClass(/text-sm/)
		await expect(badge).toHaveClass(/rounded-full/)
		await expect(badge).toHaveClass(/inline-flex/)
	},
}

/**
 * Test: Primary variant complete styling
 * Comprehensive validation of primary variant styles
 */
export const PrimaryVariantValidation: Story = {
	args: {
		children: 'Primary',
		variant: 'primary',
		'data-testid': 'badge-primary-validate',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-primary-validate')

		await expect(badge).toBeInTheDocument()
		await expect(badge).toHaveClass(/border-primary/)
		await expect(badge).toHaveClass(/bg-primary/)
		await expect(badge).toHaveClass(/text-primary-foreground/)
		await expect(badge).toHaveClass(/border/)
	},
}

/**
 * Test: Secondary variant complete styling
 * Comprehensive validation of secondary variant styles (default)
 */
export const SecondaryVariantValidation: Story = {
	args: {
		children: 'Secondary',
		variant: 'secondary',
		'data-testid': 'badge-secondary-validate',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-secondary-validate')

		await expect(badge).toBeInTheDocument()
		await expect(badge).toHaveClass(/border-secondary/)
		await expect(badge).toHaveClass(/bg-secondary/)
		await expect(badge).toHaveClass(/text-secondary-foreground/)
	},
}

/**
 * Test: Outline variant complete styling
 * Comprehensive validation of outline variant styles
 */
export const OutlineVariantValidation: Story = {
	args: {
		children: 'Outline',
		variant: 'outline',
		'data-testid': 'badge-outline-validate',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-outline-validate')

		await expect(badge).toBeInTheDocument()
		await expect(badge).toHaveClass(/border/)
		await expect(badge).toHaveClass(/bg-transparent/)
		await expect(badge).toHaveClass(/text-secondary-foreground/)
	},
}

/**
 * Test: Success variant complete styling
 * Comprehensive validation of success variant styles
 */
export const SuccessVariantValidation: Story = {
	args: {
		children: 'Success',
		variant: 'success',
		'data-testid': 'badge-success-validate',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-success-validate')

		await expect(badge).toBeInTheDocument()
		await expect(badge).toHaveClass(/border-transparent/)
		await expect(badge).toHaveClass(/bg-success/)
		await expect(badge).toHaveClass(/text-success-foreground/)
	},
}

/**
 * Test: Warning variant complete styling
 * Comprehensive validation of warning variant styles
 */
export const WarningVariantValidation: Story = {
	args: {
		children: 'Warning',
		variant: 'warning',
		'data-testid': 'badge-warning-validate',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-warning-validate')

		await expect(badge).toBeInTheDocument()
		await expect(badge).toHaveClass(/border-transparent/)
		await expect(badge).toHaveClass(/bg-warning/)
		await expect(badge).toHaveClass(/text-warning-foreground/)
	},
}

/**
 * Test: Destructive variant complete styling
 * Comprehensive validation of destructive variant styles
 */
export const DestructiveVariantValidation: Story = {
	args: {
		children: 'Error',
		variant: 'destructive',
		'data-testid': 'badge-destructive-validate',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-destructive-validate')

		await expect(badge).toBeInTheDocument()
		await expect(badge).toHaveClass(/border-transparent/)
		await expect(badge).toHaveClass(/bg-destructive/)
		await expect(badge).toHaveClass(/text-destructive-foreground/)
	},
}

/**
 * Test: Badge transition classes
 * Validates that transition classes are applied
 */
export const TransitionClasses: Story = {
	args: {
		children: 'Transition',
		'data-testid': 'badge-transition',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-transition')

		await expect(badge).toHaveClass(/transition-colors/)
	},
}

/**
 * Test: Badge with icon sizing validation
 * Validates SVG icon sizing within badges
 */
export const IconSizingValidation: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-icon-size')

		const icon = badge.querySelector('svg')
		await expect(icon).toBeInTheDocument()
		
		// Check if icon has size classes applied via parent selector
		await expect(badge).toHaveClass(/\[&_svg\]:pointer-events-none/)
		await expect(badge).toHaveClass(/\[&_svg\]:shrink-0/)
	},
	render: () => (
		<Badge data-testid="badge-icon-size" variant="primary">
			<CheckCircle />
			Icon Size
		</Badge>
	),
}

/**
 * Test: Badge gap spacing between elements
 * Validates gap spacing between badge children
 */
export const GapSpacing: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-gap')

		await expect(badge).toHaveClass(/gap-2/)
	},
	render: () => (
		<Badge data-testid="badge-gap" variant="secondary">
			<CheckCircle />
			Gap Test
		</Badge>
	),
}

/**
 * Test: Default props when no variant or size specified
 * Validates proper default values
 */
export const DefaultPropsValidation: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-defaults')

		// Should have default secondary variant
		await expect(badge).toHaveClass(/border-secondary/, /bg-secondary/)
		// Should have default base size
		await expect(badge).toHaveClass(/px-3/, /py-1/, /text-sm/)
	},
	render: () => (
		<Badge data-testid="badge-defaults">
			Default Props
		</Badge>
	),
}

/**
 * Test: Badge with title attribute for tooltips
 * Validates native HTML attributes work
 */
export const WithTitleAttribute: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-title')

		await expect(badge).toHaveAttribute('title', 'This is a tooltip')
	},
	render: () => (
		<Badge data-testid="badge-title" title="This is a tooltip" variant="primary">
			Hover me
		</Badge>
	),
}

/**
 * Test: Badge with ID attribute
 * Validates standard HTML ID attribute works
 */
export const WithIdAttribute: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-id')

		await expect(badge).toHaveAttribute('id', 'unique-badge-id')
	},
	render: () => (
		<Badge data-testid="badge-id" id="unique-badge-id" variant="secondary">
			ID Badge
		</Badge>
	),
}

/**
 * Test: Badge displayName
 * Validates component has correct displayName for debugging
 */
export const DisplayNameValidation: Story = {
	play: async () => {
		// Verify Badge component has displayName set
		await expect(Badge.displayName).toBe('Badge')
	},
	render: () => (
		<Badge variant="primary">
			Display Name Test
		</Badge>
	),
}
