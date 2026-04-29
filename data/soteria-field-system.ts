import {
  User,
  UserCog,
  QrCode,
  Video,
  GitBranch,
  CheckSquare,
  Tablet,
  Database,
  type LucideIcon,
} from 'lucide-react';

export type TriggerMode = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
};

export const triggerModes: TriggerMode[] = [
  {
    id: 'self',
    name: 'Self-Initiated',
    icon: User,
    description:
      'Worker opens the app, browses assigned micro-lessons, pulls content by role and facility.',
  },
  {
    id: 'supervisor',
    name: 'Supervisor-Assigned',
    icon: UserCog,
    description:
      'Supervisor assigns a lesson from the web portal before a high-risk task. Worker receives a push notification.',
  },
  {
    id: 'qr',
    name: 'Location / QR Triggered',
    icon: QrCode,
    description:
      'Worker scans a QR code on equipment or enters a geofenced zone. Soteria Field surfaces the relevant micro-lesson automatically.',
  },
];

export type LearningFormat = {
  id: string;
  number: string;
  name: string;
  icon: LucideIcon;
  duration: string;
  description: string;
};

export const learningFormats: LearningFormat[] = [
  {
    id: 'video',
    number: '01',
    name: 'Short Video Lesson',
    icon: Video,
    duration: '2–4 min',
    description:
      'High-quality video player with chapters, captions, and playback-speed control. Fully offline. Auto-pauses if the worker switches apps so credit only counts when they are actually watching.',
  },
  {
    id: 'scenario',
    number: '02',
    name: 'Scenario Interaction',
    icon: GitBranch,
    duration: '3–5 min',
    description:
      'Branching decision cards built native to the iPad. “What do you do next?” style interactions designed for field conditions — no slow web pages, no clunky course wrappers.',
  },
  {
    id: 'quiz',
    number: '03',
    name: 'Knowledge Check',
    icon: CheckSquare,
    duration: '< 2 min',
    description:
      '3–5 questions (multiple choice, true/false, image-based). Immediate feedback. Pass / fail flows directly into the worker’s compliance record.',
  },
];

export type TechItem = {
  title: string;
  detail: string;
};

export const ipadStack: TechItem[] = [
  {
    title: 'Native iPad Experience',
    detail: 'Built specifically for the iPad form factor and field ergonomics — not a website squeezed onto a tablet.',
  },
  {
    title: 'Offline-First by Design',
    detail: 'Lessons, permits, and progress all stored locally. Works in hangars, plants, basements, and offshore — anywhere with no signal.',
  },
  {
    title: 'Location & QR Awareness',
    detail: 'The right lesson surfaces automatically when a worker scans equipment or enters a designated work zone.',
  },
  {
    title: 'High-Quality Video Playback',
    detail: 'Hardware-accelerated video with chapters and captions, optimized for noisy industrial environments.',
  },
  {
    title: 'Push Notifications',
    detail: 'Supervisors send a lesson directly to a worker’s iPad before a high-risk task — they see it right away.',
  },
  {
    title: 'Automatic Background Sync',
    detail: 'Completions, signatures, and photos sync the moment connectivity returns — no worker action required.',
  },
  {
    title: 'Privacy-First Secure Login',
    detail: 'Frictionless, passwordless worker login backed by Apple’s privacy guarantees.',
  },
];

export const backendStack: TechItem[] = [
  {
    title: 'Secure Cloud Platform',
    detail:
      'User profiles, role assignments, course library, and supervisor assignment engine — running on a federal-cleared cloud.',
  },
  {
    title: 'Compliance Records Engine',
    detail: 'A single, immutable record of every learner action — ready for any auditor in any timezone.',
  },
  {
    title: 'Web Admin Portal',
    detail:
      'Course uploads, user management, assignment creation, reporting dashboards — the configuration surface.',
  },
];

export type BuildPhase = {
  id: string;
  label: string;
  title: string;
  features: string[];
};

export const buildPhases: BuildPhase[] = [
  {
    id: 'phase1',
    label: 'Phase 1',
    title: 'MVP — Field-Ready Core',
    features: [
      'Privacy-first secure worker login',
      'Assigned micro-lesson queue',
      'Video + scenario + quiz player',
      'Offline download and sync',
      'Completions written to the compliance record',
      'Push notifications on supervisor assignment',
    ],
  },
  {
    id: 'phase2',
    label: 'Phase 2',
    title: 'Smart Triggers',
    features: [
      'QR-code scan → lesson launch',
      'Location-aware lesson triggers',
      'Self-browse content library by role',
      'Completion badges and streaks',
      'Supervisor mobile view',
      'LOTO photo capture and attachment',
    ],
  },
];

export type FieldScenario = {
  id: string;
  vertical: string;
  scenario: string;
};

export const fieldScenarios: FieldScenario[] = [
  {
    id: 'mro',
    vertical: 'Aviation / Aerospace MRO',
    scenario:
      'Technician pulls up the LOTO procedure on iPad at the aircraft. Completes training, signs off, photo captured — without leaving the hangar.',
  },
  {
    id: 'mfg',
    vertical: 'Manufacturing & Food Production',
    scenario:
      'Line worker completes machine-specific safety training on the production floor before first shift on new equipment. No kiosk required.',
  },
  {
    id: 'distribution',
    vertical: 'Logistics & Distribution',
    scenario:
      'Forklift operator recertification happens in the warehouse, at their forklift, in 12 minutes. Completion syncs when they hit Wi-Fi at the dock door.',
  },
];

export const fieldStrategicQuote =
  'Trainovate is the only LMS built for where industrial workers actually are — on the floor, at the machine, in the field. Not at a desk.';

export const ipadRationale: string[] = [
  'Manufacturing, aviation MRO, and distribution clients standardize on managed iPad fleets.',
  'iPad fleets are governed by the same enterprise and federal device-management standards already approved for sensitive work.',
  'Federal and DoD environments issue iPhones and iPads as standard devices.',
  'Apple’s built-in capabilities for video, location, and background sync run more reliably than the alternatives — fewer support calls, fewer missed completions.',
];

export const twoSurfaceNote =
  'Soteria Field is a named surface within the Soteria product suite — not a standalone product. It shares the same secure cloud platform, login, and compliance record with the Soteria LMS web platform. Admins author and manage content on the web. Workers learn and permit in the field on iPad. This two-surface model mirrors how enterprise software is sold: Workday, ServiceNow, and every serious B2B platform separate the configuration surface (web) from the execution surface (mobile / field).';

/** Architecture diagram nodes — used to render the inline SVG in the component. */
export const diagramNodes = {
  webAdmin: { icon: Database, label: 'Web Admin Portal', sub: 'Configuration surface' },
  supabase: {
    icon: Database,
    label: 'Secure Cloud Platform',
    sub: 'Login · Content · Assignments',
  },
  lrs: {
    icon: Database,
    label: 'Compliance Records Engine',
    sub: 'Audit-ready learner record',
  },
  ipad: { icon: Tablet, label: 'Soteria Field', sub: 'iPad · Offline-First' },
};
