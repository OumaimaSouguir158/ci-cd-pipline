# 🟡 Projet 5 — Pipeline de tests automatisés et intégration continue

> **Statut** : À construire | **Niveau** : Intermédiaire | **Durée** : 3-4 semaines

## Objectif
Mettre en place une suite de tests automatisés et un pipeline CI/CD complet sur une API.

## Pipeline CI/CD (GitHub Actions)
```
Push sur main/feature/*
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

## Couverture de tests
- **Tests unitaires** : logique métier isolée (mocks)
- **Tests d'intégration** : API + base de données en conditions réelles
- **Tests end-to-end** : (bonus) Playwright/Cypress

## Démarrage local
```bash
npm install
npm test              # Tests unitaires + intégration
npm run test:coverage # Rapport de couverture
npm run lint
```

## Question d'entretien
> **Comment votre pipeline garantit-il qu'un déploiement défectueux n'atteint pas la production ?**
>
> Les jobs sont chainés : `lint → test → build → deploy`. Si une étape échoue,
> les suivantes ne s'exécutent pas. De plus, le déploiement n'est déclenché que
> sur la branche `main`, après un merge request validé.

## Ligne CV
> « Pipeline CI/CD — tests automatisés Jest, intégration continue GitHub Actions, build Docker reproductible. »
