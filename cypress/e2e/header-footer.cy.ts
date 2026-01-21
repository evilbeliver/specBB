describe('Header and Footer E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Header Navigation', () => {
    it('renders the header on every page', () => {
      cy.get('header[role="banner"]').should('be.visible');
      cy.get('header').contains('Buck & Beard').should('be.visible');
    });

    it('displays all navigation links', () => {
      cy.get('nav[aria-label="Main navigation"]').within(() => {
        cy.contains('Home').should('be.visible');
        cy.contains('About').should('be.visible');
        cy.contains('Hunts').should('be.visible');
        cy.contains('Contact').should('be.visible');
      });
    });

    it('logo is clickable and links to home', () => {
      cy.get('header').contains('Buck & Beard').closest('a').should('have.attr', 'href', '/');
    });

    it('navigation links are keyboard accessible', () => {
      cy.get('body').tab();
      cy.focused().should('contain', 'Buck & Beard');
      
      cy.focused().tab();
      cy.focused().should('contain', 'Home');
      
      cy.focused().tab();
      cy.focused().should('contain', 'About');
    });

    it('highlights current page in navigation', () => {
      cy.get('nav a[aria-current="page"]').should('contain', 'Home');
    });

    it('header is sticky on scroll', () => {
      cy.scrollTo(0, 500);
      cy.get('header').should('be.visible');
      cy.get('header').should('have.css', 'position', 'sticky');
    });
  });

  describe('Footer Content', () => {
    it('renders the footer on every page', () => {
      cy.get('footer[role="contentinfo"]').should('be.visible');
    });

    it('displays company information', () => {
      cy.get('footer').contains('Buck & Beard Hunt Club').should('be.visible');
      cy.get('footer').contains('Experience the thrill of the hunt').should('be.visible');
    });

    it('displays quick links section', () => {
      cy.get('footer').contains('Quick Links').should('be.visible');
      cy.get('footer').within(() => {
        cy.contains('a', 'Home').should('have.attr', 'href', '/');
        cy.contains('a', 'About').should('have.attr', 'href', '/about');
        cy.contains('a', 'Hunts').should('have.attr', 'href', '/hunts');
        cy.contains('a', 'Contact').should('have.attr', 'href', '/contact');
      });
    });

    it('displays contact information', () => {
      cy.get('footer').contains('Contact').should('be.visible');
      cy.get('footer').contains('a', 'info@buckandbeard.com')
        .should('have.attr', 'href', 'mailto:info@buckandbeard.com');
      cy.get('footer').contains('a', '+1 (555) 123-4567')
        .should('have.attr', 'href', 'tel:+15551234567');
    });

    it('displays copyright with current year', () => {
      const currentYear = new Date().getFullYear();
      cy.get('footer').contains(`© ${currentYear} Buck & Beard Hunt Club`).should('be.visible');
    });

    it('displays policy links', () => {
      cy.get('footer').contains('a', 'Privacy Policy').should('have.attr', 'href', '/privacy');
      cy.get('footer').contains('a', 'Terms of Service').should('have.attr', 'href', '/terms');
    });
  });

  describe('Layout Consistency', () => {
    it('header appears before main content', () => {
      cy.get('header').then($header => {
        cy.get('main').then($main => {
          expect($header[0].compareDocumentPosition($main[0]) & Node.DOCUMENT_POSITION_FOLLOWING).to.be.greaterThan(0);
        });
      });
    });

    it('footer appears after main content', () => {
      cy.get('main').then($main => {
        cy.get('footer').then($footer => {
          expect($main[0].compareDocumentPosition($footer[0]) & Node.DOCUMENT_POSITION_FOLLOWING).to.be.greaterThan(0);
        });
      });
    });
  });

  describe('Responsive Behavior', () => {
    const viewports = [
      { device: 'iphone-x', width: 375, height: 812 },
      { device: 'ipad-2', width: 768, height: 1024 },
      { device: 'macbook-15', width: 1440, height: 900 },
    ];

    viewports.forEach(({ device, width, height }) => {
      it(`header and footer display correctly on ${device}`, () => {
        cy.viewport(width, height);
        cy.get('header').should('be.visible');
        cy.get('footer').should('be.visible');
        cy.get('nav[aria-label="Main navigation"]').should('be.visible');
      });
    });
  });

  describe('Accessibility', () => {
    it('header and footer pass axe checks', () => {
      cy.injectAxe();
      cy.get('header').checkA11y();
      cy.get('footer').checkA11y();
    });
  });
});
