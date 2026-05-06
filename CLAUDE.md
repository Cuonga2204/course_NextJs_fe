# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run format       # Prettier format
```

No test framework is configured.

## Code Style

Enforced by `.eslintrc.json` and `.prettierrc.js`:
- No semicolons, single quotes, 120-char line width
- Trailing commas disabled, arrow functions omit parens when possible
- Blank line required before block comments and before return statements
- Blank line required after import blocks

Path alias: `src/*` maps to `./src/*` — use this for all internal imports.

## Architecture

This is a Next.js 14 admin dashboard template (`Pages Router`) with MUI v5, Redux Toolkit, i18next, and CASL-based ACL.

### App Bootstrap (`src/pages/_app.tsx`)

Providers wrap in this order: Redux → Auth → Settings → Theme → Toast/NProgress → Guards → Layout. Understanding this stack is essential when adding new global state or context.

### Theme System (`src/configs/themeConfig.ts`)

Central config for layout, nav, appbar, and color mode defaults. Theme overrides live under `src/@core/theme/` and are split into typography, colors, shadows, spacing, and component overrides. The `SettingsContext` reads from `themeConfig` and persists user changes to `localStorage`.

### Auth Flow

`AuthContext` handles JWT token storage in `localStorage`, auto-login on mount, and expiry handling. Three guard components sit in `src/components/auth/`:
- `AuthGuard` — redirects unauthenticated users to `/login`
- `GuestGuard` — redirects authenticated users away from login/register pages
- `AclGuard` — checks CASL ability before rendering a page

Each page can export `authGuard`, `guestGuard`, and `aclAbilities` via `getLayout` conventions to opt in/out of guards.

### ACL / RBAC (`src/components/acl/`)

Powered by `@casl/ability`. Ability definitions are role-based (admin, client) and use standard actions: `manage | create | read | update | delete`. Use the `<Can>` component for conditional UI rendering. `getHomeRoute.tsx` maps a role to its default landing page.

### State Management

Redux store uses Redux Toolkit slices. Async data fetching uses `createAsyncThunk`. Selectors and actions are co-located in slice files under `src/store/`.

### Internationalization

i18next with HTTP backend. Translation files are loaded from `/public/locales/{lang}.json`. Language detection is enabled. Use the `useTranslation` hook; avoid hardcoding user-visible strings.

### Custom Components

`src/components/text-field/` — `CustomTextField` wraps MUI `TextField` with project-specific defaults. Prefer it over raw MUI `TextField`.

Icons are rendered via Iconify (`src/components/Icon/`). Use icon names from the Tabler icon set (configured default: `tabler:circle`).
