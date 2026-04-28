'use client';

/**
 * IndustrialBackdrop renders a real industrial photograph as a section
 * background, desaturated to black-and-white and dimmed to ~40% opacity
 * so foreground copy stays legible against the navy theme.
 *
 * Visual recipe:
 *   - position: absolute, inset-0, behind content (z-0)
 *   - object-cover so the image fills the section
 *   - filter: grayscale + contrast bump + brightness reduction
 *   - opacity: 0.4 (40%) per spec
 *   - top + bottom dark gradients soften the edge into adjacent sections
 */

type Props = {
  src: string;
  alt?: string;
  /** 0–1; defaults to 0.4 (40%) per the brief. */
  opacity?: number;
  /** Tint color cast at the bottom edge. Defaults to navy. */
  variant?: 'navy' | 'gold';
  /** Position the focal point of the photo (object-position). */
  position?: string;
};

export default function IndustrialBackdrop({
  src,
  alt = '',
  opacity = 0.4,
  variant = 'navy',
  position = 'center',
}: Props) {
  const fadeColor = variant === 'gold' ? 'rgba(36, 24, 8, 0.95)' : 'rgba(10, 15, 30, 0.95)';

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden -z-0"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          opacity,
          filter: 'grayscale(1) contrast(1.05) brightness(0.85)',
          objectPosition: position,
        }}
      />
      {/* Top + bottom fade so the photo blends into adjacent sections */}
      <div
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background: `linear-gradient(to bottom, ${fadeColor}, transparent)`,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background: `linear-gradient(to top, ${fadeColor}, transparent)`,
        }}
      />
      {/* Subtle vignette to keep center copy crisper */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(7,11,25,0.55) 100%)',
        }}
      />
    </div>
  );
}
