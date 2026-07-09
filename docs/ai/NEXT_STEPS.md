# Next Steps

Suggested follow-ups, roughly ordered by value vs. risk. The site is in
maintenance mode, so these are opt-in — none are urgent.

## Quick wins (low risk)

- **Fix the favicon.** Point `index.html` `<link rel="icon">` at an asset that
  exists in `public/` (e.g. `klairs-profile.svg`) instead of the missing
  `/vite.svg`. See `TECH_DEBT.md` §7.
- **Add a `README.md`** at the repo root (tracked in `TASKS.md`) with a one-line
  description, live URL, and the local-dev commands from `DEPLOYMENT.md`.
- **Sync `.env.example`.** Either add `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`
  or remove them along with the unused Supabase client (see below).
- **Remove unused assets** (`public/klairs-profile.svg` if unused; audit the
  ~2.5 MB `public/klairs.png`).

## Decisions to make

- **Canonical version.** Decide whether "AboutMeKlairs" or "AboutMeKlairs2" is
  canonical and redirect/deprecate the other (tracked in `TASKS.md`).
- **Supabase: use it or lose it.** Either wire `supabase.ts` into the contact
  flow (persist submissions + keep the migration) or remove the client, the
  `@supabase/supabase-js` dependency, and `supabase/migrations/`. See
  `TECH_DEBT.md` §1.

## Larger / higher-risk (needs sign-off)

- **Contact-form robustness.** Move away from `no-cors` fire-and-forget so the
  UI can reflect real success/failure, or add a lightweight serverless endpoint.
- **Tailwind `accent` palette.** Define shades 50–900 (or replace the stray
  `accent-NNN` classes) so those utilities actually apply. See `TECH_DEBT.md` §6.
- **i18n the homepage.** Route `App.tsx` copy through `translations.ts` so the
  language selector affects the landing page, not just sub-pages.
- **Reduce styling drift.** Gradually migrate `App.tsx` inline styles toward the
  Tailwind tokens / `index.css` utility classes for consistency.

## Process reminder

Per `CLAUDE.md`: keep changes simple, match existing styling, ask before
structural or visual changes, and update `TASKS.md` after each change.
