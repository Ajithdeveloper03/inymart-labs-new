'use client';

import { Reveal } from '@/components/Reveal';
import { MapPin, Globe2, Building, Wrench, Sparkles, Building2 } from 'lucide-react';

const INDUSTRIES = [
  'Real Estate', 'Roofing & Construction', 'IT & Tech Parks', 
  'Interiors', 'Restaurants', 'Education', 'Manufacturing', 
  'E-commerce', 'Professional Services'
];

const SERVICES = [
  'SEO', 'Local SEO', 'SMO', 'Social Media Marketing', 
  'Web Analytics', 'Web Development', 'Digital Consulting', 'PPC'
];

export function PortfolioKeyFacts() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background Graphic elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-x relative z-10">
        
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inymart Labs Impact</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold leading-[1.1] text-foreground tracking-tight">
              Key Facts About <span className="text-primary">Our Work</span>
            </h2>
          </Reveal>
        </div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Highlight Counter Card (Brands Served) - Large Left */}
          <Reveal delay={100} className="md:col-span-12 lg:col-span-5 h-full">
            <div className="group relative flex flex-col justify-center h-full min-h-[300px] rounded-[32px] bg-gradient-to-br from-[#fff7ed] to-white p-8 lg:p-12 border border-orange-100 shadow-[0_8px_30px_rgb(255,107,53,0.06)] overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(255,107,53,0.12)]">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] transition-transform duration-500 group-hover:scale-110 group-hover:opacity-[0.06] text-primary">
                <Globe2 className="w-48 h-48 -mr-10 -mt-10" />
              </div>
              <h3 className="font-sans text-lg text-primary font-bold tracking-widest uppercase mb-4 relative z-10">
                Brands Served
              </h3>
              <div className="font-display text-8xl lg:text-9xl font-black text-foreground leading-none tracking-tighter mb-4 relative z-10">
                50<span className="text-primary">+</span>
              </div>
              <p className="font-sans text-slate-500 text-lg lg:text-xl leading-relaxed relative z-10 text-justify sm:text-left">
                Across India, UAE, UK, and the USA.
              </p>
            </div>
          </Reveal>

          {/* Right Column Stack */}
          <div className="md:col-span-12 lg:col-span-7 flex flex-col gap-6 lg:gap-8">
            
            {/* Top Row inside Right Stack: Service & Headquarters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              <Reveal delay={200}>
                <div className="group relative flex flex-col h-full rounded-3xl bg-white p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:-rotate-3">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    Service Focus
                  </h3>
                  <p className="font-sans text-slate-500 leading-relaxed text-justify sm:text-left">
                    Digital Marketing Agency based in Trichy, Tamil Nadu.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="group relative flex flex-col h-full rounded-3xl bg-white p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    Headquarters
                  </h3>
                  <p className="font-sans text-slate-500 leading-relaxed text-justify sm:text-left">
                    Tiruchirappalli,<br />Tamil Nadu, India.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Bottom Row inside Right Stack: Services Delivered */}
            <Reveal delay={400}>
              <div className="group relative flex flex-col rounded-3xl bg-white p-8 lg:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:rotate-45">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground">
                    Services Delivered
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 lg:gap-3 justify-center sm:justify-start">
                  {SERVICES.map((srv, i) => (
                    <span key={i} className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 text-sm font-semibold transition-colors hover:bg-primary hover:text-white hover:border-primary">
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>

          {/* Full Width Bottom: Industries Covered */}
          <Reveal delay={500} className="md:col-span-12">
            <div className="group relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 rounded-[32px] bg-secondary/5 p-8 lg:p-10 border border-secondary/10 transition-all hover:border-secondary/20">
              <div className="flex-shrink-0">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Industries Covered</h3>
                <p className="font-sans text-slate-500 text-sm text-justify sm:text-left">Deep expertise across multiple sectors.</p>
              </div>
              <div className="h-px w-full lg:h-16 lg:w-px bg-slate-200 hidden lg:block"></div>
              <div className="flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-start">
                {INDUSTRIES.map((ind, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm text-sm font-semibold transition-all hover:bg-primary/10 hover:text-primary hover:border-primary/20 hover:scale-105 cursor-default">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
