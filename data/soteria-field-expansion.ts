import {
  ClipboardList,
  GraduationCap,
  Crosshair,
  Siren,
  Workflow,
  LineChart,
  type LucideIcon,
} from 'lucide-react';

export type ExpansionTool = {
  title: string;
  detail: string;
};

export type ExpansionCategory = {
  id: string;
  name: string;
  icon: LucideIcon;
  tools: ExpansionTool[];
};

/**
 * Expansion tools beyond the core permit modules — candidates for
 * Q3 2026 and beyond. Sourced from the Soteria Field expansion brief.
 */
export const expansionCategories: ExpansionCategory[] = [
  {
    id: 'inspection',
    name: 'Inspection & Audit Tools',
    icon: ClipboardList,
    tools: [
      {
        title: 'Pre-shift safety inspections',
        detail: 'Digital checklist before every shift starts.',
      },
      {
        title: 'Equipment inspection checklists',
        detail: 'Forklifts, aerial lifts, fire extinguishers.',
      },
      {
        title: 'Walking audits with photo capture',
        detail: 'Field-level audit with timestamped photos.',
      },
      {
        title: 'Near-miss reporting',
        detail: 'Log close calls before they become incidents.',
      },
      {
        title: 'Corrective action tracking',
        detail: 'Assign, track, and close findings.',
      },
    ],
  },
  {
    id: 'training',
    name: 'Training & Certification',
    icon: GraduationCap,
    tools: [
      {
        title: 'Worker certification tracker',
        detail: 'Who is qualified for what permit type.',
      },
      {
        title: 'Toolbox talk log with digital sign-off',
        detail: 'Document daily safety talks.',
      },
      {
        title: 'OSHA 300 / 300A recordkeeping',
        detail: 'Integrated injury and illness log.',
      },
      {
        title: 'Competent person designation log',
        detail: 'Track who holds competent-person status by regulation.',
      },
    ],
  },
  {
    id: 'hazard',
    name: 'Hazard Management',
    icon: Crosshair,
    tools: [
      {
        title: 'Job Hazard Analysis (JHA) builder',
        detail: 'Step-by-step hazard identification and controls.',
      },
      {
        title: 'SDS / chemical inventory lookup',
        detail: 'Safety Data Sheet access by location.',
      },
      {
        title: 'PPE assignment by job type',
        detail: 'Match PPE requirements to task or permit type.',
      },
      {
        title: 'Hierarchy of controls documentation',
        detail: 'Tie controls directly to identified hazards.',
      },
    ],
  },
  {
    id: 'emergency',
    name: 'Emergency Preparedness',
    icon: Siren,
    tools: [
      {
        title: 'Emergency action plan viewer',
        detail: 'Site-specific EAP accessible offline.',
      },
      {
        title: 'Evacuation roster + headcount',
        detail: 'Digital muster with accountability tracking.',
      },
      {
        title: 'Incident reporting',
        detail: 'First aid, near miss, and recordable incident forms.',
      },
      {
        title: 'Emergency contact directory by site',
        detail: 'Role-based contacts per facility.',
      },
    ],
  },
  {
    id: 'operations',
    name: 'Operations & Workflow',
    icon: Workflow,
    tools: [
      {
        title: 'Contractor safety orientation log',
        detail: 'Track contractor onboarding and acknowledgments.',
      },
      {
        title: 'Visitor sign-in with safety acknowledgment',
        detail: 'Digital visitor log with hazard disclosure.',
      },
      {
        title: 'Shift handoff notes',
        detail: 'Pass open permits and in-progress work between shifts.',
      },
      {
        title: 'Equipment out-of-service tagging (digital red tag)',
        detail: 'Replace physical red tags; pairs directly with LOTO.',
      },
    ],
  },
  {
    id: 'reporting',
    name: 'Reporting & Analytics',
    icon: LineChart,
    tools: [
      {
        title: 'Permit volume by type and location',
        detail: 'Usage trends across modules.',
      },
      {
        title: 'Open vs. closed findings dashboard',
        detail: 'Real-time corrective-action status.',
      },
      {
        title: 'Compliance scorecard by department',
        detail: 'Site or department-level compliance health.',
      },
      {
        title: 'Export to CSV / PDF for auditors',
        detail: 'One-tap audit-package generation.',
      },
    ],
  },
];

export type ExpansionPriority = {
  tool: string;
  regulation: string;
  impact: string;
  flagship?: boolean;
};

export const expansionPriorityTable: ExpansionPriority[] = [
  {
    tool: 'Digital Red Tag',
    regulation: '29 CFR 1910.147',
    impact: 'Manufacturing · MRO · Industrial',
    flagship: true,
  },
  {
    tool: 'JHA Builder',
    regulation: '29 CFR 1910.132',
    impact: 'All verticals',
    flagship: true,
  },
  {
    tool: 'Worker Cert Tracker',
    regulation: 'CFR §(g) training records',
    impact: 'Enterprise + GovCon',
  },
  {
    tool: 'OSHA 300 / 300A',
    regulation: '29 CFR 1904',
    impact: 'All verticals',
  },
  {
    tool: 'Corrective Action Tracking',
    regulation: 'General Duty Clause',
    impact: 'Enterprise',
  },
];

export const expansionPriorityCallout =
  'Digital Red Tag and JHA Builder are the highest-priority additions — they pair naturally with LOTO and resonate immediately with any enterprise EHS client. Both directly address OSHA citation language and expand Soteria Field’s value without requiring a new permit engine.';

export const expansionTimeframe = 'Q3 2026 and Beyond';
