# Claude / Cursor Instructions — About Me Klairs

Personal portfolio site in maintenance mode. Operate on this repo only; keep changes minimal.

## Before working
1. Read `PROJECT_CONTEXT.md` and `TASKS.md`.
2. Read `docs/ai/00_AI_INDEX.md` -> `/docs/ai/` (architecture, deployment).

## What this repo is
- Vite + React + TypeScript + Tailwind portfolio. Deployed on Vercel (SPA).
- Contact form posts to a Google Apps Script webhook (`src/lib/contact.ts`, `VITE_GOOGLE_SCRIPT_URL`).
- A Supabase client (`src/lib/supabase.ts`) and a `contact_submissions` migration exist but are not wired into the app — see `docs/ai/TECHNICAL_DEBT.md`.
- i18n via `src/lib/i18n.tsx` + `src/data/translations.ts`.

## Rules
- Simple, scoped changes only; match existing Tailwind styling.
- Ask before structural or visual changes.
- No new dependencies without a request.
- Update `TASKS.md` after changes.
- `/docs/ai/` may be updated after meaningful changes.
