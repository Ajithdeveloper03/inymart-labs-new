'use client';

import { Reveal } from '@/components/Reveal';
import { Target, Calculator, Eye, Link, TrendingUp } from 'lucide-react';

export function DmcExpectations() {
  const points = [
    {
      title: `Clear Marketing Plan`,
      text: `A clear, prioritized marketing plan instead of scattered, guesswork-based efforts.`,
      icon: Target,
    },
    {
      title: `Better Budget Use`,
      text: `Better use of your marketing budget, spent on what actually drives results.`,
      icon: Calculator,
    },
    {
      title: `More Confidence`,
      text: `More confidence in marketing decisions, backed by data and expert advice.`,
      icon: Eye,
    },
    {
      title: `Improved Coordination`,
      text: `Improved coordination across SEO, social media, and ads instead of disconnected efforts.`,
      icon: Link,
    },
    {
      title: `Measurable Tracking`,
      text: `A clear way to measure whether your marketing is actually working.`,
      icon: TrendingUp,
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
              Once your Digital Marketing Consulting in Tamil Nadu and Trichy engagement is underway, here&apos;s what businesses typically see over time:
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
              Results from consulting often show up quickly in clarity and direction, with measurable marketing improvements building over the following months as the strategy is put into action.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
