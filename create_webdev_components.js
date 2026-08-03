const fs = require('fs');
const path = require('path');

const webDevDir = path.join(__dirname, 'components', 'web-development');
const webDevPageDir = path.join(__dirname, 'app', 'services', 'web-development');

if (!fs.existsSync(webDevDir)) {
  fs.mkdirSync(webDevDir, { recursive: true });
}
if (!fs.existsSync(webDevPageDir)) {
  fs.mkdirSync(webDevPageDir, { recursive: true });
}

const components = {
  WebDevHeroBanner: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ChevronRight, Home, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function WebDevHeroBanner() {
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
            Web Development Service in Tamil Nadu
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
            <span className="text-white">Web Development</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
`,

  WebDevQuickAnswer: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target, Zap } from 'lucide-react';

export function WebDevQuickAnswer() {
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
                Inymart Labs is a <strong className="text-[#0c1f28]">Web Development Service in Trichy, Tamil Nadu</strong> that builds fast mobile-friendly, SEO-ready websites — including business websites, ecommerce stores, landing pages, redesigns, and web applications. Most business websites take 3–8 weeks to build, and results like faster load times and better mobile performance are visible immediately after launch, with SEO and conversion benefits building over the following months.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
`,

  WebDevWhatIs: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Search } from 'lucide-react';

export function WebDevWhatIs() {
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
                What Is a Web Development Service?
              </h2>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-gray-600 leading-relaxed">
                A Web Development Service covers the planning, design, coding, and launch of a website — built to be fast, mobile-friendly, and structured in a way that both visitors and search engines can navigate easily. It typically includes discovery, design, development, mobile optimization, SEO-ready setup, testing, and ongoing support after launch.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  WebDevWhatWeDo: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function WebDevWhatWeDo() {
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
                Inymart Labs offers a complete <strong className="text-[#0c1f28]">Web Development Service in Tamil Nadu</strong>, helping businesses build fast, professional, and easy-to-use websites that turn visitors into customers. As a <strong className="text-[#0c1f28]">Web Development Service in Trichy</strong>, we don't just design good-looking pages — we build websites that are ready for SEO, mobile users, and long-term growth from day one.
              </p>
              <p>
                We work with small businesses, growing brands, and companies across India, UAE, UK, and the USA. Whether you need a brand-new website, a rebuild of an old one, or an online store, our team as your Web Development Service in Tamil Nadu builds it around your business goals and your customers' needs.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              Talk to Our Web Development Team <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  WebDevWhyChoose: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target } from 'lucide-react';

export function WebDevWhyChoose() {
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
                Why Choose a Web Development Service in Tamil Nadu
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                A website is often the first real impression a customer has of your business. If it loads slowly, looks outdated, or is hard to use on a phone, customers leave before they even understand what you offer.
              </p>
              <p>
                A good Web Development Service in Tamil Nadu builds websites with both design and performance in mind. As an experienced Web Development Service in Trichy, Inymart Labs makes sure your website looks professional, loads quickly, and is built in a way that search engines can understand and rank well.
              </p>
              <p>
                We also build with the future in mind. Your website should be easy to update, simple to expand, and strong enough to support your marketing — whether that's SEO, ads, or social media traffic.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  WebDevComparison: `
'use client';

import { Reveal } from '@/components/Reveal';
import { GitCompare } from 'lucide-react';

export function WebDevComparison() {
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
                Professional Web Development vs. DIY Website Builders
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              Many businesses start with a DIY website builder before realizing its limits. Here's how the two compare:
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-1/4">Factor</th>
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-3/8 border-l border-slate-200">DIY Website Builder</th>
                    <th className="py-5 px-6 font-bold text-primary text-lg w-3/8 border-l border-slate-200">Inymart Labs' Web Development Service</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Performance</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Often slow, generic templates</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Built for speed and your specific business</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">SEO Readiness</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Limited control over structure and code</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Clean code and structure built for SEO from day one</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Scalability</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Difficult to expand or customize</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Built to grow with your business</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Support</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Self-managed, limited help</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Ongoing maintenance and expert support</td>
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

  WebDevKeyFacts: `
'use client';

import { Reveal } from '@/components/Reveal';
import { BookOpen } from 'lucide-react';

export function WebDevKeyFacts() {
  const facts = [
    { label: "Service", value: "Web Development Service in Tamil Nadu and Web Development Service in Trichy" },
    { label: "Headquarters", value: "Tiruchirappalli, Tamil Nadu" },
    { label: "Website Types", value: "Business websites, ecommerce stores, landing pages, redesigns, web applications" },
    { label: "Core Process", value: "Discovery, website structure, design, development, mobile optimization, SEO-ready setup, testing and launch, ongoing support" },
    { label: "Typical Timeline", value: "3–8 weeks for most business websites; ecommerce sites may take longer" },
    { label: "Support", value: "Ongoing maintenance and updates after launch" }
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
                Key Facts About Inymart Labs' Web Development Service
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

  WebDevProcess: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function WebDevProcess() {
  const steps = [
    { title: "1. Discovery & Planning", desc: "We understand your business, your customers, and your goals before writing a single line of code." },
    { title: "2. Website Structure", desc: "We map out clear, logical pages and navigation so visitors and search engines can easily find what they need." },
    { title: "3. Design", desc: "We design clean, modern layouts that reflect your brand and build trust with visitors from the first click." },
    { title: "4. Development", desc: "We build your website using reliable, modern technology that's fast, secure, and easy to maintain." },
    { title: "5. Mobile Optimization", desc: "We make sure your website works perfectly on phones and tablets, since most visitors browse on mobile today." },
    { title: "6. SEO-Ready Setup", desc: "We build your site with clean code, proper structure, and fast loading speed — the foundation every good SEO strategy needs." },
    { title: "7. Testing & Launch", desc: "We test every page, button, and form carefully before your website goes live, so there are no surprises." },
    { title: "8. Ongoing Support", desc: "We offer maintenance and updates after launch, so your website stays secure, fast, and up to date." }
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
                Our Web Development Process
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
              See Our Web Development Process in Action <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  WebDevServices: `
'use client';

import { Reveal } from '@/components/Reveal';
import { CheckCircle2, Monitor } from 'lucide-react';

export function WebDevServices() {
  const services = [
    "Business Websites — professional sites that build trust and generate enquiries",
    "Ecommerce Websites — online stores with smooth checkout and product management",
    "Landing Pages — focused pages built for a specific campaign or offer",
    "Website Redesigns — modernizing and speeding up an existing website",
    "Web Applications — custom tools and portals built around specific business needs"
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-rose-500/10 flex items-center justify-center shrink-0">
                <Monitor className="w-8 h-8 text-rose-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Types of Websites We Build
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 mb-8">
            {services.map((res, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl shadow-sm border border-slate-100">
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

  WebDevWhoThisIsFor: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Users, CheckCircle2 } from 'lucide-react';

export function WebDevWhoThisIsFor() {
  const points = [
    "Businesses without a website, or with one that feels outdated",
    "Businesses whose website is slow, hard to use, or not mobile-friendly",
    "Ecommerce businesses wanting a smoother, more reliable online store",
    "Any business planning to invest in SEO or ads and needing a website that can support it"
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
              As a Web Development Service in Tamil Nadu, our service works well for:
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
              Whether you're starting from scratch or need a complete rebuild, our team as your Web Development Service in Trichy takes time to understand your business before designing anything.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  WebDevExpectations: `
'use client';

import { Reveal } from '@/components/Reveal';
import { BarChart3, TrendingUp } from 'lucide-react';

export function WebDevExpectations() {
  const results = [
    "A faster, more professional website that builds trust with visitors",
    "Better performance on mobile devices, where most of your traffic comes from",
    "A stronger foundation for SEO, since search engines prefer fast, well-structured sites",
    "Fewer visitors leaving without taking action, thanks to clearer navigation and design",
    "A website that's easier for your team to update and manage going forward"
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
              Once your Web Development Service in Tamil Nadu and Web Development Service in Trichy project is complete, here's what businesses typically see over time:
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
              Results here are often visible immediately after launch — a faster, cleaner website tends to improve visitor engagement right away, with SEO and conversion benefits building further over the following months.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  WebDevTrust: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function WebDevTrust() {
  const points = [
    "10+ years of experience building websites alongside SEO and digital marketing",
    "50+ brands served across India, UAE, UK, and the USA",
    "Headquartered in Tiruchirappalli, with hands-on knowledge of Tamil Nadu markets",
    "Websites built SEO-ready from day one, not bolted on afterward",
    "Clear timelines and transparent communication throughout the project",
    "Ongoing support after launch — we don't disappear once the site goes live"
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
              Your website is often a customer's first impression of your business, so it needs to be built right. Here's why businesses trust Inymart Labs as their Web Development Service in Tamil Nadu and Web Development Service in Trichy:
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

  WebDevFaq: `
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
    q: 'What is a Web Development Service?',
    a: 'A Web Development Service covers the planning, design, coding, and launch of a website, built to be fast, mobile-friendly, and structured for both visitors and search engines.'
  },
  {
    q: 'How long does it take to build a new website?',
    a: 'Most business websites take 3–8 weeks depending on the number of pages and features, while ecommerce sites can take longer.'
  },
  {
    q: 'Can you redesign my existing website instead of building a new one?',
    a: 'Yes. Inymart Labs often starts by auditing your current website and recommends a redesign or rebuild only where it\\'s truly needed.'
  },
  {
    q: 'Will my website work well on mobile phones?',
    a: 'Yes. Every website Inymart Labs builds is fully optimized for mobile devices, since most visitors browse on phones today.'
  },
  {
    q: 'What makes Inymart Labs the right Web Development Service in Tamil Nadu and Web Development Service in Trichy?',
    a: 'Inymart Labs builds websites with both design and SEO performance in mind, so your site looks good and is genuinely built to grow your business.'
  },
  {
    q: 'Do you provide support after the website is launched?',
    a: 'Yes. Inymart Labs offers ongoing maintenance and updates to keep your website secure, fast, and current.'
  }
];

export function WebDevFaq() {
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

  WebDevCta: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function WebDevCta() {
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
              Web Development
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0c1f28] sm:text-4xl lg:text-[44px]">
              Ready to Build a Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff8c5f]">That Works for You?</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-sans mx-auto mt-5 max-w-[60rem] text-base leading-relaxed text-slate-500 text-pretty sm:text-lg">
              If you're looking for a Web Development Service in Tamil Nadu or a trusted Web Development Service in Trichy that builds websites for real business results, Inymart Labs is ready to help. We'll design and build a website around your business, your customers, and your growth plans.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b35] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#ff6b35]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff6b35]/90 hover:shadow-[#ff6b35]/50 w-full sm:w-auto"
              >
                Start Your Web Development Project
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
  fs.writeFileSync(path.join(webDevDir, name + '.tsx'), content.trim());
  console.log('Created ' + name + '.tsx');
}

const webDevPage = `
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { WebDevHeroBanner } from '@/components/web-development/WebDevHeroBanner';
import { WebDevQuickAnswer } from '@/components/web-development/WebDevQuickAnswer';
import { WebDevWhatIs } from '@/components/web-development/WebDevWhatIs';
import { WebDevWhatWeDo } from '@/components/web-development/WebDevWhatWeDo';
import { WebDevWhyChoose } from '@/components/web-development/WebDevWhyChoose';
import { WebDevComparison } from '@/components/web-development/WebDevComparison';
import { WebDevKeyFacts } from '@/components/web-development/WebDevKeyFacts';
import { WebDevProcess } from '@/components/web-development/WebDevProcess';
import { WebDevServices } from '@/components/web-development/WebDevServices';
import { WebDevWhoThisIsFor } from '@/components/web-development/WebDevWhoThisIsFor';
import { WebDevExpectations } from '@/components/web-development/WebDevExpectations';
import { WebDevTrust } from '@/components/web-development/WebDevTrust';
import { WebDevFaq } from '@/components/web-development/WebDevFaq';
import { WebDevCta } from '@/components/web-development/WebDevCta';

export const metadata = {
  title: 'Web Development Service in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a Web Development Service in Trichy, Tamil Nadu that builds fast mobile-friendly, SEO-ready websites.',
};

export default function WebDevelopmentServicePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <WebDevHeroBanner />
        <WebDevQuickAnswer />
        <WebDevWhatIs />
        <WebDevWhatWeDo />
        <WebDevWhyChoose />
        <WebDevComparison />
        <WebDevKeyFacts />
        <WebDevProcess />
        <WebDevServices />
        <WebDevWhoThisIsFor />
        <WebDevExpectations />
        <WebDevTrust />
        <WebDevFaq />
        <WebDevCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
`;

fs.writeFileSync(path.join(webDevPageDir, 'page.tsx'), webDevPage.trim());
console.log('Created app/services/web-development/page.tsx');
