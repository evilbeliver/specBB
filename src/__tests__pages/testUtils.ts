import { screen } from '@testing-library/react';
import { axe } from 'jest-axe';

/**
 * Comprehensive quality test suite for all pages
 * Ensures consistent accessibility, SEO, and performance standards
 */
export const runQualityTests = async (container: HTMLElement, pageName: string) => {
  // Accessibility Tests
  describe(`${pageName} - Accessibility Quality`, () => {
    it('has no accessibility violations', async () => {
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper heading hierarchy', () => {
      const headings = Array.from(container.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      if (headings.length > 0) {
        expect(headings[0].tagName).toBe('H1');
        
        // Ensure no heading levels are skipped
        const levels = headings.map(h => parseInt(h.tagName.charAt(1)));
        for (let i = 1; i < levels.length; i++) {
          expect(levels[i] - levels[i-1]).toBeLessThanOrEqual(1);
        }
      }
    });

    it('has proper landmark structure', () => {
      expect(screen.getByRole('main')).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('has accessible images', () => {
      const images = screen.getAllByRole('img');
      images.forEach(img => {
        expect(img).toHaveAttribute('alt');
        const altText = img.getAttribute('alt');
        expect(altText).not.toBe('');
      });
    });

    it('has accessible links', () => {
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        const linkText = link.textContent || link.getAttribute('aria-label');
        expect(linkText).toBeTruthy();
      });
    });
  });

  // Performance & Quality Tests
  describe(`${pageName} - Performance Quality`, () => {
    it('renders without errors', () => {
      expect(container).toBeTruthy();
      expect(container.children.length).toBeGreaterThan(0);
    });

    it('has semantic HTML structure', () => {
      const semanticElements = container.querySelectorAll(
        'main, section, article, nav, header, footer, aside'
      );
      expect(semanticElements.length).toBeGreaterThan(0);
    });

    it('has no empty headings', () => {
      const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach(heading => {
        expect(heading.textContent?.trim()).toBeTruthy();
      });
    });

    it('has proper focus management', () => {
      const focusableElements = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      // Ensure focusable elements exist for interactive pages
      if (focusableElements.length > 0) {
        focusableElements.forEach(element => {
          expect(element).not.toHaveAttribute('tabindex', '-1');
        });
      }
    });
  });
};

/**
 * Test for proper responsive design elements
 */
export const testResponsiveDesign = (container: HTMLElement) => {
  // Check for responsive images
  const images = container.querySelectorAll('img');
  images.forEach(img => {
    // Images should have proper sizing attributes or CSS classes
    const hasResponsiveClass = img.className.includes('responsive') || 
                               img.style.maxWidth === '100%' ||
                               img.hasAttribute('sizes');
    expect(hasResponsiveClass || img.getAttribute('width') || img.getAttribute('height')).toBeTruthy();
  });
};

/**
 * Test for proper SEO elements
 */
export const testSEOElements = () => {
  // These tests verify the structure exists
  // Next.js handles the actual meta tag injection
  
  it('has proper document structure for SEO', () => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    expect(headings.length).toBeGreaterThan(0);
    
    // Should have exactly one H1
    const h1Elements = document.querySelectorAll('h1');
    expect(h1Elements.length).toBe(1);
  });
};

/**
 * Utility to test form accessibility (when forms are present)
 */
export const testFormAccessibility = (container: HTMLElement) => {
  const forms = container.querySelectorAll('form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
      // Each input should have a label or aria-label
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (id) {
        const label = form.querySelector(`label[for="${id}"]`);
        expect(label || ariaLabel || ariaLabelledBy).toBeTruthy();
      } else {
        expect(ariaLabel || ariaLabelledBy).toBeTruthy();
      }
    });
  });
};