'use client';

import { Reveal } from '@/components/Reveal';

export function WebAnalyticsExpectations() {
  return (
    <section className="relative pt-12 pb-16 bg-[#0c1f28]">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-white mb-6">
  Why a Tool Alone <span className="text-gradient">Isn't Enough</span>
</h2>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto bg-[#122b38] border border-white/5 p-8 sm:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden text-center">
            <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed font-medium">
              Installing Google Analytics doesn't automatically hand you insight. Bad tracking, half-set-up goals, and reports nobody explains can quietly lead to poor calls. A proper analytics service pairs correct setup with real analysis and reporting that connects to your goals, giving you a structured way to actually use your data.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
