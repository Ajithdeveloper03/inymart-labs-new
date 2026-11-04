import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES, slugify, Service } from '@/lib/content';

interface RelatedServicesProps {
  currentSlug: string;
  title?: string;
  subtitle?: string;
}

// Curated map of recommended complementary services for each service slug
const COMPLEMENTARY_MAP: Record<string, string[]> = {
  'seo': ['advance-local-seo', 'ai-seo-services', 'ppc-service', 'web-analytics'],
  'advance-local-seo': ['seo', 'smo', 'web-development', 'ppc-service'],
  'ai-seo-services': ['seo', 'advance-local-seo', 'web-development', 'web-analytics'],
  'smo': ['smm', 'advance-local-seo', 'web-development', 'seo'],
  'smm': ['smo', 'ppc-service', 'digital-marketing-agency', 'web-analytics'],
  'web-analytics': ['seo', 'ppc-service', 'web-development', 'ai-seo-services'],
  'web-development': ['seo', 'web-analytics', 'advance-local-seo', 'ppc-service'],
  'digital-marketing-consulting': ['digital-marketing-agency', 'seo', 'ppc-service', 'web-analytics'],
  'digital-marketing-agency': ['digital-marketing-consulting', 'seo', 'ppc-service', 'web-development'],
  'ppc-service': ['seo', 'smm', 'web-analytics', 'digital-marketing-consulting'],
};

export function RelatedServices({
  currentSlug,
  title = 'Complementary Digital Marketing Services',
  subtitle = 'Pair this capability with our high-impact growth channels to maximize search rankings, qualified traffic, and revenue.'
}: RelatedServicesProps) {
  // Find recommended slugs, fallback to first 4 non-matching services
  const recommendedSlugs = COMPLEMENTARY_MAP[currentSlug] || [];
  
  let related = SERVICES.filter((s) => {
    const slug = s.slug || slugify(s.title);
    return slug !== currentSlug && recommendedSlugs.includes(slug);
  });

  if (related.length < 4) {
    const extras = SERVICES.filter((s) => {
      const slug = s.slug || slugify(s.title);
      return slug !== currentSlug && !related.some((r) => (r.slug || slugify(r.title)) === slug);
    });
    related = [...related, ...extras].slice(0, 4);
  }

  return (
    <section className="relative bg-neutral-900 py-20 text-white overflow-hidden border-t border-white/10">
      {/* Decorative gradient backdrops */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm text-xs font-semibold text-primary uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Growth Ecosystem
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            {title}
          </h2>
          <p className="mt-4 text-base text-zinc-300 leading-relaxed font-sans">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((service) => {
            const Icon = service.icon;
            const href = `/services/${service.slug || slugify(service.title)}/`;

            return (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-white/10 hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-zinc-400 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-white transition-colors"
                  >
                    <span>View Service</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central hub directory anchor */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span className="text-sm text-zinc-400">
            Looking for an end-to-end multi-channel strategy?
          </span>
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-primary underline underline-offset-4 transition-colors"
          >
            Explore All 10 Digital Marketing Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
