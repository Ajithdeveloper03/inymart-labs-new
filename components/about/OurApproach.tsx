'use client';

import { Reveal } from '@/components/Reveal';
import { Search, Wrench, ArrowUpRight, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePopup } from '@/components/providers/PopupProvider';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Website audit, keyword research, competitor benchmarking, and search-intent mapping.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Optimize',
    description: 'On-page and technical SEO, Local SEO, content optimization, and schema markup.',
    icon: Wrench,
  },
  {
    number: '03',
    title: 'Expand',
    description: 'SMO, SMM, PPC campaigns, and content marketing to broaden your reach.',
    icon: ArrowUpRight,
  },
  {
    number: '04',
    title: 'Evolve',
    description: 'AEO & GEO strategies to help your business get discovered on AI platforms like ChatGPT, Gemini, and Perplexity.',
    icon: Sparkles,
  },
];

export function OurApproach() {
  const { openPopup } = usePopup();
  return (
    <section className="relative bg-[#0c1f28] py-12 lg:py-16 overflow-hidden">
      <div className="container-x relative">
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-[1.15] mb-6">
              Our Approach — <span className="text-gradient">How We Work</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-sans text-zinc-300 text-lg leading-relaxed">
              Every engagement includes analytics and transparent reporting, so you know how enquiries, calls, and conversions are trending.
            </p>
          </Reveal>
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[50px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />

          {steps.map((step, idx) => (
            <Reveal key={idx} delay={150 + idx * 100} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#122b38] border border-primary/20 mb-6 group-hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {step.number}
                  </div>
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-zinc-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center">
          <Reveal delay={500}>
            <button
              onClick={openPopup}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
            >
              Start Your Growth Plan
              <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
