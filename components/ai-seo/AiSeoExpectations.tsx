'use client';

import { Reveal } from '@/components/Reveal';
import { TrendingUp, PhoneCall, LineChart, MapPin, FileText } from 'lucide-react';

export function AiSeoExpectations() {
  const points = [
    {
      title: null,
      text: `More accurate and complete mentions of your business across AI tools like ChatGPT and Perplexity`,
      icon: TrendingUp,
    },
    {
      title: null,
      text: `Better chances of being recommended when customers ask AI tools for suggestions`,
      icon: PhoneCall,
    },
    {
      title: null,
      text: `Content that also strengthens traditional SEO, since AI-ready content tends to be clearer and more structured`,
      icon: LineChart,
    },
    {
      title: null,
      text: `Fewer instances of outdated or incorrect information about your business appearing in AI answers`,
      icon: MapPin,
    },
    {
      title: null,
      text: `Monthly visibility on how your AI presence is changing over time`,
      icon: FileText,
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-[#0c1f28]">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 font-display">
              What Results Can You Expect?
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Once your AI SEO Service in Tamil Nadu and AI SEO Service in Trichy strategy is in motion, here's what businesses typically see over time:
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={index} delay={index * 100} className="h-full">
                <div className="bg-[#122b38] rounded-3xl p-8 border border-white/5 h-full hover:border-primary/50 transition-colors flex flex-col group">
                  {point.title && <h3 className="text-lg font-bold text-white mb-8 pr-4 leading-snug">{point.title}</h3>}
                  <div className="mb-6">
                    <Icon className="w-10 h-10 text-primary stroke-1" />
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto mt-16 bg-[#122b38] border border-white/5 rounded-2xl p-8 text-center">
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              AI SEO results build more gradually than paid ads, since they depend on AI platforms recrawling and re-indexing content — most businesses see meaningful shifts in AI visibility over 2–4 months.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
