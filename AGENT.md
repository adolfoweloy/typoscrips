# Project: TypeScript Study

A personal project to learn TypeScript basics, following the book **"Programming TypeScript"** (O'Reilly) and the official TypeScript docs as a secondary reference.

## Structure

- One file per topic under `src/`
- Run experiments with `npm run play`

## Communication Style

- Keep answers **short and concise**
- One basic example is usually enough — avoid walls of text

## Code Conventions

When generating code, follow the project's existing config:

**tsconfig.json**

- Target: ES2022
- Strict mode enabled
- CommonJS modules

**eslint.config.mjs**

- ESLint recommended + typescript-eslint recommended + prettier
- `@typescript-eslint/no-explicit-any` is **off** (using `any` is allowed)
