'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Activity, Search, Target, Settings, PenTool, Link2, BarChart, Zap } from 'lucide-react';
import Link from 'next/link';

export function WebDevProcess() {
  const steps = [
    {
      title: `Mobile-Ready Design`,
      desc: `Whether someone opens your site on a small phone screen or a large monitor, the layout reshapes itself automatically so nothing looks broken or cramped.`,
      icon: Activity
    },
    {
      title: `Navigation People Actually Understand`,
      desc: (
        <>
          Confusing menus lose visitors fast. We keep things simple:
          <ul className="list-disc pl-5 mt-2 space-y-1 text-left">
            <li>Short, clear menu labels</li>
            <li>A logical order from homepage to contact</li>
            <li>Buttons that tell visitors exactly what happens next</li>
          </ul>
          <p className="mt-2 text-left">Good structure quietly guides people toward booking, calling, or enquiring, without them noticing they're being guided.</p>
        </>
      ),
      icon: Search
    },
    {
      title: `Built Around What You Actually Need`,
      desc: (
        <>
          We don't force every client into the same template. Depending on your goals, we might add:
          <ul className="list-disc pl-5 mt-2 space-y-1 text-left">
            <li>Blog and resource sections</li>
            <li>Enquiry and quote request forms</li>
            <li>Catalogues or booking calendars</li>
            <li>Payment gateways or CRM connections</li>
          </ul>
          <p className="mt-2 text-left">Every add-on earns its place because your business needs it, not because it looks impressive.</p>
        </>
      ),
      icon: Target
    },
    {
      title: `Speed That Keeps Visitors From Leaving`,
      desc: `A page that takes too long to load loses visitors before they even see your services. We compress images, trim unnecessary scripts, and structure code so pages open quickly on any connection.`,
      icon: Settings
    },
    {
      title: `Groundwork for Search Visibility`,
      desc: (
        <>
          Getting found on Google starts at the build stage, not after launch. We handle:
          <ul className="list-disc pl-5 mt-2 space-y-1 text-left">
            <li>Proper heading order for each page</li>
            <li>Clean, readable URLs</li>
            <li>Metadata fields ready for your content</li>
            <li>Internal links that connect related pages</li>
          </ul>
          <p className="mt-2 text-left">Want the technical SEO groundwork done right? Ask us for a plan.</p>
        </>
      ),
      icon: PenTool
    },
    {
      title: `Security Baked Into the Build`,
      desc: `We don't treat security as an extra. Every site gets SSL encryption, hardened configurations, limited access permissions, and a routine backup schedule, so your data and your visitors stay protected.`,
      icon: Link2
    },
    {
      title: `A CMS You Can Actually Use`,
      desc: `Once your site is live, you shouldn't need to call a developer to fix a typo. We hand it over on a beginner-friendly platform, so your team can update text, swap images, or publish a blog post whenever needed.`,
      icon: BarChart
    },
    {
      title: `Real Testing Before Anything Goes Live`,
      desc: `We click through every page, submit every form, and open the site on multiple devices and browsers before handing it over. Catching a broken link or a form that doesn't fire is far cheaper before launch than after.`,
      icon: Zap
    },
    {
      title: `Support That Doesn't End at Launch`,
      desc: `Websites need occasional attention: a plugin update, a new page, a security patch, a seasonal promotion banner. We stay available for these changes so your site keeps working as your business grows.`,
      icon: Activity
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white overflow-hidden">
      <div className="container-x">
        <div className="relative z-20">
          <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  What You Get With Our <span className="text-gradient">Web Development</span> Service
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
              Talk to Our Web Development Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
