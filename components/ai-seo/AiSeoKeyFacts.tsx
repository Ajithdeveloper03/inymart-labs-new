'use client';

import { Reveal } from '@/components/Reveal';
import { BookOpen } from 'lucide-react';

export function AiSeoKeyFacts() {
  const facts = [
    { label: "Service", value: "AI SEO Service in Tamil Nadu, AI SEO Service in Trichy, and AEO Service" },
    { label: "Headquarters", value: "Tiruchirappalli, Tamil Nadu" },
    { label: "AI Platforms Covered", value: "ChatGPT, Gemini, Copilot, Perplexity, and Grok" },
    { label: "Core Process", value: "AI visibility audit, content restructuring, entity and fact-building, citation-ready content, ongoing AI monitoring" },
    { label: "Typical Timeline", value: "Visibility improvements typically build over 2–4 months as AI platforms recrawl and re-index content" },
    { label: "Reporting", value: "Monthly updates on how your business appears across AI search tools" }
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
                Key Facts About Inymart Labs' AI SEO Service
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