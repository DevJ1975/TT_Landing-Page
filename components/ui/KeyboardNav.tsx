'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Keyboard, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { sections } from '@/data/sections';

/**
 * Global keyboard navigation. Arrow / J K / Home / End / Esc / "?" let
 * desk-bound demo viewers move through the deck without touching the
 * mouse. The "?" key opens a small help overlay listing the bindings.
 *
 * No-ops when the active element is an input / textarea / contenteditable
 * so it never steals keystrokes from the ROI calculator sliders or AI
 * prompt picker.
 */
export default function KeyboardNav() {
  const [showHelp, setShowHelp] = useState(false);
  const activeIdRef = useRef<string>(sections[0]?.id ?? 'hero');
  const visibility = useRef<Map<string, number>>(new Map());

  // Track which section is currently most-visible (mirrors SideNav's logic).
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            visibility.current.set(entry.target.id, entry.intersectionRatio);
          }
          let bestId = activeIdRef.current;
          let bestRatio = -1;
          for (const [id, ratio] of visibility.current.entries()) {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestId = id;
            }
          }
          if (bestRatio > 0) activeIdRef.current = bestId;
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
  }, []);

  const jumpTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const next = useCallback(() => {
    const idx = sections.findIndex((s) => s.id === activeIdRef.current);
    if (idx === -1 || idx >= sections.length - 1) return;
    jumpTo(sections[idx + 1].id);
  }, [jumpTo]);

  const prev = useCallback(() => {
    const idx = sections.findIndex((s) => s.id === activeIdRef.current);
    if (idx <= 0) return;
    jumpTo(sections[idx - 1].id);
  }, [jumpTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Don't hijack typing in inputs / textareas / contenteditable / range sliders.
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === 'INPUT' ||
          t.tagName === 'TEXTAREA' ||
          t.tagName === 'SELECT' ||
          t.isContentEditable)
      ) {
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'j':
        case 'J':
          e.preventDefault();
          next();
          break;
        case 'ArrowUp':
        case 'k':
        case 'K':
          e.preventDefault();
          prev();
          break;
        case 'Home':
          e.preventDefault();
          jumpTo(sections[0].id);
          break;
        case 'End':
          e.preventDefault();
          jumpTo(sections[sections.length - 1].id);
          break;
        case '?':
          e.preventDefault();
          setShowHelp((s) => !s);
          break;
        case 'Escape':
          if (showHelp) {
            e.preventDefault();
            setShowHelp(false);
          }
          break;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev, jumpTo, showHelp]);

  return (
    <>
      {/* Discreet "?" hint button in the corner */}
      <button
        type="button"
        onClick={() => setShowHelp((s) => !s)}
        aria-label="Keyboard shortcuts"
        className="hidden md:flex fixed bottom-6 left-6 z-30 items-center justify-center w-9 h-9 rounded-full glass border border-white/10 text-slate-400 hover:text-accent hover:border-accent/40 transition-colors"
      >
        <Keyboard className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {showHelp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 bg-navy-900/60 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setShowHelp(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="kbd-help-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass rounded-2xl p-7 max-w-md w-full border border-accent/20"
            >
              <button
                type="button"
                onClick={() => setShowHelp(false)}
                aria-label="Close"
                className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                  <Keyboard className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                    Keyboard Shortcuts
                  </p>
                  <h3 id="kbd-help-title" className="font-display text-xl font-bold text-white">
                    Drive the deck without a mouse
                  </h3>
                </div>
              </div>

              <ul className="space-y-2.5">
                {[
                  { keys: ['↓', 'J'], action: 'Next section' },
                  { keys: ['↑', 'K'], action: 'Previous section' },
                  { keys: ['Home'], action: 'Jump to overview' },
                  { keys: ['End'], action: 'Jump to partnership' },
                  { keys: ['?'], action: 'Toggle this help' },
                  { keys: ['Esc'], action: 'Close this overlay' },
                ].map((row) => (
                  <li
                    key={row.action}
                    className="flex items-center justify-between gap-4 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/5"
                  >
                    <span className="text-sm text-slate-200">{row.action}</span>
                    <span className="flex gap-1.5">
                      {row.keys.map((k) => (
                        <kbd
                          key={k}
                          className="px-2 py-0.5 min-w-[28px] text-center rounded bg-navy-700 border border-white/10 text-[11px] font-mono text-slate-200"
                        >
                          {k}
                        </kbd>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-[11px] text-slate-500 leading-relaxed">
                Tip: shortcuts are disabled while you're typing into an input — feel free to
                play with the ROI calculator sliders without losing your place.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
