export type Language = 'en' | 'vi' | 'ko';

export const LANGUAGES: { code: Language; label: string; compact: string }[] = [
  { code: 'en', label: 'English', compact: 'EN' },
  { code: 'vi', label: 'Vietnamese', compact: 'VI' },
  { code: 'ko', label: 'Korean', compact: 'KO' },
];

export const STORAGE_KEY = 'klairs-portfolio-lang';

export interface ProjectTranslation {
  tags: string[];
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  keyWork: string[];
  tech: string;
  outcome: string;
}

export interface TranslationContent {
  nav: { about: string; projects: string; evidence: string; skills: string; contact: string };
  hero: {
    badge: [string, string, string];
    headline: string;
    description: string;
    contactMe: string;
    viewProjects: string;
    github: string;
    linkedin: string;
    email: string;
  };
  about: {
    eyebrow: string;
    title: string;
    bio1: string;
    bio2: string;
    specialization: string;
    industryExperience: string;
    industries: string[];
    specializations: string[];
    quote: string;
    photoAlt: string;
  };
  work: {
    eyebrow: string;
    title: string;
    cards: { title: string; description: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    myRole: string;
    outcome: string;
    keyWork: string;
    techTools: string;
    subsections: {
      featured: { eyebrow: string; title: string; subtitle: string };
      automation: { eyebrow: string; title: string; subtitle: string };
      concepts: { eyebrow: string; title: string; subtitle: string };
    };
    items: Record<string, ProjectTranslation>;
  };
  concepts: {
    eyebrow: string;
    title: string;
    description: string;
    items: Record<string, { title: string; subtitle: string; description: string }>;
  };
  evidence: {
    eyebrow: string;
    title: string;
    description: string;
    requestDocument: string;
    items: Record<string, { title: string; description: string; linkLabel?: string }>;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    groups: Record<string, { title: string; items: string }>;
  };
  outcomes: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  approach: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    items: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    contactMe: string;
    email: string;
    linkedin: string;
    scanPortfolioTitle: string;
    scanPortfolioCaption: string;
  };
  footer: { rights: string; github: string; email: string; linkedin: string };
  caseStudy: {
    eyebrow: string;
    backToPortfolio: string;
    notFound: string;
    projectOverview: string;
    workflow: string;
    toolsUsed: string;
    implementationSteps: string;
    finalResult: string;
    outcome: string;
    futureImprovements: string;
    portfolioSummary: string;
  };
  links: {
    github: string;
    watchDemo: string;
    n8nWorkspace: string;
    viewProfile: string;
    viewRepository: string;
    openWorkspace: string;
    viewCaseStudy: string;
    projectNotes: string;
    useCaseOutcome: string;
    viewConcept: string;
    mvpRoadmap: string;
    liveSite: string;
  };
  modal: {
    title: string;
    subtitle: string;
    messageSent: string;
    thanks: string;
    close: string;
    error: string;
    fullName: string;
    fullNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    companyProject: string;
    companyPlaceholder: string;
    contactReason: string;
    selectOption: string;
    reasons: string[];
    message: string;
    messagePlaceholder: string;
    relevantLink: string;
    relevantLinkPlaceholder: string;
    preferredContact: string;
    contactMethods: string[];
    timeline: string;
    timelines: string[];
    consent: string;
    sending: string;
    sendMessage: string;
  };
}

