'use client';

import { Reveal } from '@/components/Reveal';
import { Target } from 'lucide-react';

export function DmaWhyChoose() {
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
                Why Choose a Digital Marketing Agency in Tamil Nadu
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Many businesses end up working with separate vendors for SEO, social media, and ads — and none of them talk to each other. This often leads to mixed messaging, wasted budget, and no clear picture of what's actually working.
              </p>
              <p>
                A complete Digital Marketing Agency in Tamil Nadu solves this by bringing every channel under one strategy and one team. As an experienced Digital Marketing Agency in Trichy, Inymart Labs makes sure your SEO, content, ads, and social media all work together toward the same goals.
              </p>
              <p>
                We also believe in transparency. Every service from Inymart Labs comes with clear reporting, so you always know what's being done and how it's performing.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}