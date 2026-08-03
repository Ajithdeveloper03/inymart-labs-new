const fs = require('fs');
const path = require('path');

const dmaDir = path.join(__dirname, 'components', 'dma');
const dmaPageDir = path.join(__dirname, 'app', 'services', 'digital-marketing-agency');

if (!fs.existsSync(dmaDir)) {
  fs.mkdirSync(dmaDir, { recursive: true });
}
if (!fs.existsSync(dmaPageDir)) {
  fs.mkdirSync(dmaPageDir, { recursive: true });
}

const components = {
  DmaHeroBanner: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ChevronRight, Home, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function DmaHeroBanner() {
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
            Digital Marketing Agency in Tamil Nadu
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
            <span className="text-white">Digital Marketing Agency</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
`,

  DmaQuickAnswer: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target, Zap } from 'lucide-react';

export function DmaQuickAnswer() {
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
                Inymart Labs is a full-service <strong className="text-[#0c1f28]">Digital Marketing Agency in Trichy Tamil Nadu</strong>, offering SEO, Local SEO, social media optimization, social media marketing, web analytics, web development, and consulting under one coordinated strategy. Headquartered in Tiruchirappalli, Inymart Labs has 9+ years of experience and has served 50+ brands across India, UAE, UK, and the USA, with most businesses seeing early improvements within 1–2 months and stronger, compounding growth over 3–6 months.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
`,

  DmaWhatIs: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Search } from 'lucide-react';

export function DmaWhatIs() {
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
                What Is a Digital Marketing Agency?
              </h2>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-gray-600 leading-relaxed">
                A Digital Marketing Agency is a company that manages a business's online growth across multiple channels — SEO, social media, paid ads, website development, and analytics — under one coordinated strategy instead of separate, disconnected efforts. A good digital marketing agency ties every channel to clear business goals like calls, leads, and sales, and reports on performance in plain language.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  DmaWhatWeDo: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Settings, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function DmaWhatWeDo() {
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
                Inymart Labs is a leading <strong className="text-[#0c1f28]">Digital Marketing Agency in Tamil Nadu</strong>, bringing SEO, social media, ads, web development, and analytics together under one strategy instead of scattered, disconnected efforts. As a trusted <strong className="text-[#0c1f28]">Digital Marketing Agency in Trichy</strong>, we help businesses grow online without needing to manage multiple vendors separately.
              </p>
              <p>
                We work with small businesses, growing brands, and companies across India, UAE, UK, and the USA. Whether you need one service or a complete marketing plan, our team as your Digital Marketing Agency in Tamil Nadu builds everything around your specific business goals.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              Talk to Our Marketing Team <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  DmaWhyChoose: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target } from 'lucide-react';

export function DmaWhyChoose() {
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
                Why Choose a Digital Marketing Agency in Tamil Nadu
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Many businesses end up working with separate vendors for SEO, social media, and ads — and none of them talk to each other. This often leads to mixed messaging, wasted budget, and no clear picture of what's actually working.
              </p>
              <p>
                A complete Digital Marketing Agency in Tamil Nadu solves this by bringing every channel under one strategy and one team. As an experienced Digital Marketing Agency in Trichy, Inymart Labs makes sure your SEO, content, ads, and social media all work together toward the same goals.
              </p>
              <p>
                We also believe in transparency. Every service from Inymart Labs comes with clear reporting, so you always know what's being done and how it's performing.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  DmaComparison: `
'use client';

import { Reveal } from '@/components/Reveal';
import { GitCompare } from 'lucide-react';

export function DmaComparison() {
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
                Digital Marketing Agency vs. Managing Marketing In-House
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              Many businesses try to handle marketing internally before realizing the limits of doing it alone. Here's how the two compare:
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-1/4">Factor</th>
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-3/8 border-l border-slate-200">In-House Marketing</th>
                    <th className="py-5 px-6 font-bold text-primary text-lg w-3/8 border-l border-slate-200">Digital Marketing Agency (Inymart Labs)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Expertise</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Limited to what your team already knows</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Specialists across SEO, ads, social media, and web</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Cost</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Salaries, tools, and training add up</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">One coordinated team and budget</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Speed</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Slower learning curve</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Proven processes from day one</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Reporting</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Often informal or inconsistent</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Transparent monthly reporting across every channel</td>
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

  DmaKeyFacts: `
'use client';

import { Reveal } from '@/components/Reveal';
import { BookOpen } from 'lucide-react';

export function DmaKeyFacts() {
  const facts = [
    { label: "Service", value: "Digital Marketing Agency in Tamil Nadu and Digital Marketing Agency in Trichy" },
    { label: "Headquarters", value: "Tiruchirappalli, Tamil Nadu" },
    { label: "Experience", value: "10+ years" },
    { label: "Brands Served", value: "50+, across India, UAE, UK, and the USA" },
    { label: "Services", value: "SEO, Local SEO, Social Media Optimization, Social Media Marketing, Web Analytics, Web Development, Digital Marketing Consulting, PPC" },
    { label: "Typical Timeline", value: "Early improvements within 1–2 months; compounding growth over 3–6 months" }
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
                Key Facts About Inymart Labs
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

  DmaServices: `
'use client';

import { Reveal } from '@/components/Reveal';
import { CheckCircle2, Rocket } from 'lucide-react';

export function DmaServices() {
  const services = [
    "SEO — helping your website rank higher on Google for the searches that matter",
    "Local SEO — getting your business found by nearby customers on Google Maps",
    "Social Media Optimization — building an active, professional social media presence",
    "Social Media Marketing — running paid ad campaigns that bring real leads and sales",
    "Web Analytics — turning your website data into clear, actionable insights",
    "Web Development — building fast, professional websites ready for growth",
    "Digital Marketing Consulting — expert guidance on strategy and priorities"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-rose-500/10 flex items-center justify-center shrink-0">
                <Rocket className="w-8 h-8 text-rose-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Our Digital Marketing Services
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 mb-8">
            {services.map((res, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium leading-relaxed">{res}</p>
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

  DmaProcess: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function DmaProcess() {
  const steps = [
    { title: "1. Discovery", desc: "We learn about your business, your customers, and your current marketing efforts." },
    { title: "2. Strategy", desc: "We build a plan showing which services matter most for your goals and budget." },
    { title: "3. Execution", desc: "We implement SEO, social media, ads, or web development, depending on your plan." },
    { title: "4. Monitoring", desc: "We track performance closely, adjusting the approach as we learn what works." },
    { title: "5. Reporting", desc: "Every month, you get clear reports showing exactly how your marketing is performing." }
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                <Layers className="w-8 h-8 text-cyan-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Our Process
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
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all">
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
              See Our Marketing Approach in Action <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  DmaWhoThisIsFor: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Users, CheckCircle2 } from 'lucide-react';

export function DmaWhoThisIsFor() {
  const points = [
    "Businesses wanting a single team to manage their entire online presence",
    "Businesses currently juggling multiple vendors without clear coordination",
    "Growing brands ready to invest seriously in digital growth",
    "Any business unsure which marketing channels actually deserve their budget"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
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
              As a Digital Marketing Agency in Tamil Nadu, we work well for:
            </p>
          </Reveal>

          <div className="grid gap-4 mb-8">
            {points.map((point, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium leading-relaxed">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <p className="text-gray-600 text-lg leading-relaxed bg-white p-6 rounded-2xl border border-slate-100">
              Whether you need everything at once or want to start with one service and expand later, our team as your Digital Marketing Agency in Trichy builds a plan that fits where you are today.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  DmaExpectations: `
'use client';

import { Reveal } from '@/components/Reveal';
import { BarChart3, TrendingUp } from 'lucide-react';

export function DmaExpectations() {
  const results = [
    "A more coordinated online presence, with SEO, social media, and ads working together",
    "Steady growth in traffic, leads, and enquiries across channels",
    "Clearer visibility into what's working, since everything is tracked and reported in one place",
    "Better use of your marketing budget, focused on the channels that actually perform",
    "A single point of contact for your entire digital marketing effort, instead of managing multiple vendors"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
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
              Once your Digital Marketing Agency in Tamil Nadu and Digital Marketing Agency in Trichy plan is in motion, here's what businesses typically see over time:
            </p>
          </Reveal>

          <div className="grid gap-4 mb-8">
            {results.map((res, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl shadow-sm border border-slate-100">
                  <TrendingUp className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium leading-relaxed">{res}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <p className="text-gray-600 text-lg leading-relaxed italic">
              Results build steadily as each channel is set up and optimized — many businesses see early improvements within the first 1–2 months, with stronger, compounding growth over 3–6 months.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  DmaTrust: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function DmaTrust() {
  const points = [
    "10+ years of experience across SEO, social media, ads, web development, and analytics",
    "50+ brands served across India, UAE, UK, and the USA",
    "Headquartered in Tiruchirappalli, with hands-on knowledge of Tamil Nadu markets",
    "One coordinated team managing every channel, instead of disconnected vendors",
    "Transparent monthly reporting across every active service",
    "Real humans managing your account — no bots, no generic templates"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
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
              Handing over your business's marketing to an agency requires trust. Here's why businesses choose Inymart Labs as their Digital Marketing Agency in Tamil Nadu and Digital Marketing Agency in Trichy:
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

  DmaFaq: `
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
    q: 'What does a Digital Marketing Agency do?',
    a: 'A Digital Marketing Agency like Inymart Labs manages a business\\'s online growth across SEO, social media, ads, web development, and analytics under one coordinated strategy.'
  },
  {
    q: 'Do I need to use all your services, or can I choose just one?',
    a: 'You can start with just one service, such as SEO or web development, and add others as your needs grow.'
  },
  {
    q: 'How is this different from hiring separate freelancers for each service?',
    a: 'Everything is managed under one strategy and one team, so your SEO, ads, and social media actually work together instead of separately.'
  },
  {
    q: 'What makes Inymart Labs the right Digital Marketing Agency in Tamil Nadu and Digital Marketing Agency in Trichy?',
    a: 'Inymart Labs focuses on coordinated strategy and transparent reporting, so you always know what\\'s happening and why.'
  },
  {
    q: 'How soon will I start seeing results?',
    a: 'This depends on the services chosen — ads can show results within days, while SEO typically builds over a few months.'
  },
  {
    q: 'Will I get regular updates on performance?',
    a: 'Yes. You\\'ll receive clear monthly reports covering every active service, explained in simple language.'
  }
];

export function DmaFaq() {
  return (
    <section
      id="faqs"
      className="relative scroll-mt-24 bg-white pt-8 pb-12 overflow-hidden"
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

  DmaCta: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function DmaCta() {
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
              Digital Marketing
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0c1f28] sm:text-4xl lg:text-[44px]">
              Ready for a Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff8c5f]">Digital Marketing Strategy?</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-sans mx-auto mt-5 max-w-[60rem] text-base leading-relaxed text-slate-500 text-pretty sm:text-lg">
              If you're looking for a Digital Marketing Agency in Tamil Nadu or a trusted Digital Marketing Agency in Trichy that brings everything together, Inymart Labs is ready to help. We'll build a plan around your business, your goals, and your budget.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b35] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#ff6b35]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff6b35]/90 hover:shadow-[#ff6b35]/50 w-full sm:w-auto"
              >
                Start Your Digital Marketing Journey
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
  fs.writeFileSync(path.join(dmaDir, name + '.tsx'), content.trim());
  console.log('Created ' + name + '.tsx');
}

const dmaPage = `
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { DmaHeroBanner } from '@/components/dma/DmaHeroBanner';
import { DmaQuickAnswer } from '@/components/dma/DmaQuickAnswer';
import { DmaWhatIs } from '@/components/dma/DmaWhatIs';
import { DmaWhatWeDo } from '@/components/dma/DmaWhatWeDo';
import { DmaWhyChoose } from '@/components/dma/DmaWhyChoose';
import { DmaComparison } from '@/components/dma/DmaComparison';
import { DmaKeyFacts } from '@/components/dma/DmaKeyFacts';
import { DmaServices } from '@/components/dma/DmaServices';
import { DmaProcess } from '@/components/dma/DmaProcess';
import { DmaWhoThisIsFor } from '@/components/dma/DmaWhoThisIsFor';
import { DmaExpectations } from '@/components/dma/DmaExpectations';
import { DmaTrust } from '@/components/dma/DmaTrust';
import { DmaFaq } from '@/components/dma/DmaFaq';
import { DmaCta } from '@/components/dma/DmaCta';

export const metadata = {
  title: 'Digital Marketing Agency in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a full-service Digital Marketing Agency in Trichy Tamil Nadu, offering SEO, Local SEO, social media optimization, and more.',
};

export default function DigitalMarketingAgencyPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <DmaHeroBanner />
        <DmaQuickAnswer />
        <DmaWhatIs />
        <DmaWhatWeDo />
        <DmaWhyChoose />
        <DmaComparison />
        <DmaKeyFacts />
        <DmaServices />
        <DmaProcess />
        <DmaWhoThisIsFor />
        <DmaExpectations />
        <DmaTrust />
        <DmaFaq />
        <DmaCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
`;

fs.writeFileSync(path.join(dmaPageDir, 'page.tsx'), dmaPage.trim());
console.log('Created app/services/digital-marketing-agency/page.tsx');
