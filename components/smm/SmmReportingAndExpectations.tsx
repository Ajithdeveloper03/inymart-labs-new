'use client';

import { Reveal } from '@/components/Reveal';

export function SmmReportingAndExpectations() {
  return (
    <section className="relative py-12 md:py-20 bg-slate-50">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Side: Reporting */}
          <Reveal delay={100} className="h-full">
            <div className="h-full bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col justify-center text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-balance text-foreground mb-6">
                Reporting That Shows <br className="hidden md:block" /><span className="text-gradient">Real Progress</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                We share reports covering money spent, audience reached, clicks, leads generated, and conversions, in plain terms rather than a wall of numbers. That data also feeds into the next round of campaigns, sharpening targeting, creative direction, and where budget goes next.
              </p>
            </div>
          </Reveal>

          {/* Right Side: Expectations */}
          <Reveal delay={200} className="h-full">
            <div className="h-full bg-[#0c1f28] rounded-[2rem] p-8 md:p-12 shadow-xl border border-[#122b38] flex flex-col justify-center text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-balance text-white mb-6">
                Why SMM Needs More Than Just <br className="hidden md:block" /><span className="text-gradient">Boosting a Post</span>
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed font-medium">
                Clicking the boost button on a post isn't a strategy. Getting real results from paid social takes research, precise targeting, strong creative, careful setup, ongoing testing, and consistent monitoring. Managed properly, it turns a scattered ad budget into a structured process that actually earns its keep.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
