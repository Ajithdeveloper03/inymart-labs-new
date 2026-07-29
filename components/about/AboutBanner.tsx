'use client';

import { Reveal } from '@/components/Reveal';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

export function AboutBanner() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-32 lg:pb-16">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner 1.png')" }}
      />
      {/* A dark gradient overlay to ensure text readability and a premium corporate look */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0c1f28]/95 via-[#0c1f28]/80 to-[#0c1f28]/95 backdrop-blur-[2px]" />

      <div className="container-x relative z-10 flex flex-col items-center justify-center text-center">
        {/* Breadcrumbs */}
        <Reveal>
          <nav className="flex items-center space-x-2 text-sm font-medium text-zinc-300 mb-6">
            <Link 
              href="/" 
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-zinc-500" />
            <span className="text-white">About Us</span>
          </nav>
        </Reveal>

        {/* Heading */}
        <Reveal delay={100}>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            About <span className="text-gradient">Us</span>
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