const en: TranslationContent = {
  nav: { about: 'About', projects: 'Projects', evidence: 'Evidence', skills: 'Skills', contact: 'Contact' },
  hero: {
    badge: ['Product Operations', 'AI Automation', 'Customer Success'],
    headline: 'I turn confusion into systems.',
    description:
      'I work across customer success, product operations, QA, and AI automation — identifying friction, structuring messy problems, testing workflows, and building practical solutions that make products easier to understand and use.',
    contactMe: 'Contact Me',
    viewProjects: 'View Projects',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
  },
  about: {
    eyebrow: 'About',
    title: 'About Klairs',
    bio1:
      "I'm Klairs, a product-focused Customer Success and Product Operations specialist who bridges customers, product, and engineering teams to deliver SaaS and AI-powered solutions.",
    bio2:
      'My work sits across product discovery, workflow design, onboarding, payments, CRM integration, QA/UAT, release validation, and AI-assisted product building. I enjoy turning unclear support issues, customer feedback, and operational gaps into structured workflows, requirements, automation systems, and product improvements.',
    specialization: 'Specialization',
    industryExperience: 'Industry Experience',
    industries: ['SaaS', 'FinTech', 'AI Automation', 'CRM Integration', 'Marketplace Platforms', 'Merchant Experience'],
    specializations: [
      'Product operations and customer workflow design',
      'SaaS onboarding, implementation, and support systems',
      'AI-assisted tools for support, product, and automation workflows',
      'API, webhook, CRM, and integration testing',
      'Marketplace, payment, wallet, and operational product flows',
    ],
    quote:
      '"My approach combines customer empathy, product thinking, technical curiosity, and AI-assisted execution."',
    photoAlt: 'Klairs — Product Operations and Customer Success specialist',
  },
  work: {
    eyebrow: 'Capabilities',
    title: 'What I Do',
    cards: [
      {
        title: 'Product & Workflow Thinking',
        description:
          'I translate unclear customer or merchant issues into structured requirements, user stories, QA notes, and product improvements.',
      },
      {
        title: 'QA & Edge Case Testing',
        description:
          'I test workflows end to end, document edge cases, reproduce issues clearly, and help teams understand what is actually happening.',
      },
      {
        title: 'AI-Assisted Systems',
        description:
          'I build AI-supported tools, documentation flows, automations, and internal assistants that reduce confusion and improve execution.',
      },
    ],
  },
  projects: {
    eyebrow: 'Work',
    title: 'Projects',
    description: 'Product builds, automation workflows, and concept work showing how I design, test, and ship practical systems.',
    myRole: 'My Role',
    outcome: 'Outcome',
    keyWork: 'Key Work',
    techTools: 'Tech / Tools',
    subsections: {
      featured: {
        eyebrow: 'Featured Proof',
        title: 'Featured Product Projects',
        subtitle: 'Selected product work showing AI implementation, marketplace thinking, QA depth, and structured delivery.',
      },
      automation: {
        eyebrow: 'Automation Proof',
        title: 'Automation & Integration Workflows',
        subtitle:
          'Practical systems I built to connect forms, APIs, CRMs, spreadsheets, email notifications, and operational workflows.',
      },
      concepts: {
        eyebrow: 'Concepts',
        title: 'Product Ideas & Concepts',
        subtitle: 'Product concepts showing how I think about workflow design, merchant experience, and vertical platforms.',
      },
    },
    items: {
      contactAutomation: {
        tags: ['Workflow Automation', 'Google Apps Script', 'Vercel', 'Email Automation'],
        title: 'Portfolio Contact Automation Workflow',
        subtitle: 'Google Apps Script · Google Sheets · Gmail · Vercel · Cloudflare',
        summary:
          'Built a lightweight lead capture workflow that saves portfolio inquiries to Google Sheets, sends owner notifications, and sends visitor confirmation emails.',
        role: 'Product owner, workflow designer, Google Apps Script developer, and full-stack implementer.',
        keyWork: [
          'Turned the portfolio contact form into a simple lead capture workflow',
          'Saved every inquiry to Google Sheets for tracking and follow-up',
          'Automated owner notifications and visitor confirmation emails',
          'Deployed the live portfolio with custom domain and hosting setup',
          'Designed the workflow to extend later into CRM or n8n automation',
        ],
        tech: 'Vite, React, TypeScript, Google Apps Script, Google Sheets, Gmail, Vercel, Cloudflare DNS, GitHub',
        outcome:
          'Lightweight CRM-style lead capture workflow that saves inquiries, notifies me, confirms with visitors, and is ready for n8n or CRM extension',
      },
      anhNgaDiamondBrandHub: {
        tags: ['Business OS', 'Product Thinking', 'Internal Tools', 'Brand Operations', 'AI-Assisted Build', 'Supabase', 'Next.js'],
        title: 'ANH NGA DIAMOND Brand Hub',
        subtitle: 'Private source-of-truth hub for multi-brand jewelry operations',
        summary:
          'A private source-of-truth hub for ANH NGA DIAMOND that organizes brand strategy, launch planning, decisions, workflows, team responsibilities, and brand portals into a clean internal workspace.',
        role: 'Product owner, information architect, workflow designer, and AI-assisted builder.',
        keyWork: [
          'Consolidated scattered brand knowledge from Markdown docs, planning files, and AI conversations into one private workspace',
          'Defined MVP scope that separates source-of-truth reference from task execution in Zoho, Forms, and Calendar',
          'Structured an 8-phase launch roadmap alongside brand portals for Origin, Clair, and Memoir',
          'Designed a calm, document-first internal workspace with sidebar navigation, decision log, and team responsibilities',
          'Built authenticated access with Supabase Google OAuth, approved-users allowlist, and admin/viewer roles',
          'Scoped the hub to stay lightweight — alignment and reference, not CRM, orders, or campaign management',
        ],
        tech: 'Next.js App Router, TypeScript, Tailwind CSS, Supabase Auth, Google OAuth, Markdown source files, Claude Code, Cursor AI',
        outcome:
          'Milestone B complete: authenticated hub shell with company page, brand portals, roadmap, workflows, decisions, and admin routes',
      },
      helloClever: {
        tags: ['AI Support', 'Documentation', 'Merchant Experience', 'QA'],
        title: 'Hello Clever Support Engineer AI',
        subtitle: 'AI assistant for merchant support and documentation',
        summary:
          'An AI assistant that helps support teams navigate official documentation and generate structured merchant support replies with classification, routing, and regression-tested reply generation.',
        role: 'Product owner, solution designer, prompt/system designer, QA tester, and AI-assisted implementation lead.',
        keyWork: [
          'Designed a V3 Merchant Reply Engine for merchant support scenarios',
          'Created 7 reply types for support classification',
          'Built logic for setup, troubleshooting, payment lookup, operational requests, and escalation cases',
          'Used official documentation as grounded support context',
          'Generated structured internal notes and merchant-ready replies',
          'Added ticket workspace, AI run history, pinned tickets, and regression coverage',
        ],
        tech: 'Next.js, TypeScript, Vercel, GitHub, Cursor AI, OpenAI/GPT, prompt engineering, Playwright, JSON schemas, regression testing',
        outcome: '132/132 matrix test cases passing',
      },
      broot: {
        tags: ['Customer Success', 'Automation', 'CRM', 'QA'],
        title: 'Broot → CRM Sync Workflows',
        subtitle: 'Event lead capture, follow-up automation, and multi-CRM sync',
        summary:
          'End-to-end automation connecting Broot lead capture with n8n routing, Hot/Warm/Cold follow-up logic, and CRM sync across HubSpot, Zoho CRM, and Streak CRM.',
        role: 'Automation workflow designer, integration tester, CRM setup owner, and documentation lead.',
        keyWork: [
          'Built and tested Broot → n8n → HubSpot CRM sync flows',
          'Planned and tested Zoho and Streak CRM integrations',
          'Documented webhook endpoint configuration, headers, and Basic Auth setup',
          'Mapped request body fields, nested CRM fields, and dropdown values',
          'Created Guidde walkthrough demos and operational SOPs',
          'Validated Hot, Warm, and Cold lead-tag routing across follow-up and CRM sync paths',
        ],
        tech: 'n8n, Zapier, HubSpot CRM, Zoho CRM, Streak CRM, webhooks, Postman, RequestBin, Pipedream, JSON, API troubleshooting, Guidde',
        outcome: 'Working automation demos, validated CRM sync flows, and reusable webhook integration documentation',
      },
      crewAnywhere: {
        tags: ['Product', 'Marketplace', 'Workflow Design'],
        title: 'CrewAnywhere Product Build',
        subtitle: 'Marketplace and operations platform',
        summary:
          'A marketplace and operations platform for event staffing with structured product thinking across onboarding, job matching, shift operations, wallets, payments, and withdrawals.',
        role: 'Product owner, workflow designer, marketplace operations architect, and implementation lead.',
        keyWork: [
          'Designed marketplace and operations platform for event staffing',
          'Built onboarding, jobs, assignments, and shift management workflows',
          'Structured wallet, payment, and withdrawal product flows',
          'Mapped user journeys across clients, crews, and operations teams',
          'Defined operational product requirements and workflow handoffs',
          'Implemented marketplace matching and staffing coordination logic',
        ],
        tech: 'Next.js, React, TypeScript, Tailwind CSS, marketplace workflows, payment and wallet systems, GitHub, product workflow design',
        outcome:
          'Designed CrewAnywhere as a marketplace and operations platform with onboarding, jobs, assignments, shifts, wallets, payments, and withdrawals',
      },
    },
  },
  concepts: {
    eyebrow: 'Concepts',
    title: 'Product Ideas & Concepts',
    description: 'Product concepts showing how I think about workflow design, merchant experience, and vertical platforms.',
    items: {
      pmAssistance: {
        title: 'Klairs PM Assistance',
        subtitle: 'AI workflow assistant for Merchant Experience Product Management',
        description:
          'A personal AI workflow concept designed to convert merchant issues, onboarding friction, payment setup problems, dashboard UX gaps, support tickets, and product feedback into structured PM outputs such as requirements, discovery questions, QA scenarios, prioritization notes, stakeholder summaries, and engineering handoff.',
      },
      risenMatch: {
        title: 'Rise-n-Match',
        subtitle: 'Pilates booking & studio matching marketplace',
        description:
          'A centralized Pilates marketplace concept that helps users discover studios, get matched to the right class, and book in one place—while helping studios fill off-peak beds with higher-intent leads.',
      },
    },
  },
  evidence: {
    eyebrow: 'Proof',
    title: 'Evidence & Artifacts',
    description: 'Repositories, demos, automation workspaces, and documentation that show how I work.',
    requestDocument: 'Request document',
    items: {
      githubProfile: {
        title: 'GitHub Profile',
        description: 'Public code and product-building repositories.',
        linkLabel: 'View Profile',
      },
      helloCleverRepo: {
        title: 'Hello Clever Support Engineer AI Repository',
        description: 'AI merchant support assistant with classification, structured replies, and regression testing.',
        linkLabel: 'View Repository',
      },
      crewAnywhereRepo: {
        title: 'CrewAnywhere Repository',
        description: 'Marketplace and operations platform for event staffing.',
        linkLabel: 'View Repository',
      },
      brootDemo: {
        title: 'Broot Automation Demo',
        description: 'Guidde walkthrough showing workflow automation and CRM integration work.',
        linkLabel: 'Watch Demo',
      },
      n8nWorkspace: {
        title: 'n8n Automation Workspace',
        description: 'Automation workspace used for workflow testing and CRM sync experiments.',
        linkLabel: 'Open Workspace',
      },
      streakWebhook: {
        title: 'Broot → Streak CRM Webhook Setup',
        description:
          'Documentation covering endpoint configuration, headers, Basic Auth, request body mapping, nested CRM fields, and dropdown values.',
      },
      resume: {
        title: 'Product Manager Resume',
        description:
          'Resume showing marketplace, payments, wallet systems, AI-enabled workflow automation, UAT, and cross-functional delivery.',
      },
    },
  },
  skills: {
    eyebrow: 'Toolkit',
    title: 'Tech Skills & Tools',
    description: 'The product, operations, automation, and technical tools I use across delivery work.',
    groups: {
      productManagement: {
        title: 'Product Management',
        items:
          'Product discovery, roadmap planning, backlog prioritization, sprint planning, stakeholder interviews, user stories, acceptance criteria, PRD/FRD writing, workflow analysis, release readiness, Agile/Scrum, UAT.',
      },
      customerSuccess: {
        title: 'Customer Success & Product Operations',
        items:
          'Customer onboarding, SaaS implementation, product adoption, training, customer feedback loops, workflow reviews, solution consultation, escalation handling, SOPs, playbooks, knowledge base documentation.',
      },
      aiAutomation: {
        title: 'AI & Automation',
        items:
          'AI-assisted product building, prompt engineering, OpenAI/GPT, chatbot workflow design, documentation-grounded AI, n8n, Zapier, workflow automation, conversational AI, automation QA.',
      },
      apiIntegration: {
        title: 'API / Integration / Testing',
        items:
          'REST APIs, webhooks, JSON, Postman, RequestBin, Pipedream, API troubleshooting, CRM integrations, webhook payload mapping, Basic Auth, field mapping, nested data mapping, regression testing, integration testing.',
      },
      frontend: {
        title: 'Frontend / Product Building',
        items:
          'Next.js, React, TypeScript, Tailwind CSS, Vercel, Supabase, PostgreSQL, GitHub, Cursor AI, marketplace workflows, payment and wallet workflows.',
      },
      crmTools: {
        title: 'CRM & Business Tools',
        items:
          'HubSpot CRM, Zoho CRM, Streak CRM, Jira, Confluence, Notion, Monday.com, Guidde, Google Sheets, Figma, Canva.',
      },
    },
  },
  outcomes: {
    eyebrow: 'Results',
    title: 'Selected Outcomes',
    items: [
      'Built an AI merchant support engine with structured classification and merchant-ready reply generation',
      'Created a V3 Merchant Reply Engine with 132/132 matrix cases passing',
      'Designed CrewAnywhere as a marketplace and operations platform with onboarding, jobs, assignments, shifts, wallets, payments, and withdrawals',
      'Designed and tested webhook and CRM integration workflows across Broot, n8n, HubSpot, Zoho, and Streak',
      'Created webhook and CRM integration documentation for Streak API setup and nested CRM field mapping',
      'Supported customer onboarding, implementation, UAT, regression testing, release validation, and workflow automation',
    ],
  },
  approach: {
    eyebrow: 'Approach',
    title: 'How I Work',
    lead: "I don't just complete tasks — I create evidence.",
    body: 'My work is built with documentation, demos, case studies, workflow screenshots, before/after results, and clear reasoning. I want people to see not only what I built, but how I think: structured, practical, user-focused, and outcome-driven.',
    items: [
      'Documentation and SOPs',
      'Workflow screenshots and demos',
      'Before/after comparisons',
      'Clear reasoning and decisions',
      'Evidence-based outcomes',
      'User-focused thinking',
    ],
  },
  contact: {
    eyebrow: 'Get in Touch',
    title: "Let's work together",
    description:
      'I am interested in roles and projects across Product Operations, Customer Success, Merchant Experience, AI Workflow Automation, SaaS Implementation, and AI-assisted product building.',
    contactMe: 'Contact Me',
    email: 'Email',
    linkedin: 'LinkedIn',
    scanPortfolioTitle: 'Scan My Portfolio',
    scanPortfolioCaption: 'Scan to open my portfolio.',
  },
  footer: {
    rights: 'All rights reserved.',
    github: 'GitHub',
    email: 'Email',
    linkedin: 'LinkedIn',
  },
  caseStudy: {
    eyebrow: 'Case Study',
    backToPortfolio: 'Back to Portfolio',
    notFound: 'Case study not found',
    projectOverview: 'Project Overview',
    workflow: 'Workflow',
    toolsUsed: 'Tools Used',
    implementationSteps: 'Implementation Steps',
    finalResult: 'Final Result',
    outcome: 'Outcome',
    futureImprovements: 'Future Improvements',
    portfolioSummary: 'Portfolio Summary',
  },
  links: {
    github: 'GitHub',
    watchDemo: 'Watch Demo',
    n8nWorkspace: 'n8n Workspace',
    viewProfile: 'View Profile',
    viewRepository: 'View Repository',
    openWorkspace: 'Open Workspace',
    viewCaseStudy: 'View Case Study',
    projectNotes: 'Project Notes',
    useCaseOutcome: 'Use Case & Outcome',
    viewConcept: 'Concept',
    mvpRoadmap: 'MVP Roadmap',
    liveSite: 'Live Site',
  },
  modal: {
    title: "Let's Work Together",
    subtitle:
      "Tell me what you're building, hiring for, or trying to improve. I'll get back to you with the most relevant context, project examples, or next steps.",
    messageSent: 'Thank you',
    thanks: "Thank you — your message has been sent. I'll get back to you soon.",
    close: 'Close',
    error: 'Something went wrong. Please email me directly at ngamei2912@gmail.com.',
    fullName: 'Full Name',
    fullNamePlaceholder: 'Your full name',
    email: 'Email',
    emailPlaceholder: 'your.email@example.com',
    companyProject: 'Company / Project',
    companyPlaceholder: 'Company name or project name',
    contactReason: 'What are you contacting me about?',
    selectOption: 'Select an option',
    reasons: [
      'Product / PM role',
      'Customer Success / Product Operations role',
      'QA / Workflow testing',
      'AI automation project',
      'Portfolio / project collaboration',
      'Other',
    ],
    message: 'What do you need help with?',
    messagePlaceholder: 'Tell me about the role, project, workflow, product issue, or opportunity...',
    relevantLink: 'Relevant Link',
    relevantLinkPlaceholder: 'Job post, website, product, documentation, or project link',
    preferredContact: 'Preferred Contact Method',
    contactMethods: ['Email', 'LinkedIn', 'Google Meet / Call'],
    timeline: 'Timeline',
    timelines: ['As soon as possible', 'This week', 'This month', 'Flexible'],
    consent: "I'm happy for Klairs to contact me about this opportunity or project.",
    sending: 'Sending...',
    sendMessage: 'Send Message',
  },
};

