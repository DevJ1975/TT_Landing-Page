import {
  Flame,
  DoorOpen,
  Pipette,
  Gauge,
  ArrowUpRight,
  Shovel,
  Zap,
  Beaker,
  type LucideIcon,
} from 'lucide-react';

/* ───────────────────────── Permit types & matrix ───────────────────────── */

export type SimopsPermitType = {
  id: string;
  label: string;
  short: string;
  icon: LucideIcon;
};

export const simopsPermitTypes: SimopsPermitType[] = [
  { id: 'hot', label: 'Hot Work', short: 'HW', icon: Flame },
  { id: 'confined', label: 'Confined Space', short: 'CS', icon: DoorOpen },
  { id: 'linebreak', label: 'Line Break', short: 'LB', icon: Pipette },
  { id: 'pressure', label: 'Pressure Test', short: 'PT', icon: Gauge },
  { id: 'crane', label: 'Crane / Lift', short: 'CL', icon: ArrowUpRight },
  { id: 'excavation', label: 'Excavation', short: 'EX', icon: Shovel },
  { id: 'electrical', label: 'Electrical Iso', short: 'EI', icon: Zap },
  { id: 'chemical', label: 'Chem Inject', short: 'CI', icon: Beaker },
];

export type ConflictState = 'self' | 'incompatible' | 'review' | 'clear';

/**
 * Default incompatibility matrix derived from API RP 75 / SEMS II / IOGP 463
 * guidance. The diagonal is "self" (same permit type — typically requires
 * review when in same zone). All rules are operator-configurable in product.
 */
export const conflictMatrix: Record<string, Record<string, ConflictState>> = {
  hot: {
    hot: 'review',
    confined: 'incompatible',
    linebreak: 'incompatible',
    pressure: 'incompatible',
    crane: 'incompatible',
    excavation: 'review',
    electrical: 'clear',
    chemical: 'incompatible',
  },
  confined: {
    hot: 'incompatible',
    confined: 'review',
    linebreak: 'review',
    pressure: 'incompatible',
    crane: 'incompatible',
    excavation: 'clear',
    electrical: 'review',
    chemical: 'incompatible',
  },
  linebreak: {
    hot: 'incompatible',
    confined: 'review',
    linebreak: 'review',
    pressure: 'incompatible',
    crane: 'review',
    excavation: 'review',
    electrical: 'incompatible',
    chemical: 'review',
  },
  pressure: {
    hot: 'incompatible',
    confined: 'incompatible',
    linebreak: 'incompatible',
    pressure: 'review',
    crane: 'review',
    excavation: 'clear',
    electrical: 'review',
    chemical: 'review',
  },
  crane: {
    hot: 'incompatible',
    confined: 'incompatible',
    linebreak: 'review',
    pressure: 'review',
    crane: 'review',
    excavation: 'review',
    electrical: 'clear',
    chemical: 'clear',
  },
  excavation: {
    hot: 'review',
    confined: 'clear',
    linebreak: 'review',
    pressure: 'clear',
    crane: 'review',
    excavation: 'review',
    electrical: 'incompatible',
    chemical: 'clear',
  },
  electrical: {
    hot: 'clear',
    confined: 'review',
    linebreak: 'incompatible',
    pressure: 'review',
    crane: 'clear',
    excavation: 'incompatible',
    electrical: 'review',
    chemical: 'clear',
  },
  chemical: {
    hot: 'incompatible',
    confined: 'incompatible',
    linebreak: 'review',
    pressure: 'review',
    crane: 'clear',
    excavation: 'clear',
    electrical: 'clear',
    chemical: 'review',
  },
};

/* ───────────────────────── Scenarios & workflow ───────────────────────── */

export type SimopsScenario = {
  id: string;
  name: string;
  example: string;
};

export const simopsScenarios: SimopsScenario[] = [
  {
    id: 'hot-vessel',
    name: 'Hot work near an open vessel',
    example: 'Welding while a tank is being cleaned and vented.',
  },
  {
    id: 'crane-active',
    name: 'Crane lift over active operations',
    example: 'Critical lift over a live process unit.',
  },
  {
    id: 'excavation-pipe',
    name: 'Excavation near live piping',
    example: 'Digging near an active hydrocarbon pipeline.',
  },
  {
    id: 'pressure-occupied',
    name: 'Pressure testing near occupied areas',
    example: 'Hydrostatic test while workers are nearby.',
  },
  {
    id: 'simul-confined',
    name: 'Simultaneous confined-space entries',
    example: 'Two crews entering adjacent vessels.',
  },
  {
    id: 'iso-mech',
    name: 'Electrical isolation + mechanical work',
    example: 'LOTO active while another crew works on connected system.',
  },
  {
    id: 'drill-prod',
    name: 'Drilling + production on same platform',
    example: 'Drilling operations while production continues.',
  },
  {
    id: 'chem-hot',
    name: 'Chemical injection + hot work',
    example: 'Chemical pumping while welding nearby.',
  },
];

