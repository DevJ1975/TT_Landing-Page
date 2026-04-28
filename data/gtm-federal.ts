export type FederalAgency = {
  id: string;
  name: string;
  short: string;
  focus: string;
  vehicles: string[];
  approach: string;
};

export const federalAgencies: FederalAgency[] = [
  {
    id: 'va',
    name: 'Department of Veterans Affairs (VA)',
    short: 'VA',
    focus:
      'Workforce training, EHS compliance, healthcare-system staff onboarding across VAMCs and CBOCs.',
    vehicles: ['SDVOSB Set-Aside', 'VA T4NG follow-on', 'VA OSDBU direct buys'],
    approach:
      'Lead with Vets-First eligibility and Trainovate’s veteran founder. Synergy Federal Group drives capture and BD relationships within VA OI&T and OSDBU.',
  },
  {
    id: 'dod',
    name: 'Department of Defense (DoD)',
    short: 'DoD',
    focus:
      'Unit-level safety training, MOS-aligned curriculum, range and installation EHS programs.',
    vehicles: ['SDVOSB Set-Aside', 'SPRUCE IDIQ', 'Service-component small business offices'],
    approach:
      'Target Army installation safety offices and Reserve / Guard training commands first — domains where Synergy’s retired-Army leadership opens doors.',
  },
  {
    id: 'civilian',
    name: 'GSA / Civilian Agencies',
    short: 'GSA / Civilian',
    focus:
      'Safety, compliance, and onboarding training across civilian agencies (DOL, DHS components, USDA).',
    vehicles: ['GSA MAS Schedule (2027)', 'OASIS+ teaming', 'Agency BPA opportunities'],
    approach:
      'Long-tail strategy. Pursue GSA MAS in 2027 once federal past performance is established via VA/DoD set-asides.',
  },
];

export type ContractVehicle = {
  name: string;
  status: 'Active' | 'In Pursuit' | 'Planned';
  detail: string;
};

export const contractVehicles: ContractVehicle[] = [
  {
    name: 'SDVOSB Set-Aside (Vets First)',
    status: 'Active',
    detail:
      'Trainovate is SDVOSB-certified — eligible for Vets-First sole-source up to $5M (services) and competitive set-asides at VA.',
  },
  {
    name: 'SPRUCE IDIQ (IT Modernization)',
    status: 'In Pursuit',
    detail:
      'Position Soteria as a workforce-modernization solution for Army installations. Synergy leads capture; Trainovate is technical prime.',
  },
  {
    name: 'GSA MAS Schedule',
    status: 'Planned',
    detail:
      'Targeted submission in 2027 once federal past-performance file is built across VA / DoD task orders.',
  },
  {
    name: 'Synergy Capture Teaming',
    status: 'Active',
    detail:
      'Synergy Federal Group serves as capture lead and BD relationship owner; Trainovate executes technical solution and delivery.',
  },
];

export type FederalGTMStep = {
  step: number;
  title: string;
  detail: string;
};

export const federalGTMSteps: FederalGTMStep[] = [
  {
    step: 1,
    title: 'Capability Statement + SAM.gov Active',
    detail:
      'Trainovate capability statement live; SAM.gov registration current with NAICS 611430, 611710, 541511, 541512.',
  },
  {
    step: 2,
    title: 'Target VA & DoD Small Business Set-Asides',
    detail:
      'Daily SAM.gov / GovWin scrape against SDVOSB and small-business-set-aside solicitations in workforce-training scope.',
  },
  {
    step: 3,
    title: 'Synergy Leads Capture / BD Relationships',
    detail:
      'Synergy Federal Group owns customer access — OSDBU intros, vendor days, and pre-RFP shaping conversations.',
  },
  {
    step: 4,
    title: 'Trainovate Delivers the Technical Solution',
    detail:
      'Soteria platform, instructional-design output, and program management. Past-performance file builds with each task order.',
  },
  {
    step: 5,
    title: 'Expand via IDIQ Task Orders',
    detail:
      'Convert single awards into multi-year recompetes; pursue prime IDIQ slots once revenue history qualifies.',
  },
];

export const fedRampPillars = [
  {
    title: 'Supabase on AWS GovCloud Path',
    detail:
      'Postgres + Auth + Storage architected to run inside AWS GovCloud boundary for FedRAMP Moderate alignment.',
  },
  {
    title: 'Zero-Trust Architecture',
    detail:
      'Identity-aware access, signed service-to-service calls, and per-tenant cryptographic boundaries.',
  },
  {
    title: 'Audit Trail + FISMA-Ready Logging',
    detail:
      'Immutable, time-stamped audit log of all administrative and learner actions, exportable for IG and ATO review.',
  },
];
