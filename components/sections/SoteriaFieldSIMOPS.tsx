'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertOctagon,
  Anchor,
  Check,
  CircleSlash,
  Quote,
  Skull,
  Sparkles,
  X,
} from 'lucide-react';
import {
  conflictMatrix,
  type ConflictState,
  piperAlphaCallout,
  simopsCompetition,
  simopsPermitTypes,
  simopsPhases,
  simopsPitch,
  simopsRegulatoryFramework,
  simopsScenarios,
  simopsTargetClients,
  simopsWorkflow,
} from '@/data/soteria-field-simops';
import { industryPhotos } from '@/data/industry-photos';
import IndustrialPhoto from '@/components/ui/IndustrialPhoto';

const stateLegend: Record<
  ConflictState,
  { label: string; bg: string; text: string; ring: string; icon: React.ReactNode }
> = {
  incompatible: {
    label: 'Blocked',
    bg: 'bg-rose-500/15',
    text: 'text-rose-300',
    ring: 'ring-rose-500/40',
    icon: <X className="h-3 w-3" strokeWidth={3} />,
  },
  review: {
    label: 'SIMOPS Review',
    bg: 'bg-gold/15',
    text: 'text-gold',
    ring: 'ring-gold/40',
    icon: <AlertOctagon className="h-3 w-3" strokeWidth={2.5} />,
  },
  clear: {
    label: 'Clear',
    bg: 'bg-emerald-500/12',
    text: 'text-emerald-300',
    ring: 'ring-emerald-500/30',
    icon: <Check className="h-3 w-3" strokeWidth={3} />,
  },
  self: {
    label: 'Same type',
    bg: 'bg-white/[0.03]',
    text: 'text-slate-500',
    ring: 'ring-white/5',
    icon: <CircleSlash className="h-3 w-3" />,
  },
};

