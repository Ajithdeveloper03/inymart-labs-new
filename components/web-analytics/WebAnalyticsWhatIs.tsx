'use client';

import { Reveal } from '@/components/Reveal';
import { Search } from 'lucide-react';

export function WebAnalyticsWhatIs() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <Search className="w-8 h-8 text-blue-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                What Is a Web Analytics Service?
              </h2>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-gray-600 leading-relaxed">
                A Web Analytics Service is the process of setting up, auditing, and interpreting website tracking data — covering traffic sources, visitor behavior, conversion goals, and reporting — so a business can make marketing decisions based on facts rather than guesswork. It typically uses tools like Google Analytics and Google Search Console, configured correctly and explained in plain language.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}