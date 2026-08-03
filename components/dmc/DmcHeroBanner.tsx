'use client';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function DmcHeroBanner() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[#0a192f]">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ff6b35]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse" />
              <span className="text-sm font-medium text-zinc-300">Expert Guidance, Real Results</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-8 font-display leading-[1.1] tracking-tight">
              Digital Marketing Consulting in Tamil Nadu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#fec740]">— Inymart Labs</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl leading-relaxed">
              Giving businesses an outside, expert view of their SEO, social media, ads, and analytics — and a clear, prioritized action plan for what to focus on next.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-[#ff6b35] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#e85a25] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,53,0.3)] group"
              >
                Talk to Our Consulting Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff6b35]" />
                <span>Strategy, audit, and action plan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff6b35]" />
                <span>One-time or ongoing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff6b35]" />
                <span>Clear & prioritized direction</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}