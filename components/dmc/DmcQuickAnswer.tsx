'use client';
import { Reveal } from '@/components/Reveal';
import { Zap, Clock, Target, CheckCircle2 } from 'lucide-react';

export function DmcQuickAnswer() {
  return (
    <section className="relative -mt-16 z-20 pb-12">
      <div className="container-x">
        <Reveal>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-[#ff6b35] font-bold tracking-wide uppercase text-sm mb-4">
                <Zap className="w-5 h-5 fill-current" />
                Quick Answer
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-6 leading-snug font-display">
                Inymart Labs offers Digital Marketing Consulting in Trichy, Tamil Nadu giving businesses an outside, expert view.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                Consulting engagements can be one-time strategy sessions or ongoing monthly advisory, with clarity and direction typically visible right away and measurable marketing improvements building over the following months.
              </p>
            </div>
            
            <div className="w-full md:w-80 bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Clear Action Plan</h4>
                    <p className="text-sm text-slate-500 mt-1">A prioritized plan for what to focus on next.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Expert View</h4>
                    <p className="text-sm text-slate-500 mt-1">Reviewing your SEO, social media, ads, and analytics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Flexible Sessions</h4>
                    <p className="text-sm text-slate-500 mt-1">One-time strategy sessions or ongoing monthly advisory.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}