'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle,
  FileX2,
  DollarSign,
  Sparkles,
  ArrowRight,
  Monitor,
  Tablet,
  Database,
  Award,
  ShieldCheck,
  HardHat,
  Building2,
  BarChart3,
  Lock,
  AlertOctagon,
  Leaf,
  ClipboardList,
  Video,
  Cloud,
  Server,
  Key,
} from 'lucide-react';
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

/* ───────────────── Complete System map ───────────────── */

type FeatureChip = {
  icon: typeof Award;
  label: string;
};

const lmsFeatures: FeatureChip[] = [
  { icon: Award, label: 'Industry-Standard Training Formats' },
  { icon: Building2, label: 'Multi-Tenant (Enterprise + Gov)' },
  { icon: BarChart3, label: 'Analytics & Audit Dashboard' },
  { icon: HardHat, label: 'EHS / OSHA Curriculum Engine' },
  { icon: ShieldCheck, label: 'FedRAMP-Aligned Architecture' },
];

const fieldFeatures: FeatureChip[] = [
  { icon: Lock, label: 'LOTO Permit Module' },
  { icon: AlertOctagon, label: 'SIMOPS Coordination Engine' },
  { icon: Leaf, label: 'Environmental Compliance Suite' },
  { icon: ClipboardList, label: 'Inspection & Audit Tools' },
  { icon: Video, label: 'Micro-Learning Player (Video · Scenario · Quiz)' },
];

const backboneItems = [
  {
    icon: Database,
    title: 'Secure Cloud Platform',
    detail: 'Login · Profiles · Roles · Content Library · Assignments',
  },
  {
    icon: Server,
    title: 'Compliance Records Engine',
    detail: 'Audit-ready learner record · Immutable trail · One-tap export',
  },
  {
    icon: Cloud,
    title: 'Federal-Cleared Cloud Path',
    detail: 'FedRAMP Moderate-aligned deployment for federal tenants',
  },
  {
    icon: Key,
    title: 'Zero-Trust Auth',
    detail: 'Identity-aware access · Per-tenant cryptographic boundaries',
  },
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

      {/* ──────────── Complete System overview ──────────── */}
      <CompleteSystem />
    </SectionWrapper>
  );
}

/* ──────────── Complete System sub-block ──────────── */

function CompleteSystem() {
  return (
    <div className="mt-16">
      {/* Eyebrow + heading */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] uppercase tracking-[0.25em]">
            The Complete System
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
            Two Surfaces · One Platform
          </span>
        </div>
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight max-w-4xl">
          The configuration surface lives on the web. The execution surface lives in the field.{' '}
          <span className="text-gradient">Both share the same backbone.</span>
        </h3>
      </div>

      {/* Two surfaces */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        <SurfaceCard
          eyebrow="Surface 01 · Web"
          icon={Monitor}
          title="Soteria LMS"
          tagline="The configuration surface — admins author, assign, and report."
          features={lmsFeatures}
          delay={0}
        />
        <SurfaceCard
          eyebrow="Surface 02 · iPad"
          icon={Tablet}
          title="Soteria Field"
          tagline="The execution surface — workers learn and permit on the floor."
          features={fieldFeatures}
          delay={0.08}
        />
      </div>

      {/* Connector arrow */}
      <div className="hidden lg:flex items-center justify-center my-2 text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em]">
        <span className="h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <span className="mx-3 text-accent">↓ Shared Backbone ↓</span>
        <span className="h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>

      {/* Backbone row */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.55 }}
        className="relative glass rounded-2xl p-6 lg:p-7 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/8 via-transparent to-gold/8 pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-5">
            <Database className="h-4 w-4 text-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              Shared Backbone
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {backboneItems.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3 rounded-xl bg-white/[0.02] border border-white/5 p-4 hover:border-accent/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm leading-tight">{b.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">{b.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SurfaceCard({
  eyebrow,
  icon: Icon,
  title,
  tagline,
  features,
  delay,
}: {
  eyebrow: string;
  icon: typeof Monitor;
  title: string;
  tagline: string;
  features: FeatureChip[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55, delay }}
      className="relative glass rounded-2xl p-7 overflow-hidden hover:border-accent/40 transition-colors"
    >
      <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            {eyebrow}
          </span>
        </div>

        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-deep text-navy-900 flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.3)]">
            <Icon className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div>
            <h4 className="font-display text-2xl lg:text-3xl font-bold text-white leading-none">
              {title}
            </h4>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">{tagline}</p>

        <div className="space-y-2">
          {features.map((f, i) => {
            const FIcon = f.icon;
            return (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: delay + 0.15 + i * 0.05 }}
                className="flex items-center gap-3 rounded-lg bg-white/[0.02] border border-white/5 px-3 py-2.5"
              >
                <FIcon className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-slate-200">{f.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
