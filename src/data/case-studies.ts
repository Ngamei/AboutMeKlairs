export interface CaseStudyStep {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface CaseStudyContent {
  slug: string;
  title: string;
  subtitle: string;
  overview: string[];
  workflow: string[];
  tools: string[];
  steps: CaseStudyStep[];
  finalResult: string[];
  outcome: { intro: string; bullets: string[] };
  futureImprovements: string[];
  portfolioSummary: string;
}

export const caseStudies: Record<string, CaseStudyContent> = {
  'portfolio-contact-automation': {
    slug: 'portfolio-contact-automation',
    title: 'Portfolio Contact Automation Workflow',
    subtitle: 'Google Apps Script · Google Sheets · Gmail · Vercel · Cloudflare',
    overview: [
      'I built a lightweight contact automation system for my personal portfolio website to capture visitor inquiries, save them into Google Sheets, and send automated email notifications.',
      'The goal was to create a simple but reliable workflow that turns a portfolio contact form into a structured lead capture system without needing a full backend, database, or CRM setup.',
    ],
    workflow: [
      'Visitor fills portfolio form',
      '→ Google Apps Script Web App endpoint receives the submission',
      '→ Submission is saved to Google Sheets',
      '→ Email notification is sent to me',
      '→ Confirmation email is sent to the visitor',
      '→ Future-ready for n8n, CRM, Notion, or HubSpot integration',
    ],
    tools: [
      'Vercel',
      'GitHub',
      'Vite',
      'React',
      'TypeScript',
      'Google Apps Script',
      'Google Sheets',
      'Gmail / MailApp',
      'Cloudflare DNS',
      'Custom domain: klairsthefirst.com',
      'Portfolio subdomain: aboutme.klairsthefirst.com',
    ],
    steps: [
      {
        title: '1. Created Google Sheet Lead Database',
        paragraphs: [
          'I created a Google Sheet named Klairs Portfolio Leads to store all contact form submissions.',
          'This gives me a simple lead database where every inquiry can be tracked, reviewed, and followed up.',
        ],
        bullets: [
          'Timestamp',
          'Name',
          'Email',
          'Company',
          'Role',
          'Project Type',
          'Preferred Contact',
          'Message',
          'Source',
          'Status',
          'Owner Email Status',
          'Visitor Email Status',
        ],
      },
      {
        title: '2. Created Google Apps Script Web App',
        paragraphs: ['I created a Google Apps Script project connected to the Google Sheet. The script includes:'],
        bullets: [
          'doGet() to confirm the endpoint is running',
          'doPost() to receive form submissions',
          'Data validation for required fields',
          'Email validation',
          'Google Sheets row insertion',
          'Owner email notification',
          'Visitor confirmation email',
          'JSON response handling',
        ],
      },
      {
        title: '3. Connected Portfolio Form to Apps Script Endpoint',
        paragraphs: [
          'The portfolio contact form sends data to the Google Apps Script Web App endpoint using a POST request. The request includes name, email, company, role / interest, project type, preferred contact method, message, and source.',
          'Because Google Apps Script can have CORS limitations, the frontend uses a no-cors request pattern. The form treats the submission as successful if the request completes without throwing an error.',
        ],
      },
      {
        title: '4. Added Environment Variable in Vercel',
        paragraphs: [
          'I moved the Google Apps Script endpoint into a Vercel environment variable: VITE_GOOGLE_SCRIPT_URL.',
          'This keeps the contact form configuration cleaner and makes it easier to update the endpoint later without hardcoding it directly in the frontend.',
        ],
      },
      {
        title: '5. Deployed Portfolio Website on Vercel',
        paragraphs: ['The portfolio website was deployed through Vercel from GitHub.'],
        bullets: [
          'Framework: Vite + React + TypeScript',
          'Build command: npm run build',
          'Output directory: dist',
          'Repository: Ngamei/AboutMeKlairs',
          'Hosting: Vercel',
        ],
      },
      {
        title: '6. Configured Custom Domain with Cloudflare',
        paragraphs: [
          'I configured the custom domain through Cloudflare and Vercel.',
          'Cloudflare DNS was configured to point the portfolio subdomain to Vercel using the DNS records required by Vercel.',
        ],
        bullets: ['Main domain: klairsthefirst.com', 'Portfolio subdomain: aboutme.klairsthefirst.com'],
      },
      {
        title: '7. Added Automated Email Notifications',
        paragraphs: ['The Apps Script workflow sends two emails after each successful form submission.'],
        bullets: [
          'Owner notification email — sent to ngamei2912@gmail.com with visitor details so I can reply directly',
          'Visitor confirmation email — sent to the visitor to confirm receipt and set follow-up expectations',
        ],
      },
      {
        title: '8. Added Email Delivery Status Tracking',
        paragraphs: [
          'The Google Sheet includes Owner Email Status and Visitor Email Status columns.',
          'Each submission records whether each email was successfully sent. This makes the workflow easier to debug and audit.',
        ],
      },
    ],
    finalResult: [
      'The final system works as a lightweight CRM-style workflow for my portfolio.',
      'When someone submits the contact form:',
      '1. Their inquiry is saved into Google Sheets.',
      '2. I receive an email notification.',
      '3. The visitor receives a confirmation email.',
      '4. The submission status is tracked in the sheet.',
      '5. The workflow can later be extended into n8n, HubSpot, Notion, or another CRM.',
    ],
    outcome: {
      intro:
        'This project shows my ability to connect frontend forms, serverless-style automation, data storage, and email notifications into a practical workflow. It demonstrates:',
      bullets: [
        'Workflow automation',
        'Contact form backend setup',
        'Google Apps Script development',
        'Google Sheets as a lightweight database',
        'Email automation',
        'Vercel deployment',
        'Environment variable configuration',
        'Domain and DNS setup',
        'Practical product operations thinking',
      ],
    },
    futureImprovements: [
      'Add n8n automation for CRM sync',
      'Send submissions to HubSpot or Notion',
      'Add spam protection with a honeypot field',
      'Add form analytics',
      'Add auto-tagging by project type',
      'Add follow-up status tracking',
      'Create a simple dashboard for inquiry management',
    ],
    portfolioSummary:
      'I built a lightweight lead capture and email automation system for my portfolio using Google Apps Script, Google Sheets, Gmail, Vercel, and Cloudflare. When a visitor submits the contact form, the workflow saves the inquiry to Google Sheets, sends me an email notification, sends the visitor a confirmation email, and records email delivery status for tracking. The system is simple, low-cost, and future-ready for CRM or n8n automation.',
  },
  'anh-nga-diamond-brand-hub': {
    slug: 'anh-nga-diamond-brand-hub',
    title: 'ANH NGA DIAMOND Brand Hub',
    subtitle: 'Private source-of-truth hub · Next.js · Supabase · Markdown',
    overview: [
      'ANH NGA DIAMOND Brand Hub is a private internal source-of-truth hub for a multi-brand jewelry business. It organizes brand strategy, launch planning, decisions, workflows, team responsibilities, brand portals, and important links into one clean internal workspace.',
      'The project is intentionally lightweight. It is not a CRM, order tracker, task management system, campaign tool, HR system, finance system, or public marketing website.',
      'ANH NGA DIAMOND operates three separate brands: Origin (natural diamond jewelry), Clair (lab-grown diamond jewelry), and Memoir (custom, personal, and milestone jewelry). Origin is the first public-facing launch brand, but Clair and Memoir remain real separate brands with their own documentation and future launch paths.',
    ],
    workflow: [
      'Scattered knowledge (Markdown, Claude, Zoho, Google tools, internal decisions)',
      '→ Private Hub as source-of-truth and reference',
      '→ Google OAuth + approved_users allowlist + admin/viewer roles',
      '→ Dashboard · Company · Brands · Roadmap · Workflows · Decisions · Links · Admin',
      '→ Brand portals (Origin, Clair, Memoir) hold brand-specific documents',
      '→ 8-phase business roadmap tracks launch timeline',
      '→ Claude Code updates Markdown source files (read-only in Hub MVP)',
      '→ Zoho, Forms, Sheets, Calendar, Meet handle task execution',
    ],
    tools: [
      'Next.js App Router',
      'TypeScript',
      'Tailwind CSS',
      'Supabase Auth',
      'Google OAuth',
      'approved_users allowlist',
      'Markdown source files',
      'Claude Code',
      'Cursor AI',
      'Zoho Projects',
      'Google Forms · Sheets · Calendar · Meet',
    ],
    steps: [
      {
        title: '1. Defined the Core Problem',
        paragraphs: [
          'Business knowledge was scattered across Markdown files, Claude conversations, planning docs, Zoho Projects, Google Forms, Google Sheets, Google Calendar, Google Meet, and internal decisions.',
          'The Hub gives the team one place to answer: what is the latest brand truth, what phase are we in, who owns what, what decisions have been made, what workflows to follow, and where the important links are.',
        ],
      },
      {
        title: '2. Scoped the MVP',
        paragraphs: ['I defined a clear MVP that stays reference-first and avoids overbuilding.'],
        bullets: [
          'Private login-protected access with Supabase Google OAuth',
          'approved_users allowlist and admin/viewer role model',
          'Company page, brand portals, 8-phase roadmap, workflows, decision log, important links',
          'Read-only source-of-truth structure — not CRM, orders, campaigns, HR, or finance',
        ],
      },
      {
        title: '3. Designed Information Architecture',
        paragraphs: [
          'Final Hub structure: Dashboard, Company, Brands (Origin / Clair / Memoir portals), Roadmap, Workflows, Decisions, Important Links, and Admin.',
          'I separated three layers: the business roadmap (execution timeline), brand portals (per-brand documents and references), and software milestones (how the Hub itself is built).',
        ],
        bullets: [
          'Origin Portal — active launch brand for natural diamond jewelry',
          'Clair Portal — future-launch workspace for lab-grown diamond jewelry',
          'Memoir Portal — future-launch workspace for custom and milestone jewelry',
        ],
      },
      {
        title: '4. Structured the 8-Phase Business Roadmap',
        paragraphs: ['The roadmap is separate from brand portals and tracks the business launch timeline.'],
        bullets: [
          'Brand Foundation → Visual Identity → Social Account Setup',
          'Website & Inquiry Funnel → Content Bank → Soft Social Launch',
          'Social Proof Preparation → Partner Outreach',
        ],
      },
      {
        title: '5. Defined Update Flow and Tool Separation',
        paragraphs: [
          'The Hub is read-only for source documents in the MVP. When something marked "To decide" becomes confirmed, the flow is: add the decision to the decisions log, update the affected Markdown file, check related files for ripple effects, and summarize what changed. Updates happen through Claude Code, not an in-app editor.',
        ],
        bullets: [
          'Brand Hub = source of truth and reference',
          'Claude Code = updates Markdown source files',
          'Zoho Projects = task execution',
          'Google Forms / Sheets = inquiry intake and form data',
          'Google Calendar / Meet = consultation booking and calls',
        ],
      },
      {
        title: '6. Completed Milestone A — Planning',
        paragraphs: ['Planning artifacts completed before implementation.'],
        bullets: [
          'PRD, Architecture, Database, UI Spec, Product Roadmap, Backlog',
          'Engineering Decisions, Content Source Map, File Conventions, UI Style Guide',
        ],
      },
      {
        title: '7. Completed Milestone B — Platform Foundation',
        paragraphs: ['The authenticated Hub shell is running locally with core routes in place.'],
        bullets: [
          'Next.js App Router, TypeScript, Tailwind CSS, Supabase Auth, Google OAuth',
          'approved_users allowlist, admin role, sidebar shell, protected routes',
          'ngamei2912@gmail.com logs in as admin with role badge',
          'Company, Brands, Roadmap, Workflows, Decisions, Important Links, and Admin routes exist',
          'Workflows page shows read-only reference structure',
        ],
      },
      {
        title: '8. Next — Milestone C: Knowledge Hub',
        paragraphs: [
          'The next step connects real Brand OS Markdown files into the Hub: Markdown rendering, source file manifest, brand OS document rendering, decision log rendering, workflow document rendering, and brand portal document links. This turns the current authenticated shell into a usable internal knowledge system.',
        ],
      },
    ],
    finalResult: [
      'Milestone B is complete. The Hub runs locally with working Google OAuth login, admin access, sidebar navigation, and all core routes implemented as a working shell.',
      'The information architecture is in place: company context, three brand portals, 8-phase roadmap, workflow references, decision log, and important links — all inside one private workspace.',
      'The system is intentionally scoped. Reference and alignment live in the Hub; task execution stays in Zoho and Google tools.',
    ],
    outcome: {
      intro: 'This project shows product thinking and practical system design. It demonstrates how I:',
      bullets: [
        'Turn scattered business knowledge into a structured system',
        'Define MVP scope clearly and avoid overbuilding',
        'Separate reference knowledge from execution tools',
        'Design internal tools around real team workflows',
        'Create information architecture for a multi-brand business',
        'Use Claude Code and AI-assisted planning to move from strategy to implementation',
      ],
    },
    futureImprovements: [
      'Long-term direction: evolve from an ANH NGA DIAMOND source-of-truth workspace into a reusable operating template for inquiry-led custom product businesses',
      'Best fit where customers cannot simply buy from a product page — inquiry, consultation, requirements gathering, quotation, partner coordination, approval, and follow-up',
      'Examples: custom jewelry, diamond sourcing, wedding rings, tailored fashion, custom furniture, interior design, bespoke gifts, event planning',
      'Next — Milestone C — Knowledge Hub: render Brand OS Markdown files inside the Hub and turn the authenticated shell into a usable knowledge system',
      'Future modules after ANH NGA DIAMOND works: inquiry intake reference, customer requirement brief templates, consultation preparation checklist',
      'Quote request workflow, partner/supplier coordination notes, production readiness checklist, approval and handoff references',
      'Brand-specific customer communication rules, visual identity and content reference library, decision log and pending decision tracker',
      'Team onboarding and SOP library — future modules, not MVP features',
      'Gradual expansion: first solve source-of-truth for ANH NGA DIAMOND, then standardize repeated inquiry-led workflows into reusable modules only when the process is clear enough',
    ],
    portfolioSummary:
      'I designed and built a private Brand Hub for ANH NGA DIAMOND that consolidates brand strategy, launch planning, decisions, workflows, and team responsibilities into one login-protected workspace. The Hub separates an 8-phase business roadmap from dedicated brand portals for Origin, Clair, and Memoir, keeps task execution in Zoho and Google tools, and uses Claude Code for Markdown updates. Milestone B is complete with Supabase auth, role-based access, and a working information architecture shell. The long-term direction is to evolve this into a reusable operating template for inquiry-led custom product businesses.',
  },
};

export function getCaseStudy(slug: string): CaseStudyContent | undefined {
  return caseStudies[slug];
}
