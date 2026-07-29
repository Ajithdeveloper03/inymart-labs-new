'use client';

import { Reveal } from '@/components/Reveal';
import { HERO_STATS, SITE } from '@/lib/content';
import { ArrowRight, CheckCircle2, Search, Sparkles, Star } from 'lucide-react';

const heroPoints = [
  'Get a Free Consultation',
  'Talk to Our Experts',
  'Start Your Digital Growth Today',
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero-glow pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28"
    >
      {/* Decorative floating orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-chart-4/20 blur-3xl animate-float-slower"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left: copy */}
        <div className="flex flex-col items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              {SITE.tagline}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Grow Your Business with{' '}
              <span className="text-gradient">Inymart Labs</span> — Your Trusted
              Digital Marketing Agency in Tamil Nadu
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-sans mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              Be found where your customers are searching. We help businesses
              improve online visibility, generate quality leads, and achieve
              long-term growth through result-driven digital marketing
              strategies — including online reputation management.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {heroPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-sm font-medium text-foreground sm:text-base"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-accent/40"
              >
                Ready to Grow Your Business?
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent/40 hover:bg-secondary"
              >
                Explore Services
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:gap-8">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dt className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Right: visual composition */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Main image card */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-primary/10">
              <img
                src="/images/hero.jpeg"
                alt="Inymart Labs digital marketing team analysing growth strategy"
                className="h-[420px] w-full object-cover sm:h-[480px] lg:h-[540px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/5 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-background/90 p-4 backdrop-blur-md">
                <p className="font-sans text-sm font-semibold text-foreground">
                  Result-driven digital marketing strategies
                </p>
                <p className="font-sans mt-1 text-xs text-muted-foreground">
                  Serving businesses across Tamil Nadu since {SITE.established}
                </p>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -left-4 top-10 hidden rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-md sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Search className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-sans font-display text-xl font-bold text-foreground">
                    Top Rankings
                  </p>
                  <p className="font-sans text-xs text-muted-foreground">SEO &amp; Local SEO</p>
                </div>
              </div>
            </div>

            {/* Floating rating card */}
            <div className="absolute -right-3 bottom-24 hidden rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-md sm:block">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="font-sans mt-1.5 font-display text-lg font-bold text-foreground">
                50+ Happy Clients
              </p>
              <p className="font-sans text-xs text-muted-foreground">Across industries</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
