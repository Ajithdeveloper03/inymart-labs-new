'use client';

import { Reveal } from '@/components/Reveal';
import { Target, Zap } from 'lucide-react';

export function DmaQuickAnswer() {
  return (
    <section id="quick-answer" className="relative pt-12 pb-8 bg-slate-50 scroll-mt-16">
      <div className="container-x">
        <Reveal>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1f28]">Quick Answer</h2>
              </div>
              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
                Inymart Labs is a full-service <strong className="text-[#0c1f28]">Digital Marketing Agency in Trichy Tamil Nadu</strong>, offering SEO, Local SEO, social media optimization, social media marketing, web analytics, web development, and consulting under one coordinated strategy. Headquartered in Tiruchirappalli, Inymart Labs has 9+ years of experience and has served 50+ brands across India, UAE, UK, and the USA, with most businesses seeing early improvements within 1–2 months and stronger, compounding growth over 3–6 months.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}