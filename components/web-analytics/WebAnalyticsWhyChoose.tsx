'use client';

import { Reveal } from '@/components/Reveal';
import { Target } from 'lucide-react';

export function WebAnalyticsWhyChoose() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-emerald-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Why Choose a Web Analytics Service in Tamil Nadu
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Most businesses have Google Analytics installed but never actually look at it, or don't know what the numbers mean. Without real analysis, you're making marketing decisions based on guesswork instead of facts.
              </p>
              <p>
                A good Web Analytics Service in Tamil Nadu doesn't just show you charts — it explains what's working, what's not, and what to do next. As an experienced Web Analytics Service in Trichy, Inymart Labs connects your website data to real business outcomes like enquiries, calls, and sales.
              </p>
              <p>
                We also make sure your data is set up correctly in the first place. Many businesses have broken or incomplete tracking without realizing it, which means every report they've seen so far may already be wrong.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}