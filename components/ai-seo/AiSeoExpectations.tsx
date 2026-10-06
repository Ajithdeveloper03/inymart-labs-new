'use client';

import { Reveal } from '@/components/Reveal';
import { TrendingUp, PhoneCall, LineChart, MapPin, FileText } from 'lucide-react';

export function AiSeoExpectations() {
  return (
    <section className="relative pt-8 pb-12 bg-[#0c1f28]">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-white mb-6">
  Measuring <span className="text-gradient">AI SEO Progress</span>
</h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-3xl mx-auto bg-[#122b38] border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl">
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              AI SEO should be measured realistically because AI platforms do not operate like traditional search engines. Results depend on crawling, indexing, content interpretation, authority, and platform changes. We track:
            </p>
            <ul className="list-disc pl-5 mb-8 space-y-2 text-lg text-white font-medium">
              <li>Visibility signals and business mentions</li>
              <li>Information accuracy and recommendations</li>
              <li>Content coverage and changes in AI representation</li>
            </ul>
            <p className="text-zinc-300 text-lg leading-relaxed font-medium">
              Monthly reporting gives you a clear view of progress.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
