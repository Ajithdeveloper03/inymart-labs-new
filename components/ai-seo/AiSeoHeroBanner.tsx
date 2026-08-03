'use client';

import { Reveal } from '@/components/Reveal';
import { ChevronRight, Home, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function AiSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-8 pb-12">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner 1.png')" }}
      />
      {/* A dark gradient overlay to ensure text readability and a premium corporate look */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0c1f28]/90 via-[#0c1f28]/70 to-[#0c1f28]/95 backdrop-blur-[2px]" />

      <div className="container-x relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Subtitle / Eyebrow */}
        <Reveal>
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            Inymart Labs
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={100}>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl mx-auto mb-8">
            AI SEO Service in Tamil Nadu
          </h1>
        </Reveal>

        {/* CTA Scroll Indicator */}
        <Reveal delay={300} className="mt-8 lg:mt-12">
          <div className="relative inline-flex group">
            <div className="absolute -inset-1.5 rounded-full bg-primary/30 blur-md animate-pulse pointer-events-none" />
            <a
              href="#quick-answer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('quick-answer')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-110"
              aria-label="Scroll Down"
            >
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </a>
          </div>
        </Reveal>

        {/* Breadcrumbs */}
        <Reveal delay={400}>
          <nav className="mt-12 flex items-center justify-center space-x-2 text-sm font-medium text-zinc-400">
            <Link 
              href="/" 
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-zinc-600" />
            <Link 
              href="/#services" 
              className="transition-colors hover:text-primary"
            >
              Services
            </Link>
            <ChevronRight className="h-4 w-4 text-zinc-600" />
            <span className="text-white">AI SEO Service</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}