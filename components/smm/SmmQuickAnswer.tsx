'use client';

import { Reveal } from '@/components/Reveal';
import { Lightbulb } from 'lucide-react';

export function SmmQuickAnswer() {
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
                  src="/new/quick answer (SMM).png" 
                  alt=" Instagram ad for a saree business displayed on a smartphone, with WhatsApp new-lead notifications showing customer inquiries about products, prices, and delivery." 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tag Overlay */}
              <div className="absolute bottom-0 right-0 z-20">
                {/* Orange Circle Background */}
                <div className="absolute -right-4 -bottom-4 w-16 h-16 sm:w-24 sm:h-24 bg-[#ff6b35] rounded-[32px] sm:rounded-[40px] z-0 shadow-lg" />
                
                {/* White Box with Rotated Text */}
                <div className="relative z-10 bg-white rounded-xl p-2 sm:p-3 shadow-2xl flex items-center justify-center min-w-[50px] sm:min-w-[70px] h-[110px] sm:h-[140px]">
                  <span 
                    className="text-[36px] sm:text-[50px] font-black tracking-tighter"
                    style={{ 
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1
                    }}
                  >
                    SMM
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Content */}
          <div className="order-2 flex flex-col items-start lg:pl-12 pt-8 pb-8 sm:pb-12 lg:pb-16 h-full justify-center">
            <Reveal>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-10"></div>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={100}>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                  SMM means running paid campaigns on Facebook, Instagram, LinkedIn, and similar platforms so the exact people you want to reach actually see your business. Inymart Labs provides SMM Service in Trichy and Tamil Nadu, building campaigns around goals such as calls, enquiries, site visits, bookings, and sales, rather than chasing likes.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-gray-600 leading-relaxed font-bold text-primary">
                  Want your ads reaching the right people? Talk to Inymart Labs about SMM.
                </p>
              </Reveal>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
