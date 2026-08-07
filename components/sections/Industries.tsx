import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { INDUSTRIES } from '@/lib/content';

const INDUSTRY_IMAGES = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80', // Educational Institutions
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80', // Healthcare
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', // Real Estate
  'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&q=80', // Manufacturing
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80', // Retail
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80', // E-commerce
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80', // Hospitality
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', // Corporate Companies
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80', // Startups
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80', // Professional Services
];

export function Industries() {
  return (
    <section
      id="industries"
      className="relative scroll-mt-24 overflow-hidden bg-background py-14 text-foreground"
    >
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Industries We Serve"
          title={
            <>
              We help businesses across{' '}
              <span className="text-gradient">various industries</span> grow
              online
            </>
          }
          description="As a leading SEO company, we help businesses across a wide range of industries grow their online presence and reach the right audience."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.name} delay={i * 60}>
              <article className="group relative flex h-[160px] flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-center transition-all duration-300 hover:border-primary hover:shadow-[0_12px_40px_-12px_rgba(234,88,12,0.3)] overflow-hidden">
                
                {/* Background Image on Hover */}
                <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <img 
                    src={INDUSTRY_IMAGES[i]} 
                    alt={industry.name} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Heavy white overlay so it matches reference's white look but shows the image subtly */}
                  <div className="absolute inset-0 bg-white/85" />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <industry.icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <span className="text-[13px] font-bold text-slate-800 tracking-wide transition-all duration-300 group-hover:-translate-y-0.5 px-3 py-1 rounded-full bg-transparent group-hover:bg-white/95 group-hover:shadow-sm">
                    {industry.name}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
