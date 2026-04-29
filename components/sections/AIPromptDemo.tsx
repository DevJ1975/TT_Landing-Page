'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertTriangle,
  CheckCircle2,
  CornerDownLeft,
  FileSearch,
  RefreshCw,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

type ResponseRow = { primary: string; secondary?: string; flag?: 'high' | 'med' | 'ok' };

type DemoScenario = {
  id: string;
  prompt: string;
  icon: typeof FileSearch;
  meta: string;
  summary: { value: string; sub: string }[];
  rows?: ResponseRow[];
  badges?: string[];
  ctas: string[];
};

const scenarios: DemoScenario[] = [
  {
    id: 'expiring',
    prompt: "Show me everyone whose forklift cert expires in the next 30 days",
    icon: AlertTriangle,
    meta: 'Compliance Copilot · 0.6s',
    summary: [
      { value: '12', sub: 'Workers' },
      { value: '4', sub: 'Sites' },
      { value: '3', sub: 'High-risk' },
    ],
    rows: [
      { primary: 'M. Rodriguez', secondary: 'Memphis · expires Mar 12', flag: 'high' },
      { primary: 'J. Park', secondary: 'Houston · expires Mar 18', flag: 'high' },
      { primary: 'A. Williams', secondary: 'Memphis · expires Mar 21', flag: 'med' },
      { primary: '+9 more', secondary: 'across Memphis · Houston · Tulsa · Atlanta' },
    ],
    ctas: ['Schedule Recertification', 'Export Report', 'Notify Supervisors'],
  },
  {
    id: 'audit',
    prompt: "Pull spill-response training records for our Gulf-Coast sites for OSHA, 2026 YTD",
    icon: FileSearch,
    meta: 'Audit Assistant · 1.2s',
    summary: [
      { value: '3', sub: 'Sites' },
      { value: '247', sub: 'Workers' },
      { value: '1,089', sub: 'Records' },
    ],
    badges: [
      'EPCRA 304 notification logs',
      'SPCC inspection records',
      'Training completion records',
      'Annual refresher cycles',
    ],
    rows: [
      { primary: 'Audit package compiled', secondary: 'Ready to submit · 2.3 MB PDF', flag: 'ok' },
    ],
    ctas: ['Download Package', 'Add Cover Letter', 'Email to Auditor'],
  },
  {
    id: 'risk',
    prompt: "Who's at risk of falling out of compliance this month?",
    icon: TrendingUp,
    meta: 'Predictive Risk · 0.8s',
    summary: [
      { value: '8', sub: 'Flagged' },
      { value: '2', sub: 'High-risk' },
      { value: '6', sub: 'Medium-risk' },
    ],
    rows: [
      { primary: 'M. Sanchez', secondary: 'LOTO refresher overdue · Memphis', flag: 'high' },
      { primary: 'T. Brown', secondary: 'Confined-space cert expires this week · Houston', flag: 'high' },
      { primary: '6 workers', secondary: 'Inside 30-day expiration window', flag: 'med' },
    ],
    ctas: ['View Full Report', 'Send Reminders', 'Auto-Schedule Refreshers'],
  },
];

