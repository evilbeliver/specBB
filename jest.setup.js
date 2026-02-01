import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

// Extend Jest matchers with accessibility testing
expect.extend(toHaveNoViolations);

// Suppress React act() warnings from Next.js Link component
// These warnings are expected in test environment and don't indicate real issues
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: An update to') &&
      args[0].includes('was not wrapped in act')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

// Mock IntersectionObserver which is used by Next.js Link
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

// Quality testing utilities
global.testPageQuality = async (container) => {
  const { axe } = await import('jest-axe');
  
  // Run accessibility tests
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  
  // Check for proper heading hierarchy
  const headings = Array.from(container.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  if (headings.length > 0) {
    expect(headings[0].tagName).toBe('H1');
  }
  
  // Check for main landmark
  const main = container.querySelector('main');
  if (main) {
    expect(main).toBeInTheDocument();
  }
  
  // Check for skip links or proper navigation structure
  const nav = container.querySelector('nav');
  if (nav) {
    expect(nav).toBeInTheDocument();
  }
};
