'use client';

import { Reveal } from '@/components/Reveal';
import { Settings, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function LocalSeoWhatWeDo() {
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
                Inymart Labs is a trusted <strong className="text-[#0c1f28]">Local SEO agency in Tamil Nadu</strong>, helping businesses show up first when nearby customers search for their products or services. As a <strong className="text-[#0c1f28]">Local SEO agency in Trichy</strong>, we know exactly how local customers search, and we build strategy around getting your business found on Google Search and Google Maps.
              </p>
              <p>
                We work with small businesses, growing brands, and companies across India, UAE, UK, and the USA. Whether you run a single shop in Trichy or multiple locations across Tamil Nadu, our team as your Local SEO agency in Tamil Nadu builds a plan around how nearby customers actually find businesses like yours.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              Talk to Our Local SEO Team <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}