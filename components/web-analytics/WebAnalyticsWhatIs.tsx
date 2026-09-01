'use client';

import { Reveal } from '@/components/Reveal';
import { Search } from 'lucide-react';

export function WebAnalyticsWhatIs() {
  return (
    <section className="relative pt-12 pb-16 bg-white">
      <div className="container-x">
        <Reveal>
          {/* Banner Container */}
          <div className="group relative overflow-hidden rounded-[20px] border-[1.5px] border-[#c6a052]/70 bg-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(198,160,82,0.15)] flex flex-col md:flex-row min-h-[350px]">
            
            {/* Left Image Section */}
            <div className="relative w-full md:w-[40%] h-[250px] md:h-auto shrink-0 overflow-hidden">
              <img 
                src="/What Is a Web (Web Analytics).png" 
                alt=" Digital marketing professionals reviewing a website traffic and lead conversion report on a tablet during a business meeting." 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100"
              />
              {/* Gradient overlay to seamlessly fade the image into the white background */}
              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-white/30 to-white"></div>
            </div>

            {/* Right Content Section */}
            <div className="relative flex-1 flex flex-col items-center justify-center py-8 md:py-12 lg:py-16 px-4 lg:pl-0 lg:pr-4 z-10 text-center">
              
              {/* Faint Background Watermark Icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.05]">
                <Search className="w-[280px] h-[280px] text-black" />
              </div>

              <div className="relative z-10 max-w-3xl">
                <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-[#0c1f28] mb-6">
                  What Is a Web <span className="text-gradient">Analytics Service</span>?
                </h2>
                
                <p className="text-slate-600 leading-relaxed text-base sm:text-[17px] font-medium">
                  A Web Analytics Service is the process of setting up, auditing, and interpreting website tracking data — covering traffic sources, visitor behavior, conversion goals, and reporting — so a business can make marketing decisions based on facts rather than guesswork. It typically uses tools like Google Analytics and Google Search Console, configured correctly and explained in plain language.
                </p>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
