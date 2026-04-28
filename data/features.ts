import {
  Award,
  ShieldCheck,
  HardHat,
  Building2,
  Smartphone,
  BarChart3,
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
    title: 'SCORM / xAPI / cmi5 Compliant',
    short: 'Industry-standard course interoperability.',
    detail:
      'Native SCORM 1.2 / 2004 player, xAPI statement pipeline, and cmi5 launch support. Bring any compliant course package and Soteria plays it — with full progress, score, and audit data captured to a built-in LRS.',
    icon: Award,
    accent: 'blue',
  },
  {
    id: 'fedramp',
    title: 'FedRAMP-Aligned Architecture',
    short: 'Built for federal-grade trust from day one.',
    detail:
      'Zero-trust auth, role-based access, immutable audit logs, encryption at rest and in transit. AWS GovCloud deployment path for FedRAMP Moderate alignment — engineered to satisfy FISMA and NIST 800-53 control families.',
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
      'Per-tenant data isolation with shared infrastructure efficiencies. Enterprises run their own brand, content library, and reporting; federal tenants get FedRAMP-boundary isolation. RBAC across organizations, departments, and crews.',
    icon: Building2,
    accent: 'blue',
  },
  {
    id: 'mobile',
    title: 'Native Mobile (iPad / iOS)',
    short: 'Field learning where the work happens.',
    detail:
      'SwiftUI iPad companion app for floor-level training, offline course playback, photo-based competency capture, and supervisor sign-offs. Designed for hangars, plants, distribution centers, and base operations.',
    icon: Smartphone,
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
];

export const techStack = ['Next.js', 'Supabase', 'Prisma', 'tRPC', 'AWS'];
