# Programming TypeScript - Practice Repo

A hands-on practice repository created while reading [Programming TypeScript](https://www.oreilly.com/library/view/programming-typescript/9781492037644/) by Boris Cherny. The code here follows along with the book's chapters, experimenting with TypeScript's type system, unions, type aliases, and more.

## Setup

```sh
npm install
```

## Scripts

| Command          | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| `npm run build`  | Compile TypeScript source files to JavaScript in `dist/`      |
| `npm run run`    | Build and execute `dist/index.js`                             |
| `npm run play`   | Run any single `.ts` file independently via `tsx` (see below) |
| `npm run lint`   | Run ESLint on `src/`                                          |
| `npm run format` | Format all files with Prettier                                |

### Running individual files

Use `npm run play` to run any TypeScript file on its own without a build step:

```sh
npm run play -- src/index.ts
npm run play -- src/unions.ts
```

This is handy for experimenting with individual scripts as you work through the book's chapters.
