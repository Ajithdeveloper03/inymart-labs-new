'use client';

import { Reveal } from '@/components/Reveal';
import { Target } from 'lucide-react';

export function WebDevWhyChoose() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-emerald-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Why Choose a Web Development Service in Tamil Nadu
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                A website is often the first real impression a customer has of your business. If it loads slowly, looks outdated, or is hard to use on a phone, customers leave before they even understand what you offer.
              </p>
              <p>
                A good Web Development Service in Tamil Nadu builds websites with both design and performance in mind. As an experienced Web Development Service in Trichy, Inymart Labs makes sure your website looks professional, loads quickly, and is built in a way that search engines can understand and rank well.
              </p>
              <p>
                We also build with the future in mind. Your website should be easy to update, simple to expand, and strong enough to support your marketing — whether that's SEO, ads, or social media traffic.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}