const vi: TranslationContent = {
  nav: { about: 'Giới thiệu', projects: 'Dự án', evidence: 'Bằng chứng', skills: 'Kỹ năng', contact: 'Liên hệ' },
  hero: {
    badge: ['Vận hành Sản phẩm', 'Tự động hóa AI', 'Customer Success'],
    headline: 'Tôi biến sự mơ hồ thành hệ thống.',
    description:
      'Tôi làm việc trong customer success, vận hành sản phẩm, QA và tự động hóa AI — xác định điểm nghẽn, cấu trúc hóa vấn đề phức tạp, kiểm thử quy trình và xây dựng giải pháp thực tế giúp sản phẩm dễ hiểu và dễ sử dụng hơn.',
    contactMe: 'Liên hệ',
    viewProjects: 'Xem dự án',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
  },
  about: {
    eyebrow: 'Giới thiệu',
    title: 'Về Klairs',
    bio1:
      'Tôi là Klairs, chuyên gia Customer Success và Vận hành Sản phẩm tập trung vào sản phẩm, kết nối khách hàng, sản phẩm và đội ngũ kỹ thuật để triển khai giải pháp SaaS và AI.',
    bio2:
      'Công việc của tôi bao gồm khám phá sản phẩm, thiết kế quy trình, onboarding, thanh toán, tích hợp CRM, QA/UAT, xác nhận phát hành và xây dựng sản phẩm hỗ trợ AI. Tôi thích biến các vấn đề hỗ trợ chưa rõ ràng, phản hồi khách hàng và khoảng trống vận hành thành quy trình có cấu trúc, yêu cầu, hệ thống tự động hóa và cải tiến sản phẩm.',
    specialization: 'Chuyên môn',
    industryExperience: 'Kinh nghiệm ngành',
    industries: ['SaaS', 'FinTech', 'Tự động hóa AI', 'Tích hợp CRM', 'Nền tảng Marketplace', 'Trải nghiệm Merchant'],
    specializations: [
      'Vận hành sản phẩm và thiết kế quy trình khách hàng',
      'Onboarding SaaS, triển khai và hệ thống hỗ trợ',
      'Công cụ hỗ trợ AI cho support, sản phẩm và tự động hóa',
      'Kiểm thử API, webhook, CRM và tích hợp',
      'Marketplace, thanh toán, ví và quy trình vận hành sản phẩm',
    ],
    quote:
      '"Cách tiếp cận của tôi kết hợp sự đồng cảm với khách hàng, tư duy sản phẩm, tò mò kỹ thuật và thực thi hỗ trợ AI."',
    photoAlt: 'Klairs — Chuyên gia Vận hành Sản phẩm và Customer Success',
  },
  work: {
    eyebrow: 'Năng lực',
    title: 'Tôi làm gì',
    cards: [
      {
        title: 'Tư duy Sản phẩm & Quy trình',
        description:
          'Tôi chuyển đổi các vấn đề khách hàng hoặc merchant chưa rõ ràng thành yêu cầu có cấu trúc, user story, ghi chú QA và cải tiến sản phẩm.',
      },
      {
        title: 'QA & Kiểm thử Edge Case',
        description:
          'Tôi kiểm thử quy trình end-to-end, ghi nhận edge case, tái hiện lỗi rõ ràng và giúp đội ngũ hiểu điều gì đang thực sự xảy ra.',
      },
      {
        title: 'Hệ thống hỗ trợ AI',
        description:
          'Tôi xây dựng công cụ hỗ trợ AI, luồng tài liệu, tự động hóa và trợ lý nội bộ giúp giảm nhầm lẫn và cải thiện thực thi.',
      },
    ],
  },
  projects: {
    eyebrow: 'Công việc',
    title: 'Dự án',
    description: 'Sản phẩm, quy trình tự động hóa và ý tưởng concept thể hiện cách tôi thiết kế, kiểm thử và triển khai hệ thống thực tế.',
    myRole: 'Vai trò của tôi',
    outcome: 'Kết quả',
    keyWork: 'Công việc chính',
    techTools: 'Công nghệ / Công cụ',
    subsections: {
      featured: {
        eyebrow: 'Bằng chứng nổi bật',
        title: 'Dự án sản phẩm tiêu biểu',
        subtitle: 'Công việc sản phẩm được chọn thể hiện triển khai AI, tư duy marketplace, độ sâu QA và giao hàng có cấu trúc.',
      },
      automation: {
        eyebrow: 'Bằng chứng tự động hóa',
        title: 'Quy trình Tự động hóa & Tích hợp',
        subtitle:
          'Các hệ thống thực tế tôi xây dựng để kết nối form, API, CRM, bảng tính, thông báo email và quy trình vận hành.',
      },
      concepts: {
        eyebrow: 'Ý tưởng',
        title: 'Ý tưởng & Concept Sản phẩm',
        subtitle: 'Các concept sản phẩm thể hiện cách tôi nghĩ về thiết kế quy trình, trải nghiệm merchant và nền tảng theo ngành dọc.',
      },
    },
    items: {
      contactAutomation: {
        tags: ['Tự động hóa Quy trình', 'Google Apps Script', 'Vercel', 'Tự động hóa Email'],
        title: 'Portfolio Contact Automation Workflow',
        subtitle: 'Google Apps Script · Google Sheets · Gmail · Vercel · Cloudflare',
        summary:
          'Xây dựng quy trình thu lead nhẹ lưu yêu cầu liên hệ vào Google Sheets, gửi thông báo cho chủ sở hữu và email xác nhận cho khách truy cập.',
        role: 'Product owner, thiết kế quy trình, phát triển Google Apps Script và triển khai full-stack.',
        keyWork: [
          'Biến form liên hệ portfolio thành quy trình thu lead đơn giản',
          'Lưu mọi yêu cầu vào Google Sheets để theo dõi và follow-up',
          'Tự động hóa email thông báo cho chủ sở hữu và xác nhận cho khách',
          'Triển khai portfolio live với tên miền tùy chỉnh và hosting',
          'Thiết kế quy trình sẵn sàng mở rộng sang CRM hoặc n8n sau này',
        ],
        tech: 'Vite, React, TypeScript, Google Apps Script, Google Sheets, Gmail, Vercel, Cloudflare DNS, GitHub',
        outcome:
          'Quy trình thu lead kiểu CRM nhẹ: lưu yêu cầu, thông báo cho tôi, xác nhận với khách, sẵn sàng mở rộng n8n hoặc CRM',
      },
      anhNgaDiamondBrandHub: {
        tags: ['Business OS', 'Tư duy Sản phẩm', 'Công cụ Nội bộ', 'Vận hành Thương hiệu', 'Xây dựng hỗ trợ AI', 'Supabase', 'Next.js'],
        title: 'ANH NGA DIAMOND Brand Hub',
        subtitle: 'Hub nguồn sự thật nội bộ cho vận hành đa thương hiệu trang sức',
        summary:
          'Hub nguồn sự thật riêng cho ANH NGA DIAMOND, tổ chức chiến lược thương hiệu, kế hoạch ra mắt, quyết định, quy trình, trách nhiệm đội ngũ và cổng thương hiệu trong một workspace nội bộ gọn gàng.',
        role: 'Product owner, kiến trúc sư thông tin, thiết kế quy trình và người xây dựng hỗ trợ AI.',
        keyWork: [
          'Gom kiến thức thương hiệu phân tán từ Markdown, tài liệu kế hoạch và hội thoại AI vào một workspace riêng',
          'Xác định phạm vi MVP tách nguồn sự thật khỏi thực thi công việc trong Zoho, Forms và Calendar',
          'Cấu trúc roadmap ra mắt 8 giai đoạn cùng cổng thương hiệu cho Origin, Clair và Memoir',
          'Thiết kế workspace nội bộ document-first, điều hướng sidebar, nhật ký quyết định và trách nhiệm đội ngũ',
          'Xây dựng truy cập xác thực với Supabase Google OAuth, allowlist approved_users và vai trò admin/viewer',
          'Giữ hub nhẹ — căn chỉnh và tham chiếu, không thay CRM, đơn hàng hay quản lý chiến dịch',
        ],
        tech: 'Next.js App Router, TypeScript, Tailwind CSS, Supabase Auth, Google OAuth, Markdown source files, Claude Code, Cursor AI',
        outcome:
          'Hoàn thành Milestone B: shell hub xác thực với trang công ty, cổng thương hiệu, roadmap, quy trình, quyết định và route admin',
      },
      helloClever: {
        tags: ['Hỗ trợ AI', 'Tài liệu', 'Trải nghiệm Merchant', 'QA'],
        title: 'Hello Clever Support Engineer AI',
        subtitle: 'Trợ lý AI cho hỗ trợ merchant và tài liệu',
        summary:
          'Trợ lý AI giúp đội hỗ trợ điều hướng tài liệu chính thức và tạo phản hồi hỗ trợ merchant có cấu trúc với phân loại, định tuyến và kiểm thử hồi quy.',
        role: 'Product owner, thiết kế giải pháp, thiết kế prompt/hệ thống, QA tester và trưởng nhóm triển khai hỗ trợ AI.',
        keyWork: [
          'Thiết kế V3 Merchant Reply Engine cho các tình huống hỗ trợ merchant',
          'Tạo 7 loại phản hồi cho phân loại hỗ trợ',
          'Xây dựng logic cho setup, xử lý sự cố, tra cứu thanh toán, yêu cầu vận hành và escalation',
          'Sử dụng tài liệu chính thức làm ngữ cảnh hỗ trợ',
          'Tạo ghi chú nội bộ có cấu trúc và phản hồi sẵn sàng cho merchant',
          'Thêm ticket workspace, lịch sử AI run, pinned tickets và coverage hồi quy',
        ],
        tech: 'Next.js, TypeScript, Vercel, GitHub, Cursor AI, OpenAI/GPT, prompt engineering, Playwright, JSON schemas, regression testing',
        outcome: '132/132 test case ma trận đạt',
      },
      broot: {
        tags: ['Customer Success', 'Tự động hóa', 'CRM', 'QA'],
        title: 'Broot → CRM Sync Workflows',
        subtitle: 'Thu lead sự kiện, tự động hóa follow-up và đồng bộ đa CRM',
        summary:
          'Tự động hóa end-to-end kết nối thu lead Broot với định tuyến n8n, logic follow-up Hot/Warm/Cold và đồng bộ CRM qua HubSpot, Zoho CRM và Streak CRM.',
        role: 'Thiết kế quy trình tự động hóa, kiểm thử tích hợp, chủ sở hữu thiết lập CRM và trưởng nhóm tài liệu.',
        keyWork: [
          'Xây dựng và kiểm thử luồng đồng bộ Broot → n8n → HubSpot CRM',
          'Lên kế hoạch và kiểm thử tích hợp Zoho và Streak CRM',
          'Ghi nhận cấu hình endpoint webhook, headers và Basic Auth',
          'Ánh xạ request body, trường CRM lồng nhau và giá trị dropdown',
          'Tạo demo Guidde walkthrough và SOP vận hành',
          'Xác thực định tuyến lead tag Hot, Warm và Cold qua follow-up và đồng bộ CRM',
        ],
        tech: 'n8n, Zapier, HubSpot CRM, Zoho CRM, Streak CRM, webhooks, Postman, RequestBin, Pipedream, JSON, API troubleshooting, Guidde',
        outcome: 'Demo tự động hóa hoạt động, luồng đồng bộ CRM đã xác thực và tài liệu tích hợp webhook tái sử dụng được',
      },
      crewAnywhere: {
        tags: ['Sản phẩm', 'Marketplace', 'Thiết kế Quy trình'],
        title: 'CrewAnywhere Product Build',
        subtitle: 'Nền tảng marketplace và vận hành',
        summary:
          'Nền tảng marketplace và vận hành cho nhân sự sự kiện với tư duy sản phẩm có cấu trúc về onboarding, ghép việc, ca làm, ví, thanh toán và rút tiền.',
        role: 'Product owner, thiết kế quy trình, kiến trúc sư vận hành marketplace và trưởng nhóm triển khai.',
        keyWork: [
          'Thiết kế nền tảng marketplace và vận hành cho nhân sự sự kiện',
          'Xây dựng quy trình onboarding, jobs, assignments và quản lý ca',
          'Cấu trúc hóa luồng ví, thanh toán và rút tiền',
          'Lập bản đồ hành trình người dùng cho client, crew và đội vận hành',
          'Định nghĩa yêu cầu sản phẩm vận hành và handoff quy trình',
          'Triển khai logic ghép marketplace và điều phối nhân sự',
        ],
        tech: 'Next.js, React, TypeScript, Tailwind CSS, marketplace workflows, payment and wallet systems, GitHub, product workflow design',
        outcome:
          'Thiết kế CrewAnywhere như nền tảng marketplace và vận hành với onboarding, jobs, assignments, shifts, wallets, payments và withdrawals',
      },
    },
  },
  concepts: {
    eyebrow: 'Ý tưởng',
    title: 'Ý tưởng & Khái niệm Sản phẩm',
    description: 'Các khái niệm sản phẩm thể hiện cách tôi tư duy về thiết kế quy trình, trải nghiệm merchant và nền tảng theo ngành dọc.',
    items: {
      pmAssistance: {
        title: 'Klairs PM Assistance',
        subtitle: 'Trợ lý quy trình AI cho Product Management Trải nghiệm Merchant',
        description:
          'Khái niệm quy trình AI cá nhân chuyển đổi vấn đề merchant, ma sát onboarding, lỗi thiết lập thanh toán, khoảng trống UX dashboard, ticket hỗ trợ và phản hồi sản phẩm thành đầu ra PM có cấu trúc như yêu cầu, câu hỏi discovery, kịch bản QA, ghi chú ưu tiên, tóm tắt stakeholder và handoff kỹ thuật.',
      },
      risenMatch: {
        title: 'Rise-n-Match',
        subtitle: 'Marketplace đặt lịch Pilates & ghép studio',
        description:
          'Khái niệm marketplace Pilates tập trung giúp người dùng khám phá studio, được ghép đúng lớp học và đặt chỗ một nơi—đồng thời giúp studio lấp đầy giường off-peak với lead có ý định cao hơn.',
      },
    },
  },
  evidence: {
    eyebrow: 'Bằng chứng',
    title: 'Bằng chứng & Tài liệu',
    description: 'Kho mã, demo, workspace tự động hóa và tài liệu thể hiện cách tôi làm việc.',
    requestDocument: 'Yêu cầu tài liệu',
    items: {
      githubProfile: {
        title: 'Hồ sơ GitHub',
        description: 'Mã nguồn công khai và kho sản phẩm.',
        linkLabel: 'Xem hồ sơ',
      },
      helloCleverRepo: {
        title: 'Kho Hello Clever Support Engineer AI',
        description: 'Trợ lý hỗ trợ merchant AI với phân loại, phản hồi có cấu trúc và kiểm thử hồi quy.',
        linkLabel: 'Xem kho mã',
      },
      crewAnywhereRepo: {
        title: 'Kho CrewAnywhere',
        description: 'Nền tảng marketplace và vận hành cho nhân sự sự kiện.',
        linkLabel: 'Xem kho mã',
      },
      brootDemo: {
        title: 'Demo Tự động hóa Broot',
        description: 'Hướng dẫn Guidde về tự động hóa quy trình và tích hợp CRM.',
        linkLabel: 'Xem demo',
      },
      n8nWorkspace: {
        title: 'Workspace Tự động hóa n8n',
        description: 'Workspace dùng để kiểm thử quy trình và thử nghiệm đồng bộ CRM.',
        linkLabel: 'Mở workspace',
      },
      streakWebhook: {
        title: 'Thiết lập Webhook Broot → Streak CRM',
        description:
          'Tài liệu về cấu hình endpoint, headers, Basic Auth, ánh xạ request body, trường CRM lồng nhau và giá trị dropdown.',
      },
      resume: {
        title: 'CV Product Manager',
        description:
          'CV thể hiện marketplace, thanh toán, hệ thống ví, tự động hóa quy trình AI, UAT và triển khai đa chức năng.',
      },
    },
  },
  skills: {
    eyebrow: 'Bộ công cụ',
    title: 'Kỹ năng & Công cụ Kỹ thuật',
    description: 'Các công cụ sản phẩm, vận hành, tự động hóa và kỹ thuật tôi sử dụng trong công việc.',
    groups: {
      productManagement: {
        title: 'Quản lý Sản phẩm',
        items:
          'Khám phá sản phẩm, lập roadmap, ưu tiên backlog, sprint planning, phỏng vấn stakeholder, user story, tiêu chí chấp nhận, viết PRD/FRD, phân tích quy trình, sẵn sàng phát hành, Agile/Scrum, UAT.',
      },
      customerSuccess: {
        title: 'Customer Success & Vận hành Sản phẩm',
        items:
          'Onboarding khách hàng, triển khai SaaS, adoption sản phẩm, đào tạo, vòng phản hồi khách hàng, đánh giá quy trình, tư vấn giải pháp, xử lý escalation, SOP, playbook, tài liệu knowledge base.',
      },
      aiAutomation: {
        title: 'AI & Tự động hóa',
        items:
          'Xây dựng sản phẩm hỗ trợ AI, prompt engineering, OpenAI/GPT, thiết kế chatbot, AI dựa trên tài liệu, n8n, Zapier, tự động hóa quy trình, conversational AI, QA tự động hóa.',
      },
      apiIntegration: {
        title: 'API / Tích hợp / Kiểm thử',
        items:
          'REST APIs, webhooks, JSON, Postman, RequestBin, Pipedream, xử lý sự cố API, tích hợp CRM, ánh xạ webhook payload, Basic Auth, ánh xạ trường, ánh xạ dữ liệu lồng nhau, regression testing, integration testing.',
      },
      frontend: {
        title: 'Frontend / Xây dựng Sản phẩm',
        items:
          'Next.js, React, TypeScript, Tailwind CSS, Vercel, Supabase, PostgreSQL, GitHub, Cursor AI, marketplace workflows, payment and wallet workflows.',
      },
      crmTools: {
        title: 'CRM & Công cụ Kinh doanh',
        items:
          'HubSpot CRM, Zoho CRM, Streak CRM, Jira, Confluence, Notion, Monday.com, Guidde, Google Sheets, Figma, Canva.',
      },
    },
  },
  outcomes: {
    eyebrow: 'Kết quả',
    title: 'Kết quả tiêu biểu',
    items: [
      'Xây dựng engine hỗ trợ merchant AI với phân loại có cấu trúc và tạo phản hồi sẵn sàng cho merchant',
      'Tạo V3 Merchant Reply Engine với 132/132 test case ma trận đạt',
      'Thiết kế CrewAnywhere như nền tảng marketplace và vận hành với onboarding, jobs, assignments, shifts, wallets, payments và withdrawals',
      'Thiết kế và kiểm thử quy trình webhook và tích hợp CRM trên Broot, n8n, HubSpot, Zoho và Streak',
      'Tạo tài liệu webhook và tích hợp CRM cho thiết lập Streak API và ánh xạ trường CRM lồng nhau',
      'Hỗ trợ onboarding khách hàng, triển khai, UAT, regression testing, xác nhận phát hành và tự động hóa quy trình',
    ],
  },
  approach: {
    eyebrow: 'Phương pháp',
    title: 'Cách tôi làm việc',
    lead: 'Tôi không chỉ hoàn thành nhiệm vụ — tôi tạo ra bằng chứng.',
    body: 'Công việc của tôi được xây dựng với tài liệu, demo, case study, ảnh chụp quy trình, kết quả trước/sau và lý luận rõ ràng. Tôi muốn mọi người thấy không chỉ những gì tôi xây dựng, mà còn cách tôi tư duy: có cấu trúc, thực tế, tập trung người dùng và hướng kết quả.',
    items: [
      'Tài liệu và SOP',
      'Ảnh chụp quy trình và demo',
      'So sánh trước/sau',
      'Lý luận và quyết định rõ ràng',
      'Kết quả dựa trên bằng chứng',
      'Tư duy tập trung người dùng',
    ],
  },
  contact: {
    eyebrow: 'Liên hệ',
    title: 'Hãy cùng làm việc',
    description:
      'Tôi quan tâm đến các vai trò và dự án trong Vận hành Sản phẩm, Customer Success, Trải nghiệm Merchant, Tự động hóa Quy trình AI, Triển khai SaaS và Xây dựng sản phẩm hỗ trợ AI.',
    contactMe: 'Liên hệ',
    email: 'Email',
    linkedin: 'LinkedIn',
    scanPortfolioTitle: 'Quét Portfolio của tôi',
    scanPortfolioCaption: 'Quét để mở portfolio.',
  },
  footer: {
    rights: 'Bảo lưu mọi quyền.',
    github: 'GitHub',
    email: 'Email',
    linkedin: 'LinkedIn',
  },
  caseStudy: {
    eyebrow: 'Case Study',
    backToPortfolio: 'Về Portfolio',
    notFound: 'Không tìm thấy case study',
    projectOverview: 'Tổng quan dự án',
    workflow: 'Quy trình',
    toolsUsed: 'Công cụ sử dụng',
    implementationSteps: 'Các bước triển khai',
    finalResult: 'Kết quả cuối',
    outcome: 'Thành quả',
    futureImprovements: 'Cải tiến tương lai',
    portfolioSummary: 'Tóm tắt Portfolio',
  },
  links: {
    github: 'GitHub',
    watchDemo: 'Xem demo',
    n8nWorkspace: 'Workspace n8n',
    viewProfile: 'Xem hồ sơ',
    viewRepository: 'Xem kho mã',
    openWorkspace: 'Mở workspace',
    viewCaseStudy: 'Xem Case Study',
    projectNotes: 'Ghi chú Dự án',
    useCaseOutcome: 'Use Case & Kết quả',
    viewConcept: 'Concept',
    mvpRoadmap: 'MVP Roadmap',
    liveSite: 'Trang live',
  },
  modal: {
    title: 'Hãy cùng làm việc',
    subtitle:
      'Cho tôi biết bạn đang xây dựng, tuyển dụng hoặc muốn cải thiện điều gì. Tôi sẽ phản hồi với ngữ cảnh, ví dụ dự án hoặc bước tiếp theo phù hợp nhất.',
    messageSent: 'Cảm ơn',
    thanks: 'Cảm ơn bạn — tin nhắn đã được gửi. Tôi sẽ phản hồi sớm.',
    close: 'Đóng',
    error: 'Đã xảy ra lỗi. Vui lòng gửi email trực tiếp đến ngamei2912@gmail.com.',
    fullName: 'Họ và tên',
    fullNamePlaceholder: 'Họ và tên của bạn',
    email: 'Email',
    emailPlaceholder: 'email.cua.ban@example.com',
    companyProject: 'Công ty / Dự án',
    companyPlaceholder: 'Tên công ty hoặc dự án',
    contactReason: 'Bạn liên hệ về vấn đề gì?',
    selectOption: 'Chọn một tùy chọn',
    reasons: [
      'Vai trò Product / PM',
      'Vai trò Customer Success / Vận hành Sản phẩm',
      'QA / Kiểm thử quy trình',
      'Dự án tự động hóa AI',
      'Hợp tác portfolio / dự án',
      'Khác',
    ],
    message: 'Bạn cần hỗ trợ gì?',
    messagePlaceholder: 'Cho tôi biết về vai trò, dự án, quy trình, vấn đề sản phẩm hoặc cơ hội...',
    relevantLink: 'Liên kết liên quan',
    relevantLinkPlaceholder: 'Bài đăng tuyển dụng, website, sản phẩm, tài liệu hoặc liên kết dự án',
    preferredContact: 'Phương thức liên hệ ưu tiên',
    contactMethods: ['Email', 'LinkedIn', 'Google Meet / Cuộc gọi'],
    timeline: 'Thời gian',
    timelines: ['Càng sớm càng tốt', 'Tuần này', 'Tháng này', 'Linh hoạt'],
    consent: 'Tôi đồng ý để Klairs liên hệ về cơ hội hoặc dự án này.',
    sending: 'Đang gửi...',
    sendMessage: 'Gửi tin nhắn',
  },
};

