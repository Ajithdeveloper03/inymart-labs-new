import { Reveal } from '@/components/Reveal';
import { ArrowRight, Check } from 'lucide-react';

const ctaPoints = ['Book Your Free Consultation'];

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-25" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent/25 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-chart-4/20 blur-3xl animate-float-slower"
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 ring-1 ring-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Ready to Transform Your Business?
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Let&apos;s Grow Your Business with{' '}
              <span className="text-gradient">Inymart Labs</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 text-pretty sm:text-lg">
              Whether you&apos;re looking for a reliable Digital Marketing
              Agency in Tamil Nadu or an experienced Digital Marketing Agency in
              Tiruchirappalli, our team is ready to help you improve your online
              presence through effective digital advertising, generate quality
              leads, and achieve sustainable business growth.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {ctaPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-sm font-semibold text-white sm:text-base"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@inymartlabs.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-accent/50"
              >
                Book Your Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                View Our Services
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
