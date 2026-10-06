'use client';

import { Reveal } from '@/components/Reveal';
import { Users, Search, AlertCircle, TrendingUp, Lightbulb } from 'lucide-react';

export function LocalSeoWhoThisIsFor() {
  return (
    <section className="relative pt-12 pb-16 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          
          <Reveal>
            <div className="flex flex-col items-center text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0">
                  <Users className="w-8 h-8 text-pink-500" />
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground">
  Reach the Customers <span className="text-gradient">Already Searching Nearby</span>
</h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 mb-10">
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Shops, clinics, eateries, home-service businesses, and professional firms all depend on nearby customers finding them, and that's exactly where Local SEO earns its keep. Whether you run one location or several, the right strategy helps your business get discovered right when someone nearby is looking.
              </p>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
}
