'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Filter } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { marketingChannels, kpiTargets, type Channel, type Priority } from '@/data/marketing';

const filters: { id: Channel | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'private', label: 'Private' },
  { id: 'federal', label: 'Federal' },
];

const priorityStyle: Record<Priority, string> = {
  High: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
  Medium: 'bg-accent/10 text-accent border-accent/30',
  'Long-term': 'bg-slate-500/10 text-slate-300 border-slate-500/30',
};

const channelDot: Record<Channel, string> = {
  private: 'bg-accent',
  federal: 'bg-gold',
  both: 'bg-gradient-to-r from-accent to-gold',
};

export default function MarketingPlan() {
  const [filter, setFilter] = useState<Channel | 'all'>('all');
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    if (filter === 'all') return marketingChannels;
    return marketingChannels.filter(
      (m) => m.channel === filter || m.channel === 'both',
    );
  }, [filter]);

  const toggle = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <SectionWrapper
      id="marketing"
      number="06"
      eyebrow="Marketing Execution Plan"
      title={
        <>
          Two pipelines.{' '}
          <span className="text-gradient">One operating cadence.</span>
        </>
      }
      description="Filter by motion. Click any item to mark it as in-flight in your run-of-show. Items show priority badges so the team knows what gets the next available hour."
    >
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mr-2">
          <Filter className="h-3 w-3" /> Filter
        </span>
        {filters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                active
                  ? 'bg-accent/15 border-accent/50 text-accent'
                  : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-accent/30 hover:text-slate-200'
              }`}
            >
              {f.label}
            </button>
          );
        })}
        <span className="ml-auto text-xs text-slate-500 font-mono">
          {filtered.length} channels · {completed.size} active
        </span>
      </div>

      {/* Kanban-style grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((m, i) => {
          const isDone = completed.has(m.id);
          return (
            <motion.button
              key={m.id}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 9) * 0.04 }}
              onClick={() => toggle(m.id)}
              className={`group text-left glass rounded-xl p-5 transition-all ${
                isDone
                  ? 'border-emerald-500/40 bg-emerald-500/[0.04]'
                  : 'hover:border-accent/40'
              }`}
              aria-pressed={isDone}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${channelDot[m.channel]}`} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    {m.channel}
                  </span>
                </div>
                <span
                  className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.18em] rounded border ${priorityStyle[m.priority]}`}
                >
                  {m.priority}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded border ${
                    isDone
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                      : 'border-white/15 text-transparent group-hover:border-accent/50'
                  }`}
                >
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <div className="flex-1 min-w-0">
                  <h4
                    className={`font-semibold leading-snug ${
                      isDone ? 'text-emerald-200 line-through' : 'text-white'
                    }`}
                  >
                    {m.title}
                  </h4>
                  <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* KPI Dashboard */}
      <div className="mt-14">
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-5">
          2026 KPI Targets
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpiTargets.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute -inset-1 bg-radial-glow opacity-40 pointer-events-none" />
              <div className="relative">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-3">
                  Target
                </p>
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                  <AnimatedCounter value={k.value} prefix={k.prefix} suffix={k.suffix} />
                </div>
                <p className="text-sm text-slate-300 leading-snug">{k.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
