'use client';

import { Reveal } from '@/components/Reveal';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function WebDevTrust() {
  const points = [
    "10+ years of experience building websites alongside SEO and digital marketing",
    "50+ brands served across India, UAE, UK, and the USA",
    "Headquartered in Tiruchirappalli, with hands-on knowledge of Tamil Nadu markets",
    "Websites built SEO-ready from day one, not bolted on afterward",
    "Clear timelines and transparent communication throughout the project",
    "Ongoing support after launch — we don't disappear once the site goes live"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Why Trust Inymart Labs
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Your website is often a customer's first impression of your business, so it needs to be built right. Here's why businesses trust Inymart Labs as their Web Development Service in Tamil Nadu and Web Development Service in Trichy:
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {points.map((point, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium leading-relaxed">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}