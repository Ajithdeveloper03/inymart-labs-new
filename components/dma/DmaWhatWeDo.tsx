'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePopup } from '@/components/providers/PopupProvider';

export function DmaWhatWeDo() {
  const { openPopup } = usePopup();
  return (
    <section className="relative pt-8 pb-12 bg-white overflow-hidden">
      <div className="container-x">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left: Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start justify-center lg:pr-8">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Getting to Know Your <span className="text-gradient">Business First</span>
</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                No two businesses share the same customers, competitors, or budget, so we don't start with a template.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We look at your current site, your active channels, who you're trying to reach, what your competitors are doing, and how things are performing today. That review shapes which channels get priority first.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <button 
                onClick={openPopup} 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 group whitespace-nowrap"
              >
                Talk to Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Reveal>
          </div>

          {/* Right: Visual (Image) */}
          <div className="order-1 lg:order-2 relative w-full h-full min-h-[320px]">
            <Reveal className="w-full h-full">
              <div className="relative w-full h-full min-h-[320px] overflow-hidden rounded-t-[32px] rounded-br-[32px] rounded-bl-[100px] sm:rounded-bl-[140px] lg:rounded-bl-[160px] shadow-[0_20px_60px_rgb(0,0,0,0.1)]">
                <img 
                  src="/what we do(DMA).png" 
                  alt="Digital marketing workspace featuring a website on a desktop monitor, Meta Ads campaign dashboard on a laptop, Google Search Console analytics on a tablet, and a digital growth strategy notebook." 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
              </div>
            </Reveal>
            
            {/* Decorative background blob behind image */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
