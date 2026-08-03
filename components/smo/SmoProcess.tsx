'use client';

import { Reveal } from '@/components/Reveal';
import { Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function SmoProcess() {
  const steps = [
    { title: "1. Profile Audit", desc: "We review your existing social media pages to see what's working, what's missing, and what needs fixing first." },
    { title: "2. Audience Research", desc: "We study who your customers are, what they care about, and which platforms they actually use." },
    { title: "3. Content Planning", desc: "We build a monthly content calendar with a clear mix of posts, reels, and stories — no random, one-off posting." },
    { title: "4. Content Creation", desc: "We design graphics, write captions, and create short videos that match your brand's voice and style." },
    { title: "5. Posting & Scheduling", desc: "We manage regular posting so your pages stay active and consistent, without you needing to log in every day." },
    { title: "6. Community Management", desc: "We reply to comments and messages professionally, so customers feel heard and engaged." },
    { title: "7. Reporting", desc: "Every month, you get a simple report showing followers, engagement, and enquiries — no confusing jargon." }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                <Layers className="w-8 h-8 text-cyan-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Our Social Media Optimization Process
              </h2>
            </div>
          </Reveal>

          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                    {i + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <h3 className="font-bold text-lg text-[#0c1f28] mb-2">{step.title.replace(/^\d+\.\s*/, '')}</h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={800} className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              See Our Social Media Process in Action <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}