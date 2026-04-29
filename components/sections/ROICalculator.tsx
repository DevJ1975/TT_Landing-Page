'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Calculator, Clock, FileSearch, ShieldCheck, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

/* ───────────────── Calculation assumptions ─────────────────
 *
 * Reasonable, defensible defaults for an EHS/compliance training
 * platform. The numbers shown are a directional estimate, not a
 * binding ROI guarantee — caveat shown beneath the calculator.
 *
 * - 1.8 hours saved per worker per year on cert tracking, training
 *   record retrieval, and audit-prep busywork.
 * - $48 fully-loaded cost per admin hour.
 * - 45 hours saved per site per year on audit-prep coordination
 *   (chasing paper, compiling binders, walking auditors through it).
 * - Average OSHA citation = $15,625 (median serious citation 2024).
 *   Soteria reduces citation exposure by ~35% via better training
 *   capture and documentation.
 */

const HOURS_PER_WORKER_SAVED = 1.8;
const ADMIN_HOUR_COST = 48;
const HOURS_PER_SITE_SAVED = 45;
const CITATION_AVG_COST = 15_625;
const CITATION_REDUCTION_FACTOR = 0.35;

type Inputs = {
  workforce: number;
  sites: number;
  citations: number;
};

const defaults: Inputs = { workforce: 500, sites: 3, citations: 4 };

const sliderConfig: Array<{
  key: keyof Inputs;
  label: string;
  min: number;
  max: number;
  step: number;
  format: (n: number) => string;
}> = [
  {
    key: 'workforce',
    label: 'Workforce size',
    min: 25,
    max: 5000,
    step: 25,
    format: (n) => n.toLocaleString(),
  },
  {
    key: 'sites',
    label: 'Number of sites / facilities',
    min: 1,
    max: 50,
    step: 1,
    format: (n) => String(n),
  },
  {
    key: 'citations',
    label: 'Estimated OSHA citations / year',
    min: 0,
    max: 25,
    step: 1,
    format: (n) => String(n),
  },
];

function compute({ workforce, sites, citations }: Inputs) {
  const adminHoursSaved = workforce * HOURS_PER_WORKER_SAVED;
  const auditHoursSaved = sites * HOURS_PER_SITE_SAVED;
  const totalHoursSaved = adminHoursSaved + auditHoursSaved;
  const adminCostSaved = totalHoursSaved * ADMIN_HOUR_COST;
  const citationExposureSaved = citations * CITATION_AVG_COST * CITATION_REDUCTION_FACTOR;
  const totalSaved = adminCostSaved + citationExposureSaved;
  return {
    totalHoursSaved,
    adminCostSaved,
    citationExposureSaved,
    totalSaved,
  };
}

