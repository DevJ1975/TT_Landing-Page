'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { featurePillars, techStack } from '@/data/features';
import { useState } from 'react';

export default function ProductOverview() {
  const [hoverId, setHoverId] = useState<string | null>(null);

  return (
    <SectionWrapper
      id="product"
      number="02"
      eyebrow="What is Soteria?"
      title={
        <>
          A workforce learning OS — from{' '}
          <span className="text-gradient">SCORM player to FedRAMP boundary,</span> in one
          codebase.
        </>
      }
      description="Six pillars define what Soteria does and who it's for. Hover any card to expand the detail panel."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featurePillars.map((p, i) => {
          const Icon = p.icon;
          const isGold = p.accent === 'gold';
          const isHover = hoverId === p.id;
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onMouseEnter={() => setHoverId(p.id)}
              onMouseLeave={() => setHoverId(null)}
              onFocus={() => setHoverId(p.id)}
              onBlur={() => setHoverId(null)}
              tabIndex={0}
              className={`group relative glass rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                isGold ? 'hover:border-gold/40' : 'hover:border-accent/40'
              } ${isHover ? 'lg:scale-[1.02]' : ''}`}
            >
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                  isGold
                    ? 'bg-gradient-to-br from-gold/5 to-transparent'
                    : 'bg-gradient-to-br from-accent/8 to-transparent'
                }`}
              />
              <div className="relative">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${
                    isGold
                      ? 'bg-gold/10 border border-gold/30 text-gold'
                      : 'bg-accent/10 border border-accent/30 text-accent'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2 leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-400">{p.short}</p>

                <motion.div
                  initial={false}
                  animate={{
                    height: isHover ? 'auto' : 0,
                    opacity: isHover ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-white/5 text-sm text-slate-300 leading-relaxed">
                    {p.detail}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Tech stack badges */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 flex flex-col items-center"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-4">
          Built On
        </span>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {techStack.map((t) => (
            <span
              key={t}
              className="px-4 py-2 rounded-full glass text-sm font-medium text-slate-200 hover:border-accent/40 hover:text-accent transition-all"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
