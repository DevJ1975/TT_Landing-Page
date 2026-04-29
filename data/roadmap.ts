export type MilestoneStatus = 'planned' | 'in-progress' | 'complete';

export type Milestone = {
  id: string;
  title: string;
  detail: string;
  status: MilestoneStatus;
};

export type Quarter = {
  id: string;
  label: string;
  range: string;
  theme: string;
  milestones: Milestone[];
};

export const roadmap: Quarter[] = [
  {
    id: 'q1',
    label: 'Q1 2026',
    range: 'Jan – Mar',
    theme: 'Foundation & First Pilot',
    milestones: [
      {
        id: 'q1-mvp',
        title: 'Soteria MVP: Core LMS Live',
        detail:
          'Login, course engine, industry-standard course player, learner + admin dashboards. Production deployment on a federal-cleared cloud, internal quality testing complete.',
        status: 'complete',
      },
      {
        id: 'q1-mfg-pilot',
        title: 'Manufacturing Anchor Pilot — Outbound',
        detail:
          'Mid-market food-production and manufacturing outbound campaign. Goal: one signed 30-day pilot agreement with priority OSHA + GMP courses migrated and baseline compliance metrics captured.',
        status: 'complete',
      },
      {
        id: 'q1-mro-demo',
        title: 'MRO Demo Pipeline',
        detail:
          'Tablet-led demos to regional aviation / aerospace MRO operators. Proposals include iPad field-app preview and multi-line rollout plan.',
        status: 'complete',
      },
      {
        id: 'q1-jv',
        title: 'Synergy JV LLC Operational',
        detail:
          'Wyoming JV entity stood up, operating agreement executed, joint capability statement finalized.',
        status: 'complete',
      },
      {
        id: 'q1-sam',
        title: 'SAM.gov Registration Current',
        detail:
          'Registration renewed, NAICS codes and capability narrative updated. SDVOSB profile active in VA Vets-First database.',
        status: 'complete',
      },
      {
        id: 'q1-content',
        title: 'Anchor Content + Case Study Template',
        detail:
          'EHS thought-leadership cadence locked (1 long-form + 3 LinkedIn posts / month) and a reusable case-study template ready to drop in once the first pilot produces metrics.',
        status: 'complete',
      },
    ],
  },
  {
    id: 'q2',
    label: 'Q2 2026',
    range: 'Apr – Jun',
    theme: 'Federal Entry & Platform Depth',
    milestones: [
      {
        id: 'q2-v11',
        title: 'Soteria v1.1: Advanced Learner Analytics',
        detail:
          'Built-in compliance records engine and a granular learner-experience pipeline. Enables drill-down analytics on every interaction across the workforce.',
        status: 'in-progress',
      },
      {
        id: 'q2-crm',
        title: 'Trainovations CRM: GovCon Pipeline Module',
        detail:
          'Internal CRM extended with capture-management workflow, opportunity scoring, and SAM.gov sync.',
        status: 'in-progress',
      },
      {
        id: 'q2-capstmt',
        title: 'First Federal Capability Statement Submitted',
        detail:
          'Capability statement distributed to VA OSDBU and target DoD small business offices. Initial vendor-day conversations scheduled.',
        status: 'in-progress',
      },
      {
        id: 'q2-vk',
        title: 'ValleyKey MVP Soft Launch',
        detail:
          'Co-venture product enters soft launch. Validates internal Trainovate playbook for spinning up adjacent SaaS bets.',
        status: 'in-progress',
      },
      {
        id: 'q2-2nd-pilot',
        title: 'Second Vertical Pilot Proposal',
        detail:
          'Formal pilot proposal into a second priority vertical (logistics or industrial services), built on Q1 pilot learnings.',
        status: 'in-progress',
      },
      {
        id: 'q2-field-alpha',
        title: 'Soteria Field Alpha (LOTO Module)',
        detail:
          'Internal alpha of the LOTO field app: energy-source isolation workflow, QR + photo verification, authorized / affected sign-off.',
        status: 'in-progress',
      },
    ],
  },
  {
    id: 'q3',
    label: 'Q3 2026',
    range: 'Jul – Sep',
    theme: 'Analytics, Mobile & Federal Bid',
    milestones: [
      {
        id: 'q3-v15',
        title: 'Soteria v1.5: Analytics Dashboard + Multi-Tenant',
        detail:
          'Compliance posture dashboards, certification-expiration alerts, multi-tenant administration, and tenant-level branding.',
        status: 'planned',
      },
      {
        id: 'q3-ipad',
        title: 'Soteria iPad Field App Beta',
        detail:
          'Native iPad app: offline course playback, photo-based competency capture, supervisor sign-off. Beta with active pilot customers.',
        status: 'planned',
      },
      {
        id: 'q3-fedbid',
        title: 'First Federal Set-Aside Bid Submitted',
        detail:
          'First SDVOSB or small-business set-aside response submitted. Synergy + Trainovate joint capture team.',
        status: 'planned',
      },
      {
        id: 'q3-roadtribe',
        title: 'Road Tribe App Beta',
        detail:
          'Motorcycle-community application enters beta — adjacent product validating mobile + community features.',
        status: 'planned',
      },
      {
        id: 'q3-mrr',
        title: 'Trainovate Revenue Target: $15K MRR',
        detail:
          'Recurring revenue from Soteria seats + consulting retainers crosses $15K monthly.',
        status: 'planned',
      },
    ],
  },
  {
    id: 'q4',
    label: 'Q4 2026',
    range: 'Oct – Dec',
    theme: 'Anchor Client & FedRAMP Path',
    milestones: [
      {
        id: 'q4-v20',
        title: 'Soteria v2.0: FedRAMP Documentation Started',
        detail:
          'System Security Plan (SSP), control narratives, and federal-cleared cloud deployment design. Preparation for sponsor outreach.',
        status: 'planned',
      },
      {
        id: 'q4-anchor',
        title: 'Enterprise Contract Signed (Anchor Client)',
        detail:
          'Convert the strongest pilot relationship into a multi-site annual contract — Trainovate’s first signed enterprise anchor.',
        status: 'planned',
      },
      {
        id: 'q4-env-beta',
        title: 'Soteria Field — Environmental Beta',
        detail:
          'Public beta of the first three environmental modules: Chemical Spill Log, Hazardous Waste Accumulation Tracker, and SWPPP Inspection Log.',
        status: 'planned',
      },
      {
        id: 'q4-jvaward',
        title: 'Synergy JV: First Federal Award (Target)',
        detail:
          'Target a first federal task-order award via the JV vehicle to seed past-performance file.',
        status: 'planned',
      },
      {
        id: 'q4-2027',
        title: '2027 Planning: Seed Raise or SBA 8(a) Prep',
        detail:
          'Decide between pre-seed / seed raise vs. self-funded growth + SBA 8(a) certification path.',
        status: 'planned',
      },
    ],
  },
];
