'use client';

import { Reveal } from '@/components/Reveal';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

export function ContactBanner() {
  return (
    <section className="relative overflow-hidden pt-32 pb-32 sm:pt-40 lg:pt-48 lg:pb-40 bg-[#1a1f2e]">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat blur-[2px] scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577563908411-50cb98976fea?auto=format&fit=crop&q=80&w=2000')" }}
      />
      <div className="absolute inset-0 z-0 bg-black/40 backdrop-blur-sm" />

      <div className="container-x relative z-10 flex flex-col items-center justify-center text-center">
        {/* Heading */}
        <Reveal>
          <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-lg" style={{ textShadow: '0 4px 20px rgba(255,255,255,0.3)' }}>
            Contact Us
          </h1>
        </Reveal>

        <Reveal delay={100} className="mt-6">
          <p className="max-w-2xl text-lg sm:text-xl text-white/90 drop-shadow-md">
            We'd love to hear from you. Get in touch with us for more information on our programs and services.
          </p>
        </Reveal>

        {/* Breadcrumbs */}
        <Reveal delay={200}>
          <nav className="mt-8 flex items-center justify-center space-x-2 text-sm font-semibold text-yellow-400">
            <Link 
              href="/" 
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-white/50" />
            <span>Contact</span>
          </nav>
        </Reveal>
      </div>

      {/* Cloud Wave Divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[2px]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] sm:h-[90px] lg:h-[120px]"
        >
          <path 
            d="M0,120 C150,120 250,50 400,60 C550,70 650,100 800,90 C950,80 1050,40 1200,60 L1200,120 L0,120 Z" 
            fill="#f8f9fa"
          ></path>
          <path 
            d="M0,120 C200,120 300,30 450,40 C600,50 700,110 850,100 C1000,90 1100,20 1200,40 L1200,120 L0,120 Z" 
            fill="#f8f9fa" 
            opacity="0.5"
          ></path>
        </svg>
      </div>
    </section>
  );
}
