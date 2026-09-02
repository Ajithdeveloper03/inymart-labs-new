import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';
import { SERVICES, slugify } from '@/lib/content';
import { ArrowRight } from 'lucide-react';
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
  'Digital marketing analytics dashboard on laptop showing website traffic growth, SEO performance, and data-driven marketing results.',
  'Local SEO marketing concept showing a smartphone with a location pin outside a local business, representing Google Maps visibility and local business discovery.',
  'Digital marketing concept showing a person using a smartphone to manage visual content and social media, representing mobile content creation and digital engagement.',
  'Digital marketing concept showing a hand tapping a smartphone with a launch icon, representing social media campaigns, audience engagement, and online growth.',
  'Web analytics dashboard on a desktop monitor showing traffic charts, performance metrics, and data visualizations for digital marketing analysis.',
  'Web development workspace showing a developer working with code on dual monitors, representing website development, programming, and technical solutions.',
  'Digital marketing consulting session with professionals discussing a marketing strategy using charts and growth planning documents.',
  'Digital marketing agency workspace featuring a laptop, smartphone, tablet, analytics data, and marketing planning materials, representing integrated digital marketing services.',
  'Digital marketing growth concept showing stacked coins beside an upward-trending orange bar chart, representing business growth, increasing revenue, and marketing ROI.',
  'AI SEO services concept showing a hand interacting with an AI-powered search interface on a laptop, representing AI-driven search optimization and digital visibility.'
];

const PAGE_SERVICES_DATA = [
  {
    title: 'SEO (Search Engine Optimization)',
    shortTitle: 'SEO',
    description: 'Improves your website’s visibility on search engines like Google, helping increase organic traffic, rankings, and online presence.',
  },
  {
    title: 'Local SEO',
    shortTitle: 'Local SEO',
    description: 'Helps your business appear in local Google searches and Google Maps, attracting nearby customers and increasing local visibility.',
  },
  {
    title: 'SMO (Social Media Optimization)',
    shortTitle: 'SMO',
    description: 'Optimizes your social media profiles and content to improve visibility, engagement, followers, and social reach.',
  },
  {
    title: 'SMM (Social Media Marketing)',
    shortTitle: 'SMM',
    description: 'Promotes your business through social media platforms like Facebook, Instagram, and LinkedIn to build brand awareness and generate leads.',
  },
  {
    title: 'Web Analytics',
    shortTitle: 'Web Analytics',
    description: 'Tracks website traffic, user behavior, and performance to help businesses understand customer activity and make data-driven decisions.',
  },
  {
    title: 'Web Development',
    shortTitle: 'Web Development',
    description: 'Creates fast, responsive, and user-friendly websites that build a strong online presence and improve customer experience.',
  },
  {
    title: 'Digital Marketing Consulting',
    shortTitle: 'Digital Marketing Consulting',
    description: 'Provides expert strategies and guidance to improve online marketing performance, choose the right channels, and achieve business growth.',
  },
  {
    title: 'Digital Marketing Agency',
    shortTitle: 'Digital Marketing Agency',
    description: 'Provides complete digital marketing solutions such as SEO, social media, PPC, web development, and other services to grow businesses online.',
  },
  {
    title: 'PPC Service (Pay-Per-Click)',
    shortTitle: 'PPC Service',
    description: 'Creates targeted paid advertising campaigns on platforms like Google to drive relevant traffic, leads, and conversions quickly.',
  },
  {
    title: 'AI SEO Services',
    shortTitle: 'AI SEO Services',
    description: 'Uses AI-powered tools and strategies to optimize content, improve search rankings, identify SEO opportunities, and achieve better online performance.',
  },
];

export function ServicesPageCards() {
  return (
    <section
      id="services-list"
      className="relative scroll-mt-24 bg-secondary/20 py-16"
    >
      <div className="container-x max-w-[1600px]">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Our <span className="text-gradient">Services</span>
            </>
          }
          description="Detailed solutions designed to boost your online presence and drive real results."
        />

        {/* 2-Column Grid Layout matching the new design */}
        <div className="mt-16 grid gap-6 grid-cols-1 lg:grid-cols-2">
          {SERVICES.map((originalService, i) => {
            const pageData = PAGE_SERVICES_DATA[i];
            return (
              <Reveal key={originalService.title} delay={i * 50}>
                <article className="group relative flex flex-col sm:flex-row h-full min-h-[260px] bg-white rounded-3xl border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-slate-200 transition-all duration-300 overflow-hidden">
                  
                  {/* Left Image Section */}
                  <div className="relative w-full sm:w-[40%] sm:min-w-[240px] h-48 sm:h-auto overflow-hidden shrink-0">
                    <img 
                      src={SERVICE_IMAGES[i]} 
                      alt={SERVICE_ALTS[i]} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>
                  
                  {/* Right Content Section */}
                  <div className="relative flex-1 flex flex-col p-6 sm:p-8 md:p-10 z-10 bg-white">
                    {/* Overlapping Icon (Left side of the text block) */}
                    <div className="absolute top-1/2 -left-6 sm:-left-8 -translate-y-1/2 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-l-full bg-white text-orange-600 shadow-[-4px_0_10px_-2px_rgba(0,0,0,0.05)] border-y border-l border-slate-100 border-r-0 z-20">
                      <originalService.icon className="h-5 w-5 sm:h-7 sm:w-7 ml-1 sm:ml-2 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors pr-2">
                      {pageData.shortTitle}
                    </h3>
                    
                    <p className="text-sm sm:text-[15px] leading-relaxed text-slate-500 mb-6 line-clamp-3">
                      {pageData.description}
                    </p>

                    <div className="mt-auto pt-2">
                      <Link 
                        href={`/services/${slugify(pageData.shortTitle)}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        VIEW SERVICE <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
            title="Need Complete Digital Marketing Solutions?"
            points={['Get a Free Website Analysis', 'Talk to Our Experts']}
            ctaLabel="Get a Free Website Analysis"
            ctaHref="/contact"
            variant="accent"
          />
        </div>
      </div>
    </section>
  );
}
