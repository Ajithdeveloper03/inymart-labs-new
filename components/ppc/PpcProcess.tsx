'use client';

import { Reveal } from '@/components/Reveal';
import { Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function PpcProcess() {
  const steps = [
    { title: "1. Goal Setting", desc: "We start by understanding what success looks like for you — calls, enquiries, purchases, or sign-ups." },
    { title: "2. Keyword Research", desc: "We find the exact search terms your potential customers are typing into Google." },
    { title: "3. Campaign Setup", desc: "We build your Google Ads campaigns correctly from the start, with the right structure, targeting, and budget." },
    { title: "4. Ad Copywriting", desc: "We write clear, compelling ad copy that speaks directly to what your customer is searching for." },
    { title: "5. Landing Page Alignment", desc: "We make sure the page your ad leads to actually matches what was promised, so visitors don't bounce away." },
    { title: "6. Bid Management", desc: "We manage your budget and bids daily, adjusting to get the most value from every rupee spent." },
    { title: "7. A/B Testing", desc: "We test different ads and keywords to see what brings the best results, and scale up what works." },
    { title: "8. Reporting", desc: "Every month, you get a simple report showing spend, reach, clicks, and leads — no confusing jargon." }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                <Layers className="w-8 h-8 text-cyan-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Our PPC Process
              </h2>
            </div>
          </Reveal>

          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                    {i + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <h3 className="font-bold text-lg text-[#0c1f28] mb-2">{step.title.replace(/^\d+\.\s*/, '')}</h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={800} className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              See Our PPC Process in Action <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}