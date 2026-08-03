'use client';

import { Reveal } from '@/components/Reveal';
import { TrendingUp, PhoneCall, LineChart, MapPin, FileText } from 'lucide-react';

export function DmaExpectations() {
  const points = [
    {
      title: null,
      text: `A more coordinated online presence, with SEO, social media, and ads working together`,
      icon: TrendingUp,
    },
    {
      title: null,
      text: `Steady growth in traffic, leads, and enquiries across channels`,
      icon: PhoneCall,
    },
    {
      title: null,
      text: `Clearer visibility into what`,
      icon: LineChart,
    },
    {
      title: null,
      text: `Better use of your marketing budget, focused on the channels that actually perform`,
      icon: MapPin,
    },
    {
      title: null,
      text: `A single point of contact for your entire digital marketing effort, instead of managing multiple vendors`,
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
              Once your Digital Marketing Agency in Tamil Nadu and Digital Marketing Agency in Trichy plan is in motion, here's what businesses typically see over time:
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
              Results build steadily as each channel is set up and optimized — many businesses see early improvements within the first 1–2 months, with stronger, compounding growth over 3–6 months.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
