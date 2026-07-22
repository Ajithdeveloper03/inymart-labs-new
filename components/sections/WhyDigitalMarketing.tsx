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
    <section className="relative scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: image + overlay stat */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
            <img
              src="/images/digital-marketing.jpeg"
              alt="Business growth analytics dashboard showing increasing online visibility"
              className="h-[380px] w-full object-cover sm:h-[460px] lg:h-[520px]"
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

        {/* Right: copy */}
        <div className="order-1 flex flex-col justify-center lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent ring-1 ring-accent/20">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Why Digital Marketing Matters
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              A strong online presence helps businesses{' '}
              <span className="text-gradient">attract more customers, build trust, and increase sales.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              As a trusted Digital Marketing Agency in Tamil Nadu, we help businesses improve visibility through SEO, Local SEO, Website Development, AI Search Optimization, Performance Marketing, Social Media Marketing, and enhance their organic traffic.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container-x mt-14">
        <CtaBanner
          title="Take the First Step Towards Digital Success"
          points={['Request a Free Digital Marketing Consultation']}
          ctaLabel="Request Free Consultation"
          variant="dark"
        />
      </div>
    </section>
  );
}
