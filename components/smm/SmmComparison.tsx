'use client';

import { Reveal } from '@/components/Reveal';

export function SmmComparison() {
  return (
    <section className="relative pt-8 pb-12 bg-slate-50 border-t border-slate-100">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              Social Media Marketing (Ads) vs. Social Media Optimization (Organic)
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Businesses often confuse paid social media marketing with organic social media optimization. Here's the difference:
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-5xl mx-auto bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-6 px-6 font-bold text-slate-800 text-lg w-[20%]">Factor</th>
                    <th className="py-6 px-6 font-bold text-[#ff6b35] text-lg w-[40%] border-l border-slate-200 bg-[#ff6b35]/5">Social Media Marketing (Ads)</th>
                    <th className="py-6 px-6 font-bold text-slate-800 text-lg w-[40%] border-l border-slate-200">Social Media Optimization (Organic)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">Cost</td>
                    <td className="py-5 px-6 text-slate-800 font-medium border-l border-slate-100 bg-[#ff6b35]/5">Requires ad spend budget</td>
                    <td className="py-5 px-6 text-slate-600 border-l border-slate-100">No direct ad spend</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">Speed of Results</td>
                    <td className="py-5 px-6 text-slate-800 font-medium border-l border-slate-100 bg-[#ff6b35]/5">Days</td>
                    <td className="py-5 px-6 text-slate-600 border-l border-slate-100">Weeks to months</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">Best For</td>
                    <td className="py-5 px-6 text-slate-800 font-medium border-l border-slate-100 bg-[#ff6b35]/5">Immediate leads and sales</td>
                    <td className="py-5 px-6 text-slate-600 border-l border-slate-100">Long-term brand presence</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">Reach</td>
                    <td className="py-5 px-6 text-slate-800 font-medium border-l border-slate-100 bg-[#ff6b35]/5">Targeted, paid audience</td>
                    <td className="py-5 px-6 text-slate-600 border-l border-slate-100">Existing followers and organic reach</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}