import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';
import { SERVICES, slugify } from '@/lib/content';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const SERVICE_IMAGES = [
  '/new/SEO%20(home).png',
  '/new/Local%20SEO%20(home).png',
  '/new/SMO%20(home).png',
  '/new/SMM%20(home).png',
  '/new/Web%20Analytics%20(home).png',
  '/new/Web%20Development(home).png',
  '/new/Digital%20Marketing%20Consulting(home).png',
  '/new/Digital%20Marketing%20Agency(home).png',
  '/new/PPC%20Service%20(home).png',
  '/new/AI%20SEO%20Services(home).png'
];

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-secondary/20 py-14"
    >
      <div className="container-x max-w-[1600px]">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Our <span className="text-gradient">Digital Marketing</span> Services
            </>
          }
          description="As a leading Digital Marketing Agency in Tiruchirappalli, we provide complete digital marketing solutions for businesses of every size."
        />

        {/* 5-Column Grid Layout matching reference */}
        <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 50}>
              <div className="h-full filter drop-shadow-sm hover:drop-shadow-2xl transition-all duration-300">
                <article 
                  className="group relative flex h-full flex-col bg-white transition-colors duration-500 hover:bg-primary"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 36px), calc(100% - 36px) 100%, 0 100%)' }}
                >
                  {/* Top Image Section */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <img 
                      src={SERVICE_IMAGES[i]} 
                      alt={service.title} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>
                  
                  {/* Bottom Content Section */}
                  <div className="relative flex-1 flex flex-col pt-12 pb-8 px-6">
                    
                    {/* Overlapping Icon Circle */}
                    <div className="absolute -top-10 left-6 flex h-20 w-20 items-center justify-center rounded-full bg-white border-[6px] border-[#f0eee9] transition-all duration-500 group-hover:bg-primary group-hover:border-white">
                      <service.icon className="h-8 w-8 text-primary transition-colors duration-500 group-hover:text-white" strokeWidth={1.5} />
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
                      {service.title}
                    </h3>

                    <div className="mt-auto pt-6 w-full">
                      <Link 
                        href={`/services/${slugify(service.title)}`}
                        className="flex w-full justify-center items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-slate-900 border border-slate-200 bg-white px-3 sm:px-5 py-2.5 sm:py-3 transition-all duration-500 group-hover:text-primary group-hover:border-transparent whitespace-nowrap"
                      >
                        View Service <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </Link>
                    </div>
                    
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <CtaBanner
            title="Need Complete Digital Marketing Solutions?"
            points={['Get a Free Website Analysis', 'Talk to Our Experts']}
            ctaLabel="Get a Free Website Analysis"
            ctaHref="/contact"
            variant="accent"
          />
        </div>
      </div>
    </section>
  );
}
