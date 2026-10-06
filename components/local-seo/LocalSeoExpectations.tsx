'use client';

import { Reveal } from '@/components/Reveal';
import { TrendingUp, PhoneCall, LineChart, MapPin, FileText, BarChart3 } from 'lucide-react';

export function LocalSeoExpectations() {
  return (
    <section className="relative pt-8 pb-12 bg-[#0c1f28]">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-white mb-6">
  Why Local SEO Takes More <span className="text-gradient">Than a Business Listing</span>
</h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-3xl mx-auto bg-[#122b38] border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl text-center">
            <p className="text-zinc-300 text-lg leading-relaxed font-medium">
              Sticking a location word on a page or setting up one listing isn't the whole job. Real local SEO ties together accurate information, relevant content, technical fixes, review activity, and ongoing tracking, run as one coordinated effort rather than scattered tasks.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
