'use client';

import { Reveal } from '@/components/Reveal';
import { Users, Search, FileCheck, TrendingUp, Target, Lightbulb } from 'lucide-react';

export function AiSeoWhoThisIsFor() {
  return (
    <section className="relative pt-12 pb-16 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          
          <Reveal>
            <div className="flex flex-col items-center text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0">
                  <Users className="w-8 h-8 text-pink-500" />
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground">
  Who Can Benefit from <span className="text-gradient">AI SEO Services in Trichy and Tamil Nadu?</span>
</h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 mb-10">
              <p className="text-gray-600 text-lg md:text-xl font-medium mb-4">
                AI SEO can benefit:
              </p>
              <ul className="list-disc pl-5 mb-8 space-y-2 text-lg text-gray-700">
                <li>Local businesses and professional service providers</li>
                <li>Ecommerce brands and startups</li>
                <li>Growing companies and established organizations</li>
              </ul>
              <p className="text-gray-600 text-lg md:text-xl font-medium mb-4">
                It is especially useful for:
              </p>
              <ul className="list-disc pl-5 mb-8 space-y-2 text-lg text-gray-700">
                <li>Businesses not appearing in AI recommendations</li>
                <li>Brands receiving inaccurate descriptions</li>
                <li>Companies already investing in SEO that want to expand into AI-powered discovery</li>
              </ul>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                The strategy adapts to your industry, location, audience, and goals.
              </p>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
}