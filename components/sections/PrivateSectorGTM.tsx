'use client';

import { motion } from 'framer-motion';
import { Building2, Plane, Truck, HardHat, Target, Zap } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ExpandableCard from '@/components/ui/ExpandableCard';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import {
  privateVerticals,
  gtmSteps,
  pricingTiers,
  privateMetrics,
} from '@/data/gtm-private';
import { backdrops } from '@/data/backgrounds';

const verticalIcons: Record<string, typeof Building2> = {
  manufacturing: Building2,
  aviation: Plane,
  logistics: Truck,
  construction: HardHat,
};

export default function PrivateSectorGTM() {
  return (
    <SectionWrapper
      id="private-gtm"
      number="03"
      eyebrow="Private Sector GTM"
      title={
        <>
          Targeting the{' '}
          <span className="text-gradient">$6B+ EHS &amp; Compliance Training</span> market.
        </>
      }
      description="Soteria enters the enterprise via the relationship Trainovate already owns: safety consulting and OSHA training. Every consulting engagement is also a Soteria discovery call."
      backdrop={backdrops.privateGtm}
    >
      {/* Verticals */}
      <div className="mb-16">
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-5">
          Target Verticals
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {privateVerticals.map((v) => {
            const Icon = verticalIcons[v.id] ?? Building2;
            return (
              <ExpandableCard
                key={v.id}
                title={v.name}
                subtitle={`Pipeline: ${v.pipeline}`}
                badge={`ACV ${v.potential.split(' ').slice(-1)[0]}`}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                    <p>{v.description}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-white/5">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">
                        Buyer Contacts
                      </p>
                      <p className="text-sm">{v.contacts}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">
                        Revenue Potential
                      </p>
                      <p className="text-sm text-accent font-medium">{v.potential}</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">
                      Strategy
                    </p>
                    <p className="text-sm">{v.strategy}</p>
                  </div>
                </div>
              </ExpandableCard>
            );
          })}
        </div>
      </div>

      {/* GTM motion */}
      <div className="mb-16">
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-5">
          GTM Motion
        </h3>
        <div className="relative">
          <div className="hidden md:block absolute top-7 left-7 right-7 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {gtmSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative glass rounded-xl p-5"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 border border-accent/40 text-accent mx-auto mb-4 relative z-10">
                  <span className="font-display font-bold text-xl">{s.step}</span>
                </div>
                <h4 className="font-semibold text-white text-center mb-2 leading-tight">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed text-center">{s.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-16">
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-5">
          Pricing Model
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricingTiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                {i === 0 && <Target className="h-4 w-4 text-accent" />}
                {i === 1 && <Building2 className="h-4 w-4 text-accent" />}
                {i === 2 && <Zap className="h-4 w-4 text-accent" />}
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  Tier {i + 1}
                </span>
              </div>
              <h4 className="font-display text-xl font-semibold text-white mb-2">{t.name}</h4>
              <p className="text-sm text-slate-300 mb-3 leading-relaxed">{t.blurb}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{t.highlight}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Market metrics */}
      <div>
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-5">
          Market &amp; Pipeline
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {privateMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-7 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
              <div className="relative">
                <div className="font-display text-5xl md:text-6xl font-bold text-gradient mb-2">
                  <AnimatedCounter
                    value={m.value}
                    prefix={m.prefix}
                    suffix={m.suffix}
                    decimals={
                      m.value === 6.8 ? 1 : 0
                    }
                  />
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{m.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
