import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Resources from '../pages/resources';

expect.extend(toHaveNoViolations);

describe('Resources Page', () => {
  describe('Rendering', () => {
    it('renders the main heading', () => {
      render(<Resources />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });

    it('renders main content sections', () => {
      render(<Resources />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Resources />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper heading hierarchy', () => {
      render(<Resources />);
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      if (headings.length > 0) {
        expect(headings[0].tagName).toBe('H1');
      }
    });

    it('has proper main landmark', () => {
      render(<Resources />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });

    it('has proper navigation structure', () => {
      render(<Resources />);
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('has accessible links if present', () => {
      render(<Resources />);
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        // Ensure links have accessible names
        const linkText = link.textContent || link.getAttribute('aria-label');
        expect(linkText).toBeTruthy();
      });
    });
  });

  describe('SEO & Quality', () => {
    it('renders without errors', () => {
      const { container } = render(<Resources />);
      expect(container).toBeTruthy();
    });

    it('has semantic HTML structure', () => {
      render(<Resources />);
      expect(screen.getByRole('main')).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  });
});