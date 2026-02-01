/**
 * Quality Assurance Test Suite
 * This file ensures all pages meet our quality standards
 */
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

// Import all pages
import Home from '../pages/index';
import About from '../pages/about';
import Contact from '../pages/contact';
import Properties from '../pages/properties';
import Resources from '../pages/resources';

expect.extend(toHaveNoViolations);

// Define all pages that need quality testing
const pages = [
  { name: 'Home', component: Home },
  { name: 'About', component: About },
  { name: 'Contact', component: Contact },
  { name: 'Properties', component: Properties },
  { name: 'Resources', component: Resources },
];

describe('Site-wide Quality Assurance', () => {
  describe('All Pages - Accessibility Standards', () => {
    pages.forEach(({ name, component: PageComponent }) => {
      describe(`${name} Page`, () => {
        it('passes accessibility audit', async () => {
          const { container } = render(<PageComponent />);
          const results = await axe(container);
          expect(results).toHaveNoViolations();
        });

        it('has proper landmark structure', () => {
          render(<PageComponent />);
          const main = document.querySelector('main');
          const nav = document.querySelector('nav');
          const footer = document.querySelector('footer');
          
          expect(main).toBeInTheDocument();
          expect(nav).toBeInTheDocument();
          expect(footer).toBeInTheDocument();
        });

        it('has proper heading hierarchy', () => {
          render(<PageComponent />);
          const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
          
          if (headings.length > 0) {
            // First heading should be H1
            expect(headings[0].tagName).toBe('H1');
            
            // Should have exactly one H1
            const h1Count = headings.filter(h => h.tagName === 'H1').length;
            expect(h1Count).toBe(1);
            
            // Heading levels should not skip (no h1 to h3 without h2)
            const levels = headings.map(h => parseInt(h.tagName.charAt(1)));
            for (let i = 1; i < levels.length; i++) {
              if (levels[i] > levels[i-1]) {
                expect(levels[i] - levels[i-1]).toBeLessThanOrEqual(1);
              }
            }
          }
        });

        it('has accessible images', () => {
          render(<PageComponent />);
          const images = document.querySelectorAll('img');
          
          images.forEach(img => {
            expect(img).toHaveAttribute('alt');
            const altText = img.getAttribute('alt');
            expect(altText).toBeTruthy(); // Should not be empty
          });
        });

        it('has accessible links', () => {
          render(<PageComponent />);
          const links = document.querySelectorAll('a');
          
          links.forEach(link => {
            const linkText = link.textContent?.trim() || 
                            link.getAttribute('aria-label') || 
                            link.getAttribute('title');
            expect(linkText).toBeTruthy();
          });
        });

        it('renders without errors', () => {
          const { container } = render(<PageComponent />);
          expect(container).toBeTruthy();
          expect(container.children.length).toBeGreaterThan(0);
        });
      });
    });
  });

  describe('All Pages - SEO Standards', () => {
    pages.forEach(({ name, component: PageComponent }) => {
      it(`${name} page has proper document structure`, () => {
        render(<PageComponent />);
        
        // Should have exactly one H1
        const h1Elements = document.querySelectorAll('h1');
        expect(h1Elements.length).toBe(1);
        
        // H1 should have content
        expect(h1Elements[0].textContent?.trim()).toBeTruthy();
        
        // Should have semantic structure
        const semanticElements = document.querySelectorAll(
          'main, section, article, nav, header, footer'
        );
        expect(semanticElements.length).toBeGreaterThan(0);
      });
    });
  });

  describe('All Pages - Performance Standards', () => {
    pages.forEach(({ name, component: PageComponent }) => {
      it(`${name} page has no console errors during render`, () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
        
        render(<PageComponent />);
        
        // Filter out known acceptable warnings (like Next.js Link warnings)
        const actualErrors = consoleSpy.mock.calls.filter(call => {
          const message = call[0];
          return typeof message === 'string' && 
                 !message.includes('Warning: An update to') &&
                 !message.includes('was not wrapped in act');
        });
        
        expect(actualErrors.length).toBe(0);
        
        consoleSpy.mockRestore();
      });

      it(`${name} page has proper focus management`, () => {
        render(<PageComponent />);
        
        // Check that interactive elements are focusable
        const interactiveElements = document.querySelectorAll(
          'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        interactiveElements.forEach(element => {
          // Should not have tabindex -1 unless it's intentionally non-focusable
          if (element.hasAttribute('tabindex')) {
            const tabIndex = element.getAttribute('tabindex');
            expect(tabIndex).not.toBe('-1');
          }
        });
      });
    });
  });
});

describe('Cross-Page Consistency', () => {
  it('all pages have consistent header structure', () => {
    pages.forEach(({ component: PageComponent }) => {
      render(<PageComponent />);
      const nav = document.querySelector('nav');
      expect(nav).toBeInTheDocument();
    });
  });

  it('all pages have consistent footer structure', () => {
    pages.forEach(({ component: PageComponent }) => {
      render(<PageComponent />);
      const footer = document.querySelector('footer');
      expect(footer).toBeInTheDocument();
    });
  });
});