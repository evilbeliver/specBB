import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import About from '../pages/about';

expect.extend(toHaveNoViolations);

describe('About Page', () => {
  describe('Rendering', () => {
    it('renders the main heading', () => {
      render(<About />);
      const heading = screen.getByRole('heading', { level: 1, name: /about buck & beard hunt club/i });
      expect(heading).toBeInTheDocument();
    });

    it('renders all major sections', () => {
      render(<About />);
      expect(screen.getByRole('heading', { name: /our mission/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /our values/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /our properties/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /frequently asked questions/i })).toBeInTheDocument();
    });

    it('renders all six value cards', () => {
      render(<About />);
      expect(screen.getByText(/safety first/i)).toBeInTheDocument();
      expect(screen.getByText(/community/i)).toBeInTheDocument();
      expect(screen.getByText(/conservation/i)).toBeInTheDocument();
      expect(screen.getByText(/family oriented/i)).toBeInTheDocument();
      expect(screen.getByText(/education/i)).toBeInTheDocument();
      expect(screen.getByText(/quality grounds/i)).toBeInTheDocument();
    });

    it('renders contact information', () => {
      render(<About />);
      expect(screen.getByText(/buckandbeard@gmail.com/i)).toBeInTheDocument();
      expect(screen.getByText(/\(803\) 727-5111/i)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<About />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper heading hierarchy', () => {
      render(<About />);
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      expect(headings[0].tagName).toBe('H1');
      const h2Count = headings.filter(h => h.tagName === 'H2').length;
      expect(h2Count).toBeGreaterThan(0);
    });

    it('has proper main landmark', () => {
      render(<About />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });

    it('has proper navigation structure', () => {
      render(<About />);
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('has accessible links', () => {
      render(<About />);
      const emailLink = screen.getByRole('link', { name: /buckandbeard@gmail.com/i });
      const phoneLink = screen.getByRole('link', { name: /\(803\) 727-5111/i });
      expect(emailLink).toHaveAttribute('href', 'mailto:buckandbeard@gmail.com');
      expect(phoneLink).toHaveAttribute('href', 'tel:+18037275111');
    });
  });

  describe('SEO & Quality', () => {
    it('renders without errors', () => {
      const { container } = render(<About />);
      expect(container).toBeTruthy();
    });

    it('has semantic HTML structure', () => {
      render(<About />);
      expect(screen.getByRole('main')).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  });
});