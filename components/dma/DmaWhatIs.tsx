'use client';

import { Reveal } from '@/components/Reveal';
import { Search } from 'lucide-react';

export function DmaWhatIs() {
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
                What Is a Digital Marketing Agency?
              </h2>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-gray-600 leading-relaxed">
                A Digital Marketing Agency is a company that manages a business's online growth across multiple channels — SEO, social media, paid ads, website development, and analytics — under one coordinated strategy instead of separate, disconnected efforts. A good digital marketing agency ties every channel to clear business goals like calls, leads, and sales, and reports on performance in plain language.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}