'use client';

import { Reveal } from '@/components/Reveal';
import { Target, CheckCircle2, Plus } from 'lucide-react';

export function PortfolioQuickAnswer() {
  return (
    <section className="relative overflow-hidden bg-secondary/5 py-20 lg:py-32">
      <div className="container-x relative z-10 flex flex-col gap-12 lg:gap-16">
        
        {/* Card 1: Quick Answer (Image Left, Text Overlapping Right) */}
        <Reveal>
          <div className="relative flex flex-col lg:flex-row items-center justify-between">
            {/* Image Half */}
            <div className="w-full lg:w-[55%] h-[400px] lg:h-[480px] xl:h-[500px] rounded-3xl overflow-hidden shadow-lg relative">
              <img 
                src="/new/quick%20answer%20(%20portfolio).png" 
                alt="Quick Answer" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Text Overlapping Half */}
            <div className="w-[90%] lg:w-[55%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:h-[calc(100%-1rem)] mt-[-50px] lg:mt-0 z-10 bg-white rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.1)] border border-slate-100 px-8 py-6 lg:px-10 lg:py-6 xl:px-12 xl:py-8 overflow-hidden flex flex-col justify-center">
              {/* Colored Left Border indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ff6b35]" />
              
              <div className="flex items-center gap-3 mb-4 text-[#ff6b35]">
                <Target className="h-6 w-6" />
                <h3 className="font-display text-2xl lg:text-3xl font-bold">Quick Answer</h3>
              </div>
              
              <p className="font-sans text-black leading-relaxed text-[15px] lg:text-base mb-6 text-justify lg:text-left">
                Inymart Labs is a Digital Marketing Agency in Trichy, Tamil Nadu that has served 50+ brands across industries including real estate, roofing and construction, IT parks and tech companies, retail, interiors, restaurants, education, manufacturing, and e-commerce.
              </p>

              <div className="mt-4">
                <p className="text-[11px] font-bold text-black uppercase tracking-widest mb-2">
                  CLIENTS INCLUDE :
                </p>
                <p className="font-sans text-gray-500 font-semibold text-sm leading-relaxed max-w-2xl">
                  Infinity Organic, KPN Roofing Shed, Viswanathan R Associates, Covai Tech Park, SGNL, Digital Ocean, Arsen Interiors, Lesoko, SKS Clean Tech, Kaveri Restaurant, Tech Edge, New Dream Data System, 1Een Technologies, Jobbycart, Alliance Technologies, Uniform Australia, Ivakaa, Hallmark Business School, and Ellora Bakery Equipments.
                </p>
              </div>


            </div>
          </div>
        </Reveal>

        {/* Card 2: What We've Done (Text Overlapping Left, Image Right) */}
        <Reveal delay={100}>
          <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between">
            {/* Text Overlapping Half */}
            <div className="w-[90%] lg:w-[55%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:h-[calc(100%-1rem)] mt-[-50px] lg:mt-0 z-10 bg-white rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.1)] border border-slate-100 px-8 py-6 lg:px-10 lg:py-6 xl:px-12 xl:py-8 overflow-hidden flex flex-col justify-center">
              {/* Colored Left Border indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#f59e0b]" />
              
              <div className="flex items-center gap-3 mb-4 text-[#f59e0b]">
                <CheckCircle2 className="h-6 w-6" />
                <h3 className="font-display text-2xl lg:text-3xl font-bold">What We've Done</h3>
              </div>
              
              <p className="font-sans text-black leading-relaxed text-[15px] lg:text-base mb-6 text-justify lg:text-left">
                As a Digital Marketing Agency in Trichy, Tamil Nadu, Inymart Labs has worked with businesses of every size — from local shops and restaurants to growing tech companies and multi-location brands. Each client has worked with Inymart Labs across services like SEO, Local SEO, social media, web development, PPC, and web analytics, depending on their specific goals.
              </p>

              <div className="mt-4">
                <p className="text-[11px] font-bold text-black uppercase tracking-widest mb-2">
                  OUR PORTFOLIO :
                </p>
                <p className="font-sans text-gray-500 font-semibold text-sm leading-relaxed max-w-2xl">
                  Our portfolio spans real estate and construction, roofing and interiors, IT and tech parks, education, restaurants, manufacturing, ecommerce, and professional services — giving Inymart Labs, as a Digital Marketing Agency in Trichy, Tamil Nadu, hands-on experience across a wide range of industries and business models.
                </p>
              </div>


            </div>
            
            {/* Image Half */}
            <div className="w-full lg:w-[55%] h-[400px] lg:h-[480px] xl:h-[500px] rounded-3xl overflow-hidden shadow-lg relative ml-auto">
              <img 
                src="/new/what%20we%20done(portfolio).png" 
                alt="What We've Done" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
