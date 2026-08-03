'use client';

import { Reveal } from '@/components/Reveal';
import { BookOpen } from 'lucide-react';

export function WebAnalyticsKeyFacts() {
  const facts = [
    { label: "Service", value: "Web Analytics Service in Trichy Tamil Nadu" },
    { label: "Headquarters", value: "Tiruchirappalli, Tamil Nadu" },
    { label: "Tools Used", value: "Google Analytics, Google Search Console, and other free tracking tools" },
    { label: "Core Process", value: "Analytics audit, correct setup, goal mapping, traffic analysis, behavior analysis, custom reporting, ongoing reviews" },
    { label: "Typical Timeline", value: "Accurate data immediately after setup; clearer insights build over 2–3 months" },
    { label: "Reporting", value: "Monthly, in plain language, no technical jargon" }
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
                Key Facts About Inymart Labs' Web Analytics Service
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