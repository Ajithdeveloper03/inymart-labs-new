'use client';

import { Reveal } from '@/components/Reveal';
import { Eye, PhoneCall, Calculator, TrendingUp, FileText } from 'lucide-react';

export function SmmExpectations() {
  const points = [
    {
      title: `Immediate Visibility`,
      text: `Immediate visibility for your business through targeted paid ads.`,
      icon: Eye,
    },
    {
      title: `Fast Leads`,
      text: `More calls, form fills, and enquiries within days of launching.`,
      icon: PhoneCall,
    },
    {
      title: `Clear ROI`,
      text: `Clearer understanding of your cost per lead and return on ad spend.`,
      icon: Calculator,
    },
    {
      title: `Steady Improvement`,
      text: `Steady improvement in campaign performance as we test and optimize.`,
      icon: TrendingUp,
    },
    {
      title: `Simple Reports`,
      text: `Simple monthly reports showing exactly where your ad budget is going.`,
      icon: FileText,
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-[#0c1f28]">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 font-display">
              What Results Can You Expect?
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Once your social media marketing agency in Tamil Nadu and social media marketing agency in Trichy campaigns are live, here's what businesses typically see over time:
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={index} delay={index * 100} className="h-full">
                <div className="bg-[#122b38] rounded-3xl p-8 border border-white/5 h-full hover:border-primary/50 transition-colors flex flex-col group">
                  {point.title && <h3 className="text-lg font-bold text-white mb-8 pr-4 leading-snug">{point.title}</h3>}
                  <div className="mb-6">
                    <Icon className="w-10 h-10 text-primary stroke-1" />
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto mt-16 bg-[#122b38] border border-white/5 rounded-2xl p-8 text-center">
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              Unlike SEO, paid social media marketing results appear almost immediately — most businesses see traffic and enquiries within the first few days, with performance improving further as campaigns are optimized over the following weeks.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