const ko: TranslationContent = {
  nav: { about: '소개', projects: '프로젝트', evidence: '증거', skills: '기술', contact: '연락' },
  hero: {
    badge: ['프로덕트 운영', 'AI 자동화', '고객 성공'],
    headline: '혼란을 시스템으로 바꿉니다.',
    description:
      '고객 성공, 프로덕트 운영, QA, AI 자동화 분야에서 마찰을 파악하고, 복잡한 문제를 구조화하며, 워크플로를 테스트하고, 제품을 더 이해하기 쉽고 사용하기 쉽게 만드는 실용적인 솔루션을 구축합니다.',
    contactMe: '연락하기',
    viewProjects: '프로젝트 보기',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: '이메일',
  },
  about: {
    eyebrow: '소개',
    title: 'Klairs 소개',
    bio1:
      '저는 Klairs입니다. 고객, 제품, 엔지니어링 팀을 연결하여 SaaS 및 AI 기반 솔루션을 제공하는 프로덕트 중심의 Customer Success 및 Product Operations 전문가입니다.',
    bio2:
      '제 업무는 제품 발견, 워크플로 설계, 온보딩, 결제, CRM 통합, QA/UAT, 릴리스 검증, AI 지원 제품 구축에 걸쳐 있습니다. 불명확한 지원 이슈, 고객 피드백, 운영 공백을 구조화된 워크플로, 요구사항, 자동화 시스템, 제품 개선으로 전환하는 것을 즐깁니다.',
    specialization: '전문 분야',
    industryExperience: '산업 경험',
    industries: ['SaaS', '핀테크', 'AI 자동화', 'CRM 통합', '마켓플레이스 플랫폼', '머천트 경험'],
    specializations: [
      '프로덕트 운영 및 고객 워크플로 설계',
      'SaaS 온보딩, 구현 및 지원 시스템',
      '지원, 제품, 자동화 워크플로를 위한 AI 지원 도구',
      'API, 웹훅, CRM 및 통합 테스트',
      '마켓플레이스, 결제, 지갑 및 운영 제품 흐름',
    ],
    quote: '"저의 접근 방식은 고객 공감, 제품 사고, 기술적 호기심, AI 지원 실행을 결합합니다."',
    photoAlt: 'Klairs — 프로덕트 운영 및 Customer Success 전문가',
  },
  work: {
    eyebrow: '역량',
    title: '제가 하는 일',
    cards: [
      {
        title: '제품 및 워크플로 사고',
        description:
          '불명확한 고객 또는 머천트 이슈를 구조화된 요구사항, 사용자 스토리, QA 노트, 제품 개선으로 전환합니다.',
      },
      {
        title: 'QA 및 엣지 케이스 테스트',
        description:
          '워크플로를 엔드투엔드로 테스트하고, 엣지 케이스를 문서화하며, 이슈를 명확히 재현하고, 팀이 실제로 무슨 일이 일어나는지 이해하도록 돕습니다.',
      },
      {
        title: 'AI 지원 시스템',
        description:
          '혼란을 줄이고 실행을 개선하는 AI 지원 도구, 문서 흐름, 자동화, 내부 어시스턴트를 구축합니다.',
      },
    ],
  },
  projects: {
    eyebrow: '작업',
    title: '프로젝트',
    description: '제품 구축, 자동화 워크플로, 컨셉 작업을 통해 실용적인 시스템을 설계, 테스트, 구현하는 방식을 보여줍니다.',
    myRole: '나의 역할',
    outcome: '성과',
    keyWork: '주요 작업',
    techTools: '기술 / 도구',
    subsections: {
      featured: {
        eyebrow: '주요 증거',
        title: '주요 제품 프로젝트',
        subtitle: 'AI 구현, 마켓플레이스 사고, QA 깊이, 구조화된 전달을 보여주는 선별된 제품 작업입니다.',
      },
      automation: {
        eyebrow: '자동화 증거',
        title: '자동화 및 통합 워크플로',
        subtitle:
          '폼, API, CRM, 스프레드시트, 이메일 알림, 운영 워크플로를 연결하기 위해 구축한 실용적인 시스템입니다.',
      },
      concepts: {
        eyebrow: '컨셉',
        title: '제품 아이디어 및 컨셉',
        subtitle: '워크플로 설계, 머천트 경험, 수직 플랫폼에 대해 어떻게 생각하는지 보여주는 제품 컨셉입니다.',
      },
    },
    items: {
      contactAutomation: {
        tags: ['워크플로 자동화', 'Google Apps Script', 'Vercel', '이메일 자동화'],
        title: 'Portfolio Contact Automation Workflow',
        subtitle: 'Google Apps Script · Google Sheets · Gmail · Vercel · Cloudflare',
        summary:
          '포트폴리오 문의를 Google Sheets에 저장하고, 소유자 알림과 방문자 확인 이메일을 보내는 경량 리드 캡처 워크플로를 구축했습니다.',
        role: '프로덕트 오너, 워크플로 설계자, Google Apps Script 개발자, 풀스택 구현 리드.',
        keyWork: [
          '포트폴리오 연락 폼을 간단한 리드 캡처 워크플로로 전환',
          '모든 문의를 Google Sheets에 저장해 추적 및 후속 조치 지원',
          '소유자 알림과 방문자 확인 이메일 자동화',
          '커스텀 도메인과 호스팅으로 라이브 포트폴리오 배포',
          '이후 CRM 또는 n8n 자동화로 확장 가능하도록 워크플로 설계',
        ],
        tech: 'Vite, React, TypeScript, Google Apps Script, Google Sheets, Gmail, Vercel, Cloudflare DNS, GitHub',
        outcome:
          '문의 저장, 알림, 방문자 확인, n8n 또는 CRM 확장 준비가 된 경량 CRM 스타일 리드 캡처 워크플로',
      },
      anhNgaDiamondBrandHub: {
        tags: ['Business OS', '제품 사고', '내부 도구', '브랜드 운영', 'AI 지원 구축', 'Supabase', 'Next.js'],
        title: 'ANH NGA DIAMOND Brand Hub',
        subtitle: '멀티 브랜드 주얼리 운영을 위한 비공개 소스 오브 트루스 허브',
        summary:
          'ANH NGA DIAMOND를 위한 비공개 소스 오브 트루스 허브로, 브랜드 전략, 런칭 계획, 의사결정, 워크플로, 팀 책임, 브랜드 포털을 깔끔한 내부 워크스페이스에 정리합니다.',
        role: '프로덕트 오너, 정보 아키텍트, 워크플로 설계자, AI 지원 빌더.',
        keyWork: [
          'Markdown 문서, 기획 파일, AI 대화에 흩어진 브랜드 지식을 하나의 비공개 워크스페이스로 통합',
          'Zoho, Forms, Calendar의 작업 실행과 소스 오브 트루스 참조를 분리하는 MVP 범위 정의',
          '8단계 런칭 로드맵과 Origin, Clair, Memoir 브랜드 포털 구조화',
          '사이드바 내비게이션, 의사결정 로그, 팀 책임을 갖춘 차분한 문서 중심 내부 워크스페이스 설계',
          'Supabase Google OAuth, approved_users 허용 목록, admin/viewer 역할로 인증 접근 구축',
          'CRM, 주문, 캠페인 관리가 아닌 정렬과 참조에 집중하는 경량 허브로 범위 설정',
        ],
        tech: 'Next.js App Router, TypeScript, Tailwind CSS, Supabase Auth, Google OAuth, Markdown source files, Claude Code, Cursor AI',
        outcome:
          'Milestone B 완료: 회사 페이지, 브랜드 포털, 로드맵, 워크플로, 의사결정, admin 라우트를 갖춘 인증 허브 셸',
      },
      helloClever: {
        tags: ['AI 지원', '문서화', '머천트 경험', 'QA'],
        title: 'Hello Clever Support Engineer AI',
        subtitle: '머천트 지원 및 문서화를 위한 AI 어시스턴트',
        summary:
          '공식 문서를 탐색하고 분류, 라우팅, 회귀 테스트된 응답 생성을 통해 구조화된 머천트 지원 응답을 생성하는 AI 어시스턴트입니다.',
        role: '프로덕트 오너, 솔루션 설계자, 프롬프트/시스템 설계자, QA 테스터, AI 지원 구현 리드.',
        keyWork: [
          '머천트 지원 시나리오를 위한 V3 Merchant Reply Engine 설계',
          '지원 분류를 위한 7가지 응답 유형 생성',
          '설정, 문제 해결, 결제 조회, 운영 요청, 에스컬레이션 케이스 로직 구축',
          '공식 문서를 지원 컨텍스트로 활용',
          '구조화된 내부 노트 및 머천트용 응답 생성',
          '티켓 워크스페이스, AI 실행 기록, 고정 티켓, 회귀 커버리지 추가',
        ],
        tech: 'Next.js, TypeScript, Vercel, GitHub, Cursor AI, OpenAI/GPT, prompt engineering, Playwright, JSON schemas, regression testing',
        outcome: '132/132 매트릭스 테스트 케이스 통과',
      },
      broot: {
        tags: ['Customer Success', '자동화', 'CRM', 'QA'],
        title: 'Broot → CRM Sync Workflows',
        subtitle: '이벤트 리드 캡처, 후속 자동화, 멀티 CRM 동기화',
        summary:
          'Broot 리드 캡처를 n8n 라우팅, Hot/Warm/Cold 후속 로직, HubSpot·Zoho CRM·Streak CRM 동기화와 연결하는 엔드투엔드 자동화입니다.',
        role: '자동화 워크플로 설계자, 통합 테스터, CRM 설정 담당자, 문서화 리드.',
        keyWork: [
          'Broot → n8n → HubSpot CRM 동기화 흐름 구축 및 테스트',
          'Zoho 및 Streak CRM 통합 계획 및 테스트',
          '웹훅 엔드포인트 구성, 헤더, Basic Auth 설정 문서화',
          '요청 본문 필드, 중첩 CRM 필드, 드롭다운 값 매핑',
          'Guidde 워크스루 데모 및 운영 SOP 생성',
          'Hot, Warm, Cold 리드 태그 라우팅을 follow-up 및 CRM 동기화 경로에서 검증',
        ],
        tech: 'n8n, Zapier, HubSpot CRM, Zoho CRM, Streak CRM, webhooks, Postman, RequestBin, Pipedream, JSON, API troubleshooting, Guidde',
        outcome: '작동하는 자동화 데모, 검증된 CRM 동기화 흐름, 재사용 가능한 웹훅 통합 문서',
      },
      crewAnywhere: {
        tags: ['제품', '마켓플레이스', '워크플로 설계'],
        title: 'CrewAnywhere Product Build',
        subtitle: '마켓플레이스 및 운영 플랫폼',
        summary:
          '온보딩, 직무 매칭, 시프트 운영, 지갑, 결제, 출금에 걸친 구조화된 제품 사고를 갖춘 이벤트 스태핑용 마켓플레이스 및 운영 플랫폼입니다.',
        role: '프로덕트 오너, 워크플로 설계자, 마켓플레이스 운영 아키텍트, 구현 리드.',
        keyWork: [
          '이벤트 스태핑을 위한 마켓플레이스 및 운영 플랫폼 설계',
          '온보딩, 직무, 배정, 시프트 관리 워크플로 구축',
          '지갑, 결제, 출금 제품 흐름 구조화',
          '클라이언트, 크루, 운영 팀의 사용자 여정 매핑',
          '운영 제품 요구사항 및 워크플로 핸드오프 정의',
          '마켓플레이스 매칭 및 스태핑 조정 로직 구현',
        ],
        tech: 'Next.js, React, TypeScript, Tailwind CSS, marketplace workflows, payment and wallet systems, GitHub, product workflow design',
        outcome:
          '온보딩, 직무, 배정, 시프트, 지갑, 결제, 출금을 갖춘 마켓플레이스 및 운영 플랫폼으로 CrewAnywhere 설계',
      },
    },
  },
  concepts: {
    eyebrow: '컨셉',
    title: '제품 아이디어 및 컨셉',
    description: '워크플로 설계, 머천트 경험, 수직 플랫폼에 대한 제 사고방식을 보여주는 제품 컨셉입니다.',
    items: {
      pmAssistance: {
        title: 'Klairs PM Assistance',
        subtitle: '머천트 경험 제품 관리를 위한 AI 워크플로 어시스턴트',
        description:
          '머천트 이슈, 온보딩 마찰, 결제 설정 문제, 대시보드 UX 공백, 지원 티켓, 제품 피드백을 요구사항, 발견 질문, QA 시나리오, 우선순위 노트, 이해관계자 요약, 엔지니어링 핸드오프와 같은 구조화된 PM 산출물로 전환하는 개인 AI 워크플로 컨셉입니다.',
      },
      risenMatch: {
        title: 'Rise-n-Match',
        subtitle: '필라테스 예약 및 스튜디오 매칭 마켓플레이스',
        description:
          '사용자가 스튜디오를 발견하고 적합한 수업에 매칭되어 한곳에서 예약할 수 있게 하며, 스튜디오가 오프피크 베드를 높은 의도의 리드로 채울 수 있도록 돕는 중앙화된 필라테스 마켓플레이스 컨셉입니다.',
      },
    },
  },
  evidence: {
    eyebrow: '증거',
    title: '증거 및 아티팩트',
    description: '제 작업 방식을 보여주는 저장소, 데모, 자동화 워크스페이스, 문서입니다.',
    requestDocument: '문서 요청',
    items: {
      githubProfile: {
        title: 'GitHub 프로필',
        description: '공개 코드 및 제품 구축 저장소.',
        linkLabel: '프로필 보기',
      },
      helloCleverRepo: {
        title: 'Hello Clever Support Engineer AI 저장소',
        description: '분류, 구조화된 응답, 회귀 테스트를 갖춘 AI 머천트 지원 어시스턴트.',
        linkLabel: '저장소 보기',
      },
      crewAnywhereRepo: {
        title: 'CrewAnywhere 저장소',
        description: '이벤트 스태핑을 위한 마켓플레이스 및 운영 플랫폼.',
        linkLabel: '저장소 보기',
      },
      brootDemo: {
        title: 'Broot 자동화 데모',
        description: '워크플로 자동화 및 CRM 통합 작업을 보여주는 Guidde 워크스루.',
        linkLabel: '데모 보기',
      },
      n8nWorkspace: {
        title: 'n8n 자동화 워크스페이스',
        description: '워크플로 테스트 및 CRM 동기화 실험에 사용되는 자동화 워크스페이스.',
        linkLabel: '워크스페이스 열기',
      },
      streakWebhook: {
        title: 'Broot → Streak CRM 웹훅 설정',
        description:
          '엔드포인트 구성, 헤더, Basic Auth, 요청 본문 매핑, 중첩 CRM 필드, 드롭다운 값을 다루는 문서.',
      },
      resume: {
        title: '프로덕트 매니저 이력서',
        description:
          '마켓플레이스, 결제, 지갑 시스템, AI 기반 워크플로 자동화, UAT, 크로스펑셔널 딜리버리를 보여주는 이력서.',
      },
    },
  },
  skills: {
    eyebrow: '도구',
    title: '기술 스킬 및 도구',
    description: '딜리버리 작업 전반에 사용하는 제품, 운영, 자동화, 기술 도구입니다.',
    groups: {
      productManagement: {
        title: '제품 관리',
        items:
          '제품 발견, 로드맵 계획, 백로그 우선순위, 스프린트 계획, 이해관계자 인터뷰, 사용자 스토리, 수락 기준, PRD/FRD 작성, 워크플로 분석, 릴리스 준비, Agile/Scrum, UAT.',
      },
      customerSuccess: {
        title: 'Customer Success 및 Product Operations',
        items:
          '고객 온보딩, SaaS 구현, 제품 채택, 교육, 고객 피드백 루프, 워크플로 검토, 솔루션 컨설팅, 에스컬레이션 처리, SOP, 플레이북, 지식 베이스 문서화.',
      },
      aiAutomation: {
        title: 'AI 및 자동화',
        items:
          'AI 지원 제품 구축, 프롬프트 엔지니어링, OpenAI/GPT, 챗봇 워크플로 설계, 문서 기반 AI, n8n, Zapier, 워크플로 자동화, 대화형 AI, 자동화 QA.',
      },
      apiIntegration: {
        title: 'API / 통합 / 테스트',
        items:
          'REST APIs, webhooks, JSON, Postman, RequestBin, Pipedream, API 문제 해결, CRM 통합, 웹훅 페이로드 매핑, Basic Auth, 필드 매핑, 중첩 데이터 매핑, 회귀 테스트, 통합 테스트.',
      },
      frontend: {
        title: '프론트엔드 / 제품 구축',
        items:
          'Next.js, React, TypeScript, Tailwind CSS, Vercel, Supabase, PostgreSQL, GitHub, Cursor AI, marketplace workflows, payment and wallet workflows.',
      },
      crmTools: {
        title: 'CRM 및 비즈니스 도구',
        items:
          'HubSpot CRM, Zoho CRM, Streak CRM, Jira, Confluence, Notion, Monday.com, Guidde, Google Sheets, Figma, Canva.',
      },
    },
  },
  outcomes: {
    eyebrow: '결과',
    title: '주요 성과',
    items: [
      '구조화된 분류 및 머천트용 응답 생성을 갖춘 AI 머천트 지원 엔진 구축',
      '132/132 매트릭스 케이스를 통과한 V3 Merchant Reply Engine 생성',
      '온보딩, 직무, 배정, 시프트, 지갑, 결제, 출금을 갖춘 마켓플레이스 및 운영 플랫폼으로 CrewAnywhere 설계',
      'Broot, n8n, HubSpot, Zoho, Streak 전반의 웹훅 및 CRM 통합 워크플로 설계 및 테스트',
      'Streak API 설정 및 중첩 CRM 필드 매핑을 위한 웹훅 및 CRM 통합 문서 생성',
      '고객 온보딩, 구현, UAT, 회귀 테스트, 릴리스 검증, 워크플로 자동화 지원',
    ],
  },
  approach: {
    eyebrow: '접근 방식',
    title: '제가 일하는 방식',
    lead: '저는 단순히 작업을 완료하는 것이 아니라 — 증거를 만듭니다.',
    body: '제 작업은 문서, 데모, 사례 연구, 워크플로 스크린샷, 전후 결과, 명확한 논리로 구축됩니다. 사람들이 제가 만든 것뿐만 아니라 제가 생각하는 방식도 볼 수 있기를 원합니다: 구조화되고, 실용적이며, 사용자 중심적이고, 결과 지향적입니다.',
    items: [
      '문서화 및 SOP',
      '워크플로 스크린샷 및 데모',
      '전후 비교',
      '명확한 논리와 결정',
      '증거 기반 성과',
      '사용자 중심 사고',
    ],
  },
  contact: {
    eyebrow: '연락',
    title: '함께 일해요',
    description:
      'Product Operations, Customer Success, Merchant Experience, AI Workflow Automation, SaaS Implementation, AI 지원 제품 구축 분야의 역할과 프로젝트에 관심이 있습니다.',
    contactMe: '연락하기',
    email: '이메일',
    linkedin: 'LinkedIn',
    scanPortfolioTitle: '포트폴리오 스캔',
    scanPortfolioCaption: '스캔하여 포트폴리오를 여세요.',
  },
  footer: {
    rights: '모든 권리 보유.',
    github: 'GitHub',
    email: '이메일',
    linkedin: 'LinkedIn',
  },
  caseStudy: {
    eyebrow: '케이스 스터디',
    backToPortfolio: '포트폴리오로 돌아가기',
    notFound: '케이스 스터디를 찾을 수 없습니다',
    projectOverview: '프로젝트 개요',
    workflow: '워크플로',
    toolsUsed: '사용 도구',
    implementationSteps: '구현 단계',
    finalResult: '최종 결과',
    outcome: '성과',
    futureImprovements: '향후 개선',
    portfolioSummary: '포트폴리오 요약',
  },
  links: {
    github: 'GitHub',
    watchDemo: '데모 보기',
    n8nWorkspace: 'n8n 워크스페이스',
    viewProfile: '프로필 보기',
    viewRepository: '저장소 보기',
    openWorkspace: '워크스페이스 열기',
    viewCaseStudy: '케이스 스터디 보기',
    projectNotes: '프로젝트 노트',
    useCaseOutcome: 'Use Case & 결과',
    viewConcept: 'Concept',
    mvpRoadmap: 'MVP Roadmap',
    liveSite: '라이브 사이트',
  },
  modal: {
    title: '함께 일해요',
    subtitle:
      '구축 중이거나 채용하거나 개선하려는 것을 알려주세요. 가장 관련 있는 맥락, 프로젝트 예시, 다음 단계로 답변드리겠습니다.',
    messageSent: '감사합니다',
    thanks: '감사합니다 — 메시지가 전송되었습니다. 곧 답변드리겠습니다.',
    close: '닫기',
    error: '문제가 발생했습니다. ngamei2912@gmail.com 으로 직접 이메일을 보내 주세요.',
    fullName: '성명',
    fullNamePlaceholder: '성명을 입력하세요',
    email: '이메일',
    emailPlaceholder: 'your.email@example.com',
    companyProject: '회사 / 프로젝트',
    companyPlaceholder: '회사명 또는 프로젝트명',
    contactReason: '어떤 내용으로 연락하시나요?',
    selectOption: '옵션 선택',
    reasons: [
      'Product / PM 역할',
      'Customer Success / Product Operations 역할',
      'QA / 워크플로 테스트',
      'AI 자동화 프로젝트',
      '포트폴리오 / 프로젝트 협업',
      '기타',
    ],
    message: '어떤 도움이 필요하신가요?',
    messagePlaceholder: '역할, 프로젝트, 워크플로, 제품 이슈, 기회에 대해 알려주세요...',
    relevantLink: '관련 링크',
    relevantLinkPlaceholder: '채용 공고, 웹사이트, 제품, 문서 또는 프로젝트 링크',
    preferredContact: '선호 연락 방법',
    contactMethods: ['이메일', 'LinkedIn', 'Google Meet / 통화'],
    timeline: '일정',
    timelines: ['가능한 빨리', '이번 주', '이번 달', '유연함'],
    consent: '이 기회 또는 프로젝트에 대해 Klairs가 연락하는 것에 동의합니다.',
    sending: '전송 중...',
    sendMessage: '메시지 보내기',
  },
};

export const translations: Record<Language, TranslationContent> = { en, vi, ko };

export function getStoredLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'vi' || stored === 'ko') return stored;
  } catch {
    /* ignore */
  }
  return 'en';
}
