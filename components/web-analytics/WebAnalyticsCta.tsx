'use client';

import { Reveal } from '@/components/Reveal';
import Link from 'next/link';
import { usePopup } from '@/components/providers/PopupProvider';

export function WebAnalyticsCta() {
  const { openPopup } = usePopup();
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-slate-50 pt-8 pb-12 text-foreground"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.03]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#ff6b35]/10 blur-3xl animate-float-slow"
      />
      
      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#ff6b35]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b35] ring-1 ring-[#ff6b35]/20">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b35]" />
              Web Analytics Service
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mt-6">
  Turn Data Into <span className="text-gradient">Direction</span>
</h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-sans mx-auto mt-5 max-w-[60rem] text-base leading-relaxed text-slate-500 text-pretty sm:text-lg">
              Your site's data can show what pulls visitors in, what keeps them around, and exactly where they drop off before converting. Measured properly, that becomes one of the more useful tools in your marketing toolkit.
            </p>
            <p className="font-sans mx-auto mt-5 max-w-[60rem] text-base leading-relaxed text-slate-500 text-pretty sm:text-lg">
              Whether you're running SEO, paid ads, social campaigns, or an online store, solid analytics helps you understand what's working and spot where the next opportunity is hiding. Done right, your website stops being just a presence online and becomes something you can measure, improve, and grow with confidence.
            </p>
            <p className="font-sans mx-auto mt-5 max-w-[60rem] text-base leading-relaxed font-bold text-slate-800 text-pretty sm:text-lg">
              Ready to make sense of your website data? Contact Inymart Labs to get started.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b35] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#ff6b35]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff6b35]/90 hover:shadow-[#ff6b35]/50 w-full sm:w-auto whitespace-nowrap"
              >
                Start Your Analytics Journey
                
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}