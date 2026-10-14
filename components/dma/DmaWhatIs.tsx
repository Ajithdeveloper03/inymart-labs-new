'use client';

import { Reveal } from '@/components/Reveal';
import { Megaphone } from 'lucide-react';

export function DmaWhatIs() {
  return (
    <section className="relative pt-0 pb-16 bg-white">
      <div className="container-x">
        <Reveal>
          {/* Banner Container */}
          <div className="group relative overflow-hidden rounded-[20px] border-[1.5px] border-[#c6a052]/70 bg-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(198,160,82,0.15)] flex flex-col md:flex-row min-h-[350px]">
            
            {/* Left Image Section */}
            <div className="relative w-full md:w-[40%] h-[250px] md:h-auto shrink-0 overflow-hidden">
              <img 
                src="/what is digital marketing agency(DMA).png" 
                alt=" Digital marketing team discussing a growth funnel, with a strategist presenting local SEO, Instagram Reels, Meta lead ads, and WhatsApp sales strategies on a whiteboard." 
                className="absolute inset-0 w-full h-full object-fill transition-transform duration-1000 group-hover:scale-105 opacity-100"
              />
              {/* Gradient overlay to seamlessly fade the image into the white background */}
              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-white/30 to-white"></div>
            </div>

            {/* Right Content Section */}
            <div className="relative flex-1 flex flex-col items-start justify-center py-8 md:py-12 lg:py-16 px-6 sm:px-10 lg:pl-12 lg:pr-8 z-10 text-left">
              
              {/* Faint Background Watermark Icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.05]">
                <Megaphone className="w-[280px] h-[280px] text-black" />
              </div>

              <div className="relative z-10 max-w-3xl text-left">
                <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-[#0c1f28] mb-6">
                  What This Service <span className="text-gradient">Actually Covers</span>
                </h2>
                
                <p className="text-slate-600 leading-relaxed text-base sm:text-[17px] font-medium text-left">
                  Instead of juggling separate vendors or tools for each channel, we plan, run, track, and improve them as one connected system:<br/><br/>
                  • Getting found in search results<br/>
                  • Building a following and running ad campaigns<br/>
                  • Keeping your website in good shape<br/>
                  • Turning data into decisions<br/><br/>
                  The point is coordination, not just adding more services.
                </p>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
