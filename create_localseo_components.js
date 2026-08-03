const fs = require('fs');
const path = require('path');

const localSeoDir = path.join(__dirname, 'components', 'local-seo');
const localSeoPageDir = path.join(__dirname, 'app', 'services', 'local-seo');

if (!fs.existsSync(localSeoDir)) {
  fs.mkdirSync(localSeoDir, { recursive: true });
}
if (!fs.existsSync(localSeoPageDir)) {
  fs.mkdirSync(localSeoPageDir, { recursive: true });
}

const components = {
  LocalSeoHeroBanner: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ChevronRight, Home, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function LocalSeoHeroBanner() {
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
            Local SEO Agency in Tamil Nadu
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
            <span className="text-white">Local SEO Service</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
`,

  LocalSeoQuickAnswer: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target, Zap } from 'lucide-react';

export function LocalSeoQuickAnswer() {
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
                Inymart Labs is a <strong className="text-[#0c1f28]">Local SEO agency in Trichy Tamil Nadu</strong> that helps businesses show up first in Google Maps and "near me" searches through Google Business Profile optimization, local citations, review management, and map pack optimization. Inymart Labs serves businesses across Trichy, Chennai, Madurai, and Coimbatore, with most businesses seeing early local visibility improvements within a few weeks and stronger results by month 2–3.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
`,

  LocalSeoWhatWeDo: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Settings, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function LocalSeoWhatWeDo() {
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
                Inymart Labs is a trusted <strong className="text-[#0c1f28]">Local SEO agency in Tamil Nadu</strong>, helping businesses show up first when nearby customers search for their products or services. As a <strong className="text-[#0c1f28]">Local SEO agency in Trichy</strong>, we know exactly how local customers search, and we build strategy around getting your business found on Google Search and Google Maps.
              </p>
              <p>
                We work with small businesses, growing brands, and companies across India, UAE, UK, and the USA. Whether you run a single shop in Trichy or multiple locations across Tamil Nadu, our team as your Local SEO agency in Tamil Nadu builds a plan around how nearby customers actually find businesses like yours.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              Talk to Our Local SEO Team <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  LocalSeoWhyChoose: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target } from 'lucide-react';

export function LocalSeoWhyChoose() {
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
                Why Choose a Local SEO Agency in Tamil Nadu
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Most customers today search for businesses "near me" before making a decision. If your business doesn't appear in local map results or the top local search listings, you're losing customers to businesses right down the street that do show up.
              </p>
              <p>
                Local SEO isn't just about adding your address online. It's about building trust with Google through accurate listings, reviews, and location-based content. As an experienced Local SEO agency in Trichy, Inymart Labs makes sure your business is seen as the right, trustworthy choice for nearby customers.
              </p>
              <p>
                A good Local SEO agency in Tamil Nadu also understands regional search habits. Customers in Trichy, Chennai, Madurai, and Coimbatore often search differently, and we factor these local patterns into every strategy we build.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  LocalSeoKeyFacts: `
'use client';

import { Reveal } from '@/components/Reveal';
import { BookOpen } from 'lucide-react';

export function LocalSeoKeyFacts() {
  const facts = [
    { label: "Service", value: "Local SEO Agency in Tamil Nadu and Local SEO Agency in Trichy" },
    { label: "Headquarters", value: "Tiruchirappalli, Tamil Nadu" },
    { label: "Service Areas", value: "Trichy, Chennai, Madurai, Coimbatore, and nearby regions" },
    { label: "Core Process", value: "Google Business Profile setup, local keyword research, listings and citations, review management, location-based content, map pack optimization, monthly reporting" },
    { label: "Typical Timeline", value: "Early visibility improvements within a few weeks; stronger results by month 2–3" },
    { label: "Reporting", value: "Simple monthly reports covering local rankings, calls, and direction requests" }
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
                Key Facts About Inymart Labs' Local SEO Service
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

  LocalSeoProcess: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function LocalSeoProcess() {
  const steps = [
    { title: "1. Google Business Profile Setup", desc: "We create or optimize your Google Business Profile with accurate details, categories, and photos so customers find the right information instantly." },
    { title: "2. Local Keyword Research", desc: "We find the exact \\"near me\\" and location-based phrases your customers are searching for." },
    { title: "3. Listings & Citations", desc: "We list your business consistently across trusted directories, so Google sees your business as verified and reliable." },
    { title: "4. Review Management", desc: "We help you collect and respond to customer reviews, which build trust with both Google and new customers." },
    { title: "5. Location-Based Content", desc: "We create website content that speaks directly to customers in your service areas." },
    { title: "6. Map Pack Optimization", desc: "We work to get your business into Google's local \\"map pack\\" results, right at the top of local searches." },
    { title: "7. Reporting", desc: "Every month, you get a simple report showing local rankings, calls, and direction requests — no confusing jargon." }
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
                Our Local SEO Process
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
              See Our Local SEO Process in Action <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  LocalSeoWhoThisIsFor: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Users, CheckCircle2 } from 'lucide-react';

export function LocalSeoWhoThisIsFor() {
  const points = [
    "Local shops and service businesses wanting more calls and walk-ins",
    "Businesses with multiple branches across Tamil Nadu",
    "Businesses that rely on nearby customers finding them quickly",
    "Any business that isn't showing up in Google Maps results yet"
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
              As a Local SEO agency in Tamil Nadu, our service works well for:
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
              Whether you're just setting up your first Google Business Profile or already have one that needs fixing, our team as your Local SEO agency in Trichy starts by understanding your business and your service areas.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  LocalSeoExpectations: `
'use client';

import { Reveal } from '@/components/Reveal';
import { BarChart3, TrendingUp } from 'lucide-react';

export function LocalSeoExpectations() {
  const results = [
    "Your business appearing in Google's local \\"map pack\\" for nearby searches",
    "More calls, direction requests, and walk-ins from local customers",
    "A stronger Google Business Profile with more reviews and better ratings",
    "Higher visibility for \\"near me\\" searches across Trichy, Chennai, Madurai, and Coimbatore",
    "Clear monthly reports showing exactly how your local rankings and enquiries are improving"
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
              Once your Local SEO agency in Tamil Nadu and Local SEO agency in Trichy strategy is in motion, here's what businesses typically see over time:
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
              Results build steadily — many notice early movement within weeks, with stronger visibility by month 2–3.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  LocalSeoFaq: `
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
    q: 'What does a Local SEO agency in Tamil Nadu do?',
    a: 'A Local SEO agency in Tamil Nadu like Inymart Labs helps businesses show up first in Google Maps and "near me" search results through Google Business Profile optimization, listings, reviews, and location-based content.'
  },
  {
    q: 'How is Local SEO different from regular SEO?',
    a: 'Local SEO focuses specifically on getting found by nearby customers through Google Maps and local search results, while regular SEO covers your whole website\\'s visibility.'
  },
  {
    q: 'How long does Local SEO take to show results?',
    a: 'Many businesses see improvements in local visibility within a few weeks, with stronger results building over 2–3 months.'
  },
  {
    q: 'What makes Inymart Labs the right Local SEO agency in Tamil Nadu and Local SEO agency in Trichy?',
    a: 'Inymart Labs combines deep local market knowledge with proven Local SEO practices, focusing on real calls and visits, not just rankings.'
  },
  {
    q: 'Do you help with managing customer reviews?',
    a: 'Yes. Review collection and response are a core part of Inymart Labs\\' Local SEO process.'
  },
  {
    q: 'Can you help if my business has multiple locations?',
    a: 'Yes. Inymart Labs manages Local SEO for single-location businesses as well as multi-branch businesses across Tamil Nadu.'
  },
  {
    q: 'Which areas does Inymart Labs\\' Local SEO service cover?',
    a: 'Inymart Labs provides Local SEO for businesses across Trichy, Chennai, Madurai, Coimbatore, and nearby regions in Tamil Nadu.'
  }
];

export function LocalSeoFaq() {
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

  LocalSeoCta: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function LocalSeoCta() {
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
              Local SEO
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0c1f28] sm:text-4xl lg:text-[44px]">
              Ready to Get Found by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff8c5f]">Nearby Customers?</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-sans mx-auto mt-5 max-w-[60rem] text-base leading-relaxed text-slate-500 text-pretty sm:text-lg">
              If you're looking for a Local SEO agency in Tamil Nadu or a trusted Local SEO agency in Trichy that helps you show up first for nearby customers, Inymart Labs is ready to help. We'll build a plan around your business, your locations, and how customers search for you.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b35] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#ff6b35]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff6b35]/90 hover:shadow-[#ff6b35]/50 w-full sm:w-auto"
              >
                Start Your Local SEO Journey
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
  fs.writeFileSync(path.join(localSeoDir, name + '.tsx'), content.trim());
  console.log('Created ' + name + '.tsx');
}

const localSeoPage = `
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { LocalSeoHeroBanner } from '@/components/local-seo/LocalSeoHeroBanner';
import { LocalSeoQuickAnswer } from '@/components/local-seo/LocalSeoQuickAnswer';
import { LocalSeoWhatWeDo } from '@/components/local-seo/LocalSeoWhatWeDo';
import { LocalSeoWhyChoose } from '@/components/local-seo/LocalSeoWhyChoose';
import { LocalSeoKeyFacts } from '@/components/local-seo/LocalSeoKeyFacts';
import { LocalSeoProcess } from '@/components/local-seo/LocalSeoProcess';
import { LocalSeoWhoThisIsFor } from '@/components/local-seo/LocalSeoWhoThisIsFor';
import { LocalSeoExpectations } from '@/components/local-seo/LocalSeoExpectations';
import { LocalSeoFaq } from '@/components/local-seo/LocalSeoFaq';
import { LocalSeoCta } from '@/components/local-seo/LocalSeoCta';

export const metadata = {
  title: 'Local SEO Agency in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a Local SEO agency in Trichy Tamil Nadu that helps businesses show up first in Google Maps and near me searches.',
};

export default function LocalSeoServicePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <LocalSeoHeroBanner />
        <LocalSeoQuickAnswer />
        <LocalSeoWhatWeDo />
        <LocalSeoWhyChoose />
        <LocalSeoKeyFacts />
        <LocalSeoProcess />
        <LocalSeoWhoThisIsFor />
        <LocalSeoExpectations />
        <LocalSeoFaq />
        <LocalSeoCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
`;

fs.writeFileSync(path.join(localSeoPageDir, 'page.tsx'), localSeoPage.trim());
console.log('Created app/services/local-seo/page.tsx');
