'use client';

import { Reveal } from '@/components/Reveal';
import { Search } from 'lucide-react';

export function AiSeoWhatIs() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <Search className="w-8 h-8 text-blue-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                What Is AEO / AI SEO?
              </h2>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-gray-600 leading-relaxed">
                AEO (Answer Engine Optimization), also called AI SEO, is the practice of structuring website content so AI-powered search tools and answer engines — such as ChatGPT, Gemini, Copilot, and Perplexity — can understand it, trust it, and use it to answer user questions or recommend a business. It differs from traditional SEO, which focuses primarily on ranking in Google's search results, by focusing on direct-answer clarity, structured facts, and content that generative engines can accurately cite.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}