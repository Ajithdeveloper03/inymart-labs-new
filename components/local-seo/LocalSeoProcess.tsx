'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Activity, Search, Target, Settings, PenTool, Link2, BarChart, MapPin } from 'lucide-react';
import Link from 'next/link';

export function LocalSeoProcess() {
  const steps = [
    {
      title: `Google Business Profile Setup`,
      desc: `This single listing carries a lot of weight in local search. We fill in accurate business details, pick the right categories, add service information, hours, and photos, then keep everything consistent, so customers can find you, understand what you offer, and reach out without confusion.`,
      icon: Activity
    },
    {
      title: `Finding the Keywords Your Customers Actually Use`,
      desc: `We research how people phrase local searches, service names, area names, and near-me phrasing included, based on real search intent. The aim is connecting your services to the right locations naturally, without cramming keywords in where they don't belong.`,
      icon: Search
    },
    {
      title: `Getting Your Business Listed Consistently`,
      desc: `Mismatched business details across directories quietly hurt your local visibility. We check major listings and correct your business name, street address, phone, website link, and category wherever they don't match, building a more dependable presence across the web.`,
      icon: Target
    },
    {
      title: `Managing Reviews the Right Way`,
      desc: `Reviews shape a customer's first impression before they even call. We help set up a practical approach to gathering honest feedback, since reviews grounded in real experience do more for credibility than anything manufactured.`,
      icon: Settings
    },
    {
      title: `Content Built Around Your Locations`,
      desc: `We build or refine service pages, area-specific pages, and blog content around topics relevant to where you operate, so search engines and visitors alike get a clearer sense of how your business fits into local search results.`,
      icon: PenTool
    },
    {
      title: `On-Page Fixes for Local Relevance`,
      desc: `Page titles, meta descriptions, heading tags, URLs, internal links, and image details all get reviewed so your site clearly states what you do and where you serve customers, making it easier for both visitors and search engines to understand your business.`,
      icon: Link2
    },
    {
      title: `Getting Into the Map Pack`,
      desc: `Showing up in Google's map results comes down to a mix of signals, how strong your profile is, how relevant your site is, your citations, your reviews, and how accurate your location details are. We work on strengthening these signals and keep monitoring where further improvement can move the needle.`,
      icon: MapPin
    },
    {
      title: `Tracking What's Actually Changing`,
      desc: `Local rankings shift as competitors and search behaviour change, so we don't set it and forget it. We watch rankings, profile activity, site traffic, and incoming enquiries, and report back regularly on what's improving and what needs attention.`,
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
  What Our Local SEO <span className="text-gradient">Service Covers</span>
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
              Not sure how your listings and content stack up locally? Let's find out.
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
