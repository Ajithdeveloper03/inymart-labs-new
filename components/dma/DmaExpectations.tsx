'use client';

import { Reveal } from '@/components/Reveal';
import { BarChart3, TrendingUp } from 'lucide-react';

export function DmaExpectations() {
  const results = [
    "A more coordinated online presence, with SEO, social media, and ads working together",
    "Steady growth in traffic, leads, and enquiries across channels",
    "Clearer visibility into what's working, since everything is tracked and reported in one place",
    "Better use of your marketing budget, focused on the channels that actually perform",
    "A single point of contact for your entire digital marketing effort, instead of managing multiple vendors"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <BarChart3 className="w-8 h-8 text-orange-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                What Results Can You Expect?
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Once your Digital Marketing Agency in Tamil Nadu and Digital Marketing Agency in Trichy plan is in motion, here's what businesses typically see over time:
            </p>
          </Reveal>

          <div className="grid gap-4 mb-8">
            {results.map((res, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl shadow-sm border border-slate-100">
                  <TrendingUp className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium leading-relaxed">{res}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <p className="text-gray-600 text-lg leading-relaxed italic">
              Results build steadily as each channel is set up and optimized — many businesses see early improvements within the first 1–2 months, with stronger, compounding growth over 3–6 months.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}