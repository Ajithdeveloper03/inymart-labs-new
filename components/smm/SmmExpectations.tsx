'use client';

import { Reveal } from '@/components/Reveal';

export function SmmExpectations() {
  return (
    <section className="relative pt-12 pb-16 bg-[#0c1f28]">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-white mb-6">
  Why SMM Needs More Than Just <span className="text-gradient">Boosting a Post</span>
</h2>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto bg-[#122b38] border border-white/5 p-8 sm:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden text-center">
            <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed font-medium">
              Clicking the boost button on a post isn't a strategy. Getting real results from paid social takes research, precise targeting, strong creative, careful setup, ongoing testing, and consistent monitoring. Managed properly, it turns a scattered ad budget into a structured process that actually earns its keep.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
