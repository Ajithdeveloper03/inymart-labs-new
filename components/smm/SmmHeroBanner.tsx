'use client';

import { Reveal } from '@/components/Reveal';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

export function SmmHeroBanner() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-8 pb-12">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner 1.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0c1f28]/90 via-[#0c1f28]/70 to-[#0c1f28]/95 backdrop-blur-[2px]" />

      <div className="container-x relative z-10 flex flex-col items-center justify-center text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse" />
            <span className="text-sm font-medium text-white/90 tracking-wide uppercase">SOCIAL MEDIA MARKETING</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl mx-auto mb-8">
            Social Media Marketing Agency in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff8c5f]">Tamil Nadu</span>
          </h1>
        </Reveal>

        <Reveal delay={300} className="mt-8 lg:mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] hover:-translate-y-1 text-center"
            >
              Talk to Our Ads Team
            </Link>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <nav className="mt-12 flex items-center justify-center space-x-2 text-sm font-medium text-zinc-400">
            <Link href="/" className="flex items-center gap-1.5 transition-colors hover:text-primary">
              <Home className="h-4 w-4" /> Home
            </Link>
            <ChevronRight className="h-4 w-4 text-zinc-600" />
            <Link href="/#services" className="transition-colors hover:text-primary">
              Services
            </Link>
            <ChevronRight className="h-4 w-4 text-zinc-600" />
            <span className="text-white">Social Media Marketing</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
