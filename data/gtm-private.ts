export type PrivateVertical = {
  id: string;
  name: string;
  pipeline: string;
  description: string;
  contacts: string;
  strategy: string;
  potential: string;
};

export const privateVerticals: PrivateVertical[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing & Food Production',
    pipeline: 'Snak King, UNFI',
    description:
      'High-volume production environments with continuous OSHA, GMP, and food-safety training requirements. Soteria replaces binders, paper sign-offs, and disconnected LMSs with a single audit-ready system.',
    contacts: 'EHS Directors, Plant Managers, HR / Training VPs',
    strategy:
      'Land via OSHA 10/30 training engagement → diagnose compliance gaps → 30-day pilot in one facility → rollout across plants. Snak King is in active onboarding; UNFI proposal Q2 2026.',
    potential: '$45K–$180K ACV per multi-site enterprise',
  },
  {
    id: 'aviation',
    name: 'Aviation & Aerospace MRO',
    pipeline: 'StandardAero',
    description:
      'Maintenance, repair, and overhaul environments demanding FAA-aligned task training, technician certifications, and incident-driven retraining. Soteria centralizes credentialing across hangars and lines.',
    contacts: 'Director of Training, QA Managers, Safety Officers',
    strategy:
      'Demo to StandardAero anchored in tablet-based hangar training. Position iPad app as differentiator vs. legacy LMS vendors. Proposal cycle Q1–Q2 2026.',
    potential: '$80K–$250K ACV with multi-line expansion',
  },
  {
    id: 'logistics',
    name: 'Logistics & Distribution',
    pipeline: 'Outbound prospecting',
    description:
      'DCs, 3PLs, and last-mile carriers with high turnover, forklift certification cycles, and DOT/OSHA audit exposure. Soteria delivers fast onboarding and rolling re-certification.',
    contacts: 'Operations Directors, Regional Safety Leads',
    strategy:
      'LinkedIn outreach + safety-consulting referral motion. Bundle Trainovate OSHA 10 fulfillment with annual Soteria seats.',
    potential: '$30K–$120K ACV',
  },
  {
    id: 'construction',
    name: 'Construction & Industrial Services',
    pipeline: 'Outbound prospecting',
    description:
      'GCs, subs, and industrial services firms juggling crew-by-crew safety briefings, fall protection, and trade-specific certs across job sites.',
    contacts: 'Safety Directors, Project Managers, Owner-Operators',
    strategy:
      'Partner with insurance brokers and safety consultants who already advise these firms. Lead with mobile toolbox-talk delivery and digital sign-offs.',
    potential: '$25K–$95K ACV',
  },
];

export type GTMStep = {
  step: number;
  title: string;
  detail: string;
};

export const gtmSteps: GTMStep[] = [
  {
    step: 1,
    title: 'Land via Safety Consulting & OSHA Training',
    detail:
      'Use Trainovate’s existing OSHA 10/30 and EHS consulting relationships as the door-opener. Soteria is introduced once trust is established.',
  },
  {
    step: 2,
    title: 'Identify Training Pain Points → Demo Soteria',
    detail:
      'Audit current compliance training stack. Quantify audit risk, paper burden, and certification lapses. Map findings directly to a tailored Soteria demo.',
  },
  {
    step: 3,
    title: 'Pilot (1 Department, 30-Day Onboarding)',
    detail:
      'Stand up a single facility or function. Migrate priority courses, set up RBAC, train administrators, and capture before/after compliance metrics.',
  },
  {
    step: 4,
    title: 'Enterprise Seat Expansion',
    detail:
      'Convert pilot success into a multi-site rollout. Negotiate annual contract with volume tiers and dedicated customer-success engagement.',
  },
  {
    step: 5,
    title: 'Upsell Custom Curriculum + Analytics Tier',
    detail:
      'Layer in client-branded courses authored by Trainovate’s instructional design team, advanced analytics, and integrations (HRIS, SSO, compliance reporting).',
  },
];

export type PricingTier = {
  name: string;
  blurb: string;
  highlight: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    blurb: 'Per-seat SaaS for SMBs and single-site teams.',
    highlight: 'Self-serve · Standard course library · Email support',
  },
  {
    name: 'Enterprise',
    blurb: 'Flat-rate annual + custom curriculum.',
    highlight: 'Multi-tenant · SSO · Dedicated CSM · Branded portal',
  },
  {
    name: 'Consulting-Led',
    blurb: 'Bundled with safety advisory retainer.',
    highlight: 'Embedded EHS expertise · Compliance audits · Roadmap planning',
  },
];

export const privateMetrics = [
  { value: 6.8, suffix: 'B', prefix: '$', label: 'EHS Training Market (2025)' },
  { value: 47, suffix: '%', prefix: '', label: 'Of companies lack digital compliance training' },
  { value: 3, suffix: '', prefix: '', label: 'Active enterprise pipeline accounts' },
];
