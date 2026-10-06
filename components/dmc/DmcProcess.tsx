'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Target, Activity, Search, Map, Settings, PenTool, Link2 } from 'lucide-react';
import Link from 'next/link';

export function DmcProcess() {
  const steps = [
    {
      title: `Digital Marketing Audit`,
      desc: (
        <>
          <p>An audit shows your strengths, weaknesses, and gaps. We go through your website, SEO, social media, paid campaigns, content, and analytics, so you can see what works, what needs attention, and where your resources could do more.</p>
        </>
      ),
      icon: Activity
    },
    {
      title: `SEO Strategy Consulting`,
      desc: (
        <>
          <p className="mb-2">SEO needs steady planning and technical care. We assess where you stand and look for openings in:</p>
          <ul className="list-disc text-left pl-5 space-y-1 mb-2">
            <li>Keywords and content</li>
            <li>Technical performance and on-page optimization</li>
            <li>Local visibility and authority</li>
          </ul>
          <p>Advice is based on your own website and market, never a one-plan-fits-all formula.</p>
        </>
      ),
      icon: Search
    },
    {
      title: `Social Media Consulting`,
      desc: (
        <>
          <p>Social media works best when it supports a clear message and a business purpose. We look at your audience, platforms, content style, engagement, and results, then suggest content directions, platform choices, and campaign ideas for a more consistent presence.</p>
        </>
      ),
      icon: Target
    },
    {
      title: `Paid Advertising Guidance`,
      desc: (
        <>
          <p className="mb-2">Ads perform when the right audience, message, spend, and target action line up. We evaluate your current campaigns and advise on:</p>
          <ul className="list-disc text-left pl-5 space-y-1 mb-2">
            <li>Campaign objectives and audience targeting</li>
            <li>Creative direction and landing pages</li>
            <li>Budget allocation and performance measurement</li>
          </ul>
          <p>You will see where paid ads fit within your wider marketing plan.</p>
        </>
      ),
      icon: Settings
    },
    {
      title: `Web Analytics and Performance Measurement`,
      desc: (
        <>
          <p>Reliable data leads to stronger decisions. We help you pick which numbers to watch, including goal actions, where visitors come from, and how customers behave. Analytics can show which channels bring valuable visitors and where potential customers drop off.</p>
        </>
      ),
      icon: Activity
    },
    {
      title: `Competitor and Market Analysis`,
      desc: (
        <>
          <p>Knowing your rivals reveals the shape of your market. We examine their website presence, content, search visibility, social activity, advertising, and customer communication. The findings point to opportunities and gaps while keeping your strategy realistic for your industry.</p>
        </>
      ),
      icon: Map
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white overflow-hidden">
      <div className="container-x">
        <div className="relative z-20">
          <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  What Our Consulting <span className="text-gradient">Covers</span>
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
              Want a clear view of your marketing? Request your digital marketing audit.
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
