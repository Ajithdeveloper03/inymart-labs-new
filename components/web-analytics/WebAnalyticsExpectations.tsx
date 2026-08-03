'use client';

import { Reveal } from '@/components/Reveal';
import { BarChart3, TrendingUp } from 'lucide-react';

export function WebAnalyticsExpectations() {
  const results = [
    "Accurate, trustworthy data that reflects what's really happening on your website",
    "Clear answers on where your best customers come from — SEO, ads, or social media",
    "Fewer wasted marketing rupees, since you'll know what's actually working",
    "A clear picture of where visitors drop off, so you can fix it and improve conversions",
    "Simple monthly reports that make sense, without needing to be a data expert"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
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
              Once your Web Analytics Service in Tamil Nadu and Web Analytics Service in Trichy setup is in place, here's what businesses typically see over time:
            </p>
          </Reveal>

          <div className="grid gap-4 mb-8">
            {results.map((res, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                  <TrendingUp className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium leading-relaxed">{res}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <p className="text-gray-600 text-lg leading-relaxed italic">
              Results with analytics start immediately — once tracking is fixed, you get accurate data right away, with clearer patterns and insights building over 2–3 months.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}