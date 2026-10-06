'use client';

import { Reveal } from '@/components/Reveal';
import { Users } from 'lucide-react';

export function DmaWhoThisIsFor() {
  return (
    <section className="relative pt-12 pb-16 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          
          <Reveal>
            <div className="flex flex-col items-center text-center mx-auto mb-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0">
                  <Users className="w-8 h-8 text-pink-500" />
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground">
  Who <span className="text-gradient">We Work With</span>
</h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-pink-500"></div>
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium mb-6">
                We support local businesses, startups, ecommerce brands, professional firms, educational institutions, hospitality businesses, and growing companies of most sizes.
              </p>
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium">
                The plan flexes to fit your industry, market, budget, and stage of growth, and you can start with a single service or combine several under one coordinated plan.
              </p>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
}
