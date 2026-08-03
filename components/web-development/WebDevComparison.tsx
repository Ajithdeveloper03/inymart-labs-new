'use client';

import { Reveal } from '@/components/Reveal';
import { GitCompare } from 'lucide-react';

export function WebDevComparison() {
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
                Professional Web Development vs. DIY Website Builders
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              Many businesses start with a DIY website builder before realizing its limits. Here's how the two compare:
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-1/4">Factor</th>
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-3/8 border-l border-slate-200">DIY Website Builder</th>
                    <th className="py-5 px-6 font-bold text-primary text-lg w-3/8 border-l border-slate-200">Inymart Labs' Web Development Service</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Performance</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Often slow, generic templates</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Built for speed and your specific business</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">SEO Readiness</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Limited control over structure and code</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Clean code and structure built for SEO from day one</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Scalability</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Difficult to expand or customize</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Built to grow with your business</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Support</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Self-managed, limited help</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Ongoing maintenance and expert support</td>
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