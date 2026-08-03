'use client';

import { Reveal } from '@/components/Reveal';
import { Settings, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function AiSeoWhatWeDo() {
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
                Inymart Labs offers a dedicated <strong className="text-[#0c1f28]">AI SEO Service in Tamil Nadu</strong>, helping businesses become visible and accurately represented across AI search tools, not just Google. As an <strong className="text-[#0c1f28]">AEO Service and AI SEO Service in Trichy</strong>, we restructure website content so AI engines can extract clear, correct answers about your business.
              </p>
              <p>
                We work with small businesses, growing brands, and companies across India, UAE, UK, and the USA. Whether your business is invisible to AI tools today or already appears but with outdated or incorrect information, our team as your AI SEO Service in Tamil Nadu builds a plan to fix and strengthen that visibility.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              Talk to Our AI SEO Team <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}