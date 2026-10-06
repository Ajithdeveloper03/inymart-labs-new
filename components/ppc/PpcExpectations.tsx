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
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-white">
  Constant Testing and <span className="text-gradient">Improvement</span>
</h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="max-w-4xl mx-auto bg-[#122b38] p-8 md:p-12 rounded-2xl border border-white/5 shadow-xl text-center">
              <p className="text-lg text-zinc-300 leading-relaxed font-medium">
                Buyer behaviour and competitors keep shifting, so campaigns need steady fine-tuning. We test ad messages, keywords, targeting, landing page ideas, and bidding methods. Winners get more attention, while weak performers are fixed, paused, or replaced.
              </p>
            </div>
          </Reveal>
      </div>
    </section>
  );
}
