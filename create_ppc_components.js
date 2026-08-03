const fs = require('fs');
const path = require('path');

const ppcDir = path.join(__dirname, 'components', 'ppc');
const ppcPageDir = path.join(__dirname, 'app', 'services', 'ppc-service');

if (!fs.existsSync(ppcDir)) {
  fs.mkdirSync(ppcDir, { recursive: true });
}
if (!fs.existsSync(ppcPageDir)) {
  fs.mkdirSync(ppcPageDir, { recursive: true });
}

const components = {
  PpcHeroBanner: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ChevronRight, Home, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function PpcHeroBanner() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-8 pb-12">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner 1.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0c1f28]/90 via-[#0c1f28]/70 to-[#0c1f28]/95 backdrop-blur-[2px]" />

      <div className="container-x relative z-10 flex flex-col items-center justify-center text-center">
        <Reveal>
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            Inymart Labs
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl mx-auto mb-8">
            PPC Service in Tamil Nadu
          </h1>
        </Reveal>

        <Reveal delay={300} className="mt-8 lg:mt-12">
          <div className="relative inline-flex group">
            <div className="absolute -inset-1.5 rounded-full bg-primary/30 blur-md animate-pulse pointer-events-none" />
            <a
              href="#quick-answer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('quick-answer')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-110"
              aria-label="Scroll Down"
            >
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <nav className="mt-12 flex items-center justify-center space-x-2 text-sm font-medium text-zinc-400">
            <Link href="/" className="flex items-center gap-1.5 transition-colors hover:text-primary">
              <Home className="h-4 w-4" /> Home
            </Link>
            <ChevronRight className="h-4 w-4 text-zinc-600" />
            <Link href="/#services" className="transition-colors hover:text-primary">
              Services
            </Link>
            <ChevronRight className="h-4 w-4 text-zinc-600" />
            <span className="text-white">PPC Service</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
`,

  PpcQuickAnswer: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target, Zap } from 'lucide-react';

export function PpcQuickAnswer() {
  return (
    <section id="quick-answer" className="relative pt-12 pb-8 bg-slate-50 scroll-mt-16">
      <div className="container-x">
        <Reveal>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1f28]">Quick Answer</h2>
              </div>
              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
                Inymart Labs is a <strong className="text-[#0c1f28]">PPC Service in Trichy, Tamil Nadu</strong> that plans, sets up, and manages Google Ads campaigns to generate calls, leads, and sales — not just clicks. Unlike SEO, PPC results appear almost immediately, with most businesses seeing traffic and enquiries within days of a campaign going live, and performance improving further through ongoing testing and optimization.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
`,

  PpcWhatIs: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Search } from 'lucide-react';

export function PpcWhatIs() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <Search className="w-8 h-8 text-blue-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                What Is PPC?
              </h2>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-gray-600 leading-relaxed">
                PPC (Pay-Per-Click) is a form of online advertising where a business pays only when someone clicks their ad, typically shown at the top of Google search results or across partner websites. Unlike SEO, which builds organic visibility over time, PPC delivers immediate visibility for chosen keywords, with performance measured directly through clicks, calls, and conversions.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  PpcWhatWeDo: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function PpcWhatWeDo() {
  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                <Settings className="w-8 h-8 text-indigo-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                What We Do
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Inymart Labs offers a results-focused <strong className="text-[#0c1f28]">PPC Service in Tamil Nadu</strong>, helping businesses run Google Ads campaigns that bring in real calls, enquiries, and sales — not just clicks. As a trusted <strong className="text-[#0c1f28]">PPC Service in Trichy</strong>, we manage your ad budget carefully, so every rupee spent works toward a clear business goal.
              </p>
              <p>
                We work with small businesses, growing brands, and companies across India, UAE, UK, and the USA. Whether you want more calls to a local business or more online orders for an ecommerce store, our team as your PPC Service in Tamil Nadu builds campaigns around what actually matters to you.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              Talk to Our PPC Team <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  PpcWhyChoose: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target } from 'lucide-react';

