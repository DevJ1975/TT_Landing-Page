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
      'AVFoundation player with chapters, captions, and playback-speed control. Fully offline-cached. Auto-pauses if the app is backgrounded.',
  },
  {
    id: 'scenario',
    number: '02',
    name: 'Scenario Interaction',
    icon: GitBranch,
    duration: '3–5 min',
    description:
      'Branching decision cards built natively in SwiftUI with SwiftData state. No SCORM required. “What do you do next?” style interactions designed for field conditions.',
  },
  {
    id: 'quiz',
    number: '03',
    name: 'Knowledge Check',
    icon: CheckSquare,
    duration: '< 2 min',
    description:
      '3–5 questions (multiple choice, true/false, image-based). Immediate feedback. Pass/fail triggers an xAPI completion statement to the LRS.',
  },
];

export type TechItem = {
  title: string;
  detail: string;
};

export const ipadStack: TechItem[] = [
  {
    title: 'SwiftUI + iPadOS 17+',
    detail: 'Native UI built for the iPad form factor and field ergonomics.',
  },
  {
    title: 'SwiftData',
    detail: 'Offline-first local persistence for assignments, progress, and queued statements.',
  },
  {
    title: 'CoreLocation + QR scanner',
    detail: 'Context-aware lesson triggers tied to equipment and zones.',
  },
  {
    title: 'AVFoundation',
    detail: 'Hardware-accelerated video playback with chapter and caption support.',
  },
  {
    title: 'APNs',
    detail: 'Push notifications when supervisors assign or escalate a lesson.',
  },
  {
    title: 'BackgroundTasks',
    detail: 'Local xAPI statement queue flushes to the LRS when connectivity returns.',
  },
  {
    title: 'Sign in with Apple',
    detail: 'Privacy-respecting worker auth that maps to Soteria identities.',
  },
];

export const backendStack: TechItem[] = [
  {
    title: 'Supabase',
    detail:
      'User profiles, role assignments, micro-lesson content library, supervisor assignment engine.',
  },
  {
    title: 'Soteria LRS',
    detail: 'xAPI statement store and compliance reporting for every learner action.',
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
      'Worker auth via Sign in with Apple',
      'Assigned micro-lesson queue',
      'Video + scenario + quiz player',
      'Offline download and sync',
      'xAPI completion statements to Soteria LRS',
      'Push notification on assignment',
    ],
  },
  {
    id: 'phase2',
    label: 'Phase 2',
    title: 'Smart Triggers',
    features: [
      'QR-code scan → lesson launch',
      'Geofence trigger via CoreLocation',
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
  'MDM deployment via Jamf — the enterprise and federal standard.',
  'Federal and DoD environments issue iPhones and iPads as standard devices.',
  'Native frameworks (AVFoundation, CoreLocation, BackgroundTasks) have no Android equivalent that matches in reliability.',
];

export const twoSurfaceNote =
  'Soteria Field is a named surface within the Soteria product suite — not a standalone product. It shares the Supabase backend, user auth, and LRS with the Soteria LMS web platform. Admins author and manage content on the web. Workers learn in the field on iPad. This two-surface model mirrors how enterprise software is sold: Workday, ServiceNow, and every serious B2B platform separates the configuration surface (web) from the execution surface (mobile / field).';

/** Architecture diagram nodes — used to render the inline SVG in the component. */
export const diagramNodes = {
  webAdmin: { icon: Database, label: 'Web Admin Portal', sub: 'Configuration surface' },
  supabase: { icon: Database, label: 'Supabase Backend', sub: 'Auth · Content · Assignments' },
  lrs: { icon: Database, label: 'Soteria LRS', sub: 'xAPI statement store' },
  ipad: { icon: Tablet, label: 'Soteria Field', sub: 'iPad · iPadOS 17+' },
};
