'use client';

import { Reveal } from '@/components/Reveal';
import { TrendingUp, PhoneCall, LineChart, MapPin, FileText } from 'lucide-react';

export function WebDevExpectations() {
  const points = [
    {
      title: null,
      text: `A faster, more professional website that builds trust with visitors`,
      icon: TrendingUp,
    },
    {
      title: null,
      text: `Better performance on mobile devices, where most of your traffic comes from`,
      icon: PhoneCall,
    },
    {
      title: null,
      text: `A stronger foundation for SEO, since search engines prefer fast, well-structured sites`,
      icon: LineChart,
    },
    {
      title: null,
      text: `Fewer visitors leaving without taking action, thanks to clearer navigation and design`,
      icon: MapPin,
    },
    {
      title: null,
      text: `A website that`,
      icon: FileText,
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-[#0c1f28]">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-white mb-6">
  What Results <span className="text-gradient">Can You Expect</span>?
</h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Once your Web Development Service in Tamil Nadu and Web Development Service in Trichy project is complete, here's what businesses typically see over time:
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={index} delay={index * 100} className="h-full">
                <div className="bg-[#122b38] rounded-3xl p-8 border border-white/5 h-full hover:border-primary/50 transition-colors flex flex-col items-center justify-center text-center group">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0">
                        <Icon className="w-10 h-10 text-primary stroke-1" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">{point.title}</h3>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto mt-16 bg-[#122b38] border border-white/5 rounded-2xl p-8 text-center">
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              Results here are often visible immediately after launch — a faster, cleaner website tends to improve visitor engagement right away, with SEO and conversion benefits building further over the following months.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
