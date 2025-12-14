import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Badge } from './index'
import { CheckCircle, AlertTriangle } from 'lucide-react'

describe('Badge Component', () => {
	describe('Rendering', () => {
		it('should render without crashing', () => {
			const { container } = render(<Badge>Test</Badge>)
			expect(container.firstChild).toBeInTheDocument()
		})

		it('should render children content', () => {
			const { getByText } = render(<Badge>Test Badge</Badge>)
			expect(getByText('Test Badge')).toBeInTheDocument()
		})

		it('should render as a div element', () => {
			const { container } = render(<Badge>Test</Badge>)
			expect(container.firstChild?.nodeName).toBe('DIV')
		})

		it('should render with data-slot attribute', () => {
			const { container } = render(<Badge>Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge).toHaveAttribute('data-slot', 'badge')
		})

		it('should render empty badge without errors', () => {
			const { container } = render(<Badge />)
			expect(container.firstChild).toBeInTheDocument()
		})

		it('should render with null children', () => {
			const { container } = render(<Badge>{null}</Badge>)
			expect(container.firstChild).toBeInTheDocument()
		})

		it('should render with undefined children', () => {
			const { container } = render(<Badge>{undefined}</Badge>)
			expect(container.firstChild).toBeInTheDocument()
		})
	})

	describe('Variant prop', () => {
		it('should apply primary variant classes', () => {
			const { container } = render(<Badge variant="primary">Primary</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('bg-primary')
			expect(badge.className).toContain('text-primary-foreground')
		})

		it('should apply secondary variant classes', () => {
			const { container } = render(<Badge variant="secondary">Secondary</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('bg-secondary')
			expect(badge.className).toContain('text-secondary-foreground')
		})

		it('should apply outline variant classes', () => {
			const { container } = render(<Badge variant="outline">Outline</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('bg-transparent')
		})

		it('should apply success variant classes', () => {
			const { container } = render(<Badge variant="success">Success</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('bg-success')
			expect(badge.className).toContain('text-success-foreground')
		})

		it('should apply warning variant classes', () => {
			const { container } = render(<Badge variant="warning">Warning</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('bg-warning')
			expect(badge.className).toContain('text-warning-foreground')
		})

		it('should apply destructive variant classes', () => {
			const { container } = render(<Badge variant="destructive">Error</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('bg-destructive')
			expect(badge.className).toContain('text-destructive-foreground')
		})

		it('should use secondary variant by default when no variant specified', () => {
			const { container } = render(<Badge>Default</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('bg-secondary')
		})
	})

	describe('Size prop', () => {
		it('should apply small size classes', () => {
			const { container } = render(<Badge size="sm">Small</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('px-2')
			expect(badge.className).toContain('text-xs')
		})

		it('should apply base size classes', () => {
			const { container } = render(<Badge size="base">Base</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('px-3')
			expect(badge.className).toContain('text-sm')
		})

		it('should use base size by default when no size specified', () => {
			const { container } = render(<Badge>Default</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('px-3')
			expect(badge.className).toContain('text-sm')
		})
	})

	describe('Combined variant and size props', () => {
		it('should apply primary variant with small size', () => {
			const { container } = render(<Badge variant="primary" size="sm">Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('bg-primary')
			expect(badge.className).toContain('px-2')
			expect(badge.className).toContain('text-xs')
		})

		it('should apply success variant with base size', () => {
			const { container } = render(<Badge variant="success" size="base">Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('bg-success')
			expect(badge.className).toContain('px-3')
			expect(badge.className).toContain('text-sm')
		})

		it('should apply outline variant with small size', () => {
			const { container } = render(<Badge variant="outline" size="sm">Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('bg-transparent')
			expect(badge.className).toContain('px-2')
		})
	})

	describe('ClassName prop', () => {
		it('should accept custom className', () => {
			const { container } = render(<Badge className="custom-class">Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('custom-class')
		})

		it('should merge custom className with variant classes', () => {
			const { container } = render(
				<Badge className="shadow-lg" variant="primary">Test</Badge>
			)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('shadow-lg')
			expect(badge.className).toContain('bg-primary')
		})

		it('should handle multiple custom classes', () => {
			const { container } = render(
				<Badge className="custom-1 custom-2 custom-3">Test</Badge>
			)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('custom-1')
			expect(badge.className).toContain('custom-2')
			expect(badge.className).toContain('custom-3')
		})

		it('should handle empty className string', () => {
			const { container } = render(<Badge className="">Test</Badge>)
			expect(container.firstChild).toBeInTheDocument()
		})

		it('should handle undefined className', () => {
			const { container } = render(<Badge className={undefined}>Test</Badge>)
			expect(container.firstChild).toBeInTheDocument()
		})
	})

	describe('HTML attributes', () => {
		it('should accept data-testid attribute', () => {
			const { getByTestId } = render(<Badge data-testid="test-badge">Test</Badge>)
			expect(getByTestId('test-badge')).toBeInTheDocument()
		})

		it('should accept id attribute', () => {
			const { container } = render(<Badge id="badge-id">Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge).toHaveAttribute('id', 'badge-id')
		})

		it('should accept title attribute', () => {
			const { container } = render(<Badge title="Tooltip text">Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge).toHaveAttribute('title', 'Tooltip text')
		})

		it('should accept custom data attributes', () => {
			const { container } = render(
				<Badge data-custom="value" data-id="123">Test</Badge>
			)
			const badge = container.firstChild as HTMLElement
			expect(badge).toHaveAttribute('data-custom', 'value')
			expect(badge).toHaveAttribute('data-id', '123')
		})

		it('should accept onClick handler', () => {
			let clicked = false
			const handleClick = () => { clicked = true }
			const { container } = render(<Badge onClick={handleClick}>Test</Badge>)
			const badge = container.firstChild as HTMLElement
			badge.click()
			expect(clicked).toBe(true)
		})

		it('should accept onMouseEnter handler', () => {
			let entered = false
			const handleMouseEnter = () => { entered = true }
			const { container } = render(<Badge onMouseEnter={handleMouseEnter}>Test</Badge>)
			const badge = container.firstChild as HTMLElement
			badge.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }))
			expect(entered).toBe(true)
		})

		it('should accept style attribute', () => {
			const { container } = render(
				<Badge style={{ backgroundColor: 'red' }}>Test</Badge>
			)
			const badge = container.firstChild as HTMLElement
			expect(badge.style.backgroundColor).toBe('red')
		})

		it('should accept tabIndex attribute', () => {
			const { container } = render(<Badge tabIndex={0}>Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge).toHaveAttribute('tabIndex', '0')
		})
	})

	describe('ARIA attributes', () => {
		it('should accept aria-label', () => {
			const { container } = render(<Badge aria-label="Status">Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge).toHaveAttribute('aria-label', 'Status')
		})

		it('should accept role attribute', () => {
			const { container } = render(<Badge role="status">Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge).toHaveAttribute('role', 'status')
		})

		it('should accept aria-live', () => {
			const { container } = render(<Badge aria-live="polite">Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge).toHaveAttribute('aria-live', 'polite')
		})

		it('should accept aria-describedby', () => {
			const { container } = render(<Badge aria-describedby="desc">Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge).toHaveAttribute('aria-describedby', 'desc')
		})
	})

	describe('Children types', () => {
		it('should render string children', () => {
			const { getByText } = render(<Badge>String content</Badge>)
			expect(getByText('String content')).toBeInTheDocument()
		})

		it('should render number children', () => {
			const { getByText } = render(<Badge>{42}</Badge>)
			expect(getByText('42')).toBeInTheDocument()
		})

		it('should render React element children', () => {
			const { getByText } = render(
				<Badge>
					<span>Nested element</span>
				</Badge>
			)
			expect(getByText('Nested element')).toBeInTheDocument()
		})

		it('should render icon children', () => {
			const { container } = render(
				<Badge>
					<CheckCircle />
					With Icon
				</Badge>
			)
			const svg = container.querySelector('svg')
			expect(svg).toBeInTheDocument()
		})

		it('should render multiple icon children', () => {
			const { container } = render(
				<Badge>
					<CheckCircle />
					<AlertTriangle />
					Multiple Icons
				</Badge>
			)
			const svgs = container.querySelectorAll('svg')
			expect(svgs.length).toBe(2)
		})

		it('should render mixed content (icons and text)', () => {
			const { getByText, container } = render(
				<Badge>
					<CheckCircle />
					Success
				</Badge>
			)
			expect(getByText('Success')).toBeInTheDocument()
			expect(container.querySelector('svg')).toBeInTheDocument()
		})

		it('should render nested HTML elements', () => {
			const { getByText } = render(
				<Badge>
					<strong>Bold</strong> <em>Italic</em>
				</Badge>
			)
			expect(getByText('Bold')).toBeInTheDocument()
			expect(getByText('Italic')).toBeInTheDocument()
		})

		it('should render array of children', () => {
			const { getByText } = render(
				<Badge>
					{['First', ' ', 'Second']}
				</Badge>
			)
			expect(getByText(/First Second/)).toBeInTheDocument()
		})
	})

	describe('Ref forwarding', () => {
		it('should forward ref to div element', () => {
			const ref = { current: null as HTMLDivElement | null }
			render(<Badge ref={ref}>Test</Badge>)
			expect(ref.current).toBeInstanceOf(HTMLDivElement)
		})

		it('should allow ref to access DOM methods', () => {
			const ref = { current: null as HTMLDivElement | null }
			render(<Badge ref={ref}>Test</Badge>)
			expect(ref.current?.tagName).toBe('DIV')
			expect(typeof ref.current?.focus).toBe('function')
		})

		it('should allow multiple refs through callback ref', () => {
			let callbackRef: HTMLDivElement | null = null
			const setCallbackRef = (el: HTMLDivElement | null) => {
				callbackRef = el
			}
			render(<Badge ref={setCallbackRef}>Test</Badge>)
			expect(callbackRef).toBeInstanceOf(HTMLDivElement)
		})
	})

	describe('Component displayName', () => {
		it('should have displayName set for debugging', () => {
			expect(Badge.displayName).toBe('Badge')
		})
	})

	describe('Base CSS classes', () => {
		it('should always include inline-flex class', () => {
			const { container } = render(<Badge>Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('inline-flex')
		})

		it('should always include items-center class', () => {
			const { container } = render(<Badge>Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('items-center')
		})

		it('should always include rounded-full class', () => {
			const { container } = render(<Badge>Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('rounded-full')
		})

		it('should always include border class', () => {
			const { container } = render(<Badge>Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('border')
		})

		it('should always include font-medium class', () => {
			const { container } = render(<Badge>Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('font-medium')
		})

		it('should always include transition-colors class', () => {
			const { container } = render(<Badge>Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('transition-colors')
		})

		it('should always include gap-2 class', () => {
			const { container } = render(<Badge>Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge.className).toContain('gap-2')
		})
	})

	describe('Edge cases and error handling', () => {
		it('should handle very long text content', () => {
			const longText = 'a'.repeat(1000)
			const { getByText } = render(<Badge>{longText}</Badge>)
			expect(getByText(longText)).toBeInTheDocument()
		})

		it('should handle special characters in content', () => {
			const specialText = '<script>alert("xss")</script>'
			const { container } = render(<Badge>{specialText}</Badge>)
			// React should escape the content
			expect(container.textContent).toContain('<script>')
			expect(container.querySelector('script')).not.toBeInTheDocument()
		})

		it('should handle unicode and emoji', () => {
			const { getByText } = render(<Badge>🚀 ⚡ Unicode</Badge>)
			expect(getByText(/🚀 ⚡ Unicode/)).toBeInTheDocument()
		})

		it('should handle boolean false as children', () => {
			const { container } = render(<Badge>{false}</Badge>)
			expect(container.firstChild).toBeInTheDocument()
		})

		it('should handle boolean true as children', () => {
			const { container } = render(<Badge>{true}</Badge>)
			expect(container.firstChild).toBeInTheDocument()
		})

		it('should handle zero as children', () => {
			const { getByText } = render(<Badge>{0}</Badge>)
			expect(getByText('0')).toBeInTheDocument()
		})

		it('should handle empty string as children', () => {
			const { container } = render(<Badge>{''}</Badge>)
			expect(container.firstChild).toBeInTheDocument()
		})
	})

	describe('Props spreading', () => {
		it('should spread additional props to div element', () => {
			const { container } = render(
				<Badge data-custom-prop="value">Test</Badge>
			)
			const badge = container.firstChild as HTMLElement
			expect(badge).toHaveAttribute('data-custom-prop', 'value')
		})

		it('should handle multiple spread props', () => {
			const props = {
				'data-id': '123',
				'data-name': 'test',
				'aria-label': 'Test badge'
			}
			const { container } = render(<Badge {...props}>Test</Badge>)
			const badge = container.firstChild as HTMLElement
			expect(badge).toHaveAttribute('data-id', '123')
			expect(badge).toHaveAttribute('data-name', 'test')
			expect(badge).toHaveAttribute('aria-label', 'Test badge')
		})
	})

	describe('Snapshot consistency', () => {
		it('should render consistently with same props', () => {
			const { container: container1 } = render(
				<Badge variant="primary" size="sm">Test</Badge>
			)
			const { container: container2 } = render(
				<Badge variant="primary" size="sm">Test</Badge>
			)
			expect(container1.innerHTML).toBe(container2.innerHTML)
		})

		it('should render differently with different props', () => {
			const { container: container1 } = render(
				<Badge variant="primary">Test</Badge>
			)
			const { container: container2 } = render(
				<Badge variant="secondary">Test</Badge>
			)
			expect(container1.innerHTML).not.toBe(container2.innerHTML)
		})
	})
})