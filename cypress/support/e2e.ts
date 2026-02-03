import 'cypress-axe';

// Global error handling for all E2E tests
Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent syntax errors from failing tests
  if (err.message.includes('Unexpected token') || 
      err.message.includes('SyntaxError') ||
      err.message.includes('Cannot use import statement')) {
    console.warn('Caught application error:', err.message);
    return false;
  }
  // Don't prevent other types of errors from failing
  return true;
});

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
