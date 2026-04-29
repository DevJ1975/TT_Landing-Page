/**
 * Industry color photographs used as inline visual accents throughout the
 * presentation. Hot-linked from the Unsplash CDN under the Unsplash license
 * (https://unsplash.com/license) — visitor's browser fetches each at runtime.
 *
 * To self-host, drop a JPG/WebP in /public/industry/<id>.jpg and replace the
 * `src` URL with /industry/<id>.jpg.
 */

export type IndustryPhoto = {
  id: string;
  src: string;
  label: string;
  caption?: string;
  position?: string;
};

export const industryPhotos: Record<string, IndustryPhoto> = {
  manufacturing: {
    id: 'manufacturing',
    src: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=70',
    label: 'Manufacturing & Food Production',
    caption: 'High-volume production lines · OSHA / GMP / food safety',
  },
  aviation: {
    id: 'aviation',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=70',
    label: 'Aviation & Aerospace MRO',
    caption: 'Hangar-floor training · technician credentialing',
  },
  logistics: {
    id: 'logistics',
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=70',
    label: 'Logistics & Distribution',
    caption: 'DC and 3PL operations · forklift recertification',
  },
  construction: {
    id: 'construction',
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=70',
    label: 'Construction & Industrial Services',
    caption: 'Crew briefings · digital toolbox-talk delivery',
  },
  // Gulf of Mexico production rig.
  // Local path: drop a JPG/WebP at /public/industry/offshore-rig.jpg.
  // If the file is missing the IndustrialPhoto component will show a
  // labeled placeholder with the icon + caption instead of a broken image.
  offshore: {
    id: 'offshore',
    src: '/industry/offshore-rig.jpg',
    label: 'Gulf of Mexico Production Rig',
    caption: 'Offshore production platform · where SIMOPS coordination is life-critical',
  },
  // Onshore land drilling rig (oil derrick).
  // Local path: drop a JPG/WebP at /public/industry/land-rig.jpg.
  refinery: {
    id: 'refinery',
    src: '/industry/land-rig.jpg',
    label: 'Onshore Land Drilling Rig',
    caption: 'Permian / Bakken-style drilling operations · PSM-regulated work',
  },
  capitol: {
    id: 'capitol',
    src: 'https://images.unsplash.com/photo-1569236815775-9b43f2d7e8e4?auto=format&fit=crop&w=1200&q=70',
    label: 'Federal Civilian Agencies',
    caption: 'GSA · DOL · DHS components',
  },
  va: {
    id: 'va',
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=70',
    label: 'Department of Veterans Affairs',
    caption: 'Workforce training across VAMCs and CBOCs',
  },
  dod: {
    id: 'dod',
    src: 'https://images.unsplash.com/photo-1549477648-06f04c84ff40?auto=format&fit=crop&w=1200&q=70',
    label: 'Department of Defense',
    caption: 'Installation safety · MOS-aligned curriculum',
  },
  ipadField: {
    id: 'ipadField',
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=70',
    label: 'iPad in the Field',
    caption: 'Workers learn where the work happens',
  },
  warehouseTablet: {
    id: 'warehouseTablet',
    src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=70',
    label: 'Operations',
    caption: 'Tablet-led floor inspections',
  },
  workforce: {
    id: 'workforce',
    src: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=70',
    label: 'Industrial Workforce',
    caption: 'The people we build for',
  },
};
