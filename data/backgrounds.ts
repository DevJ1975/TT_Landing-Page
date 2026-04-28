/**
 * Industrial backdrop image sources.
 *
 * These are direct Unsplash CDN URLs — they hotlink legally under Unsplash's
 * license (https://unsplash.com/license). At runtime the visitor's browser
 * fetches each image and `IndustrialBackdrop` desaturates + dims it to ~40%
 * opacity so foreground copy stays readable.
 *
 * To self-host instead (e.g. fully-offline Bluehost deployment):
 *   1. Drop a JPG/WebP into `public/bg/<name>.jpg`
 *   2. Replace the `src` here with `/bg/<name>.jpg`
 *   3. Optional: keep the Unsplash URL in `fallback` as a network backup
 */

export type BackdropKey =
  | 'hero'
  | 'product'
  | 'field'
  | 'privateGtm'
  | 'federalGtm'
  | 'roadmap'
  | 'team'
  | 'partnership';

export const backdrops: Record<BackdropKey, string> = {
  // Industrial control room / command center vibe
  hero: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=70',
  // Manufacturing line / production floor
  product:
    'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2400&q=70',
  // Heavy machinery / energy isolation imagery for the LOTO module
  field:
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2400&q=70',
  // Warehouse / distribution center
  privateGtm:
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=70',
  // Aerospace hangar / military hardware
  federalGtm:
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=70',
  // Construction / scaffold / roadmap-feel
  roadmap:
    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=2400&q=70',
  // Workforce / crew on shop floor
  team: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2400&q=70',
  // Industrial twilight / horizon — closer
  partnership:
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2400&q=70',
};
