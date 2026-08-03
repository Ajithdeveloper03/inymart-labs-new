'use client';

import { Reveal } from '@/components/Reveal';
import { TrendingUp, PhoneCall, LineChart, MapPin, FileText } from 'lucide-react';

export function SeoExpectations() {
  const points = [
    {
      title: "Higher Rankings",
      text: "Higher rankings on Google for the keywords your customers actually search.",
      icon: TrendingUp,
    },
    {
      title: "More Enquiries",
      text: "More calls, form fills, and enquiries from your website and Google Business Profile.",
      icon: PhoneCall,
    },
    {
      title: "Steady Growth",
      text: "Steady growth in organic traffic month over month, without relying only on paid ads.",
      icon: LineChart,
    },
    {
      title: "Better Visibility",
      text: "Better visibility in local map results for searches from Trichy, Chennai, Madurai, and nearby areas.",
      icon: MapPin,
    },
    {
      title: "Clear Reports",
      text: "Clear monthly reports so you can see exactly how rankings, traffic, and leads are improving.",
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
              Once your SEO agency in Tamil Nadu and SEO agency in Trichy strategy is motion, here's what businesses typically see over time:
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={index} delay={index * 100} className="h-full">
                <div className="bg-[#122b38] rounded-3xl p-8 border border-white/5 h-full hover:border-primary/50 transition-colors flex flex-col group">
                  <h3 className="text-lg font-bold text-white mb-8 pr-4 leading-snug">{point.title}</h3>
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
              Results build gradually with SEO. Most businesses notice early movement in 2–3 months, with stronger, more consistent results by month 6 onward.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
