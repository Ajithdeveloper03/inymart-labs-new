'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { Play, ArrowRight, Instagram, Youtube, Phone, Facebook, ArrowUp } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Reveal } from '@/components/Reveal';
import { cn } from '@/lib/utils';

const SLIDES = [
  {
    image: '/banner 1.png',
    title: 'Grow Your Business with us',
    titleAccent: 'Tamil Nadu',
    subtitle: 'Be Found Where Your Customers Are Searching',
    description: "Today's customers search online before choosing a product or service. Whether it's Google Search, Google Maps, AI-powered search platforms, or social media, your business needs to be visible where your customers are looking.",
    list: [
      'Get a Free Consultation',
      'Talk to Our Experts',
    ],
  },
  {
    image: '/banner 2.png',
    title: 'At Inymart Labs, a trusted',
    titleAccent: 'Agency',
    subtitle: 'Result-Driven Strategies',
    description: 'With 10+ years of experience, serving businesses since 2016, and 50+ satisfied clients, we deliver customised solutions that create measurable business success.',
    list: [
      'Get a Free Consultation',
      'Talk to Our Experts',
    ],
  },
  {
    image: '/banner 3.png',
    title: 'Ready to Grow Your',
    titleAccent: 'Business?',
    subtitle: 'Start Your Digital Growth Today',
    description: 'The average cost of hiring a digital marketing company typically ranges from INR 20,000 to INR 1,00,000 per month. Costs may vary based on the complexity and type of solutions required.',
    list: [
      'Get a Free Consultation',
      'Talk to Our Experts',
    ],
  },
];

export function BannerSlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  );
  const fadePlugin = React.useRef(
    Fade()
  );

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowScrollTop(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-background">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current, fadePlugin.current] as any}
        className="w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="-ml-0">
          {SLIDES.map((slide, index) => (
            <CarouselItem key={index} className="pl-0">
              {/* Force height to exactly 100vh with a minimum bounds so it doesn't break on extreme small heights, but fits perfectly usually */}
              <div className="relative w-full h-[100vh] min-h-[500px] overflow-hidden flex items-center">
                
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.image}
                    alt={`Banner ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Mobile Dark Overlay - Full Width */}
                <div className="absolute inset-0 z-10 bg-[#1a1f24]/80 lg:hidden" />

                {/* Desktop Dark Overlay - Diagonal Cut */}
                <div 
                  className="absolute inset-0 z-10 bg-[#1a1f24]/80 hidden lg:block" 
                  style={{ clipPath: 'polygon(0 0, 70% 0, 55% 100%, 0 100%)' }}
                />

                {/* Right Edge Design Element (4% width, orange top with diagonal cut, white bottom) */}
                <div className="absolute right-0 top-0 bottom-0 z-10 w-[4%] hidden lg:block bg-background">
                  <div 
                    className="absolute top-0 left-0 right-0 h-[65%] bg-primary"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                  />
                </div>

                {/* Content Container */}
                <div className="container-x relative z-30 w-full pl-6 pr-6 pt-20 lg:pl-20 lg:pr-0 lg:pt-24">
                  <div className="max-w-[95%] md:max-w-[85%] lg:max-w-[48vw] xl:max-w-[45vw]">
                    
                    {slide.subtitle && (
                      <Reveal delay={0}>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-primary">
                            {/* Exact house/grid SVG icon from reference */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <rect x="9" y="14" width="2" height="2"></rect>
                              <rect x="13" y="14" width="2" height="2"></rect>
                              <rect x="9" y="18" width="2" height="2"></rect>
                              <rect x="13" y="18" width="2" height="2"></rect>
                            </svg>
                          </span>
                          <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-[0.15em] text-primary">
                            {slide.subtitle}
                          </h3>
                        </div>
                      </Reveal>
                    )}
                    
                    <Reveal delay={150}>
                      <h1 className="font-display font-extrabold leading-[1.1] text-white tracking-tight uppercase text-4xl sm:text-5xl lg:text-[64px]">
                        {slide.title} <span className="text-primary">{slide.titleAccent}</span>
                      </h1>
                    </Reveal>
                    
                    {slide.description && (
                      <Reveal delay={300}>
                        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-zinc-400 max-w-xl">
                          {slide.description}
                        </p>
                      </Reveal>
                    )}

                    {slide.list && (
                      <Reveal delay={400}>
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                          {slide.list.map((item, i) => (
                            <button 
                              key={i} 
                              className={cn(
                                "flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300",
                                i === 0 
                                  ? "bg-primary text-white hover:bg-primary/90" 
                                  : "bg-[#252a30] border border-zinc-600 text-white hover:bg-white hover:text-black"
                              )}
                            >
                              {item} <ArrowRight className="h-4 w-4" />
                            </button>
                          ))}
                        </div>
                      </Reveal>
                    )}
                    
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Right Edge Social Icons placed in the white section at the bottom */}
        <div className="absolute right-0 bottom-12 z-40 w-[4%] hidden lg:flex flex-col items-center gap-8 py-4">
          <a href="#" aria-label="Instagram" className="text-[#E1306C] hover:scale-125 transition-transform duration-300">
            <Instagram className="h-5 w-5" strokeWidth={1.5} />
          </a>
          <a href="#" aria-label="WhatsApp" className="text-[#25D366] hover:scale-125 transition-transform duration-300">
            <Phone className="h-5 w-5" strokeWidth={1.5} />
          </a>
          <a href="#" aria-label="YouTube" className="text-[#FF0000] hover:scale-125 transition-transform duration-300">
            <Youtube className="h-5 w-5" strokeWidth={1.5} />
          </a>
        </div>
        
        {/* Vertical Carousel Navigation (Left Side) */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6">
          {/* Top small decorative line */}
          <div className="h-10 w-[2px] bg-zinc-600/50" />
          
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className="relative flex items-center justify-center group"
              aria-label={`Go to slide ${index + 1}`}
            >
              {current === index ? (
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
              ) : (
                <div className="h-2 w-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
              )}
            </button>
          ))}

          {/* Bottom small decorative line */}
          <div className="h-10 w-[2px] bg-zinc-600/50" />
        </div>

      </Carousel>

      {/* Scroll To Top Button with Circular Progress matching reference */}
      <div 
        className={cn(
          "fixed bottom-8 right-8 z-[100] transition-all duration-500 ease-in-out cursor-pointer group",
          showScrollTop ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-10 invisible"
        )}
        onClick={scrollToTop}
      >
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg overflow-hidden group-hover:-translate-y-1 transition-transform">
          {/* SVG Progress Circle */}
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
            <circle 
              cx="50" cy="50" r="46" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="text-primary/20"
            />
            <circle 
              cx="50" cy="50" r="46" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="8" 
              className="text-primary transition-all duration-300 ease-out"
              strokeDasharray="289"
              strokeDashoffset={289 - (289 * scrollProgress) / 100}
            />
          </svg>
          <ArrowUp className="h-6 w-6 text-primary" strokeWidth={2} />
        </div>
      </div>
    </section>
  );
}
