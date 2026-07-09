# Architecture

A client-rendered single-page application. There is no custom backend server in
this repo — dynamic behavior (the contact form) is delegated to an external
Google Apps Script webhook.

## High-level flow

```
index.html
  └─ src/main.tsx           # React root, Router, LanguageProvider
       └─ Routes
            ├─ "/"                                 → src/App.tsx (the full portfolio page)
            ├─ "/concepts/risen-match"             → RisenMatchConceptPage
            ├─ "/concepts/risen-match/roadmap"     → RisenMatchRoadmapPage
            ├─ "/case-studies/broot-crm-sync"      → BrootUseCasePage
            └─ "/case-studies/:slug"               → CaseStudyPage (data-driven)
```

Routing is defined in `src/main.tsx`. It uses `react-router-dom` v7 with
`BrowserRouter`; Vercel rewrites all paths to `index.html` so deep links work
(see `vercel.json`).

## Directory layout

```
src/
  main.tsx            # App bootstrap: Router + LanguageProvider + routes
  App.tsx             # The homepage — the bulk of the UI (nav, hero, sections)
  index.css           # Global styles + custom utility classes (kl-page, fn-link, ...)
  vite-env.d.ts       # Typed import.meta.env declarations
  portfolio-data.ts   # Portfolio content data
  pages/              # Route-level components (thin wrappers over sections/data)
    CaseStudyPage.tsx        # Generic case study renderer, keyed by :slug
    BrootUseCasePage.tsx
    RisenMatchConceptPage.tsx
    RisenMatchRoadmapPage.tsx
  components/         # Section components used by the routed pages
    BrootUseCaseSection.tsx
    RisenMatchConceptSection.tsx
    RisenMatchRoadmapSection.tsx
  data/              # Content-as-data (the "CMS")
    case-studies.ts          # getCaseStudy(slug) → case study content
    broot-use-case.ts
    risen-match-concept.ts
    risen-match-roadmap.ts
    translations.ts          # i18n strings + language config
  lib/
    i18n.tsx          # LanguageProvider, useLanguage(), LanguageSelector
    contact.ts        # submitContactForm() → Google Apps Script webhook
    supabase.ts       # Supabase client (configured but effectively unused — see TECH_DEBT)
supabase/
  migrations/         # SQL for a contact_submissions table (parallel/legacy path)
public/               # Static assets (images, profile)
```

## Content-as-data pattern

Most page content lives in `src/data/*.ts` as typed objects/arrays rather than
being hardcoded in JSX. Route components (`src/pages/*`) look content up — e.g.
`CaseStudyPage` calls `getCaseStudy(slug)` from `src/data/case-studies.ts` and
renders it generically, showing a "not found" state when the slug is unknown.

**To add/edit case-study or concept content, edit the files in `src/data/`**,
not the page components.

## Internationalization (i18n)

- `src/data/translations.ts` holds all translated strings, the `Language` type,
  the list of `LANGUAGES`, and the `localStorage` key.
- `src/lib/i18n.tsx` exposes `LanguageProvider` (wraps the app in `main.tsx`),
  the `useLanguage()` hook (returns `{ language, setLanguage, t }`), and a
  `LanguageSelector` UI component.
- Components read copy via `const { t } = useLanguage()` and reference
  `t.<section>.<key>`.

> Note: `App.tsx` (the homepage) has a lot of hardcoded English copy inline and
> does not fully route through `translations.ts`. See `TECH_DEBT.md`.

## Styling

Three overlapping styling mechanisms are in play (be consistent with what a file
already uses):

1. **Tailwind CSS** — utility classes; design tokens (`ivory`, `navy`, `accent`,
   `mist`, `surface.1–4`, serif/sans fonts) are defined in `tailwind.config.js`.
2. **Custom CSS classes** in `src/index.css` — e.g. `kl-page`, `kl-title`,
   `kl-tag`, `fn-link`, `proj-card`, used heavily by `App.tsx`.
3. **Inline `style={{}}` objects** — `App.tsx` uses these extensively for the
   homepage layout and colors.

The design language: serif (Georgia) headings, warm ivory background (`#F7F3EE`),
navy (`#1C2030`) dark sections, blue accent (`#4A6FA5`).

## Contact form flow

1. `ContactModal` in `App.tsx` collects the form and calls `submitContactForm()`.
2. `src/lib/contact.ts` POSTs the payload (as `text/plain`, `mode: 'no-cors'`)
   to a **Google Apps Script** endpoint (`VITE_GOOGLE_SCRIPT_URL`, with a
   hardcoded default).
3. The Apps Script (outside this repo) logs to Google Sheets and sends an email.

Because the request is `no-cors`, the client cannot read the response — success
is assumed if `fetch` does not throw. There is no Supabase write in this path
despite `src/lib/supabase.ts` and the `supabase/migrations` table existing (see
`TECH_DEBT.md`).

## Build tooling

- **Vite 5** (`vite.config.ts`) with `@vitejs/plugin-react`; `lucide-react` is
  excluded from dep pre-bundling.
- **TypeScript** project references: `tsconfig.json` → `tsconfig.app.json`
  (app) + `tsconfig.node.json` (config files).
- **ESLint 9** flat config (`eslint.config.js`) with the TypeScript + React
  Hooks + React Refresh plugins.
- **Tailwind/PostCSS** via `tailwind.config.js` and `postcss.config.js`.
