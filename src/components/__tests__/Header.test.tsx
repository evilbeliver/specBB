import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Header from '../Header';

expect.extend(toHaveNoViolations);

describe('Header Component', () => {
  describe('Rendering', () => {
    it('renders the logo', () => {
      render(<Header />);
      const logo = screen.getByText(/buck & beard/i);
      expect(logo).toBeInTheDocument();
    });

    it('renders all navigation links', () => {
      render(<Header />);
      expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /^about$/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /^properties$/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /^hunts$/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /^contact$/i })).toBeInTheDocument();
    });

    it('renders as a banner landmark', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    it('renders navigation with proper ARIA label', () => {
      render(<Header />);
      const nav = screen.getByRole('navigation', { name: /main navigation/i });
      expect(nav).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Header />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('logo link has proper aria-label', () => {
      render(<Header />);
      const logoLink = screen.getByRole('link', { name: /buck & beard hunt club - home/i });
      expect(logoLink).toBeInTheDocument();
    });

    it('current page link has aria-current attribute', () => {
      render(<Header />);
      const homeLink = screen.getByRole('link', { name: /^home$/i });
      expect(homeLink).toHaveAttribute('aria-current', 'page');
    });
  });

  describe('Navigation Links', () => {
    it('all links have proper href attributes', () => {
      render(<Header />);
      expect(screen.getByRole('link', { name: /^home$/i })).toHaveAttribute('href', '/');
      expect(screen.getByRole('link', { name: /^about$/i })).toHaveAttribute('href', '/about');
      expect(screen.getByRole('link', { name: /^properties$/i })).toHaveAttribute('href', '/properties');
      expect(screen.getByRole('link', { name: /^hunts$/i })).toHaveAttribute('href', '/hunts');
      expect(screen.getByRole('link', { name: /^contact$/i })).toHaveAttribute('href', '/contact');
    });
  });
});
