'use client';

import { Reveal } from '@/components/Reveal';
import { Search, Compass, Zap, LineChart, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: Search,
    title: 'Discovery & Market Audit',
    desc: 'We analyze your website architecture, current keyword footprints, competitor strengths, and search intent across Tamil Nadu and target international territories.',
    points: ['Technical SEO & crawl health audit', 'Local vs. Global competitor benchmarking', 'Customer journey & search intent mapping']
  },
  {
    step: '02',
    icon: Compass,
    title: 'Custom Blueprint & Funnel',
    desc: 'No cookie-cutter packages. We build an actionable roadmap combining the right mix of organic SEO, local map pack positioning, paid advertising, and conversion funnels.',
    points: ['Channel selection based on highest ROI', 'High-intent keyword clustering', 'Conversion landing page recommendations']
  },
  {
    step: '03',
    icon: Zap,
    title: 'Precision Implementation',
    desc: 'Our specialists execute on-page technical optimization, content creation tailored for human users and AI engines (AEO/GEO), ad setup, and social media engagement.',
    points: ['Continuous metadata & schema refinement', 'AEO/GEO generative answer readiness', 'High-performance ad copy & creative testing']
  },
  {
    step: '04',
    icon: LineChart,
    title: 'Measurement & Scaled Growth',
    desc: 'We track every lead, call, and conversion through Google Analytics 4, Search Console, and custom reporting dashboards to maximize long-term business revenue.',
    points: ['Transparent weekly/monthly reporting', 'Conversion rate optimization (CRO)', 'Iterative scaling of winning channels']
  }
];

export function ServicesFramework() {
  return (
    <section className="relative bg-white py-16 lg:py-24 border-t border-slate-100 overflow-hidden">
      <div className="container-x max-w-[1600px]">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold uppercase tracking-wider text-orange-600 mb-4">
              Proven Methodology
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c1f28] leading-[1.2] mb-6">
              Our 4-Step <span className="text-gradient">Growth Framework</span>
            </h2>
            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed">
              Every service we offer is connected through a unified, data-driven methodology built to turn online visibility into predictable business revenue.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, idx) => (
            <Reveal key={step.step} delay={idx * 100}>
              <div className="h-full flex flex-col p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-orange-500/30 hover:shadow-xl transition-all duration-300 relative group">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-slate-300 group-hover:text-orange-500 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 mb-6 flex-grow">
                  {step.desc}
                </p>

                <ul className="space-y-2 pt-4 border-t border-slate-200/60">
                  {step.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

