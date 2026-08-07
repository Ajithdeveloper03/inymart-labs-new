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
    a: 'Yes. Inymart Labs often starts by auditing your current website and recommends a redesign or rebuild only where it\'s truly needed.'
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
            <div className="flex flex-col items-center text-center mb-6 sm:mb-10 mt-0 sm:mt-2">
              <div className="flex items-center justify-center gap-2 text-[#ff6b35] font-bold text-[12px] sm:text-sm tracking-widest uppercase mb-2 sm:mb-4">
                <div className="flex items-center">
                  <Circle className="h-3 w-3 fill-[#ff6b35] text-[#ff6b35]" />
                  <ArrowRight className="h-4 w-4 -ml-2 text-[#ff6b35]" strokeWidth={3} />
                </div>
                <span>OUR FAQS</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0c1f28] leading-[1.2] mb-3 sm:mb-6">
  Frequently <span className="text-gradient">Asked Questions</span>
</h2>
              
              {/* Paragraph */}
              <p className="font-sans text-slate-500 text-[12px] sm:text-[15px] leading-relaxed max-w-lg mx-auto text-justify sm:text-center">
                Find answers to the most common questions about our services.
              </p>
            </div>
          </Reveal>

          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 50}>
                <AccordionItem
                  value={`item-${i}`}
                  className="group rounded-[14px] border border-slate-200 bg-white overflow-hidden shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:border-[#ff6b35]/40 hover:shadow-[0_8px_30px_rgba(255,107,53,0.15)] transition-all duration-300"
                >
                  <AccordionTrigger className="flex items-center justify-between p-0 hover:no-underline w-full transition-colors duration-300 data-[state=open]:bg-[#0c1f28] [&>svg]:hidden">
                    <div className="flex items-center flex-1 py-3">
                      <div className="relative flex items-center justify-center shrink-0 w-16 h-14">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-10 bg-[#ff6b35] rounded-r-[4px]" />
                        <div className="relative z-10 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#0c1f28] text-[12px] sm:text-sm font-bold text-white transition-colors duration-300 group-hover:bg-[#ff6b35] group-data-[state=open]:bg-white group-data-[state=open]:text-[#0c1f28]">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                      </div>
                      <span className="ml-1 pr-4 font-bold text-[#0c1f28] transition-colors duration-300 group-hover:text-[#ff6b35] group-data-[state=open]:text-white text-[12px] sm:text-[15px] md:text-[16px] text-left leading-snug">
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
                      <div className="border-l-[3px] border-[#ff6b35] pl-4 text-[12px] sm:text-[13.5px] md:text-[15px] leading-relaxed text-slate-500 font-medium text-justify md:text-left">
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