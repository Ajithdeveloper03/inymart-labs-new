'use client';

import { Reveal } from '@/components/Reveal';
import { BookOpen } from 'lucide-react';

export function WebDevKeyFacts() {
  const facts = [
    { label: "Service", value: "Web Development Service in Tamil Nadu and Web Development Service in Trichy" },
    { label: "Headquarters", value: "Tiruchirappalli, Tamil Nadu" },
    { label: "Website Types", value: "Business websites, ecommerce stores, landing pages, redesigns, web applications" },
    { label: "Core Process", value: "Discovery, website structure, design, development, mobile optimization, SEO-ready setup, testing and launch, ongoing support" },
    { label: "Typical Timeline", value: "3–8 weeks for most business websites; ecommerce sites may take longer" },
    { label: "Support", value: "Ongoing maintenance and updates after launch" }
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
                Key Facts About Inymart Labs' Web Development Service
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