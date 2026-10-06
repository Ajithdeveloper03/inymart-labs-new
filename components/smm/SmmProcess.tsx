'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Target, Users, Image as ImageIcon, Settings, SlidersHorizontal, TrendingUp, FileText } from 'lucide-react';
import Link from 'next/link';

export function SmmProcess() {
  const steps = [
    {
      title: `Finding the Right Audience`,
      desc: `Getting your ad in front of the wrong people wastes budget fast. We build audiences around location, age, interests, past behaviour, and prior interactions. Where it fits, we also use remarketing to reach people who've already visited your site, engaged with your pages, or clicked a previous ad.`,
      icon: Target
    },
    {
      title: `Creative That Actually Stops the Scroll`,
      desc: `People scroll past most social content without a second glance. Our images, videos, headlines, and captions are built to match your brand and actually communicate something, not just look polished. The goal is prompting real action, not admiring visuals.`,
      icon: ImageIcon
    },
    {
      title: `Facebook and Instagram Campaigns`,
      desc: `These platforms open up several ways to reach your audience, depending on what you're after: leads, site visits, product interest, direct messages, or sales. We tailor each campaign by location, audience type, budget, and what your business specifically needs.`,
      icon: Users
    },
    {
      title: `Setting Up and Running Campaigns`,
      desc: `Getting a campaign right before it launches matters more than fixing it after. We configure objectives, audiences, ad placements, budgets, and conversion tracking upfront, then keep watching performance once it's live, adjusting spend, targeting, or creative as the data comes in.`,
      icon: Settings
    },
    {
      title: `Testing What Actually Works`,
      desc: (
        <>
          The same ad rarely performs the same way for every audience. We run side-by-side tests on creatives, messaging, audiences, and offers, then lean into whatever the data shows is working better.
          <br /><br />
          Curious which version of your ad performs best? Let's test it and find out.
        </>
      ),
      icon: SlidersHorizontal
    },
    {
      title: `Turning Clicks Into Real Business`,
      desc: `An ad that gets clicks but no enquiries isn't doing its job. We build the full path, landing pages, lead forms, or messaging options, around the exact action you want visitors to take, rather than just chasing impressions.`,
      icon: TrendingUp
    },
    {
      title: `Keeping Budget Accountable`,
      desc: `We track where your ad spend is actually producing results, covering how far it reaches, what each click and lead costs, and how conversions compare to spend. Regular check-ins mean money moves toward what's working and away from what isn't.`,
      icon: FileText
    },
    {
      title: `Campaigns Built for Your Kind of Business`,
      desc: `A local shop, an online store, and a growing brand all need different approaches. Local campaigns can stay tight to a specific area, while ecommerce campaigns can chase people interested in particular products. The setup adjusts to your business model and customer journey.`,
      icon: Target
    },
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white overflow-hidden">
      <div className="container-x">
        <div className="relative z-20">
          <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  What Our SMM Service <span className="text-gradient">Covers</span>
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
