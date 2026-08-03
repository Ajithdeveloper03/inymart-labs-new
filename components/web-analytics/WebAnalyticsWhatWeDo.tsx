'use client';

import { Reveal } from '@/components/Reveal';
import { Settings, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function WebAnalyticsWhatWeDo() {
  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                <Settings className="w-8 h-8 text-indigo-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                What We Do
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Inymart Labs offers a trusted <strong className="text-[#0c1f28]">Web Analytics Service in Tamil Nadu</strong>, helping to understand businesses exactly what's happening on their website — who's visiting, what they're clicking, and why they leave without buying. As a <strong className="text-[#0c1f28]">Web Analytics Service in Trichy</strong>, we turn confusing numbers into simple, clear answers you can act on.
              </p>
              <p>
                We work with small businesses, growing brands, and companies across India, UAE, UK, and the USA. Whether you want to know why your website isn't converting or want clarity on where your traffic comes from, our team as your Web Analytics Service in Tamil Nadu makes the data easy to understand.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              Talk to Our Analytics Team <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}