export type WorkflowStep = {
  step: number;
  title: string;
  detail: string;
};

export const simopsWorkflow: WorkflowStep[] = [
  {
    step: 1,
    title: 'Work Request Submission',
    detail:
      'Supervisor enters work type, zone, start time, duration, personnel count. System queries all active and pending permits in the same zone.',
  },
  {
    step: 2,
    title: 'Conflict Detection',
    detail:
      'Automatic check against the incompatibility matrix. Hard incompatibility blocks issuance; potential interaction triggers SIMOPS review.',
  },
  {
    step: 3,
    title: 'SIMOPS Review Meeting Log',
    detail:
      'Both permit issuers + Area Authority document conflicts, agreed controls (sequencing, barriers, comms, safety watch), and signatures.',
  },
  {
    step: 4,
    title: 'Conditional Permit Issuance',
    detail:
      'Both permits issued with linked conditions. Each carries SIMOPS flag, linked permit number, and required check-in intervals.',
  },
  {
    step: 5,
    title: 'Active SIMOPS Monitoring',
    detail:
      'Live dashboard of permit pairs. Supervisors acknowledge active conditions at intervals; missed check-ins escalate to Area Authority.',
  },
  {
    step: 6,
    title: 'Permit Closure Coordination',
    detail:
      'When one permit closes, the linked issuer is notified. Conditions trigger re-evaluation of restrictions on the linked permit.',
  },
];

/* ───────────────────────── Build phases & competition ───────────────────────── */

export type SimopsPhase = {
  number: string;
  title: string;
  timeline: string;
};

export const simopsPhases: SimopsPhase[] = [
  {
    number: '01',
    title: 'Incompatibility matrix engine + conflict detection on submission',
    timeline: 'Q3 2026',
  },
  {
    number: '02',
    title: 'SIMOPS review log + conditional permit issuance with linked controls',
    timeline: 'Q3 2026',
  },
  {
    number: '03',
    title: 'Live SIMOPS dashboard + Gantt timeline view',
    timeline: 'Q4 2026',
  },
  {
    number: '04',
    title: 'Zone / area map with facility diagram upload',
    timeline: 'Q4 2026',
  },
  {
    number: '05',
    title: 'Check-in monitoring + escalation alerts',
    timeline: 'Q1 2027',
  },
  {
    number: '06',
    title: 'Stop Work Authority integration',
    timeline: 'Q1 2027',
  },
  {
    number: '07',
    title: 'Configurable matrix (operator-defined rules)',
    timeline: 'Q2 2027',
  },
];

export type CompetitorRow = {
  name: string;
  capable: 'full' | 'partial' | 'none';
  note: string;
  isUs?: boolean;
};

export const simopsCompetition: CompetitorRow[] = [
  {
    name: 'Paper-based PTW systems',
    capable: 'none',
    note: 'Manual coordination, high failure risk.',
  },
  {
    name: 'SAP EHS',
    capable: 'partial',
    note: 'Desktop only, no field-first design.',
  },
  {
    name: 'Enablon',
    capable: 'partial',
    note: 'Enterprise only, six-figure contracts.',
  },
  {
    name: 'Intelex',
    capable: 'none',
    note: 'No SIMOPS coordination engine.',
  },
  {
    name: 'Generic CMMS',
    capable: 'none',
    note: 'Work orders are not permits.',
  },
  {
    name: 'Soteria Field',
    capable: 'full',
    note: 'iPad-first, offline-capable, field-native.',
    isUs: true,
  },
];

export const simopsRegulatoryFramework = [
  'API RP 75',
  'SEMS II — 30 CFR 250 Subpart S',
  'OSHA 1910.119 PSM',
  'API RP 2009',
  'IOGP Report 463',
];

export const simopsTargetClients = [
  'Offshore platforms',
  'Onshore refineries',
  'Petrochemical plants',
  'PSM-regulated facilities',
  'EPC contractors',
];

export const piperAlphaCallout = {
  year: 1988,
  fatalities: 167,
  rootCause:
    'A SIMOPS failure — a condensate pump was returned to service while maintenance work was still active on the connected relief valve. No one coordinated the two permits.',
};

export const simopsPitch =
  'Soteria Field is the only field-native permit platform with a built-in SIMOPS coordination engine — automatically detecting conflicting work permits, blocking dangerous combinations, and documenting every SIMOPS review for BSEE and API RP 75 compliance. The tool that Piper Alpha needed. The tool your platform needs today.';
