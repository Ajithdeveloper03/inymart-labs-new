import { Reveal } from '@/components/Reveal';
import { ArrowRight, Check } from 'lucide-react';

const ctaPoints = ['Book Your Free Consultation'];

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-white py-14 text-foreground"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.03]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-chart-4/10 blur-3xl animate-float-slower"
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent ring-1 ring-accent/20">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Ready to Transform Your Business?
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0c1f28] sm:text-4xl lg:text-[44px] lg:whitespace-nowrap">
              Let&apos;s Grow Your Business with{' '}
              <span className="text-gradient">Inymart Labs</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-[60rem] text-base leading-relaxed text-slate-500 text-pretty sm:text-lg">
              Whether you&apos;re looking for a reliable Digital Marketing
              Agency in Tamil Nadu or an experienced Digital Marketing Agency in
              Tiruchirappalli, our team is ready to help you improve your online
              presence through effective digital advertising, generate quality
              leads, and achieve sustainable business growth.
            </p>
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:border-slate-300"
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
