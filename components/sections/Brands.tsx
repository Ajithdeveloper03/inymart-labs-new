import { SectionHeading } from '@/components/SectionHeading';

const BRANDS = [
  { name: 'Covai Tech Park' },
  { name: 'Ellora' },
  { name: 'SG Education' },
  { name: 'SGNL' },
  { name: 'Lesoko' },
  { name: 'Arsen Interiors' },
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
                src="/new/logo.webp"
                alt="Inymart Labs Placeholder"
                className="h-full w-auto object-contain grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
