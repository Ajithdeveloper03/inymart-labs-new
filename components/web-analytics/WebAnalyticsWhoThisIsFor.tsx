'use client';

import { Reveal } from '@/components/Reveal';
import { Users, Search, AlertCircle, TrendingUp, Lightbulb } from 'lucide-react';

export function WebAnalyticsWhoThisIsFor() {
  const points = [
    {
      title: null,
      text: (
        <>
          <strong className="text-gray-900">Clean setup first:</strong> We fix broken data before we analyze anything
        </>
      ),
      icon: Users,
      iconColor: "text-pink-500", bgColor: "bg-pink-50", borderColor: "border-pink-100",
    },
    {
      title: null,
      text: (
        <>
          <strong className="text-gray-900">Goal-focused:</strong> Tracking built around calls, sales, or enquiries, whatever matters to you
        </>
      ),
      icon: Search,
      iconColor: "text-emerald-500", bgColor: "bg-emerald-50", borderColor: "border-emerald-100",
    },
    {
      title: null,
      text: (
        <>
          <strong className="text-gray-900">Plain-language reporting:</strong> Reports explain what changed and why, not just raw numbers
        </>
      ),
      icon: Lightbulb,
      iconColor: "text-amber-500", bgColor: "bg-amber-50", borderColor: "border-amber-100",
    },
    {
      title: null,
      text: (
        <>
          <strong className="text-gray-900">Continuous monitoring:</strong> We keep watching your numbers, not just a one-time setup
        </>
      ),
      icon: TrendingUp,
      iconColor: "text-blue-500", bgColor: "bg-blue-50", borderColor: "border-blue-100",
    }
  ];

  return (
    <section className="relative pt-12 pb-16 bg-slate-50">
      <div className="container-x">
        <div className="max-w-6xl mx-auto">
          
          <Reveal>
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0">
                  <Users className="w-8 h-8 text-pink-500" />
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground text-center">
                  Why Choose Inymart Labs for <br className="hidden sm:block" /> Web Analytics Service in <span className="text-gradient">Trichy and Tamil Nadu?</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
                      <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
