'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, FileX2, DollarSign, Sparkles, ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';

const pains = [
  {
    icon: FileX2,
    title: 'Compliance training is fragmented',
    detail:
      'Paper sign-offs, scattered PDFs, mailbox-as-LMS. Audit prep takes weeks; one missed certification triggers six-figure exposure.',
  },
  {
    icon: AlertTriangle,
    title: 'High-risk industries are under-served',
    detail:
      'EHS, federal, manufacturing, and aviation lack purpose-built tools. They settle for HR-suite afterthoughts that ignore field reality.',
  },
  {
    icon: DollarSign,
    title: 'Existing platforms miss the middle',
    detail:
      'Either consumer-grade learning apps with no compliance backbone — or enterprise LMSs with six-figure floors and 1990s UX.',
  },
];

const answers = [
  'Compliance-first by design — every action has an audit trail.',
  'Federal-grade architecture with commercial flexibility.',
  'Built by an OSHA-credentialed founder — not a generic SaaS team.',
  'Mobile + multi-tenant from v1, not bolted on at v3.',
];

export default function ExecutiveSummary() {
  return (
    <SectionWrapper
      id="problem"
      number="01"
      eyebrow="Executive Summary"
      title={
        <>
          The compliance training market is{' '}
          <span className="text-gradient">broken in three predictable ways.</span>
        </>
      }
      description="High-risk operators need more than another LMS. They need a workforce-learning operating system that an OSHA inspector, a federal auditor, and a plant supervisor can all trust on the same Tuesday morning."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {/* Problem column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-rose-500" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-rose-300">
              The Problem
            </span>
          </div>
          {pains.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass rounded-xl p-5 flex gap-4 items-start hover:border-rose-500/40 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1.5">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Solution column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative glass rounded-2xl p-7 lg:p-9 border-accent/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                Soteria's Answer
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight mb-5">
              A purpose-built, compliance-first LMS with{' '}
              <span className="text-gradient">federal-grade architecture</span> and commercial
              flexibility.
            </h3>

            <ul className="space-y-3 mt-6">
              {answers.map((a, i) => (
                <motion.li
                  key={a}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                  <span className="text-slate-200 leading-relaxed">{a}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3 text-sm text-slate-400">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Result
              </span>
              <span className="leading-relaxed">
                One platform that scales from a 50-person plant to a federal agency.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
