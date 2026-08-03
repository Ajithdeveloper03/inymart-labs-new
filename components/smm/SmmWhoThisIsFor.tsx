'use client';

import { Reveal } from '@/components/Reveal';
import { Store, ShoppingCart, TrendingUp, HelpCircle } from 'lucide-react';

export function SmmWhoThisIsFor() {
  const audiences = [
    {
      title: "Local Businesses",
      description: "Local businesses wanting more calls, visits, and enquiries",
      icon: Store,
    },
    {
      title: "Ecommerce Brands",
      description: "Ecommerce businesses wanting more product sales",
      icon: ShoppingCart,
    },
    {
      title: "Growing Brands",
      description: "Growing brands wanting faster visibility than organic posting alone",
      icon: TrendingUp,
    },
    {
      title: "Businesses Seeking Clarity",
      description: "Any business that has tried ads before with poor or unclear results",
      icon: HelpCircle,
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-slate-50 border-t border-slate-100 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff6b35]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container-x relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              Who This Is For
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              As a social media marketing agency in Tamil Nadu, our service works well for:
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Reveal key={index} delay={index * 100} className="h-full">
                <div className="bg-white rounded-3xl p-8 border border-slate-200 h-full hover:border-[#ff6b35]/50 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-[#ff6b35]/10 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-slate-700 group-hover:text-[#ff6b35] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 font-display">
                    {audience.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {audience.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 shadow-sm rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#ff6b35]" />
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              Whether you're running your first ad campaign or have tried ads before without success, our team builds a strategy specific to your business and budget.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}