'use client';

import { Reveal } from '@/components/Reveal';
import { BookOpen } from 'lucide-react';

export function LocalSeoKeyFacts() {
  const facts = [
    { label: "Service", value: "Local SEO Agency in Tamil Nadu and Local SEO Agency in Trichy" },
    { label: "Headquarters", value: "Tiruchirappalli, Tamil Nadu" },
    { label: "Service Areas", value: "Trichy, Chennai, Madurai, Coimbatore, and nearby regions" },
    { label: "Core Process", value: "Google Business Profile setup, local keyword research, listings and citations, review management, location-based content, map pack optimization, monthly reporting" },
    { label: "Typical Timeline", value: "Early visibility improvements within a few weeks; stronger results by month 2–3" },
    { label: "Reporting", value: "Simple monthly reports covering local rankings, calls, and direction requests" }
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
                Key Facts About Inymart Labs' Local SEO Service
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