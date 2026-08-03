'use client';

import { Reveal } from '@/components/Reveal';
import { BarChart3, TrendingUp } from 'lucide-react';

export function WebDevExpectations() {
  const results = [
    "A faster, more professional website that builds trust with visitors",
    "Better performance on mobile devices, where most of your traffic comes from",
    "A stronger foundation for SEO, since search engines prefer fast, well-structured sites",
    "Fewer visitors leaving without taking action, thanks to clearer navigation and design",
    "A website that's easier for your team to update and manage going forward"
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
              Once your Web Development Service in Tamil Nadu and Web Development Service in Trichy project is complete, here's what businesses typically see over time:
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
              Results here are often visible immediately after launch — a faster, cleaner website tends to improve visitor engagement right away, with SEO and conversion benefits building further over the following months.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}