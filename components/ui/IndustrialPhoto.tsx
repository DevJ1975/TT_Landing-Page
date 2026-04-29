'use client';

import { motion } from 'framer-motion';
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

/**
 * Inline color photograph for use as a visual accent within a section.
 * Saturated by default (no grayscale), with a soft bottom-fade tint so any
 * caption sitting on top stays legible.
 */
export default function IndustrialPhoto({
  photo,
  aspect = 'aspect-[4/3]',
  showCaption = true,
  tint = 'navy',
  className = '',
  delay = 0,
}: Props) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-xl border border-white/10 ${className}`}
    >
      <div className={`relative ${aspect} w-full overflow-hidden`}>
        <img
          src={photo.src}
          alt={photo.label}
          loading="lazy"
          decoding="async"
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
      </div>
    </motion.figure>
  );
}
