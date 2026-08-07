'use client';

import { Reveal } from '@/components/Reveal';
import { Lightbulb } from 'lucide-react';

export function WebDevQuickAnswer() {
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
              <div className="relative h-full min-h-[350px] w-full rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgb(0,0,0,0.1)] border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072" 
                  alt="Coding on Laptop" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tag Overlay */}
              <div className="absolute bottom-0 right-0 z-20">
                {/* Orange Circle Background */}
                <div className="absolute -right-4 -bottom-4 w-28 h-28 sm:w-36 sm:h-36 bg-[#ff6b35] rounded-[32px] sm:rounded-[40px] z-0 shadow-lg" />
                
                {/* White Box with Rotated Text */}
                <div className="relative z-10 bg-white rounded-3xl p-4 sm:p-6 shadow-2xl flex items-center justify-center min-w-[80px] sm:min-w-[120px] h-[200px] sm:h-[280px]">
                  <span 
                    className="text-[80px] sm:text-[110px] font-black tracking-tighter"
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
                    DEV
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Content */}
          <div className="order-2 flex flex-col items-start lg:pl-12">
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
                  Inymart Labs is a <strong className="text-[#0c1f28]">Web Development Service in Trichy, Tamil Nadu</strong> that builds fast mobile-friendly, SEO-ready websites — including business websites, ecommerce stores, landing pages, redesigns, and web applications. Most business websites take 3–8 weeks to build, and results like faster load times and better mobile performance are visible immediately after launch, with SEO and conversion benefits building over the following months.
                </p>
              </Reveal>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
