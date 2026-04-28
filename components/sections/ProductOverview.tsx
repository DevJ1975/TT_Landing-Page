'use client';

import { motion } from 'framer-motion';
import { Lock, ScanLine, ClipboardCheck, Smartphone, ShieldAlert } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { featurePillars, techStack } from '@/data/features';
import { backdrops } from '@/data/backgrounds';
import { useState } from 'react';

const fieldCapabilities = [
  {
    icon: Lock,
    title: 'Energy-Source Isolation Workflow',
    detail:
      'Equipment-specific LOTO procedures, authorized-employee verification, and step-by-step lock / tag application captured on-device.',
  },
  {
    icon: ScanLine,
    title: 'QR + Photo Verification',
    detail:
      'Scan asset QR codes to launch the right procedure. Photo capture at each isolation point creates an immutable evidence trail.',
  },
  {
    icon: ClipboardCheck,
    title: 'Authorized / Affected Sign-Off',
    detail:
      'Digital signatures from authorized employees, affected employees, and supervisors — with role-aware enforcement of 29 CFR 1910.147.',
  },
  {
    icon: ShieldAlert,
    title: 'Group LOTO & Shift Handoff',
    detail:
      'Group lockbox tracking, multi-employee energy-control coordination, and shift-change handoff with primary-authorized-employee transfer.',
  },
];

export default function ProductOverview() {
  const [hoverId, setHoverId] = useState<string | null>(null);

  return (
    <SectionWrapper
      id="product"
      number="02"
      eyebrow="What is Soteria?"
      title={
        <>
          A workforce learning OS — from{' '}
          <span className="text-gradient">SCORM player to FedRAMP boundary,</span> in one
          codebase.
        </>
      }
      description="Six platform pillars plus Soteria Field — a productized Lockout/Tagout (LOTO) module that takes the platform onto the production floor. Hover any pillar card to expand its detail."
      backdrop={backdrops.product}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featurePillars.map((p, i) => {
          const Icon = p.icon;
          const isGold = p.accent === 'gold';
          const isHover = hoverId === p.id;
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onMouseEnter={() => setHoverId(p.id)}
              onMouseLeave={() => setHoverId(null)}
              onFocus={() => setHoverId(p.id)}
              onBlur={() => setHoverId(null)}
              tabIndex={0}
              className={`group relative glass rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                isGold ? 'hover:border-gold/40' : 'hover:border-accent/40'
              } ${isHover ? 'lg:scale-[1.02]' : ''}`}
            >
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                  isGold
                    ? 'bg-gradient-to-br from-gold/5 to-transparent'
                    : 'bg-gradient-to-br from-accent/8 to-transparent'
                }`}
              />
              <div className="relative">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${
                    isGold
                      ? 'bg-gold/10 border border-gold/30 text-gold'
                      : 'bg-accent/10 border border-accent/30 text-accent'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2 leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-400">{p.short}</p>

                <motion.div
                  initial={false}
                  animate={{
                    height: isHover ? 'auto' : 0,
                    opacity: isHover ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-white/5 text-sm text-slate-300 leading-relaxed">
                    {p.detail}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Soteria Field — LOTO module spotlight */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 relative glass rounded-2xl overflow-hidden isolate"
      >
        {/* Industrial photo behind the LOTO module callout */}
        <img
          src={backdrops.field}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover -z-10"
          style={{ opacity: 0.4, filter: 'grayscale(1) contrast(1.05) brightness(0.85)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/85 via-navy-800/70 to-navy-900/85 pointer-events-none" />
        <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 p-7 lg:p-10">
          {/* Left: identity */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] uppercase tracking-[0.2em]">
                Featured Module
              </span>
              <span className="px-2 py-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-300 font-mono text-[10px] uppercase tracking-[0.2em]">
                29 CFR 1910.147
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-deep text-navy-900 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.35)]">
                <Lock className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-white leading-none">
                  Soteria <span className="text-gradient">Field</span>
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mt-1.5">
                  LOTO · Lockout / Tagout
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mt-5">
              The native field companion that takes Soteria from the classroom to the production
              floor. Built around{' '}
              <span className="text-white font-medium">OSHA Lockout/Tagout (LOTO)</span> — the
              single highest-cited energy-control standard in U.S. industry — and extensible to
              every other field-level procedure.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-200">
                <Smartphone className="h-3 w-3 text-accent" /> iPad &amp; iPhone
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-200">
                Offline-First
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-200">
                Audit-Ready Evidence
              </span>
            </div>
          </div>

          {/* Right: capability grid */}
          <div className="lg:col-span-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              Field Capabilities
            </span>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fieldCapabilities.map(({ icon: Icon, title, detail }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-xl bg-white/[0.02] border border-white/5 p-4 hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white leading-snug">{title}</h4>
                      <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                        {detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tech stack badges */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 flex flex-col items-center"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-4">
          Built On
        </span>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {techStack.map((t) => (
            <span
              key={t}
              className="px-4 py-2 rounded-full glass text-sm font-medium text-slate-200 hover:border-accent/40 hover:text-accent transition-all"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
