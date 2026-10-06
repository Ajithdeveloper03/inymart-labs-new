'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Activity, Search, Target, Settings, PenTool, Link2, BarChart } from 'lucide-react';
import Link from 'next/link';

export function SmoProcess() {
  const steps = [
    {
      title: `Getting Your Profiles Right`,
      desc: `A profile is often the first real impression someone gets of your business. We refine the details that matter, bio, profile picture, cover image, contact details, and links, keeping everything consistent across platforms so your brand is instantly recognizable wherever people find you.`,
      icon: Activity
    },
    {
      title: `Understanding Your Audience and Competitors`,
      desc: `Good content starts with knowing who you're talking to. We dig into what your audience cares about, asks, and engages with, then study competitors to spot content gaps and openings where your brand can stand out instead of blending in.`,
      icon: Search
    },
    {
      title: `Planning Content Around Real Goals`,
      desc: `Posting for the sake of posting rarely builds anything. We map content to your business goals, audience interests, industry moments, and seasonal opportunities, mixing formats like educational posts, service spotlights, customer stories, reels, and promotional pieces depending on what fits.`,
      icon: Target
    },
    {
      title: `Visuals and Copy That Hold Attention`,
      desc: `On social media, people decide in seconds whether something's worth their time. Our visuals and captions aim to communicate clearly while matching your brand's tone, so your business comes across as polished without feeling generic.`,
      icon: Settings
    },
    {
      title: `Content Built for Each Platform`,
      desc: (
        <>
          Facebook, Instagram, LinkedIn, and YouTube each behave differently, and copying one post across all of them rarely works well. We shape content to suit each platform's format and audience while keeping your brand identity consistent underneath.
          <br /><br />
          Want content that fits each platform properly? Let's plan it out.
        </>
      ),
      icon: PenTool
    },
    {
      title: `Staying Active in the Conversation`,
      desc: `Social media isn't a one-way broadcast. We respond to comments, messages, and questions promptly and professionally, which builds trust with your audience and often surfaces useful feedback about what customers actually want.`,
      icon: Link2
    },
    {
      title: `Keeping a Steady Publishing Rhythm`,
      desc: `Going quiet for weeks then posting five times in a day doesn't build an audience. We run a proper content calendar so publishing stays consistent, keeping your brand visible instead of fading out of people's feeds.`,
      icon: Activity
    },
    {
      title: `Tracking What's Actually Working`,
      desc: `We watch reach, engagement, follower growth, profile visits, and incoming enquiries closely, so we know what content is landing and where the strategy needs adjusting, rather than posting on autopilot.`,
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
  What Our SMO Service <span className="text-gradient">Includes</span>
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
              See Our Social Media Process in Action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
