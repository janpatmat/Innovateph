# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server on http://localhost:3000 (Turbopack)
npm run build    # Production build (Turbopack)
npm start        # Serve the production build
npm run lint     # ESLint (flat config)
npx next typegen # Regenerate route types in .next/types (PageProps/LayoutProps)
```

No test runner is configured (scripts are only `dev`/`build`/`start`/`lint`).

## Project overview

Front-end for "innovate", bootstrapped with create-next-app. Currently a single-route App Router app; most of the value below is version-specific behavior, not the (minimal) current structure.

- `app/` — App Router. `layout.tsx` (root layout + `next/font` Geist fonts as CSS vars), `page.tsx` (home), `globals.css` (Tailwind + theme).
- `@/*` path alias maps to the repo root (see `tsconfig.json`); TypeScript is `strict`.
- Styling is **Tailwind CSS v4**: configured in CSS via `@import "tailwindcss"` and `@theme inline` in `app/globals.css` — there is no `tailwind.config.js`. PostCSS wires in `@tailwindcss/postcss`.

## This is Next.js 16 — key differences from older versions

Read `node_modules/next/dist/docs/` before writing framework code (per AGENTS.md). The upgrade/breaking-change list is at `01-app/02-guides/upgrading/version-16.md`. The things most likely to bite:

- **Turbopack is the default** bundler for both `next dev` and `next build`, with on-disk caching enabled by default.
- **Request APIs are async-only.** `params`, `searchParams`, `cookies()`, `headers()`, and `draftMode()` are Promises and must be `await`ed — the synchronous compatibility from v15 was removed. This also applies to `params`/`id` in `icon`/`opengraph-image` and `sitemap`.
- **Use auto-generated route-typed props**, don't hand-roll them: `PageProps<'/route'>` and `LayoutProps<'/route'>` are global types generated into `.next/types` (regenerate with `npx next typegen`; `next dev` also refreshes them). Example already in use: `app/layout.tsx` types its props as `LayoutProps<"/">`.
- **`next lint` was removed.** Lint via the ESLint CLI — the `lint` script is bare `eslint`, and config is ESLint 9 flat config (`eslint.config.mjs` using `defineConfig` + `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`).
- Runs on **React 19.2** with React Compiler support available.
- Caching APIs have changed (`revalidateTag`, `updateTag`, `refresh`, `cacheLife`, `cacheTag`) — see the version-16 guide before using them.

## Generated files

`next dev` rewrites the `<!-- nextjs-agent-rules -->` block in the tracked `AGENTS.md` file — commit it alongside your work rather than reverting it, since reverting just recreates the uncommitted change. The route types under `.next/types` are also generated but `.next/` is gitignored, so those are never committed (regenerate locally with `npx next typegen`).
