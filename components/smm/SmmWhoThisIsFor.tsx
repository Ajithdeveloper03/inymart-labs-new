'use client';

import { Reveal } from '@/components/Reveal';
import { Users, Store, ShoppingCart, TrendingUp, HelpCircle } from 'lucide-react';

export function SmmWhoThisIsFor() {
  const points = [
    {
      title: `Local Businesses`,
      text: `Local businesses wanting more calls, visits, and enquiries`,
      icon: Store,
      iconColor: "text-pink-500", bgColor: "bg-pink-50", borderColor: "border-pink-100",
      
    },
    {
      title: `Ecommerce Brands`,
      text: `Ecommerce businesses wanting more product sales`,
      icon: ShoppingCart,
      iconColor: "text-emerald-500", bgColor: "bg-emerald-50", borderColor: "border-emerald-100",
      
    },
    {
      title: `Growing Brands`,
      text: `Growing brands wanting faster visibility than organic posting alone`,
      icon: TrendingUp,
      iconColor: "text-amber-500", bgColor: "bg-amber-50", borderColor: "border-amber-100",
      
    },
    {
      title: `Businesses Seeking Clarity`,
      text: `Any business that has tried ads before with poor or unclear results`,
      icon: HelpCircle,
      iconColor: "text-blue-500", bgColor: "bg-blue-50", borderColor: "border-blue-100",
      
    }
  ];

  return (
    <section className="relative pt-12 pb-16 bg-slate-50">
      <div className="container-x">
        <div className="max-w-6xl mx-auto">
          
          <Reveal>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0">
                  <Users className="w-8 h-8 text-pink-500" />
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground">
  Who <span className="text-gradient">This Is For</span>
</h2>
              </div>
              <p className="text-gray-600 text-lg md:text-xl">
                As a social media marketing agency in Tamil Nadu, our service works well for:
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {points.map((point, i) => {
              const Icon = point.icon;
              return (
                <Reveal key={i} delay={i * 100} className="h-full">
                  <div className={`relative flex items-center gap-5 sm:gap-6 p-4 sm:p-5 pr-6 sm:pr-8 rounded-[2.5rem] sm:rounded-[3rem] ${point.bgColor} border ${point.borderColor} shadow-xl hover:-translate-y-1 transition-transform duration-300 overflow-hidden group h-full`}>
                    
                    
                    
                    
                    
                    {/* Icon Container */}
                    <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-white flex items-center justify-center shadow-md">
                       <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${point.iconColor}`} />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex-1 py-2">
                      {point.title && <h3 className="text-gray-900 text-lg font-bold mb-1 font-display">{point.title}</h3>}
                      <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                    
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400}>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 text-lg text-center leading-relaxed bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                Whether you're running your first ad campaign or have tried ads before without success, our team builds a strategy specific to your business and budget.
              </p>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
}
