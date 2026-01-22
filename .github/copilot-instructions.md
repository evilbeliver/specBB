# GitHub Copilot Instructions for specBB

## Project Overview

This is a Next.js web application for a hunt club website, built with TypeScript, React, and Material-UI. The project emphasizes accessibility, comprehensive testing, and code quality.

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript with strict mode enabled
- **UI Library**: Material-UI (@mui/material) with Emotion for styling
- **Testing**: Jest for unit tests, Cypress for E2E tests, axe-core for accessibility testing
- **Code Quality**: ESLint with TypeScript and accessibility plugins, Prettier for formatting
- **Git Hooks**: Husky for pre-commit hooks, lint-staged for staged files

## Development Setup

### Available Commands

```bash
npm run dev           # Start development server (http://localhost:3000)
npm run build         # Build production bundle
npm start             # Start production server
npm run lint          # Run ESLint
npm test              # Run Jest unit tests
npm run test:e2e      # Run Cypress E2E tests
npm run test:accessibility # Run axe accessibility tests
```

### Environment Setup

1. Install dependencies: `npm ci`
2. Start development server: `npm run dev`
3. All tests should pass before committing changes

## Code Style & Conventions

### TypeScript

- Use TypeScript strict mode - all code must be type-safe
- No `any` types unless absolutely necessary (document why)
- Use path aliases for imports:
  - `@/components/*` for components
  - `@/pages/*` for pages
  - `@/styles/*` for styles
  - `@/utils/*` for utilities
- Follow existing patterns for component structure and organization

### React Components

- Use functional components with hooks
- Follow React best practices (React import not needed for JSX - automatic JSX transform is configured)
- Components should be typed with proper TypeScript interfaces
- Place component tests in `__tests__` directories alongside components

### File Organization

```
src/
  components/         # Reusable UI components
    __tests__/       # Component tests
  pages/             # Next.js pages and routes
    __tests__/       # Page tests
  styles/            # Theme and global styles
```

### Styling

- Use Material-UI's styling system (Emotion)
- Follow the theme defined in `src/styles/theme.ts`
- Maintain consistent spacing and design patterns

## Testing Requirements

### Unit Tests (Jest)

- **REQUIRED**: Write unit tests for all new components and functions
- Place tests in `__tests__` directories
- Use React Testing Library for component tests
- Follow existing test patterns (see `src/components/__tests__/*.test.tsx`)
- Run `npm test` to verify tests pass

### E2E Tests (Cypress)

- Add E2E tests for new user flows and critical paths
- Tests should be in the `cypress/` directory
- Run `npm run test:e2e` to verify E2E tests pass

### Accessibility Testing

- **CRITICAL**: All components must meet WCAG 2.1 Level AA standards
- Use semantic HTML elements
- Ensure proper ARIA attributes when needed
- Run `npm run test:accessibility` to verify compliance
- Use jest-axe in unit tests for accessibility validation
- Never compromise accessibility for aesthetics

## Linting & Formatting

- Code must pass ESLint checks: `npm run lint`
- Configuration includes:
  - TypeScript ESLint rules
  - React best practices
  - JSX accessibility (jsx-a11y) rules
- Prettier is configured for consistent formatting
- Pre-commit hooks will automatically run lint-staged

## Git Workflow

- The main branch is `main`
- All changes go through pull requests
- CI pipeline runs on all branches and PRs
- CI checks:
  1. Linting
  2. Unit tests
  3. Accessibility tests
  4. Build
  5. E2E tests
- All CI checks must pass before merging

## Build & Deployment

- Build command: `npm run build`
- The build must complete successfully without errors or warnings
- Next.js generates static pages in `.next/` directory
- Production start: `npm start`

## Custom Agents

This repository includes custom Speckit agents for specification and planning workflows:
- `speckit.specify` - Feature specification
- `speckit.plan` - Implementation planning
- `speckit.tasks` - Task generation
- `speckit.implement` - Implementation execution
- `speckit.analyze` - Cross-artifact analysis
- `speckit.clarify` - Specification clarification
- `speckit.checklist` - Custom checklist generation
- `speckit.constitution` - Project constitution management
- `speckit.taskstoissues` - Convert tasks to GitHub issues

## Important Restrictions

### Do NOT:

- Remove or disable existing tests
- Commit code that fails linting or tests
- Compromise accessibility standards
- Add dependencies without careful consideration
- Make changes to build configuration without discussion
- Commit secrets, API keys, or sensitive data
- Break existing functionality when adding new features

### DO:

- Write comprehensive tests for new code
- Follow TypeScript strict mode
- Ensure accessibility compliance
- Run all quality checks before committing
- Use semantic HTML and proper ARIA attributes
- Follow existing code patterns and conventions
- Keep code DRY (Don't Repeat Yourself)
- Write clear, self-documenting code

## Additional Notes

- The project uses Next.js automatic React refresh in development
- TypeScript compilation happens during build, not in development
- Path aliases are configured in both `tsconfig.json` and `jest.config.js`
- The theme system uses Material-UI's theming capabilities
- Always consider mobile-first responsive design
