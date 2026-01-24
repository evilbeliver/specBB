import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Header from '../Header';

expect.extend(toHaveNoViolations);

describe('Header Component', () => {
  describe('Rendering', () => {
    it('renders the logo', () => {
      render(<Header />);
      const logo = screen.getAllByText(/buck & beard/i)[0];
      expect(logo).toBeInTheDocument();
    });

    it('renders all navigation links on desktop', () => {
      render(<Header />);
      // Check that navigation items exist (they're in the DOM but may be hidden on mobile)
      expect(screen.getByText(/^home$/i)).toBeInTheDocument();
      expect(screen.getByText(/^about$/i)).toBeInTheDocument();
      expect(screen.getByText(/^properties$/i)).toBeInTheDocument();
      expect(screen.getByText(/^hunts$/i)).toBeInTheDocument();
      expect(screen.getByText(/^contact$/i)).toBeInTheDocument();
    });

    it('renders mobile menu button', () => {
      render(<Header />);
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
      expect(menuButton).toBeInTheDocument();
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

  describe('Mobile Menu', () => {
    it('opens drawer when menu button is clicked', () => {
      render(<Header />);
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
      
      fireEvent.click(menuButton);
      
      // Drawer should contain navigation items
      const drawerLogo = screen.getAllByText(/buck & beard/i);
      expect(drawerLogo.length).toBeGreaterThan(1); // One in header, one in drawer
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
      const logoDiv = screen.getByLabelText(/buck & beard hunt club - home/i);
      expect(logoDiv).toBeInTheDocument();
    });

    it('current page link has aria-current attribute', () => {
      render(<Header />);
      const homeLinks = screen.getAllByRole('link', { name: /^home$/i });
      // At least one home link should have aria-current
      const hasAriaCurrent = homeLinks.some(link => link.getAttribute('aria-current') === 'page');
      expect(hasAriaCurrent).toBe(true);
    });
  });

  describe('Navigation Links', () => {
    it('all links have proper href attributes', () => {
      render(<Header />);
      const homeLinks = screen.getAllByRole('link', { name: /^home$/i });
      const aboutLinks = screen.getAllByRole('link', { name: /^about$/i });
      const propertiesLinks = screen.getAllByRole('link', { name: /^properties$/i });
      const huntsLinks = screen.getAllByRole('link', { name: /^hunts$/i });
      const contactLinks = screen.getAllByRole('link', { name: /^contact$/i });

      expect(homeLinks[0]).toHaveAttribute('href', '/');
      expect(aboutLinks[0]).toHaveAttribute('href', '/about');
      expect(propertiesLinks[0]).toHaveAttribute('href', '/properties');
      expect(huntsLinks[0]).toHaveAttribute('href', '/hunts');
      expect(contactLinks[0]).toHaveAttribute('href', '/contact');
    });
  });
});
