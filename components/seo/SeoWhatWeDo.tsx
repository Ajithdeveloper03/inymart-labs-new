'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function SeoWhatWeDo() {
  return (
    <section className="relative pt-8 pb-12 bg-white overflow-hidden">
      <div className="container-x">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left: Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start lg:pr-8">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1f2e] mb-6 font-display leading-[1.2]">
                What We Do
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                Inymart Labs is a leading <strong className="text-[#0c1f28]">SEO agency in Tamil Nadu</strong>, helping to businesses rank higher on Google and get seen on Google Maps. As an SEO agency in Tamil Nadu, our approach is built on real research, clear steps, and honest reporting — not guesswork.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                We work with small businesses, growing brands, and companies across India, UAE, UK, and the USA. Whether you have a shop in Trichy or a company reach customers across the country, our team as your SEO agency in Tamil Nadu and trustable SEO agency in Trichy builds strategy around how people actually searching today.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 group"
              >
                Talk to Our SEO Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          {/* Right: Visual (Image) */}
          <div className="order-1 lg:order-2 relative">
            <Reveal className="h-full">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-t-[32px] rounded-br-[32px] rounded-bl-[120px] sm:rounded-bl-[160px] lg:rounded-bl-[200px] shadow-[0_20px_60px_rgb(0,0,0,0.1)]">
                <img 
                  src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074" 
                  alt="SEO Strategy" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
              </div>
            </Reveal>
            
            {/* Decorative background blob behind image */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
