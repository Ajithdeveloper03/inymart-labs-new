'use client';

import { Reveal } from '@/components/Reveal';
import { CheckCircle2, Rocket } from 'lucide-react';

export function DmaServices() {
  const services = [
    {
      title: "Search Rankings and Local Visibility",
      content: "Being found when someone searches for what you offer matters more than most other marketing effort. We cover keyword research, on-page fixes, technical health, content, and internal linking. For businesses serving a specific area, Local SEO adds Google Business Profile management, local keywords, citations, and review activity."
    },
    {
      title: "Social Media",
      content: (
        <>
          Social platforms build recognition and keep you in front of past and potential customers. We mix free content with paid boosts, depending on what fits your brand:<br />
          Content planning and profile optimization<br />
          Campaign management<br />
          Engagement tracking<br />
          The goal is a steady, recognizable presence, not sporadic posting.
        </>
      )
    },
    {
      title: "Paid Advertising",
      content: "Ads deliver visibility fast when they're built around a clear goal, whether that's calls, leads, site visits, or purchases. We handle audience targeting, creative direction, budget planning, conversion tracking, and ongoing testing to keep performance improving."
    },
    {
      title: "Website Development",
      content: "Your site is where most of this traffic eventually lands, so it needs to hold up. We focus on responsive layouts, working features, loading speed, protection, and a structure search engines can read, so the site backs up everything else you run."
    },
    {
      title: "Web Analytics",
      content: (
        <>
          Guesswork isn't a strategy. We track traffic, visitor behaviour, and conversion actions across channels, then report on what's driving results, where people are dropping off, and where attention should shift next.<br />
          Curious what your current numbers actually show? Ask for an analytics review.
        </>
      )
    },
    {
      title: "Marketing Consulting",
      content: "Sometimes what a team needs most is clarity. We review your current position, point out the gaps, and recommend a prioritised set of actions based on your goals, budget, and what's happening in your market."
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex flex-col items-center justify-center text-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-rose-500/10 flex items-center justify-center shrink-0">
                <Rocket className="w-8 h-8 text-rose-500" />
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground">
  A Closer Look at <span className="text-gradient">Each Service</span>
</h2>
            </div>
          </Reveal>

          <div className="grid gap-4 mb-8">
            {services.map((res, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-slate-900 font-bold text-lg mb-1">{res.title}</h3>
                    <div className="text-slate-700 font-medium leading-relaxed">{res.content}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}