import type { LucideIcon } from 'lucide-react';
import { Bot, Users, Zap, Github, Play, Globe, FileText, Lightbulb, Heart, Mail } from 'lucide-react';

export type ExternalLinkKey = 'github' | 'watchDemo' | 'n8nWorkspace' | 'liveSite';
export type InternalLinkKey = 'viewCaseStudy';

export type ProjectLinkConfig =
  | { type: 'external'; labelKey: ExternalLinkKey; href: string; icon: LucideIcon }
  | { type: 'internal'; labelKey: InternalLinkKey; to: string; icon: LucideIcon };

export interface ProjectConfig {
  id: 'contactAutomation' | 'helloClever' | 'broot' | 'crewAnywhere';
  icon: LucideIcon;
  links: ProjectLinkConfig[];
}

export interface ConceptConfig {
  id: 'pmAssistance' | 'risenMatch';
  icon: LucideIcon;
}

export interface EvidenceConfig {
  id: string;
  icon: LucideIcon;
  href?: string;
  onRequest?: boolean;
}

const projectConfigsById: Record<ProjectConfig['id'], ProjectConfig> = {
  helloClever: {
    id: 'helloClever',
    icon: Bot,
    links: [{ type: 'external', labelKey: 'github', href: 'https://github.com/Ngamei/klever-support-engineer-ai', icon: Github }],
  },
  crewAnywhere: {
    id: 'crewAnywhere',
    icon: Users,
    links: [{ type: 'external', labelKey: 'github', href: 'https://github.com/Ngamei/CrewAnywhere', icon: Github }],
  },
  contactAutomation: {
    id: 'contactAutomation',
    icon: Mail,
    links: [
      { type: 'internal', labelKey: 'viewCaseStudy', to: '/case-studies/portfolio-contact-automation', icon: FileText },
      { type: 'external', labelKey: 'liveSite', href: 'https://aboutme.klairsthefirst.com', icon: Globe },
      { type: 'external', labelKey: 'github', href: 'https://github.com/Ngamei/AboutMeKlairs', icon: Github },
    ],
  },
  broot: {
    id: 'broot',
    icon: Zap,
    links: [
      {
        type: 'external',
        labelKey: 'watchDemo',
        href: 'https://app.guidde.com/playbooks/playlist/bJf686sP6H9wSqw9x2W7WG?origin=zoab0ogvHsgFE4oEVUArPm8Tyqo1&active=0',
        icon: Play,
      },
      { type: 'external', labelKey: 'n8nWorkspace', href: 'https://ngamei2912.app.n8n.cloud/', icon: Globe },
    ],
  },
};

export const featuredProductProjects: ProjectConfig[] = [
  projectConfigsById.helloClever,
  projectConfigsById.crewAnywhere,
];

export const automationProjects: ProjectConfig[] = [
  projectConfigsById.contactAutomation,
  projectConfigsById.broot,
];

export const conceptConfigs: ConceptConfig[] = [
  { id: 'pmAssistance', icon: Lightbulb },
  { id: 'risenMatch', icon: Heart },
];

export const evidenceConfigs: EvidenceConfig[] = [
  { id: 'githubProfile', icon: Github, href: 'https://github.com/Ngamei' },
  { id: 'helloCleverRepo', icon: Bot, href: 'https://github.com/Ngamei/klever-support-engineer-ai' },
  { id: 'crewAnywhereRepo', icon: Users, href: 'https://github.com/Ngamei/CrewAnywhere' },
  {
    id: 'brootDemo',
    icon: Play,
    href: 'https://app.guidde.com/playbooks/playlist/bJf686sP6H9wSqw9x2W7WG?origin=zoab0ogvHsgFE4oEVUArPm8Tyqo1&active=0',
  },
  { id: 'n8nWorkspace', icon: Globe, href: 'https://ngamei2912.app.n8n.cloud/' },
  { id: 'streakWebhook', icon: FileText, onRequest: true },
  { id: 'resume', icon: FileText, onRequest: true },
];

export const skillGroupIds = [
  'productManagement',
  'customerSuccess',
  'aiAutomation',
  'apiIntegration',
  'frontend',
  'crmTools',
] as const;

export const PORTFOLIO_URL = 'https://aboutme.klairsthefirst.com/';
