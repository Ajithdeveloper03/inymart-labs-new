'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Reveal } from '@/components/Reveal';
import { FAQS } from '@/lib/content';
import { Plus, Minus, Circle, ArrowRight } from 'lucide-react';

export function Faqs() {
  return (
    <section
      id="faqs"
      className="relative scroll-mt-24 bg-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="container-x flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        {/* Left Column: Image Area */}
        <div className="relative w-full lg:w-1/2 h-[500px] lg:h-[650px] shrink-0 z-0">
          {/* Orange Blob Background */}
          <div className="absolute -bottom-10 -right-10 h-64 w-80 rounded-br-[60px] rounded-tl-[60px] bg-[#ff6b35] -z-10 hidden sm:block" />
          
          {/* Main Image */}
          <div className="relative h-full w-full overflow-hidden rounded-[40px] z-10 shadow-xl border border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80" 
              className="h-full w-full object-cover" 
              alt="Coworking Space FAQs" 
            />
          </div>

          {/* FAQ Overlay Box */}
          <div className="absolute bottom-10 right-10 z-20 rounded-[32px] bg-white px-5 py-8 shadow-2xl">
            <div 
              className="font-display font-black text-[70px] leading-[0.8] tracking-widest bg-cover bg-center" 
              style={{ 
                writingMode: 'vertical-rl', 
                transform: 'rotate(180deg)',
                backgroundImage: 'url(https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=400&q=80)',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              FAQ
            </div>
          </div>
        </div>

        {/* Right Column: Content & Accordions */}
        <div className="w-full lg:w-1/2 flex flex-col">
          
          <Reveal>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-[#ff6b35] font-bold text-sm tracking-widest uppercase mb-4">
              <div className="flex items-center">
                <Circle className="h-3 w-3 fill-[#ff6b35] text-[#ff6b35]" />
                <ArrowRight className="h-4 w-4 -ml-2 text-[#ff6b35]" strokeWidth={3} />
              </div>
              <span>OUR FAQS</span>
            </div>
            
            {/* Heading */}
            <h2 className="font-display text-4xl lg:text-[44px] font-extrabold text-[#0c1f28] leading-[1.2] mb-6">
              Frequently Asked Questions
            </h2>
            
            {/* Paragraph */}
            <p className="text-slate-500 mb-10 text-[15px] leading-relaxed max-w-lg">
              Answers to the questions businesses most often ask before partnering with Inymart Labs.
            </p>
          </Reveal>

          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 50}>
                <AccordionItem
                  value={`item-${i}`}
                  className="group rounded-[14px] border border-slate-200 bg-white overflow-hidden shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
                >
                  {/* [&>svg]:hidden removes the default accordion ChevronDown icon so we can use our custom Plus/Minus */}
                  <AccordionTrigger className="flex items-center justify-between p-0 hover:no-underline w-full transition-colors duration-300 data-[state=open]:bg-[#0c1f28] [&>svg]:hidden">
                    <div className="flex items-center flex-1 py-3">
                      <div className="relative flex items-center justify-center shrink-0 w-16 h-14">
                        {/* Left Edge Orange Tag */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-10 bg-[#ff6b35] rounded-r-[4px]" />
                        {/* Number Circle Badge */}
                        <div className="relative z-10 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#0c1f28] text-sm font-bold text-white transition-colors duration-300 group-data-[state=open]:bg-white group-data-[state=open]:text-[#0c1f28]">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                      </div>
                      <span className="ml-1 pr-4 font-bold text-[#0c1f28] transition-colors duration-300 group-data-[state=open]:text-white text-[15px] text-left leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    {/* Right Icon Circle */}
                    <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-slate-100 transition-colors duration-300 group-data-[state=open]:bg-[#ff6b35] mr-4">
                      <Plus className="h-4 w-4 text-[#ff6b35] group-data-[state=open]:hidden" strokeWidth={3} />
                      <Minus className="h-4 w-4 text-white hidden group-data-[state=open]:block" strokeWidth={3} />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white p-5 border-t border-slate-100">
                    <div className="flex gap-5 items-center">
                      <div className="shrink-0 rounded-lg overflow-hidden h-[60px] w-[80px]">
                        <img 
                          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=200&q=80" 
                          alt="FAQ Detail" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="border-l-[3px] border-slate-200 pl-4 text-[13.5px] leading-relaxed text-slate-500 font-medium">
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
