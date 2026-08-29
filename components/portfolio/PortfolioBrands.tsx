'use client';

import { Reveal } from '@/components/Reveal';

const ALL_BRANDS = [
  { name: 'Een Technologies', image: '/images/1 Een(brand).webp' },
  { name: 'Hallmark Business School', image: '/images/Hallmark(brand).webp' },
  { name: 'Lesoko', image: '/images/Lesoko (brand).png' },
  { name: 'New Dream Data System', image: '/images/Newdream (brand).webp' },
  { name: 'SKS Clean Tech', image: '/images/SKS(brand).png' },
  { name: 'Viswanathan R Associates', image: '/images/Viswanathan (brand).png' },
  { name: 'Alliance Technologies', image: '/images/alliances tecknologies(brand).png' },
  { name: 'Arsen Interiors', image: '/images/arsen(brand).png' },
  { name: 'Covai Tech Park', image: '/images/covai-tech-park-(brand).png' },
  { name: 'Ellora', image: '/images/ellora(brand).webp' },
  { name: 'Infinity Organic', image: '/images/infinity(brand).webp' },
  { name: 'Inymart Academy', image: '/images/inymart academy (brand).png' },
  { name: 'Ivaka', image: '/images/ivaka.png' },
  { name: 'Jobbycart', image: '/images/jobbycart(brand).png' },
  { name: 'Kaveri Restaurant', image: '/images/kaveri(brand).webp' },
  { name: 'KPN Roofing Shed', image: '/images/kpnruofingshed(brand).png' },
  { name: 'SG Education', image: '/images/sg-education(brand).webp' },
  { name: 'SGNL', image: '/images/sgnl(brand).webp' },
  { name: 'Tech Edge', image: '/images/techedge(brand).webp' },
  { name: 'Uniform Australia', image: '/images/uniform (brand).webp' },
];

export function PortfolioBrands() {
  const row1 = ALL_BRANDS.slice(0, 10);
  const row2 = ALL_BRANDS.slice(10, 20);

  // Duplicate enough times for seamless scrolling (8 times to match 80 items total, equalizing scroll speed with Brands.tsx)
  const scrollItems1 = [...row1, ...row1, ...row1, ...row1, ...row1, ...row1, ...row1, ...row1];
  const scrollItems2 = [...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2];

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
            <p className="font-sans text-muted-foreground text-lg text-justify sm:text-center">
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
        <div className="flex w-max animate-marquee items-center gap-6 sm:gap-8 pr-6 sm:pr-8 hover:[animation-play-state:paused]">
          {scrollItems1.map((brand, i) => (
            <div
              key={`r1-${brand.name}-${i}`}
              className="group flex flex-col items-center w-48 sm:w-56 gap-3"
            >
              <div className="flex flex-col h-[140px] w-full items-center justify-center rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-xl group-hover:shadow-primary/5">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className={`w-auto max-w-full object-contain transition-all duration-300 group-hover:scale-105 p-[3px] ${
                    ['Viswanathan R Associates', 'Tech Edge', 'SGNL', 'SG Education', 'KPN Roofing Shed', 'Ivaka'].includes(brand.name) 
                      ? 'h-24 sm:h-28' 
                      : 'h-16 sm:h-20'
                  }`}
                />
              </div>
              <span className="font-sans text-sm font-bold text-foreground text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 (Reverse Marquee) */}
        <div className="flex w-max animate-marquee-reverse items-center gap-6 sm:gap-8 pr-6 sm:pr-8 hover:[animation-play-state:paused]">
          {scrollItems2.map((brand, i) => (
            <div
              key={`r2-${brand.name}-${i}`}
              className="group flex flex-col items-center w-48 sm:w-56 gap-3"
            >
              <div className="flex flex-col h-[140px] w-full items-center justify-center rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-xl group-hover:shadow-primary/5">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className={`w-auto max-w-full object-contain transition-all duration-300 group-hover:scale-105 p-[3px] ${
                    ['Viswanathan R Associates', 'Tech Edge', 'SGNL', 'SG Education', 'KPN Roofing Shed', 'Ivaka'].includes(brand.name) 
                      ? 'h-24 sm:h-28' 
                      : 'h-16 sm:h-20'
                  }`}
                />
              </div>
              <span className="font-sans text-sm font-bold text-foreground text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
