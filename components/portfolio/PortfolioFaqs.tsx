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
    q: 'What kind of businesses has Inymart Labs worked with?',
    a: 'Inymart Labs has worked with 50+ brands across real estate, roofing and construction, IT and tech parks, interiors, restaurants, education, manufacturing, and ecommerce, as a Digital Marketing Agency in Trichy, Tamil Nadu.',
  },
  {
    q: 'Does Inymart Labs only work with businesses in Tamil Nadu?',
    a: 'No. While Inymart Labs is headquartered in Trichy, Tamil Nadu, clients also include businesses across India and international brands such as Uniform Australia.',
  },
  {
    q: "Can I see examples of Inymart Labs' client work?",
    a: "Yes. Inymart Labs' portfolio includes clients like Infinity Organic, Covai Tech Park, Kaveri Restaurant, and Hallmark Business School, spanning a wide range of industries.",
  },
  {
    q: 'What services have these clients used?',
    a: 'Depending on their goals, clients have used SEO, Local SEO, social media, web development, PPC, and web analytics services from Inymart Labs.',
  },
  {
    q: 'What makes Inymart Labs the right Digital Marketing Agency in Trichy, Tamil Nadu?',
    a: 'A varied, long-standing client portfolio across industries, combined with transparent reporting and hands-on local market knowledge.',
  },
];

export function PortfolioFaqs() {
  return (
    <section className="relative bg-secondary/30 py-8 sm:py-14 lg:py-16 overflow-hidden">
      <div className="container-x relative">
        <div className="mx-auto flex w-full max-w-4xl flex-col">
          
          {/* Section Heading */}
          <Reveal>
            <div className="flex flex-col items-center text-center mb-6 sm:mb-10 mt-0 sm:mt-2">
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-2 text-[#ff6b35] font-bold text-[12px] sm:text-sm tracking-widest uppercase mb-2 sm:mb-4">
                <div className="flex items-center">
                  <Circle className="h-3 w-3 fill-[#ff6b35] text-[#ff6b35]" />
                  <ArrowRight className="h-4 w-4 -ml-2 text-[#ff6b35]" strokeWidth={3} />
                </div>
                <span>PORTFOLIO FAQS</span>
              </div>
              
              {/* Heading */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0c1f28] leading-[1.2] mb-3 sm:mb-6">
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
                        <div className="relative z-10 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#0c1f28] text-[12px] sm:text-sm font-bold text-white transition-colors duration-300 group-hover:bg-[#ff6b35] group-data-[state=open]:bg-white group-data-[state=open]:text-[#0c1f28]">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                      </div>
                      <span className="ml-1 pr-4 font-bold text-[#0c1f28] transition-colors duration-300 group-hover:text-[#ff6b35] group-data-[state=open]:text-white text-[12px] sm:text-[15px] md:text-[16px] text-left leading-snug">
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
                    <div className="border-l-[3px] border-slate-200 pl-4 text-[12px] sm:text-[13.5px] md:text-[15px] leading-relaxed text-slate-500 font-medium text-justify md:text-left">
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
