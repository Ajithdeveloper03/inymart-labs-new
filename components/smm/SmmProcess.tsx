'use client';

import { Reveal } from '@/components/Reveal';
import { Target, Users, Image as ImageIcon, Settings, SlidersHorizontal, TrendingUp, FileText } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SmmProcess() {
  const processSteps = [
    {
      title: "Goal Setting",
      description: "We start by understanding what success looks like for you — more calls, more orders, more enquiries, or more brand awareness.",
      icon: Target
    },
    {
      title: "Audience Targeting",
      description: "We define exactly who should see your ads, based on location, age, interests, and buying behavior.",
      icon: Users
    },
    {
      title: "Ad Creative",
      description: "We design scroll-stopping images and videos, and write ad copy that speaks directly to your customer's needs.",
      icon: ImageIcon
    },
    {
      title: "Campaign Setup",
      description: "We set up your campaigns correctly across Facebook, Instagram, and LinkedIn, with the right budget and bidding strategy.",
      icon: Settings
    },
    {
      title: "A/B Testing",
      description: "We test different ad versions to find out which images, headlines, and offers perform best.",
      icon: SlidersHorizontal
    },
    {
      title: "Optimization",
      description: "We monitor campaigns daily and adjust targeting, budget, and creative to improve results over time.",
      icon: TrendingUp
    },
    {
      title: "Reporting",
      description: "Every month, you get a simple report showing spend, reach, clicks, and leads — no confusing jargon.",
      icon: FileText
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              Our Social Media Ads Process
            </h2>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === processSteps.length - 1;
            
            return (
              <div key={index} className="relative flex gap-6 md:gap-12 group">
                {/* Timeline Line */}
                {!isLast && (
                  <div className="absolute left-[27px] md:left-[39px] top-[60px] bottom-[-20px] w-[2px] bg-slate-100 group-hover:bg-[#ff6b35]/20 transition-colors duration-300" />
                )}
                
                {/* Number & Icon */}
                <Reveal className="relative z-10 shrink-0">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center relative group-hover:border-[#ff6b35]/10 group-hover:scale-110 transition-all duration-300">
                    <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#1a1f2e] text-white flex items-center justify-center text-xs md:text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#ff6b35]" />
                  </div>
                </Reveal>

                {/* Content */}
                <Reveal delay={100} className="flex-grow pb-12 md:pb-16">
                  <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 group-hover:border-[#ff6b35]/30 group-hover:bg-white group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1a1f2e] mb-4 font-display">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1f2e] text-white font-bold rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl group"
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