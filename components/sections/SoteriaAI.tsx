'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeftRight,
  Monitor,
  Quote,
  Sparkles,
  Tablet,
} from 'lucide-react';
import {
  aiHeadline,
  aiPitch,
  aiPrinciples,
  fieldAIFeatures,
  lmsAIFeatures,
} from '@/data/soteria-ai';

export default function SoteriaAI() {
  return (
    <div className="mt-20 mb-16 relative isolate">
      {/* Section background flourish */}
      <div className="absolute inset-x-0 -top-12 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Eyebrow + heading */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] uppercase tracking-[0.25em]">
            <Sparkles className="h-3 w-3" />
            {aiHeadline.eyebrow}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
            One brain · two surfaces
          </span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight max-w-4xl">
          {aiHeadline.pretitle}{' '}
          <span className="text-gradient">{aiHeadline.emphasis}</span>
        </h3>
        <p className="mt-5 max-w-3xl text-slate-300 leading-relaxed">
          {aiHeadline.description}
        </p>
      </div>

      {/* Two-surface AI showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5 relative">
        <SurfaceColumn
          surface="lms"
          icon={Monitor}
          eyebrow="Soteria LMS · Web"
          title="AI for the configuration surface"
          tagline="Authoring, copiloting, auditing — at admin speed."
          features={lmsAIFeatures}
        />

        {/* Connector arrow (desktop only) */}
        <div
          aria-hidden="true"
          className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-navy-700 border border-accent/40 shadow-[0_0_20px_rgba(56,189,248,0.4)]">
            <ArrowLeftRight className="h-5 w-5 text-accent" />
          </div>
        </div>

        <SurfaceColumn
          surface="field"
          icon={Tablet}
          eyebrow="Soteria Field · iPad"
          title="AI for the execution surface"
          tagline="Hands-free, eyes-on-the-job, gloves stay on."
          features={fieldAIFeatures}
        />
      </div>

      {/* Mobile connector */}
      <div className="lg:hidden flex items-center justify-center my-3 text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em]">
        <span className="h-px w-12 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <span className="mx-3 text-accent">↓ Same brain, two surfaces ↓</span>
        <span className="h-px w-12 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>

      {/* Principles row */}
      <div className="mt-10">
        <div className="flex items-center gap-3 mb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            How AI Earns Its Place in a Compliance Product
          </p>
          <span className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiPrinciples.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="glass rounded-xl p-5 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Principle {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="font-display text-lg font-semibold text-white leading-tight mb-2">
                  {p.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">{p.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Closing pitch */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="mt-10 relative rounded-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-navy-700/60 to-accent-deep/15" />
        <div className="absolute inset-0 grid-bg-fine opacity-30 pointer-events-none" />
        <div className="relative p-8 lg:p-10 border border-accent/20 rounded-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              The AI Pitch
            </span>
          </div>
          <Quote className="h-7 w-7 text-accent/40 mb-3" strokeWidth={2} />
          <p className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-snug max-w-4xl">
            “{aiPitch}”
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* ──────────────── Surface Column ──────────────── */

function SurfaceColumn({
  surface,
  icon: SurfaceIcon,
  eyebrow,
  title,
  tagline,
  features,
}: {
  surface: 'lms' | 'field';
  icon: typeof Monitor;
  eyebrow: string;
  title: string;
  tagline: string;
  features: typeof lmsAIFeatures;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55, delay: surface === 'field' ? 0.08 : 0 }}
      className="relative glass rounded-2xl p-6 lg:p-7 overflow-hidden"
    >
      <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent-deep text-navy-900 flex items-center justify-center shadow-[0_0_22px_rgba(56,189,248,0.3)]">
            <SurfaceIcon className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              {eyebrow}
            </p>
            <h4 className="font-display text-xl lg:text-2xl font-bold text-white leading-tight">
              {title}
            </h4>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-5">{tagline}</p>

        <ul className="space-y-2.5">
          {features.map((f, i) => {
            const FIcon = f.icon;
            return (
              <motion.li
                key={f.id}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: 0.1 + i * 0.04 }}
                className="rounded-lg bg-white/[0.02] border border-white/5 p-3.5 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                    <FIcon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white leading-snug">{f.name}</p>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">
                      {f.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}
