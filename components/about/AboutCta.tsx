'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function AboutCta() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16 my-2 shadow-sm border border-slate-100 rounded-3xl mx-4 lg:mx-8">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none" />

      <div className="container-x relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] mb-6 text-foreground">
              Ready to engineer <span className="text-gradient">real discoverability</span> in today&apos;s digital landscape?
            </h2>
          </Reveal>
          
          <Reveal delay={100}>
            <p className="font-sans text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-3xl text-justify sm:text-center">
              Whether you need Local SEO, full-site SEO, or AEO and GEO for AI search, Inymart Labs brings a data-driven approach to growing your visibility, leads, conversions, and effective marketing services.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(249,115,22,0.3)] transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
              >
                Work With Us
                <ArrowRight className="h-4 w-4" />
              </Link>

              
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
