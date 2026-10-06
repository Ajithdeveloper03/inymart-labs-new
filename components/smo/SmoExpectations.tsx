'use client';

import { Reveal } from '@/components/Reveal';

export function SmoExpectations() {
  return (
    <section className="relative pt-12 pb-16 bg-[#0c1f28]">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-white mb-6">
  Why Not Just Post It <span className="text-gradient">Yourself?</span>
</h2>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto bg-[#122b38] border border-white/5 p-8 sm:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden text-center">
            <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed font-medium">
              Consistent posting and a nice design aren't enough on their own. Real SMO ties together research, strategy, content, platform-specific adjustments, engagement, and ongoing analysis, all running as one connected process, freeing you up to focus on running the business itself.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
