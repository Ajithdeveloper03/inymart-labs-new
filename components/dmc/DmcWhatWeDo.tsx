'use client';
import { Reveal } from '@/components/Reveal';
import { Users, TrendingUp, Search, Compass, MapPin } from 'lucide-react';
import Link from 'next/link';

export function DmcWhatWeDo() {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              What Is Digital Marketing Consulting?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
              Digital Marketing Consulting is expert, outside guidance on a business&apos;s marketing strategy — reviewing existing SEO, social media, ads, and analytics efforts, identifying what&apos;s working and what isn&apos;t, and building a clear, prioritized plan for what to do next. Unlike a full-service marketing agency, consulting can be advice-only, or paired with implementation if the business wants the same team to execute the plan.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              What We Do
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
              Inymart Labs offers expert Digital Marketing Consulting in Tamil Nadu, help to business owners and marketing teams make sense of SEO, social media, ads, and analytics — without needing to become experts themselves. As a trusted provider of Digital Marketing Consulting in Trichy, we help you see the full picture and decide what actually deserves your time and budget.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
              We work with small businesses, growing brands, and companies across India, UAE, UK, and the USA. Whether you&apos;re planning your first marketing strategy or trying to fix one that isn&apos;t working, our team as your Digital Marketing Consulting partner in Tamil Nadu gives you clear, honest direction.
            </p>
            <Link href="#contact" className="inline-flex font-bold text-[#ff6b35] hover:text-[#e85a25] transition-colors items-center gap-2">
              Talk to Our Consulting Team →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}