function formatCurrency(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n)}`;
}

function AnimatedValue({ value, format }: { value: number; format: (n: number) => string }) {
  const motion = useMotionValue(value);
  const spring = useSpring(motion, { stiffness: 80, damping: 20, mass: 0.8 });
  const display = useTransform(spring, (latest) => format(latest));

  useEffect(() => {
    motion.set(value);
  }, [value, motion]);

  const [text, setText] = useState(format(value));
  useEffect(() => {
    const unsub = display.on('change', (v) => setText(v));
    return unsub;
  }, [display]);

  return <span className="tabular-nums">{text}</span>;
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<Inputs>(defaults);
  const result = compute(inputs);

  const update = (key: keyof Inputs, value: number) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="relative glass rounded-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-emerald-500/8 pointer-events-none" />
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] uppercase tracking-[0.25em]">
            <Calculator className="h-3 w-3" />
            ROI Calculator
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Slide to your numbers
          </span>
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight max-w-3xl">
          What does Soteria save you in{' '}
          <span className="text-gradient">year one?</span>
        </h3>

        <div className="mt-7 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* LEFT — Sliders */}
          <div className="lg:col-span-3 space-y-5">
            {sliderConfig.map((s) => {
              const value = inputs[s.key];
              const pct = ((value - s.min) / (s.max - s.min)) * 100;
              return (
                <div key={s.key}>
                  <div className="flex items-baseline justify-between mb-2">
                    <label
                      htmlFor={`roi-${s.key}`}
                      className="text-sm font-medium text-slate-200"
                    >
                      {s.label}
                    </label>
                    <span className="font-display text-2xl font-bold text-white tabular-nums">
                      {s.format(value)}
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      id={`roi-${s.key}`}
                      type="range"
                      min={s.min}
                      max={s.max}
                      step={s.step}
                      value={value}
                      onChange={(e) => update(s.key, Number(e.target.value))}
                      className="roi-slider w-full"
                      style={{
                        background: `linear-gradient(to right, #38BDF8 0%, #38BDF8 ${pct}%, rgba(255,255,255,0.06) ${pct}%, rgba(255,255,255,0.06) 100%)`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-1 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">
                    <span>{s.format(s.min)}</span>
                    <span>{s.format(s.max)}</span>
                  </div>
                </div>
              );
            })}

            {/* Presets */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 mr-1">
                Quick set
              </span>
              {[
                { label: 'Single plant', v: { workforce: 150, sites: 1, citations: 2 } },
                { label: 'Mid-market', v: { workforce: 500, sites: 3, citations: 4 } },
                { label: 'Enterprise', v: { workforce: 2500, sites: 12, citations: 9 } },
              ].map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setInputs(preset.v)}
                  className="px-2.5 py-1 rounded-full text-[11px] bg-white/[0.02] border border-white/10 text-slate-400 hover:border-accent/40 hover:text-accent transition-colors"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Output */}
          <div className="lg:col-span-2 relative">
            <div className="rounded-xl bg-navy-900/60 border border-accent/30 p-5 lg:p-6 h-full flex flex-col">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent flex items-center gap-1.5">
                <Sparkles className="h-3 w-3" />
                Estimated Annual Value
              </p>

              {/* Headline number */}
              <div className="mt-3 mb-5">
                <p className="font-display text-5xl md:text-6xl font-bold text-gradient leading-none">
                  <AnimatedValue value={result.totalSaved} format={formatCurrency} />
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Year-one value · Soteria platform
                </p>
              </div>

              {/* Breakdown */}
              <ul className="space-y-3 flex-1">
                <Breakdown
                  icon={Clock}
                  label="Admin hours saved"
                  value={result.totalHoursSaved}
                  format={(n) => `${Math.round(n).toLocaleString()} hrs`}
                  sub={`${formatCurrency(result.adminCostSaved)} · cert tracking + audit prep`}
                />
                <Breakdown
                  icon={ShieldCheck}
                  label="Citation exposure reduced"
                  value={result.citationExposureSaved}
                  format={formatCurrency}
                  sub="35% reduction via better training capture"
                />
                <Breakdown
                  icon={FileSearch}
                  label="Audit-prep cost saved"
                  value={inputs.sites * HOURS_PER_SITE_SAVED * ADMIN_HOUR_COST}
                  format={formatCurrency}
                  sub={`${HOURS_PER_SITE_SAVED} hrs × ${inputs.sites} site${inputs.sites === 1 ? '' : 's'}`}
                />
              </ul>

              <p className="mt-5 pt-3 border-t border-white/5 text-[10px] text-slate-500 leading-relaxed">
                Directional estimate based on industry benchmarks. Actual savings vary by
                facility complexity, current systems, and audit cadence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for the range slider thumb */}
      <style jsx>{`
        :global(.roi-slider) {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          border-radius: 4px;
          outline: none;
          cursor: pointer;
        }
        :global(.roi-slider::-webkit-slider-thumb) {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #38bdf8;
          cursor: grab;
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.5);
          transition: transform 0.15s ease;
        }
        :global(.roi-slider::-webkit-slider-thumb:active) {
          cursor: grabbing;
          transform: scale(1.15);
        }
        :global(.roi-slider::-moz-range-thumb) {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #38bdf8;
          cursor: grab;
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.5);
        }
      `}</style>
    </motion.div>
  );
}

function Breakdown({
  icon: Icon,
  label,
  value,
  format,
  sub,
}: {
  icon: typeof Clock;
  label: string;
  value: number;
  format: (n: number) => string;
  sub: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-xs font-medium text-slate-300 truncate">{label}</p>
          <p className="font-display text-base font-bold text-white tabular-nums">
            <AnimatedValue value={value} format={format} />
          </p>
        </div>
        <p className="text-[10px] text-slate-500 leading-snug mt-0.5">{sub}</p>
      </div>
    </li>
  );
}
