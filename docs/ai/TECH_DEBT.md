# Tech Debt & Known Traps

Read this before making changes — several things are not what they look like.
The site is in maintenance mode, so most items are documented rather than fixed.

## 1. Supabase is configured but effectively unused

- `src/lib/supabase.ts` creates a client and `@supabase/supabase-js` is a
  dependency, and `supabase/migrations/` defines a `contact_submissions` table.
- **But the live contact form does not use Supabase.** It POSTs to a Google
  Apps Script webhook (`src/lib/contact.ts`).
- `supabase` is not imported anywhere except its own module, so the client is
  dead code as far as the app is concerned.
- Consequences: the `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` env vars are
  read but do nothing meaningful, and they are missing from `.env.example`.

**Trap:** Don't assume submissions are stored in Supabase. Decide explicitly
whether to (a) wire Supabase into the contact flow, or (b) remove the client,
the dependency, and the migration.

## 2. Two portfolio versions, no canonical decision

`PROJECT_CONTEXT.md` notes there are two versions — "AboutMeKlairs" (original)
and "AboutMeKlairs2" (updated) — and it is undecided which is canonical, or
whether the old one should be redirected/deprecated. This is tracked in
`TASKS.md`.

## 3. Contact form is fire-and-forget (`no-cors`)

`submitContactForm` uses `mode: 'no-cors'`, so the browser cannot read the
response. The UI shows "success" whenever `fetch` doesn't throw — a server-side
failure (e.g. Apps Script error) will still look successful to the user.

## 4. Hardcoded webhook URL in source

`src/lib/contact.ts` embeds a default Google Apps Script URL as a fallback.
It works, but the endpoint is baked into the client bundle and version control.

## 5. Homepage copy bypasses i18n

The project has a full i18n system (`src/lib/i18n.tsx` + `src/data/translations.ts`),
but `src/App.tsx` (the homepage) hardcodes most of its English copy inline
instead of reading from `t.*`. Translating the homepage would require routing
that copy through `translations.ts`.

## 6. Tailwind `accent` is a single color, but shade classes are used

`tailwind.config.js` defines `accent` as one color (`#4A6FA5`), not a palette.
Yet components (e.g. `src/lib/i18n.tsx`, `src/pages/CaseStudyPage.tsx`) use
classes like `accent-50`, `accent-600`, `accent-700`, `accent-800`. Those
numbered shades are **not defined**, so those utilities silently do nothing.
Either define an `accent` palette (50–900) in the Tailwind config or replace the
shade classes with the flat `accent` token / explicit colors.

## 7. Static asset inconsistencies

- `index.html` sets the favicon to `/vite.svg`, which does **not** exist in
  `public/` → the favicon 404s. A real asset (e.g. `klairs-profile.svg`) should
  be referenced instead.
- `public/` contains both `klairs-profile.png` (used by `App.tsx`) and an unused
  `klairs-profile.svg`.
- `public/klairs.png` is ~2.5 MB and unoptimized; verify whether it is even used
  before shipping it.

## 8. Mixed styling approaches

`App.tsx` mixes Tailwind utility classes, custom CSS classes from `index.css`,
and large inline `style={{}}` objects. This makes visual changes error-prone.
The `CLAUDE.md` rule "match existing Tailwind styling" is aspirational for this
file. Match whatever the surrounding code already uses.

## 9. No README, minimal project docs

There is no `README.md` (tracked in `TASKS.md`). This `docs/ai/` set plus
`CLAUDE.md` and `PROJECT_CONTEXT.md` are currently the main documentation.
