'use client';

import { Reveal } from '@/components/Reveal';
import { Target } from 'lucide-react';
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

export function DmcWhyChoose() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Why Choose Digital <span className="text-gradient">Marketing Consulting</span> in Tamil Nadu
</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Many businesses spend money on SEO, ads, and social media without a clear strategy tying it all together. This usually means wasted budget, mixed messaging, and no clear way to measure what's actually working.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto relative">
          
          {/* Card 1 */}
          <Reveal delay={100} className="h-full">
            <div className="relative bg-white hover:bg-[#3f3840] rounded-lg p-6 lg:p-8 border border-slate-200 hover:border-[#3f3840] h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group z-0 hover:z-10">
              <PixelScatter />
              
              <div className="mb-4 mt-2 relative">
                <div className="absolute top-0 right-0 w-8 h-[1px] bg-white/10 -rotate-45 -translate-y-2 translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-0 w-6 h-[1px] bg-white/10 -rotate-45 translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Target className="w-12 h-12 text-slate-700 group-hover:text-[#ff6b35] stroke-[1.5] transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-3 font-display transition-colors duration-300">
                Clear Action Plan
              </h3>

              {/* Separator */}
              <div className="w-12 h-[2px] bg-transparent group-hover:bg-[#ff6b35] mb-4 transition-colors duration-300" />

              <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-[15px] mb-6 grow text-justify transition-colors duration-300">
                Digital Marketing Consulting in Tamil Nadu from Inymart Labs gives you an outside, expert view of your marketing — what's working, what's not, and what to prioritize next. As an experienced provider of Digital Marketing Consulting in Trichy, we simplify complex marketing decisions into a clear action plan.
              </p>

              <Link href="/contact" className="text-[#ff6b35] font-bold text-sm hover:text-[#e55a2b] transition-colors">
                Learn More
              </Link>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={200} className="h-full">
            <div className="relative bg-white hover:bg-[#3f3840] rounded-lg p-6 lg:p-8 border border-slate-200 hover:border-[#3f3840] h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group z-0 hover:z-10">
              <PixelScatter />
              
              <div className="mb-4 mt-2 relative">
                <div className="absolute top-0 right-0 w-8 h-[1px] bg-white/10 -rotate-45 -translate-y-2 translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-0 w-6 h-[1px] bg-white/10 -rotate-45 translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Target className="w-12 h-12 text-slate-700 group-hover:text-[#ff6b35] stroke-[1.5] transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-3 font-display transition-colors duration-300">
                Tailored to Your Business
              </h3>

              {/* Separator */}
              <div className="w-12 h-[2px] bg-transparent group-hover:bg-[#ff6b35] mb-4 transition-colors duration-300" />

              <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-[15px] mb-6 grow text-justify transition-colors duration-300">
                We also understand that every business is different. A strategy that works for an e-commerce brand won't necessarily work for a local service business, and we build our recommendations around your specific goals, budget, and industry.
              </p>

              <Link href="/contact" className="text-[#ff6b35] font-bold text-sm hover:text-[#e55a2b] transition-colors">
                Learn More
              </Link>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
