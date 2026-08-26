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
  const facts = [
{ icon: Building2, label: "Service", value: "Local SEO Agency in Tamil Nadu and Local SEO Agency in Trichy" },
    { icon: MapPin, label: "Headquarters", value: "Tiruchirappalli, Tamil Nadu" },
    { icon: MapPin, label: "Service Areas", value: "Trichy, Chennai, Madurai, Coimbatore, and nearby regions" },
    { icon: Settings, label: "Core Process", value: "Google Business Profile Setup, Local Keyword Research, Listings And Citations, Review Management, Location-Based Content, Map Pack Optimization, Monthly Reporting" },
    { icon: Clock, label: "Typical Timeline", value: "Early visibility improvements within a few weeks; stronger results by month 2–3" },
    { icon: FileText, label: "Reporting", value: "Simple monthly reports covering local rankings, calls, and direction requests" }
  ];

    return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Key Facts About Inymart Labs' Local <span className="text-gradient">SEO Service</span>
</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <Reveal key={index} delay={index * 100}>
                <div className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[#ff6b35]/30 hover:bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#ff6b35]/30 group-hover:bg-[#ff6b35]/5 transition-colors">
                        <Icon className="w-6 h-6 text-slate-600 group-hover:text-[#ff6b35] transition-colors" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                        {fact.label}
                      </h3>
                    </div>
                    <p className="text-slate-800 font-medium leading-snug">
                      {fact.value}
                    </p>
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