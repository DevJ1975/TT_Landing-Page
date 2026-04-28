'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  id: string;
  number: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  variant?: 'blue' | 'gold';
  className?: string;
};

export default function SectionWrapper({
  id,
  number,
  eyebrow,
  title,
  description,
  children,
  variant = 'blue',
  className = '',
}: Props) {
  const accentColor =
    variant === 'gold' ? 'text-gold' : 'text-accent';
  const accentDot =
    variant === 'gold' ? 'bg-gold' : 'bg-accent';

  return (
    <section
      id={id}
      className={`relative w-full px-6 py-24 md:py-32 lg:px-12 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className={`font-mono text-xs tracking-[0.2em] ${accentColor}`}>
              {number}
            </span>
            <span className={`h-1 w-1 rounded-full ${accentDot}`} />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-6 max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
