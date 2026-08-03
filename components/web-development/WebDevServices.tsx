'use client';

import { Reveal } from '@/components/Reveal';
import { CheckCircle2, Monitor } from 'lucide-react';

export function WebDevServices() {
  const services = [
    "Business Websites — professional sites that build trust and generate enquiries",
    "Ecommerce Websites — online stores with smooth checkout and product management",
    "Landing Pages — focused pages built for a specific campaign or offer",
    "Website Redesigns — modernizing and speeding up an existing website",
    "Web Applications — custom tools and portals built around specific business needs"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-rose-500/10 flex items-center justify-center shrink-0">
                <Monitor className="w-8 h-8 text-rose-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Types of Websites We Build
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 mb-8">
            {services.map((res, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium leading-relaxed">{res}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}