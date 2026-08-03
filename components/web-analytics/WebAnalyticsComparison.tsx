'use client';

import { Reveal } from '@/components/Reveal';
import { GitCompare } from 'lucide-react';

export function WebAnalyticsComparison() {
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
                Web Analytics vs. Just Having Google Analytics Installed
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              Having Google Analytics installed is not the same as having accurate, actionable data. Here's the difference:
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-1/4">Factor</th>
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-3/8 border-l border-slate-200">Google Analytics Alone</th>
                    <th className="py-5 px-6 font-bold text-primary text-lg w-3/8 border-l border-slate-200">Inymart Labs' Web Analytics Service</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Setup Accuracy</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Often incomplete or misconfigured</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Audited and corrected for accuracy</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Interpretation</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Raw charts, no explanation</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Plain-language insights and next steps</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Goal Tracking</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Rarely mapped to business goals</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Mapped to calls, enquiries, and sales</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Action Plan</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">None</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Clear monthly recommendations</td>
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