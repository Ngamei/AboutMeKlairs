# Technical Debt — About Me Klairs

## Malformed CLAUDE.md, PROJECT_CONTEXT.md, TASKS.md
- **Where:** repo root Markdown files.
- **What:** broken/duplicated list nesting.
- **Fix:** CLAUDE.md rewritten; PROJECT_CONTEXT.md and TASKS.md formatting cleaned.
- **Added:** 2026-07-10

## Unused Supabase client vs Google Apps Script contact path
- **Where:** `src/lib/supabase.ts`, `supabase/migrations/20260623062241_create_contact_submissions.sql` vs `src/lib/contact.ts`.
- **What:** the live contact form posts to a Google Apps Script webhook; the Supabase client and `contact_submissions` migration exist but are never imported/used.
- **Risk:** confusion about the real data path; dead code and unused env vars (`VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`).
- **Fix:** decide on one path — either wire Supabase in, or remove the unused client + migration.
- **Added:** 2026-07-10

## Two site versions, canonical undecided
- **Where:** repo (original vs AboutMeKlairs2).
- **Risk:** unclear which to maintain; drift/duplication.
- **Fix:** decide canonical; redirect or deprecate the other (TASKS.md backlog).
- **Added:** 2026-07-10

## No README
- **Fix:** add a short README (TASKS.md backlog).
- **Added:** 2026-07-10
