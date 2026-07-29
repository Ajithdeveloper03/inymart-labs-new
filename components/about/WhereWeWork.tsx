'use client';

import { Reveal } from '@/components/Reveal';
import { MapPin, Building2 } from 'lucide-react';

const GlowingPin = ({ top, left, delay, label }: { top: string, left: string, delay: string, label: string }) => (
  <div className="absolute z-20 group cursor-pointer" style={{ top, left, transform: 'translate(-50%, -50%)' }}>
    {/* Label */}
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-foreground text-xs font-bold border border-black/10 shadow-xl pointer-events-none">
      {label}
      {/* Triangle pointer */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/95 border-b border-r border-black/10 rotate-45" />
    </div>
    
    <div className="relative flex items-center justify-center">
       {/* Core dot */}
       <div className="absolute h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_rgba(249,115,22,0.9)]" />
       <div className="absolute h-1 w-1 rounded-full bg-white z-10" />
       
       {/* Expanding pulse rings */}
       <div className="absolute h-10 w-10 rounded-full border border-primary/70 animate-ping" style={{ animationDelay: delay, animationDuration: '3s' }} />
       <div className="absolute h-16 w-16 rounded-full border border-primary/30 animate-ping" style={{ animationDelay: `calc(${delay} + 1s)`, animationDuration: '3s' }} />
    </div>
  </div>
);

export function WhereWeWork() {
  return (
    <section className="relative bg-white py-0 overflow-hidden selection:bg-primary/30">
      {/* Soft gradient orb for background ambiance */}
      <div className="absolute inset-0 bg-primary/[0.01] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary/20 animate-float-slow"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.4 + 0.2,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        {/* Changed to exactly 50/50 layout with no horizontal gap */}
        <div className="grid lg:grid-cols-2 gap-y-12 gap-x-0 items-center">
          
          {/* Left: Content (Compact and balanced) */}
          <div className="flex flex-col text-left pr-0 lg:pr-12">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-5 mt-4">
                Where We <span className="text-gradient">Work</span>
              </h2>
              <p className="font-sans text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                We&apos;re based in Tiruchirappalli — proud to be a leading digital marketing agency in Trichy — and serve clients across Tamil Nadu, plus the USA, UAE, Australia, and the UK. We work across various sectors offering dedicated services to enhance user experience.
              </p>

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-black/5 shadow-sm text-foreground font-bold mb-4 w-fit text-sm">
                <Building2 className="h-4 w-4 text-primary" />
                Industries We Serve
              </div>
              <p className="font-sans text-muted-foreground text-sm font-medium flex flex-wrap gap-x-3 gap-y-2">
                <span>Retail</span>
                <span className="text-primary/60">•</span>
                <span>Healthcare</span>
                <span className="text-primary/60">•</span>
                <span>Real Estate</span>
                <span className="text-primary/60">•</span>
                <span>Education</span>
                <span className="text-primary/60">•</span>
                <span>Hospitality</span>
                <span className="text-primary/60">•</span>
                <span>Manufacturing</span>
              </p>
            </Reveal>
          </div>

          {/* Right: Map Container (Visually equal size to left content) */}
          <Reveal delay={200} className="relative w-full aspect-[4/3] sm:aspect-[2/1] lg:aspect-square max-h-[500px]">
            {/* The wrapper scales to fit perfectly within the 50% grid column */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 aspect-[2/1] w-full max-w-[800px] mx-auto">
              <div 
                className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-25 pointer-events-none filter drop-shadow-lg"
                style={{ 
                  backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")'
                }}
              />

              {/* Location Pins */}
              <GlowingPin top="32%" left="21%" delay="0s" label="United States" />
              <GlowingPin top="25%" left="47.5%" delay="0.5s" label="United Kingdom" />
              <GlowingPin top="43%" left="63.5%" delay="1s" label="UAE" />
              <GlowingPin top="47%" left="71%" delay="1.5s" label="India (HQ)" />
              <GlowingPin top="77%" left="86%" delay="2s" label="Australia" />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
