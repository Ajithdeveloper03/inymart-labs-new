'use client';

import { Reveal } from '@/components/Reveal';
import { Plus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    image: '/Visible + Reachable +.png',
    title: 'Visible + Reachable + Clickable + Buyable',
    description: 'A growth formula built for conversions, not just clicks, including through Google Ads.',
  },
  {
    image: "/Built for today's video.png",
    title: "Built for today's video production search",
    description: 'Intent, voice, location, and AI-driven discovery optimized for modern platforms.',
  },
  {
    image: '/Data speaks, not.png',
    title: 'Data speaks, not guesswork',
    description: 'Every recommendation is backed by measurable analytics and solid data.',
  },
  {
    image: '/Clear reporting.png',
    title: 'Clear reporting',
    description: 'No fancy words just to look smart. We share clear ideas and outcomes you can act on.',
  },
  {
    image: '/Real humans, real.png',
    title: 'Real humans, real conversations',
    description: 'A team that understands Tamil Nadu businesses and offers dedicated digital marketing solutions.',
  },
];

export function WhatMakesUsDifferent() {
  return (
    <section className="relative bg-secondary/30 py-12 lg:py-16 overflow-hidden">
      <div className="container-x relative">
        <div className="mb-16 max-w-3xl mx-auto text-center flex flex-col items-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-[1.15] mb-6">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed">
              Most Tamil Nadu agencies offer a similar mix of SEO, SMO, PPC, and web development to enhance online visibility. Here&apos;s where we stand apart.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-16">
          {features.map((feature, idx) => (
            <Reveal key={idx} delay={150 + idx * 50}>
              <div className="group relative flex h-full flex-col rounded-[24px] bg-white shadow-sm transition-shadow hover:shadow-xl border border-zinc-100 overflow-visible">
                
                {/* Top Image Section */}
                <div className="relative h-44 w-full overflow-hidden rounded-t-[24px]">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/40 to-transparent" />
                  
                  {/* Title over image */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="font-display text-base font-bold text-white leading-snug">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Overlapping Plus Button */}
                <button 
                  aria-label="Learn more" 
                  className="absolute right-6 top-[calc(11rem-20px)] flex h-10 w-10 items-center justify-center rounded-full bg-[#F97316] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#EA580C] z-10"
                >
                  <Plus className="h-5 w-5" />
                </button>

                {/* Bottom Text Section */}
                <div className="p-5 pt-8 flex-1 flex flex-col">
                  <p className="font-sans text-[13px] text-muted-foreground leading-relaxed text-center sm:text-left">
                    {feature.description}
                  </p>
                </div>
                
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center">
          <Reveal delay={400}>
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              See Why Businesses Choose Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
