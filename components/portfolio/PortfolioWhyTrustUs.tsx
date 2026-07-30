'use client';

import { Reveal } from '@/components/Reveal';
import { CheckCircle2 } from 'lucide-react';

const TRUST_POINTS = [
  '10+ years of experience serving businesses across multiple industries',
  '50+ brands served across India, UAE, UK, and the USA',
  'Headquartered in Tiruchirappalli, with hands-on knowledge of Tamil Nadu',
  'Proven experience across real estate, tech, manufacturing, education, and hospitality',
  'Long-term client relationships built on transparent reporting and real results',
  'A team that understands both hyper-local Tamil Nadu businesses and international clients',
];

export function PortfolioWhyTrustUs() {
  return (
    <section className="relative overflow-hidden bg-[#0c1f28] py-16 lg:py-24">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
      <div className="container-x relative z-10">
        
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Image / Graphic */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                alt="Team Meeting" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </Reveal>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl mb-6">
                Why Trust <span className="text-primary">Inymart Labs</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-sans text-white/80 text-lg mb-8 leading-relaxed">
                A portfolio of real, varied clients says more than any promise. Here's why businesses across industries trust Inymart Labs as their Digital Marketing Agency in Trichy, Tamil Nadu:
              </p>
            </Reveal>

            <div className="flex flex-col gap-4">
              {TRUST_POINTS.map((point, idx) => (
                <Reveal key={idx} delay={200 + idx * 50}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="font-sans text-white leading-relaxed">
                      {point}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
