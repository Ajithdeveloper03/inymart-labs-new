'use client';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function DmcCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-white pt-8 pb-12 text-foreground"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.03]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-chart-4/10 blur-3xl animate-float-slower"
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent ring-1 ring-accent/20">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Digital Marketing Consulting in Tamil Nadu
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mt-6">
  Build a Clearer Marketing <span className="text-gradient">Direction</span>
</h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-sans mx-auto mt-5 max-w-[60rem] text-base leading-relaxed text-slate-500 text-pretty sm:text-lg">
              Digital marketing feels simpler when every activity has a purpose. With the right strategy, SEO, social media, ads, content, website, and analytics can all work toward shared goals. Whether you are just starting, reviewing an existing plan, or preparing for the next stage of growth, consulting gives you a focused and adaptable path.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-accent/50 w-full sm:w-auto"
              >
                Contact Inymart Labs to start your consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              

              
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}