import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Contact from '../pages/contact';

expect.extend(toHaveNoViolations);

describe('Contact Page', () => {
  describe('Rendering', () => {
    it('renders the main heading', () => {
      render(<Contact />);
      const heading = screen.getByRole('heading', { level: 1, name: /contact us/i });
      expect(heading).toBeInTheDocument();
    });

    it('renders contact information sections', () => {
      render(<Contact />);
      expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /visit us/i })).toBeInTheDocument();
    });

    it('renders contact details', () => {
      render(<Contact />);
      expect(screen.getByText(/buckandbeard@gmail.com/i)).toBeInTheDocument();
      expect(screen.getByText(/\(803\) 727-5111/i)).toBeInTheDocument();
    });

    it('renders contact form if present', () => {
      render(<Contact />);
      // Check for form elements or contact information
      const contactSection = screen.getByRole('main');
      expect(contactSection).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Contact />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper heading hierarchy', () => {
      render(<Contact />);
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      expect(headings[0].tagName).toBe('H1');
      const h2Count = headings.filter(h => h.tagName === 'H2').length;
      expect(h2Count).toBeGreaterThan(0);
    });

    it('has proper main landmark', () => {
      render(<Contact />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });

    it('has proper navigation structure', () => {
      render(<Contact />);
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('has accessible contact links', () => {
      render(<Contact />);
      const emailLinks = screen.getAllByRole('link', { name: /buckandbeard@gmail.com/i });
      const phoneLinks = screen.getAllByRole('link', { name: /\(803\) 727-5111/i });
      
      emailLinks.forEach(link => {
        expect(link).toHaveAttribute('href', 'mailto:buckandbeard@gmail.com');
      });
      
      phoneLinks.forEach(link => {
        expect(link).toHaveAttribute('href', 'tel:+18037275111');
      });
    });
  });

  describe('SEO & Quality', () => {
    it('renders without errors', () => {
      const { container } = render(<Contact />);
      expect(container).toBeTruthy();
    });

    it('has semantic HTML structure', () => {
      render(<Contact />);
      expect(screen.getByRole('main')).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  });
});