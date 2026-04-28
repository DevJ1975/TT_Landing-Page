export type SectionMeta = {
  id: string;
  label: string;
  number: string;
};

export const sections: SectionMeta[] = [
  { id: 'hero', label: 'Overview', number: '00' },
  { id: 'problem', label: 'The Problem', number: '01' },
  { id: 'product', label: 'Product', number: '02' },
  { id: 'private-gtm', label: 'Private Sector GTM', number: '03' },
  { id: 'federal-gtm', label: 'Federal GTM', number: '04' },
  { id: 'roadmap', label: '2026 Roadmap', number: '05' },
  { id: 'marketing', label: 'Marketing Plan', number: '06' },
  { id: 'team', label: 'Team', number: '07' },
  { id: 'partnership', label: 'Partnership', number: '08' },
];
