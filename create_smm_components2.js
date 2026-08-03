const fs = require('fs');
const path = require('path');

const smmDir = 'c:\\Users\\user\\Desktop\\inymart\\iny lab\\components\\smm';

// 4. SmmWhyChoose.tsx
const smmWhyChoose = `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target, Users, MapPin } from 'lucide-react';
import Link from 'next/link';

const PixelScatter = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute top-4 left-4 opacity-80">
      <rect x="0" y="0" width="8" height="8" className="fill-slate-300 group-hover:fill-[#ff6b35] transition-colors duration-300" />
      <rect x="12" y="4" width="4" height="4" className="fill-slate-200 group-hover:fill-[#ff6b35] transition-colors duration-300" />
      <rect x="24" y="0" width="6" height="6" className="fill-slate-300 group-hover:fill-[#ff6b35] transition-colors duration-300" />
      <rect x="4" y="14" width="4" height="4" className="fill-slate-200 group-hover:fill-[#ff6b35] transition-colors duration-300" />
      <rect x="16" y="16" width="3" height="3" className="fill-slate-300 group-hover:fill-[#ff6b35] transition-colors duration-300" />
      <rect x="8" y="24" width="3" height="3" className="fill-slate-200 group-hover:fill-[#ff6b35] transition-colors duration-300" />
    </svg>
  );
};

export function SmmWhyChoose() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              Why Choose a Social Media Marketing Agency in Tamil Nadu
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Running social media ads without a clear strategy usually means wasted budget. Random boosting or copy-paste campaigns rarely bring real customers — they just burn through money.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto relative">
          
          {/* Card 1 */}
          <Reveal delay={100} className="h-full">
            <div className="relative bg-white hover:bg-[#3f3840] rounded-lg p-6 lg:p-8 border border-slate-200 hover:border-[#3f3840] h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group z-0 hover:z-10">
              <PixelScatter />
              
              <div className="mb-4 mt-2 relative">
                <Target className="w-12 h-12 text-slate-700 group-hover:text-[#ff6b35] stroke-[1.5] transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-3 font-display transition-colors duration-300">
                Strategic Campaigns
              </h3>

              <div className="w-12 h-[2px] bg-transparent group-hover:bg-[#ff6b35] mb-4 transition-colors duration-300" />

              <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-[15px] mb-6 grow transition-colors duration-300">
                A proper social media marketing agency in Tamil Nadu builds campaigns around who your customer is, what they care about, and where they are in their buying decision. As an experienced social media marketing agency in Tamil Nadu, Inymart Labs sets clear goals for every campaign — whether that's calls, website visits, form fills, or direct sales.
              </p>

              <Link href="/contact" className="text-[#ff6b35] font-bold text-sm hover:text-[#e55a2b] transition-colors">
                Learn More
              </Link>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={200} className="h-full">
            <div className="relative bg-white hover:bg-[#3f3840] rounded-lg p-6 lg:p-8 border border-slate-200 hover:border-[#3f3840] h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group z-0 hover:z-10">
              <PixelScatter />
              
              <div className="mb-4 mt-2 relative">
                <MapPin className="w-12 h-12 text-slate-700 group-hover:text-[#ff6b35] stroke-[1.5] transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-3 font-display transition-colors duration-300">
                Local Buying Behavior
              </h3>

              <div className="w-12 h-[2px] bg-transparent group-hover:bg-[#ff6b35] mb-4 transition-colors duration-300" />

              <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-[15px] mb-6 grow transition-colors duration-300">
                We also understand local buying behavior. As a dedicated social media marketing agency in Trichy, we know ads that work for a business in Chennai may not work the same way for a business in Madurai or Trichy. We factor location, language, and local trends into every campaign we run.
              </p>

              <Link href="/contact" className="text-[#ff6b35] font-bold text-sm hover:text-[#e55a2b] transition-colors">
                Learn More
              </Link>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(smmDir, 'SmmWhyChoose.tsx'), smmWhyChoose.trim());

// 5. SmmComparison.tsx
const smmComparison = `
'use client';

import { Reveal } from '@/components/Reveal';

