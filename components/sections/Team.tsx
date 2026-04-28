'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  Scale,
  Camera,
  Code2,
  ShieldCheck,
  Star,
  HardHat,
  CheckCircle2,
} from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';

const jayCreds = [
  { icon: GraduationCap, label: 'MBA' },
  { icon: Scale, label: 'JD Candidate (Entertainment Law)' },
  { icon: HardHat, label: 'OSHA 500 / 501 Path' },
  { icon: Camera, label: 'Motion Graphics · VFX · Film Editing' },
  { icon: Code2, label: 'Full-Stack Developer (Code Platoon 2026)' },
  { icon: Star, label: 'Veteran · SDVOSB Certified' },
];

const dqCreds = [
  { icon: GraduationCap, label: 'PhD, Cybersecurity' },
  { icon: Star, label: 'Retired Army Officer' },
  { icon: ShieldCheck, label: 'Federal BD & Capture Lead' },
];

const advantages = [
  'SDVOSB set-aside eligibility',
  'Domain expertise: EHS + instructional design + media production + engineering',
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
      description="The unfair advantage isn't a single skill — it's the stacking of EHS credentials, instructional design, media production, and engineering inside one founder, paired with a federal capture lead who has spent a career on the buyer's side of the table."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Jay */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-7 lg:p-8 relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] uppercase tracking-[0.2em]">
                Founder · CEO
              </span>
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-1">Jay Jones</h3>
            <p className="text-sm text-slate-400 mb-6">
              Builder, operator, and OSHA-credentialed instructor turning a stack of unrelated
              skills into a workforce-learning OS.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {jayCreds.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg bg-white/[0.02] border border-white/5 px-3 py-2"
                >
                  <Icon className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-slate-200">{label}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-300 leading-relaxed">
              Ten-plus years of EHS and OSHA training, a media-production background that
              produces in-house course assets, and an engineering trajectory that reduces
              dependency on outside dev shops. Bootstrapping discipline keeps Trainovate
              capital-efficient.
            </p>
          </div>
        </motion.div>

        {/* DeQuincy */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-gold rounded-2xl p-7 lg:p-8 relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gold/20 blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 rounded-md bg-gold/10 border border-gold/30 text-gold font-mono text-[10px] uppercase tracking-[0.2em]">
                JV Partner · Synergy Federal Group
              </span>
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-1">DeQuincy</h3>
            <p className="text-sm text-slate-400 mb-6">
              Federal capture lead with a PhD in cybersecurity and a career spent inside the
              agencies Trainovate now sells to.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {dqCreds.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg bg-white/[0.02] border border-white/5 px-3 py-2"
                >
                  <Icon className="h-4 w-4 text-gold flex-shrink-0" />
                  <span className="text-sm text-slate-200">{label}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-300 leading-relaxed">
              Owns capture, BD, and proposal leadership for the JV. Existing relationships in
              VA OI&amp;T, DoD service-component small business offices, and the federal
              cybersecurity community accelerate every conversation.
            </p>
          </div>
        </motion.div>
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
