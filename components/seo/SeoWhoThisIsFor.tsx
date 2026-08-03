'use client';

import { Reveal } from '@/components/Reveal';
import { CheckCircle2 } from 'lucide-react';

export function SeoWhoThisIsFor() {
  const points = [
    "Local businesses want more calls, visits, and enquiries",
    "Growing brands want to reach new cities or regions",
    "Ecommerce businesses want more product page visibility",
    "Any business tired of paying for SEO with no clear results"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-slate-50 border-t border-slate-100 overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <Reveal>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
                Who This Is For
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                As an SEO agency in Tamil Nadu, our service works well for:
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mt-10">
                Whether you're just start to think about SEO or you've tried it before without results, our team takes the time to understand your business before recommend anything.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {points.map((point, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-gray-800 font-medium text-lg">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