export function PpcWhyChoose() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-emerald-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Why Choose a PPC Service in Tamil Nadu
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Running Google Ads without the right strategy usually means paying for clicks that never turn into customers. Poor keyword choices, weak ad copy, or badly set up campaigns can burn through budget fast with little to show for it.
              </p>
              <p>
                A proper PPC Service in Tamil Nadu builds campaigns around the right keywords, the right audience, and a clear goal — whether that's calls, form fills, or purchases. As an experienced PPC Service in Trichy, Inymart Labs sets up and manages every campaign carefully, so your budget goes toward customers who are actually ready to buy.
              </p>
              <p>
                We also understand local search behavior. What works for a business in Chennai may not work the same way in Trichy or Madurai, and we build location-based campaigns that reflect this.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  PpcComparison: `
'use client';

import { Reveal } from '@/components/Reveal';
import { GitCompare } from 'lucide-react';

export function PpcComparison() {
  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0">
                <GitCompare className="w-8 h-8 text-purple-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                PPC vs. SEO — Which Do You Need?
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              Businesses often ask whether to invest in PPC, SEO, or both. Here's how they compare:
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-1/4">Factor</th>
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-3/8 border-l border-slate-200">PPC</th>
                    <th className="py-5 px-6 font-bold text-primary text-lg w-3/8 border-l border-slate-200">SEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Speed of Results</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Days</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Months</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Cost Structure</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Pay per click, ongoing ad spend</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Investment in strategy and content, no per-click cost</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Visibility</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Top of search results while ads run</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Organic rankings that persist over time</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Best For</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Immediate leads and time-sensitive offers</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Long-term, sustainable visibility</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  PpcKeyFacts: `
'use client';

import { Reveal } from '@/components/Reveal';
import { BookOpen } from 'lucide-react';

