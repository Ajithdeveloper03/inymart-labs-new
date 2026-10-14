'use client';

import { Reveal } from '@/components/Reveal';
import { CheckCircle2 } from 'lucide-react';

export function PpcTrust() {
  const points = [

    "10+ years of experience across PPC, SEO, and digital marketing",
    "50+ brands served across India, UAE, UK, and the USA",
    "Headquartered in Tiruchirappalli, with hands-on knowledge of Tamil Nadu markets",
    "Daily campaign monitoring — budgets aren't left running unchecked",
    "Transparent monthly reporting on exactly where your ad spend goes",
    "Real specialists managing your account — no automated, one-size-fits-all campaigns"
  
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="container-x relative z-10">
        
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Image / Graphic */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/why trust 4.jpg" 
                alt="Team Meeting" 
                className="w-full h-[400px] lg:h-[500px] object-fill"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </Reveal>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Clear and Honest <span className="text-gradient">Reporting</span>
</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-sans text-gray-600 text-lg mb-4 leading-relaxed">
                Our reports cover:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-lg text-gray-700 font-medium max-w-2xl">
                <li>Spend, clicks, and impressions</li>
                <li>Conversions, calls, and enquiries</li>
              </ul>
              <p className="font-sans text-gray-600 text-lg mb-8 leading-relaxed">
                They are written plainly, so you always know what happened, what changed, and what needs action.
              </p>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
