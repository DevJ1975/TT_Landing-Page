'use client';

import { motion } from 'framer-motion';
import { ImageOff } from 'lucide-react';
import { useState } from 'react';
import type { IndustryPhoto } from '@/data/industry-photos';

type Props = {
  photo: IndustryPhoto;
  /** Tailwind aspect ratio class (e.g. "aspect-[4/3]"). Defaults to 4/3. */
  aspect?: string;
  /** Render the caption block beneath the image. */
  showCaption?: boolean;
  /** Optional tint overlay color — null disables the overlay. */
  tint?: 'navy' | 'gold' | 'rose' | null;
  className?: string;
  delay?: number;
};

const tints: Record<NonNullable<Props['tint']>, string> = {
  navy: 'bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent',
  gold: 'bg-gradient-to-t from-amber-900/70 via-transparent to-transparent',
  rose: 'bg-gradient-to-t from-rose-950/80 via-transparent to-transparent',
};

const placeholderTints: Record<NonNullable<Props['tint']>, string> = {
  navy: 'bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900',
  gold: 'bg-gradient-to-br from-amber-900/60 via-navy-800 to-navy-900',
  rose: 'bg-gradient-to-br from-rose-950 via-navy-800 to-navy-900',
};

/**
 * Inline color photograph for use as a visual accent within a section.
 * Saturated by default (no grayscale), with a soft bottom-fade tint so any
 * caption sitting on top stays legible.
 *
 * If the image fails to load (404, blocked CDN, missing local asset), the
 * component swaps to a labeled placeholder instead of showing a broken icon.
 */
export default function IndustrialPhoto({
  photo,
  aspect = 'aspect-[4/3]',
  showCaption = true,
  tint = 'navy',
  className = '',
  delay = 0,
}: Props) {
  const [errored, setErrored] = useState(false);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-xl border border-white/10 ${className}`}
    >
      <div className={`relative ${aspect} w-full overflow-hidden`}>
        {errored ? (
          /* Graceful placeholder when the image fails to load. */
          <div
            className={`absolute inset-0 ${placeholderTints[tint ?? 'navy']} flex flex-col items-center justify-center p-5 text-center`}
          >
            <div className="absolute inset-0 grid-bg-fine opacity-30 pointer-events-none" />
            <div className="relative">
              <div className="mx-auto mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                <ImageOff className="h-4 w-4" />
              </div>
              <p className="font-display text-sm md:text-base font-semibold text-white leading-tight">
                {photo.label}
              </p>
              {photo.caption && (
                <p className="mt-1 text-[11px] text-slate-300/90 leading-snug">
                  {photo.caption}
                </p>
              )}
              <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500">
                Drop image at /public{photo.src}
              </p>
            </div>
          </div>
        ) : (
          <>
            <img
              src={photo.src}
              alt={photo.label}
              loading="lazy"
              decoding="async"
              onError={() => setErrored(true)}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: photo.position ?? 'center' }}
            />
            {tint && (
              <div className={`absolute inset-0 ${tints[tint]} pointer-events-none`} />
            )}
            {showCaption && (
              <figcaption className="absolute inset-x-0 bottom-0 p-4 z-10">
                <p className="font-display text-sm md:text-base font-semibold text-white leading-tight drop-shadow">
                  {photo.label}
                </p>
                {photo.caption && (
                  <p className="mt-1 text-[11px] text-slate-200/90 leading-snug">
                    {photo.caption}
                  </p>
                )}
              </figcaption>
            )}
          </>
        )}
      </div>
    </motion.figure>
  );
}
