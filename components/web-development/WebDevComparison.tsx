'use client';

import { Reveal } from '@/components/Reveal';

export function WebDevComparison() {
  return (
    <section className="relative pt-8 pb-12 bg-slate-50 border-t border-slate-100">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
              Professional Web <span className="text-gradient">Development</span> vs. DIY Website Builders
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Many businesses start with a DIY website builder before realizing its limits. Here's how the two compare:
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
                    <th className={`py-6 px-6 font-bold text-lg w-[40%] border-l border-slate-200 ${false ? 'text-primary bg-primary/5' : 'text-slate-800'}`}>DIY Website Builder</th>
                    <th className={`py-6 px-6 font-bold text-lg w-[40%] border-l border-slate-200 ${true ? 'text-primary bg-primary/5' : 'text-slate-800'}`}>Inymart Labs' Web Development Service</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">Performance</td>
                    <td className={`py-5 px-6 font-medium border-l border-slate-100 ${false ? 'text-slate-800 bg-primary/5' : 'text-slate-600'}`}>Often slow, generic templates</td>
                    <td className={`py-5 px-6 border-l border-slate-100 ${true ? 'text-slate-800 font-medium bg-primary/5' : 'text-slate-600'}`}>Built for speed and your specific business</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">SEO Readiness</td>
                    <td className={`py-5 px-6 font-medium border-l border-slate-100 ${false ? 'text-slate-800 bg-primary/5' : 'text-slate-600'}`}>Limited control over structure and code</td>
                    <td className={`py-5 px-6 border-l border-slate-100 ${true ? 'text-slate-800 font-medium bg-primary/5' : 'text-slate-600'}`}>Clean code and structure built for SEO from day one</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">Scalability</td>
                    <td className={`py-5 px-6 font-medium border-l border-slate-100 ${false ? 'text-slate-800 bg-primary/5' : 'text-slate-600'}`}>Difficult to expand or customize</td>
                    <td className={`py-5 px-6 border-l border-slate-100 ${true ? 'text-slate-800 font-medium bg-primary/5' : 'text-slate-600'}`}>Built to grow with your business</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">Support</td>
                    <td className={`py-5 px-6 font-medium border-l border-slate-100 ${false ? 'text-slate-800 bg-primary/5' : 'text-slate-600'}`}>Self-managed, limited help</td>
                    <td className={`py-5 px-6 border-l border-slate-100 ${true ? 'text-slate-800 font-medium bg-primary/5' : 'text-slate-600'}`}>Ongoing maintenance and expert support</td>
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
