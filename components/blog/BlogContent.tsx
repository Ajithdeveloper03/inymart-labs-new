'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface BlogContentProps {
  post: any;
}

export function BlogContent({ post }: BlogContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  let sections = [];
  let faqs = [];
  
  try { if (post.sections) sections = typeof post.sections === 'string' ? JSON.parse(post.sections) : post.sections; } catch (e) {}
  try { if (post.faqs) faqs = typeof post.faqs === 'string' ? JSON.parse(post.faqs) : post.faqs; } catch (e) {}

  // Fallback to legacy raw HTML content if no structured sections exist
  if (!sections || sections.length === 0) {
    return (
      <article 
        className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-slate-900 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-slate-800 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-primary prose-a:font-semibold hover:prose-a:text-primary/80 prose-strong:text-slate-900 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:text-slate-600 prose-li:mb-2"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    );
  }

  return (
    <article className="max-w-none">
      {/* Sections */}
      <div className="space-y-12">
        {sections.map((section: any, idx: number) => (
          <section key={idx} id={`section-${idx}`} className="scroll-mt-24">
            {section.heading && (
              <h2 className="font-display font-bold text-3xl text-slate-900 mb-6">
                {section.heading}
              </h2>
            )}
            
            {section.body && (
              <div 
                className="text-slate-600 leading-relaxed mb-6 whitespace-pre-wrap text-lg"
              >
                {section.body}
              </div>
            )}
            
            {section.bullets && section.bullets.length > 0 && (
              <ul className="list-none mb-6 space-y-4">
                {section.bullets.map((bullet: any, bIdx: number) => {
                  if (typeof bullet === 'string') {
                    if (bullet.trim() === '') return null;
                    return (
                      <li key={bIdx} className="flex gap-3 items-start">
                        <span className="text-primary font-bold text-xl leading-none mt-1 shrink-0">•</span>
                        <span className="text-slate-600 text-lg">{bullet}</span>
                      </li>
                    );
                  }
                  
                  if (!bullet.heading && !bullet.description) return null;
                  
                  return (
                    <li key={bIdx} className="flex gap-3 items-start">
                       {bullet.showDot && <span className="text-primary font-bold text-xl leading-none mt-1 shrink-0">•</span>}
                       <div className="flex-1">
                         {bullet.heading && (
                           <div className={`text-lg text-slate-900 ${bullet.isBold ? 'font-bold' : 'font-semibold'}`}>
                             {bullet.heading}
                           </div>
                         )}
                         {bullet.description && (
                           <div className="text-slate-600 text-lg mt-1 whitespace-pre-wrap">
                             {bullet.description}
                           </div>
                         )}
                       </div>
                    </li>
                  )
                })}
              </ul>
            )}

            {section.image && (
              <div className="mt-8 rounded-xl overflow-hidden shadow-sm">
                <img src={section.image} alt={section.imageAlt || section.heading || 'Blog Image'} className="w-full h-auto object-cover" />
              </div>
            )}
          </section>
        ))}
      </div>

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <div className="mt-16 pt-12 border-t" id="faqs">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq: any, idx: number) => (
              <div key={idx} className="border rounded-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                >
                  <span className="font-bold text-slate-800 pr-4">{faq.question}</span>
                  {openFaq === idx ? <ChevronUp size={20} className="text-slate-500 shrink-0" /> : <ChevronDown size={20} className="text-slate-500 shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="p-5 bg-white text-slate-600 leading-relaxed border-t">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
