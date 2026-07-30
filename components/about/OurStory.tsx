'use client';

import { Reveal } from '@/components/Reveal';
import { History, TrendingUp, Globe2 } from 'lucide-react';

export function OurStory() {
  return (
    <section className="relative bg-white py-12 lg:py-16 overflow-hidden">
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Professional Image */}
          <Reveal delay={200} className="relative h-full min-h-[400px] lg:min-h-[500px] w-full mb-10 lg:mb-0">
            <div className="absolute inset-0 bg-primary/5 rounded-[32px] transform translate-x-4 translate-y-4" />
            <div className="relative h-full w-full rounded-[32px] overflow-hidden shadow-2xl border border-white/50 bg-white animate-float-slow">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Our professional team at work" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Floating Badge overlay */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-4 border border-white flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-primary to-accent shadow-md flex items-center justify-center text-white font-bold text-xl">
                  9+
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground">Years of</span>
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Excellence</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Content */}
          <div className="flex flex-col">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-sm mb-6">
                <History className="h-4 w-4" />
                Our Story
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] mb-6">
                From a Small Local Practice to a <span className="text-gradient">Full-Stack Agency</span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-6">
                Founded in 2016 in Trichy, Inymart Labs, a digital marketing firm, started with a simple belief: <strong>traffic without intent is noise.</strong> What began as a small local SEO practice has grown into a full-stack agency combining SEO, Local SEO, link building, and Generative Engine Optimization (GEO) to drive business growth.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-8">
                Before hiring an agency, check their expertise in SEO, Local SEO, AEO, and GEO, plus their track record in attracting organic traffic, including performance marketing. Our clients now span multiple countries, but our roots stay firmly in Tamil Nadu.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-foreground font-semibold">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    Growth Driven
                  </div>
                  <p className="font-sans text-sm text-muted-foreground">Focusing on intent, not just traffic.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-foreground font-semibold">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Globe2 className="h-5 w-5" />
                    </div>
                    Global Reach
                  </div>
                  <p className="font-sans text-sm text-muted-foreground">Serving clients across multiple countries.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
