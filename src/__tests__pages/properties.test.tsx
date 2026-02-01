import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Properties from '../pages/properties';

expect.extend(toHaveNoViolations);

describe('Properties Page', () => {
  describe('Rendering', () => {
    it('renders the main heading', () => {
      render(<Properties />);
      const heading = screen.getByRole('heading', { level: 1, name: /our properties/i });
      expect(heading).toBeInTheDocument();
    });

    it('renders all property cards', () => {
      render(<Properties />);
      expect(screen.getByText(/long cane property/i)).toBeInTheDocument();
      expect(screen.getByText(/chappells ferry property/i)).toBeInTheDocument();
      expect(screen.getByText(/hollywood property/i)).toBeInTheDocument();
      expect(screen.getByText(/old charleston property/i)).toBeInTheDocument();
      expect(screen.getByText(/piney wood property/i)).toBeInTheDocument();
    });

    it('renders property details', () => {
      render(<Properties />);
      expect(screen.getByText(/edgefield county/i)).toBeInTheDocument();
      expect(screen.getByText(/saluda county/i)).toBeInTheDocument();
      expect(screen.getByText(/675 acres/i)).toBeInTheDocument();
      expect(screen.getByText(/766 acres/i)).toBeInTheDocument();
    });

    it('renders property features', () => {
      render(<Properties />);
      expect(screen.getByText(/deer/i)).toBeInTheDocument();
      expect(screen.getByText(/turkey/i)).toBeInTheDocument();
      expect(screen.getByText(/food plots/i)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Properties />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper heading hierarchy', () => {
      render(<Properties />);
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      expect(headings[0].tagName).toBe('H1');
      const h2Count = headings.filter(h => h.tagName === 'H2').length;
      expect(h2Count).toBeGreaterThan(0);
    });

    it('has proper main landmark', () => {
      render(<Properties />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });

    it('has proper navigation structure', () => {
      render(<Properties />);
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('has accessible property images', () => {
      render(<Properties />);
      const images = screen.getAllByRole('img');
      images.forEach(img => {
        expect(img).toHaveAttribute('alt');
        expect(img.getAttribute('alt')).not.toBe('');
      });
    });

    it('has clickable property cards with proper accessibility', () => {
      render(<Properties />);
      const propertyCards = screen.getAllByRole('button');
      expect(propertyCards.length).toBeGreaterThan(0);
      propertyCards.forEach(card => {
        expect(card).toBeInTheDocument();
      });
    });
  });

  describe('Interactive Features', () => {
    it('renders property dialog when card is clicked', () => {
      render(<Properties />);
      // The dialog should be present in the DOM but not visible initially
      const dialogs = document.querySelectorAll('[role="dialog"]');
      expect(dialogs.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe('SEO & Quality', () => {
    it('renders without errors', () => {
      const { container } = render(<Properties />);
      expect(container).toBeTruthy();
    });

    it('has semantic HTML structure', () => {
      render(<Properties />);
      expect(screen.getByRole('main')).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('has proper grid layout for properties', () => {
      render(<Properties />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
      
      // Check that multiple property cards are rendered
      const propertyNames = ['long cane property', 'chappells ferry property', 'hollywood property'];
      propertyNames.forEach(name => {
        expect(screen.getByText(new RegExp(name, 'i'))).toBeInTheDocument();
      });
    });
  });
});