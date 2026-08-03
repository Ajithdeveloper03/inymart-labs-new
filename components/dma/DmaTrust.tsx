'use client';

import { Reveal } from '@/components/Reveal';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function DmaTrust() {
  const points = [
    "10+ years of experience across SEO, social media, ads, web development, and analytics",
    "50+ brands served across India, UAE, UK, and the USA",
    "Headquartered in Tiruchirappalli, with hands-on knowledge of Tamil Nadu markets",
    "One coordinated team managing every channel, instead of disconnected vendors",
    "Transparent monthly reporting across every active service",
    "Real humans managing your account — no bots, no generic templates"
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
              Handing over your business's marketing to an agency requires trust. Here's why businesses choose Inymart Labs as their Digital Marketing Agency in Tamil Nadu and Digital Marketing Agency in Trichy:
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