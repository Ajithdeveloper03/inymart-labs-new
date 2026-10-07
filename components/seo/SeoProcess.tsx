'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Search, Activity, Target, Settings, PenTool, Link2, BarChart } from 'lucide-react';
import Link from 'next/link';

export function SeoProcess() {
  const steps = [
    {
      title: 'Finding the Keywords Worth Chasing',
      desc: 'Not every search term is worth targeting. We dig into commercial, informational, local, and long-tail searches tied to your business, filtering for terms that reflect genuine buying or enquiry intent rather than vague curiosity.',
      icon: Search
    },
    {
      title: "Fixing What's On the Page",
      desc: 'Each page should make its purpose obvious, both to visitors and to search engines. We tighten up page titles, header tags, meta text, URLs, internal links, image tags, and overall content structure so nothing important gets lost or ignored.',
      icon: Target
    },
    {
      title: 'Sorting Out the Technical Side',
      desc: 'A site with technical problems fights an uphill battle regardless of content quality. We check crawlability, indexing, mobile performance, page speed, broken links, redirects, sitemaps, and canonical tags, clearing the path for search engines to read your site properly.',
      icon: Settings
    },
    {
      title: 'Writing Content People Actually Want',
      desc: 'Good SEO content answers a real question or solves a real problem. We build or rework service pages, blog posts, location pages, and FAQs around topics your actual audience is searching for, giving them a reason to stay on the page and move forward.',
      icon: PenTool
    },
    {
      title: 'Local Visibility for Trichy Customers',
      desc: (
        <>
          For businesses drawing customers from Trichy and the surrounding areas, showing up in local search carries real weight. We tune your site and profile around local terms and accurate business details, while sharpening your Google Business Profile, so nearby customers find you first.
          <br /><br />
          Serving customers around Trichy? Let's strengthen your local visibility.
        </>
      ),
      icon: Activity
    },
    {
      title: 'Earning Authority the Right Way',
      desc: 'Credible external references still matter for search visibility. We chase relevant, quality-focused link opportunities rather than piling up random, low-value links that do little for your site\'s standing.',
      icon: Link2
    },
    {
      title: 'Keeping Score Over Time',
      desc: 'Search performance shifts as competitors, algorithms, and customer behaviour change. We track keyword positions, organic traffic, technical health, and conversions, then report in plain terms what\'s improving and what needs a second look.',
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
  The Core of Our <span className="text-gradient">SEO Work</span>
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
                    <div className="relative z-20 bg-slate-100 rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center">
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
