'use client';

import { motion } from 'framer-motion';

type Props = {
  value: number; // 0-100
  variant?: 'blue' | 'gold';
  label?: string;
};

export default function ProgressBar({ value, variant = 'blue', label }: Props) {
  const clamped = Math.max(0, Math.min(100, value));
  const fill =
    variant === 'gold'
      ? 'bg-gradient-to-r from-gold-deep via-gold to-gold-light'
      : 'bg-gradient-to-r from-accent-deep via-accent to-accent-glow';

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-xs font-mono uppercase tracking-[0.18em] text-slate-400 mb-2">
          <span>{label}</span>
          <span className="tabular-nums">{Math.round(clamped)}%</span>
        </div>
      )}
      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${fill}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${clamped}%` }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
