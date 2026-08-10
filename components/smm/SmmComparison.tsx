'use client';

import { Reveal } from '@/components/Reveal';

export function SmmComparison() {
  return (
    <section className="relative pt-8 pb-12 bg-slate-50 border-t border-slate-100">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
              Social Media Marketing (Ads) vs. Social <span className="text-gradient">Media Optimization</span> (Organic)
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Businesses often confuse paid social media marketing with organic social media optimization. Here's the difference:
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-5xl mx-auto bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-6 px-6 font-bold text-slate-800 text-lg w-[20%]">Factor</th>
                    <th className={`py-6 px-6 font-bold text-lg w-[40%] border-l border-slate-200 ${true ? 'text-primary bg-primary/5' : 'text-slate-800'}`}>Social Media Marketing (Ads)</th>
                    <th className={`py-6 px-6 font-bold text-lg w-[40%] border-l border-slate-200 ${false ? 'text-primary bg-primary/5' : 'text-slate-800'}`}>Social Media Optimization (Organic)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">Cost</td>
                    <td className={`py-5 px-6 font-medium border-l border-slate-100 ${true ? 'text-slate-800 bg-primary/5' : 'text-slate-600'}`}>Requires ad spend budget</td>
                    <td className={`py-5 px-6 border-l border-slate-100 ${false ? 'text-slate-800 font-medium bg-primary/5' : 'text-slate-600'}`}>No direct ad spend</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">Speed of Results</td>
                    <td className={`py-5 px-6 font-medium border-l border-slate-100 ${true ? 'text-slate-800 bg-primary/5' : 'text-slate-600'}`}>Days</td>
                    <td className={`py-5 px-6 border-l border-slate-100 ${false ? 'text-slate-800 font-medium bg-primary/5' : 'text-slate-600'}`}>Weeks to months</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">Best For</td>
                    <td className={`py-5 px-6 font-medium border-l border-slate-100 ${true ? 'text-slate-800 bg-primary/5' : 'text-slate-600'}`}>Immediate leads and sales</td>
                    <td className={`py-5 px-6 border-l border-slate-100 ${false ? 'text-slate-800 font-medium bg-primary/5' : 'text-slate-600'}`}>Long-term brand presence</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">Reach</td>
                    <td className={`py-5 px-6 font-medium border-l border-slate-100 ${true ? 'text-slate-800 bg-primary/5' : 'text-slate-600'}`}>Targeted, paid audience</td>
                    <td className={`py-5 px-6 border-l border-slate-100 ${false ? 'text-slate-800 font-medium bg-primary/5' : 'text-slate-600'}`}>Existing followers and organic reach</td>
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
