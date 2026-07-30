'use client';

import { Reveal } from '@/components/Reveal';

const ALL_BRANDS = [
  'Infinity Organic',
  'KPN Roofing Shed',
  'Viswanathan R Associates',
  'Covai Tech Park',
  'SGNL',
  'Digital Ocean',
  'Arsen Interiors',
  'Lesoko',
  'SKS Clean Tech',
  'Kaveri Restaurant',
  'Tech Edge',
  'New Dream Data System',
  '1Een Technologies',
  'Jobbycart',
  'Alliance Technologies',
  'Uniform Australia',
  'Ivakaa',
  'Hallmark Business School',
]; // 18 items exactly

export function PortfolioBrands() {
  const row1 = ALL_BRANDS.slice(0, 9);
  const row2 = ALL_BRANDS.slice(9, 18);

  // Duplicate enough times for seamless scrolling
  const scrollItems1 = [...row1, ...row1, ...row1, ...row1];
  const scrollItems2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="relative overflow-hidden bg-secondary/10 py-16 lg:py-24">
      <div className="container-x relative z-10 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.15] text-foreground sm:text-4xl mb-4">
              Brands That Trust <span className="text-gradient">Inymart Labs</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-sans text-muted-foreground text-lg">
              Here are some of the businesses Inymart Labs has worked with as their Digital Marketing Agency in Trichy, Tamil Nadu:
            </p>
          </Reveal>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex flex-col gap-6 w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-secondary/10 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-secondary/10 to-transparent" />

        {/* Row 1 (Normal Marquee) */}
        <div className="flex w-max animate-marquee items-center gap-6 sm:gap-8 hover:[animation-play-state:paused]">
          {scrollItems1.map((brand, i) => (
            <div
              key={`r1-${brand}-${i}`}
              className="group flex flex-col h-[140px] w-48 sm:w-56 items-center justify-center rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 text-center"
            >
              <img
                src="/logo.webp"
                alt={brand}
                className="h-10 w-auto object-contain grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 opacity-70 group-hover:opacity-100 mb-3"
              />
              <span className="font-sans text-sm font-bold text-foreground">
                {brand}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 (Reverse Marquee) */}
        <div className="flex w-max animate-marquee items-center gap-6 sm:gap-8 hover:[animation-play-state:paused] [animation-direction:reverse]">
          {scrollItems2.map((brand, i) => (
            <div
              key={`r2-${brand}-${i}`}
              className="group flex flex-col h-[140px] w-48 sm:w-56 items-center justify-center rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 text-center"
            >
              <img
                src="/logo.webp"
                alt={brand}
                className="h-10 w-auto object-contain grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 opacity-70 group-hover:opacity-100 mb-3"
              />
              <span className="font-sans text-sm font-bold text-foreground">
                {brand}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
