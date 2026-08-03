'use client';

import { Reveal } from '@/components/Reveal';
import { GitCompare } from 'lucide-react';

export function PpcComparison() {
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
                PPC vs. SEO — Which Do You Need?
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              Businesses often ask whether to invest in PPC, SEO, or both. Here's how they compare:
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-1/4">Factor</th>
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-3/8 border-l border-slate-200">PPC</th>
                    <th className="py-5 px-6 font-bold text-primary text-lg w-3/8 border-l border-slate-200">SEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Speed of Results</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Days</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Months</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Cost Structure</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Pay per click, ongoing ad spend</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Investment in strategy and content, no per-click cost</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Visibility</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Top of search results while ads run</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Organic rankings that persist over time</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Best For</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Immediate leads and time-sensitive offers</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Long-term, sustainable visibility</td>
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