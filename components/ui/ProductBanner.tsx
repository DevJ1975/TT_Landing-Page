'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

type Props = {
  /** Display number — "01" / "02" etc. */
  number: string;
  /** Surface label — e.g. "Surface 01 · Web". */
  surface: string;
  /** Product name — e.g. "Soteria LMS". */
  product: string;
  /** Tagline beneath the product name. */
  tagline: string;
  /** Long description below tagline. */
  description: string;
  /** Capability chips shown in the right rail. */
  chips: { icon: LucideIcon; label: string }[];
  /** Visual accent. */
  variant?: 'blue' | 'gold';
};

/**
 * Product-level divider banner used inside section 02 to draw a hard line
 * between Soteria LMS (configuration / web) and Soteria Field (execution /
 * iPad). Without it, the LMS pillars and Field modules read as one big mush.
 */
export default function ProductBanner({
  number,
  surface,
  product,
  tagline,
  description,
  chips,
  variant = 'blue',
}: Props) {
  const accent = variant === 'gold' ? 'text-gold' : 'text-accent';
  const accentBg = variant === 'gold' ? 'bg-gold/10' : 'bg-accent/10';
  const accentBorder = variant === 'gold' ? 'border-gold/40' : 'border-accent/40';
  const accentRail =
    variant === 'gold'
      ? 'from-gold/60 via-gold/30 to-transparent'
      : 'from-accent/60 via-accent/30 to-transparent';
  const numberGradient =
    variant === 'gold'
      ? 'bg-gradient-to-br from-gold to-gold-deep text-navy-900'
      : 'bg-gradient-to-br from-accent to-accent-deep text-navy-900';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative isolate"
    >
      {/* Big top rail */}
      <div className={`h-[2px] w-full bg-gradient-to-r ${accentRail}`} />

      <div className="relative glass rounded-b-2xl px-6 lg:px-8 py-7 lg:py-9 overflow-hidden">
        <div
          className={`absolute -top-12 -right-12 h-56 w-56 rounded-full ${accentBg} blur-3xl pointer-events-none`}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* LEFT — number + identity */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span
                className={`flex items-center justify-center w-14 h-14 rounded-2xl ${numberGradient} font-display font-bold text-2xl shadow-[0_0_25px_rgba(56,189,248,0.25)]`}
              >
                {number}
              </span>
              <div>
                <p
                  className={`font-mono text-[10px] uppercase tracking-[0.3em] ${accent} mb-1`}
                >
                  {surface}
                </p>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-white leading-none tracking-tight">
                  {product}
                </h3>
              </div>
            </div>
            <p className="mt-5 text-lg text-slate-200 leading-snug font-medium">{tagline}</p>
          </div>

          {/* MIDDLE — description */}
          <div className="lg:col-span-4">
            <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
          </div>

          {/* RIGHT — capability chips */}
          <div className="lg:col-span-3">
            <p className={`font-mono text-[10px] uppercase tracking-[0.25em] ${accent} mb-3`}>
              Inside
            </p>
            <ul className="space-y-1.5">
              {chips.map((c) => {
                const Icon = c.icon;
                return (
                  <li
                    key={c.label}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/[0.03] border border-white/5 ${accentBorder.replace('border-', 'hover:border-')} transition-colors`}
                  >
                    <Icon className={`h-3.5 w-3.5 ${accent} flex-shrink-0`} />
                    <span className="text-xs text-slate-200 leading-snug">{c.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
