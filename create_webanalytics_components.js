const fs = require('fs');
const path = require('path');

const webAnalyticsDir = path.join(__dirname, 'components', 'web-analytics');
const webAnalyticsPageDir = path.join(__dirname, 'app', 'services', 'web-analytics');

if (!fs.existsSync(webAnalyticsDir)) {
  fs.mkdirSync(webAnalyticsDir, { recursive: true });
}
if (!fs.existsSync(webAnalyticsPageDir)) {
  fs.mkdirSync(webAnalyticsPageDir, { recursive: true });
}

const components = {
  WebAnalyticsHeroBanner: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ChevronRight, Home, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function WebAnalyticsHeroBanner() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-8 pb-12">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner 1.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0c1f28]/90 via-[#0c1f28]/70 to-[#0c1f28]/95 backdrop-blur-[2px]" />

      <div className="container-x relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Subtitle / Eyebrow */}
        <Reveal>
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            Inymart Labs
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={100}>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl mx-auto mb-8">
            Web Analytics Service in Tamil Nadu
          </h1>
        </Reveal>

        {/* CTA Scroll Indicator */}
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

        {/* Breadcrumbs */}
        <Reveal delay={400}>
          <nav className="mt-12 flex items-center justify-center space-x-2 text-sm font-medium text-zinc-400">
            <Link 
              href="/" 
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-zinc-600" />
            <Link 
              href="/#services" 
              className="transition-colors hover:text-primary"
            >
              Services
            </Link>
            <ChevronRight className="h-4 w-4 text-zinc-600" />
            <span className="text-white">Web Analytics Service</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
`,

  WebAnalyticsQuickAnswer: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target, Zap } from 'lucide-react';

export function WebAnalyticsQuickAnswer() {
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
                Inymart Labs is a <strong className="text-[#0c1f28]">Web Analytics Service in Trichy Tamil Nadu</strong> that audits, fixes, and interprets website tracking data — using tools like Google Analytics and Google Search Console — to show businesses exactly where traffic comes from, how visitors behave, and why they aren't converting. Accurate data is available immediately once tracking is fixed, with clearer patterns and insights building over 2–3 months.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
`,

  WebAnalyticsWhatIs: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Search } from 'lucide-react';

