const fs = require('fs');
const path = require('path');

const smoDir = path.join(__dirname, 'components', 'smo');
const smoPageDir = path.join(__dirname, 'app', 'services', 'smo');

if (!fs.existsSync(smoDir)) {
  fs.mkdirSync(smoDir, { recursive: true });
}
if (!fs.existsSync(smoPageDir)) {
  fs.mkdirSync(smoPageDir, { recursive: true });
}

const components = {
  SmoHeroBanner: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ChevronRight, Home, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function SmoHeroBanner() {
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
            Social Media Optimization Company in Tamil Nadu
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
            <span className="text-white">SMO</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
`,

  SmoQuickAnswer: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target, Zap } from 'lucide-react';

export function SmoQuickAnswer() {
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
                Inymart Labs is a <strong className="text-[#0c1f28]">social media optimization company in Tamil Nadu</strong> and social media optimization company in Trichy that builds and manages organic social media presence on Facebook, Instagram, and LinkedIn — covering content planning, content creation, posting, and community management. Businesses working with Inymart Labs typically see better engagement within the first month, with stronger brand presence building over 3 months onward.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
`,

  SmoWhatWeDo: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Settings, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function SmoWhatWeDo() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
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
                Inymart Labs is a trusted <strong className="text-[#0c1f28]">social media optimization company in Tamil Nadu</strong>, helping businesses build a strong, active presence on Facebook, Instagram, LinkedIn, and other platforms. As a social media optimization company in Tamil Nadu, we don't just post content — we build a plan that turns followers into real enquiries and customers.
              </p>
              <p>
                We work with small businesses, growing brands, and companies across India, UAE, UK, and the USA. Whether you're a local shop in Trichy or a brand reaching customers across the country, our team as your social media optimization company in Tamil Nadu and social media optimization company in Trichy builds strategy around where your customers actually spend their time online.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              Talk to Our Social Media Team <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  SmoWhyChoose: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target } from 'lucide-react';

export function SmoWhyChoose() {
  return (
    <section className="relative pt-8 pb-12 bg-slate-50">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-emerald-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Why Choose a Social Media Optimization Company in Tamil Nadu
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Social media today is often the first place a customer checks before they trust a business. If your profiles are outdated, inconsistent, or inactive, you're losing trust before a customer even visits your website.
              </p>
              <p>
                Good social media isn't just about pretty posts. It's about consistency, clear messaging, and content that actually gets people to comment, share, and enquire. As an experienced social media optimization company in Tamil Nadu, Inymart Labs plans content around what your audience actually wants to see — not just what looks nice.
              </p>
              <p>
                A good social media optimization company in Tamil Nadu also understands local audiences. As a dedicated social media optimization company in Trichy, we know festivals, local events, language, and culture all shape how people respond to content here. We factor all of this into every content plan we build.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  SmoKeyFacts: `
'use client';

import { Reveal } from '@/components/Reveal';
import { BookOpen } from 'lucide-react';

export function SmoKeyFacts() {
  const facts = [
    { label: "Service", value: "Social Media Optimization Company in Tamil Nadu and Social Media Optimization Company in Trichy" },
    { label: "Headquarters", value: "Tiruchirappalli, Tamil Nadu" },
    { label: "Platforms Managed", value: "Facebook, Instagram, LinkedIn, and other platforms" },
    { label: "Core Process", value: "Profile audit, audience research, content planning, content creation, posting and scheduling, community management, monthly reporting" },
    { label: "Typical Posting Frequency", value: "3–5 posts per week across key platforms" },
    { label: "Typical Timeline", value: "Better engagement within the first month; stronger brand presence by month 3 onward" }
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
                Key Facts About Inymart Labs' Social Media Optimization Service
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

  SmoProcess: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function SmoProcess() {
  const steps = [
    { title: "1. Profile Audit", desc: "We review your existing social media pages to see what's working, what's missing, and what needs fixing first." },
    { title: "2. Audience Research", desc: "We study who your customers are, what they care about, and which platforms they actually use." },
    { title: "3. Content Planning", desc: "We build a monthly content calendar with a clear mix of posts, reels, and stories — no random, one-off posting." },
    { title: "4. Content Creation", desc: "We design graphics, write captions, and create short videos that match your brand's voice and style." },
    { title: "5. Posting & Scheduling", desc: "We manage regular posting so your pages stay active and consistent, without you needing to log in every day." },
    { title: "6. Community Management", desc: "We reply to comments and messages professionally, so customers feel heard and engaged." },
    { title: "7. Reporting", desc: "Every month, you get a simple report showing followers, engagement, and enquiries — no confusing jargon." }
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
                Our Social Media Optimization Process
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
              See Our Social Media Process in Action <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  SmoWhoThisIsFor: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Users, CheckCircle2 } from 'lucide-react';

export function SmoWhoThisIsFor() {
  const points = [
    "Local businesses wanting more brand awareness and enquiries",
    "Growing brands wanting a consistent, professional online presence",
    "Ecommerce businesses wanting to showcase products regularly",
    "Any business with inactive or inconsistent social pages"
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
              As a social media optimization company in Tamil Nadu, our service works well for:
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
              Whether you're starting from scratch or already have pages that need a real strategy, our team takes time to understand your business before creating a single post.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  SmoExpectations: `
'use client';

import { Reveal } from '@/components/Reveal';
import { BarChart3, TrendingUp } from 'lucide-react';

export function SmoExpectations() {
  const results = [
    "A more active, consistent, and professional-looking social media presence",
    "Steady growth in followers, likes, comments, and shares",
    "More direct messages and enquiries coming through your social pages",
    "Stronger brand recognition and trust among your local audience",
    "Clear monthly reports showing exactly how your engagement and reach are improving"
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
              Once your social media optimization company in Tamil Nadu strategy is in motion, here's what businesses typically see over time:
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
              Results build gradually — many businesses notice better engagement within the first month, with stronger brand presence building over 3 months onward.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  SmoFaq: `
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
    q: 'What does a social media optimization company in Tamil Nadu do?',
    a: 'A social media optimization company in Tamil Nadu like Inymart Labs plans, creates, and manages organic content on platforms like Facebook, Instagram, and LinkedIn to build brand presence and generate real enquiries.'
  },
  {
    q: 'How often will you post on my social media pages?',
    a: 'This depends on your plan, but most businesses see good results with 3–5 posts per week across key platforms.'
  },
  {
    q: 'Do you handle both content creation and posting?',
    a: 'Yes. Inymart Labs designs the content, writes the captions, and manages posting and scheduling — you don\\'t have to do anything.'
  },
  {
    q: 'What makes Inymart Labs the right social media optimization company in Tamil Nadu and social media optimization company in Trichy?',
    a: 'Inymart Labs combines local audience understanding with a clear content strategy, focusing on real engagement instead of just follower counts.'
  },
  {
    q: 'Can you manage my Instagram, Facebook, and LinkedIn together?',
    a: 'Yes. Inymart Labs can manage one platform or all of them together, depending on where your customers are most active.'
  },
  {
    q: 'Will I get to approve content before it\\'s posted?',
    a: 'Yes. Inymart Labs shares your content calendar in advance so you can review and approve everything before it goes live.'
  }
];

export function SmoFaq() {
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

  SmoCta: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function SmoCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-slate-50 pt-8 pb-12 text-foreground"
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
              Social Media Optimization
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0c1f28] sm:text-4xl lg:text-[44px]">
              Ready to Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff8c5f]">Your Social Presence?</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-sans mx-auto mt-5 max-w-[60rem] text-base leading-relaxed text-slate-500 text-pretty sm:text-lg">
              If you're looking for a social media optimization company in Tamil Nadu or a trusted social media optimization company in Trichy that treats your brand's voice seriously, Inymart Labs is ready to help. We'll build a content plan around your business, your customers, and the platforms that matter most.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b35] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#ff6b35]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff6b35]/90 hover:shadow-[#ff6b35]/50 w-full sm:w-auto"
              >
                Start Your Social Media Journey
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
  fs.writeFileSync(path.join(smoDir, name + '.tsx'), content.trim());
  console.log('Created ' + name + '.tsx');
}

const smoPage = `
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SmoHeroBanner } from '@/components/smo/SmoHeroBanner';
import { SmoQuickAnswer } from '@/components/smo/SmoQuickAnswer';
import { SmoWhatWeDo } from '@/components/smo/SmoWhatWeDo';
import { SmoWhyChoose } from '@/components/smo/SmoWhyChoose';
import { SmoKeyFacts } from '@/components/smo/SmoKeyFacts';
import { SmoProcess } from '@/components/smo/SmoProcess';
import { SmoWhoThisIsFor } from '@/components/smo/SmoWhoThisIsFor';
import { SmoExpectations } from '@/components/smo/SmoExpectations';
import { SmoFaq } from '@/components/smo/SmoFaq';
import { SmoCta } from '@/components/smo/SmoCta';

export const metadata = {
  title: 'Social Media Optimization Company in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a social media optimization company in Tamil Nadu and social media optimization company in Trichy that builds and manages organic social media presence.',
};

export default function SmoServicePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <SmoHeroBanner />
        <SmoQuickAnswer />
        <SmoWhatWeDo />
        <SmoWhyChoose />
        <SmoKeyFacts />
        <SmoProcess />
        <SmoWhoThisIsFor />
        <SmoExpectations />
        <SmoFaq />
        <SmoCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
`;

fs.writeFileSync(path.join(smoPageDir, 'page.tsx'), smoPage.trim());
console.log('Created app/services/smo/page.tsx');