export function SmmComparison() {
  return (
    <section className="relative pt-8 pb-12 bg-slate-50 border-t border-slate-100">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              Social Media Marketing (Ads) vs. Social Media Optimization (Organic)
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Businesses often confuse paid social media marketing with organic social media optimization. Here's the difference:
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-5xl mx-auto bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-6 px-6 font-bold text-slate-800 text-lg w-[20%]">Factor</th>
                    <th className="py-6 px-6 font-bold text-[#ff6b35] text-lg w-[40%] border-l border-slate-200 bg-[#ff6b35]/5">Social Media Marketing (Ads)</th>
                    <th className="py-6 px-6 font-bold text-slate-800 text-lg w-[40%] border-l border-slate-200">Social Media Optimization (Organic)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">Cost</td>
                    <td className="py-5 px-6 text-slate-800 font-medium border-l border-slate-100 bg-[#ff6b35]/5">Requires ad spend budget</td>
                    <td className="py-5 px-6 text-slate-600 border-l border-slate-100">No direct ad spend</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">Speed of Results</td>
                    <td className="py-5 px-6 text-slate-800 font-medium border-l border-slate-100 bg-[#ff6b35]/5">Days</td>
                    <td className="py-5 px-6 text-slate-600 border-l border-slate-100">Weeks to months</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">Best For</td>
                    <td className="py-5 px-6 text-slate-800 font-medium border-l border-slate-100 bg-[#ff6b35]/5">Immediate leads and sales</td>
                    <td className="py-5 px-6 text-slate-600 border-l border-slate-100">Long-term brand presence</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">Reach</td>
                    <td className="py-5 px-6 text-slate-800 font-medium border-l border-slate-100 bg-[#ff6b35]/5">Targeted, paid audience</td>
                    <td className="py-5 px-6 text-slate-600 border-l border-slate-100">Existing followers and organic reach</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(smmDir, 'SmmComparison.tsx'), smmComparison.trim());

// 6. SmmKeyFacts.tsx
const smmKeyFacts = `
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

export function SmmKeyFacts() {
  const facts = [
    {
      icon: Building2,
      label: "Service",
      value: "Social Media Marketing Agency in Tamil Nadu & Trichy"
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value: "Tiruchirappalli, Tamil Nadu"
    },
    {
      icon: MonitorSmartphone,
      label: "Platforms",
      value: "Facebook, Instagram, and LinkedIn ads"
    },
    {
      icon: Settings,
      label: "Core Process",
      value: "Goal setting, targeting, creative, setup, A/B testing, optimization, reporting"
    },
    {
      icon: Clock,
      label: "Typical Timeline",
      value: "Traffic and enquiries within days of campaign launch"
    },
    {
      icon: FileText,
      label: "Reporting",
      value: "Monthly reports covering spend, reach, clicks, and leads"
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              Key Facts About Inymart Labs' Social Media Marketing Service
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <Reveal key={index} delay={index * 100}>
                <div className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[#ff6b35]/30 hover:bg-white hover:shadow-lg transition-all duration-300">
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
`;
fs.writeFileSync(path.join(smmDir, 'SmmKeyFacts.tsx'), smmKeyFacts.trim());

// 7. SmmProcess.tsx
const smmProcess = `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target, Users, Image as ImageIcon, Settings, SlidersHorizontal, TrendingUp, FileText } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SmmProcess() {
  const processSteps = [
    {
      title: "Goal Setting",
      description: "We start by understanding what success looks like for you — more calls, more orders, more enquiries, or more brand awareness.",
      icon: Target
    },
    {
      title: "Audience Targeting",
      description: "We define exactly who should see your ads, based on location, age, interests, and buying behavior.",
      icon: Users
    },
    {
      title: "Ad Creative",
      description: "We design scroll-stopping images and videos, and write ad copy that speaks directly to your customer's needs.",
      icon: ImageIcon
    },
    {
      title: "Campaign Setup",
      description: "We set up your campaigns correctly across Facebook, Instagram, and LinkedIn, with the right budget and bidding strategy.",
      icon: Settings
    },
    {
      title: "A/B Testing",
      description: "We test different ad versions to find out which images, headlines, and offers perform best.",
      icon: SlidersHorizontal
    },
    {
      title: "Optimization",
      description: "We monitor campaigns daily and adjust targeting, budget, and creative to improve results over time.",
      icon: TrendingUp
    },
    {
      title: "Reporting",
      description: "Every month, you get a simple report showing spend, reach, clicks, and leads — no confusing jargon.",
      icon: FileText
    }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              Our Social Media Ads Process
            </h2>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === processSteps.length - 1;
            
            return (
              <div key={index} className="relative flex gap-6 md:gap-12 group">
                {/* Timeline Line */}
                {!isLast && (
                  <div className="absolute left-[27px] md:left-[39px] top-[60px] bottom-[-20px] w-[2px] bg-slate-100 group-hover:bg-[#ff6b35]/20 transition-colors duration-300" />
                )}
                
                {/* Number & Icon */}
                <Reveal className="relative z-10 shrink-0">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center relative group-hover:border-[#ff6b35]/10 group-hover:scale-110 transition-all duration-300">
                    <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#1a1f2e] text-white flex items-center justify-center text-xs md:text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#ff6b35]" />
                  </div>
                </Reveal>

                {/* Content */}
                <Reveal delay={100} className="flex-grow pb-12 md:pb-16">
                  <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 group-hover:border-[#ff6b35]/30 group-hover:bg-white group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1a1f2e] mb-4 font-display">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1f2e] text-white font-bold rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl group"
            >
              See Our Ad Campaigns in Action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(smmDir, 'SmmProcess.tsx'), smmProcess.trim());

console.log("Created Why Choose, Comparison, Key Facts, Process");
