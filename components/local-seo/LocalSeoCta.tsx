'use client';

import { Reveal } from '@/components/Reveal';
import { Phone, Mail, Users } from 'lucide-react';
import Link from 'next/link';
import { usePopup } from '@/components/providers/PopupProvider';

export function LocalSeoCta() {
  const { openPopup } = usePopup();
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-slate-50 pt-16 pb-20 text-foreground"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.03]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#ff6b35]/10 blur-3xl animate-float-slow"
      />
      
      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="flex flex-col items-center text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0">
                  <Users className="w-8 h-8 text-pink-500" />
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground">
                  Reach the Customers <span className="text-gradient">Already Searching Nearby</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="font-sans mx-auto mt-6 max-w-[60rem] text-base leading-relaxed text-slate-600 text-pretty sm:text-lg mb-10">
              Shops, clinics, eateries, home-service businesses, and professional firms all depend on nearby customers finding them, and that's exactly where Local SEO earns its keep. Whether you run one location or several, the right strategy helps your business get discovered right when someone nearby is looking.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap">
              <Link
                href="/contact"
                
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b35] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#ff6b35]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff6b35]/90 hover:shadow-[#ff6b35]/50 w-full sm:w-auto whitespace-nowrap"
              >
                Start Your Local SEO Journey
                
              </Link>
              
              

              
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}