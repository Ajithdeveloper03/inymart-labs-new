'use client';

import { Reveal } from '@/components/Reveal';
import { Users, Search, AlertCircle, TrendingUp } from 'lucide-react';

export function WebAnalyticsWhoThisIsFor() {
  const points = [
    {
      title: null,
      text: `Businesses with a website but no clear understanding of its performance`,
      icon: Users,
      iconColor: "text-pink-500",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: null,
      text: `Businesses running ads or SEO who want to know if it`,
      icon: Search,
      iconColor: "text-emerald-500",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: null,
      text: `Ecommerce businesses wanting to understand buyer behavior`,
      icon: AlertCircle,
      iconColor: "text-amber-500",
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: null,
      text: `Any business that suspects their tracking data may be incomplete or wrong`,
      icon: TrendingUp,
      iconColor: "text-blue-500",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1f2e] font-display">
                  Who This Is For
                </h2>
              </div>
              <p className="text-gray-600 text-lg md:text-xl">
                Our Web Analytics Service in Tamil Nadu works well for:
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {points.map((point, i) => {
              const Icon = point.icon;
              return (
                <Reveal key={i} delay={i * 100} className="h-full">
                  <div className="relative flex items-center gap-5 sm:gap-6 p-4 sm:p-5 pr-6 sm:pr-8 rounded-[2.5rem] sm:rounded-[3rem] text-white shadow-xl hover:-translate-y-1 transition-transform duration-300 overflow-hidden group h-full">
                    
                    {/* Background Image Layer */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${point.bgImage})` }}
                    />
                    
                    {/* Subtle Primary Color Overlay + Dark Gradient for Readability */}
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
                    
                    {/* Icon Container */}
                    <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                       <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${point.iconColor}`} />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex-1 py-2">
                      {point.title && <h3 className="text-white text-lg font-bold mb-1 font-display">{point.title}</h3>}
                      <p className="text-slate-200 text-sm sm:text-base font-medium leading-relaxed">
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
                Whether you already use Google Analytics or haven't set up tracking at all, our team as your Web Analytics Service in Trichy starts by making sure your data is accurate before we analyze anything.
              </p>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
}
