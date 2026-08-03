'use client';

import { Reveal } from '@/components/Reveal';
import { Search } from 'lucide-react';

export function PpcWhatIs() {
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
                What Is PPC?
              </h2>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-gray-600 leading-relaxed">
                PPC (Pay-Per-Click) is a form of online advertising where a business pays only when someone clicks their ad, typically shown at the top of Google search results or across partner websites. Unlike SEO, which builds organic visibility over time, PPC delivers immediate visibility for chosen keywords, with performance measured directly through clicks, calls, and conversions.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}