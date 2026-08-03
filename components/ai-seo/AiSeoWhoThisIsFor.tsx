'use client';

import { Reveal } from '@/components/Reveal';
import { Users, CheckCircle2 } from 'lucide-react';

export function AiSeoWhoThisIsFor() {
  const points = [
    "Businesses that don't appear when customers ask AI tools for recommendations",
    "Businesses that appear in AI answers but with outdated or incorrect information",
    "Brands wanting to stay ahead as AI search grows alongside traditional Google search",
    "Any business already investing in SEO and wanting to extend that visibility to AI platforms"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-pink-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Who This Is For
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              As an AI SEO Service in Tamil Nadu, our service works well for:
            </p>
          </Reveal>

          <div className="grid gap-4 mb-8">
            {points.map((point, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium leading-relaxed">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <p className="text-gray-600 text-lg leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
              Whether AI tools have never heard of your business or already describe it inaccurately, our team as your AEO Service starts with an audit before building anything new.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}