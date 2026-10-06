'use client';

import { Reveal } from '@/components/Reveal';
import { MousePointerClick, Zap, Map } from 'lucide-react';
import Link from 'next/link';

const PixelScatter = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute top-4 left-4 opacity-80">
      <rect x="0" y="0" width="8" height="8" className="fill-slate-300 group-hover:fill-[#ff6b35] transition-colors duration-300" />
      <rect x="12" y="4" width="4" height="4" className="fill-slate-200 group-hover:fill-[#ff6b35] transition-colors duration-300" />
      <rect x="24" y="0" width="6" height="6" className="fill-slate-300 group-hover:fill-[#ff6b35] transition-colors duration-300" />
      <rect x="4" y="14" width="4" height="4" className="fill-slate-200 group-hover:fill-[#ff6b35] transition-colors duration-300" />
      <rect x="16" y="16" width="3" height="3" className="fill-slate-300 group-hover:fill-[#ff6b35] transition-colors duration-300" />
      <rect x="8" y="24" width="3" height="3" className="fill-slate-200 group-hover:fill-[#ff6b35] transition-colors duration-300" />
    </svg>
  );
};

export function DmaWhyChoose() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Why Bring in an Agency Instead of <span className="text-gradient">Managing It Yourself?</span>
</h2>
            
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden text-center">
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium">
              Doing digital marketing properly takes constant research, testing, and measurement across several channels at once. Without that specialist attention, it's easy to lose track of what actually matters or misread what's working. An agency brings that focus and structure, plus reporting that shows exactly where the effort is going and how it's paying off.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
