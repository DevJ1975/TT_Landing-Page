import {
  Sparkles,
  Wand2,
  MessagesSquare,
  Languages,
  FileSearch,
  TrendingUp,
  Mic,
  Camera,
  ClipboardEdit,
  AlertOctagon,
  Globe,
  ShieldCheck,
  Eye,
  Brain,
  type LucideIcon,
} from 'lucide-react';

export type AIFeature = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  surface: 'LMS' | 'Field';
};

/* ───────────────── LMS AI features ───────────────── */

export const lmsAIFeatures: AIFeature[] = [
  {
    id: 'ai-authoring',
    name: 'AI Course Authoring',
    icon: Wand2,
    surface: 'LMS',
    description:
      'Turn a single SOP, regulation, or incident report into a full mixed-format course — video script, branching scenario, and quiz — in minutes instead of weeks.',
  },
  {
    id: 'ai-copilot',
    name: 'AI Compliance Copilot',
    icon: MessagesSquare,
    surface: 'LMS',
    description:
      'A natural-language interface for admins. "Who\'s expiring on forklift cert in the next 30 days?" returns an instant, filterable report — no SQL, no support ticket.',
  },
  {
    id: 'ai-audit',
    name: 'AI Audit Assistant',
    icon: FileSearch,
    surface: 'LMS',
    description:
      'Auto-compile inspection packages on demand. "Pull every spill-response training record for our Gulf-Coast sites for OSHA, 2026 YTD" returns one ready-to-submit PDF.',
  },
  {
    id: 'ai-translation',
    name: 'AI Translation',
    icon: Languages,
    surface: 'LMS',
    description:
      'Translate courses into 30+ languages while preserving regulatory terminology and compliance accuracy. Approve the translation once, ship it forever.',
  },
  {
    id: 'ai-risk',
    name: 'Predictive Compliance Risk',
    icon: TrendingUp,
    surface: 'LMS',
    description:
      'Flags workers and sites at risk of falling out of compliance before they do — based on completion patterns, certification windows, and historical incident data.',
  },
];

/* ───────────────── Field AI features ───────────────── */

export const fieldAIFeatures: AIFeature[] = [
  {
    id: 'ai-assistant',
    name: 'AI Field Assistant',
    icon: Mic,
    surface: 'Field',
    description:
      'Voice and chat helper inside the iPad app. "What\'s the next isolation point?" or "Show me the procedure for this valve" — answered hands-free, gloves on.',
  },
  {
    id: 'ai-vision',
    name: 'Vision AI for Evidence',
    icon: Camera,
    surface: 'Field',
    description:
      'Analyzes captured photos — LOTO locks applied, confined-space conditions, PPE worn — and flags issues automatically: wrong lock placement, missing tag, blurred photo.',
  },
  {
    id: 'ai-prefill',
    name: 'Smart Permit Pre-Fill',
    icon: ClipboardEdit,
    surface: 'Field',
    description:
      'Worker describes the task in plain language. AI selects the right permit type and pre-fills 80% of the fields — supervisor only reviews and approves.',
  },
  {
    id: 'ai-simops',
    name: 'AI SIMOPS Conflict Predictor',
    icon: AlertOctagon,
    surface: 'Field',
    description:
      'Predicts permit conflicts before submission, learning from the patterns of past SIMOPS reviews at the facility — flagging risk operators have not codified yet.',
  },
  {
    id: 'ai-translate-live',
    name: 'Real-Time Translation',
    icon: Globe,
    surface: 'Field',
    description:
      'On-floor translation for multilingual crews. Spanish, Portuguese, Tagalog speech becomes English captions for the supervisor — and vice versa — in real time.',
  },
];

/* ───────────────── Cross-cutting AI principles ───────────────── */

export type AIPrinciple = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

export const aiPrinciples: AIPrinciple[] = [
  {
    icon: Brain,
    title: 'Same brain, two surfaces',
    detail:
      'All AI runs on the same models with the same compliance guardrails — whether the request comes from the web admin portal or a worker’s iPad in the field.',
  },
  {
    icon: Eye,
    title: 'Auditable by design',
    detail:
      'Every AI suggestion, summary, or auto-fill is logged with the input, the model output, and the human who approved it. The audit trail covers AI just like every other action.',
  },
  {
    icon: ShieldCheck,
    title: 'Operator-controlled',
    detail:
      'AI suggestions are recommendations, not actions. Humans always approve before anything writes to a permit, a compliance record, or a regulatory submission.',
  },
];

/* ───────────────── Headline copy ───────────────── */

export const aiHeadline = {
  eyebrow: 'AI Across Soteria',
  pretitle: 'AI that earns its place in a compliance product —',
  emphasis: 'auditable, operator-controlled, in both surfaces.',
  description:
    'Compliance leaders are tired of AI demos that wave hands and produce risk. Soteria treats AI the way a good safety officer treats a new tool — useful, logged, supervised. Embedded in both Soteria LMS and Soteria Field. Same models, same guardrails, two surfaces.',
};

export const aiPitch =
  'AI in Soteria does the slow work of compliance — drafting courses, drafting audit packages, suggesting permits, watching for risk — so the humans focus on the judgment calls only humans should make.';

/* ───────────────── Compact chip labels for use in banners ───────────────── */

export const lmsAIChip = { icon: Sparkles, label: 'AI Course Authoring · Copilot · Audit' };
export const fieldAIChip = { icon: Sparkles, label: 'AI Field Assistant · Vision · Translate' };