export function PpcKeyFacts() {
  const facts = [
    { label: "Service", value: "PPC Service in Tamil Nadu and PPC Service in Trichy" },
    { label: "Headquarters", value: "Tiruchirappalli, Tamil Nadu" },
    { label: "Platforms", value: "Google Ads (search, display, and local campaigns)" },
    { label: "Core Process", value: "Goal setting, keyword research, campaign setup, ad copywriting, landing page alignment, bid management, A/B testing, monthly reporting" },
    { label: "Typical Timeline", value: "Traffic and enquiries within days of campaign launch" },
    { label: "Reporting", value: "Monthly reports covering spend, clicks, calls, and conversions" }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-8 h-8 text-amber-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Key Facts About Inymart Labs' PPC Service
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {facts.map((fact, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 hover:shadow-md transition-shadow">
                  <div className="sm:w-1/3 shrink-0 font-bold text-[#0c1f28]">
                    {fact.label}:
                  </div>
                  <div className="text-slate-600 sm:w-2/3">
                    {fact.value}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`,

  PpcProcess: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function PpcProcess() {
  const steps = [
    { title: "1. Goal Setting", desc: "We start by understanding what success looks like for you — calls, enquiries, purchases, or sign-ups." },
    { title: "2. Keyword Research", desc: "We find the exact search terms your potential customers are typing into Google." },
    { title: "3. Campaign Setup", desc: "We build your Google Ads campaigns correctly from the start, with the right structure, targeting, and budget." },
    { title: "4. Ad Copywriting", desc: "We write clear, compelling ad copy that speaks directly to what your customer is searching for." },
    { title: "5. Landing Page Alignment", desc: "We make sure the page your ad leads to actually matches what was promised, so visitors don't bounce away." },
    { title: "6. Bid Management", desc: "We manage your budget and bids daily, adjusting to get the most value from every rupee spent." },
    { title: "7. A/B Testing", desc: "We test different ads and keywords to see what brings the best results, and scale up what works." },
    { title: "8. Reporting", desc: "Every month, you get a simple report showing spend, reach, clicks, and leads — no confusing jargon." }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                <Layers className="w-8 h-8 text-cyan-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Our PPC Process
              </h2>
            </div>
          </Reveal>

          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                    {i + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <h3 className="font-bold text-lg text-[#0c1f28] mb-2">{step.title.replace(/^\\d+\\.\\s*/, '')}</h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={800} className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              See Our PPC Process in Action <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  PpcWhoThisIsFor: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Users, CheckCircle2 } from 'lucide-react';

export function PpcWhoThisIsFor() {
  const points = [
    "Local businesses wanting immediate calls and enquiries",
    "Ecommerce businesses wanting more product sales quickly",
    "Growing brands wanting fast visibility while SEO builds in the background",
    "Any business that has tried Google Ads before with unclear or poor results"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-pink-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Who This Is For
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              As a PPC Service in Tamil Nadu, our service works well for:
            </p>
          </Reveal>

          <div className="grid gap-4 mb-8">
            {points.map((point, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium leading-relaxed">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <p className="text-gray-600 text-lg leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
              Whether you're running your first campaign or have tried PPC before without success, our team as your PPC Service in Trichy builds a strategy specific to your business and budget.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  PpcExpectations: `
'use client';

import { Reveal } from '@/components/Reveal';
import { BarChart3, TrendingUp } from 'lucide-react';

export function PpcExpectations() {
  const results = [
    "Immediate visibility at the top of Google search results for your chosen keywords",
    "More calls, form fills, and enquiries within days of launching",
    "Clearer understanding of your cost per lead and return on ad spend",
    "Steady improvement in campaign performance as we test and optimize",
    "Simple monthly reports showing exactly where your ad budget is going"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <BarChart3 className="w-8 h-8 text-orange-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                What Results Can You Expect?
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Once your PPC Service in Tamil Nadu and PPC Service in Trichy campaigns are live, here's what businesses typically see over time:
            </p>
          </Reveal>

          <div className="grid gap-4 mb-8">
            {results.map((res, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                  <TrendingUp className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium leading-relaxed">{res}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <p className="text-gray-600 text-lg leading-relaxed italic">
              Unlike SEO, PPC results appear almost immediately — most businesses see traffic and enquiries within the first few days, with performance improving further as campaigns are optimized over the following weeks.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  PpcTrust: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function PpcTrust() {
  const points = [
    "10+ years of experience across PPC, SEO, and digital marketing",
    "50+ brands served across India, UAE, UK, and the USA",
    "Headquartered in Tiruchirappalli, with hands-on knowledge of Tamil Nadu markets",
    "Daily campaign monitoring — budgets aren't left running unchecked",
    "Transparent monthly reporting on exactly where your ad spend goes",
    "Real specialists managing your account — no automated, one-size-fits-all campaigns"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Why Trust Inymart Labs
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Your ad budget deserves careful, honest management. Here's why businesses trust Inymart Labs as their PPC Service in Tamil Nadu and PPC Service in Trichy:
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {points.map((point, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium leading-relaxed">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`,

  PpcFaq: `
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Reveal } from '@/components/Reveal';
import { Plus, Minus, Circle, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'What is PPC?',
    a: 'PPC (Pay-Per-Click) is online advertising where a business pays only when someone clicks their ad, typically shown at the top of Google search results.'
  },
  {
    q: 'How much should I budget for Google Ads?',
    a: 'This depends on your industry and goals, but Inymart Labs will recommend a starting budget and adjust it based on early performance.'
  },
  {
    q: 'How soon will I see results from PPC?',
    a: 'Very soon — campaigns can start driving calls and enquiries within days of going live.'
  },
  {
    q: 'What makes Inymart Labs the right PPC Service in Tamil Nadu and PPC Service in Trichy?',
    a: 'Inymart Labs focuses on clear goals and daily optimization, so your ad spend goes toward real business results, not just clicks.'
  },
  {
    q: 'Can you run PPC alongside my SEO efforts?',
    a: 'Yes. Many businesses run PPC for immediate results while SEO builds long-term, organic visibility in parallel.'
  },
  {
    q: 'Will I know exactly where my ad budget is being spent?',
    a: 'Yes. You\\'ll get clear monthly reports showing spend, clicks, calls, and conversions, explained in simple language.'
  }
];

export function PpcFaq() {
  return (
    <section
      id="faqs"
      className="relative scroll-mt-24 bg-slate-50 pt-8 pb-12 overflow-hidden"
    >
      <div className="container-x">
        <div className="mx-auto flex w-full max-w-4xl flex-col">
          
          <Reveal>
            <div className="flex flex-col items-center text-center mb-10 mt-2">
              <div className="flex items-center justify-center gap-2 text-[#ff6b35] font-bold text-sm tracking-widest uppercase mb-4">
                <div className="flex items-center">
                  <Circle className="h-3 w-3 fill-[#ff6b35] text-[#ff6b35]" />
                  <ArrowRight className="h-4 w-4 -ml-2 text-[#ff6b35]" strokeWidth={3} />
                </div>
                <span>OUR FAQS</span>
              </div>
              
              <h2 className="font-display text-4xl lg:text-[44px] font-extrabold text-[#0c1f28] leading-[1.2] mb-6">
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>

          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 50}>
                <AccordionItem
                  value={\`item-\${i}\`}
                  className="group rounded-[14px] border border-slate-200 bg-white overflow-hidden shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:border-[#ff6b35]/40 hover:shadow-[0_8px_30px_rgba(255,107,53,0.15)] transition-all duration-300"
                >
                  <AccordionTrigger className="flex items-center justify-between p-0 hover:no-underline w-full transition-colors duration-300 data-[state=open]:bg-[#0c1f28] [&>svg]:hidden">
                    <div className="flex items-center flex-1 py-3">
                      <div className="relative flex items-center justify-center shrink-0 w-16 h-14">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-10 bg-[#ff6b35] rounded-r-[4px]" />
                        <div className="relative z-10 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#0c1f28] text-sm font-bold text-white transition-colors duration-300 group-hover:bg-[#ff6b35] group-data-[state=open]:bg-white group-data-[state=open]:text-[#0c1f28]">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                      </div>
                      <span className="ml-1 pr-4 font-bold text-[#0c1f28] transition-colors duration-300 group-hover:text-[#ff6b35] group-data-[state=open]:text-white text-[15px] text-left leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-slate-100 transition-colors duration-300 group-hover:bg-[#ff6b35]/10 group-data-[state=open]:bg-[#ff6b35] mr-4">
                      <Plus className="h-4 w-4 text-[#ff6b35] group-data-[state=open]:hidden" strokeWidth={3} />
                      <Minus className="h-4 w-4 text-white hidden group-data-[state=open]:block" strokeWidth={3} />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white p-5 border-t border-slate-100">
                    <div className="flex gap-5 items-center">
                      <div className="border-l-[3px] border-[#ff6b35] pl-4 text-[13.5px] leading-relaxed text-slate-500 font-medium">
                        {faq.a}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
`,

  PpcCta: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function PpcCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-white pt-8 pb-12 text-foreground"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.03]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#ff6b35]/10 blur-3xl animate-float-slow"
      />
      
      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#ff6b35]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b35] ring-1 ring-[#ff6b35]/20">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b35]" />
              PPC Service
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0c1f28] sm:text-4xl lg:text-[44px]">
              Ready to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff8c5f]">Immediate Visibility?</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-sans mx-auto mt-5 max-w-[60rem] text-base leading-relaxed text-slate-500 text-pretty sm:text-lg">
              If you're looking for a PPC Service in Tamil Nadu or a trusted PPC Service in Trichy that treats your ad budget seriously, Inymart Labs is ready to help. We'll build campaigns around your business goals, your customers, and your budget.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b35] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#ff6b35]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff6b35]/90 hover:shadow-[#ff6b35]/50 w-full sm:w-auto"
              >
                Start Your PPC Campaign
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <a
                href="tel:+919994723446"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 w-full sm:w-auto"
              >
                <Phone className="h-4 w-4 text-[#ff6b35]" />
                Call +91 9994723446
              </a>

              <a
                href="mailto:ceo@inymartlabs.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 w-full sm:w-auto"
              >
                <Mail className="h-4 w-4 text-blue-500" />
                Email Us
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`
};

for (const [name, content] of Object.entries(components)) {
  fs.writeFileSync(path.join(ppcDir, name + '.tsx'), content.trim());
  console.log('Created ' + name + '.tsx');
}

const ppcPage = `
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { PpcHeroBanner } from '@/components/ppc/PpcHeroBanner';
import { PpcQuickAnswer } from '@/components/ppc/PpcQuickAnswer';
import { PpcWhatIs } from '@/components/ppc/PpcWhatIs';
import { PpcWhatWeDo } from '@/components/ppc/PpcWhatWeDo';
import { PpcWhyChoose } from '@/components/ppc/PpcWhyChoose';
import { PpcComparison } from '@/components/ppc/PpcComparison';
import { PpcKeyFacts } from '@/components/ppc/PpcKeyFacts';
import { PpcProcess } from '@/components/ppc/PpcProcess';
import { PpcWhoThisIsFor } from '@/components/ppc/PpcWhoThisIsFor';
import { PpcExpectations } from '@/components/ppc/PpcExpectations';
import { PpcTrust } from '@/components/ppc/PpcTrust';
import { PpcFaq } from '@/components/ppc/PpcFaq';
import { PpcCta } from '@/components/ppc/PpcCta';

export const metadata = {
  title: 'PPC Service in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a PPC Service in Trichy, Tamil Nadu that plans, sets up, and manages Google Ads campaigns to generate calls, leads, and sales.',
};

export default function PpcServicePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <PpcHeroBanner />
        <PpcQuickAnswer />
        <PpcWhatIs />
        <PpcWhatWeDo />
        <PpcWhyChoose />
        <PpcComparison />
        <PpcKeyFacts />
        <PpcProcess />
        <PpcWhoThisIsFor />
        <PpcExpectations />
        <PpcTrust />
        <PpcFaq />
        <PpcCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
`;

fs.writeFileSync(path.join(ppcPageDir, 'page.tsx'), ppcPage.trim());
console.log('Created app/services/ppc-service/page.tsx');
