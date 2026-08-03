const fs = require('fs');
const path = require('path');

const smmDir = 'c:\\Users\\user\\Desktop\\inymart\\iny lab\\components\\smm';
if (!fs.existsSync(smmDir)) {
  fs.mkdirSync(smmDir, { recursive: true });
}

// 1. SmmHeroBanner.tsx
const smmHeroBanner = `
'use client';

import { Reveal } from '@/components/Reveal';
import Link from 'next/link';

export function SmmHeroBanner() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-8 pb-12">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1f28] via-[#0f2835] to-[#163a4d] -z-20" />
      
      <div className="container-x relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse" />
              <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Social Media Marketing</span>
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 font-display leading-[1.1] tracking-tight">
              Social Media Marketing Agency in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff8c5f]">Tamil Nadu</span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-10 max-w-2xl mx-auto font-sans">
              Inymart Labs is a social media marketing agency in Trichy, Tamil Nadu that plans, creates, and manages paid ad campaigns on Facebook, Instagram, and LinkedIn to generate calls, leads, and sales.
            </p>
          </Reveal>
          
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] hover:-translate-y-1 text-center"
              >
                Talk to Our Ads Team
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(smmDir, 'SmmHeroBanner.tsx'), smmHeroBanner.trim());

// 2. SmmQuickAnswer.tsx
const smmQuickAnswer = `
'use client';

import { Reveal } from '@/components/Reveal';
import { Lightbulb } from 'lucide-react';

export function SmmQuickAnswer() {
  return (
    <section id="quick-answer" className="relative pt-8 pb-12 bg-white overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Left Side: Image with Tag */}
          <div className="order-1 relative w-full pr-8 sm:pr-12 lg:pr-16 pb-8 sm:pb-12 lg:pb-16 pt-8 pl-4 lg:pl-10">
            <Reveal delay={200} className="h-full">
              {/* Main Image */}
              <div className="relative h-full min-h-[350px] w-full rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgb(0,0,0,0.1)] border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074" 
                  alt="Social Media Marketing" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tag Overlay */}
              <div className="absolute bottom-0 right-0 z-20">
                <div className="absolute -right-4 -bottom-4 w-28 h-28 sm:w-36 sm:h-36 bg-[#ff6b35] rounded-[32px] sm:rounded-[40px] z-0 shadow-lg" />
                <div className="relative z-10 bg-white rounded-3xl p-4 sm:p-6 shadow-2xl flex items-center justify-center min-w-[80px] sm:min-w-[120px] h-[200px] sm:h-[280px]">
                  <span 
                    className="text-[60px] sm:text-[90px] font-black tracking-tighter"
                    style={{ 
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      backgroundImage: "url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074')",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1
                    }}
                  >
                    ADS
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Content */}
          <div className="order-2 flex flex-col items-start lg:pl-12">
            <Reveal>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1f2e] font-display">
                Quick Answer
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mt-6 mb-10"></div>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={100}>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                  Inymart Labs is a social media marketing agency in Trichy, Tamil Nadu that plans, creates, and manages paid ad campaigns on Facebook, Instagram, and LinkedIn to generate calls, leads, and sales.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Unlike organic social media management, Inymart Labs' social media marketing service uses paid advertising, audience targeting, and daily budget optimization — with most businesses seeing traffic and enquiries within days of a campaign going live.
                </p>
              </Reveal>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(smmDir, 'SmmQuickAnswer.tsx'), smmQuickAnswer.trim());

// 3. SmmWhatWeDo.tsx
const smmWhatWeDo = `
'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function SmmWhatWeDo() {
  return (
    <section className="relative pt-8 pb-12 bg-white overflow-hidden">
      <div className="container-x">
        
        {/* Section 1: What is SMM */}
        <div className="mb-20">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
                What Is Social Media Marketing (SMM)?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                Social Media Marketing (SMM), also called paid social advertising or social media ads, is the practice of running paid ad campaigns on platforms like Facebook, Instagram, and LinkedIn to reach a targeted audience and drive specific business outcomes — calls, website visits, form fills, or direct sales.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                It is distinct from organic social media management, which focuses on regular posting without paid promotion.
              </p>
            </div>
          </Reveal>
        </div>

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
                Inymart Labs is a results-driven social media marketing agency in Tamil Nadu, helping businesses run Facebook, Instagram, and LinkedIn ad campaigns that actually bring in leads and sales. As a social media marketing agency in Tamil Nadu, we focus on getting your ad budget in front of the right people — not just boosting posts randomly.
              </p>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                We work with small businesses, growing brands, and companies across India, UAE, UK, and the USA. Whether you want more footfall to a local store or more online orders for an ecommerce brand, our team as your social media marketing agency in Tamil Nadu and social media marketing agency in Trichy builds campaigns around your actual business goals.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 group"
              >
                Talk to Our Ads Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          {/* Right: Visual (Image) */}
          <div className="order-1 lg:order-2 relative">
            <Reveal className="h-full">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-t-[32px] rounded-br-[32px] rounded-bl-[120px] sm:rounded-bl-[160px] lg:rounded-bl-[200px] shadow-[0_20px_60px_rgb(0,0,0,0.1)]">
                <img 
                  src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2031" 
                  alt="Social Media Ads Dashboard" 
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
`;
fs.writeFileSync(path.join(smmDir, 'SmmWhatWeDo.tsx'), smmWhatWeDo.trim());

console.log("Created banner, quick answer, what we do");
