# Deployment — About Me Klairs

## Host
Vercel (portfolio SPA).

## Build
- `npm run build` (vite build) -> static output.
- `vercel.json` rewrites all routes to `/index.html` (SPA client-side routing).

## Environment
- `VITE_GOOGLE_SCRIPT_URL` — Google Apps Script endpoint for the contact form (see `.env.example`; consumed in `src/lib/contact.ts`). `src/lib/contact.ts` also ships a hardcoded default, so the form works without it, but set it in Vercel env vars to point at your own script.
- `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` — read by `src/lib/supabase.ts` only. Not required for current functionality (the Supabase client is unused; see TECHNICAL_DEBT.md).

## Local
`npm run dev` (Vite dev server); `npm run preview` to preview a production build. `npm run lint` and `npm run typecheck` for checks.
