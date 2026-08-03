'use client';
import { Reveal } from '@/components/Reveal';

export function DmcKeyFacts() {
  const facts = [
    { label: 'Service', value: 'Digital Marketing Consulting in Tamil Nadu and Trichy' },
    { label: 'Headquarters', value: 'Tiruchirappalli, Tamil Nadu' },
    { label: 'Areas Covered', value: 'SEO, Local SEO, social media, PPC, web analytics, and web development strategy' },
    { label: 'Core Process', value: 'Business & goal understanding, marketing audit, competitor insight, strategy roadmap, channel recommendations, implementation guidance, ongoing advisory' },
    { label: 'Engagement Options', value: 'One-time strategy session or ongoing monthly consulting' },
    { label: 'Typical Timeline', value: 'Clarity and direction immediately; measurable improvements build over following months' },
  ];

  return (
    <section className="relative pt-8 pb-12 bg-[#0c1f28] overflow-hidden">
      <div className="container-x relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 font-display">
              Key Facts About Inymart Labs&apos; Consulting Service
            </h2>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#122b38] rounded-3xl p-6 sm:p-10 border border-white/5 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#ff6b35]" />
            
            <dl className="divide-y divide-white/5">
              {facts.map((fact, index) => (
                <Reveal key={index} delay={index * 50}>
                  <div className="py-4 sm:py-5 flex flex-col sm:flex-row sm:gap-4 hover:bg-white/5 transition-colors px-4 rounded-xl">
                    <dt className="text-sm font-bold text-[#ff6b35] sm:w-1/3 shrink-0 mb-1 sm:mb-0">
                      {fact.label}
                    </dt>
                    <dd className="text-sm sm:text-base text-zinc-300 font-medium">
                      {fact.value}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}