'use client';

import { Reveal } from '@/components/Reveal';
import { GitCompare } from 'lucide-react';

export function AiSeoComparison() {
  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0">
                <GitCompare className="w-8 h-8 text-purple-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                AI SEO (AEO) vs. Traditional SEO
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              Businesses often ask how AI SEO differs from the SEO they already know. Here's the comparison:
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-1/4">Factor</th>
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-3/8 border-l border-slate-200">Traditional SEO</th>
                    <th className="py-5 px-6 font-bold text-primary text-lg w-3/8 border-l border-slate-200">AI SEO / AEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Primary Target</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Google search rankings</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">AI tools like ChatGPT, Gemini, Perplexity</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Content Style</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Keyword-optimized pages</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Direct-answer, citable, structured content</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Success Measure</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Rankings and organic traffic</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Accurate AI mentions and recommendations</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Relationship to SEO</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">N/A</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Works alongside SEO, not instead of it</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}