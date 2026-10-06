'use client';

import { Reveal } from '@/components/Reveal';
import { Users, Search, AlertCircle, TrendingUp, Lightbulb } from 'lucide-react';

export function PpcWhoThisIsFor() {
  const points = [
    {
      title: null,
      text: `Local businesses wanting immediate calls and enquiries`,
      icon: Users,
      iconColor: "text-pink-500", bgColor: "bg-pink-50", borderColor: "border-pink-100",
      
    },
    {
      title: null,
      text: `Ecommerce businesses wanting more product sales quickly`,
      icon: Search,
      iconColor: "text-emerald-500", bgColor: "bg-emerald-50", borderColor: "border-emerald-100",
      
    },
    {
      title: null,
      text: `Growing brands wanting fast visibility while SEO builds in the background`,
      icon: Lightbulb,
      iconColor: "text-amber-500", bgColor: "bg-amber-50", borderColor: "border-amber-100",
      
    },
    {
      title: null,
      text: `Any business that has tried Google Ads before with unclear or poor results`,
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
  Measuring What Matters: <span className="text-gradient">Conversions</span>
</h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-center">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                We count real outcomes such as phone calls, enquiry forms, purchases, sign-ups, and any other goal we agree on. Conversion tracking shows which campaigns, keywords, ads, and landing pages drive those results, so your next investment is based on data.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
