'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Search, Activity, Target, Settings, PenTool, Link2, BarChart } from 'lucide-react';
import Link from 'next/link';

export function SeoProcess() {
  const steps = [
    {
      title: 'Website Audit',
      desc: "We will website's speed, structure, content, and technical health to find what's hold your rankings back.",
      icon: Activity
    },
    {
      title: 'Keyword Research',
      desc: 'We find the exact words and phrases your customers are typing into Google, including local searches like "near me" and voice searches.',
      icon: Search
    },
    {
      title: 'On-Page Optimization',
      desc: 'We fix your titles, headings, images, and page content so search engines and customers will understand your business clearly.',
      icon: Target
    },
    {
      title: 'Technical SEO',
      desc: 'We fix backend issues like slow loading, broken links, and mobile display problems that quietly hurt your rankings.',
      icon: Settings
    },
    {
      title: 'Content Optimization',
      desc: "We rewrite or improve your website content so it's simple, clear, and answers customer questions directly.",
      icon: PenTool
    },
    {
      title: 'Link Building',
      desc: 'We help other trusted websites link back to yours, which builds credibility with Google.',
      icon: Link2
    },
    {
      title: 'Reporting',
      desc: 'Every month, you get a simple report showing your rankings, traffic, and leads.',
      icon: BarChart
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white overflow-hidden">
      <div className="container-x">
        <div className="relative z-20">
          <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Our <span className="text-gradient">SEO Process</span>
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
              See Our SEO Process in Action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
