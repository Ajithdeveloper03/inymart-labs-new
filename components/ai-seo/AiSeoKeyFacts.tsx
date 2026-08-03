'use client';

import { Reveal } from '@/components/Reveal';
import {
  Building2,
  MapPin,
  MonitorSmartphone,
  Settings,
  Clock,
  FileText
} from 'lucide-react';

export function AiSeoKeyFacts() {
  const facts = [
{ icon: Building2, label: "Service", value: "AI SEO Service in Tamil Nadu, AI SEO Service in Trichy, and AEO Service" },
    { icon: MapPin, label: "Headquarters", value: "Tiruchirappalli, Tamil Nadu" },
    { icon: MonitorSmartphone, label: "AI Platforms Covered", value: "ChatGPT, Gemini, Copilot, Perplexity, and Grok" },
    { icon: Settings, label: "Core Process", value: "AI visibility audit, content restructuring, entity and fact-building, citation-ready content, ongoing AI monitoring" },
    { icon: Clock, label: "Typical Timeline", value: "Visibility improvements typically build over 2–4 months as AI platforms recrawl and re-index content" },
    { icon: FileText, label: "Reporting", value: "Monthly updates on how your business appears across AI search tools" }
  ];

    return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              Key Facts About Inymart Labs' AI SEO Service
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <Reveal key={index} delay={index * 100}>
                <div className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[#ff6b35]/30 hover:bg-white hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#ff6b35]/30 group-hover:bg-[#ff6b35]/5 transition-colors">
                      <Icon className="w-6 h-6 text-slate-600 group-hover:text-[#ff6b35] transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
                        {fact.label}
                      </h3>
                      <p className="text-slate-800 font-medium leading-snug">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}