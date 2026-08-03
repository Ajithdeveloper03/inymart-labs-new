const fs = require('fs');
const path = require('path');

const seoDir = path.join(__dirname, 'components', 'seo');
const aiSeoDir = path.join(__dirname, 'components', 'ai-seo');
const aiSeoPageDir = path.join(__dirname, 'app', 'services', 'ai-seo-services');

if (!fs.existsSync(aiSeoDir)) {
  fs.mkdirSync(aiSeoDir, { recursive: true });
}
if (!fs.existsSync(aiSeoPageDir)) {
  fs.mkdirSync(aiSeoPageDir, { recursive: true });
}

// Helper to replace text based on a dictionary
function replaceAll(str, mapObj) {
  let re = new RegExp(Object.keys(mapObj).join('|'), 'gi');
  return str.replace(re, function (matched) {
    return mapObj[matched.toLowerCase()] || mapObj[matched] || matched;
  });
}

// Actually, generating the components via string templates is safer than regex replacing the SEO ones since we know the exact content.

const components = {
  AiSeoHeroBanner: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ChevronRight, Home, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function AiSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-8 pb-12">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner 1.png')" }}
      />
      {/* A dark gradient overlay to ensure text readability and a premium corporate look */}
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
            AI SEO Service in Tamil Nadu
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
            <span className="text-white">AI SEO Service</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
`,

  AiSeoQuickAnswer: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target, Zap } from 'lucide-react';

export function AiSeoQuickAnswer() {
  return (
    <section id="quick-answer" className="relative pt-12 pb-8 bg-slate-50 scroll-mt-16">
      <div className="container-x">
        <Reveal>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1f28]">Quick Answer</h2>
              </div>
              
              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
                Inymart Labs offers an <strong className="text-[#0c1f28]">AI SEO Service in Trichy, Tamil Nadu</strong> also called an <strong className="text-[#0c1f28]">AEO Service (Answer Engine Optimization)</strong>, that helps businesses get found and recommended by AI tools like ChatGPT, Gemini, Copilot, and Perplexity — not just traditional Google search. This includes structuring content for direct answers, building citable facts and entity clarity, and monitoring how AI engines represent a business, with visibility improvements typically building over 2–4 months as AI platforms recrawl and re-index content.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
`,

  AiSeoWhatIs: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Search } from 'lucide-react';

export function AiSeoWhatIs() {
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
                What Is AEO / AI SEO?
              </h2>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-gray-600 leading-relaxed">
                AEO (Answer Engine Optimization), also called AI SEO, is the practice of structuring website content so AI-powered search tools and answer engines — such as ChatGPT, Gemini, Copilot, and Perplexity — can understand it, trust it, and use it to answer user questions or recommend a business. It differs from traditional SEO, which focuses primarily on ranking in Google's search results, by focusing on direct-answer clarity, structured facts, and content that generative engines can accurately cite.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  AiSeoWhatWeDo: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Settings, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function AiSeoWhatWeDo() {
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
                Inymart Labs offers a dedicated <strong className="text-[#0c1f28]">AI SEO Service in Tamil Nadu</strong>, helping businesses become visible and accurately represented across AI search tools, not just Google. As an <strong className="text-[#0c1f28]">AEO Service and AI SEO Service in Trichy</strong>, we restructure website content so AI engines can extract clear, correct answers about your business.
              </p>
              <p>
                We work with small businesses, growing brands, and companies across India, UAE, UK, and the USA. Whether your business is invisible to AI tools today or already appears but with outdated or incorrect information, our team as your AI SEO Service in Tamil Nadu builds a plan to fix and strengthen that visibility.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              Talk to Our AI SEO Team <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  AiSeoWhyChoose: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Target } from 'lucide-react';

