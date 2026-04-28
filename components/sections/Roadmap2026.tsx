'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import MilestoneTimeline from '@/components/ui/MilestoneTimeline';
import { roadmap } from '@/data/roadmap';
import { backdrops } from '@/data/backgrounds';

export default function Roadmap2026() {
  return (
    <SectionWrapper
      id="roadmap"
      number="05"
      eyebrow="2026 Execution Roadmap"
      title={
        <>
          Twelve months. Four quarters.{' '}
          <span className="text-gradient">One anchor client and one federal award.</span>
        </>
      }
      description="Click any milestone to expand detail. Click status badges to cycle through Planned → In Progress → Complete — the timeline updates live."
      backdrop={backdrops.roadmap}
    >
      <MilestoneTimeline quarters={roadmap} />

      <div className="mt-10 flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
        <span className="uppercase tracking-[0.2em] text-slate-500">Legend</span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-500" /> Planned
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(56,189,248,0.6)]" />{' '}
          In Progress
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> Complete
        </span>
      </div>
    </SectionWrapper>
  );
}
