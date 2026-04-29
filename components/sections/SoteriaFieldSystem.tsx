'use client';

import { motion } from 'framer-motion';
import {
  ArrowDownToLine,
  CheckCircle2,
  Database,
  Quote,
  Sparkles,
  Tablet,
  Wifi,
  WifiOff,
} from 'lucide-react';
import {
  backendStack,
  buildPhases,
  fieldScenarios,
  fieldStrategicQuote,
  ipadRationale,
  ipadStack,
  learningFormats,
  triggerModes,
  twoSurfaceNote,
} from '@/data/soteria-field-system';

export default function SoteriaFieldSystem() {
  return (
    <div className="mt-16">
      {/* Eyebrow + Title */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] uppercase tracking-[0.25em]">
            Learning System
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
            Soteria Field · Architecture
          </span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
          Just-in-time micro-learning —{' '}
          <span className="text-gradient">on the floor, at the machine, in the field.</span>
        </h3>
        <p className="mt-5 max-w-3xl text-slate-300 leading-relaxed">
          Soteria Field is a native iPad app delivering mixed-format micro-learning (under five
          minutes per lesson) to frontline workers. It works fully offline, syncs completions
          back to the secure cloud platform, and writes every action to the compliance record
          engine. The web admin portal remains intact — Soteria Field is the worker-facing
          delivery surface, not a replacement for the LMS.
        </p>
      </div>

      {/* Architecture Diagram */}
      <ArchitectureDiagram />

      {/* Trigger modes */}
      <div className="mt-12 mb-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
          How Learning Gets Triggered — 3 Modes, Concurrently
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {triggerModes.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="glass rounded-xl p-5 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Trigger {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="font-display text-lg font-semibold text-white mb-2 leading-tight">
                  {t.name}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">{t.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Micro-learning formats */}
      <div className="mb-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
          Micro-Learning Formats — All Under 5 Minutes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {learningFormats.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative glass rounded-2xl p-6 overflow-hidden hover:border-accent/40 transition-colors"
              >
                <div className="absolute top-0 right-0 font-display font-bold text-7xl leading-none text-accent/[0.06] select-none pointer-events-none">
                  {f.number}
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] uppercase tracking-[0.18em]">
                      {f.duration}
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-semibold text-white mb-2 leading-tight">
                    {f.name}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Technical architecture */}
      <div className="mb-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
          Technical Architecture
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 lg:p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Tablet className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-white leading-none">
                  iPad App
                </h4>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mt-1">
                  Native iPad · Offline-First
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {ipadStack.map((s) => (
                <li key={s.title} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-100 leading-snug">
                      {s.title}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 lg:p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Database className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-white leading-none">
                  Backend
                </h4>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mt-1">
                  Existing — no changes required
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {backendStack.map((s) => (
                <li key={s.title} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-100 leading-snug">
                      {s.title}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3 text-xs text-slate-300">
              <WifiOff className="h-4 w-4 text-emerald-400 flex-shrink-0" />
              <span>
                The app works fully offline. Statements and progress sync automatically when
                connectivity returns.
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Build phases */}
      <div className="mb-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
          Build Phases
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {buildPhases.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative glass rounded-2xl p-6 lg:p-7 overflow-hidden"
            >
              <div className="absolute top-0 right-0 font-display font-bold text-7xl leading-none text-accent/[0.07] select-none pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] uppercase tracking-[0.2em]">
                    {p.label}
                  </span>
                </div>
                <h4 className="font-display text-2xl font-bold text-white mb-5 leading-tight">
                  {p.title}
                </h4>
                <ul className="space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-slate-200 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Strategic positioning */}
      <div className="mb-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
          Strategic Positioning
        </p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden mb-5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-navy-700/60 to-emerald-500/10" />
          <div className="absolute inset-0 grid-bg-fine opacity-30 pointer-events-none" />
          <div className="relative p-8 lg:p-10 border border-accent/20 rounded-2xl">
            <Quote className="h-8 w-8 text-accent/40 mb-3" strokeWidth={2} />
            <p className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-snug max-w-4xl">
              “{fieldStrategicQuote}”
            </p>
          </div>
        </motion.div>

        <p className="text-slate-300 leading-relaxed mb-6 max-w-4xl">
          Every major LMS — Cornerstone, Docebo, TalentLMS — started as a web app and bolted
          mobile on later. Their mobile products are stripped-down, connectivity-dependent, and
          designed for someone sitting at a screen. Soteria Field is offline-first and
          field-first by architecture — not by retrofit.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Why iPad */}
          <div className="glass rounded-2xl p-6 lg:p-7">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Why iPad Specifically
              </span>
            </div>
            <ul className="space-y-3">
              {ipadRationale.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm text-slate-200 leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Field scenarios */}
          <div className="glass rounded-2xl p-6 lg:p-7">
            <div className="flex items-center gap-3 mb-4">
              <Tablet className="h-4 w-4 text-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Field Scenarios by Vertical
              </span>
            </div>
            <ul className="space-y-4">
              {fieldScenarios.map((s) => (
                <li key={s.id}>
                  <p className="font-semibold text-white text-sm">{s.vertical}</p>
                  <p className="text-sm text-slate-400 leading-relaxed mt-1">{s.scenario}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Two-surface connection note */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-6 lg:p-7 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
        <div className="relative flex items-start gap-4">
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
            <ArrowDownToLine className="h-5 w-5 rotate-[-45deg]" />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-2">
              Connection to the Soteria Platform
            </p>
            <p className="text-slate-200 leading-relaxed">{twoSurfaceNote}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ──────────────────────────── Architecture Diagram ──────────────────────────── */

function ArchitectureDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="relative glass rounded-2xl p-6 lg:p-8 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-fine opacity-30 pointer-events-none" />
      <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            System Architecture
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Two-surface · Offline-first · Audit-ready
          </span>
        </div>

        {/* SVG diagram */}
        <div className="relative">
          <svg
            viewBox="0 0 1000 480"
            className="w-full h-auto"
            role="img"
            aria-label="Soteria Field architecture: web admin portal and iPad both connect to a secure cloud platform and a compliance records engine."
          >
            <defs>
              <linearGradient id="accentLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="hubFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#16213F" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#0F1730" stopOpacity="0.95" />
              </linearGradient>
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 Z" fill="#38BDF8" opacity="0.8" />
              </marker>
            </defs>

            {/* TOP: Web Admin Portal (configuration surface) */}
            <g>
              <rect
                x="320"
                y="20"
                width="360"
                height="80"
                rx="14"
                fill="url(#hubFill)"
                stroke="#38BDF8"
                strokeOpacity="0.35"
                strokeWidth="1.5"
              />
              <text
                x="500"
                y="50"
                textAnchor="middle"
                fontFamily="ui-monospace, SFMono-Regular, monospace"
                fontSize="11"
                fill="#38BDF8"
                letterSpacing="2.5"
              >
                CONFIGURATION SURFACE
              </text>
              <text
                x="500"
                y="78"
                textAnchor="middle"
                fontFamily="Syne, sans-serif"
                fontSize="22"
                fontWeight="700"
                fill="#ffffff"
              >
                Web Admin Portal
              </text>
              <text
                x="500"
                y="95"
                textAnchor="middle"
                fontSize="11"
                fill="#94A3B8"
              >
                Course uploads · Assignments · Reporting
              </text>
            </g>

            {/* MIDDLE: Backend hub — Secure cloud + Compliance records */}
            <g>
              {/* Secure Cloud Platform */}
              <rect
                x="120"
                y="180"
                width="320"
                height="120"
                rx="14"
                fill="url(#hubFill)"
                stroke="#38BDF8"
                strokeOpacity="0.45"
                strokeWidth="1.5"
              />
              <text
                x="280"
                y="210"
                textAnchor="middle"
                fontFamily="ui-monospace, SFMono-Regular, monospace"
                fontSize="11"
                fill="#38BDF8"
                letterSpacing="2.5"
              >
                BACKEND
              </text>
              <text
                x="280"
                y="240"
                textAnchor="middle"
                fontFamily="Syne, sans-serif"
                fontSize="20"
                fontWeight="700"
                fill="#ffffff"
              >
                Secure Cloud Platform
              </text>
              <text x="280" y="265" textAnchor="middle" fontSize="11" fill="#94A3B8">
                Login · Profiles · Roles
              </text>
              <text x="280" y="282" textAnchor="middle" fontSize="11" fill="#94A3B8">
                Content Library · Assignments
              </text>

              {/* Compliance Records Engine */}
              <rect
                x="560"
                y="180"
                width="320"
                height="120"
                rx="14"
                fill="url(#hubFill)"
                stroke="#F5B544"
                strokeOpacity="0.45"
                strokeWidth="1.5"
              />
              <text
                x="720"
                y="210"
                textAnchor="middle"
                fontFamily="ui-monospace, SFMono-Regular, monospace"
                fontSize="11"
                fill="#F5B544"
                letterSpacing="2.5"
              >
                COMPLIANCE
              </text>
              <text
                x="720"
                y="240"
                textAnchor="middle"
                fontFamily="Syne, sans-serif"
                fontSize="18"
                fontWeight="700"
                fill="#ffffff"
              >
                Compliance Records Engine
              </text>
              <text x="720" y="265" textAnchor="middle" fontSize="11" fill="#94A3B8">
                Audit-Ready Learner Record
              </text>
              <text x="720" y="282" textAnchor="middle" fontSize="11" fill="#94A3B8">
                Inspection Export · Reporting
              </text>
            </g>

            {/* BOTTOM: Soteria Field iPad (execution surface) */}
            <g>
              <rect
                x="320"
                y="380"
                width="360"
                height="80"
                rx="14"
                fill="url(#hubFill)"
                stroke="#38BDF8"
                strokeOpacity="0.55"
                strokeWidth="1.5"
              />
              <text
                x="500"
                y="410"
                textAnchor="middle"
                fontFamily="ui-monospace, SFMono-Regular, monospace"
                fontSize="11"
                fill="#38BDF8"
                letterSpacing="2.5"
              >
                EXECUTION SURFACE
              </text>
              <text
                x="500"
                y="438"
                textAnchor="middle"
                fontFamily="Syne, sans-serif"
                fontSize="22"
                fontWeight="700"
                fill="#ffffff"
              >
                Soteria Field
              </text>
              <text
                x="500"
                y="455"
                textAnchor="middle"
                fontSize="11"
                fill="#94A3B8"
              >
                iPad · Offline-First · Field-Ready
              </text>
            </g>

            {/* Arrows */}
            {/* Web Admin → Cloud */}
            <line
              x1="430"
              y1="100"
              x2="280"
              y2="180"
              stroke="url(#accentLine)"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            {/* Flowing data — Web Admin → Cloud */}
            <line
              x1="430"
              y1="100"
              x2="280"
              y2="180"
              stroke="#38BDF8"
              strokeWidth="2"
              strokeOpacity="0.85"
              strokeDasharray="3 14"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-34"
                dur="1.6s"
                repeatCount="indefinite"
              />
            </line>
            <text
              x="332"
              y="146"
              textAnchor="middle"
              fontSize="10"
              fill="#94A3B8"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
              letterSpacing="1"
            >
              author / assign
            </text>
            {/* Web Admin → Compliance Records */}
            <line
              x1="570"
              y1="100"
              x2="720"
              y2="180"
              stroke="url(#accentLine)"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            {/* Flowing data — Web Admin → Compliance Records */}
            <line
              x1="570"
              y1="100"
              x2="720"
              y2="180"
              stroke="#F5B544"
              strokeWidth="2"
              strokeOpacity="0.8"
              strokeDasharray="3 14"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-34"
                dur="2s"
                repeatCount="indefinite"
              />
            </line>
            <text
              x="668"
              y="146"
              textAnchor="middle"
              fontSize="10"
              fill="#94A3B8"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
              letterSpacing="1"
            >
              report / audit
            </text>

            {/* Secure Cloud ↔ Soteria Field */}
            <line
              x1="320"
              y1="300"
              x2="430"
              y2="380"
              stroke="url(#accentLine)"
              strokeWidth="2"
              markerEnd="url(#arrow)"
              markerStart="url(#arrow)"
            />
            {/* Flowing data — Cloud → Field (down) */}
            <line
              x1="320"
              y1="300"
              x2="430"
              y2="380"
              stroke="#38BDF8"
              strokeWidth="2"
              strokeOpacity="0.85"
              strokeDasharray="3 14"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-34"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </line>
            {/* Flowing data — Field → Cloud (up) */}
            <line
              x1="320"
              y1="300"
              x2="430"
              y2="380"
              stroke="#60A5FA"
              strokeWidth="2"
              strokeOpacity="0.55"
              strokeDasharray="2 18"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;40"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </line>
            <text
              x="358"
              y="345"
              textAnchor="middle"
              fontSize="10"
              fill="#94A3B8"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
              letterSpacing="1"
            >
              sync · assignments
            </text>

            {/* Soteria Field → Compliance Records */}
            <line
              x1="570"
              y1="380"
              x2="720"
              y2="300"
              stroke="url(#accentLine)"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            {/* Flowing data — Field → Compliance Records */}
            <line
              x1="570"
              y1="380"
              x2="720"
              y2="300"
              stroke="#F5B544"
              strokeWidth="2"
              strokeOpacity="0.85"
              strokeDasharray="3 14"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-34"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </line>
            <text
              x="668"
              y="345"
              textAnchor="middle"
              fontSize="10"
              fill="#94A3B8"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
              letterSpacing="1"
            >
              completion records
            </text>
          </svg>
        </div>

        {/* Diagram legend */}
        <div className="mt-5 flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400">
          <span className="flex items-center gap-2">
            <Wifi className="h-3 w-3 text-accent" /> Online sync
          </span>
          <span className="flex items-center gap-2">
            <WifiOff className="h-3 w-3 text-emerald-400" /> Offline-first execution
          </span>
          <span className="flex items-center gap-2">
            <Database className="h-3 w-3 text-gold" /> Compliance audit trail
          </span>
        </div>
      </div>
    </motion.div>
  );
}
