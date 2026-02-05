# Buck & Beard Hunt Club

A modern, accessible hunt club website built with Next.js, TypeScript, and Material-UI. Experience the thrill of premium hunting grounds across South Carolina's Saluda and Edgefield Counties.

![Buck & Beard Hunt Club](./public/images/nav-logo.png)

## 🌟 Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Accessibility Compliant** - WCAG 2.1 AA standards with comprehensive testing
- **Property Showcase** - Interactive property directory with detailed modal views
- **Contact Integration** - Direct email and phone integration for member inquiries
- **Resource Downloads** - Self-service access to club documents and applications
- **Modern UI/UX** - Clean, professional design with smooth animations
- **SEO Optimized** - Proper meta tags, semantic HTML, and performance optimization

## 🚀 Live Demo

**Production Site**: [https://evilbeliver.github.io/specBB/](https://evilbeliver.github.io/specBB/)

## 🛠 Tech Stack

- **Framework**: [Next.js 16.1.4](https://nextjs.org/) with static export
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **UI Library**: [Material-UI (MUI)](https://mui.com/) with Emotion styling
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/) + [Cypress](https://www.cypress.io/)
- **Code Quality**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) + [Husky](https://typicode.github.io/husky/)
- **Accessibility**: [axe-core](https://github.com/dequelabs/axe-core) automated testing
- **Deployment**: GitHub Pages with automated CI/CD

## 📋 Prerequisites

- **Node.js**: Version 20.9.0 or higher
- **npm**: Version 9.0.0 or higher
- **Git**: For version control

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/evilbeliver/specBB.git
   cd specBB
   ```

2. **Install dependencies**
   ```bash
   npm ci
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot reload) |
| `npm run build` | Build production bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint with TypeScript rules |
| `npm test` | Run Jest unit tests |
| `npm run test:e2e` | Run Cypress end-to-end tests |
| `npm run test:accessibility` | Run axe accessibility tests |

## 🏗 Project Structure

```
├── public/                    # Static assets
│   ├── images/               # Property and branding images
│   ├── downloads/            # Downloadable club documents
│   ├── favicon.png          # Site favicon
│   └── heroimage.jpg        # Main hero background
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx       # Navigation header with logo
│   │   ├── Footer.tsx       # Site footer
│   │   └── __tests__/       # Component unit tests
│   ├── pages/              # Next.js pages and routing
│   │   ├── index.tsx       # Home page
│   │   ├── about.tsx       # About the club
│   │   ├── properties.tsx  # Property directory
│   │   ├── contact.tsx     # Contact information and forms
│   │   ├── resources.tsx   # Document downloads
│   │   ├── _app.tsx        # App configuration
│   │   └── _document.tsx   # HTML document structure
│   ├── styles/             # Global styles and theme
│   │   ├── globals.css     # Global CSS variables and resets
│   │   └── theme.ts        # Material-UI theme configuration
│   └── __tests__pages/     # Page-level integration tests
├── cypress/                # End-to-end tests
├── specs/                  # Project specifications and documentation
└── .github/workflows/      # CI/CD pipeline configuration
```

## 🧪 Testing Strategy

### Unit Tests (Jest + React Testing Library)
- **Component Tests**: All UI components have corresponding test files
- **Accessibility Tests**: Automated axe-core integration
- **Coverage**: >95% test coverage for critical paths

```bash
npm test                    # Run all unit tests
npm test -- --watch        # Run tests in watch mode
npm test -- --coverage     # Generate coverage report
```

### End-to-End Tests (Cypress)
- **User Flows**: Critical user journeys tested
- **Cross-Browser**: Automated browser compatibility testing
- **Visual Testing**: Screenshot comparison for UI consistency

```bash
npm run test:e2e           # Run E2E tests headless
npx cypress open           # Open Cypress GUI
```

### Accessibility Testing
- **WCAG 2.1 AA Compliance**: Automated and manual testing
- **Screen Reader Support**: Proper ARIA attributes and semantic HTML
- **Keyboard Navigation**: Full keyboard accessibility

```bash
npm run test:accessibility  # Run axe accessibility tests
```

## 🚀 Deployment

The site is automatically deployed to GitHub Pages via CI/CD pipeline:

1. **Push to branch** triggers GitHub Actions workflow
2. **Quality Gates**: Linting, testing, and accessibility checks
3. **Build**: Next.js static export generation
4. **Deploy**: Automatic deployment to GitHub Pages

### Manual Deployment
```bash
npm run build              # Generate static export
# Files are output to ./out/ directory
```

## 🛡 Code Quality Standards

- **TypeScript Strict Mode**: Full type safety enforcement
- **ESLint Configuration**: React, TypeScript, and accessibility rules
- **Prettier Integration**: Consistent code formatting
- **Pre-commit Hooks**: Automatic linting and formatting on commit
- **Accessibility Standards**: WCAG 2.1 AA compliance testing

## 🔧 Configuration

### Environment Variables
```bash
# .env.local (for local development)
NEXT_PUBLIC_BASE_PATH=          # Leave empty for local dev
NODE_ENV=development

# Production (GitHub Pages)
NEXT_PUBLIC_BASE_PATH=/specBB   # Repository name for proper routing
```

### Key Configuration Files
- `next.config.js` - Next.js configuration with static export settings
- `tsconfig.json` - TypeScript configuration with strict mode
- `jest.config.js` - Jest testing configuration with path aliases
- `cypress.config.ts` - Cypress E2E testing configuration
- `eslint.config.js` - ESLint rules for TypeScript and React

## 🤝 Contributing

We welcome contributions to improve the Buck & Beard Hunt Club website!

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Write** tests for your changes
4. **Ensure** all tests pass: `npm test && npm run test:e2e`
5. **Commit** your changes: `git commit -m 'Add amazing feature'`
6. **Push** to branch: `git push origin feature/amazing-feature`
7. **Create** a Pull Request

### Code Standards
- Follow existing TypeScript patterns
- Maintain test coverage above 95%
- Ensure accessibility compliance
- Write meaningful commit messages
- Document any new features or API changes

## 📝 License

This project is proprietary and confidential. All rights reserved to Buck & Beard Hunt Club.

## 📞 Support & Contact

- **Website**: [Buck & Beard Hunt Club](https://evilbeliver.github.io/specBB/)
- **Email**: buckandbeard@gmail.com
- **Phone**: (803) 727-5111
- **Service Area**: Saluda & Edgefield Counties, South Carolina

## 📈 Project Status

- **Version**: 1.0.0
- **Status**: ✅ Production Ready
- **Last Updated**: February 5, 2026
- **Maintenance**: Active

---

**Built with ❤️ for the hunting community in South Carolina**
