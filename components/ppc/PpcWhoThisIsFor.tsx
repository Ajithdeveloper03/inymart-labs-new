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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Card: Conversions */}
            <Reveal delay={100} className="h-full">
              <div className="h-full bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-center text-center hover:-translate-y-1 transition-transform duration-300 group">
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
                  Measuring What Matters: <span className="text-gradient">Conversions</span>
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                  We count real outcomes such as phone calls, enquiry forms, purchases, sign-ups, and any other goal we agree on. Conversion tracking shows which campaigns, keywords, ads, and landing pages drive those results, so your next investment is based on data.
                </p>
              </div>
            </Reveal>

            {/* Right Card: Testing */}
            <Reveal delay={200} className="h-full">
              <div className="h-full bg-[#122b38] p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-xl flex flex-col justify-center text-center hover:-translate-y-1 transition-transform duration-300 group">
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
                  Constant Testing and <span className="text-gradient">Improvement</span>
                </h3>
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-medium">
                  Buyer behaviour and competitors keep shifting, so campaigns need steady fine-tuning. We test ad messages, keywords, targeting, landing page ideas, and bidding methods. Winners get more attention, while weak performers are fixed, paused, or replaced.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
