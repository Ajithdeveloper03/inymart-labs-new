const fs = require('fs');
const path = require('path');

const smmDir = 'c:\\Users\\user\\Desktop\\inymart\\iny lab\\components\\smm';

// 10. SmmFaq.tsx
const smmFaq = `
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
    q: 'What does a social media marketing agency in Tamil Nadu do?',
    a: 'A social media marketing agency in Tamil Nadu like Inymart Labs plans, sets up, and manages paid ad campaigns on platforms like Facebook, Instagram, and LinkedIn to generate calls, leads, and sales.'
  },
  {
    q: 'Is social media marketing the same as social media optimization?',
    a: 'No. Social media marketing refers to paid ad campaigns, while social media optimization refers to organic, unpaid content and posting.'
  },
  {
    q: 'How much should I budget for social media ads?',
    a: 'This depends on your goals and industry, but Inymart Labs will recommend a starting budget and adjust it based on early results.'
  },
  {
    q: 'How soon will I see results from social media ads?',
    a: 'Unlike SEO, ads can start driving traffic and enquiries within days of launching a campaign.'
  },
  {
    q: 'What makes Inymart Labs the right social media marketing agency in Tamil Nadu and social media marketing agency in Trichy?',
    a: 'Inymart Labs focuses on clear goals and constant optimization, so your ad spend goes toward real results, not just impressions.'
  },
  {
    q: 'Can you run ads for both local and online businesses?',
    a: 'Yes. Inymart Labs runs location-based campaigns for local businesses and broader campaigns for ecommerce and online brands.'
  },
  {
    q: 'Will I know exactly where my ad budget is going?',
    a: "Yes. You'll get clear monthly reports showing spend, reach, clicks, and leads, explained in simple language."
  }
];

export function SmmFaq() {
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
`;
fs.writeFileSync(path.join(smmDir, 'SmmFaq.tsx'), smmFaq.trim());

// 11. SmmTrust.tsx
const smmTrust = `
'use client';

import { Reveal } from '@/components/Reveal';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function SmmTrust() {
  const points = [
    "10+ years of experience running digital marketing campaigns",
    "50+ brands served across India, UAE, UK, and the USA",
    "Headquartered in Tiruchirappalli, with hands-on knowledge of Tamil Nadu markets",
    "Transparent monthly reporting — you see exactly where your ad spend goes, with no hidden numbers",
    "Campaigns built around clear business goals, not vanity metrics like impressions alone",
    "Real humans managing your account — no bots, no generic templates"
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
              When you're handing over ad budget to an agency, trust matters. Here's why businesses choose Inymart Labs as their social media marketing agency in Tamil Nadu and social media marketing agency in Trichy:
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
`;
fs.writeFileSync(path.join(smmDir, 'SmmTrust.tsx'), smmTrust.trim());

// 12. SmmCta.tsx
const smmCta = `
'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function SmmCta() {
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
              Social Media Marketing
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0c1f28] sm:text-4xl lg:text-[44px]">
              Ready to Run Ads That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff8c5f]">Actually Work?</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-sans mx-auto mt-5 max-w-[60rem] text-base leading-relaxed text-slate-500 text-pretty sm:text-lg">
              If you're looking for a social media marketing agency in Tamil Nadu or a trusted social media marketing agency in Trichy that treats your ad budget seriously, Inymart Labs is ready to help. We'll build campaigns around your business goals, your customers, and the platforms that matter most.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b35] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#ff6b35]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff6b35]/90 hover:shadow-[#ff6b35]/50 w-full sm:w-auto"
              >
                Start Your Ad Campaign
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
`;
fs.writeFileSync(path.join(smmDir, 'SmmCta.tsx'), smmCta.trim());

// 13. page.tsx
const pageDir = 'c:\\Users\\user\\Desktop\\inymart\\iny lab\\app\\services\\smm';
if (!fs.existsSync(pageDir)) {
  fs.mkdirSync(pageDir, { recursive: true });
}

const smmPage = `
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SmmHeroBanner } from '@/components/smm/SmmHeroBanner';
import { SmmQuickAnswer } from '@/components/smm/SmmQuickAnswer';
import { SmmWhatWeDo } from '@/components/smm/SmmWhatWeDo';
import { SmmWhyChoose } from '@/components/smm/SmmWhyChoose';
import { SmmComparison } from '@/components/smm/SmmComparison';
import { SmmKeyFacts } from '@/components/smm/SmmKeyFacts';
import { SmmProcess } from '@/components/smm/SmmProcess';
import { SmmWhoThisIsFor } from '@/components/smm/SmmWhoThisIsFor';
import { SmmExpectations } from '@/components/smm/SmmExpectations';
import { SmmFaq } from '@/components/smm/SmmFaq';
import { SmmTrust } from '@/components/smm/SmmTrust';
import { SmmCta } from '@/components/smm/SmmCta';

export const metadata = {
  title: 'Social Media Marketing Agency in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a social media marketing agency in Trichy, Tamil Nadu that plans, creates, and manages paid ad campaigns on Facebook, Instagram, and LinkedIn.',
};

export default function SmmServicePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <SmmHeroBanner />
        <SmmQuickAnswer />
        <SmmWhatWeDo />
        <SmmWhyChoose />
        <SmmComparison />
        <SmmKeyFacts />
        <SmmProcess />
        <SmmWhoThisIsFor />
        <SmmExpectations />
        <SmmFaq />
        <SmmTrust />
        <SmmCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
`;
fs.writeFileSync(path.join(pageDir, 'page.tsx'), smmPage.trim());

console.log("Created Faq, Trust, Cta, and SMM Page!");
