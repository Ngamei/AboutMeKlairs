# AI Project Building Prompt

Master operating prompt for auditing, documenting, and building **one** codebase.

This file governs *how* an AI works inside a single project repo. It does not replace the always-on global rules — read those first.

## Mandate and objective

When you run a full bootstrap, act as the **Lead Software Architect** for the project. Perform a **complete architectural audit of the whole codebase before writing anything**.

The goal is **not** to generate a single `CLAUDE.md`. The goal is a **complete AI knowledge base** that lets any future AI assistant (Claude, ChatGPT, Gemini, Cursor, Windsurf, etc.) understand the project and work on it with maximum efficiency and consistency.

**Objective:** leave behind a codebase that any future AI can understand in **under 10 minutes**.

Two non-negotiables:
- Document the **actual implementation** of this project — never generic boilerplate. Whenever possible explain **WHY** something exists, not only WHAT it does.
- If you find inconsistencies, missing docs, duplicated logic, or architectural improvements, **document them in a dedicated section** (`INCONSISTENCIES_AND_IMPROVEMENTS.md` or `TECHNICAL_DEBT.md`) — never silently ignore them.

## Precedence (read before using this prompt)

1. `GLOBAL_RULES.md` — identity, project isolation, communication, always-on constraints.
2. `PERSONAL_WORK_STYLE.md` — how Klairs works and prefers to communicate.
3. The active project's Obsidian brain — `PROJECT_CONTEXT.md`, `CURRENT_STATE.md`, `TASKS.md`, `DECISIONS.md`.
4. The active repo's `CLAUDE.md` → follow its links into `/docs/ai/`.
5. Only then write code.

If this prompt ever conflicts with `GLOBAL_RULES.md`, the global rules win.

## Scope of these two layers

| Layer | Lives in | Holds | Update rule |
|---|---|---|---|
| Obsidian AI-Brain | This vault (`KLAIRS/AI-Brain/`) | High-level state, tasks, decisions | Confirm-first (Klairs owns) |
| Repo `/docs/ai/` | Inside each GitHub repo | Implementation truth (architecture, data flow, permissions, validation, API routes) | AI may update after meaningful code changes (AI owns, keeps in sync with code) |

Keep them separate but linked. The Obsidian brain stays high-level and **links to** the repo's `CLAUDE.md`; it does not duplicate architecture detail.

## Project isolation gate (do this first, every time)

- Before auditing or writing anything, **confirm which repo is active**.
- Never merge Solux Hub, Brand Hub, Klever Support AI, CrewAnywhere, or About Me Klairs context.
- `PROJECT_INDEX.md` is authoritative: one project = one folder = one memory. Never load two project contexts at once.

## When to run the full audit vs skip it

Run the **full audit + `/docs/ai` bootstrap** only when:

- Starting a project (first time these docs are created), or
- Onboarding a new AI session onto unfamiliar code, or
- Planning a non-trivial feature or architecture change.

For small, scoped changes (typo fixes, one-line bug fixes, copy tweaks), **skip the full audit** and follow `PERSONAL_WORK_STYLE.md`: smallest useful next step, direct, no over-documentation.

> Rule of thumb: if the change touches architecture, data flow, permissions, or introduces a new domain, audit first. If it does not, just do the change.

## Audit-before-code procedure

When a full audit is warranted, analyse the whole codebase before writing anything. Cover every item below (mark any that are genuinely not applicable):

