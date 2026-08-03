'use client';

import { Reveal } from '@/components/Reveal';
import Link from 'next/link';

export function SmmHeroBanner() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-8 pb-12">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1f28] via-[#0f2835] to-[#163a4d] -z-20" />
      
      <div className="container-x relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse" />
              <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Social Media Marketing</span>
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 font-display leading-[1.1] tracking-tight">
              Social Media Marketing Agency in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff8c5f]">Tamil Nadu</span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-10 max-w-2xl mx-auto font-sans">
              Inymart Labs is a social media marketing agency in Trichy, Tamil Nadu that plans, creates, and manages paid ad campaigns on Facebook, Instagram, and LinkedIn to generate calls, leads, and sales.
            </p>
          </Reveal>
          
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] hover:-translate-y-1 text-center"
              >
                Talk to Our Ads Team
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}