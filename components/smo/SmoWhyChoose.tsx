'use client';

import { Reveal } from '@/components/Reveal';

export function SmoWhyChoose() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Every Brand Gets a <span className="text-gradient">Different Strategy</span>
</h2>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden text-center">
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium">
              What works for one business rarely works for another; audiences, competitors, and tone all differ. We first study your industry, your target customers, and your goals, then map out which platforms deserve focus, what kind of content fits, how often to post, and how to keep the conversation going with your audience.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
