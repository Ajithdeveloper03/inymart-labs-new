'use client';

import { Reveal } from '@/components/Reveal';
import { CheckCircle2, Rocket } from 'lucide-react';

export function DmaServices() {
  const services = [
    "SEO — helping your website rank higher on Google for the searches that matter",
    "Local SEO — getting your business found by nearby customers on Google Maps",
    "Social Media Optimization — building an active, professional social media presence",
    "Social Media Marketing — running paid ad campaigns that bring real leads and sales",
    "Web Analytics — turning your website data into clear, actionable insights",
    "Web Development — building fast, professional websites ready for growth",
    "Digital Marketing Consulting — expert guidance on strategy and priorities"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-rose-500/10 flex items-center justify-center shrink-0">
                <Rocket className="w-8 h-8 text-rose-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Our Digital Marketing Services
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 mb-8">
            {services.map((res, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
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