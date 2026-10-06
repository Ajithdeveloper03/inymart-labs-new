'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Activity, Search, Target, Settings, PenTool, Link2, BarChart } from 'lucide-react';
import Link from 'next/link';

export function WebAnalyticsProcess() {
  const steps = [
    {
      title: `Checking Your Existing Setup`,
      desc: `Bad tracking gives bad answers. We go through your current analytics configuration looking for missing data, broken events, duplicate tags, and gaps in coverage, then fix the groundwork first so every report after that is trustworthy.`,
      icon: Activity
    },
    {
      title: `Setting Up Tracking Properly`,
      desc: `Getting real value from analytics means capturing the actions that matter: enquiry forms, phone calls, orders, file downloads, and button taps. We configure these events so you can see not just how many people visit, but what they actually do once they're there.`,
      icon: Search
    },
    {
      title: `Where Your Traffic Comes From`,
      desc: `Not all visitors arrive the same way. We break down traffic by organic search, paid ads, social platforms, referral sites, and direct visits, so you know which channels bring in people worth pursuing and which ones need a second look.`,
      icon: Target
    },
    {
      title: `How Visitors Actually Behave`,
      desc: `Raw visit counts only tell half the story. We look at popular pages, engagement patterns, click paths, and the exact points where people leave, which points to fixes for your content, navigation, or landing pages.`,
      icon: Settings
    },
    {
      title: `Tracking Conversions That Matter`,
      desc: (
        <>
          A conversion looks different for every business, a sale, an enquiry, a call, a booking. We set these up properly and track them, so you can see which pages and channels actually drive results instead of just counting visitors.
          <br /><br />
          Want to know which pages are costing you conversions? Let's find out together.
        </>
      ),
      icon: PenTool
    },
    {
      title: `Making Both Google Tools Work for You`,
      desc: `Used well, these two tools cover different angles. One shows how people behave after arriving on your site; the other reveals how you're showing up in search results, covering queries, click counts, impressions, and indexing status. We pull insight from both to build a fuller picture.`,
      icon: Link2
    },
    {
      title: `Reports You Can Actually Use`,
      desc: `A report full of numbers with no context isn't much help. Ours focus on what changed, why it matters, and what needs attention next, written so anyone running or marketing the business can act on it without needing a data background.`,
      icon: Activity
    },
    {
      title: `Staying on Top of Performance`,
      desc: `Search behaviour, competitors, and customer expectations shift constantly. We keep watching your key metrics over time, catching changes early so your marketing and website can adapt before small issues become bigger problems.`,
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
  What's <span className="text-gradient">Included</span>
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
              See Our Analytics Process in Action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
