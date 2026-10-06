'use client';

import { Reveal } from '@/components/Reveal';

export function SeoExpectations() {
  return (
    <section className="relative pt-12 pb-16 bg-[#0c1f28]">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-white mb-6">
  Steady Work Beats <span className="text-gradient">Shortcuts</span>
</h2>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto bg-[#122b38] border border-white/5 p-8 sm:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden text-center">
            <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed font-medium">
              We keep the roadmap clear, focus effort on what actually moves the needle, and adjust as new data comes in. That approach builds visibility that holds up over time, instead of gains that vanish after the next algorithm update.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
