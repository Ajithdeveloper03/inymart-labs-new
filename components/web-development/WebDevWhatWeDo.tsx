'use client';

import { Reveal } from '@/components/Reveal';
import { Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function WebDevWhatWeDo() {
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
                Inymart Labs offers a complete <strong className="text-[#0c1f28]">Web Development Service in Tamil Nadu</strong>, helping businesses build fast, professional, and easy-to-use websites that turn visitors into customers. As a <strong className="text-[#0c1f28]">Web Development Service in Trichy</strong>, we don't just design good-looking pages — we build websites that are ready for SEO, mobile users, and long-term growth from day one.
              </p>
              <p>
                We work with small businesses, growing brands, and companies across India, UAE, UK, and the USA. Whether you need a brand-new website, a rebuild of an old one, or an online store, our team as your Web Development Service in Tamil Nadu builds it around your business goals and your customers' needs.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              Talk to Our Web Development Team <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}