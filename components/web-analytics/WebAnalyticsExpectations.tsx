'use client';

import { Reveal } from '@/components/Reveal';
import { TrendingUp, PhoneCall, LineChart, MapPin, FileText, BarChart3 } from 'lucide-react';

export function WebAnalyticsExpectations() {
  const points = [
    {
      title: null,
      text: `Accurate, trustworthy data that reflects what`,
      icon: TrendingUp,
    },
    {
      title: null,
      text: `Clear answers on where your best customers come from — SEO, ads, or social media`,
      icon: PhoneCall,
    },
    {
      title: null,
      text: `Fewer wasted marketing rupees, since you`,
      icon: LineChart,
    },
    {
      title: null,
      text: `s actually working`,
      icon: MapPin,
    },
    {
      title: null,
      text: `A clear picture of where visitors drop off, so you can fix it and improve conversions`,
      icon: FileText,
    },
    {
      title: null,
      text: `Simple monthly reports that make sense, without needing to be a data expert`,
      icon: BarChart3,
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
              Once your Web Analytics Service in Tamil Nadu and Web Analytics Service in Trichy setup is in place, here's what businesses typically see over time:
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
              Results with analytics start immediately — once tracking is fixed, you get accurate data right away, with clearer patterns and insights building over 2–3 months.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
