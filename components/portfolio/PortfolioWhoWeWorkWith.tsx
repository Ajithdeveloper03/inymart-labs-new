'use client';

import { Reveal } from '@/components/Reveal';
import { Users, Code, Factory, GraduationCap, ShoppingCart, Plane, ChevronRight } from 'lucide-react';

const AUDIENCES = [
  {
    icon: Users,
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=400',
    title: 'Local & Regional Businesses',
    desc: 'Wanting stronger visibility in Tamil Nadu',
  },
  {
    icon: Code,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400',
    title: 'Tech Companies & IT Parks',
    desc: 'Wanting a professional digital presence',
  },
  {
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400',
    title: 'Manufacturing & Industrial',
    desc: 'Businesses like roofing, cleaning technology, and interiors',
  },
  {
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400',
    title: 'Education, Restaurants & Retail',
    desc: 'Brands wanting more local enquiries',
  },
  {
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400',
    title: 'E-commerce & International',
    desc: 'Including clients in Australia and beyond',
  },
];

export function PortfolioWhoWeWorkWith() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="container-x relative z-10">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-4xl font-extrabold leading-[1.15] text-foreground sm:text-5xl mb-6">
              Who We <span className="text-primary">Work With</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-sans text-muted-foreground text-lg">
              As a Digital Marketing Agency in Trichy, Tamil Nadu, our portfolio includes:
            </p>
          </Reveal>
        </div>

        {/* Horizontal Process Layout */}
        <div className="relative">
          {/* Global Dashed Line (hidden on mobile, visible on lg) */}
          <div className="hidden lg:block absolute top-[24px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-slate-200 z-0" />
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between">
            {AUDIENCES.map((item, idx) => (
              <Reveal key={idx} delay={150 + idx * 100} className="relative flex-1 group">
                <div className="flex flex-col items-center text-center relative px-2">
                  
                  {/* Step Badge (Top) */}
                  <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-8 transition-all duration-300 shadow-sm
                    bg-white border-2 border-slate-100 text-slate-400 group-hover:border-primary group-hover:text-primary group-hover:shadow-md
                    first-of-type:bg-[#ff6b35] first-of-type:border-[#ff6b35] first-of-type:text-white first-of-type:shadow-[#ff6b35]/30
                  ">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  {/* Connecting Plane Icon (visible on lg, not on last item) */}
                  {idx < AUDIENCES.length - 1 && (
                    <div className="hidden lg:block absolute top-[24px] left-[100%] -translate-x-1/2 -translate-y-1/2 z-10 text-[#ff6b35]">
                      <Plane className="h-5 w-5 fill-current" />
                    </div>
                  )}

                  {/* Large Circular Image Container */}
                  <div className="relative mb-6">
                    {/* Double Border Effect */}
                    <div className="w-40 h-40 rounded-full border border-slate-200 p-1.5 transition-all duration-500 group-hover:border-primary/50 group-hover:scale-105
                      first-of-type:border-primary
                    ">
                      <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-inner relative">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay Icon */}
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <item.icon className="text-white h-8 w-8 drop-shadow-md" />
                        </div>
                      </div>
                    </div>

                    {/* Chevron Arrows (visible on lg, not on last item) */}
                    {idx < AUDIENCES.length - 1 && (
                      <div className="hidden xl:flex absolute top-1/2 -right-8 -translate-y-1/2 -space-x-3 text-orange-100/60 opacity-60 group-hover:text-primary/30 group-hover:opacity-100 transition-colors duration-300">
                        <ChevronRight className="h-10 w-10 stroke-[1.5]" />
                        <ChevronRight className="h-10 w-10 stroke-[1.5]" />
                      </div>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="px-2">
                    <h3 className="mb-3 font-display text-[17px] font-bold transition-colors duration-300
                      text-foreground group-hover:text-primary
                      first-of-type:text-primary
                    ">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
