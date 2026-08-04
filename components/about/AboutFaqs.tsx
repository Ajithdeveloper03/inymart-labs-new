'use client';

import { Reveal } from '@/components/Reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Plus, Minus, Circle, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    q: 'What does Inymart Labs do?',
    a: 'We offer SEO, Local SEO, AEO, GEO, social media marketing, and effective marketing strategies including web development and PPC to grow visibility, leads, and conversions.',
  },
  {
    q: 'How is Inymart Labs different from other Tamil Nadu agencies?',
    a: 'We place early emphasis on AEO and GEO — helping brands appear in AI tools like ChatGPT and Perplexity, and focusing on online reputation management, not just Google.',
  },
  {
    q: 'How long has Inymart Labs been in business?',
    a: 'Founded in 2016 in Tiruchirappalli, with 9+ years of marketing expertise serving clients across India, UAE, UK, and the USA.',
  },
  {
    q: 'Which areas does Inymart Labs serve?',
    a: 'Tamil Nadu (Trichy, Chennai, Madurai, Coimbatore, Salem, Thanjavur), plus India, UAE, UK, the USA, and Australia.',
  },
];

export function AboutFaqs() {
  return (
    <section className="relative bg-secondary/30 py-12 lg:py-16 overflow-hidden">
      <div className="container-x relative">
        <div className="mx-auto flex w-full max-w-4xl flex-col">
          
          {/* Section Heading */}
          <Reveal>
            <div className="flex flex-col items-center text-center mb-10 mt-2">
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-2 text-[#ff6b35] font-bold text-sm tracking-widest uppercase mb-4">
                <div className="flex items-center">
                  <Circle className="h-3 w-3 fill-[#ff6b35] text-[#ff6b35]" />
                  <ArrowRight className="h-4 w-4 -ml-2 text-[#ff6b35]" strokeWidth={3} />
                </div>
                <span>ABOUT FAQS</span>
              </div>
              
              {/* Heading */}
              <h2 className="font-display text-4xl lg:text-[44px] font-extrabold text-[#0c1f28] leading-[1.2] mb-6">
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>

          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 50}>
                <AccordionItem
                  value={`item-${i}`}
                  className="group rounded-[14px] border border-slate-200 bg-white overflow-hidden shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:border-[#ff6b35]/40 hover:shadow-[0_8px_30px_rgba(255,107,53,0.15)] transition-all duration-300"
                >
                  <AccordionTrigger className="flex items-center justify-between p-0 hover:no-underline w-full transition-colors duration-300 data-[state=open]:bg-[#0c1f28] [&>svg]:hidden">
                    <div className="flex items-center flex-1 py-3">
                      <div className="relative flex items-center justify-center shrink-0 w-16 h-14">
                        {/* Left Edge Orange Tag */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-10 bg-[#ff6b35] rounded-r-[4px]" />
                        {/* Number Circle Badge */}
                        <div className="relative z-10 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#0c1f28] text-sm font-bold text-white transition-colors duration-300 group-hover:bg-[#ff6b35] group-data-[state=open]:bg-white group-data-[state=open]:text-[#0c1f28]">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                      </div>
                      <span className="ml-1 pr-4 font-bold text-[#0c1f28] transition-colors duration-300 group-hover:text-[#ff6b35] group-data-[state=open]:text-white text-[15px] text-left leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    {/* Right Icon Circle */}
                    <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-slate-100 transition-colors duration-300 group-hover:bg-[#ff6b35]/10 group-data-[state=open]:bg-[#ff6b35] mr-4">
                      <Plus className="h-4 w-4 text-[#ff6b35] group-data-[state=open]:hidden" strokeWidth={3} />
                      <Minus className="h-4 w-4 text-white hidden group-data-[state=open]:block" strokeWidth={3} />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white p-5 border-t border-slate-100">
                    <div className="border-l-[3px] border-slate-200 pl-4 text-[13.5px] leading-relaxed text-slate-500 font-medium">
                        {faq.a}
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