export function AiSeoWhyChoose() {
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
                Why Choose an AI SEO Service in Tamil Nadu
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                More customers are now asking ChatGPT, Gemini, Copilot, and Perplexity for recommendations instead of typing into Google alone. If your business isn't structured to be understood by these tools, you may be invisible in this growing channel — or worse, described inaccurately.
              </p>
              <p>
                A proper AEO Service goes beyond keywords. It restructures content with direct answers, clear entity facts, and citable statements that AI engines can lift accurately. As an experienced AI SEO Service in Trichy, Inymart Labs builds this alongside your existing SEO, not as a replacement for it.
              </p>
              <p>
                We also monitor how AI tools currently describe your business, so we can identify and correct outdated, missing, or incorrect information before building new content.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  AiSeoComparison: `
'use client';

import { Reveal } from '@/components/Reveal';
import { GitCompare } from 'lucide-react';

export function AiSeoComparison() {
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
                AI SEO (AEO) vs. Traditional SEO
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              Businesses often ask how AI SEO differs from the SEO they already know. Here's the comparison:
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-1/4">Factor</th>
                    <th className="py-5 px-6 font-bold text-slate-900 text-lg w-3/8 border-l border-slate-200">Traditional SEO</th>
                    <th className="py-5 px-6 font-bold text-primary text-lg w-3/8 border-l border-slate-200">AI SEO / AEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Primary Target</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Google search rankings</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">AI tools like ChatGPT, Gemini, Perplexity</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Content Style</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Keyword-optimized pages</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Direct-answer, citable, structured content</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Success Measure</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Rankings and organic traffic</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Accurate AI mentions and recommendations</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">Relationship to SEO</td>
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-100">N/A</td>
                    <td className="py-4 px-6 text-slate-800 font-medium border-l border-slate-100">Works alongside SEO, not instead of it</td>
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

  AiSeoKeyFacts: `
'use client';

import { Reveal } from '@/components/Reveal';
import { BookOpen } from 'lucide-react';

export function AiSeoKeyFacts() {
  const facts = [
    { label: "Service", value: "AI SEO Service in Tamil Nadu, AI SEO Service in Trichy, and AEO Service" },
    { label: "Headquarters", value: "Tiruchirappalli, Tamil Nadu" },
    { label: "AI Platforms Covered", value: "ChatGPT, Gemini, Copilot, Perplexity, and Grok" },
    { label: "Core Process", value: "AI visibility audit, content restructuring, entity and fact-building, citation-ready content, ongoing AI monitoring" },
    { label: "Typical Timeline", value: "Visibility improvements typically build over 2–4 months as AI platforms recrawl and re-index content" },
    { label: "Reporting", value: "Monthly updates on how your business appears across AI search tools" }
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
                Key Facts About Inymart Labs' AI SEO Service
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

  AiSeoProcess: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function AiSeoProcess() {
  const steps = [
    { title: "1. AI Visibility Audit", desc: "We check how ChatGPT, Gemini, Perplexity, and other AI tools currently describe or represent your business — if at all." },
    { title: "2. Entity & Fact Building", desc: "We create clear, consistent facts about your business — services, location, experience — that AI engines can confidently cite." },
    { title: "3. Direct-Answer Content", desc: "We restructure key pages with concise, direct answers to common customer questions, formatted for easy extraction." },
    { title: "4. Structured Content", desc: "We add comparison points, key-fact summaries, and clear headings that AI engines can parse and quote accurately." },
    { title: "5. Citation-Ready FAQs", desc: "We build FAQ sections that directly answer the exact questions customers ask AI tools." },
    { title: "6. Ongoing AI Monitoring", desc: "We regularly check how your business is being represented across AI platforms and correct issues as they appear." },
    { title: "7. Reporting", desc: "Every month, you get a simple update on your AI visibility progress — no confusing jargon." }
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
                Our AI SEO (AEO) Process
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
              See Our AI SEO Process in Action <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  AiSeoWhoThisIsFor: `
'use client';

import { Reveal } from '@/components/Reveal';
import { Users, CheckCircle2 } from 'lucide-react';

export function AiSeoWhoThisIsFor() {
  const points = [
    "Businesses that don't appear when customers ask AI tools for recommendations",
    "Businesses that appear in AI answers but with outdated or incorrect information",
    "Brands wanting to stay ahead as AI search grows alongside traditional Google search",
    "Any business already investing in SEO and wanting to extend that visibility to AI platforms"
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
              As an AI SEO Service in Tamil Nadu, our service works well for:
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
              Whether AI tools have never heard of your business or already describe it inaccurately, our team as your AEO Service starts with an audit before building anything new.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  AiSeoExpectations: `
'use client';

import { Reveal } from '@/components/Reveal';
import { BarChart3, TrendingUp } from 'lucide-react';

export function AiSeoExpectations() {
  const results = [
    "More accurate and complete mentions of your business across AI tools like ChatGPT and Perplexity",
    "Better chances of being recommended when customers ask AI tools for suggestions",
    "Content that also strengthens traditional SEO, since AI-ready content tends to be clearer and more structured",
    "Fewer instances of outdated or incorrect information about your business appearing in AI answers",
    "Monthly visibility on how your AI presence is changing over time"
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
              Once your AI SEO Service in Tamil Nadu and AI SEO Service in Trichy strategy is in motion, here's what businesses typically see over time:
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
              AI SEO results build more gradually than paid ads, since they depend on AI platforms recrawling and re-indexing content — most businesses see meaningful shifts in AI visibility over 2–4 months.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  AiSeoTrust: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function AiSeoTrust() {
  const points = [
    "10+ years of digital marketing experience, with early, dedicated focus on AEO and GEO",
    "50+ brands served across India, UAE, UK, and the USA",
    "Headquartered in Tiruchirappalli, with hands-on knowledge of Tamil Nadu markets",
    "AI SEO built alongside proven traditional SEO, not sold as a replacement for it",
    "Honest reporting — we show you exactly how AI tools represent your business, good or bad",
    "Real specialists monitoring AI platforms — not a one-time content update with no follow-up"
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
              AI SEO is a new, fast-changing field, so experience and honesty matter. Here's why businesses trust Inymart Labs as their AI SEO Service in Tamil Nadu and AI SEO Service in Trichy:
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

  AiSeoFaq: `
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
    q: 'What is AEO or AI SEO?',
    a: 'AEO (Answer Engine Optimization), also called AI SEO, is the practice of structuring content so AI tools like ChatGPT and Perplexity can understand, trust, and cite it when answering user questions.'
  },
  {
    q: 'Is AI SEO different from regular SEO?',
    a: 'Yes. Traditional SEO targets Google search rankings, while AI SEO (AEO) focuses on how AI tools represent and recommend your business — though the two work well together.'
  },
  {
    q: 'How long does it take to see results from AI SEO?',
    a: 'Most businesses see meaningful visibility changes over 2–4 months, since AI platforms need time to recrawl and re-index content.'
  },
  {
    q: 'What makes Inymart Labs the right AI SEO Service in Tamil Nadu and AI SEO Service in Trichy?',
    a: 'Inymart Labs combines early AEO and GEO experience with proven SEO practices, and reports honestly on how your business currently appears across AI tools.'
  },
  {
    q: 'Do I still need traditional SEO if I invest in AI SEO?',
    a: 'Yes. AI SEO works alongside traditional SEO, not instead of it — strong SEO content is often the foundation AI tools pull from.'
  },
  {
    q: 'Can you fix incorrect information AI tools currently show about my business?',
    a: 'Inymart Labs audits existing AI mentions and works to correct and strengthen them through updated, citation-ready content.'
  }
];

export function AiSeoFaq() {
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

  AiSeoCta: `
'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function AiSeoCta() {
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
              AEO Service
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0c1f28] sm:text-4xl lg:text-[44px]">
              Ready to Be Found by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff8c5f]">AI Search Tools?</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-sans mx-auto mt-5 max-w-[60rem] text-base leading-relaxed text-slate-500 text-pretty sm:text-lg">
              If you're looking for an AI SEO Service in Tamil Nadu or a trusted AI SEO Service in Trichy that also delivers a real AEO Service, Inymart Labs is ready to help. We'll build a plan to make sure ChatGPT, Gemini, and Perplexity represent your business accurately and favorably.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b35] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#ff6b35]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff6b35]/90 hover:shadow-[#ff6b35]/50 w-full sm:w-auto"
              >
                Start Your AI SEO Journey
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
  fs.writeFileSync(path.join(aiSeoDir, name + '.tsx'), content.trim());
  console.log('Created ' + name + '.tsx');
}

const aiSeoPage = `
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { AiSeoHeroBanner } from '@/components/ai-seo/AiSeoHeroBanner';
import { AiSeoQuickAnswer } from '@/components/ai-seo/AiSeoQuickAnswer';
import { AiSeoWhatIs } from '@/components/ai-seo/AiSeoWhatIs';
import { AiSeoWhatWeDo } from '@/components/ai-seo/AiSeoWhatWeDo';
import { AiSeoWhyChoose } from '@/components/ai-seo/AiSeoWhyChoose';
import { AiSeoComparison } from '@/components/ai-seo/AiSeoComparison';
import { AiSeoKeyFacts } from '@/components/ai-seo/AiSeoKeyFacts';
import { AiSeoProcess } from '@/components/ai-seo/AiSeoProcess';
import { AiSeoWhoThisIsFor } from '@/components/ai-seo/AiSeoWhoThisIsFor';
import { AiSeoExpectations } from '@/components/ai-seo/AiSeoExpectations';
import { AiSeoTrust } from '@/components/ai-seo/AiSeoTrust';
import { AiSeoFaq } from '@/components/ai-seo/AiSeoFaq';
import { AiSeoCta } from '@/components/ai-seo/AiSeoCta';

export const metadata = {
  title: 'AI SEO Service in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs offers an AI SEO Service in Trichy, Tamil Nadu also called an AEO Service (Answer Engine Optimization), that helps businesses get found and recommended by AI tools.',
};

export default function AiSeoServicePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <AiSeoHeroBanner />
        <AiSeoQuickAnswer />
        <AiSeoWhatIs />
        <AiSeoWhatWeDo />
        <AiSeoWhyChoose />
        <AiSeoComparison />
        <AiSeoKeyFacts />
        <AiSeoProcess />
        <AiSeoWhoThisIsFor />
        <AiSeoExpectations />
        <AiSeoTrust />
        <AiSeoFaq />
        <AiSeoCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
}`;

fs.writeFileSync(path.join(aiSeoPageDir, 'page.tsx'), aiSeoPage.trim());
console.log('Created app/services/ai-seo-services/page.tsx');
