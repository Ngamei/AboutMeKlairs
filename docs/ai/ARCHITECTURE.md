# Architecture — About Me Klairs

## Type
Client-side SPA: Vite + React 18 + TypeScript + Tailwind 3. Routing via react-router-dom v7.

## Entry & structure
- `src/main.tsx` mounts the router: `BrowserRouter` + `LanguageProvider` wrapping `Routes`.
- Routes: `/` -> `App`; `/concepts/risen-match` and `/concepts/risen-match/roadmap`; `/case-studies/broot-crm-sync`; `/case-studies/:slug`.
- `src/App.tsx` is the single-page home (nav, hero, sections, and the contact modal).
- Pages: `src/pages/*` (CaseStudyPage, BrootUseCasePage, RisenMatchConceptPage, RisenMatchRoadmapPage).
- Sections/components: `src/components/*`.
- Content data: `src/data/*` (case-studies, translations, broot-use-case, risen-match-concept, risen-match-roadmap) and `src/portfolio-data.ts`.
- Libs: `src/lib/contact.ts` (contact submit), `src/lib/i18n.tsx` (i18n provider), `src/lib/supabase.ts` (client — see note).

## Backend / contact form
No server of its own. The contact form (the modal in `src/App.tsx`) submits through `submitContactForm` in `src/lib/contact.ts`, which POSTs (mode `no-cors`) to a **Google Apps Script** endpoint (`VITE_GOOGLE_SCRIPT_URL`, with a hardcoded default). That script logs to Google Sheets and sends an email notification (see the "Portfolio Contact Automation" case study).

Note: `src/lib/supabase.ts` creates a Supabase client from `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`, and `supabase/migrations/20260623062241_create_contact_submissions.sql` defines a `contact_submissions` table. Neither is imported by the app today — they appear to be a legacy/alternate contact path. See TECHNICAL_DEBT.md.

## i18n
`src/lib/i18n.tsx` (`LanguageProvider` + `useLanguage`) + `src/data/translations.ts`.

## Note: two versions
An original and an updated ("AboutMeKlairs2") version exist; canonical choice is undecided (see NEXT_STEPS.md).