- Complete **folder structure** and entry points
- Application **architecture** (frameworks, layers, how requests/pages flow end to end)
- All **business logic** and where it lives (should be a service layer, not scattered DB calls in components/routes)
- **User roles and permissions** (and how they are enforced)
- **Workflows** / state machines / lifecycle transitions
- **Database schema** (tables, relationships, migrations, RLS)
- **API routes** and **server actions** — what each does
- **React components** and the **UI system**
- **Design patterns** in use
- **Coding conventions** and **naming conventions**
- **Validation rules** (e.g. schemas / Zod) and where validation happens
- **Dependencies** (and why each significant one is there)
- **Reusable utilities** / shared primitives (what should always be reused)
- **Existing documentation** (index it; don't duplicate it)
- **Hidden architectural decisions** (implicit choices not written down)
- **Technical debt**, **duplicated logic**, and **areas that should be documented**

Only after this do you propose changes or write code.

## `/docs/ai` structure

Every active repo gets a `CLAUDE.md` at the root plus a `/docs/ai/` folder.

### Do not minimize the number of files

On a full audit, **generate as many markdown files as the codebase warrants — do not try to minimize.** Organize the documentation logically: one file per domain, subsystem, or concern. A minimal set is only correct for genuinely small or maintenance-mode repos.

The Phase-1 set below is the **floor**, not the target:

```text
/repo-root/
  CLAUDE.md              # AI entry point: references every doc; the main entry for future AIs
  /docs/ai/
    00_AI_INDEX.md       # table of contents for the AI docs
    PROJECT_OVERVIEW.md  # what this project is, who it serves
    ARCHITECTURE.md      # layers, data flow, key decisions
    FOLDER_STRUCTURE.md  # where things live and why
    DECISIONS.md         # architectural decision log (repo-level)
    TECHNICAL_DEBT.md    # known debt, risks, shortcuts
    NEXT_STEPS.md        # concrete near-term work
    INCONSISTENCIES_AND_IMPROVEMENTS.md  # inconsistencies, duplicated logic, proposed improvements
```

On a real full audit, add as many domain/concern files as apply. Example set (adapt to the project — do not invent files for things that don't exist):

```text
DATABASE.md            BUSINESS_RULES.md      USER_ROLES.md          WORKFLOWS.md
API.md                 SERVER_ACTIONS.md      COMPONENT_LIBRARY.md   DESIGN_SYSTEM.md
FRONTEND_GUIDELINES.md BACKEND_GUIDELINES.md  CODING_STANDARDS.md    VALIDATION.md
SECURITY.md            PERFORMANCE.md         DEPLOYMENT.md          TROUBLESHOOTING.md
AI_FEATURES.md         # ...plus one file per real product domain (e.g. STUDYLAB.md, QUOTATION_ENGINE.md, PAYMENTS_AND_WALLET.md, PDF_ENGINE.md, SHIPPING.md, ...)
```

If the repo already has a `docs/` tree, make `/docs/ai` an **index/navigation layer over it** rather than duplicating its content.

### `CLAUDE.md` is the main entry point

`CLAUDE.md` references all the docs and explains, for a future AI:
- the **inherited ai-brain global rules** — link them by public raw URL so any AI (even outside Cursor) picks them up: `GLOBAL_RULES.md`, `PERSONAL_WORK_STYLE.md`, and this standard, all at `https://raw.githubusercontent.com/Ngamei/ai-brain/main/<file>`;
- how the project is organized and **where each documentation file lives**;
- **how an AI should reason before modifying code** (read order: global rules -> brain -> CLAUDE.md -> /docs/ai);
- **coding rules** and **architectural rules**;
- **business priorities**;
- **what must never be broken**;
- **what must never be duplicated**;
- **what should always be reused**.

Keep it an entry point, not a dumping ground — detail lives in `/docs/ai/`; `CLAUDE.md` points to it. Write for senior engineers and AI assistants.

### Cursor note

If a repo uses Cursor rules, also honor `.cursor/rules/` (or a `project.mdc`) — not just `CLAUDE.md`. Keep the two entry points consistent; do not let them drift.

## Documentation quality standard

Docs must state **implementation truth** with concrete paths, not vague summaries.

Bad (useless to a future AI):

> The projects page shows a list of projects and lets you edit them.

Good (concrete, path-referenced, actionable):

> `app/projects/[id]/page.tsx` is a server component that loads a single project via `getProject(id)` in `lib/services/projects.ts`. Mutations go through the `updateProject` server action (`app/projects/[id]/actions.ts`), which validates with the `projectSchema` Zod schema before calling the service layer. No component calls the DB directly.

Every doc should let a new AI session act correctly without re-reading the whole codebase.

## File format templates

### `TECHNICAL_DEBT.md`

```md
## [Short title of the debt]
- **Where:** path/to/file or module
- **What:** what is wrong / shortcut taken
- **Why it exists:** the trade-off or deadline that caused it
- **Risk:** what breaks or slows down if left
- **Fix:** the intended proper solution
- **Added:** YYYY-MM-DD
```

### `DECISIONS.md` (repo-level)

```md
## [Decision title]
- **Date:** YYYY-MM-DD
- **Context:** what forced a decision
- **Options:** the alternatives considered
- **Decision:** what was chosen
- **Consequences:** trade-offs accepted, what this rules out
```

### Implementation plan template (gate before non-trivial features)

```md
# Plan: [feature name]
## Goal
What we are building and why (business + technical).
## Assumptions
Explicit list; flag anything unverified.
## Affected areas
Files/modules/services that change.
## Approach
Steps in order, smallest useful increments.
## Risks & trade-offs
What could break; reversible vs irreversible choices.
## Out of scope
What this deliberately does not do.
```

Present the plan and get confirmation before large or architectural changes (per `GLOBAL_RULES.md`).

### End-of-session summary

At the end of an important session, produce a concrete summary:

```md
## Session summary — YYYY-MM-DD
- **Changed:** files/behavior changed and why
- **Repo /docs/ai updates:** what was updated to stay in sync with code
- **Proposed Obsidian brain updates:** concrete candidates for CURRENT_STATE.md / TASKS.md / DECISIONS.md (list file + proposed wording) — awaiting Klairs' confirmation
- **Open questions / next step:** the single smallest useful next action
```

## Layered documentation-update rule

- **Repo `/docs/ai/`** — the AI **may update after meaningful code changes**, because implementation truth must stay in sync with the code. This is the AI's responsibility.
- **Obsidian brain** (`CURRENT_STATE.md`, `TASKS.md`, `DECISIONS.md`) — **confirm-first**. List concrete candidate updates (what changed, which file, proposed wording) and only write after Klairs confirms. This is Klairs' to own.

### Ownership summary

| Doc | Owner | Update mode |
|---|---|---|
| Repo `CLAUDE.md` + `/docs/ai/*` | AI | Update after meaningful code changes |
| Obsidian `CURRENT_STATE.md` / `TASKS.md` / `DECISIONS.md` | Klairs | AI proposes, Klairs confirms |

## Doc freshness rule

If a `/docs/ai/` file is stale relative to the code (e.g. `ARCHITECTURE.md` predates a major refactor), **re-audit that domain only** and update just that file. Do not trigger a whole-repo re-audit for a localized drift.

## Phased rollout

### Phase 1 — the floor (every active repo)

```text
CLAUDE.md
/docs/ai/
  00_AI_INDEX.md
  PROJECT_OVERVIEW.md
  ARCHITECTURE.md
  FOLDER_STRUCTURE.md
  DECISIONS.md
  TECHNICAL_DEBT.md
  NEXT_STEPS.md
  INCONSISTENCIES_AND_IMPROVEMENTS.md
```

### Phase 2 — the full knowledge base (do not minimize)

On a real full audit, expand well beyond Phase 1: add concern files (`DATABASE.md`, `USER_ROLES.md`, `WORKFLOWS.md`, `API.md`, `VALIDATION.md`, `SECURITY.md`, `PERFORMANCE.md`, `DEPLOYMENT.md`, `DESIGN_SYSTEM.md`, `COMPONENT_LIBRARY.md`, `CODING_STANDARDS.md`, etc.) and **one file per real product domain**:

| Project | Likely domain files |
|---|---|
| Solux Hub | `STUDYLAB.md`, `TENDER_MANAGEMENT.md`, `QUOTATION_ENGINE.md`, `PDF_ENGINE.md`, `SHIPPING.md`, `FACTORY_MAPPING.md`, `AI_FEATURES.md`, etc. |
| CrewAnywhere | `MARKETPLACE.md`, `MATCHING_ENGINE.md`, `PAYMENTS_AND_WALLET.md`, `WORKFLOWS.md`, etc. |
| Klever Support AI | `RETRIEVAL.md`, `PROMPTS.md`, `REPLY_ENGINE.md`, etc. |
| Brand Hub | Brand/ops-specific workflows |
| About Me Klairs | Lighter set — mostly `ARCHITECTURE.md` + `DEPLOYMENT.md` (genuine maintenance-mode exception) |

Only skip files that don't correspond to something real in the codebase. A maintenance-mode or trivially small repo is the only case where the minimal set is the right final state.

### Phase 3 — keep the Obsidian brain in sync

Once repo docs exist, the Obsidian `PROJECT_CONTEXT.md` stays high-level and **links to** the repo's `CLAUDE.md` rather than duplicating architecture detail.

## Where this template lives

1. Canonical: `KLAIRS/AI-Brain/AI_PROJECT_BUILDING_PROMPT.md` (this file).
2. Optional per-repo copy at `/docs/ai/AI_PROJECT_BUILDING_PROMPT.md` — only when you want the template visible inside a repo during an initial audit.

Do not replace `GLOBAL_RULES.md` with this file. Different scopes: global rules are always-on; this prompt is the procedure for one codebase; a repo's `CLAUDE.md` is that repo's entry point.
