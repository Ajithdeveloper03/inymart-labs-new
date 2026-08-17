import { SectionHeading } from '@/components/SectionHeading';

const BRANDS = [
  { name: '1Een Technologies', image: '/images/1 Een(brand).webp' },
  { name: 'Hallmark Business School', image: '/images/Hallmark(brand).webp' },
  { name: 'Lesoko', image: '/images/Lesoko-Logo-(brand).png' },
  { name: 'New Dream Data System', image: '/images/Newdream (brand).webp' },
  { name: 'SKS Clean Tech', image: '/images/SKS(brand).png' },
  { name: 'Viswanathan R Associates', image: '/images/Viswanathan (brand).png' },
  { name: 'Alliance Technologies', image: '/images/alliances tecknologies(brand).png' },
  { name: 'Arsen Interiors', image: '/images/arsen(brand).webp' },
  { name: 'Covai Tech Park', image: '/images/covai-tech-park-(brand).png' },
  { name: 'Ellora', image: '/images/ellora(brand).webp' },
  { name: 'Infinity Organic', image: '/images/infinity(brand).webp' },
  { name: 'Inymart Academy', image: '/images/inymart academy (brand).webp' },
  { name: 'Ivakaa', image: '/images/ivaka(brand).png' },
  { name: 'Jobbycart', image: '/images/jobbycart(brand).png' },
  { name: 'Kaveri Restaurant', image: '/images/kaveri(brand).webp' },
  { name: 'KPN Roofing Shed', image: '/images/kpnruofingshed(brand).png' },
  { name: 'SG Education', image: '/images/sg-education(brand).webp' },
  { name: 'SGNL', image: '/images/sgnl(brand).webp' },
  { name: 'Tech Edge', image: '/images/techedge(brand).webp' },
  { name: 'Uniform Australia', image: '/images/uniform (brand).webp' },
];

export function Brands() {
  const scrollItems = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS]; // Duplicate enough for seamless scrolling

  return (
    <section className="relative overflow-hidden bg-secondary/20 py-14">
      <div className="container-x relative z-10 mb-10">
        <h2 className="text-center font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Brands We've <span className="text-gradient">Worked With</span>
        </h2>
      </div>

      <div className="relative flex w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-secondary/20 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-secondary/20 to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-6 sm:gap-10 md:gap-12 hover:[animation-play-state:paused]">
          {scrollItems.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="group flex h-24 w-40 items-center justify-center rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 sm:h-28 sm:w-48 md:h-32 md:w-56"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className={`w-auto max-w-full object-contain transition-all duration-300 group-hover:scale-105 p-[3px] ${
                  ['Viswanathan R Associates', 'Tech Edge', 'SGNL', 'SG Education', 'KPN Roofing Shed'].includes(brand.name) 
                    ? 'h-20 sm:h-24 md:h-28' 
                    : 'h-full'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
