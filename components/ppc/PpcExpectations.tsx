'use client';

import { Reveal } from '@/components/Reveal';
import { TrendingUp, PhoneCall, LineChart, MapPin, FileText } from 'lucide-react';

export function PpcExpectations() {
  const points = [
    {
      title: null,
      text: `Immediate visibility at the top of Google search results for your chosen keywords`,
      icon: TrendingUp,
    },
    {
      title: null,
      text: `More calls, form fills, and enquiries within days of launching`,
      icon: PhoneCall,
    },
    {
      title: null,
      text: `Clearer understanding of your cost per lead and return on ad spend`,
      icon: LineChart,
    },
    {
      title: null,
      text: `Steady improvement in campaign performance as we test and optimize`,
      icon: MapPin,
    },
    {
      title: null,
      text: `Simple monthly reports showing exactly where your ad budget is going`,
      icon: FileText,
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-[#0c1f28]">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-white mb-6">
  What Results <span className="text-gradient">Can You Expect</span>?
</h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Once your PPC Service in Tamil Nadu and PPC Service in Trichy campaigns are live, here's what businesses typically see over time:
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={index} delay={index * 100} className="h-full">
                <div className="bg-[#122b38] rounded-3xl p-8 border border-white/5 h-full hover:border-primary/50 transition-colors flex flex-col items-center justify-center text-center group">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0">
                        <Icon className="w-10 h-10 text-primary stroke-1" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">{point.title}</h3>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto mt-16 bg-[#122b38] border border-white/5 rounded-2xl p-8 text-center">
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              Unlike SEO, PPC results appear almost immediately — most businesses see traffic and enquiries within the first few days, with performance improving further as campaigns are optimized over the following weeks.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
