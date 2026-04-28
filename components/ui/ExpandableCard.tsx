'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ReactNode, useState } from 'react';

type Props = {
  title: string;
  subtitle?: string;
  badge?: string;
  variant?: 'blue' | 'gold';
  defaultOpen?: boolean;
  children: ReactNode;
};

export default function ExpandableCard({
  title,
  subtitle,
  badge,
  variant = 'blue',
  defaultOpen = false,
  children,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  const accentText = variant === 'gold' ? 'text-gold' : 'text-accent';
  const accentBorder =
    variant === 'gold' ? 'hover:border-gold/40' : 'hover:border-accent/40';
  const accentRing =
    variant === 'gold' ? 'ring-gold/30' : 'ring-accent/30';
  const badgeBg =
    variant === 'gold'
      ? 'bg-gold/10 text-gold border-gold/20'
      : 'bg-accent/10 text-accent border-accent/20';

  return (
    <div
      className={`group glass rounded-xl border border-white/5 transition-all duration-300 ${accentBorder} ${
        open ? `ring-1 ${accentRing}` : ''
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left p-6 flex items-start justify-between gap-4"
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          {badge && (
            <span
              className={`inline-block mb-3 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.2em] rounded border ${badgeBg}`}
            >
              {badge}
            </span>
          )}
          <h3 className="font-display text-xl md:text-2xl font-semibold text-white leading-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 mt-1 ${accentText}`}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 text-slate-300 leading-relaxed border-t border-white/5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
