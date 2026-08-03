'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function DmcWhatWeDo() {
  return (
    <section className="relative pt-8 pb-12 bg-white overflow-hidden">
      <div className="container-x">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left: Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start lg:pr-8">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1f2e] mb-6 font-display leading-[1.2]">
                What We Do
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                Digital Marketing Consulting is expert, outside guidance on a business&apos;s marketing strategy — reviewing existing SEO, social media, ads, and analytics efforts, identifying what&apos;s working and what isn&apos;t, and building a clear, prioritized plan for what to do next. Unlike a full-service marketing agency, consulting can be advice-only, or paired with implementation if the business wants the same team to execute the plan.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Inymart Labs offers expert Digital Marketing Consulting in Tamil Nadu, help to business owners and marketing teams make sense of SEO, social media, ads, and analytics — without needing to become experts themselves. As a trusted provider of Digital Marketing Consulting in Trichy, we help you see the full picture and decide what actually deserves your time and budget.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                We work with small businesses, growing brands, and companies across India, UAE, UK, and the USA. Whether you&apos;re planning your first marketing strategy or trying to fix one that isn&apos;t working, our team as your Digital Marketing Consulting partner in Tamil Nadu gives you clear, honest direction.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 group"
              >
                Talk to Our Consultants
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          {/* Right: Visual (Image) */}
          <div className="order-1 lg:order-2 relative">
            <Reveal className="h-full">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-t-[32px] rounded-br-[32px] rounded-bl-[120px] sm:rounded-bl-[160px] lg:rounded-bl-[200px] shadow-[0_20px_60px_rgb(0,0,0,0.1)]">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070" 
                  alt="Digital Marketing Consulting" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
              </div>
            </Reveal>
            
            {/* Decorative background blob behind image */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
