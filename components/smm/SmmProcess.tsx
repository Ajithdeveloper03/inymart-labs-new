'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Target, Users, Image as ImageIcon, Settings, SlidersHorizontal, TrendingUp, FileText } from 'lucide-react';
import Link from 'next/link';

export function SmmProcess() {
  const steps = [
    {
      title: `Goal Setting`,
      desc: `We start by understanding what success looks like for you — more calls, more orders, more enquiries, or more brand awareness.`,
      icon: Target
    },
    {
      title: `Audience Targeting`,
      desc: `We define exactly who should see your ads, based on location, age, interests, and buying behavior.`,
      icon: Users
    },
    {
      title: `Ad Creative`,
      desc: `We design scroll-stopping images and videos, and write ad copy that speaks directly to your customer's needs.`,
      icon: ImageIcon
    },
    {
      title: `Campaign Setup`,
      desc: `We set up your campaigns correctly across Facebook, Instagram, and LinkedIn, with the right budget and bidding strategy.`,
      icon: Settings
    },
    {
      title: `A/B Testing`,
      desc: `We test different ad versions to find out which images, headlines, and offers perform best.`,
      icon: SlidersHorizontal
    },
    {
      title: `Optimization`,
      desc: `We monitor campaigns daily and adjust targeting, budget, and creative to improve results over time.`,
      icon: TrendingUp
    },
    {
      title: `Reporting`,
      desc: `Every month, you get a simple report showing spend, reach, clicks, and leads — no confusing jargon.`,
      icon: FileText
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white overflow-hidden">
      <div className="container-x">
        <div className="relative z-20">
          <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Our Social <span className="text-gradient">Media</span> Ads Process
</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mx-auto"></div>
          </div>
        </Reveal>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = (index + 1) % 2 === 0; // step 2, 4, 6
            
            return (
              <Reveal key={index} delay={index * 50}>
                <div className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} gap-6 sm:gap-10 md:gap-0 items-center mb-16 md:mb-24 last:mb-0`}>
                  
                  {/* Vertical Line Segment - Downwards */}
                  {index !== steps.length - 1 && (
                    <div className="absolute w-0.5 bg-primary -z-10
                      left-1/2 top-[56px] h-[calc(100%+8px)]
                      md:top-1/2 md:h-[calc(50%+96px)] -translate-x-1/2
                    "></div>
                  )}

                  {/* Vertical Line Segment - Upwards */}
                  {index !== 0 && (
                    <div className="absolute w-0.5 bg-primary -z-10 hidden md:block
                      left-1/2 top-[-64px] h-[64px]
                      md:top-0 md:h-[50%] -translate-x-1/2
                    "></div>
                  )}

                  {/* Horizontal Connection Line */}
                  <div className={`absolute bg-primary -z-10 h-[2px] hidden md:block
                    md:top-1/2 md:-translate-y-1/2
                    ${isEven 
                      ? 'md:left-auto md:right-1/2 md:w-10 lg:w-16' 
                      : 'md:left-1/2 md:w-10 lg:w-16'
                    }
                  `} />

                  {/* Left Spacer (Desktop only) */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Icon & Number (Center on both) */}
                  <div className="relative z-10 flex flex-col items-center shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
                    <div className="w-14 h-14 rounded-full bg-white border-[2px] border-primary shadow-md flex items-center justify-center text-primary font-bold text-xl sm:text-2xl relative">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content (Alternates sides on Desktop, Full width on Mobile) */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-10 lg:pr-16' : 'md:pl-10 lg:pl-16'} pt-2 md:pt-0 w-full px-2 sm:px-8 md:px-0`}>
                    <div className="relative z-20 bg-slate-100 rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors group text-lg"
            >
              See Our Ad Campaigns in Action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
