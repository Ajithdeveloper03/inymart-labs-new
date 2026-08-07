'use client';

import { Reveal } from '@/components/Reveal';
import { GitCompare } from 'lucide-react';

export function DmaComparison() {
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
  Digital <span className="text-gradient">Marketing Agency</span> vs. Managing Marketing In-House
</h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              Many businesses try to handle marketing internally before realizing the limits of doing it alone. Here's how the two compare:
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-1/4">Factor</th>
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-3/8 border-l border-slate-200">In-House Marketing</th>
                    <th className="py-5 px-6 font-bold text-primary text-lg w-3/8 border-l border-slate-200">Digital Marketing Agency (Inymart Labs)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Expertise</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Limited to what your team already knows</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Specialists across SEO, ads, social media, and web</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Cost</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Salaries, tools, and training add up</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">One coordinated team and budget</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Speed</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Slower learning curve</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Proven processes from day one</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Reporting</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Often informal or inconsistent</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Transparent monthly reporting across every channel</td>
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