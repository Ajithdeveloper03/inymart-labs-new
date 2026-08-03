'use client';

import { Reveal } from '@/components/Reveal';
import { Users, CheckCircle2 } from 'lucide-react';

export function DmaWhoThisIsFor() {
  const points = [
    "Businesses wanting a single team to manage their entire online presence",
    "Businesses currently juggling multiple vendors without clear coordination",
    "Growing brands ready to invest seriously in digital growth",
    "Any business unsure which marketing channels actually deserve their budget"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
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
              As a Digital Marketing Agency in Tamil Nadu, we work well for:
            </p>
          </Reveal>

          <div className="grid gap-4 mb-8">
            {points.map((point, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium leading-relaxed">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <p className="text-gray-600 text-lg leading-relaxed bg-white p-6 rounded-2xl border border-slate-100">
              Whether you need everything at once or want to start with one service and expand later, our team as your Digital Marketing Agency in Trichy builds a plan that fits where you are today.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}