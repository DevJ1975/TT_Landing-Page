'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  Code2,
  Star,
  HardHat,
  CheckCircle2,
  ShieldCheck,
  Handshake,
} from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { backdrops } from '@/data/backgrounds';

const founderCreds = [
  { icon: GraduationCap, label: 'MBA' },
  { icon: HardHat, label: 'OSHA 500 / 501 Path' },
  { icon: Code2, label: 'Full-Stack Developer (Code Platoon 2026)' },
  { icon: Star, label: 'Veteran · SDVOSB Certified' },
];

const partners = [
  {
    icon: Handshake,
    title: 'Synergy Federal Group',
    role: 'JV Partner — Federal Capture & BD',
    detail:
      'Federal capture, BD, and proposal leadership for the Wyoming JV. Owns OSDBU, agency, and prime-contractor relationships across VA, DoD, and the federal cybersecurity community.',
  },
  {
    icon: ShieldCheck,
    title: 'Trainovate Delivery Bench',
    role: 'Instructional Design · Engineering · Media',
    detail:
      'In-house instructional design, course media production, and engineering capacity. Scales with revenue — additional hires sequenced against signed contracts, not speculative runway.',
  },
];

const advantages = [
  'SDVOSB set-aside eligibility',
  'Domain expertise: EHS + instructional design + engineering',
  'Active enterprise pipeline (3 accounts)',
  'FedRAMP-aligned from day one',
  'Bootstrapped — lean and capital-efficient',
];

export default function Team() {
  return (
    <SectionWrapper
      id="team"
      number="07"
      eyebrow="The Team"
      title={
        <>
          Why <span className="text-gradient">Trainovate wins</span> in a market of generalists.
        </>
      }
      description="The unfair advantage isn't a single skill — it's the stacking of EHS credentials, instructional design, and engineering inside one founder, supported by a federal teaming partner who owns capture on the buyer's side of the table."
      backdrop={backdrops.team}
    >
      {/* Founder spotlight */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-7 lg:p-10 relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent-deep/10 blur-3xl pointer-events-none" />
        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] uppercase tracking-[0.2em]">
                Founder · CEO
              </span>
            </div>
            <h3 className="font-display text-4xl lg:text-5xl font-bold text-white mb-3 leading-[1.05]">
              Jamil Jones
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Builder, operator, and OSHA-credentialed instructor turning a stack of unrelated
              skills into a workforce-learning OS.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Ten-plus years of EHS and OSHA training plus an engineering trajectory that
              reduces dependency on outside dev shops. Bootstrapping discipline keeps Trainovate
              capital-efficient.
            </p>
          </div>

          <div className="lg:col-span-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              Credentials &amp; Skills
            </span>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {founderCreds.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-lg bg-white/[0.02] border border-white/5 px-3 py-2.5 hover:border-accent/30 transition-colors"
                >
                  <Icon className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-slate-200">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Partners / bench */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {partners.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl p-5 flex gap-4 items-start hover:border-accent/30 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white">{p.title}</h4>
                <p className="text-xs text-accent font-mono mt-1 tracking-[0.12em] uppercase">
                  {p.role}
                </p>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{p.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Unfair advantages */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="mt-10 glass rounded-2xl p-7 lg:p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
        <div className="relative">
          <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-5">
            Unfair Advantages
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {advantages.map((a, i) => (
              <motion.li
                key={a}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 rounded-lg bg-white/[0.02] border border-white/5 px-4 py-3"
              >
                <CheckCircle2 className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm text-slate-200 leading-snug">{a}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
