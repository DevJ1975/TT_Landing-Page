'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Handshake,
  Shield,
  TrendingUp,
  Building,
  Mail,
  Globe,
  Linkedin,
  Calendar,
} from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { backdrops } from '@/data/backgrounds';

type TabId = 'strategic' | 'federal' | 'investor' | 'enterprise';

const tabs: {
  id: TabId;
  label: string;
  icon: typeof Handshake;
  headline: string;
  bullets: string[];
}[] = [
  {
    id: 'strategic',
    label: 'Strategic Partner',
    icon: Handshake,
    headline: 'Co-sell, channel referrals, and platform integration.',
    bullets: [
      'Co-marketing into safety-consulting and EHS-services accounts.',
      'Integration with HRIS, EHS-software, and incident-management vendors.',
      'Revenue share on referred enterprise accounts.',
    ],
  },
  {
    id: 'federal',
    label: 'Federal Teaming Partner',
    icon: Shield,
    headline: 'JV / teaming on SDVOSB and small-business set-asides.',
    bullets: [
      'Joint pursuits on VA, DoD, and civilian agency workforce-training requirements.',
      'Soteria as a workforce-modernization platform on IDIQ task orders.',
      'Past-performance file sharing across the JV.',
    ],
  },
  {
    id: 'investor',
    label: 'Investor',
    icon: TrendingUp,
    headline: 'Pre-seed / seed conversation for 2027.',
    bullets: [
      'Bootstrapped to first revenue; raise targeted to accelerate go-to-market.',
      'Capital deployed into product engineering, federal capture, and sales hires.',
      'Clear milestones: anchor enterprise client, first federal award, FedRAMP path.',
    ],
  },
  {
    id: 'enterprise',
    label: 'Enterprise Client',
    icon: Building,
    headline: 'Pilot Soteria in one facility — see the impact in 30 days.',
    bullets: [
      '30-day onboarding in a single department or facility.',
      'Migrate priority OSHA / GMP / safety courses; configure role-based permissions; train administrators.',
      'Before/after compliance metrics measured against your current baseline.',
    ],
  },
];

export default function Partnership() {
  const [active, setActive] = useState<TabId>('strategic');
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <SectionWrapper
      id="partnership"
      number="08"
      eyebrow="Partnership Opportunity"
      title={
        <>
          Pick your lane. <span className="text-gradient">Let's build.</span>
        </>
      }
      description="Whether you're a strategic platform, a federal teaming partner, an investor, or an enterprise looking for a pilot — here is the specific shape of the conversation we want to have with you."
      backdrop={backdrops.partnership}
    >
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((t) => {
          const isActive = active === t.id;
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                isActive
                  ? 'bg-accent/15 border-accent/50 text-white shadow-[0_0_20px_rgba(56,189,248,0.15)]'
                  : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-accent/30 hover:text-slate-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Tab content */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-7 lg:p-9 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                    <tab.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                    {tab.label}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  {tab.headline}
                </h3>
                <ul className="space-y-3">
                  {tab.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-slate-200 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contact card */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-7 h-full flex flex-col"
          >
            <div className="mb-6">
              <span className="font-display text-3xl font-bold text-white tracking-tight">
                TRAINOVATE
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent mt-1">
                Technologies
              </span>
            </div>

            <div className="space-y-4 flex-1">
              <div>
                <p className="text-sm text-slate-400 mb-1">Founder, CEO</p>
                <p className="font-display text-xl font-semibold text-white">Jamil Jones</p>
              </div>

              <ul className="space-y-3 pt-2 border-t border-white/5">
                <li>
                  <a
                    href="mailto:jamil@trainovate.com"
                    className="flex items-center gap-3 text-sm text-slate-200 hover:text-accent transition-colors group"
                  >
                    <Mail className="h-4 w-4 text-accent" />
                    <span className="border-b border-transparent group-hover:border-accent">
                      jamil@trainovate.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://trainovate.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-200 hover:text-accent transition-colors group"
                  >
                    <Globe className="h-4 w-4 text-accent" />
                    <span className="border-b border-transparent group-hover:border-accent">
                      trainovate.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/trainovate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-200 hover:text-accent transition-colors group"
                  >
                    <Linkedin className="h-4 w-4 text-accent" />
                    <span className="border-b border-transparent group-hover:border-accent">
                      LinkedIn
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://calendly.com/trainovate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-200 hover:text-accent transition-colors group"
                  >
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="border-b border-transparent group-hover:border-accent">
                      Book a call
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-md bg-gold/10 border border-gold/30 text-gold font-mono text-[10px] uppercase tracking-[0.2em]">
                SDVOSB
              </span>
              <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] uppercase tracking-[0.2em]">
                Veteran-Founded
              </span>
              <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px] uppercase tracking-[0.2em]">
                FedRAMP-Aligned
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Final tagline */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-20 text-center relative"
      >
        <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />
        <div className="relative">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
            Closing Note
          </span>
          <p className="mt-6 font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            <span className="text-gradient">The workforce of tomorrow</span>
            <br />
            trains on Soteria.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-accent/40" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-slate-500">
              TRAINOVATE TECHNOLOGIES · 2026
            </span>
            <span className="h-px w-16 bg-accent/40" />
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
