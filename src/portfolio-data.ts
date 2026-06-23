import type { LucideIcon } from 'lucide-react';
import { Bot, Users, Zap, Github, Play, Globe, FileText, Lightbulb, Heart } from 'lucide-react';

export interface ProjectLinkConfig {
  labelKey: keyof typeof linkLabelKeys;
  href: string;
  icon: LucideIcon;
}

const linkLabelKeys = {
  github: true,
  watchDemo: true,
  n8nWorkspace: true,
} as const;

export interface ProjectConfig {
  id: 'helloClever' | 'broot' | 'crewAnywhere';
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

export const projectConfigs: ProjectConfig[] = [
  {
    id: 'helloClever',
    icon: Bot,
    links: [{ labelKey: 'github', href: 'https://github.com/Ngamei/klever-support-engineer-ai', icon: Github }],
  },
  {
    id: 'broot',
    icon: Zap,
    links: [
      {
        labelKey: 'watchDemo',
        href: 'https://app.guidde.com/playbooks/playlist/bJf686sP6H9wSqw9x2W7WG?origin=zoab0ogvHsgFE4oEVUArPm8Tyqo1&active=0',
        icon: Play,
      },
      { labelKey: 'n8nWorkspace', href: 'https://ngamei2912.app.n8n.cloud/', icon: Globe },
    ],
  },
  {
    id: 'crewAnywhere',
    icon: Users,
    links: [{ labelKey: 'github', href: 'https://github.com/Ngamei/CrewAnywhere', icon: Github }],
  },
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
  { id: 'contactLogic', icon: FileText, onRequest: true },
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
