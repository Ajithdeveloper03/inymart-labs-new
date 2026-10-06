'use client';

import { Reveal } from '@/components/Reveal';
import { Users, Search, AlertCircle, TrendingUp, Lightbulb } from 'lucide-react';

export function DmcWhoThisIsFor() {
  const points = [
    {
      title: null,
      text: `Business owners unsure where to start with digital marketing`,
      icon: Users,
      iconColor: "text-pink-500", bgColor: "bg-pink-50", borderColor: "border-pink-100",
      
    },
    {
      title: null,
      text: `Businesses already spending on marketing but seeing unclear results`,
      icon: Search,
      iconColor: "text-emerald-500", bgColor: "bg-emerald-50", borderColor: "border-emerald-100",
      
    },
    {
      title: null,
      text: `Teams that need an outside, expert perspective on their strategy`,
      icon: Lightbulb,
      iconColor: "text-amber-500", bgColor: "bg-amber-50", borderColor: "border-amber-100",
      
    },
    {
      title: null,
      text: `Growing brands planning their next phase of marketing investment`,
      icon: TrendingUp,
      iconColor: "text-blue-500", bgColor: "bg-blue-50", borderColor: "border-blue-100",
      
    }
  ];

  return (
    <section className="relative pt-12 pb-16 bg-slate-50">
      <div className="container-x">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground">
  Consulting With Optional <span className="text-gradient">Implementation Support</span>
</h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-center">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Teams differ in size and skill. Some only need a strategy they can run themselves, while others want help carrying it out. We can guide your in-house team or support execution alongside it, so the service fits your resources and way of working.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
