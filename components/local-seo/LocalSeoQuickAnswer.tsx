'use client';

import { Reveal } from '@/components/Reveal';
import { Lightbulb } from 'lucide-react';

export function LocalSeoQuickAnswer() {
  return (
    <section id="quick-answer" className="relative pt-8 pb-12 bg-white overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Left Side: Image with Tag */}
          <div className="order-1 relative w-full pr-8 sm:pr-12 lg:pr-16 pb-8 sm:pb-12 lg:pb-16 pt-8 pl-4 lg:pl-10">
            <Reveal delay={200} className="h-full">
              {/* Main Image */}
              <div className="relative h-full w-full rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgb(0,0,0,0.1)] border-4 border-white">
                <img 
                  src="/new/quick answer(L-SEO).png" 
                  alt="Tablet displaying a city map with multiple location pins, representing local search and location-based business visibility" 
                  className="w-full h-full object-cover"
                />
              </div>

              </Reveal>
          </div>

          {/* Right Side: Content */}
          <div className="order-2 flex flex-col items-start lg:pl-12 pt-8 pb-8 sm:pb-12 lg:pb-16 h-full justify-center">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground">
  Quick <span className="text-gradient">Answer</span>
</h2>
              </div>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-10"></div>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={100}>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                  When someone searches for a service near them, they usually pick from whatever shows up first. Inymart Labs runs a Local SEO Service in Trichy and Tamil Nadu built to help nearby customers spot your business on Google Search and on Maps.<br/><br/>
                  <span className="text-[#ff6b35] font-semibold">Want to show up when nearby customers search? Talk to Inymart Labs.</span>
                </p>
              </Reveal>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
