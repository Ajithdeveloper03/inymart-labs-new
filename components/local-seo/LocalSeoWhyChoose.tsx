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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              Why Choose a Local SEO Agency in Tamil Nadu
            </h2>
            
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto relative">
          
          {/* Card 1 */}
          <Reveal delay={100} className="h-full">
            <div className="relative bg-white hover:bg-[#3f3840] rounded-lg p-6 lg:p-8 border border-slate-200 hover:border-[#3f3840] h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group z-0 hover:z-10">
              <PixelScatter />
              
              <div className="mb-4 mt-2 relative">
                <div className="absolute top-0 right-0 w-8 h-[1px] bg-white/10 -rotate-45 -translate-y-2 translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-0 w-6 h-[1px] bg-white/10 -rotate-45 translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <MousePointerClick className="w-12 h-12 text-slate-700 group-hover:text-[#ff6b35] stroke-[1.5] transition-colors duration-300" />
              </div>
              
              {/* Separator */}
              <div className="w-12 h-[2px] bg-transparent group-hover:bg-[#ff6b35] mb-4 transition-colors duration-300" />

              <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-[15px] mb-6 grow transition-colors duration-300">
                Most customers today search for businesses "near me" before making a decision. If your business doesn't appear in local map results or the top local search listings, you're losing customers to businesses right down the street that do show up.
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
                <Zap className="w-12 h-12 text-slate-700 group-hover:text-[#ff6b35] stroke-[1.5] transition-colors duration-300" />
              </div>
              
              {/* Separator */}
              <div className="w-12 h-[2px] bg-transparent group-hover:bg-[#ff6b35] mb-4 transition-colors duration-300" />

              <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-[15px] mb-6 grow transition-colors duration-300">
                Local SEO isn't just about adding your address online. It's about building trust with Google through accurate listings, reviews, and location-based content. As an experienced Local SEO agency in Trichy, Inymart Labs makes sure your business is seen as the right, trustworthy choice for nearby customers.
              </p>

              <Link href="/contact" className="text-[#ff6b35] font-bold text-sm hover:text-[#e55a2b] transition-colors">
                Learn More
              </Link>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={300} className="h-full">
            <div className="relative bg-white hover:bg-[#3f3840] rounded-lg p-6 lg:p-8 border border-slate-200 hover:border-[#3f3840] h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group z-0 hover:z-10">
              <PixelScatter />
              
              <div className="mb-4 mt-2 relative">
                <div className="absolute top-0 right-0 w-8 h-[1px] bg-white/10 -rotate-45 -translate-y-2 translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-0 w-6 h-[1px] bg-white/10 -rotate-45 translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Map className="w-12 h-12 text-slate-700 group-hover:text-[#ff6b35] stroke-[1.5] transition-colors duration-300" />
              </div>
              
              {/* Separator */}
              <div className="w-12 h-[2px] bg-transparent group-hover:bg-[#ff6b35] mb-4 transition-colors duration-300" />

              <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-[15px] mb-6 grow transition-colors duration-300">
                A good Local SEO agency in Tamil Nadu also understands regional search habits. Customers in Trichy, Chennai, Madurai, and Coimbatore often search differently, and we factor these local patterns into every strategy we build.
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
