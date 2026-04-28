'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { Milestone, MilestoneStatus, Quarter } from '@/data/roadmap';
import StatusBadge from './StatusBadge';
import ProgressBar from './ProgressBar';

const ORDER: MilestoneStatus[] = ['planned', 'in-progress', 'complete'];

function nextStatus(s: MilestoneStatus): MilestoneStatus {
  const i = ORDER.indexOf(s);
  return ORDER[(i + 1) % ORDER.length];
}

function quarterProgress(milestones: Milestone[]) {
  if (!milestones.length) return 0;
  const score = milestones.reduce((acc, m) => {
    if (m.status === 'complete') return acc + 1;
    if (m.status === 'in-progress') return acc + 0.5;
    return acc;
  }, 0);
  return (score / milestones.length) * 100;
}

export default function MilestoneTimeline({ quarters }: { quarters: Quarter[] }) {
  const [state, setState] = useState<Quarter[]>(quarters);
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleStatus = (qid: string, mid: string) => {
    setState((prev) =>
      prev.map((q) =>
        q.id !== qid
          ? q
          : {
              ...q,
              milestones: q.milestones.map((m) =>
                m.id !== mid ? m : { ...m, status: nextStatus(m.status) },
              ),
            },
      ),
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {state.map((q, qi) => {
        const progress = quarterProgress(q.milestones);
        return (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: qi * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-2xl p-5 flex flex-col"
          >
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="font-display text-2xl font-bold text-white">{q.label}</h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                {q.range}
              </span>
            </div>
            <p className="text-sm text-accent font-medium mb-4">{q.theme}</p>

            <ProgressBar value={progress} label="Quarter Progress" />

            <ul className="mt-5 space-y-3 flex-1">
              {q.milestones.map((m) => {
                const isOpen = openId === m.id;
                return (
                  <li key={m.id}>
                    <div className="rounded-lg bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-colors">
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : m.id)}
                        className="w-full text-left p-3 flex items-start gap-2"
                        aria-expanded={isOpen}
                      >
                        <ChevronRight
                          className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-slate-500 transition-transform ${
                            isOpen ? 'rotate-90 text-accent' : ''
                          }`}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-100 leading-snug">
                            {m.title}
                          </p>
                        </div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-3 pb-3 pt-1 text-xs text-slate-400 leading-relaxed">
                              {m.detail}
                              <div className="mt-3">
                                <StatusBadge
                                  status={m.status}
                                  size="sm"
                                  onClick={() => toggleStatus(q.id, m.id)}
                                />
                                <span className="ml-2 text-[10px] text-slate-500 font-mono">
                                  click to cycle
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      {!isOpen && (
                        <div className="px-3 pb-3 -mt-1">
                          <StatusBadge status={m.status} size="sm" />
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}
