'use client';

import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

type Props = {
  /** Vimeo numeric video ID. */
  videoId: string;
  /** Optional Vimeo privacy hash (the `?h=...` value). */
  hash?: string;
  /** Accessible title for the iframe. */
  title: string;
  /** Eyebrow above the video frame, e.g. "Watch the LMS in action". */
  eyebrow?: string;
  /** Caption beneath the video frame. */
  caption?: string;
  /** Aspect ratio class — defaults to 16:9. */
  aspect?: string;
};

/**
 * Reusable Vimeo embed styled to match the deck. Lazy-loaded; tracking
 * disabled (dnt=1); player chrome stripped (no title / byline / portrait).
 */
export default function VimeoEmbed({
  videoId,
  hash,
  title,
  eyebrow,
  caption,
  aspect = 'aspect-video',
}: Props) {
  const params = new URLSearchParams({
    title: '0',
    byline: '0',
    portrait: '0',
    dnt: '1',
    color: '38BDF8',
    transparent: '1',
  });
  if (hash) params.set('h', hash);
  const src = `https://player.vimeo.com/video/${encodeURIComponent(videoId)}?${params.toString()}`;

  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] uppercase tracking-[0.25em]">
            <PlayCircle className="h-3 w-3" />
            {eyebrow}
          </span>
        </div>
      )}

      <div
        className={`relative ${aspect} w-full rounded-2xl overflow-hidden glass border-accent/30 shadow-[0_20px_60px_rgba(7,11,25,0.55)]`}
      >
        {/* Decorative glow corners */}
        <div className="absolute -top-12 -left-12 h-40 w-40 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-accent-deep/15 blur-3xl pointer-events-none" />

        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>

      {caption && (
        <figcaption className="mt-3 text-xs text-slate-400 leading-relaxed max-w-2xl">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
