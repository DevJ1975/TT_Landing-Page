import {
  Droplets,
  Recycle,
  Waves,
  FlaskConical,
  Wind,
  Zap,
  AlertOctagon,
  Globe2,
  BarChart4,
  type LucideIcon,
} from 'lucide-react';

export type ModuleFeature = {
  title: string;
  detail: string;
};

export type EnvironmentalModule = {
  id: string;
  name: string;
  icon: LucideIcon;
  regulations: string;
  features: ModuleFeature[];
};

export const fieldStrategicGoal =
  'Extend Soteria Field beyond worker safety into environmental compliance — adding ISO 14001, ISO 50001, EPA, and EPCRA alignment on top of the existing safety foundation (ISO 45001, federal OSHA, Cal/OSHA Title 8). The combination is the full EHS picture in one app.';

export const environmentalModules: EnvironmentalModule[] = [
  {
    id: 'spill',
    name: 'Spill & Release Management',
    icon: Droplets,
    regulations: 'EPA 40 CFR 302 (CERCLA) · EPCRA 304 · Cal/OSHA T8 §5194',
    features: [
      {
        title: 'Chemical spill log',
        detail:
          'Substance, volume released, SDS link, containment actions taken, and responsible party.',
      },
      {
        title: 'Reportable Quantity (RQ) threshold alerts',
        detail:
          'Auto-flag when a release meets or exceeds EPA CERCLA reportable quantities.',
      },
      {
        title: 'EPCRA Section 304 emergency notification log',
        detail:
          'Document notifications made to LEPC and the State Emergency Response Commission.',
      },
      {
        title: 'SPCC inspection records',
        detail:
          'Spill Prevention, Control & Countermeasure plan inspection checklist and log.',
      },
      {
        title: 'Spill response checklist',
        detail: 'Step-by-step containment and cleanup workflow tied to the SDS.',
      },
    ],
  },
  {
    id: 'waste',
    name: 'Waste Management',
    icon: Recycle,
    regulations: 'EPA 40 CFR 262 · Cal/OSHA T8 §5194 · California HSC §25200',
    features: [
      {
        title: 'Hazardous waste accumulation tracker',
        detail:
          'Container-level log with label date, waste-stream type, and accumulation clock (90-day / 180-day / SAA).',
      },
      {
        title: 'Waste stream classification',
        detail:
          'Characterize waste as hazardous, universal, non-hazardous, or California-only hazardous.',
      },
      {
        title: 'Manifest tracking',
        detail:
          'Log EPA Uniform Hazardous Waste Manifests with hauler, disposal facility, and confirmation number.',
      },
      {
        title: 'Land Disposal Restriction (LDR) notices',
        detail: 'Auto-generate LDR paperwork for applicable waste streams.',
      },
      {
        title: 'Satellite Accumulation Area (SAA) inspection log',
        detail: 'Weekly inspection records per EPA / Cal requirements.',
      },
    ],
  },
  {
    id: 'stormwater',
    name: 'Stormwater & Wastewater',
    icon: Waves,
    regulations: 'EPA NPDES · Cal/OSHA T8 · California General Industrial Permit',
    features: [
      {
        title: 'SWPPP inspection log',
        detail:
          'Stormwater Pollution Prevention Plan weekly / monthly / quarterly inspections with photo capture.',
      },
      {
        title: 'Best Management Practice (BMP) checklist',
        detail: 'Verify BMPs are in place before and after storm events.',
      },
      {
        title: 'Discharge monitoring log',
        detail:
          'Record effluent monitoring results with parameter, result, and permit-limit comparison.',
      },
      {
        title: 'Non-compliance event log',
        detail: 'Document exceedances and the corrective actions taken.',
      },
      {
        title: 'Annual report data collector',
        detail: 'Aggregate monitoring data for NPDES annual reporting.',
      },
    ],
  },
  {
    id: 'chemical',
    name: 'Chemical Inventory & Right-to-Know',
    icon: FlaskConical,
    regulations:
      'EPCRA 311 / 312 · Cal/OSHA T8 §5194 (HazCom 2024) · 29 CFR 1910.1200',
    features: [
      {
        title: 'Chemical inventory database',
        detail:
          'Facility-wide SDS library with quantity, location, and storage condition.',
      },
      {
        title: 'Tier II threshold quantity tracker',
        detail: 'Flag chemicals at or above EPCRA Section 312 EHS thresholds.',
      },
      {
        title: 'HazCom 2024 compliance checker',
        detail:
          'Verify SDS format (16-section), GHS labeling, and training records align with the updated standard.',
      },
      {
        title: 'PSM / RMP quantity alerts',
        detail:
          'Flag chemicals approaching OSHA PSM (1910.119) and EPA RMP threshold quantities.',
      },
      {
        title: 'Right-to-Know posting log',
        detail:
          'Document employee access to SDS and community-notification obligations.',
      },
    ],
  },
  {
    id: 'air',
    name: 'Air Quality & Emissions',
    icon: Wind,
    regulations: 'EPA Clean Air Act · Cal/OSHA T8 · CARB regulations',
    features: [
      {
        title: 'Visible emissions observation log',
        detail:
          'Opacity checks with observer name, method (EPA Method 9), and result.',
      },
      {
        title: 'Fugitive emission inspection checklist',
        detail:
          'LDAR (Leak Detection and Repair) walkthrough log for valves, flanges, and connectors.',
      },
      {
        title: 'Greenhouse-gas (GHG) estimator',
        detail:
          'Scope 1 and Scope 2 emissions calculator by fuel type and utility consumption.',
      },
      {
        title: 'Permit condition compliance tracker',
        detail:
          'Log required monitoring, recordkeeping, and reporting tasks per air-permit conditions.',
      },
      {
        title: 'CARB compliance log',
        detail:
          'California Air Resources Board equipment registration and inspection records.',
      },
    ],
  },
  {
    id: 'energy',
    name: 'Energy & Resource Tracking',
    icon: Zap,
    regulations: 'ISO 14001 Clause 6.1 · ISO 50001 alignment',
    features: [
      {
        title: 'Utility consumption log',
        detail:
          'Electricity, natural gas, water, and compressed air by shift, department, or equipment.',
      },
      {
        title: 'Energy baseline dashboard',
        detail: 'Track consumption against baseline and reduction targets.',
      },
      {
        title: 'Carbon reduction goal tracker',
        detail:
          'Set, monitor, and report against Scope 1 / 2 reduction commitments.',
      },
      {
        title: 'Resource efficiency alerts',
        detail:
          'Flag abnormal consumption spikes that may indicate leaks or equipment failure.',
      },
    ],
  },
  {
    id: 'incident',
    name: 'Environmental Incident Management',
    icon: AlertOctagon,
    regulations: 'ISO 14001 Clause 10.2 · ISO 45001 Clause 10.2 · EPA · Cal/OSHA',
    features: [
      {
        title: 'Environmental near-miss log',
        detail:
          'Almost-spills, improper-disposal events, and near-releases — captured before they become reportable.',
      },
      {
        title: 'Environmental nonconformity log',
        detail:
          'Document deviations from environmental procedures or permit conditions.',
      },
      {
        title: 'Root Cause Analysis (RCA) tool',
        detail: '5-Why or fishbone diagram builder tied to each incident.',
      },
      {
        title: 'Regulatory agency notification log',
        detail:
          'Track notifications made to EPA, CalEPA, DTSC, Regional Water Board, and LEPC.',
      },
      {
        title: 'CAPA (Corrective & Preventive Action)',
        detail:
          'Assign, track, and close corrective actions with due dates and owners.',
      },
    ],
  },
  {
    id: 'iso14001',
    name: 'ISO 14001 Alignment Tools',
    icon: Globe2,
    regulations: 'ISO 14001:2018 Clauses 6.1, 7.2, 8.1, 9.1, 10.2',
    features: [
      {
        title: 'Aspect & Impact Register',
        detail:
          'Identify environmental aspects of each operation (normal, abnormal, emergency) with significance rating.',
      },
      {
        title: 'Legal register',
        detail:
          'Track applicable environmental regulations by site, jurisdiction, and update status.',
      },
      {
        title: 'Environmental objectives & targets dashboard',
        detail: 'Set measurable goals and track progress (Clause 6.2).',
      },
      {
        title: 'Interested parties log',
        detail:
          'Document environmental stakeholders and their requirements (Clause 4.2).',
      },
      {
        title: 'Management review export',
        detail:
          'Auto-generate environmental performance summary for ISO 14001 management-review meetings.',
      },
    ],
  },
  {
    id: 'reporting',
    name: 'Environmental Reporting & Analytics',
    icon: BarChart4,
    regulations: 'Cross-cutting — feeds every regulator and the executive team',
    features: [
      {
        title: 'Environmental KPI dashboard',
        detail:
          'Spills, waste generated, energy consumed, emissions — leading and lagging indicators.',
      },
      {
        title: 'Compliance calendar',
        detail:
          'Scheduled inspections, permit renewals, and reporting deadlines with auto-reminders.',
      },
      {
        title: 'Regulatory submittal log',
        detail:
          'Track Tier II, DMR, annual air reports, and biennial hazardous-waste reports.',
      },
      {
        title: 'Audit evidence package',
        detail:
          'One-tap export of all environmental records for a given period and site.',
      },
      {
        title: 'Multi-site comparison',
        detail: 'Benchmark environmental performance across facilities.',
      },
    ],
  },
];

