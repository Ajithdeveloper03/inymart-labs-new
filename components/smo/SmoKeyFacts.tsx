'use client';

import { Reveal } from '@/components/Reveal';
import {
  Building2,
  MapPin,
  MonitorSmartphone,
  Settings,
  Calendar,
  Clock
} from 'lucide-react';

export function SmoKeyFacts() {
  const facts = [
{ icon: Building2, label: "Service", value: "Social Media Optimization Company in Tamil Nadu and Social Media Optimization Company in Trichy" },
    { icon: MapPin, label: "Headquarters", value: "Tiruchirappalli, Tamil Nadu" },
    { icon: MonitorSmartphone, label: "Platforms Managed", value: "Facebook, Instagram, YouTube, LinkedIn, and other platforms" },
    { icon: Settings, label: "Core Process", value: "Profile Audit, Audience Research, Content Planning, Content Creation, Posting And Scheduling, Community Management, Monthly Reporting" },
    { icon: Calendar, label: "Typical Posting Frequency", value: "3–5 posts per week across key platforms" },
    { icon: Clock, label: "Typical Timeline", value: "Better engagement within the first month; stronger brand presence by month 3 onward" }
  ];

    return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
  Key Facts About Inymart Labs' Social <span className="text-gradient">Media Optimization</span> Service
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