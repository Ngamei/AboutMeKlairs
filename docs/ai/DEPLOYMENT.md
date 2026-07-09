# Deployment

## Overview

A static Vite build deployed on **Vercel**. There is no server runtime in this
repo; the only external dependency at runtime is the Google Apps Script webhook
used by the contact form.

## Local development

Requirements: Node 18+ and npm.

```bash
npm install
npm run dev        # start Vite dev server (default http://localhost:5173)
```

Other scripts (`package.json`):

```bash
npm run build      # type-agnostic production build → dist/
npm run preview    # serve the production build locally
npm run lint       # eslint .
npm run typecheck  # tsc --noEmit -p tsconfig.app.json
```

> Recommended pre-commit check: `npm run lint && npm run typecheck`.
> Note: `npm run build` runs `vite build` only (it does not type-check), so run
> `typecheck` separately to catch type errors.

## Environment variables

All client env vars must be prefixed `VITE_` to be exposed to the browser.
Copy `.env.example` to `.env` for local overrides (`.env` is gitignored).

| Variable | Used by | Notes |
|---|---|---|
| `VITE_GOOGLE_SCRIPT_URL` | `src/lib/contact.ts` | Contact-form webhook. **Has a hardcoded default in the source**, so the form works even if unset. |
| `VITE_SUPABASE_URL` | `src/lib/supabase.ts` | Consumed by the Supabase client but that client is effectively unused (see `TECH_DEBT.md`). Not in `.env.example`. |
| `VITE_SUPABASE_ANON_KEY` | `src/lib/supabase.ts` | Same as above. |

If you deploy, set these in the Vercel project's Environment Variables (per
environment) rather than committing secrets.

## Vercel configuration

`vercel.json` rewrites every route to `index.html` so client-side deep links
resolve:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

## Domains

- Primary: `https://aboutme.klairsthefirst.com` (custom domain, Cloudflare DNS).
- Vercel default: `about-me-klairs.vercel.app`.

## Contact-form backend (out of repo)

The contact submission pipeline (form → webhook → Google Sheets log + email
notification) lives in a Google Apps Script project that is **not** part of this
repository. If contact submissions stop arriving, check that Apps Script
deployment and the `VITE_GOOGLE_SCRIPT_URL` value, not this codebase.

## Supabase

`supabase/migrations/` contains SQL for a `contact_submissions` table with RLS
insert policies. This is a parallel/legacy path and is **not** wired into the
live contact flow. Do not assume the app reads or writes Supabase — see
`TECH_DEBT.md` before acting on it.
