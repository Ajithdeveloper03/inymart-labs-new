'use client';

import { Reveal } from '@/components/Reveal';
import { Target } from 'lucide-react';

export function AiSeoWhyChoose() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-emerald-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] font-display">
                Why Choose an AI SEO Service in Tamil Nadu
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                More customers are now asking ChatGPT, Gemini, Copilot, and Perplexity for recommendations instead of typing into Google alone. If your business isn't structured to be understood by these tools, you may be invisible in this growing channel — or worse, described inaccurately.
              </p>
              <p>
                A proper AEO Service goes beyond keywords. It restructures content with direct answers, clear entity facts, and citable statements that AI engines can lift accurately. As an experienced AI SEO Service in Trichy, Inymart Labs builds this alongside your existing SEO, not as a replacement for it.
              </p>
              <p>
                We also monitor how AI tools currently describe your business, so we can identify and correct outdated, missing, or incorrect information before building new content.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}