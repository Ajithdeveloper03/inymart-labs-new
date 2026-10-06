'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Activity, Search, Target, Settings, PenTool, Link2, BarChart } from 'lucide-react';
import Link from 'next/link';

export function AiSeoProcess() {
  const steps = [
    {
      title: `AI Visibility Audit`,
      desc: (
        <>
          <p className="mb-2">We begin by checking how AI platforms currently understand your business. We examine:</p>
          <ul className="list-disc pl-5 mb-2 space-y-1 text-left">
            <li>Brand mentions</li>
            <li>Service descriptions and locations</li>
            <li>Recommendations and key business facts</li>
          </ul>
          <p>The audit identifies missing information, inconsistencies, and outdated details, so the strategy has a clear direction and avoids unnecessary changes.</p>
        </>
      ),
      icon: Activity
    },
    {
      title: `Entity and Fact Building`,
      desc: (
        <p>AI systems need context to understand a business correctly. We organize important information about your brand, services, locations, expertise, products, and business identity. Consistent facts create stronger connections between your business and relevant topics, and make your content easier for customers and search technologies to interpret.</p>
      ),
      icon: Search
    },
    {
      title: `Direct Answer Content`,
      desc: (
        <p>AI users often ask complete questions instead of short keywords. We create and restructure content around those real questions, presenting the important answer first, followed by supporting context. This improves service pages, blogs, FAQs, and informational sections.</p>
      ),
      icon: Target
    },
    {
      title: `Structured and Citable Content`,
      desc: (
        <>
          <p className="mb-2">Content for AI search should be easy to understand and backed by clear facts. We improve:</p>
          <ul className="list-disc pl-5 mb-2 space-y-1 text-left">
            <li>Headings and summaries</li>
            <li>Comparisons and definitions</li>
            <li>FAQs and key information</li>
          </ul>
          <p>Where appropriate, we develop citation-ready statements that clearly communicate your business information.</p>
        </>
      ),
      icon: Settings
    },
    {
      title: `Ongoing AI Monitoring`,
      desc: (
        <p>AI search develops quickly, and the way platforms represent businesses can change. We monitor how your business appears across relevant AI platforms, look for missing, outdated, or inaccurate information, and review your strategy regularly as AI search evolves.</p>
      ),
      icon: Link2
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white overflow-hidden">
      <div className="container-x">
        <div className="relative z-20">
          <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Our AI SEO <span className="text-gradient">Process</span>
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
              Ready to start? Request your AI Visibility Audit today.
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
