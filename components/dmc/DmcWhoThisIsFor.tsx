'use client';

import { Reveal } from '@/components/Reveal';
import { Users, Search, AlertCircle, TrendingUp, Lightbulb } from 'lucide-react';

export function DmcWhoThisIsFor() {
  return (
    <section className="relative pt-12 pb-16 bg-slate-50">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Left Column: Implementation Support */}
          <div className="flex flex-col h-full">
            <Reveal className="h-full flex flex-col">
              <div className="flex-1 bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-center text-center">
                <h2 className="font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl lg:text-[2rem] lg:leading-[1.2] text-foreground mb-6">
                  Consulting With Optional <span className="text-gradient">Implementation Support</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Teams differ in size and skill. Some only need a strategy they can run themselves, while others want help carrying it out. We can guide your in-house team or support execution alongside it, so the service fits your resources and way of working.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Why Choose Consulting */}
          <div className="flex flex-col h-full">
            <Reveal delay={100} className="h-full flex flex-col">
              <div className="flex-1 bg-[#122b38] p-8 md:p-12 rounded-2xl shadow-xl border border-white/5 flex flex-col justify-center text-center">
                <h2 className="font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl lg:text-[2rem] lg:leading-[1.2] text-white mb-6">
                  Why Businesses Choose <span className="text-gradient">Consulting</span>
                </h2>
                <p className="text-lg text-zinc-300 leading-relaxed font-medium">
                  An outside view can spot missed opportunities, unclear priorities, wasteful spending, and gaps between channels. Just as important, you learn why each action is recommended and how it supports your bigger goals, so your team can decide with confidence.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
