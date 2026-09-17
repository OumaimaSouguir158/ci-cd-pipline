## Project 5 — Automated testing pipeline and continuous integration


## Objective
To set up an automated test suite and a complete CI/CD pipeline for an API.

## CI/CD pipeline (GitHub Actions)
```
Push to main/feature/*
        │
        ▼
  ┌─────────────────────────────────────────────────────────────┐
  │                    GitHub Actions                           │
  │                                                             │
  │  1. Lint (ESLint)        2. Tests unitaires (Jest)         │
  │  3. Tests d'intégration  4. Build Docker                   │
  │  5. Deploy (si main)                                        │
  └─────────────────────────────────────────────────────────────┘
```

## Test coverage
- **Unit tests**: isolated business logic (mocks)
- **Integration tests**: API + database under real-world conditions
- **End-to-end tests**: (bonus) Playwright/Cypress

## Running locally
```bash
npm install
npm test              # Unit and integration tests
npm run test:coverage # Coverage report
npm run lint
```

## Interview question
> **How does your pipeline ensure that a faulty deployment does not reach production?**
>
> The jobs are chained: `lint → test → build → deploy`. If a step fails,
> the subsequent steps do not run. Furthermore, deployment is only triggered
> on the `main` branch, following an approved merge request.

## CV entry
> “CI/CD pipeline — automated Jest tests, GitHub Actions continuous integration, reproducible Docker builds.”
