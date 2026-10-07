'use client';

import { Reveal } from '@/components/Reveal';

export function PpcComparison() {
  return (
    <section className="relative pt-8 pb-12 bg-slate-50 border-t border-slate-100">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
              Budget Control You Can <span className="text-gradient">Trust</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-5xl mx-auto bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
              {/* Left Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-lg text-gray-700 leading-relaxed font-medium mb-6">
                  Ad budgets need regular attention. We keep reviewing:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-lg text-gray-700 font-medium">
                  <li>Spend and bids</li>
                  <li>Keywords and ads</li>
                  <li>Conversions</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Money moves from weaker campaigns to stronger ones as results come in. The aim is not to spend as much as possible, but to make every rupee accountable.
                </p>
              </div>

              {/* Right Image */}
              <div className="relative min-h-[300px] w-full bg-slate-100">
                <img 
                  src="/new/What%20We%20Do%20(PPC).png" 
                  alt="PPC budget control and monitoring" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
