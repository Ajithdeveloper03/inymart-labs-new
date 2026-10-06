'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Activity, Search, Target, Settings, PenTool, Link2, BarChart, Zap } from 'lucide-react';
import Link from 'next/link';

export function PpcProcess() {
  const steps = [
    {
      title: `Keyword Research`,
      desc: (
        <>
          <p>We study what people type, why they type it, how competitive each term is, and how likely it is to lead to a sale. Phrases with strong buying intent get priority, while vague or off-topic searches are blocked using negative keywords. That keeps your budget away from casual browsing.</p>
        </>
      ),
      icon: Search
    },
    {
      title: `Campaign Setup`,
      desc: (
        <>
          <p>Campaigns are grouped by service, product, location, and buyer intent. Next come keyword match types, budgets, schedules, devices, and target areas, all tuned to each campaign. A tidy structure makes it easy to see what works and what does not.</p>
        </>
      ),
      icon: Target
    },
    {
      title: `Ad Copy`,
      desc: (
        <>
          <p>Our headlines and descriptions answer what the searcher wants and spotlight a benefit, service, offer, or clear next step. We run several versions side by side to learn which message people respond to.</p>
        </>
      ),
      icon: PenTool
    },
    {
      title: `Landing Pages`,
      desc: (
        <>
          <p className="mb-2">A click is only the halfway point. We check whether the page:</p>
          <ul className="list-disc pl-5 mb-2 space-y-1 text-left">
            <li>Matches the promise made in the ad</li>
            <li>Has a clear call to action and an easy form</li>
            <li>Is simple to navigate and pleasant to use</li>
          </ul>
          <p>When ad and page work together, the path from search to enquiry or purchase feels natural.</p>
        </>
      ),
      icon: Link2
    },
    {
      title: `Audience and Location Targeting`,
      desc: (
        <>
          <p className="mb-2">Beyond location, we fine-tune devices, schedules, and audience signals based on your needs.</p>
          <ul className="list-disc pl-5 mb-2 space-y-1 text-left">
            <li>Local businesses: Campaigns stay focused on your service area</li>
            <li>Wider brands: Campaigns grow by location, customer behaviour, and goals</li>
          </ul>
        </>
      ),
      icon: Target
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white overflow-hidden">
      <div className="container-x">
        <div className="relative z-20">
          <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  How Our PPC <span className="text-gradient">Service Works</span>
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
                <div className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} md:gap-0 items-center mb-0 md:mb-24 last:mb-0`}>
                  
                  {/* MOBILE Vertical Line - Upwards (Connects Previous Card to Number) */}
                  {index !== 0 && (
                    <div className="w-0.5 h-8 sm:h-12 bg-primary md:hidden shrink-0"></div>
                  )}

                  {/* DESKTOP Vertical Line Segment - Downwards */}
                  {index !== steps.length - 1 && (
                    <div className="absolute w-0.5 bg-primary -z-10 hidden md:block
                      left-1/2 md:top-1/2 md:h-[calc(50%+96px)] -translate-x-1/2
                    "></div>
                  )}

                  {/* DESKTOP Vertical Line Segment - Upwards */}
                  {index !== 0 && (
                    <div className="absolute w-0.5 bg-primary -z-10 hidden md:block
                      left-1/2 md:top-0 md:h-[50%] -translate-x-1/2
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

                  {/* MOBILE Vertical Line - Downwards (Connects Number to Card) */}
                  <div className="w-0.5 h-8 sm:h-12 bg-primary md:hidden shrink-0"></div>
                  
                  {/* Content (Alternates sides on Desktop, Full width on Mobile) */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-10 lg:pr-16' : 'md:pl-10 lg:pl-16'} pt-0 w-full px-2 sm:px-8 md:px-0`}>
                    <div className="relative z-20 bg-slate-100 rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <div className="text-gray-600 leading-relaxed text-lg text-left">{step.desc}</div>
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
              Selling in Trichy or anywhere in Tamil Nadu? Ask Inymart Labs for a campaign plan.
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
