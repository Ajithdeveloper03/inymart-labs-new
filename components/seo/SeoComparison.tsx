'use client';

import { Reveal } from '@/components/Reveal';
import { GitCompare } from 'lucide-react';

export function SeoComparison() {
  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0">
                <GitCompare className="w-8 h-8 text-purple-500" />
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground">
  SEO vs. Paid <span className="text-gradient">Ads (PPC)</span>
</h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              Businesses often ask how SEO differs from Paid Ads. Here's the comparison:
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-1/4">Factor</th>
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-3/8 border-l border-slate-200">Paid Ads (PPC)</th>
                    <th className="py-5 px-6 font-bold text-primary text-lg w-3/8 border-l border-slate-200">SEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Traffic Source</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Paid Placements</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Organic Search Results</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Cost</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Pay per click / impression</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Free clicks (investment in time & effort)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Timeline to Results</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Immediate</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Long-term (3-6+ months)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Sustainability</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Stops when budget runs out</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Continuous, compounding growth</td>
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