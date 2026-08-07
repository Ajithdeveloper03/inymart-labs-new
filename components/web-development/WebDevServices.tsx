'use client';

import { Reveal } from '@/components/Reveal';
import { Monitor, Briefcase, ShoppingCart, Target, RefreshCw, Layout, Star, Leaf } from 'lucide-react';

export function WebDevServices() {
  const services = [
    {
      title: "Business Websites",
      desc: "Professional sites that build trust and generate enquiries.",
      icon: Briefcase,
      color: "orange"
    },
    {
      title: "Ecommerce Websites",
      desc: "Online stores with smooth checkout and product management.",
      icon: ShoppingCart,
      color: "sky"
    },
    {
      title: "Landing Pages",
      desc: "Focused pages built for a specific campaign or offer.",
      icon: Target,
      color: "emerald"
    },
    {
      title: "Website Redesigns",
      desc: "Modernizing and speeding up an existing website.",
      icon: RefreshCw,
      color: "blue"
    },
    {
      title: "Web Applications",
      desc: "Custom tools and portals built around specific business needs.",
      icon: Layout,
      color: "rose"
    }
  ];

  return (
    <section className="relative pt-12 pb-20 bg-white">
      <div className="container-x max-w-7xl mx-auto">
        
        <Reveal>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <Star className="w-7 h-7 text-amber-400 mb-6 stroke-[1.5]" />
            <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
              <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-500 transform -scale-x-100 hidden sm:block" />
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground">
  Types of Websites <span className="text-gradient">We Build</span>
</h2>
              <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-500 hidden sm:block" />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={index} delay={index * 100}>
                <div 
                  className={`flex flex-col items-center text-center p-6 sm:p-8 rounded-[20px] border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full
                    ${item.color === 'orange' ? 'bg-[#fffdf6] border-[#ffe8b3] hover:shadow-orange-100' : ''}
                    ${item.color === 'sky' ? 'bg-[#f4f9ff] border-[#bce0fc] hover:shadow-sky-100' : ''}
                    ${item.color === 'emerald' ? 'bg-[#f4fdf8] border-[#bdf1cf] hover:shadow-emerald-100' : ''}
                    ${item.color === 'blue' ? 'bg-[#f4f7ff] border-[#c2d6ff] hover:shadow-blue-100' : ''}
                    ${item.color === 'rose' ? 'bg-[#fff5f7] border-[#fbcfe8] hover:shadow-rose-100' : ''}
                  `}
                >
                  <Icon 
                    className={`w-10 h-10 mb-6 stroke-[1.5]
                      ${item.color === 'orange' ? 'text-[#ff9d00]' : ''}
                      ${item.color === 'sky' ? 'text-[#0095ff]' : ''}
                      ${item.color === 'emerald' ? 'text-[#00c55e]' : ''}
                      ${item.color === 'blue' ? 'text-[#3b82f6]' : ''}
                      ${item.color === 'rose' ? 'text-[#f43f5e]' : ''}
                    `}
                  />
                  <h3 
                    className={`text-[17px] font-bold mb-3 font-display
                      ${item.color === 'orange' ? 'text-[#e65c00]' : ''}
                      ${item.color === 'sky' ? 'text-[#0077cc]' : ''}
                      ${item.color === 'emerald' ? 'text-[#00a34d]' : ''}
                      ${item.color === 'blue' ? 'text-[#2563eb]' : ''}
                      ${item.color === 'rose' ? 'text-[#e11d48]' : ''}
                    `}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}