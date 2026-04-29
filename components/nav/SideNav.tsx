'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Menu, X } from 'lucide-react';
import { sections } from '@/data/sections';

export default function SideNav() {
  const [active, setActive] = useState<string>('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibility = new Map<string, number>();

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            visibility.set(entry.target.id, entry.intersectionRatio);
          }
          let bestId = active;
          let bestRatio = -1;
          for (const [id, ratio] of visibility.entries()) {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestId = id;
            }
          }
          if (bestRatio > 0) setActive(bestId);
        },
        {
          threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
          rootMargin: '-20% 0px -40% 0px',
        },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop side nav — collapses to dots+icon, expands on hover */}
      <nav
        aria-label="Section navigation"
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-1 group/nav"
      >
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="flex items-center gap-3 py-1.5 pr-3 text-left"
              aria-current={isActive ? 'true' : undefined}
            >
              <span className="relative flex items-center justify-center w-6 h-6 flex-shrink-0">
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'h-2.5 w-2.5 bg-accent shadow-[0_0_12px_rgba(56,189,248,0.8)]'
                      : 'h-1.5 w-1.5 bg-slate-600 group-hover/nav:bg-slate-400'
                  }`}
                />
              </span>
              {/* Label slides in when nav group is hovered */}
              <span
                className={`grid transition-all duration-300 ${
                  isActive
                    ? 'grid-cols-[1fr] opacity-100'
                    : 'grid-cols-[0fr] opacity-0 group-hover/nav:grid-cols-[1fr] group-hover/nav:opacity-100'
                }`}
              >
                <span
                  className={`overflow-hidden whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {s.number} · {s.label}
                </span>
              </span>
            </button>
          );
        })}

        {/* Persistent CTA — icon only by default, text rolls out on nav hover */}
        <button
          type="button"
          onClick={() => scrollTo('partnership')}
          className="mt-4 ml-1 flex items-center gap-0 group-hover/nav:gap-2 px-2 group-hover/nav:px-3 py-2 rounded-full bg-accent text-navy-900 font-semibold text-xs shadow-[0_0_18px_rgba(56,189,248,0.45)] hover:bg-accent-glow transition-all duration-300"
        >
          <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
          {/* Text expands using the grid-cols trick */}
          <span className="grid grid-cols-[0fr] group-hover/nav:grid-cols-[1fr] transition-all duration-300">
            <span className="overflow-hidden whitespace-nowrap">Book a call</span>
          </span>
        </button>
      </nav>

      {/* Mobile top bar + drawer */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-40 px-4 pt-4">
        <div className="flex items-center justify-between glass rounded-full px-4 py-2.5">
          <span className="font-display font-bold tracking-wide text-white text-sm">
            SOTERIA
          </span>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="text-slate-200"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-[68px] inset-x-4 z-40 glass rounded-2xl p-3"
          >
            <ul className="space-y-1">
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id}>
                    <button
                      onClick={() => scrollTo(s.id)}
                      className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        isActive ? 'bg-accent/10 text-accent' : 'text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      <span className="font-mono text-[10px] tracking-[0.2em] opacity-70">
                        {s.number}
                      </span>
                      <span className="text-sm font-medium">{s.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Persistent CTA in mobile drawer */}
            <button
              type="button"
              onClick={() => scrollTo('partnership')}
              className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-navy-900 font-semibold text-sm shadow-[0_0_18px_rgba(56,189,248,0.45)] hover:bg-accent-glow transition-colors"
            >
              <Calendar className="h-4 w-4" />
              <span>Book a call</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
