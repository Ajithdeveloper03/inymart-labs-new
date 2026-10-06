'use client';

import { Reveal } from '@/components/Reveal';

export function SmmWhyChoose() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Every Campaign Starts With <span className="text-gradient">Understanding Your Business</span>
</h2>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden text-center">
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium">
              No two businesses want the same thing from paid social. Before building anything, we learn your products, your customers, your competitors, your budget, and what you're actually trying to achieve, more leads, more calls, more sales, more traffic, or wider brand recognition. That shapes every decision that follows.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
