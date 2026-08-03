'use client';
import { Reveal } from '@/components/Reveal';
import { Check, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function DmcComparison() {
  return (
    <section className="relative pt-8 pb-12 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff6b35]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container-x relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              Consulting vs. Full Implementation — Which Do You Need?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Businesses sometimes aren&apos;t sure whether they need advice or execution. Here&apos;s how the two compare:
            </p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            <Reveal delay={100} className="h-full">
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-lg relative h-full flex flex-col group hover:border-slate-300 transition-colors">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 font-display">Consulting Only</h3>
                  <div className="w-12 h-1 bg-slate-200 rounded-full mb-6"></div>
                </div>
                
                <ul className="space-y-5 flex-grow">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#ff6b35] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block mb-1">What You Get</strong>
                      <span className="text-slate-600 text-sm leading-relaxed">Strategy, audit, and action plan</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#ff6b35] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block mb-1">Best For</strong>
                      <span className="text-slate-600 text-sm leading-relaxed">Teams with in-house marketing capacity</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#ff6b35] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block mb-1">Engagement Length</strong>
                      <span className="text-slate-600 text-sm leading-relaxed">One-time or periodic sessions</span>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200} className="h-full">
              <div className="bg-[#1a1f2e] rounded-3xl p-8 lg:p-10 border border-transparent shadow-xl relative h-full flex flex-col group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b35]/20 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />

                <div className="mb-8 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">Consulting + Implementation</h3>
                  <div className="w-12 h-1 bg-[#ff6b35] rounded-full mb-6"></div>
                </div>
                
                <ul className="space-y-5 flex-grow relative z-10">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#ff6b35] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-1">What You Get</strong>
                      <span className="text-slate-300 text-sm leading-relaxed">Strategy plus hands-on execution</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#ff6b35] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-1">Best For</strong>
                      <span className="text-slate-300 text-sm leading-relaxed">Businesses wanting one team to plan and execute</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#ff6b35] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-1">Engagement Length</strong>
                      <span className="text-slate-300 text-sm leading-relaxed">Ongoing monthly engagement</span>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 relative z-10">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#ff6b35] transition-colors text-sm group/link">
                    Talk To Our Team
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}