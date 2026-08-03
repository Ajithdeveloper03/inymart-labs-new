'use client';

import { Reveal } from '@/components/Reveal';
import { Target } from 'lucide-react';

export function PpcWhyChoose() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-emerald-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Why Choose a PPC Service in Tamil Nadu
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Running Google Ads without the right strategy usually means paying for clicks that never turn into customers. Poor keyword choices, weak ad copy, or badly set up campaigns can burn through budget fast with little to show for it.
              </p>
              <p>
                A proper PPC Service in Tamil Nadu builds campaigns around the right keywords, the right audience, and a clear goal — whether that's calls, form fills, or purchases. As an experienced PPC Service in Trichy, Inymart Labs sets up and manages every campaign carefully, so your budget goes toward customers who are actually ready to buy.
              </p>
              <p>
                We also understand local search behavior. What works for a business in Chennai may not work the same way in Trichy or Madurai, and we build location-based campaigns that reflect this.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}