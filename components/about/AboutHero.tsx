'use client';

import { Reveal } from '@/components/Reveal';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePopup } from '@/components/providers/PopupProvider';

export function AboutHero() {
  const { openPopup } = usePopup();
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16">
      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left side: Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                Who We Are
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] mb-6">
                A Leading <span className="text-primary">Digital Marketing Agency</span> in Tamil Nadu
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="font-sans text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 text-justify lg:text-left">
                Inymart Labs is headquartered in Trichy. As a trusted digital marketing agency since 2016, we’ve helped businesses improve their online visibility through Google Search, Google Maps, voice search, and AI platforms like ChatGPT, Gemini, and Perplexity.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="font-sans text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 text-justify lg:text-left">
                With 9+ years of experience, we have supported 50+ brands across India, UAE, UK, and the USA with result-driven digital marketing and web design solutions that generate visibility, leads, and business growth.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="w-full flex justify-center lg:justify-start">
                <button
                  onClick={openPopup}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
                >
                  Talk to Our Team
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right side: Image Composition */}
          <div className="relative w-full h-[500px] lg:h-[650px] hidden md:block">
            {/* Image 1 - Top Left */}
            <Reveal delay={200} className="absolute top-[10%] left-[5%] w-[65%] h-[55%] z-10">
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white animate-slide-up-down">
                <img 
                  src="/new/Who We Are 1.png" 
                  alt="Who We Are 1" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>

            {/* Image 2 - Bottom Right */}
            <Reveal delay={400} className="absolute bottom-[10%] right-[5%] w-[60%] h-[50%] z-20">
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white animate-slide-down-up">
                <img 
                  src="/new/Who We Are 2.png" 
                  alt="Who We Are 2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            
            {/* Background decorative blob behind images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
