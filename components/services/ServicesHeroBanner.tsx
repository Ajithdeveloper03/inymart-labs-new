'use client';

import { Reveal } from '@/components/Reveal';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { usePopup } from '@/components/providers/PopupProvider';

export function ServicesHeroBanner() {
  const { openPopup } = usePopup();
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex flex-col justify-center pt-32 pb-12 lg:pt-40">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner(service).png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0c1f28]/70 via-[#0c1f28]/40 to-[#0c1f28]/75 backdrop-blur-[1px]" />

      <div className="container-x relative z-10 flex flex-col items-center justify-center text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse" />
            <span className="text-sm font-medium text-white/90 tracking-wide uppercase">OUR SERVICES</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl mx-auto mb-6">
            Comprehensive <span className="text-gradient">Digital Marketing</span> Services
          </h1>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-8">
            We provide complete digital marketing solutions for businesses of every size to improve visibility, generate quality leads, and achieve long-term growth.
          </p>
        </Reveal>

        <Reveal delay={300} className="mt-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openPopup}
              className="w-full sm:w-auto px-8 py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] hover:-translate-y-1 text-center whitespace-nowrap"
            >
              Talk to Our Experts
            </button>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <nav className="mt-12 flex items-center justify-center space-x-2 text-sm font-medium text-zinc-400">
            <Link href="/" className="flex items-center gap-1.5 transition-colors hover:text-primary">
              <Home className="h-4 w-4" /> Home
            </Link>
            <ChevronRight className="h-4 w-4 text-zinc-600" />
            <span className="text-white">Services</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
