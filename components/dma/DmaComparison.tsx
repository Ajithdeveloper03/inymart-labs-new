'use client';

import { Reveal } from '@/components/Reveal';

export function DmaComparison() {
  return (
    <section className="relative pt-8 pb-12 bg-slate-50 border-t border-slate-100">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
              Why Connected Marketing Outperforms <span className="text-gradient">Separate Channels</span>
            </h2>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10 text-left relative overflow-hidden mt-10">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#ff6b35]"></div>
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium">
                Run in isolation, SEO, social, ads, and your website each do their own small job. Connected under one strategy, SEO strengthens what people find, social builds recognition, ads bring in immediate traffic, and analytics shows which of it is actually working, so your messaging stays consistent and decisions rest on the full picture rather than one channel's numbers.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
