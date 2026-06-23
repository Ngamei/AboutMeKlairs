export interface BrootUseCaseStep {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface BrootUseCaseBranch {
  title: string;
  bullets: string[];
}

export interface BrootUseCaseContent {
  sectionTitle: string;
  overview: {
    title: string;
    paragraphs: string[];
    actions: string[];
    closing: string;
  };
  businessScenario: {
    title: string;
    paragraphs: string[];
    captureSources: string[];
    tagItems: { label: string; description: string }[];
    closing: string;
  };
  whyTagsMatter: {
    title: string;
    paragraphs: string[];
    tagItems: { label: string; description: string }[];
    benefits: string[];
    workflowNote: string;
  };
  workflowTrigger: {
    title: string;
    bullets: string[];
    closing: string;
  };
  automationFlow: {
    title: string;
    steps: BrootUseCaseStep[];
  };
  crmSyncBranches: {
    title: string;
    branches: BrootUseCaseBranch[];
  };
  outcome: {
    title: string;
    bullets: string[];
  };
}

export const brootUseCase: BrootUseCaseContent = {
  sectionTitle: 'Use Case: Broot Lead Capture → Follow-Up Automation → CRM Sync',
  overview: {
    title: 'Use Case Overview',
    paragraphs: [
      'At trade shows, networking events, or business development activities, team members collect new contacts by scanning business cards, LinkedIn QR codes, contact QR codes, or other lead sources into Broot.',
      'Once a contact is added to a specific campaign, such as Trade Shows, the contact is classified using a Broot Lead Tag such as Hot, Warm, or Cold.',
      'The automation then triggers two actions:',
    ],
    actions: [
      'Sends a follow-up message based on the lead tag.',
      'Syncs the lead instantly to the selected CRM: HubSpot, Zoho CRM, or Streak CRM.',
    ],
    closing:
      'The goal is to reduce manual CRM entry, speed up follow-up, and make sure every captured lead is routed consistently after an event.',
  },
  businessScenario: {
    title: 'Business Scenario',
    paragraphs: [
      'A team member attends a trade show and meets several potential leads.',
      'Instead of manually entering each lead into a CRM later, the team member uses Broot to capture the contact immediately by scanning:',
      'The contact is added to the Trade Shows campaign in Broot.',
      'Based on the conversation quality or lead potential, the contact is tagged as:',
    ],
    captureSources: ['Business card', 'LinkedIn QR code', 'Contact QR code', 'Other contact source'],
    tagItems: [
      { label: 'Hot', description: 'high-interest lead, needs fast follow-up' },
      { label: 'Warm', description: 'interested but needs nurturing' },
      { label: 'Cold', description: 'low urgency or long-term contact' },
    ],
    closing: 'Once the contact is saved, the automation workflow starts automatically.',
  },
  whyTagsMatter: {
    title: 'Why Hot, Warm, and Cold Lead Tags Matter',
    paragraphs: [
      'Classifying leads as Hot, Warm, or Cold using the Broot Lead Tag is important because not every captured contact should receive the same follow-up or sales treatment.',
      'When team members collect contacts at events like trade shows, some leads may be ready for a quick sales conversation, while others may only be casually interested or better suited for long-term nurturing. The lead tag helps the workflow understand the contact’s intent and route the next action correctly.',
    ],
    tagItems: [
      {
        label: 'Hot leads',
        description:
          'need fast and direct follow-up because they show strong interest, urgency, or buying potential.',
      },
      {
        label: 'Warm leads',
        description: 'need a friendly nurturing message with more context, resources, or a softer next step.',
      },
      {
        label: 'Cold leads',
        description:
          'should receive a low-pressure follow-up so the relationship can be maintained without over-communicating.',
      },
    ],
    benefits: [
      'Send the right follow-up message based on lead quality',
      'Prioritize high-interest leads faster',
      'Avoid treating every scanned contact the same way',
      'Reduce manual decision-making after events',
      'Keep CRM records more meaningful for sales and customer success teams',
      'Support better post-event follow-up and pipeline management',
    ],
    workflowNote:
      'For the n8n workflow, the Broot Lead Tag acts as the routing logic. Once the contact is added to a campaign like Trade Shows, the workflow checks whether the lead is Hot, Warm, or Cold, then triggers the correct follow-up path and syncs the contact to the selected CRM: HubSpot, Zoho CRM, or Streak CRM.',
  },
  workflowTrigger: {
    title: 'Workflow Trigger',
    bullets: [
      'A new contact or lead is added in Broot',
      'The contact belongs to a selected campaign, such as Trade Shows',
      'The contact has a Broot Lead Tag: Hot, Warm, or Cold',
    ],
    closing: 'Broot sends the lead data to n8n through a webhook.',
  },
  automationFlow: {
    title: 'Automation Flow',
    steps: [
      {
        title: 'Step 1: Capture Lead Data From Broot',
        paragraphs: ['Broot sends the captured contact data to n8n.', 'The data may include:'],
        bullets: [
          'Full name',
          'Email',
          'Phone number',
          'Company name',
          'Job title',
          'LinkedIn profile',
          'Company website',
          'Contact source',
          'Campaign name',
          'Lead tag',
          'Notes or event context',
        ],
      },
      {
        title: 'Step 2: Normalize The Payload',
        paragraphs: [
          'The workflow standardizes the incoming Broot data so it can be used consistently across different CRM systems.',
          'This helps avoid field mismatch issues between Broot, HubSpot, Zoho CRM, and Streak CRM.',
        ],
      },
      {
        title: 'Step 3: Classify Lead Follow-Up Path',
        paragraphs: ['The workflow checks the Broot Lead Tag.'],
        bullets: [
          'If the tag is Hot, the workflow prepares a high-priority follow-up message.',
          'If the tag is Warm, the workflow prepares a nurturing follow-up message.',
          'If the tag is Cold, the workflow prepares a lighter, low-pressure follow-up message.',
          'If no valid tag is found, the lead can be routed to manual review.',
        ],
      },
      {
        title: 'Step 4: Send Follow-Up Message',
        paragraphs: ['The workflow sends or prepares a follow-up message based on the lead tag.', 'Example logic:'],
        bullets: [
          'Hot lead: fast, direct, sales-oriented follow-up',
          'Warm lead: friendly follow-up with more context or resources',
          'Cold lead: soft-touch message for long-term connection',
        ],
      },
      {
        title: 'Step 5: Sync To CRM Of Choice',
        paragraphs: [
          'The workflow routes the lead to the selected CRM path.',
          'For each CRM, the workflow maps the Broot lead fields into the CRM’s required contact or lead fields.',
          'The automation can create a new record or update an existing one depending on the CRM setup.',
        ],
        bullets: [
          'Broot → n8n → HubSpot CRM',
          'Broot → n8n → Zoho CRM',
          'Broot → Streak CRM Webhook Setup',
        ],
      },
    ],
  },
  crmSyncBranches: {
    title: 'CRM Sync Branches',
    branches: [
      {
        title: 'Branch 1: Broot → n8n → HubSpot CRM',
        bullets: [
          'Receive Broot lead payload in n8n',
          'Normalize contact data',
          'Check whether the contact already exists in HubSpot',
          'Create a new HubSpot contact if not found',
          'Update the existing contact if already found',
          'Map Broot fields into HubSpot contact properties',
          'Return sync result',
        ],
      },
      {
        title: 'Branch 2: Broot → n8n → Zoho CRM',
        bullets: [
          'Receive normalized Broot lead data',
          'Map Broot fields to Zoho CRM lead/contact fields',
          'Prepare create/update lead logic',
          'Configure required Zoho CRM fields',
          'Send the lead data into Zoho CRM',
          'Validate CRM record creation or update',
        ],
      },
      {
        title: 'Branch 3: Broot → Streak CRM Webhook Setup',
        bullets: [
          'Configure Broot outbound webhook endpoint',
          'Set required request headers',
          'Generate Basic Auth format for Streak API',
          'Map top-level Streak fields',
          'Map nested custom CRM fields',
          'Handle dropdown field values',
          'Document API key security notes',
          'Validate Streak box creation and field population',
        ],
      },
    ],
  },
  outcome: {
    title: 'Outcome',
    bullets: [
      'Capture leads faster during events',
      'Reduce manual CRM data entry',
      'Standardize CRM field mapping',
      'Send faster and more relevant follow-up messages',
      'Route leads based on interest level',
      'Keep CRM data consistent across HubSpot, Zoho CRM, and Streak',
      'Improve post-event sales and customer success operations',
    ],
  },
};
