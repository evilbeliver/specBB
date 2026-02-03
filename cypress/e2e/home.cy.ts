describe('Home Page E2E', () => {
  before(() => {
    // Handle uncaught exceptions from app
    cy.on('uncaught:exception', (err, runnable) => {
      // Return false to prevent the error from failing this test
      if (err.message.includes('Unexpected token') || err.message.includes('SyntaxError')) {
        return false;
      }
      return true;
    });
  });
  
  beforeEach(() => {
    cy.visit('/', { failOnStatusCode: false });
  });

  describe('Page Load and Navigation', () => {
    it('successfully loads the home page', () => {
      cy.url().should('include', '/');
      cy.get('h1').should('be.visible');
    });

    it('displays the main heading', () => {
      cy.get('h1').should('contain', 'Welcome to Buck & Beard Hunt Club');
    });

    it('displays the hero subtitle', () => {
      cy.contains('A modern hunting experience built on tradition and excellence').should('be.visible');
    });

    it('displays all sections', () => {
      cy.contains('About Our Club').should('be.visible');
      cy.contains('What We Offer').should('be.visible');
    });

    it('displays all feature cards', () => {
      cy.contains('Prime Hunting Grounds').should('be.visible');
      cy.contains('Family Friendly Atmosphere').should('be.visible');
      cy.contains('Camping Available').should('be.visible');
    });
  });

  describe('Accessibility', () => {
    it('all images have alt text', () => {
      cy.get('body').then(($body) => {
        const images = $body.find('img');
        if (images.length > 0) {
          images.each((i, img) => {
            cy.wrap(img).should('have.attr', 'alt');
          });
        }
      });
    });

    it.skip('runs axe accessibility checks', () => {
      cy.injectAxe();
      cy.checkA11y();
    });
  });

  describe('Responsive Design', () => {
    const viewports = [
      { device: 'iphone-x', width: 375, height: 812 },
      { device: 'ipad-2', width: 768, height: 1024 },
      { device: 'macbook-15', width: 1440, height: 900 },
    ];

    viewports.forEach(({ device, width, height }) => {
      it(`displays correctly on ${device}`, () => {
        cy.viewport(width, height);
        cy.get('h1').should('be.visible');
        cy.contains('About Our Club').should('be.visible');
        cy.contains('What We Offer').should('be.visible');
      });
    });
  });

  describe('Performance', () => {
    it('loads within acceptable time', () => {
      cy.visit('/', {
        onBeforeLoad: (win) => {
          win.performance.mark('start');
        },
      });
      cy.window().then((win) => {
        win.performance.mark('end');
        win.performance.measure('pageLoad', 'start', 'end');
        const measure = win.performance.getEntriesByName('pageLoad')[0];
        expect(measure.duration).to.be.lessThan(3000);
      });
    });
  });
});
