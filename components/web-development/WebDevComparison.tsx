'use client';

import { Reveal } from '@/components/Reveal';

export function WebDevComparison() {
  return (
    <section className="relative pt-8 pb-12 bg-[#0c1f28]">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-white mb-6">
              Why a <span className="text-gradient">DIY Site</span> Often Falls Short
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-5xl mx-auto bg-[#122b38] rounded-[2rem] shadow-2xl border border-white/5 overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <p className="text-lg text-zinc-300 leading-relaxed font-medium">
                Free builders and templates can get a site online quickly, but they often struggle with speed, mobile display, and search visibility once your business starts to grow. A professionally built site is planned to handle more traffic, more content, and more features without needing a rebuild every year.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
