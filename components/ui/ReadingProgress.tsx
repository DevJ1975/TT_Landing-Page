'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Slim accent line at the very top of the viewport that fills as the
 * visitor scrolls through the deck. Spring-smoothed for a tactile feel.
 */
export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-50 origin-left h-[2.5px] bg-gradient-to-r from-accent-deep via-accent to-accent-glow shadow-[0_0_12px_rgba(56,189,248,0.6)]"
    />
  );
}
