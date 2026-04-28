export type Channel = 'private' | 'federal' | 'both';
export type Priority = 'High' | 'Medium' | 'Long-term';

export type MarketingItem = {
  id: string;
  title: string;
  description: string;
  channel: Channel;
  priority: Priority;
};

export const marketingChannels: MarketingItem[] = [
  {
    id: 'linkedin',
    title: 'LinkedIn Outreach',
    description:
      'Target EHS Managers, Safety Directors, and HR / Training VPs at mid-market manufacturers. Founder-led outreach with case-study assets.',
    channel: 'private',
    priority: 'High',
  },
  {
    id: 'osha',
    title: 'OSHA Training as Lead Gen',
    description:
      'Use Trainovate’s OSHA 10/30 courses to pipeline Soteria demos. Every OSHA engagement is also a discovery call.',
    channel: 'private',
    priority: 'High',
  },
  {
    id: 'content',
    title: 'Content Marketing',
    description:
      'EHS compliance blog and LinkedIn thought leadership authored by Jay (OSHA-credentialed). 1 anchor article + 3 short posts per month.',
    channel: 'private',
    priority: 'Medium',
  },
  {
    id: 'tradeshows',
    title: 'Trade Shows',
    description:
      'NSC Congress, ATD, and regional safety expos. Demo iPad field app live; capture leads via QR sign-in.',
    channel: 'private',
    priority: 'Medium',
  },
  {
    id: 'partner-referrals',
    title: 'Partner Referrals',
    description:
      'Safety consultants, insurance brokers, and OSHA consultants. Co-branded referral kits + revenue share for closed deals.',
    channel: 'private',
    priority: 'High',
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    description:
      'Snak King and StandardAero case studies once pilots produce measurable compliance lift. Use as sales assets and PR.',
    channel: 'private',
    priority: 'Medium',
  },
  {
    id: 'govwin',
    title: 'GovWin / Bloomberg Government',
    description:
      'Daily opportunity tracking against SDVOSB and workforce-training NAICS. Synergy owns the watchlist.',
    channel: 'federal',
    priority: 'High',
  },
  {
    id: 'capability',
    title: 'Capability Statement Distribution',
    description:
      'Distribute Trainovate / Synergy JV capability statement to OSDBU offices at VA, DoD service components, and target civilian agencies.',
    channel: 'federal',
    priority: 'High',
  },
  {
    id: 'sb-events',
    title: 'Small Business Events',
    description:
      'VA Vendor Day, DoD matchmaking events, agency industry days. Synergy fronts the room; Trainovate runs the demo.',
    channel: 'federal',
    priority: 'Medium',
  },
  {
    id: 'govcon-linkedin',
    title: 'LinkedIn GovCon Network',
    description:
      'Synergy-led BD outreach to capture managers, SBLOs, and program offices. Warm intros via retired-Army network.',
    channel: 'federal',
    priority: 'Medium',
  },
  {
    id: 'sba-8a',
    title: 'SBA Resources / 8(a) Prep',
    description:
      'Begin 8(a) application prep in 2027 for layered set-aside eligibility. Track required revenue history and compliance.',
    channel: 'federal',
    priority: 'Long-term',
  },
];

export const kpiTargets = [
  { label: 'Demo requests / month', value: 5, suffix: '', prefix: '' },
  { label: 'Pipeline value (Q4 2026)', value: 500, suffix: 'K', prefix: '$' },
  { label: 'Federal bids submitted (2026)', value: 3, suffix: '', prefix: '' },
  { label: 'MRR target (Q4 2026)', value: 15, suffix: 'K', prefix: '$' },
];
