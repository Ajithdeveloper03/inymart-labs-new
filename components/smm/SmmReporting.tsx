'use client';

import { Reveal } from '@/components/Reveal';

export function SmmReporting() {
  return (
    <section className="relative pt-12 pb-16 bg-slate-50">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Reporting That Shows <span className="text-gradient">Real Progress</span>
</h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100">
            <p className="text-gray-600 text-lg leading-relaxed font-medium text-center">
              We share reports covering money spent, audience reached, clicks, leads generated, and conversions, in plain terms rather than a wall of numbers. That data also feeds into the next round of campaigns, sharpening targeting, creative direction, and where budget goes next.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
