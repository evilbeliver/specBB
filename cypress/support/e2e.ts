import 'cypress-axe';

declare global {
  namespace Cypress {
    interface Chainable {
      tab(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('tab', () => {
  cy.focused().trigger('keydown', { keyCode: 9, which: 9 });
});
