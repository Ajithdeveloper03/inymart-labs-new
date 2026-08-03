'use client';

import { Reveal } from '@/components/Reveal';
import { BarChart3, TrendingUp } from 'lucide-react';

export function AiSeoExpectations() {
  const results = [
    "More accurate and complete mentions of your business across AI tools like ChatGPT and Perplexity",
    "Better chances of being recommended when customers ask AI tools for suggestions",
    "Content that also strengthens traditional SEO, since AI-ready content tends to be clearer and more structured",
    "Fewer instances of outdated or incorrect information about your business appearing in AI answers",
    "Monthly visibility on how your AI presence is changing over time"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <BarChart3 className="w-8 h-8 text-orange-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                What Results Can You Expect?
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Once your AI SEO Service in Tamil Nadu and AI SEO Service in Trichy strategy is in motion, here's what businesses typically see over time:
            </p>
          </Reveal>

          <div className="grid gap-4 mb-8">
            {results.map((res, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                  <TrendingUp className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium leading-relaxed">{res}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <p className="text-gray-600 text-lg leading-relaxed italic">
              AI SEO results build more gradually than paid ads, since they depend on AI platforms recrawling and re-indexing content — most businesses see meaningful shifts in AI visibility over 2–4 months.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}