export default function AIPromptDemo() {
  const [activeId, setActiveId] = useState<string>(scenarios[0].id);
  const [phase, setPhase] = useState<'idle' | 'typing' | 'thinking' | 'response'>('idle');
  const [typedPrompt, setTypedPrompt] = useState('');
  const timersRef = useRef<number[]>([]);

  const active = scenarios.find((s) => s.id === activeId)!;

  // Run the typewriter + thinking + reveal sequence whenever the active scenario changes.
  useEffect(() => {
    // Clear any in-flight timers
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];

    setPhase('typing');
    setTypedPrompt('');

    const promptText = active.prompt;
    const charDelay = 22;

    // Type the prompt one character at a time.
    for (let i = 0; i < promptText.length; i++) {
      const t = window.setTimeout(() => {
        setTypedPrompt(promptText.slice(0, i + 1));
      }, charDelay * i);
      timersRef.current.push(t);
    }

    // Move to "thinking" then reveal response.
    const thinkingAt = charDelay * promptText.length + 250;
    const responseAt = thinkingAt + 800;

    timersRef.current.push(
      window.setTimeout(() => setPhase('thinking'), thinkingAt),
    );
    timersRef.current.push(
      window.setTimeout(() => setPhase('response'), responseAt),
    );

    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
      timersRef.current = [];
    };
  }, [activeId, active.prompt]);

  const replay = () => {
    // Force a re-run of the effect.
    const current = activeId;
    setActiveId('');
    window.setTimeout(() => setActiveId(current), 50);
  };

  const Icon = active.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="relative glass rounded-2xl p-5 md:p-7 mb-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent-deep/10 pointer-events-none" />
      <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] uppercase tracking-[0.25em]">
              <Sparkles className="h-3 w-3" />
              Try the Compliance Copilot
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              live demo · mocked data
            </span>
          </div>

          <button
            type="button"
            onClick={replay}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] text-slate-400 hover:text-accent hover:bg-white/5 transition-colors"
            aria-label="Replay demo"
          >
            <RefreshCw className="h-3 w-3" />
            Replay
          </button>
        </div>

        {/* Prompt picker */}
        <div className="flex flex-wrap gap-2 mb-4">
          {scenarios.map((s) => {
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveId(s.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                  isActive
                    ? 'bg-accent/15 border-accent/50 text-accent'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-accent/30 hover:text-slate-200'
                }`}
              >
                Example {scenarios.indexOf(s) + 1}
              </button>
            );
          })}
        </div>

        {/* Mock prompt input */}
        <div className="rounded-xl bg-navy-900/70 border border-accent/30 p-4 mb-3 font-mono text-[13px] flex items-start gap-3 min-h-[64px]">
          <span className="text-accent flex-shrink-0 mt-0.5">›</span>
          <span className="flex-1 text-slate-100 leading-relaxed">
            {typedPrompt}
            {phase === 'typing' && (
              <span className="inline-block w-1.5 h-4 ml-0.5 bg-accent animate-pulse align-middle" />
            )}
          </span>
          <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-slate-400">
            <CornerDownLeft className="h-2.5 w-2.5" />
            Enter
          </kbd>
        </div>

        {/* Response panel */}
        <div className="rounded-xl bg-white/[0.02] border border-white/10 overflow-hidden min-h-[280px]">
          {/* Response header */}
          <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
            <div className="w-7 h-7 rounded-md bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
              <Icon className="h-3.5 w-3.5" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-400">
                {active.meta}
              </p>
            </div>
            {phase === 'response' && (
              <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                Done
              </span>
            )}
          </div>

          {/* Body */}
          <div className="p-4">
            <AnimatePresence mode="wait">
              {phase === 'thinking' && (
                <motion.div
                  key="thinking"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-slate-500 py-4"
                >
                  <span className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
                        className="h-1.5 w-1.5 rounded-full bg-accent"
                      />
                    ))}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-[0.2em]">
                    Analyzing compliance records…
                  </span>
                </motion.div>
              )}

              {phase === 'response' && (
                <motion.div
                  key="response"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  {/* Summary stat row */}
                  <div className="grid grid-cols-3 gap-3">
                    {active.summary.map((s, i) => (
                      <motion.div
                        key={s.sub}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.05 + i * 0.06 }}
                        className="rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2"
                      >
                        <p className="font-display text-2xl font-bold text-white tabular-nums leading-none">
                          {s.value}
                        </p>
                        <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500">
                          {s.sub}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Optional badges */}
                  {active.badges && (
                    <div className="flex flex-wrap gap-1.5">
                      {active.badges.map((b, i) => (
                        <motion.span
                          key={b}
                          initial={{ opacity: 0, x: 6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                          className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/8 border border-emerald-500/20 text-emerald-300 text-[11px]"
                        >
                          <CheckCircle2 className="h-3 w-3" />
                          {b}
                        </motion.span>
                      ))}
                    </div>
                  )}

                  {/* Rows */}
                  {active.rows && (
                    <ul className="space-y-1.5">
                      {active.rows.map((r, i) => (
                        <motion.li
                          key={r.primary + i}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                          className="flex items-center gap-3 px-3 py-2 rounded-md bg-white/[0.02] border border-white/5"
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                              r.flag === 'high'
                                ? 'bg-rose-400 shadow-[0_0_6px_rgba(251,113,133,0.6)]'
                                : r.flag === 'med'
                                  ? 'bg-amber-300'
                                  : r.flag === 'ok'
                                    ? 'bg-emerald-400'
                                    : 'bg-slate-500'
                            }`}
                          />
                          <span className="text-sm font-medium text-slate-100">{r.primary}</span>
                          {r.secondary && (
                            <span className="text-xs text-slate-400 ml-auto truncate">
                              {r.secondary}
                            </span>
                          )}
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {active.ctas.map((c, i) => (
                      <motion.button
                        key={c}
                        type="button"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.45 + i * 0.05 }}
                        className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                          i === 0
                            ? 'bg-accent text-navy-900 hover:bg-accent-glow'
                            : 'bg-white/5 text-slate-200 border border-white/10 hover:border-accent/40 hover:text-accent'
                        }`}
                      >
                        {c}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-3 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-accent/60" />
          Every Copilot answer is logged with the prompt, the response, and the human who acted on it.
        </p>
      </div>
    </motion.div>
  );
}
