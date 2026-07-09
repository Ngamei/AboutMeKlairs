# AI Docs — About Me Klairs

Entry point for AI agents and humans working on this repository. This is a
**light doc set** because the project is in maintenance mode.

## What is this project?

Klairs' personal portfolio site — a single-page React app (with a few
client-side routed sub-pages) presenting product-ops / customer-success / AI
automation work. It is a static front end deployed on Vercel, with a contact
form that posts to a Google Apps Script webhook.

Live: `https://aboutme.klairsthefirst.com` (also `about-me-klairs.vercel.app`).

## Doc map

| Doc | Read it when you need to… |
|---|---|
| [`ARCHITECTURE.md`](ARCHITECTURE.md) | Understand how the code is organized, routing, data, styling, and the contact flow. |
| [`DEPLOYMENT.md`](DEPLOYMENT.md) | Build, run locally, configure env vars, or ship to Vercel. |
| [`TECH_DEBT.md`](TECH_DEBT.md) | Know the known issues, dead paths, and traps before you touch things. |
| [`NEXT_STEPS.md`](NEXT_STEPS.md) | See the backlog and suggested follow-ups. |

## Ground rules

- **Maintenance mode.** Prefer small, low-risk changes. See the root
  [`CLAUDE.md`](../../CLAUDE.md) and [`.cursor/rules/project.mdc`](../../.cursor/rules/project.mdc).
- Match the existing Tailwind tokens in `tailwind.config.js`.
- Ask before structural or visual changes.
- Update [`TASKS.md`](../../TASKS.md) after making changes.

## Fast facts

- **Stack:** Vite 5 · React 18 · TypeScript 5 · Tailwind 3 · react-router-dom 7.
- **Icons:** `lucide-react` only.
- **Package manager:** npm (`package-lock.json` is committed).
- **Node scripts:** `dev`, `build`, `preview`, `lint`, `typecheck` (see `package.json`).
