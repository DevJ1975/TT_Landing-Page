'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Star, Award, Users, Crosshair } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ExpandableCard from '@/components/ui/ExpandableCard';
import {
  federalAgencies,
  contractVehicles,
  federalGTMSteps,
  fedRampPillars,
} from '@/data/gtm-federal';

const statusStyle: Record<string, string> = {
  Active: 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300',
  'In Pursuit': 'bg-gold/10 border-gold/40 text-gold',
  Planned: 'bg-slate-500/10 border-slate-500/40 text-slate-300',
};

export default function FederalGTM() {
  return (
    <SectionWrapper
      id="federal-gtm"
      number="04"
      eyebrow="Federal / GovCon GTM"
      variant="gold"
      title={
        <>
          <span className="text-gradient-gold">SDVOSB-Positioned</span> for VA, DoD, and civilian
          agency set-asides.
        </>
      }
      description="Trainovate's federal play is purpose-built around the SDVOSB set-aside ladder. Synergy Federal Group leads capture; Trainovate delivers the technical solution."
    >
      {/* JV diagram */}
      <div className="mb-14">
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-5">
          Trainovate × Synergy JV
        </h3>
        <div className="relative glass-gold rounded-2xl p-8 overflow-hidden">
          <div className="absolute inset-0 grid-bg-fine opacity-40 pointer-events-none" />
          <div className="relative grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-right"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/40 text-accent mb-3">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h4 className="font-display text-xl font-bold text-white">Trainovate</h4>
              <p className="text-sm text-slate-300 mt-1">Technical Prime</p>
              <p className="text-xs text-accent font-mono mt-2 tracking-[0.15em] uppercase">
                SDVOSB · Veteran-Founded
              </p>
            </motion.div>

            <div className="flex flex-col items-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
                JV Entity
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="px-5 py-3 rounded-xl bg-gold/10 border border-gold/40 text-center"
              >
                <p className="font-display font-bold text-gold text-lg">Wyoming LLC</p>
                <p className="text-xs text-slate-400 mt-1">Joint Venture · 2026</p>
              </motion.div>
              <div className="hidden md:block w-full mt-4 relative">
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-32 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 border border-gold/40 text-gold mb-3">
                <Star className="h-7 w-7" />
              </div>
              <h4 className="font-display text-xl font-bold text-white">Synergy Federal Group</h4>
              <p className="text-sm text-slate-300 mt-1">Capture Lead</p>
              <p className="text-xs text-gold font-mono mt-2 tracking-[0.15em] uppercase">
                PhD Cybersecurity · Retired Army
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Target Agencies */}
      <div className="mb-14">
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-5">
          Federal Target Agencies
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {federalAgencies.map((a) => (
            <ExpandableCard
              key={a.id}
              title={a.name}
              subtitle={a.focus}
              badge={a.short}
              variant="gold"
            >
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">
                    Contract Vehicles
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {a.vehicles.map((v) => (
                      <span
                        key={v}
                        className="px-2 py-1 rounded-md bg-gold/5 border border-gold/20 text-xs text-gold"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-white/5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">
                    Approach
                  </p>
                  <p className="text-sm">{a.approach}</p>
                </div>
              </div>
            </ExpandableCard>
          ))}
        </div>
      </div>

      {/* Contract Vehicles */}
      <div className="mb-14">
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-5">
          Contract Vehicles &amp; Strategy
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contractVehicles.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-gold rounded-xl p-5"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="font-semibold text-white">{v.name}</h4>
                <span
                  className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.18em] rounded border ${statusStyle[v.status]}`}
                >
                  {v.status}
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{v.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FedRAMP Alignment */}
      <div className="mb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-2xl p-7 lg:p-9 overflow-hidden border-gold/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-accent/5 pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 flex flex-col items-start">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-deep text-navy-900 mb-4 shadow-[0_0_30px_rgba(245,181,68,0.3)]">
                <Award className="h-8 w-8" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white leading-tight mb-2">
                FedRAMP Alignment
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Architected from day one to satisfy FISMA, FedRAMP Moderate, and NIST 800-53
                control families.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
              {fedRampPillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl bg-white/[0.02] border border-white/5 p-4"
                >
                  <h4 className="text-sm font-semibold text-gold mb-1.5">{p.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Federal GTM motion */}
      <div>
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-5">
          Federal GTM Motion
        </h3>
        <ol className="relative border-l border-gold/20 ml-3 space-y-6">
          {federalGTMSteps.map((s, i) => (
            <motion.li
              key={s.step}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="ml-6 relative"
            >
              <span className="absolute -left-[34px] top-0 flex items-center justify-center w-7 h-7 rounded-full bg-navy-700 border border-gold/40 text-gold font-mono text-xs">
                {s.step}
              </span>
              <h4 className="font-semibold text-white mb-1">{s.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{s.detail}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Crosshair, label: 'Capture Discipline', detail: 'Pre-RFP shaping via Synergy BD network.' },
            { icon: Users, label: 'Joint Past Performance', detail: 'Every task order builds the JV file.' },
            { icon: ShieldCheck, label: 'Compliance-Native', detail: 'Tech stack already aligned to ATO requirements.' },
          ].map(({ icon: Icon, label, detail }) => (
            <div key={label} className="glass-gold rounded-xl p-5 flex items-start gap-3">
              <Icon className="h-5 w-5 mt-0.5 text-gold flex-shrink-0" />
              <div>
                <p className="font-semibold text-white text-sm">{label}</p>
                <p className="text-xs text-slate-400 mt-1">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
