# Rully - AI-Powered Universal Bubble Sheet Grader - Web App

## Features

This repository is 🔋 battery packed with:

- ⚡️ Next.js 14
- ⚛️ React 18
- ✨ TypeScript
- 💨 Mantine-UI 7
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 📦 Expansion Pack — Easily install common libraries, additional components, and configs

## Getting Started

### 1. Install dependencies

```bash
npm run install
```

### 2. Prepare husky lint stage

```bash
npm run prepare
```

### 3. Run the development server

You can start the server using this command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/app/page.tsx`.

### 4. How to Commit

Before committing, ensure your code aligns with eslint standards. Run this to automate fixing:

```bash
npm run lint:fix
```

It'll correct lint and prettier issues. Then, proceed with your commit.

### 5. Relative Path

Use this prefixes to fastly access directories

- `@/` prefix from src directory
- `~/` prefix from public directory
