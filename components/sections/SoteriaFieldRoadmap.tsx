'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Quote, Sparkles, Target } from 'lucide-react';
import {
  environmentalModules,
  fieldPitch,
  fieldRoadmapMeta,
  fieldStrategicGoal,
  priorityBuildOrder,
} from '@/data/soteria-field-roadmap';

export default function SoteriaFieldRoadmap() {
  const [openId, setOpenId] = useState<string | null>('spill');

  return (
    <div className="mt-12">
      {/* Sub-section eyebrow + heading */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] uppercase tracking-[0.25em]">
            Coming Soon
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
            Soteria Field · Environmental Expansion
          </span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
          From safety permits to{' '}
          <span className="text-gradient">full-stack environmental compliance.</span>
        </h3>
      </div>

      {/* Strategic goal callout */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55 }}
        className="relative glass rounded-2xl p-6 lg:p-7 overflow-hidden mb-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 via-transparent to-accent/8 pointer-events-none" />
        <div className="relative flex items-start gap-4">
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center justify-center">
            <Target className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-300 mb-2">
              Strategic Goal
            </p>
            <p className="text-slate-200 leading-relaxed">{fieldStrategicGoal}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {fieldRoadmapMeta.isoStandards.map((iso) => (
                <span
                  key={iso}
                  className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] uppercase tracking-[0.2em]"
                >
                  {iso}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Module grid */}
      <div className="mb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
          Environmental Modules — 9 Categories
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {environmentalModules.map((m, i) => {
            const Icon = m.icon;
            const isOpen = openId === m.id;
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                className={`glass rounded-xl border border-white/5 transition-all ${
                  isOpen ? 'border-accent/40 ring-1 ring-accent/20' : 'hover:border-accent/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : m.id)}
                  className="w-full text-left p-5 flex items-start gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-lg font-semibold text-white leading-tight">
                      {m.name}
                    </h4>
                    <p className="mt-1 text-[11px] font-mono uppercase tracking-[0.12em] text-slate-500 leading-relaxed">
                      {m.regulations}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 mt-1 text-accent"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="features"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="px-5 pb-5 pt-1 space-y-2.5 border-t border-white/5">
                        {m.features.map((f) => (
                          <li
                            key={f.title}
                            className="flex items-start gap-2.5 pt-2.5 first:pt-3"
                          >
                            <span className="mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-slate-100 leading-snug">
                                {f.title}
                              </p>
                              <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                                {f.detail}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Priority Build Order */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
            Priority Build Order
          </p>
          <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
        </div>
        <div className="space-y-2.5">
          {priorityBuildOrder.map((p, i) => (
            <motion.div
              key={p.rank}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-gold rounded-xl p-4 lg:p-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center"
            >
              <div className="md:col-span-1 flex items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-deep text-navy-900 font-display font-bold text-lg shadow-[0_0_20px_rgba(245,181,68,0.25)]">
                  {p.rank}
                </span>
              </div>
              <div className="md:col-span-4">
                <p className="font-semibold text-white leading-tight">{p.tool}</p>
                <p className="mt-1 text-[11px] font-mono uppercase tracking-[0.15em] text-gold">
                  {p.regulation}
                </p>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm text-slate-300 leading-relaxed">{p.rationale}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* The Pitch */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
        className="relative rounded-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-navy-700/60 to-emerald-500/10" />
        <div className="absolute inset-0 grid-bg-fine opacity-30 pointer-events-none" />
        <div className="relative p-8 lg:p-12 border border-accent/20 rounded-2xl">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              The Pitch
            </span>
          </div>
          <Quote
            className="h-8 w-8 text-accent/40 mb-3"
            strokeWidth={2}
          />
          <p className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-snug max-w-4xl">
            “{fieldPitch}”
          </p>
          <div className="mt-8 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400">
            <span className="h-px w-10 bg-accent/40" />
            <span>One App · Three ISO Standards</span>
            <span className="h-px w-10 bg-accent/40" />
          </div>
          <p className="mt-6 text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase">
            Roadmap last updated · {fieldRoadmapMeta.lastUpdated}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