export type PriorityItem = {
  rank: number;
  tool: string;
  regulation: string;
  rationale: string;
};

export const priorityBuildOrder: PriorityItem[] = [
  {
    rank: 1,
    tool: 'Chemical Spill Log',
    regulation: 'CERCLA · EPCRA · HazCom 2024',
    rationale:
      'Immediate liability protection. Pairs directly with the existing SDS module.',
  },
  {
    rank: 2,
    tool: 'Hazardous Waste Accumulation Tracker',
    regulation: '40 CFR 262 · California HSC',
    rationale:
      'Clock violations are the #1 EPA citation at U.S. manufacturers — high-frequency, high-fine.',
  },
  {
    rank: 3,
    tool: 'SWPPP Inspection Log',
    regulation: 'NPDES · Cal General Permit',
    rationale: 'Required at virtually every industrial facility we sell into.',
  },
  {
    rank: 4,
    tool: 'Aspect & Impact Register',
    regulation: 'ISO 14001 Clause 6.1',
    rationale:
      'Unlocks the ISO 14001 certification pitch for international and enterprise clients.',
  },
  {
    rank: 5,
    tool: 'CAPA Module',
    regulation: 'ISO 14001 + 45001 Clause 10.2',
    rationale:
      'Closes the loop on both safety and environmental nonconformities — one workflow, two ISO standards.',
  },
  {
    rank: 6,
    tool: 'Environmental KPI Dashboard',
    regulation: 'ISO 14001 Clause 9.1',
    rationale:
      'Sells the platform at the executive level — leading + lagging indicators in one view.',
  },
];

export const fieldPitch =
  'Soteria Field is the only floor-level platform that closes the loop between worker safety permits, environmental compliance, and ISO certification — OSHA, ISO 45001, and ISO 14001 in one offline-capable iPad app. No paper. No separate systems. One audit trail.';

export const fieldRoadmapMeta = {
  lastUpdated: 'April 27, 2026',
  // Environmental-only standards. Safety standards (ISO 45001, OSHA, Cal/OSHA T8)
  // belong on the LOTO / Field safety spotlight, not the environmental roadmap.
  isoStandards: ['ISO 14001', 'ISO 50001'],
};
