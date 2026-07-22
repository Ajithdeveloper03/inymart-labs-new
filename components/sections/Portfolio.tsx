import { Reveal } from '@/components/Reveal';
import { BRANDS } from '@/lib/content';
import { ArrowRight, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Portfolio() {
  // duplicate for seamless marquee
  const marquee = [...BRANDS, ...BRANDS];

  return (
    <section id="portfolio" className="relative flex flex-col lg:flex-row bg-[#0c1f28] overflow-hidden">
      
      {/* Left Side (Dark Slate Background) */}
      <div className="relative w-full lg:w-[60%] flex px-8 py-4 lg:pl-8 lg:pr-20 xl:pl-12 xl:pr-24">
        
        {/* Vertical Text "INYMART LABS" matching reference */}
        <div className="hidden lg:flex flex-col items-center justify-center mr-10 xl:mr-16 relative">
          <div 
            className="font-display text-[40px] xl:text-[50px] font-black uppercase tracking-[0.1em] relative select-none leading-none"
            style={{ 
              writingMode: 'vertical-rl', 
              transform: 'rotate(180deg)',
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.7)',
              background: 'linear-gradient(to bottom, #ea580c 50%, transparent 50%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            INYMART LABS
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center">
          
          {/* Eyebrow */}
          <Reveal delay={0}>
            <div className="flex items-center gap-3 mb-5">
              {/* Double arrow icon matching reference */}
              <div className="flex -space-x-2">
                <ArrowRight className="h-4 w-4 text-primary" strokeWidth={3} />
                <ArrowRight className="h-4 w-4 text-primary" strokeWidth={3} />
              </div>
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">
                Our Portfolio
              </span>
            </div>
          </Reveal>

          {/* Title */}
          <Reveal delay={100}>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.15] mb-6">
              Businesses That Trust<br />Inymart Labs.
            </h2>
          </Reveal>

          {/* Main Description */}
          <Reveal delay={200}>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
              We're proud to partner with businesses that trust Inymart Labs for their digital growth, and customized digital marketing solutions. Our clients come from a wide range of industries, and we're committed to helping each one achieve measurable online success.
            </p>
          </Reveal>



          {/* Localized Paragraph (styled like the secondary text in reference) */}
          <Reveal delay={400}>
            <p className="text-white/80 text-sm leading-relaxed mb-10 max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-wider">LOCALIZED APPROACH:</span> Digital marketing strategies from Tamil Nadu agencies like Inymart Labs often differ from those in other states by focusing on region-specific insights, cultural nuances, and local language preferences, ensuring campaigns resonate more deeply with target audiences. This localized approach enables businesses to benefit from digital marketing solutions tailored to the unique demographics and market trends of Tamil Nadu, setting them apart from more generic strategies commonly used elsewhere.
            </p>
          </Reveal>

        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative w-full lg:w-[40%] h-[50vh] lg:h-auto overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
          alt="Modern Coworking Space" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle overlay to blend the edge slightly */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0c1f28] to-transparent hidden lg:block opacity-50" />
      </div>

    </section>
  );
}
