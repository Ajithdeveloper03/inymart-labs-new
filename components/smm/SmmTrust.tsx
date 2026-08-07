'use client';

import { Reveal } from '@/components/Reveal';
import { CheckCircle2 } from 'lucide-react';

export function SmmTrust() {
  const points = [

    "10+ years of experience running digital marketing campaigns",
    "50+ brands served across India, UAE, UK, and the USA",
    "Headquartered in Tiruchirappalli, with hands-on knowledge of Tamil Nadu markets",
    "Transparent monthly reporting — you see exactly where your ad spend goes, with no hidden numbers",
    "Campaigns built around clear business goals, not vanity metrics like impressions alone",
    "Real humans managing your account — no bots, no generic templates"
  
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
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
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Why Trust Inymart <span className="text-gradient">Labs</span>
</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-sans text-gray-600 text-lg mb-8 leading-relaxed">
                When you're handing over ad budget to an agency, trust matters. Here's why businesses choose Inymart Labs as their social media marketing agency in Tamil Nadu and social media marketing agency in Trichy:
              </p>
            </Reveal>

            <div className="flex flex-col gap-4">
              {points.map((point, idx) => (
                <Reveal key={idx} delay={200 + idx * 50}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="font-sans text-gray-700 leading-relaxed">
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
