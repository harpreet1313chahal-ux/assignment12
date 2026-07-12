# Assignment 13 – UI Component Library Build Checks

## Student Name

Harpreet Chahal

## Project Description

This project extends the UI Component Library from Assignment 12 by adding automated code quality checks using Husky, GitHub Actions, and Docker.

The project includes:

- React
- TypeScript
- Storybook
- Styled Components
- Docker
- Husky
- ESLint
- Prettier
- GitHub Actions

---

## Install Dependencies

```bash
npm install
```

---

## Run Storybook

```bash
npm run storybook
```

Storybook will be available at:

```
http://localhost:6006
```

---

## Run Prettier

```bash
npm run format
```

---

## Run ESLint

```bash
npm run lint
```

---

## Run Tests

```bash
npm test -- --watchAll=false
```

---

## Husky Pre-commit Checks

Before every commit, Husky automatically runs:

- Prettier
- ESLint
- Tests

If any check fails, the commit is blocked.

---

## GitHub Actions

GitHub Actions automatically runs the following checks for every push and pull request:

- npm install
- npm run format
- npm run lint
- npm test -- --watchAll=false

---

## Build Docker Image

```bash
docker build -t chahal_harpreet_coding_assignment13 .
```

---

## Run Docker Container

```bash
docker run --name chahal_harpreet_coding_assignment13 -p 8018:8018 chahal_harpreet_coding_assignment13
```

---

## Open the Application

```
http://localhost:8018
```

---

## Working Directory

```
/chahal_harpreet_ui_garden_build_checks
```

---

## Docker Container Name

```
chahal_harpreet_coding_assignment13
```

---

## Technologies Used

- React
- TypeScript
- Storybook
- Styled Components
- Docker
- Husky
- ESLint
- Prettier
- GitHub Actions
