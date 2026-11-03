'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Reveal } from '@/components/Reveal';
import { Circle, ArrowRight, HelpCircle } from 'lucide-react';
import { SERVICES_PAGE_FAQS } from '@/data/servicesData';

export function ServicesFaqs() {
  return (
    <section className="relative bg-secondary/20 py-16 lg:py-24 overflow-hidden border-t border-slate-100">
      <div className="container-x max-w-4xl">
        <div className="flex flex-col items-center text-center mb-12">
          <Reveal>
            <div className="flex items-center justify-center gap-2 text-[#ff6b35] font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
              <div className="flex items-center">
                <Circle className="h-3 w-3 fill-[#ff6b35] text-[#ff6b35]" />
                <ArrowRight className="h-4 w-4 -ml-2 text-[#ff6b35]" strokeWidth={3} />
              </div>
              <span>SERVICES FAQ</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c1f28] leading-[1.2] mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Clear answers to help you choose the right digital growth services for your business.
            </p>
          </Reveal>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {SERVICES_PAGE_FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 50}>
              <AccordionItem
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:border-orange-500/30 hover:shadow-md"
              >
                <AccordionTrigger className="px-6 py-5 text-left text-base sm:text-lg font-bold text-slate-900 hover:no-underline [&[data-state=open]>div>.chevron]:rotate-180 [&[data-state=open]]:text-orange-600">
                  <div className="flex items-center gap-3 w-full pr-4">
                    <HelpCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-1 text-sm sm:text-[15px] leading-relaxed text-slate-600 border-t border-slate-100 mt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
