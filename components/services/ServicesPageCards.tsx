'use client';

import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';
import { SERVICES, slugify } from '@/lib/content';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';

const SERVICE_IMAGES = [
  '/SEO%20(home).png',
  '/Local%20SEO%20(home).png',
  '/SMO%20(home).png',
  '/SMM%20(home).png',
  '/Web%20Analytics%20(home).png',
  '/Web%20Development(home).png',
  '/Digital%20Marketing%20Consulting(home).png',
  '/Digital%20Marketing%20Agency(home).png',
  '/PPC%20Service%20(home).png',
  '/AI%20SEO%20Services(home).png'
];

const SERVICE_ALTS = [
  'SEO services analytics dashboard showing organic search ranking improvements and website traffic growth.',
  'Advance Local SEO map pin concept highlighting Google Maps 3-Pack visibility and nearby customer discovery.',
  'Social Media Optimization visual concept showing mobile profile management and brand identity building.',
  'Social Media Marketing advertising funnel on smartphone driving targeted leads and customer engagement.',
  'Web analytics dashboard displaying Google Analytics 4 traffic metrics and conversion rate attribution.',
  'Web development coding workspace demonstrating responsive, fast, and SEO-friendly website architecture.',
  'Digital marketing consulting session with strategists analyzing competitor insights and growth roadmaps.',
  'Full-service digital marketing agency workspace featuring omnichannel campaign execution and analytics.',
  'Pay-per-click advertising performance growth chart representing high ROAS and Google Ads conversions.',
  'AI SEO services interface illustrating Answer Engine Optimization (AEO) and ChatGPT search recommendations.'
];

const PAGE_SERVICES_DATA = [
  {
    title: 'SEO (Search Engine Optimization)',
    shortTitle: 'Search Engine Optimization',
    slug: 'seo',
    tag: 'Organic Growth',
    description: 'Transform organic search into your most profitable acquisition channel. We combine in-depth technical audits, Core Web Vitals optimization, semantic keyword clustering, and high-authority link acquisition to secure top Google rankings.',
    deliverables: [
      'Comprehensive Technical & Speed Audits',
      'High-Intent Keyword & Content Strategy',
      'Authority Backlinks & Digital PR'
    ],
    bestFor: 'Businesses seeking compounding organic traffic and long-term search dominance.'
  },
  {
    title: 'Advance Local SEO',
    shortTitle: 'Advance Local SEO',
    slug: 'advance-local-seo',
    tag: 'Local Dominance',
    description: 'Dominate the Google Maps 3-Pack and capture high-intent nearby customers. We optimize your Google Business Profile, manage local citations, implement geo-tagged structured data, and build local trust across Tamil Nadu.',
    deliverables: [
      'Google Business Profile (GBP) Optimization',
      'Google Maps 3-Pack Ranking Strategy',
      'Local Geo-Tagged Citations & Reviews'
    ],
    bestFor: 'Retailers, clinics, restaurants, and regional businesses serving local customers.'
  },
  {
    title: 'SMO (Social Media Optimization)',
    shortTitle: 'Social Media Optimization',
    slug: 'smo',
    tag: 'Brand Identity',
    description: 'Establish a credible, visually cohesive presence across Instagram, Facebook, and LinkedIn. We optimize profile bios, highlight reels, visual aesthetic, and audience engagement loops to build authentic brand trust.',
    deliverables: [
      'Profile Architecture & Visual Branding',
      'Content Calendar & Visual Storytelling',
      'Audience Engagement & Community Growth'
    ],
    bestFor: 'Brands looking to establish strong social proof, trust, and brand credibility.'
  },
  {
    title: 'SMM (Social Media Marketing)',
    shortTitle: 'Social Media Marketing',
    slug: 'smm',
    tag: 'Paid Social & Leads',
    description: 'Turn social media into a predictable lead machine with targeted Meta (Facebook & Instagram) and LinkedIn ad funnels. We create high-converting creatives, precise audience targeting, and automated retargeting.',
    deliverables: [
      'Hyper-Targeted Demographic Ad Campaigns',
      'High-Converting Creative Design & Copy',
      'Pixel Tracking & Multi-Touch Retargeting'
    ],
    bestFor: 'Companies needing rapid customer acquisition and measurable lead generation.'
  },
  {
    title: 'Web Analytics',
    shortTitle: 'Web Analytics & CRO',
    slug: 'web-analytics',
    tag: 'Data & Attribution',
    description: 'Eliminate guesswork with end-to-end data tracking and conversion attribution. We configure Google Analytics 4 (GA4), Google Tag Manager, custom event tracking, and intuitive dashboards to measure true marketing ROI.',
    deliverables: [
      'GA4 & Google Tag Manager Architecture',
      'Custom Funnel & Conversion Tracking',
      'Automated Weekly & Monthly Dashboards'
    ],
    bestFor: 'Leadership teams seeking clear transparency and measurable conversion metrics.'
  },
  {
    title: 'Web Development',
    shortTitle: 'Web Development',
    slug: 'web-development',
    tag: 'Speed & Architecture',
    description: 'Custom, high-speed, SEO-engineered websites built to rank on search engines and convert visitors into clients. Built with modern responsive architecture, perfect mobile usability, clean schema, and rapid load times.',
    deliverables: [
      'Modern Responsive Next.js & React Frameworks',
      'Mobile-First UX & Conversion Optimization',
      'Built-In Semantic SEO & Schema Markup'
    ],
    bestFor: 'Enterprises requiring fast, modern, and high-converting web applications.'
  },
  {
    title: 'Digital Marketing Consulting',
    shortTitle: 'Digital Marketing Consulting',
    slug: 'digital-marketing-consulting',
    tag: 'Strategic Roadmap',
    description: 'Strategic advisory for CEOs, founders, and marketing directors. We analyze your digital ecosystem, identify high-impact growth levers, optimize marketing budgets, and build an actionable growth roadmap.',
    deliverables: [
      'Full Digital Marketing Ecosystem Audit',
      'Competitor Positioning & Market Gap Analysis',
      'Channel Allocation & Budget Optimization'
    ],
    bestFor: 'Growing SMEs, startups, and enterprises scaling their digital footprint.'
  },
  {
    title: 'Digital Marketing Agency',
    shortTitle: 'Full-Service Digital Marketing',
    slug: 'digital-marketing-agency',
    tag: '360° Solutions',
    description: 'Complete, integrated digital marketing execution handled by our dedicated team of specialists. We align SEO, paid advertising, content creation, social media, and web development to drive holistic business expansion.',
    deliverables: [
      'Dedicated Multi-Disciplinary Growth Team',
      'Synchronized Omnichannel Execution',
      'Guaranteed Alignment with Revenue Targets'
    ],
    bestFor: 'Businesses wanting an experienced, full-service digital growth partner.'
  },
  {
    title: 'PPC Service (Pay-Per-Click)',
    shortTitle: 'PPC Advertising',
    slug: 'ppc-service',
    tag: 'Paid Search & ROAS',
    description: 'Maximize immediate return on ad spend (ROAS) with precision Google Ads search, display, and remarketing campaigns. We focus on negative keyword pruning, quality score optimization, and high-converting landing pages.',
    deliverables: [
      'Intent-Driven Google Search & Display Ads',
      'Strict Negative Keyword & Budget Protection',
      'A/B Split Testing & Conversion Rate Optimization'
    ],
    bestFor: 'Businesses seeking rapid, scalable lead generation with positive ROAS.'
  },
  {
    title: 'AI SEO Services',
    shortTitle: 'AI & Generative SEO',
    slug: 'ai-seo-services',
    tag: 'Future of Search',
    description: 'Future-proof your organic search footprint for the AI era. We optimize your brand knowledge graph, conversational queries, and structured schema so LLMs like ChatGPT, Gemini, and Perplexity quote and recommend your business.',
    deliverables: [
      'Answer Engine Optimization (AEO) Structuring',
      'Generative Engine Optimization (GEO) Citations',
      'Brand Knowledge Graph & Semantic Authority'
    ],
    bestFor: 'Forward-thinking brands preparing for AI-driven conversational discovery.'
  },
];

