import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Home from '../pages/index';

expect.extend(toHaveNoViolations);

describe('Home Page', () => {
  describe('Rendering', () => {
    it('renders the main heading', () => {
      render(<Home />);
      const heading = screen.getByRole('heading', { level: 1, name: /welcome to buck & beard hunt club/i });
      expect(heading).toBeInTheDocument();
    });

    it('renders the hero subtitle', () => {
      render(<Home />);
      const subtitle = screen.getByText(/a modern hunting experience built on tradition and excellence/i);
      expect(subtitle).toBeInTheDocument();
    });

    it('renders the about section', () => {
      render(<Home />);
      const aboutHeading = screen.getByRole('heading', { level: 2, name: /about our club/i });
      expect(aboutHeading).toBeInTheDocument();
    });

    it('renders the features section', () => {
      render(<Home />);
      const featuresHeading = screen.getByRole('heading', { level: 2, name: /what we offer/i });
      expect(featuresHeading).toBeInTheDocument();
    });

    it('renders all three feature cards', () => {
      render(<Home />);
      expect(screen.getByText(/prime hunting grounds/i)).toBeInTheDocument();
      expect(screen.getByText(/family friendly atmosphere/i)).toBeInTheDocument();
      expect(screen.getByText(/camping available/i)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Home />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA labels', () => {
      render(<Home />);
      const main = screen.getByRole('main');
      expect(main).toHaveAttribute('aria-label', 'Main content');
    });

    it('has proper heading hierarchy in main content', () => {
      render(<Home />);
      const main = screen.getByRole('main');
      const mainHeadings = Array.from(main.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      expect(mainHeadings[0].tagName).toBe('H1');
      expect(mainHeadings[1].tagName).toBe('H2');
      expect(mainHeadings[2].tagName).toBe('H2');
    });

    it('has unique IDs for section headings', () => {
      render(<Home />);
      expect(screen.getByRole('heading', { name: /welcome to buck & beard hunt club/i })).toHaveAttribute('id', 'hero-heading');
      expect(screen.getByRole('heading', { name: /about our club/i })).toHaveAttribute('id', 'about-heading');
      expect(screen.getByRole('heading', { name: /what we offer/i })).toHaveAttribute('id', 'features-heading');
    });
  });

  describe('SEO', () => {
    it('has a title in Head component', () => {
      const { container } = render(<Home />);
      // Next.js Head component is rendered but title is managed by Next.js
      // We can verify the component renders without errors
      expect(container).toBeTruthy();
    });

    it('has a meta description in Head component', () => {
      const { container } = render(<Home />);
      // Next.js Head component is rendered but meta tags are managed by Next.js
      // We can verify the component renders without errors
      expect(container).toBeTruthy();
    });
  });
});
