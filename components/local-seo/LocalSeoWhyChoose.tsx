'use client';

import { Reveal } from '@/components/Reveal';
import { Target } from 'lucide-react';

export function LocalSeoWhyChoose() {
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
                Why Choose a Local SEO Agency in Tamil Nadu
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Most customers today search for businesses "near me" before making a decision. If your business doesn't appear in local map results or the top local search listings, you're losing customers to businesses right down the street that do show up.
              </p>
              <p>
                Local SEO isn't just about adding your address online. It's about building trust with Google through accurate listings, reviews, and location-based content. As an experienced Local SEO agency in Trichy, Inymart Labs makes sure your business is seen as the right, trustworthy choice for nearby customers.
              </p>
              <p>
                A good Local SEO agency in Tamil Nadu also understands regional search habits. Customers in Trichy, Chennai, Madurai, and Coimbatore often search differently, and we factor these local patterns into every strategy we build.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}