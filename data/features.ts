import {
  Award,
  ShieldCheck,
  HardHat,
  Building2,
  PenLine,
  BarChart3,
  Sparkles,
} from 'lucide-react';

export type FeaturePillar = {
  id: string;
  title: string;
  short: string;
  detail: string;
  icon: typeof Award;
  accent: 'blue' | 'gold';
};

export const featurePillars: FeaturePillar[] = [
  {
    id: 'standards',
    title: 'Industry-Standard Training Formats',
    short: 'Plays every major training package out of the box.',
    detail:
      'Built to the major industry training standards used across enterprise and federal L&D. Bring any compliant course package and Soteria plays it — capturing progress, score, and audit data into a single compliance record for every learner.',
    icon: Award,
    accent: 'blue',
  },
  {
    id: 'fedramp',
    title: 'FedRAMP-Aligned Architecture',
    short: 'Built for federal-grade trust from day one.',
    detail:
      'Zero-trust access controls, role-based permissions, immutable audit logs, and encryption at rest and in transit. Deployment path on a federal-cleared cloud for FedRAMP Moderate alignment — engineered to satisfy FISMA and NIST 800-53 control families.',
    icon: ShieldCheck,
    accent: 'gold',
  },
  {
    id: 'ehs',
    title: 'EHS & Safety Curriculum Engine',
    short: 'OSHA-ready out of the box.',
    detail:
      'Pre-built OSHA 10 / 30 frameworks, lockout-tagout, HAZWOPER, and food-safety modules authored by an OSHA 500/501-track instructor. Layer in client-specific JSAs, SOPs, and incident-driven micro-courses.',
    icon: HardHat,
    accent: 'blue',
  },
  {
    id: 'tenancy',
    title: 'Multi-Tenant (Enterprise + Gov)',
    short: 'One platform. Isolated tenancies.',
    detail:
      'Per-tenant data isolation with shared infrastructure efficiencies. Enterprises run their own brand, content library, and reporting; federal tenants get FedRAMP-boundary isolation. Role-based permissions across organizations, departments, and crews.',
    icon: Building2,
    accent: 'blue',
  },
  {
    id: 'authoring',
    title: 'Course Authoring & Import',
    short: 'Drag-and-drop authoring or bring your own courses.',
    detail:
      'Web-based authoring for short videos, scenario branching, and quiz banks. Import any industry-standard course package, or build new lessons inside Soteria’s authoring canvas. Versioning, draft / publish workflow, and per-tenant content libraries.',
    icon: PenLine,
    accent: 'blue',
  },
  {
    id: 'analytics',
    title: 'Analytics & Audit Dashboard',
    short: 'Compliance posture at a glance.',
    detail:
      'Real-time completion, certification expirations, at-risk-roster alerts, and OSHA-recordable export. Drill from organization → site → role → individual. Built-in audit trail satisfies inspection requests in minutes, not weeks.',
    icon: BarChart3,
    accent: 'blue',
  },
  {
    id: 'ai',
    title: 'AI Compliance Suite',
    short: 'AI authoring, copiloting, auditing — embedded everywhere.',
    detail:
      'Course Authoring AI turns an SOP into a full lesson in minutes. The Compliance Copilot answers admin questions in plain English. The Audit Assistant compiles inspection packages on demand. Predictive Compliance Risk flags failures before they happen. Every AI action is logged, reviewable, and operator-approved.',
    icon: Sparkles,
    accent: 'blue',
  },
];

export const techStack = [
  'Federal-Cleared Cloud',
  'Mobile-Native iPad App',
  'Compliance Records Engine',
  'Encrypted by Default',
  'Audit-Ready From Day One',
];
