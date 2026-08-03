'use client';

import { Reveal } from '@/components/Reveal';
import { Target } from 'lucide-react';

export function SmoWhyChoose() {
  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-emerald-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Why Choose a Social Media Optimization Company in Tamil Nadu
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Social media today is often the first place a customer checks before they trust a business. If your profiles are outdated, inconsistent, or inactive, you're losing trust before a customer even visits your website.
              </p>
              <p>
                Good social media isn't just about pretty posts. It's about consistency, clear messaging, and content that actually gets people to comment, share, and enquire. As an experienced social media optimization company in Tamil Nadu, Inymart Labs plans content around what your audience actually wants to see — not just what looks nice.
              </p>
              <p>
                A good social media optimization company in Tamil Nadu also understands local audiences. As a dedicated social media optimization company in Trichy, we know festivals, local events, language, and culture all shape how people respond to content here. We factor all of this into every content plan we build.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}