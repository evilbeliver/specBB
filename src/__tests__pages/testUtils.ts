import { screen } from '@testing-library/react';
import { axe } from 'jest-axe';

/**
 * Comprehensive quality test suite utilities for all pages
 * Ensures consistent accessibility, SEO, and performance standards
 */

/**
 * Run accessibility tests on a container
 */
export const runAccessibilityTests = async (container: Element) => {
  const results = await axe(container);
  return results;
};

/**
 * Check heading hierarchy in container
 */
export const checkHeadingHierarchy = (container: Element) => {
  const headings = Array.from(container.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  
  if (headings.length === 0) return { valid: true, message: 'No headings found' };
  
  // First heading should be H1
  if (headings[0].tagName !== 'H1') {
    return { valid: false, message: 'First heading should be H1' };
  }
  
  // Ensure no heading levels are skipped
  const levels = headings.map(h => parseInt(h.tagName.charAt(1)));
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] - levels[i-1] > 1) {
      return { valid: false, message: `Heading level skipped: from H${levels[i-1]} to H${levels[i]}` };
    }
  }
  
  return { valid: true, message: 'Heading hierarchy is correct' };
};

/**
 * Check for proper landmark structure
 */
export const checkLandmarks = () => {
  try {
    const main = screen.getByRole('main');
    const nav = screen.getByRole('navigation');
    const footer = screen.getByRole('contentinfo');
    
    return {
      valid: true,
      landmarks: { main: !!main, nav: !!nav, footer: !!footer }
    };
  } catch (error) {
    return {
      valid: false,
      message: 'Missing required landmarks',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

/**
 * Check image accessibility
 */
export const checkImageAccessibility = (container: Element) => {
  const images = container.querySelectorAll('img');
  const issues: string[] = [];
  
  images.forEach((img, index) => {
    const alt = img.getAttribute('alt');
    if (alt === null) {
      issues.push(`Image ${index + 1} missing alt attribute`);
    } else if (alt.trim() === '') {
      issues.push(`Image ${index + 1} has empty alt text`);
    }
  });
  
  return {
    valid: issues.length === 0,
    issues,
    totalImages: images.length
  };
};

/**
 * Check link accessibility
 */
export const checkLinkAccessibility = (container: Element) => {
  const links = container.querySelectorAll('a');
  const issues: string[] = [];
  
  links.forEach((link, index) => {
    const linkText = link.textContent?.trim() ||
                    link.getAttribute('aria-label') ||
                    link.getAttribute('title');
    
    if (!linkText) {
      issues.push(`Link ${index + 1} has no accessible name`);
    }
  });
  
  return {
    valid: issues.length === 0,
    issues,
    totalLinks: links.length
  };
};

/**
 * Test for proper responsive design elements
 */
export const checkResponsiveDesign = (container: Element) => {
  const images = container.querySelectorAll('img');
  const issues: string[] = [];
  
  images.forEach((img, index) => {
    const hasResponsiveClass = img.className.includes('responsive') ||
                               img.style.maxWidth === '100%' ||
                               img.hasAttribute('sizes');
    
    const hasFixedDimensions = img.getAttribute('width') || img.getAttribute('height');
    
    if (!hasResponsiveClass && !hasFixedDimensions) {
      issues.push(`Image ${index + 1} may not be responsive`);
    }
  });
  
  return {
    valid: issues.length === 0,
    issues,
    totalImages: images.length
  };
};

/**
 * Check SEO elements
 */
export const checkSEOElements = (container: Element) => {
  const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const h1Elements = container.querySelectorAll('h1');
  
  return {
    hasHeadings: headings.length > 0,
    h1Count: h1Elements.length,
    hasUniqueH1: h1Elements.length === 1,
    h1Text: h1Elements[0]?.textContent?.trim() || null
  };
};

/**
 * Utility to test form accessibility (when forms are present)
 */
export const checkFormAccessibility = (container: Element) => {
  const forms = container.querySelectorAll('form');
  const issues: string[] = [];
  
  forms.forEach((form, formIndex) => {
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach((input, inputIndex) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      let hasLabel = false;
      
      if (id) {
        const label = form.querySelector(`label[for="${id}"]`);
        hasLabel = !!label;
      }
      
      if (!hasLabel && !ariaLabel && !ariaLabelledBy) {
        issues.push(`Form ${formIndex + 1}, Input ${inputIndex + 1} has no accessible label`);
      }
    });
  });
  
  return {
    valid: issues.length === 0,
    issues,
    totalForms: forms.length
  };
};

/**
 * Run all quality checks
 */
export const runAllQualityChecks = async (container: Element) => {
  const [accessibilityResults] = await Promise.all([
    runAccessibilityTests(container)
  ]);
  
  return {
    accessibility: {
      violations: accessibilityResults.violations,
      hasViolations: accessibilityResults.violations.length > 0
    },
    headingHierarchy: checkHeadingHierarchy(container),
    landmarks: checkLandmarks(),
    images: checkImageAccessibility(container),
    links: checkLinkAccessibility(container),
    responsive: checkResponsiveDesign(container),
    seo: checkSEOElements(container),
    forms: checkFormAccessibility(container)
  };
};