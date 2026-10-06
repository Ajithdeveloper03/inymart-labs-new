'use client';

import { Reveal } from '@/components/Reveal';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { usePopup } from '@/components/providers/PopupProvider';

export function PortfolioBanner() {
  const { openPopup } = usePopup();
  return (
    <section className="relative overflow-hidden min-h-[100svh] flex flex-col justify-center pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/new/Banner%20(portfolio).png')" }} // Assuming we can use a different banner image or same one.
      />
      {/* A dark gradient overlay to ensure text readability and a premium corporate look */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0c1f28]/80 via-[#0c1f28]/50 to-[#0c1f28]/80 backdrop-blur-[1px]" />

      <div className="container-x relative z-10 flex flex-col items-center justify-center text-center">


        {/* Heading */}
        <Reveal delay={100}>
          <h1 className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight text-white max-w-xs sm:max-w-2xl lg:max-w-5xl mx-auto px-2 sm:px-0">
            Our Portfolio — <span className="text-gradient">Digital Marketing Agency</span> in Trichy, Tamil Nadu
          </h1>
        </Reveal>

        {/* CTA Button with Pulse/Glow */}
        <Reveal delay={200} className="mt-6 sm:mt-10 lg:mt-12">
          <div className="relative inline-flex group">
            {/* Blinking / Pulse glow effect */}
            <div className="absolute -inset-1.5 rounded-full bg-orange-500/50 blur-md animate-pulse pointer-events-none" />
            <button
              onClick={openPopup}
              className="relative inline-flex items-center justify-center gap-1 sm:gap-2 rounded-full bg-primary px-5 sm:px-8 py-2.5 sm:py-4 text-[11px] sm:text-sm lg:text-base font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-orange-500/20 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              START YOUR DIGITAL GROWTH TODAY
              <ChevronRight className="h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>

        {/* Breadcrumbs (Moved Below CTA) */}
        <Reveal delay={300}>
          <nav className="mt-6 sm:mt-12 flex items-center justify-center space-x-2 text-xs sm:text-sm font-medium text-zinc-300">
            <Link 
              href="/" 
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-zinc-500" />
            <span className="text-white">Our Portfolio</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
