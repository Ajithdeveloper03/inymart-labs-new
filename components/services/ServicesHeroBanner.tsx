'use client';

import { Reveal } from '@/components/Reveal';
import { ChevronRight, Home, ShieldCheck, TrendingUp, Users2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePopup } from '@/components/providers/PopupProvider';

const HERO_HIGHLIGHTS = [
  { icon: ShieldCheck, text: '10+ Years Marketing Expertise' },
  { icon: Users2, text: '50+ Trusted Brand Partnerships' },
  { icon: Sparkles, text: 'Next-Gen AI & Search Strategies' },
  { icon: TrendingUp, text: 'Data-Backed Conversion Growth' },
];

export function ServicesHeroBanner() {
  const { openPopup } = usePopup();
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex flex-col justify-center pt-32 pb-14 lg:pt-40">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner(service).png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0c1f28]/85 via-[#0c1f28]/60 to-[#0c1f28]/90 backdrop-blur-[1px]" />

      <div className="container-x relative z-10 flex flex-col items-center justify-center text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse" />
            <span className="text-xs font-bold text-white tracking-widest uppercase">
              COMPREHENSIVE DIGITAL SOLUTIONS
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl mx-auto mb-6">
            Digital Marketing Services in <span className="text-gradient">Tamil Nadu</span>
          </h1>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            From technical SEO and Google Maps domination to high-ROAS paid advertising, modern web development, and AI search optimization. We craft integrated growth systems engineered to capture demand and scale your revenue.
          </p>
        </Reveal>

        {/* Trust Badges Bar */}
        <Reveal delay={250}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8 max-w-4xl mx-auto">
            {HERO_HIGHLIGHTS.map((item, idx) => (
              <div 
                key={idx}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/15 backdrop-blur-md text-zinc-200 text-xs font-semibold"
              >
                <item.icon className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openPopup}
              className="w-full sm:w-auto px-8 py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] hover:-translate-y-1 text-center whitespace-nowrap uppercase tracking-wider text-xs sm:text-sm"
            >
              Request Free Consultation
            </button>
            <Link
              href="#services-list"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold transition-all border border-white/20 text-center whitespace-nowrap uppercase tracking-wider text-xs sm:text-sm"
            >
              Browse All Services
            </Link>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <nav aria-label="Breadcrumb" className="mt-12 flex items-center justify-center space-x-2 text-sm font-medium text-zinc-400">
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
