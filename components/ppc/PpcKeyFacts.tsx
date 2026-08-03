'use client';

import { Reveal } from '@/components/Reveal';
import { BookOpen } from 'lucide-react';

export function PpcKeyFacts() {
  const facts = [
    { label: "Service", value: "PPC Service in Tamil Nadu and PPC Service in Trichy" },
    { label: "Headquarters", value: "Tiruchirappalli, Tamil Nadu" },
    { label: "Platforms", value: "Google Ads (search, display, and local campaigns)" },
    { label: "Core Process", value: "Goal setting, keyword research, campaign setup, ad copywriting, landing page alignment, bid management, A/B testing, monthly reporting" },
    { label: "Typical Timeline", value: "Traffic and enquiries within days of campaign launch" },
    { label: "Reporting", value: "Monthly reports covering spend, clicks, calls, and conversions" }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-8 h-8 text-amber-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Key Facts About Inymart Labs' PPC Service
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {facts.map((fact, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 hover:shadow-md transition-shadow">
                  <div className="sm:w-1/3 shrink-0 font-bold text-[#0c1f28]">
                    {fact.label}:
                  </div>
                  <div className="text-slate-600 sm:w-2/3">
                    {fact.value}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}