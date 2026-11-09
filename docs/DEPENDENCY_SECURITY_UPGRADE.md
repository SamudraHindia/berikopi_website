# Dependency Security Upgrade — 9 November 2026

## Environment

| Item | Version |
| --- | --- |
| Node.js | v24.11.1 |
| npm | 11.6.2 |
| Project | `berikopi-jatinangor@1.0.0` |
| Backup of pre-upgrade manifests | `C:\Users\ariqs\AppData\Local\Temp\opencode\berikopi-dep-backup` |

## Before → after

| Package | Before | After | Reason |
| --- | --- | --- | --- |
| `vite` | 5.4.21 | 8.3.7 | Removes vulnerable esbuild dependency |
| `@vitejs/plugin-react` | 4.7.0 (resolved) | 6.3.0 | Required peer for Vite 8 |
| `react-router-dom` | 6.30.6 | 7.18.5 | Fixes production advisories |
| `react-router` (transitive) | 6.30.6 | 7.18.5 | Fixes production advisories |
| `esbuild` | 0.21.5 | not installed | Vite 8 uses Rolldown/Oxc instead |

`package.json` and `package-lock.json` were updated by npm. No `npm audit fix --force` was used.

## Audit results

### Before

- `npm audit`: **4 vulnerabilities** (3 moderate, 1 high)
  - `esbuild <= 0.24.2` via `vite <= 6.4.3` — GHSA-67mh-4wv8-2f99
  - `react-router 6.0.0 – 7.17.0` — GHSA-wrjc-x8rr-h8h6 and GHSA-337j-9hxr-rhxg
- `npm audit --omit=dev`: **2 moderate** (React Router)

### After

- `npm audit`: **0 vulnerabilities**
- `npm audit --omit=dev`: **0 vulnerabilities**

## Compatibility decisions

- **Node 24.11.1** satisfies Vite 8's engine range (`^20.19.0 || >=22.12.0`) and React Router 7's `>=20`.
- **React 18.3.1** satisfies React Router 7's peer requirement (`react >=18`, `react-dom >=18`).
- **Tailwind CSS 3.4 / PostCSS** continue to work through Vite's PostCSS pipeline.
- **@vitejs/plugin-react 6.3.0** requires Vite `^8.0.0`; its extra peers (Oxc/Babel/compiler) are optional.

## React Router v6 → v7 audit

APIs actually used in `src/`:

- `BrowserRouter` — `src/main.tsx`
- `Routes`, `Route` — `src/App.tsx`
- `Link` — BrandLogo, ButtonLink, Footer, Hero, NotFound, ProductModal
- `NavLink` with function `className`/children — Navbar
- `useLocation` — Navbar, ScrollToTop

Not used: `useNavigate`, `useParams`, `useSearchParams`, `Navigate`, `Outlet`, data routers, or loaders/actions.

All used APIs remain available in `react-router-dom` v7, so **no application route code changed**. The upgrade was verified by typecheck, build, client-side navigation, mobile navigation, and all routes in dev and production preview.

## Build config change (required)

Vite 8 uses Rolldown and no longer supports object-form `build.rollupOptions.output.manualChunks`. The old config was migrated to Rolldown `codeSplitting` groups in `vite.config.ts` so the existing three/motion chunk split is preserved:

```ts
build: {
  target: 'es2020',
  rolldownOptions: {
    output: {
      codeSplitting: {
        groups: [
          {
            name: 'three',
            test: /node_modules[\\/](three|@react-three[\\/](fiber|drei))[\\/]/,
          },
          { name: 'motion', test: /node_modules[\\/]framer-motion[\\/]/ },
        ],
      },
    },
  },
}
```

No changes to pages, components, styling, assets, or menu data were made.

## Verification performed

| Check | Result |
| --- | --- |
| `npm install` | Passed, 0 vulnerabilities |
| `npm audit` | Passed, 0 vulnerabilities |
| `npm audit --omit=dev` | Passed, 0 vulnerabilities |
| `npm run typecheck` | Passed |
| `npm run build` | Passed (Vite 8.3.7) |
| Dev server smoke test | All routes, navigation, 89 cards, filter, search, modal, mobile nav, 3D canvas |
| Production preview smoke test | Same checks passed |
| Console/page errors | None in dev or preview |
| 390px horizontal overflow | None on `/`, `/menu`, `/about`, `/contact` |

The remaining Vite warning is the expected >500 kB warning for the lazy-loaded Three.js chunk; total JS weight is essentially unchanged and the chunk stays out of the initial route.
