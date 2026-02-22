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

## Rants (for posterity)

_"The day someone asks me why I don´t like TypeScript much, I'll show them this list."_

- **`let` widens, `const` narrows — except for arrays and tuples** — `const a = 1042` narrows to `42`. But `const a = [1, 2, 3]` widens to `number[]`, not `[1, 2, 3]`. Same operator, different behavior depending on what you're declaring.
- **Tuples are just arrays in disguise** — TypeScript has no dedicated tuple syntax, so it hijacks array notation. As a consequence, tuple literals are inferred as arrays and you're forced to annotate explicitly or use `as const`.
- **`null` infers `any` without `strictNullChecks`** — without it, `null` and `undefined` are assignable to everything and the whole null-safety model silently collapses.
- **`null` vs `undefined` — even the industry can't agree** — they mean different things semantically (`undefined` = never assigned, `null` = intentionally absent), but major style guides disagree on which to return from a "not found" function. Google says `undefined`. Others say `null`. Pick your camp.
- **`?` means `T | undefined` on declarations, but `?.` guards against both `null` and `undefined`** — same character, different semantics depending on where you use it.
- **You can declare a property as `string?` but not a return type as `string?`** — `name?: string` works. `function f(): string?` does not. For return types, you're forced to write `string | undefined`. No good reason, just an inconsistency.
- **Object values are widened** — `let e = { type: 'ficus' }` infers `{ type: string }`, not `{ type: 'ficus' }`.
