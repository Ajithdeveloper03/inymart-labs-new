'use client';

import { Reveal } from '@/components/Reveal';

export function SeoWhyChoose() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  How We Approach a New <span className="text-gradient">SEO Project</span>
</h2>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden text-center">
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium">
              Nothing starts until we understand the business behind the website: your audience, your competitors, your service areas, and how your site currently performs. Every recommendation after that, technical, content, or otherwise, ties back to growing visibility that actually matters.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
