'use client';

import { Reveal } from '@/components/Reveal';
import { Search } from 'lucide-react';

export function WebDevWhatIs() {
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
                What Is a Web Development Service?
              </h2>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-gray-600 leading-relaxed">
                A Web Development Service covers the planning, design, coding, and launch of a website — built to be fast, mobile-friendly, and structured in a way that both visitors and search engines can navigate easily. It typically includes discovery, design, development, mobile optimization, SEO-ready setup, testing, and ongoing support after launch.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}