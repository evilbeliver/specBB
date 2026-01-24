
# specBB Constitution

## Core Principles


### I. Accessibility First
All user-facing features MUST meet or exceed WCAG 2.1 AA accessibility standards. Accessibility is non-negotiable and must be validated in all reviews and tests.
Rationale: Ensures inclusivity and legal compliance for all users.


### II. Test-First Discipline
All code MUST be developed using test-driven development (TDD). Write tests BEFORE implementation. The following test suites are mandatory for all features:
- **Unit Tests**: Component logic, utilities, pure functions
- **Integration Tests**: Component interactions, data flow
- **UI Tests**: Visual regression, layout validation
- **Component Tests**: User interactions, event handling
- **E2E Tests**: Critical user paths, complete workflows
- **Accessibility Tests**: WCAG 2.1 AA compliance with axe-core

**Pre-Commit Requirements**: ALL test suites must pass before ANY commit is allowed. No exceptions. Use git hooks to enforce this requirement.

Rationale: Guarantees reliability, prevents regressions, enables safe refactoring, and ensures broken code never enters the repository.


### III. Security by Default
Only use verified, actively maintained packages. All dependencies must be reviewed for security. Regular audits and prompt patching of vulnerabilities are mandatory.
Rationale: Protects users and data, reduces risk of supply chain attacks.


### IV. Maintainability & Simplicity
Prioritize MVP scope, minimalism, and clear, idiomatic code structure. Avoid over-engineering. Code must be easy to read, extend, and maintain.
Rationale: Reduces technical debt, accelerates onboarding, and supports long-term project health.


### V. Best Practices Compliance
Codebase MUST follow modern development best practices for SPA projects, including modular structure, code reviews, and continuous integration. All code must be peer-reviewed before merging.
Rationale: Ensures quality, consistency, and future-proofing.


## Project Constraints & Standards

- Single Page Application (SPA) architecture
- Accessibility: WCAG 2.1 AA or better
- Security: Only verified/maintained packages, regular audits
- Testing: TDD, unit, integration, E2E, coverage enforcement
- MVP focus: Simplicity, minimalism, clear structure
- Code must follow idiomatic, modern best practices
- Material-UI (MUI) v5+ for all UI components and styling
- Responsive design: Mobile-first approach with breakpoints (xs/sm/md/lg/xl)
- Interactive features: Modal dialogs for detailed content views
- Navigation: Consistent header/footer across all pages



## Development Workflow & Quality Gates

- **TDD Workflow**: All work begins with failing tests, then implementation to pass those tests
- **Test Types Required**:
  - Unit tests (Jest + React Testing Library)
  - Component tests (user interactions, props validation)
  - Integration tests (component interactions)
  - UI tests (responsive design, visual validation)
  - E2E tests (Cypress for critical user paths)
  - Accessibility tests (jest-axe unit tests + @axe-core/cli scans)
- **Pre-Commit Enforcement**: Git hooks MUST run all test suites before allowing commits
  - `npm test` (Jest unit tests)
  - `npm run test:e2e` (Cypress E2E tests)
  - `npm run test:accessibility` (axe-core scans)
  - All must pass with zero failures
- **Code Coverage**: Maintain test coverage standards, track in CI
- **Code Reviews**: Required for all merges, verify TDD adherence
- **CI Quality Gates**: Must enforce linting, testing, accessibility, and build success
- **No Exceptions**: Broken tests = blocked commit/merge, no overrides allowed



## Governance

This constitution supersedes all other practices. Amendments require documentation, approval, and a migration plan. All PRs and reviews must verify compliance with these principles. Any complexity must be justified. Use runtime guidance docs for development reference.



<!--
Sync Impact Report
- Version change: N/A → 1.0.0
- Modified principles: All (template → concrete)
- Added sections: Project Constraints & Standards, Development Workflow & Quality Gates
- Removed sections: None
- Templates requiring updates: plan-template.md (✅), spec-template.md (✅), tasks-template.md (✅)
- Follow-up TODOs: None (all placeholders resolved)
- Added: MUI v5+ standard, responsive design requirements, modal interactions, navigation consistency (2026-01-23)
- Enhanced TDD requirements with explicit test suite types and pre-commit enforcement (2026-01-23)
-->

**Version**: 1.0.2 | **Ratified**: 2026-01-20 | **Last Amended**: 2026-01-23
