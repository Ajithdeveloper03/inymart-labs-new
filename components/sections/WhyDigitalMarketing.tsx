import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { DIGITAL_MARKETING_CHANNELS } from '@/lib/content';
import { LineChart, Eye, ShieldCheck, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Eye,
    title: 'Attract More Customers',
    text: 'A strong online presence helps businesses attract more customers across the platforms they use every day.',
  },
  {
    icon: ShieldCheck,
    title: 'Build Trust',
    text: 'Consistent, visible presence builds credibility and trust with your audience before they ever contact you.',
  },
  {
    icon: TrendingUp,
    title: 'Increase Sales',
    text: 'Reach the right audience at the right moment to turn searches into enquiries and enquiries into sales.',
  },
];

export function WhyDigitalMarketing() {
  return (
    <section className="relative scroll-mt-24 bg-background py-14">
      <div className="container-x grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
        
        {/* Left: copy and CTA */}
        <div className="order-2 flex flex-col justify-between lg:order-1 py-4">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent ring-1 ring-accent/20">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Why Digital Marketing Matters
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display font-semibold tracking-tight text-foreground text-balance text-[2rem] leading-[2rem]">
                A strong online presence helps businesses{' '}
                <span className="text-accent">attract more customers, build trust, and increase sales.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                As a trusted Digital Marketing Agency in Tamil Nadu, we help businesses improve visibility through SEO, Local SEO, Website Development, AI Search Optimization, Performance Marketing, Social Media Marketing, and enhance their organic traffic.
              </p>
            </Reveal>
          </div>

          <div className="mt-10">
            <CtaBanner
              title="Take the First Step Towards Digital Success"
              points={['Request a Free Digital Marketing Consultation']}
              ctaLabel="Request Free Consultation"
              variant="accent"
              className="bg-accent bg-none"
              stacked={true}
            />
          </div>
        </div>

        {/* Right: image + overlay stat */}
        <Reveal className="relative order-1 lg:order-2 h-full">
          <div className="relative h-full overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10 min-h-[350px]">
            <img
              src="/new/images/digital-marketing.jpeg"
              alt="Business growth analytics dashboard showing increasing online visibility"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/90 p-5 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <LineChart className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-foreground">
                    Organic Traffic Growth
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Enhanced through SEO &amp; AI Search Optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
