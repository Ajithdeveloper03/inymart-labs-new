'use client';

import { Reveal } from '@/components/Reveal';

export function WebAnalyticsWhyChoose() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  We Build Around Your Goals, <span className="text-gradient">Not Generic Metrics</span>
</h2>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden text-center">
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium">
              Every site measures success differently. Before touching any dashboard, we find out what matters to you, more calls, more purchases, more sign-ups, more time on site, and shape the whole measurement setup around that outcome, so the data ties directly back to business results.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
