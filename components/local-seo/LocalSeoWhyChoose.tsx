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

export function LocalSeoWhyChoose() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Why Choose Inymart Labs for Local SEO Service in <span className="text-gradient">Trichy and Tamil Nadu?</span>
</h2>
            
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto relative">
          
          {/* Card 1 */}
          <Reveal delay={100} className="h-full">
            <div className="relative bg-white hover:bg-[#3f3840] rounded-lg p-6 lg:p-8 border border-slate-200 hover:border-[#3f3840] h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group z-0 hover:z-10">
              <PixelScatter />
              
              <div className="mb-4 mt-2 relative">
                <MousePointerClick className="w-12 h-12 text-slate-700 group-hover:text-[#ff6b35] stroke-[1.5] transition-colors duration-300" />
              </div>
              
              {/* Separator */}
              <div className="w-12 h-[2px] bg-transparent group-hover:bg-[#ff6b35] mb-4 transition-colors duration-300" />

              <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-3 transition-colors duration-300">Location-focused</h3>
              <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-[15px] mb-6 grow text-justify transition-colors duration-300">
                Built around your service area and real customer search behaviour
              </p>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={200} className="h-full">
            <div className="relative bg-white hover:bg-[#3f3840] rounded-lg p-6 lg:p-8 border border-slate-200 hover:border-[#3f3840] h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group z-0 hover:z-10">
              <PixelScatter />
              
              <div className="mb-4 mt-2 relative">
                <Zap className="w-12 h-12 text-slate-700 group-hover:text-[#ff6b35] stroke-[1.5] transition-colors duration-300" />
              </div>
              
              {/* Separator */}
              <div className="w-12 h-[2px] bg-transparent group-hover:bg-[#ff6b35] mb-4 transition-colors duration-300" />

              <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-3 transition-colors duration-300">Fully coordinated</h3>
              <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-[15px] mb-6 grow text-justify transition-colors duration-300">
                Google Business Profile, citations, reviews, and content, all connected
              </p>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={300} className="h-full">
            <div className="relative bg-white hover:bg-[#3f3840] rounded-lg p-6 lg:p-8 border border-slate-200 hover:border-[#3f3840] h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group z-0 hover:z-10">
              <PixelScatter />
              
              <div className="mb-4 mt-2 relative">
                <Map className="w-12 h-12 text-slate-700 group-hover:text-[#ff6b35] stroke-[1.5] transition-colors duration-300" />
              </div>
              
              {/* Separator */}
              <div className="w-12 h-[2px] bg-transparent group-hover:bg-[#ff6b35] mb-4 transition-colors duration-300" />

              <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-3 transition-colors duration-300">Scales with you</h3>
              <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-[15px] mb-6 grow text-justify transition-colors duration-300">
                Suited to single-location shops and multi-location businesses alike
              </p>
            </div>
          </Reveal>

          {/* Card 4 */}
          <Reveal delay={400} className="h-full">
            <div className="relative bg-white hover:bg-[#3f3840] rounded-lg p-6 lg:p-8 border border-slate-200 hover:border-[#3f3840] h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group z-0 hover:z-10">
              <PixelScatter />
              
              <div className="mb-4 mt-2 relative">
                <Zap className="w-12 h-12 text-slate-700 group-hover:text-[#ff6b35] stroke-[1.5] transition-colors duration-300" />
              </div>
              
              {/* Separator */}
              <div className="w-12 h-[2px] bg-transparent group-hover:bg-[#ff6b35] mb-4 transition-colors duration-300" />

              <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-3 transition-colors duration-300">Measured progress</h3>
              <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-[15px] mb-6 grow text-justify transition-colors duration-300">
                Regular tracking on rankings, profile activity, and enquiries
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
