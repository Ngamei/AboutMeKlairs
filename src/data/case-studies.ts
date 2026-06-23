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
    title: 'Portfolio Contact Automation System',
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
};

export function getCaseStudy(slug: string): CaseStudyContent | undefined {
  return caseStudies[slug];
}
