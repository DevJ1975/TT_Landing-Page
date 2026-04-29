# /public/industry/ — Drop-in Industry Photos

The presentation references local image paths from this folder (and falls
back to a labeled placeholder if a file is missing). Drop a JPG / WebP at
the indicated filename and it will appear in the deck on the next reload.

| Filename                  | Used in                              | Subject                                                       |
|---------------------------|--------------------------------------|---------------------------------------------------------------|
| `offshore-rig.jpg`        | SIMOPS section · "Where SIMOPS Lives" | A Gulf-of-Mexico-style **offshore production platform**        |
| `land-rig.jpg`            | SIMOPS section · "Where SIMOPS Lives" | An **onshore land drilling rig** (oil derrick)                |

Recommended specs:
- **Aspect ratio** ~ 16:9
- **Width** ≥ 1600 px (will be scaled down)
- **Format** `.jpg` (preferred) or `.webp`
- **Color** — saturated, daylight or sunset is fine; avoid heavy filters

Other industry photos in the deck (manufacturing, aviation, logistics,
construction, VA / DoD / Capitol, workforce, iPad-in-field) are still hot-
linked from Unsplash. Swap any of those to local files by editing
`/data/industry-photos.ts` to point at `/industry/<filename>.jpg` instead
of the Unsplash CDN URL.
