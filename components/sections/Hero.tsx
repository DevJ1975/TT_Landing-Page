'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ShieldCheck, Star } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import IndustrialBackdrop from '@/components/ui/IndustrialBackdrop';
import { backdrops } from '@/data/backgrounds';

export default function Hero() {
  const scrollNext = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative isolate min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Industrial command-center photograph (B&W, 40% opacity) */}
      <IndustrialBackdrop src={backdrops.hero} opacity={0.4} />

      {/* Animated grid (over the photo, under content) */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 grid-bg-fine opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_60%)]" />

      {/* Radar sweep — slow horizontal beam crosses the grid like a command-center scope */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 w-[28vw] pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(56,189,248,0.10) 50%, transparent)',
        }}
        animate={{ x: ['-30vw', '130vw'] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 1.5,
        }}
      />

      {/* Glow orbs */}
      <motion.div
        aria-hidden
        className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent-deep/20 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Particle dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 28 }).map((_, i) => {
          const top = (i * 37) % 100;
          const left = (i * 53) % 100;
          const delay = (i % 7) * 0.4;
          const dur = 4 + (i % 5);
          return (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-accent/60"
              style={{ top: `${top}%`, left: `${left}%` }}
              animate={{ opacity: [0.1, 0.7, 0.1], scale: [0.6, 1.2, 0.6] }}
              transition={{ duration: dur, repeat: Infinity, delay, ease: 'easeInOut' }}
            />
          );
        })}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <Badge variant="neutral">
            <ShieldCheck className="h-3 w-3" />
            FedRAMP-Aligned
          </Badge>
          <Badge variant="gold">
            <Star className="h-3 w-3" />
            SDVOSB · Veteran-Founded
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-[14vw] sm:text-[12vw] md:text-9xl lg:text-[10rem] leading-[0.95] tracking-tight"
        >
          <span className="text-gradient">SOTERIA</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-4 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-accent/60" />
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.4em] text-accent">
            Train Smarter · Comply Faster · Perform Better
          </span>
          <span className="h-px w-10 bg-accent/60" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-10 mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed"
        >
          The Workforce Learning OS built for{' '}
          <span className="text-white font-medium">high-risk industries</span> and the{' '}
          <span className="text-gold font-medium">federal marketplace.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-slate-400"
        >
          <span>Trainovate Technologies</span>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <span>SDVOSB</span>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <span>Veteran-Founded</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollNext}
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-accent transition-colors"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-full border border-slate-600 p-1.5"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
