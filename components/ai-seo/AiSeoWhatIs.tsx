'use client';

import { Reveal } from '@/components/Reveal';
import { Bot } from 'lucide-react';

export function AiSeoWhatIs() {
  return (
    <section className="relative pt-12 pb-16 bg-white">
      <div className="container-x">
        <Reveal>
          {/* Banner Container */}
          <div className="group relative overflow-hidden rounded-[20px] border-[1.5px] border-[#c6a052]/70 bg-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(198,160,82,0.15)] flex flex-col md:flex-row min-h-[350px]">
            
            {/* Left Image Section */}
            <div className="relative w-full md:w-[40%] h-[250px] md:h-auto shrink-0 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="AI SEO Professional Environment" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100"
              />
              {/* Gradient overlay to seamlessly fade the image into the white background */}
              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-white/30 to-white"></div>
            </div>

            {/* Right Content Section */}
            <div className="relative flex-1 flex flex-col items-center justify-center py-8 md:py-12 lg:py-16 pl-0 pr-4 z-10 text-center">
              
              {/* Faint Background Watermark Icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.05]">
                <Bot className="w-[280px] h-[280px] text-black" />
              </div>

              <div className="relative z-10 max-w-3xl">
                <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-[#0c1f28] mb-6">
                  What Is AEO / <span className="text-gradient">AI SEO?</span>
                </h2>
                
                <p className="text-slate-600 leading-relaxed text-base sm:text-[17px] font-medium">
                  AEO (Answer Engine Optimization), also called AI SEO, is the practice of structuring website content so AI-powered search tools and answer engines — such as ChatGPT, Gemini, Copilot, and Perplexity — can understand it, trust it, and use it to answer user questions or recommend a business. It differs from traditional SEO, which focuses primarily on ranking in Google's search results, by focusing on direct-answer clarity, structured facts, and content that generative engines can accurately cite.
                </p>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}