export function ServicesPageCards() {
  return (
    <section
      id="services-list"
      aria-labelledby="services-list-heading"
      className="relative scroll-mt-24 bg-secondary/20 py-16 lg:py-24"
    >
      <div className="container-x max-w-[1600px]">
        <SectionHeading
          eyebrow="Specialized Capabilities"
          title={
            <>
              Explore Our <span className="text-gradient">Digital Marketing</span> Services
            </>
          }
          description="Each service is engineered with data-backed methodologies, technical precision, and localized market insights to maximize your business growth."
        />

        {/* 2-Column Grid Layout with Rich Content Cards */}
        <div className="mt-16 grid gap-8 grid-cols-1 lg:grid-cols-2">
          {SERVICES.map((originalService, i) => {
            const pageData = PAGE_SERVICES_DATA[i];
            const href = `/services/${pageData.slug || slugify(pageData.shortTitle)}/`;
            return (
              <Reveal key={originalService.title} delay={i * 40}>
                <article className="group relative flex flex-col md:flex-row h-full bg-white rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:border-orange-500/40 transition-all duration-300 overflow-hidden">
                  
                  {/* Left Image Section */}
                  <div className="relative w-full md:w-[42%] md:min-w-[260px] h-56 md:h-auto overflow-hidden shrink-0">
                    <img 
                      src={SERVICE_IMAGES[i]} 
                      alt={SERVICE_ALTS[i]} 
                      width={600}
                      height={450}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent md:bg-black/10 md:group-hover:bg-black/0 transition-colors" />
                    
                    {/* Badge over image */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
                        <Sparkles className="w-3 h-3 text-orange-400" />
                        {pageData.tag}
                      </span>
                    </div>
                  </div>
                  
                  {/* Right Content Section */}
                  <div className="relative flex-1 flex flex-col p-6 sm:p-8 z-10 bg-white justify-between">
                    <div>
                      {/* Title & Icon Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors leading-tight">
                          <Link href={href} className="hover:underline">
                            {pageData.shortTitle}
                          </Link>
                        </h3>
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                          <originalService.icon className="h-5 w-5" strokeWidth={2} />
                        </div>
                      </div>
                      
                      {/* In-Depth Description */}
                      <p className="text-sm sm:text-[14px] leading-relaxed text-slate-600 mb-5">
                        {pageData.description}
                      </p>

                      {/* Key Deliverables Pills */}
                      <div className="mb-6 space-y-2 pt-3 border-t border-slate-100">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Key Deliverables:
                        </p>
                        <ul className="space-y-1.5">
                          {pageData.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom CTA & Link */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-medium italic hidden sm:inline">
                        Full technical execution
                      </span>
                      <Link 
                        href={href}
                        aria-label={`Explore ${pageData.shortTitle} Services`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-orange-600 hover:text-orange-700 transition-colors group/btn"
                      >
                        Explore Service 
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>

                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20">
          <CtaBanner
            title="Ready to Accelerate Your Digital Growth?"
            points={['Schedule a Free Growth Audit', 'Talk Directly to Our Strategy Team']}
            ctaLabel="Get a Free Website Audit"
            ctaHref="/contact/"
            variant="accent"
          />
        </div>
      </div>
    </section>
  );
}
