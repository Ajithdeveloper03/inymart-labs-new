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
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-white">
  Why Businesses Choose <span className="text-gradient">Consulting</span>
</h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="max-w-4xl mx-auto bg-[#122b38] p-8 md:p-12 rounded-2xl border border-white/5 shadow-xl text-center">
              <p className="text-lg text-zinc-300 leading-relaxed font-medium">
                An outside view can spot missed opportunities, unclear priorities, wasteful spending, and gaps between channels. Just as important, you learn why each action is recommended and how it supports your bigger goals, so your team can decide with confidence.
              </p>
            </div>
          </Reveal>
      </div>
    </section>
  );
}
