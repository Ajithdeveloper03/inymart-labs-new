'use client';

import { Reveal } from '@/components/Reveal';
import {
  Building2,
  MapPin,
  Settings,
  Clock,
  FileText
} from 'lucide-react';

export function LocalSeoKeyFacts() {
  return (
    <section className="relative pt-12 pb-16 bg-slate-50">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Every Local Business Needs <span className="text-gradient">a Different Plan</span>
</h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 mb-10">
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Your service area, competitors, and customer base look nothing like the business down the street. We start by understanding what you offer, where your customers are, and who you're up against, then build around Google Business Profile work, local keyword targeting, citations, review activity, and area-focused content, tracking results along the way and adjusting as we go.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}