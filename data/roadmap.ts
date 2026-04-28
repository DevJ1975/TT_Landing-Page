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
          'Auth, course engine, SCORM 1.2 / 2004 player, learner + admin dashboards. Production deployment on AWS, internal QA complete.',
        status: 'in-progress',
      },
      {
        id: 'q1-snak',
        title: 'Snak King Pilot Onboarding',
        detail:
          'First plant onboarded: priority OSHA + GMP courses migrated, RBAC configured, supervisors trained, baseline compliance metrics captured.',
        status: 'in-progress',
      },
      {
        id: 'q1-saero',
        title: 'StandardAero Demo + Proposal',
        detail:
          'Tablet-led demo to MRO leadership. Proposal includes iPad field-app preview and multi-line rollout plan.',
        status: 'planned',
      },
      {
        id: 'q1-jv',
        title: 'Synergy JV LLC Operational',
        detail:
          'Wyoming JV entity stood up, operating agreement executed, joint capability statement finalized.',
        status: 'in-progress',
      },
      {
        id: 'q1-sam',
        title: 'SAM.gov Registration Current',
        detail:
          'Registration renewed, NAICS codes and capability narrative updated. SDVOSB profile active in VA Vets-First database.',
        status: 'complete',
      },
      {
        id: 'q1-cp',
        title: 'Code Platoon Enrollment Prep',
        detail:
          'Pre-work modules complete, June cohort confirmed, schedule blocked against client commitments.',
        status: 'in-progress',
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
        title: 'Soteria v1.1: xAPI / LRS Integration',
        detail:
          'Native LRS endpoint, xAPI statement pipeline, and basic statement-query API. Enables granular learner-experience analytics.',
        status: 'planned',
      },
      {
        id: 'q2-crm',
        title: 'Trainovations CRM: GovCon Pipeline Module',
        detail:
          'Internal CRM extended with capture-management workflow, opportunity scoring, and SAM.gov sync.',
        status: 'planned',
      },
      {
        id: 'q2-capstmt',
        title: 'First Federal Capability Statement Submitted',
        detail:
          'Capability statement distributed to VA OSDBU and target DoD small business offices. Initial vendor-day conversations scheduled.',
        status: 'planned',
      },
      {
        id: 'q2-vk',
        title: 'ValleyKey MVP Soft Launch',
        detail:
          'Co-venture product enters soft launch. Validates internal Trainovate playbook for spinning up adjacent SaaS bets.',
        status: 'planned',
      },
      {
        id: 'q2-cp',
        title: 'Code Platoon Begins (June)',
        detail:
          'Founder enters intensive full-stack engineering program. Pre-staffed delivery coverage for active clients.',
        status: 'planned',
      },
      {
        id: 'q2-unfi',
        title: 'UNFI Pilot Proposal',
        detail:
          'Formal pilot proposal to UNFI distribution leadership building on Snak King reference.',
        status: 'planned',
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
        title: 'Soteria iPad Field App (SwiftUI) Beta',
        detail:
          'Native iPad app: offline course playback, photo-based competency capture, supervisor sign-off. Beta with StandardAero and Snak King.',
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
          'System Security Plan (SSP), control narratives, and AWS GovCloud deployment design. Preparation for sponsor outreach.',
        status: 'planned',
      },
      {
        id: 'q4-anchor',
        title: 'Enterprise Contract Signed (Anchor Client)',
        detail:
          'Convert one pipeline account (Snak King / StandardAero / UNFI) into multi-site annual contract.',
        status: 'planned',
      },
      {
        id: 'q4-cp',
        title: 'Code Platoon Graduation (December)',
        detail:
          'Founder completes full-stack engineering program. Trainovate product engineering capacity steps up.',
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