export default function SoteriaFieldSIMOPS() {
  return (
    <div className="mt-16">
      {/* Eyebrow + Title */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-300 font-mono text-[10px] uppercase tracking-[0.25em]">
            Flagship Differentiator
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
            Soteria Field · SIMOPS Permit Module
          </span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
          Simultaneous Operations —{' '}
          <span className="text-gradient">the permit problem nobody else solved.</span>
        </h3>

        {/* Regulatory + target chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 self-center mr-1">
            Regulatory:
          </span>
          {simopsRegulatoryFramework.map((r) => (
            <span
              key={r}
              className="px-2.5 py-1 rounded-full bg-rose-500/8 border border-rose-500/25 text-rose-200 font-mono text-[10px] uppercase tracking-[0.18em]"
            >
              {r}
            </span>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 self-center mr-1">
            Target Clients:
          </span>
          {simopsTargetClients.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 text-[11px]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Why SIMOPS exists — Piper Alpha + Scenarios */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-12">
        {/* Piper Alpha */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-2 relative glass rounded-2xl p-7 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/40 text-rose-300 flex items-center justify-center">
                <Skull className="h-5 w-5" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-rose-300">
                Why SIMOPS Exists
              </span>
            </div>
            <h4 className="font-display text-2xl font-bold text-white leading-tight mb-3">
              Piper Alpha · {piperAlphaCallout.year}
            </h4>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-display text-5xl font-bold text-rose-300 tabular-nums">
                {piperAlphaCallout.fatalities}
              </span>
              <span className="text-sm text-slate-300">fatalities</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              <span className="text-white font-medium">Root cause:</span>{' '}
              {piperAlphaCallout.rootCause}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mt-4">
              SIMOPS is the single most complex permit-coordination challenge in industrial
              safety. No current mobile platform handles it properly. Soteria Field can own this
              space.
            </p>
          </div>
        </motion.div>

        {/* Scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="lg:col-span-3 glass rounded-2xl p-7"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            What SIMOPS Covers — 8 Common Scenarios
          </span>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {simopsScenarios.map((s) => (
              <div
                key={s.id}
                className="rounded-lg bg-white/[0.02] border border-white/5 px-3.5 py-3"
              >
                <p className="text-sm font-semibold text-slate-100 leading-snug">{s.name}</p>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">{s.example}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Where SIMOPS lives — color photo strip */}
      <div className="mb-12">
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-rose-300 mb-5">
          Where SIMOPS Lives — Real-World Operating Environments
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <IndustrialPhoto
            photo={industryPhotos.offshore}
            aspect="aspect-[16/9]"
            tint="rose"
            delay={0}
          />
          <IndustrialPhoto
            photo={industryPhotos.refinery}
            aspect="aspect-[16/9]"
            tint="rose"
            delay={0.08}
          />
        </div>
      </div>

      {/* Incompatibility Matrix — the heart of the module */}
      <ConflictMatrixVisual />

      {/* 6-step workflow */}
      <div className="mt-12 mb-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-5">
          SIMOPS Permit Workflow — 6 Steps
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {simopsWorkflow.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative glass rounded-xl p-5 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent/10 border border-accent/40 text-accent font-display font-bold">
                  {s.step}
                </span>
                <h4 className="font-display text-base font-semibold text-white leading-tight">
                  {s.title}
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{s.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Build phases timeline */}
      <div className="mb-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-5">
          Build Phases — Q3 2026 → Q2 2027
        </p>
        <ol className="relative border-l border-gold/20 ml-3 space-y-4">
          {simopsPhases.map((p, i) => (
            <motion.li
              key={p.number}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="ml-6 relative"
            >
              <span className="absolute -left-[34px] top-0 flex items-center justify-center w-7 h-7 rounded-full bg-navy-700 border border-gold/40 text-gold font-mono text-[11px]">
                {p.number}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <p className="text-slate-100 font-medium leading-snug">{p.title}</p>
                <span className="px-2.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold font-mono text-[10px] uppercase tracking-[0.2em] self-start sm:self-auto">
                  {p.timeline}
                </span>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* Competitive landscape */}
      <div className="mb-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-5">
          Competitive Landscape — SIMOPS Capability
        </p>
        <div className="glass rounded-xl overflow-hidden">
          <div className="hidden md:grid grid-cols-12 px-5 py-3 border-b border-white/5 bg-white/[0.03]">
            <span className="col-span-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Platform
            </span>
            <span className="col-span-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              SIMOPS Capable
            </span>
            <span className="col-span-5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Notes
            </span>
          </div>
          <ul className="divide-y divide-white/5">
            {simopsCompetition.map((c, i) => (
              <motion.li
                key={c.name}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-5 py-4 ${
                  c.isUs ? 'bg-accent/[0.05]' : ''
                }`}
              >
                <div className="md:col-span-4 flex items-center gap-2">
                  <span
                    className={`font-semibold ${c.isUs ? 'text-white' : 'text-slate-100'}`}
                  >
                    {c.name}
                  </span>
                  {c.isUs && (
                    <span className="px-1.5 py-0.5 rounded bg-accent/15 border border-accent/40 text-accent font-mono text-[9px] uppercase tracking-[0.18em]">
                      Us
                    </span>
                  )}
                </div>
                <div className="md:col-span-3">
                  <CapabilityBadge state={c.capable} />
                </div>
                <div className="md:col-span-5">
                  <span className="text-sm text-slate-400">{c.note}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* The SIMOPS Pitch */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
        className="relative rounded-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/15 via-navy-700/60 to-accent/15" />
        <div className="absolute inset-0 grid-bg-fine opacity-30 pointer-events-none" />
        <div className="relative p-8 lg:p-12 border border-rose-500/20 rounded-2xl">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="h-4 w-4 text-rose-300" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-rose-300">
              The SIMOPS Pitch
            </span>
          </div>
          <Quote className="h-8 w-8 text-rose-300/40 mb-3" strokeWidth={2} />
          <p className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-snug max-w-4xl">
            “{simopsPitch}”
          </p>
          <div className="mt-8 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400">
            <Anchor className="h-3 w-3 text-rose-300" />
            <span>Net-new build · No competitor has this</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ──────────────── Conflict Matrix Visual ──────────────── */

function ConflictMatrixVisual() {
  const [hoverCell, setHoverCell] = useState<{ row: string; col: string } | null>(null);
  const types = simopsPermitTypes;

  const hoverInfo = useMemo(() => {
    if (!hoverCell) return null;
    const row = types.find((t) => t.id === hoverCell.row);
    const col = types.find((t) => t.id === hoverCell.col);
    if (!row || !col) return null;
    const state = conflictMatrix[row.id]?.[col.id] ?? 'clear';
    return { row, col, state };
  }, [hoverCell, types]);

  return (
    <div>
      <div className="flex flex-wrap items-baseline gap-3 mb-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-rose-300">
          The Heart of the Module — Incompatibility Matrix
        </p>
        <span className="text-xs text-slate-400">
          Row permit running · Column permit submitted
        </span>
      </div>

      <div className="relative glass rounded-2xl p-5 lg:p-7 overflow-x-auto overflow-y-hidden">
        {/* Looping scan beam — reinforces "the system is continuously checking" */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 h-12 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(56,189,248,0.18) 50%, transparent)',
          }}
          animate={{ y: ['-20%', '110%'] }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 1.6,
          }}
        />
        <div className="min-w-[640px]">
          {/* Column header */}
          <div
            className="grid gap-1.5"
            style={{
              gridTemplateColumns: `170px repeat(${types.length}, minmax(60px, 1fr))`,
            }}
          >
            <div className="flex items-end justify-end pr-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">
                Active ↓ vs Submitted →
              </span>
            </div>
            {types.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.id}
                  className="flex flex-col items-center justify-end gap-1 pb-2 text-center"
                  title={t.label}
                >
                  <Icon className="h-3.5 w-3.5 text-slate-400" />
                  <span className="font-mono text-[10px] tracking-[0.05em] text-slate-300">
                    {t.short}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Rows */}
          <div className="space-y-1.5 mt-1">
            {types.map((row) => {
              const RowIcon = row.icon;
              return (
                <div
                  key={row.id}
                  className="grid gap-1.5"
                  style={{
                    gridTemplateColumns: `170px repeat(${types.length}, minmax(60px, 1fr))`,
                  }}
                >
                  <div className="flex items-center gap-2 pr-2">
                    <RowIcon className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
                    <span className="text-xs font-medium text-slate-200 truncate">
                      {row.label}
                    </span>
                  </div>
                  {types.map((col) => {
                    const isSelf = row.id === col.id;
                    const state: ConflictState = isSelf
                      ? 'self'
                      : conflictMatrix[row.id]?.[col.id] ?? 'clear';
                    const cfg = stateLegend[state];
                    const active =
                      hoverCell?.row === row.id && hoverCell?.col === col.id;
                    return (
                      <button
                        key={col.id}
                        type="button"
                        onMouseEnter={() => setHoverCell({ row: row.id, col: col.id })}
                        onMouseLeave={() => setHoverCell(null)}
                        onFocus={() => setHoverCell({ row: row.id, col: col.id })}
                        onBlur={() => setHoverCell(null)}
                        className={`group h-9 rounded-md flex items-center justify-center transition-all ${cfg.bg} ${cfg.text} ${
                          active ? `ring-2 ${cfg.ring}` : 'ring-1 ring-white/5'
                        }`}
                        aria-label={`${row.label} active vs ${col.label} submitted: ${cfg.label}`}
                      >
                        {cfg.icon}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Legend + hover detail */}
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Legend
            </span>
            <span className="flex items-center gap-1.5 text-xs">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-rose-500/15 text-rose-300 ring-1 ring-rose-500/40">
                <X className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="text-slate-300">Blocked</span>
            </span>
            <span className="flex items-center gap-1.5 text-xs">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-gold/15 text-gold ring-1 ring-gold/40">
                <AlertOctagon className="h-3 w-3" strokeWidth={2.5} />
              </span>
              <span className="text-slate-300">SIMOPS Review</span>
            </span>
            <span className="flex items-center gap-1.5 text-xs">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-emerald-500/12 text-emerald-300 ring-1 ring-emerald-500/30">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="text-slate-300">Clear</span>
            </span>

            <span className="ml-auto text-xs text-slate-400 max-w-md text-right">
              {hoverInfo
                ? `${hoverInfo.row.label} active · ${hoverInfo.col.label} submitted → ${stateLegend[hoverInfo.state].label}`
                : 'Hover any cell to read the rule.'}
            </span>
          </div>

          <p className="mt-3 text-[11px] text-slate-500 font-mono uppercase tracking-[0.18em]">
            All rules operator-configurable in product · default set from API RP 75 / IOGP 463
          </p>
        </div>
      </div>
    </div>
  );
}

function CapabilityBadge({ state }: { state: 'full' | 'partial' | 'none' }) {
  if (state === 'full') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/12 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] uppercase tracking-[0.2em]">
        <Check className="h-3 w-3" strokeWidth={3} /> Full
      </span>
    );
  }
  if (state === 'partial') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold/10 border border-gold/40 text-gold font-mono text-[10px] uppercase tracking-[0.2em]">
        <AlertOctagon className="h-3 w-3" strokeWidth={2.5} /> Partial
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/40 text-rose-300 font-mono text-[10px] uppercase tracking-[0.2em]">
      <X className="h-3 w-3" strokeWidth={3} /> None
    </span>
  );
}
