import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Footer from '../Footer';

expect.extend(toHaveNoViolations);

describe('Footer Component', () => {
  describe('Rendering', () => {
    it('renders the footer heading', () => {
      render(<Footer />);
      const heading = screen.getByRole('heading', { name: /buck & beard hunt club/i });
      expect(heading).toBeInTheDocument();
    });

    it('renders all quick links', () => {
      render(<Footer />);
      const quickLinksSection = screen.getByRole('heading', { name: /quick links/i }).closest('div');
      expect(quickLinksSection).toBeInTheDocument();
      
      expect(screen.getAllByRole('link', { name: /home/i }).length).toBeGreaterThan(0);
      expect(screen.getAllByRole('link', { name: /about/i }).length).toBeGreaterThan(0);
      expect(screen.getAllByRole('link', { name: /hunts/i }).length).toBeGreaterThan(0);
      expect(screen.getAllByRole('link', { name: /contact/i }).length).toBeGreaterThan(0);
    });

    it('renders contact information', () => {
      render(<Footer />);
      expect(screen.getByRole('heading', { name: /^contact$/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /buckandbeard@gmail.com/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /\+1 \(803\) 727-5111/i })).toBeInTheDocument();
    });

    it('renders copyright notice with current year', () => {
      render(<Footer />);
      const currentYear = new Date().getFullYear();
      expect(screen.getByText(new RegExp(`© ${currentYear} Buck & Beard Hunt Club`, 'i'))).toBeInTheDocument();
    });

    it('renders policy links', () => {
      render(<Footer />);
      expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /terms of service/i })).toBeInTheDocument();
    });

    it('renders as a contentinfo landmark', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Footer />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('email link has proper mailto href', () => {
      render(<Footer />);
      const emailLink = screen.getByRole('link', { name: /buckandbeard@gmail.com/i });
      expect(emailLink).toHaveAttribute('href', 'mailto:buckandbeard@gmail.com');
    });

    it('phone link has proper tel href', () => {
      render(<Footer />);
      const phoneLink = screen.getByRole('link', { name: /\+1 \(803\) 727-5111/i });
      expect(phoneLink).toHaveAttribute('href', 'tel:+18037275111');
    });

    it('uses semantic address element', () => {
      const { container } = render(<Footer />);
      const address = container.querySelector('address');
      expect(address).toBeInTheDocument();
    });
  });

  describe('Links', () => {
    it('all navigation links have proper href attributes', () => {
      render(<Footer />);
      const homeLinks = screen.getAllByRole('link', { name: /^home$/i });
      homeLinks.forEach(link => {
        expect(link).toHaveAttribute('href', '/');
      });
    });

    it('policy links have proper href attributes', () => {
      render(<Footer />);
      expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute('href', '/privacy');
      expect(screen.getByRole('link', { name: /terms of service/i })).toHaveAttribute('href', '/terms');
    });
  });
});
