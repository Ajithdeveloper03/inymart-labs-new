'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePopup } from '@/components/providers/PopupProvider';

export function AiSeoWhatWeDo() {
  const { openPopup } = usePopup();
  return (
    <section className="relative pt-8 pb-12 bg-white overflow-hidden">
      <div className="container-x">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left: Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start lg:pr-8">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Why Businesses in Trichy and Tamil Nadu Need <span className="text-gradient">AI SEO Services</span>
</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
            </Reveal>

            <Reveal delay={100}>
              <div className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                <p className="mb-2">
                  A business can have a well-designed website and still be poorly represented in AI search. An AI platform may:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Not mention your business at all</li>
                  <li>Provide incomplete information</li>
                  <li>Show outdated details</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                As customers increasingly use AI for recommendations, this is a new visibility opportunity. AI SEO helps you build a stronger digital information foundation so your brand is understood accurately across emerging search experiences.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <button 
                onClick={openPopup} 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 group whitespace-nowrap"
              >
                Talk to Our AI SEO Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Reveal>
          </div>

          {/* Right: Visual (Image) */}
          <div className="order-1 lg:order-2 relative">
            <Reveal className="h-full">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-t-[32px] rounded-br-[32px] rounded-bl-[120px] sm:rounded-bl-[160px] lg:rounded-bl-[200px] shadow-[0_20px_60px_rgb(0,0,0,0.1)]">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965" 
                  alt="Humanoid robot sitting on a wooden bench while holding a tablet in an indoor setting." 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
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
