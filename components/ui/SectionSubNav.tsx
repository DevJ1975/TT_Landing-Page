'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export type SubNavItem = {
  id: string;
  label: string;
  /** Optional surface tag — used to color-code the chip group. */
  surface?: 'lms' | 'ai' | 'field';
};

type Props = {
  /** ID of the parent section the sub-nav belongs to (e.g. "product"). */
  parentId: string;
  items: SubNavItem[];
};

const surfaceTone: Record<NonNullable<SubNavItem['surface']>, string> = {
  lms: 'after:bg-accent',
  ai: 'after:bg-gradient-to-r after:from-accent after:to-accent-glow',
  field: 'after:bg-accent',
};

/**
 * Sticky sub-nav that only appears while the visitor is reading the
 * parent section. Shows the sub-blocks of a long section and which one
 * is currently in view so they don't get lost.
 */
export default function SectionSubNav({ parentId, items }: Props) {
  const [isInParent, setIsInParent] = useState(false);
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '');

  // Track whether the parent section is in view (controls visibility).
  useEffect(() => {
    const el = document.getElementById(parentId);
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInParent(entry.intersectionRatio > 0),
      { threshold: [0, 0.05, 0.1] },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [parentId]);

  // Track which sub-block is currently the most-visible one.
  useEffect(() => {
    if (!items.length) return;
    const visibility = new Map<string, number>();
    const observers: IntersectionObserver[] = [];

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            visibility.set(entry.target.id, entry.intersectionRatio);
          }
          let bestId = activeId;
          let bestRatio = -1;
          for (const [id, ratio] of visibility.entries()) {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestId = id;
            }
          }
          if (bestRatio > 0) setActiveId(bestId);
        },
        {
          threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
          rootMargin: '-25% 0px -55% 0px',
        },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.map((i) => i.id).join(',')]);

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <AnimatePresence>
      {isInParent && (
        <motion.nav
          aria-label="Section sub-navigation"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed left-1/2 top-3 -translate-x-1/2 z-30 hidden md:block"
        >
          <div className="flex items-center gap-1 px-2 py-1.5 rounded-full glass shadow-[0_8px_30px_rgba(7,11,25,0.55)] border border-white/10 backdrop-blur-xl">
            {items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => jumpTo(item.id)}
                  className={`relative px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide transition-all whitespace-nowrap after:absolute after:inset-x-3 after:bottom-0.5 after:h-[2px] after:rounded-full after:opacity-0 ${
                    item.surface ? surfaceTone[item.surface] : 'after:bg-accent'
                  } ${
                    isActive
                      ? 'bg-white/8 text-white after:opacity-100'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/4'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
