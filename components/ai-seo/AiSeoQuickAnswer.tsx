'use client';

import { Reveal } from '@/components/Reveal';
import { Target, Zap } from 'lucide-react';

export function AiSeoQuickAnswer() {
  return (
    <section id="quick-answer" className="relative pt-12 pb-8 bg-slate-50 scroll-mt-16">
      <div className="container-x">
        <Reveal>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1f28]">Quick Answer</h2>
              </div>
              
              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
                Inymart Labs offers an <strong className="text-[#0c1f28]">AI SEO Service in Trichy, Tamil Nadu</strong> also called an <strong className="text-[#0c1f28]">AEO Service (Answer Engine Optimization)</strong>, that helps businesses get found and recommended by AI tools like ChatGPT, Gemini, Copilot, and Perplexity — not just traditional Google search. This includes structuring content for direct answers, building citable facts and entity clarity, and monitoring how AI engines represent a business, with visibility improvements typically building over 2–4 months as AI platforms recrawl and re-index content.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}