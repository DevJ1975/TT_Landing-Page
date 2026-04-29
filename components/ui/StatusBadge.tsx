'use client';

import { motion } from 'framer-motion';
import type { MilestoneStatus } from '@/data/roadmap';
import { Circle, Loader2, CheckCircle2 } from 'lucide-react';

const config: Record<
  MilestoneStatus,
  { label: string; bg: string; text: string; icon: typeof Circle }
> = {
  planned: {
    label: 'Planned',
    bg: 'bg-slate-500/10 border-slate-500/30',
    text: 'text-slate-300',
    icon: Circle,
  },
  'in-progress': {
    label: 'In Progress',
    bg: 'bg-accent/10 border-accent/40',
    text: 'text-accent',
    icon: Loader2,
  },
  complete: {
    label: 'Complete',
    bg: 'bg-emerald-500/10 border-emerald-500/40',
    text: 'text-emerald-400',
    icon: CheckCircle2,
  },
};

export default function StatusBadge({
  status,
  onClick,
  size = 'md',
}: {
  status: MilestoneStatus;
  onClick?: () => void;
  size?: 'sm' | 'md';
}) {
  const c = config[status];
  const Icon = c.icon;
  const padding = size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-[11px]';

  const Base = onClick ? 'button' : 'span';
  const inProgress = status === 'in-progress';

  return (
    <span className="relative inline-flex">
      {/* Looping breathing aura — only for in-progress badges */}
      {inProgress && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-accent/30 blur-md pointer-events-none"
          animate={{ opacity: [0.25, 0.6, 0.25], scale: [0.95, 1.08, 0.95] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      <Base
        onClick={onClick}
        className={`relative inline-flex items-center gap-1.5 ${padding} rounded-full border font-mono uppercase tracking-[0.16em] ${c.bg} ${c.text} ${
          onClick ? 'cursor-pointer hover:brightness-125 transition' : ''
        }`}
      >
        <Icon
          className={`h-3 w-3 ${inProgress ? 'animate-spin' : ''}`}
          strokeWidth={2.5}
        />
        {c.label}
      </Base>
    </span>
  );
}