export function WebAnalyticsWhatIs() {
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
                What Is a Web Analytics Service?
              </h2>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-gray-600 leading-relaxed">
                A Web Analytics Service is the process of setting up, auditing, and interpreting website tracking data — covering traffic sources, visitor behavior, conversion goals, and reporting — so a business can make marketing decisions based on facts rather than guesswork. It typically uses tools like Google Analytics and Google Search Console, configured correctly and explained in plain language.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  WebAnalyticsWhatWeDo: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Settings, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function WebAnalyticsWhatWeDo() {
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
                Inymart Labs offers a trusted <strong className="text-[#0c1f28]">Web Analytics Service in Tamil Nadu</strong>, helping to understand businesses exactly what's happening on their website — who's visiting, what they're clicking, and why they leave without buying. As a <strong className="text-[#0c1f28]">Web Analytics Service in Trichy</strong>, we turn confusing numbers into simple, clear answers you can act on.
              </p>
              <p>
                We work with small businesses, growing brands, and companies across India, UAE, UK, and the USA. Whether you want to know why your website isn't converting or want clarity on where your traffic comes from, our team as your Web Analytics Service in Tamil Nadu makes the data easy to understand.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              Talk to Our Analytics Team <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  WebAnalyticsWhyChoose: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target } from 'lucide-react';

export function WebAnalyticsWhyChoose() {
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
                Why Choose a Web Analytics Service in Tamil Nadu
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Most businesses have Google Analytics installed but never actually look at it, or don't know what the numbers mean. Without real analysis, you're making marketing decisions based on guesswork instead of facts.
              </p>
              <p>
                A good Web Analytics Service in Tamil Nadu doesn't just show you charts — it explains what's working, what's not, and what to do next. As an experienced Web Analytics Service in Trichy, Inymart Labs connects your website data to real business outcomes like enquiries, calls, and sales.
              </p>
              <p>
                We also make sure your data is set up correctly in the first place. Many businesses have broken or incomplete tracking without realizing it, which means every report they've seen so far may already be wrong.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  WebAnalyticsComparison: `
'use client';

import { Reveal } from '@/components/Reveal';
import { GitCompare } from 'lucide-react';

export function WebAnalyticsComparison() {
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
                Web Analytics vs. Just Having Google Analytics Installed
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              Having Google Analytics installed is not the same as having accurate, actionable data. Here's the difference:
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-1/4">Factor</th>
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-3/8 border-l border-slate-200">Google Analytics Alone</th>
                    <th className="py-5 px-6 font-bold text-primary text-lg w-3/8 border-l border-slate-200">Inymart Labs' Web Analytics Service</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Setup Accuracy</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Often incomplete or misconfigured</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Audited and corrected for accuracy</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Interpretation</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Raw charts, no explanation</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Plain-language insights and next steps</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Goal Tracking</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Rarely mapped to business goals</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Mapped to calls, enquiries, and sales</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Action Plan</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">None</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Clear monthly recommendations</td>
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

  WebAnalyticsKeyFacts: `
'use client';

import { Reveal } from '@/components/Reveal';
import { BookOpen } from 'lucide-react';

export function WebAnalyticsKeyFacts() {
  const facts = [
    { label: "Service", value: "Web Analytics Service in Trichy Tamil Nadu" },
    { label: "Headquarters", value: "Tiruchirappalli, Tamil Nadu" },
    { label: "Tools Used", value: "Google Analytics, Google Search Console, and other free tracking tools" },
    { label: "Core Process", value: "Analytics audit, correct setup, goal mapping, traffic analysis, behavior analysis, custom reporting, ongoing reviews" },
    { label: "Typical Timeline", value: "Accurate data immediately after setup; clearer insights build over 2–3 months" },
    { label: "Reporting", value: "Monthly, in plain language, no technical jargon" }
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
                Key Facts About Inymart Labs' Web Analytics Service
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

  WebAnalyticsProcess: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function WebAnalyticsProcess() {
  const steps = [
    { title: "1. Analytics Audit", desc: "We check your existing Google Analytics, Google Search Console, and tracking setup to find gaps or errors in your data." },
    { title: "2. Correct Setup", desc: "We fix and configure tracking so every visit, click, and form submission is recorded accurately." },
    { title: "3. Goal Mapping", desc: "We define what actually matters for your business — calls, enquiries, purchases, or sign-ups — and track those specifically." },
    { title: "4. Traffic Analysis", desc: "We study where your visitors come from — Google search, social media, ads, or direct visits — and how each source performs." },
    { title: "5. Behavior Analysis", desc: "We look at how people move through your website, where they drop off, and what's stopping them from converting." },
    { title: "6. Custom Reporting", desc: "We build simple, easy-to-read reports that show exactly what's happening, without technical jargon." },
    { title: "7. Ongoing Reviews", desc: "We review your data regularly and recommend clear next steps to improve results over time." }
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
                Our Web Analytics Process
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
              See Our Analytics Process in Action <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  WebAnalyticsWhoThisIsFor: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Users, CheckCircle2 } from 'lucide-react';

export function WebAnalyticsWhoThisIsFor() {
  const points = [
    "Businesses with a website but no clear understanding of its performance",
    "Businesses running ads or SEO who want to know if it's actually working",
    "Ecommerce businesses wanting to understand buyer behavior",
    "Any business that suspects their tracking data may be incomplete or wrong"
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
              Our Web Analytics Service in Tamil Nadu works well for:
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
              Whether you already use Google Analytics or haven't set up tracking at all, our team as your Web Analytics Service in Trichy starts by making sure your data is accurate before we analyze anything.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  WebAnalyticsExpectations: `
'use client';

import { Reveal } from '@/components/Reveal';
import { BarChart3, TrendingUp } from 'lucide-react';

export function WebAnalyticsExpectations() {
  const results = [
    "Accurate, trustworthy data that reflects what's really happening on your website",
    "Clear answers on where your best customers come from — SEO, ads, or social media",
    "Fewer wasted marketing rupees, since you'll know what's actually working",
    "A clear picture of where visitors drop off, so you can fix it and improve conversions",
    "Simple monthly reports that make sense, without needing to be a data expert"
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
              Once your Web Analytics Service in Tamil Nadu and Web Analytics Service in Trichy setup is in place, here's what businesses typically see over time:
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
              Results with analytics start immediately — once tracking is fixed, you get accurate data right away, with clearer patterns and insights building over 2–3 months.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  WebAnalyticsTrust: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function WebAnalyticsTrust() {
  const points = [
    "10+ years of experience working with digital marketing and website data",
    "50+ brands served across India, UAE, UK, and the USA",
    "Headquartered in Tiruchirappalli, with hands-on knowledge of Tamil Nadu markets",
    "We fix broken tracking first — we don't build reports on top of bad data",
    "Plain-language reporting — no jargon, no charts without explanation",
    "Real humans reviewing your data — no automated, generic reports"
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
              Your analytics data guides every marketing decision you make, so accuracy and honesty matter. Here's why businesses trust Inymart Labs as their Web Analytics Service in Trichy, Tamil Nadu:
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

  WebAnalyticsFaq: `
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
    q: 'What does a Web Analytics Service do?',
    a: 'A Web Analytics Service audits, fixes, and interprets your website tracking data, showing where traffic comes from, how visitors behave, and why they aren\\'t converting.'
  },
  {
    q: 'I already have Google Analytics installed — do I still need this service?',
    a: 'Often yes. Many businesses have Analytics installed but set up incorrectly, which means the data isn\\'t fully trustworthy.'
  },
  {
    q: 'How often will I receive reports?',
    a: 'Most businesses receive monthly reports, though Inymart Labs can adjust the frequency based on your needs.'
  },
  {
    q: 'What makes Inymart Labs the right Web Analytics Service in Tamil Nadu and Web Analytics Service in Trichy?',
    a: 'Inymart Labs focuses on explaining your data in plain language and connecting it to real business results, not just showing charts.'
  },
  {
    q: 'Can you help me understand why my website isn\\'t converting?',
    a: 'Yes. Behavior analysis is a core part of Inymart Labs\\' process, showing exactly where visitors drop off before taking action.'
  },
  {
    q: 'Do I need to buy any special tools for this?',
    a: 'Not usually. Inymart Labs primarily works with free tools like Google Analytics and Google Search Console, set up and used correctly.'
  }
];

export function WebAnalyticsFaq() {
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

  WebAnalyticsCta: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function WebAnalyticsCta() {
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
              Web Analytics
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0c1f28] sm:text-4xl lg:text-[44px]">
              Ready to Understand <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff8c5f]">Your Website Data?</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-sans mx-auto mt-5 max-w-[60rem] text-base leading-relaxed text-slate-500 text-pretty sm:text-lg">
              If you're looking for a Web Analytics Service in Tamil Nadu or a trusted Web Analytics Service in Trichy that turns confusing numbers into clear decisions, Inymart Labs is ready to help. We'll make sure your data is accurate, and show you exactly what it means for your business.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b35] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#ff6b35]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff6b35]/90 hover:shadow-[#ff6b35]/50 w-full sm:w-auto"
              >
                Start Your Analytics Review
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
  fs.writeFileSync(path.join(webAnalyticsDir, name + '.tsx'), content.trim());
  console.log('Created ' + name + '.tsx');
}

const webAnalyticsPage = `
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { WebAnalyticsHeroBanner } from '@/components/web-analytics/WebAnalyticsHeroBanner';
import { WebAnalyticsQuickAnswer } from '@/components/web-analytics/WebAnalyticsQuickAnswer';
import { WebAnalyticsWhatIs } from '@/components/web-analytics/WebAnalyticsWhatIs';
import { WebAnalyticsWhatWeDo } from '@/components/web-analytics/WebAnalyticsWhatWeDo';
import { WebAnalyticsWhyChoose } from '@/components/web-analytics/WebAnalyticsWhyChoose';
import { WebAnalyticsComparison } from '@/components/web-analytics/WebAnalyticsComparison';
import { WebAnalyticsKeyFacts } from '@/components/web-analytics/WebAnalyticsKeyFacts';
import { WebAnalyticsProcess } from '@/components/web-analytics/WebAnalyticsProcess';
import { WebAnalyticsWhoThisIsFor } from '@/components/web-analytics/WebAnalyticsWhoThisIsFor';
import { WebAnalyticsExpectations } from '@/components/web-analytics/WebAnalyticsExpectations';
import { WebAnalyticsTrust } from '@/components/web-analytics/WebAnalyticsTrust';
import { WebAnalyticsFaq } from '@/components/web-analytics/WebAnalyticsFaq';
import { WebAnalyticsCta } from '@/components/web-analytics/WebAnalyticsCta';

export const metadata = {
  title: 'Web Analytics Service in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a Web Analytics Service in Trichy Tamil Nadu that audits, fixes, and interprets website tracking data.',
};

export default function WebAnalyticsServicePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <WebAnalyticsHeroBanner />
        <WebAnalyticsQuickAnswer />
        <WebAnalyticsWhatIs />
        <WebAnalyticsWhatWeDo />
        <WebAnalyticsWhyChoose />
        <WebAnalyticsComparison />
        <WebAnalyticsKeyFacts />
        <WebAnalyticsProcess />
        <WebAnalyticsWhoThisIsFor />
        <WebAnalyticsExpectations />
        <WebAnalyticsTrust />
        <WebAnalyticsFaq />
        <WebAnalyticsCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
`;

fs.writeFileSync(path.join(webAnalyticsPageDir, 'page.tsx'), webAnalyticsPage.trim());
console.log('Created app/services/web-analytics/page.tsx');
