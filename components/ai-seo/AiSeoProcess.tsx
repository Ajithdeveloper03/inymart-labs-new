'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Activity, Search, Target, Settings, PenTool, Link2, BarChart } from 'lucide-react';
import Link from 'next/link';

export function AiSeoProcess() {
  const steps = [
    {
      title: `AI Visibility Audit`,
      desc: `We check how ChatGPT, Gemini, Perplexity, and other AI tools currently describe or represent your business — if at all.`,
      icon: Activity
    },
    {
      title: `Entity & Fact Building`,
      desc: `We create clear, consistent facts about your business — services, location, experience — that AI engines can confidently cite.`,
      icon: Search
    },
    {
      title: `Direct-Answer Content`,
      desc: `We restructure key pages with concise, direct answers to common customer questions, formatted for easy extraction.`,
      icon: Target
    },
    {
      title: `Structured Content`,
      desc: `We add comparison points, key-fact summaries, and clear headings that AI engines can parse and quote accurately.`,
      icon: Settings
    },
    {
      title: `Citation-Ready FAQs`,
      desc: `We build FAQ sections that directly answer the exact questions customers ask AI tools.`,
      icon: PenTool
    },
    {
      title: `Ongoing AI Monitoring`,
      desc: `We regularly check how your business is being represented across AI platforms and correct issues as they appear.`,
      icon: Link2
    },
    {
      title: `Reporting`,
      desc: `Every month, you get a simple update on your AI visibility progress — no confusing jargon.`,
      icon: BarChart
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              Our AI SEO (AEO) Process
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mx-auto"></div>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto relative">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>
          
          {/* Left Line for Mobile */}
          <div className="block md:hidden absolute left-7 sm:left-9 top-8 bottom-0 w-0.5 bg-slate-200"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = (index + 1) % 2 === 0; // step 2, 4, 6
            
            return (
              <Reveal key={index} delay={index * 50}>
                <div className={`relative flex flex-row ${isEven ? 'md:flex-row-reverse' : ''} gap-6 sm:gap-10 md:gap-0 items-start md:items-center mb-16 md:mb-24 last:mb-0`}>
                  
                  {/* Left Spacer (Desktop only) */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Icon & Number (Center on Desktop, Left on Mobile) */}
                  <div className="relative z-10 flex flex-col items-center shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-white border-4 border-slate-50 shadow-md flex items-center justify-center text-primary font-bold text-xl sm:text-2xl relative">
                      {index + 1}
                      
                    </div>
                  </div>
                  
                  {/* Content (Alternates sides on Desktop) */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-10 lg:pr-16' : 'md:pl-10 lg:pl-16'} pt-2 md:pt-0 w-full`}>
                    <div className="bg-slate-100 rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center">
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
              See Our AI SEO Process in Action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
