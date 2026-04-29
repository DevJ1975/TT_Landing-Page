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
    src: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1200&q=70',
    label: 'Aviation & Aerospace MRO',
    caption: 'Hangar-floor training · technician credentialing',
  },
  logistics: {
    id: 'logistics',
    src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=70',
    label: 'Logistics & Distribution',
    caption: 'DC and 3PL operations · forklift recertification',
  },
  construction: {
    id: 'construction',
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=70',
    label: 'Construction & Industrial Services',
    caption: 'Crew briefings · digital toolbox-talk delivery',
  },
  // Gulf of Mexico production rig
  // Swap target: search "gulf of mexico oil rig" / "offshore production platform"
  // on unsplash.com and paste the resulting CDN URL if this one doesn't load.
  offshore: {
    id: 'offshore',
    src: 'https://images.unsplash.com/photo-1610028290816-5d937a395a49?auto=format&fit=crop&w=1600&q=75',
    label: 'Gulf of Mexico Production Rig',
    caption: 'Offshore production platform · where SIMOPS coordination is life-critical',
  },
  // Onshore land drilling rig (renamed from "refinery")
  // Swap target: search "land drilling rig" / "oil derrick" on unsplash.com.
  refinery: {
    id: 'refinery',
    src: 'https://images.unsplash.com/photo-1582640464717-e9ce8da66ee4?auto=format&fit=crop&w=1600&q=75',
    label: 'Onshore Land Drilling Rig',
    caption: 'Permian / Bakken-style drilling operations · PSM-regulated work',
  },
  capitol: {
    id: 'capitol',
    src: 'https://images.unsplash.com/photo-1602940659805-770d1b3b9911?auto=format&fit=crop&w=1200&q=70',
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
    src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=70',
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
    src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=70',
    label: 'Operations',
    caption: 'Tablet-led floor inspections',
  },
  workforce: {
    id: 'workforce',
    src: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=70',
    label: 'Industrial Workforce',
    caption: 'The people we build for',
  },
};
