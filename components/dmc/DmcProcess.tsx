'use client';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, Target, Activity, Search, Map, Settings, PenTool, Link2 } from 'lucide-react';
import Link from 'next/link';

export function DmcProcess() {
  const steps = [
    { title: 'Business & Goal Understanding', desc: "We start by learning about your business, your customers, and what success actually looks like for you.", icon: Target },
    { title: 'Marketing Audit', desc: 'We review your website, SEO, social media, ads, and analytics to see what\'s working and what\'s not.', icon: Activity },
    { title: 'Competitor Insight', desc: 'We look at how similar businesses are approaching marketing, so your strategy is realistic and competitive.', icon: Search },
    { title: 'Strategy Roadmap', desc: 'We build a clear, prioritized plan showing what to focus on first, second, and later.', icon: Map },
    { title: 'Channel Recommendations', desc: 'We advise on which channels — SEO, social media, ads, or a mix — deserve your time and budget.', icon: Settings },
    { title: 'Implementation Guidance', desc: 'We explain exactly how to execute the plan, whether your team handles it or we do.', icon: PenTool },
    { title: 'Ongoing Advisory', desc: 'We stay available for regular check-ins, helping you adjust the strategy as your business grows.', icon: Link2 }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              Our Consulting Process
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mx-auto"></div>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>
          <div className="block md:hidden absolute left-7 sm:left-9 top-8 bottom-0 w-0.5 bg-slate-200"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = (index + 1) % 2 === 0; 
            
            return (
              <Reveal key={index} delay={index * 50}>
                <div className={`relative flex flex-row ${isEven ? 'md:flex-row-reverse' : ''} gap-6 sm:gap-10 md:gap-0 items-start md:items-center mb-16 md:mb-24 last:mb-0`}>
                  
                  <div className="hidden md:block md:w-1/2"></div>

                  <div className="relative z-10 flex flex-col items-center shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-white border-4 border-slate-50 shadow-md flex items-center justify-center text-primary font-bold text-xl sm:text-2xl relative">
                      {index + 1}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border-2 border-white text-slate-500">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-10 lg:pr-16' : 'md:pl-10 lg:pl-16'} pt-2 md:pt-0 w-full`}>
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center">
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
              See Our Consulting Approach in Action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}