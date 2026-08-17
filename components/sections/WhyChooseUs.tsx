import { Reveal } from '@/components/Reveal';
import {
  Briefcase,
  Calendar,
  Users,
  Target,
  BarChart3,
  TrendingUp,
  Award,
} from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative scroll-mt-24 bg-secondary/30 py-14"
    >
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:items-stretch">
          
          {/* Left Column: 3 Cards */}
          <div className="flex flex-col md:flex-row lg:flex-col justify-between gap-4 md:order-3 lg:order-1 md:col-span-2 lg:col-span-3">
            <Reveal delay={0} className="h-full flex-1">
              <div className="flex h-full flex-col justify-center rounded-[1.5rem] border border-border bg-card p-5 shadow-xl shadow-primary/5 transition-transform hover:-translate-y-1">
                <Briefcase className="mb-2 h-7 w-7 text-primary" />
                <div className="text-3xl font-black text-foreground">10+</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Years of Experience
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="h-full flex-1">
              <div className="flex h-full flex-col justify-center rounded-[1.5rem] border border-border bg-card p-5 shadow-xl shadow-primary/5 transition-transform hover:-translate-y-1">
                <Calendar className="mb-2 h-7 w-7 text-primary" />
                <div className="text-3xl font-black text-foreground">2016</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Serving Since
                </div>
              </div>
            </Reveal>

            <Reveal delay={200} className="h-full flex-1">
              <div className="flex h-full flex-col justify-center rounded-[1.5rem] border border-border bg-card p-5 shadow-xl shadow-primary/5 transition-transform hover:-translate-y-1">
                <Users className="mb-2 h-7 w-7 text-primary" />
                <div className="text-3xl font-black text-foreground">50+</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Happy Clients
                </div>
              </div>
            </Reveal>
          </div>

          {/* Middle Column: Tall Image */}
          <div className="md:order-1 lg:order-2 md:col-span-1 lg:col-span-4 min-h-[300px]">
            <Reveal delay={150} className="h-full">
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border-4 border-background shadow-2xl shadow-primary/10">
                <img
                  src="/why choose.jpeg"
                  alt="Why Choose Inymart Labs"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Text & List */}
          <div className="flex flex-col justify-center md:order-2 lg:order-3 md:col-span-1 lg:col-span-5 lg:py-2">
            <Reveal delay={250}>
              <div className="mb-4 flex flex-col items-start gap-1">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Why Choose Us
                </span>
                <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                  Inymart Labs
                </h2>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <h2 className="font-display text-[20px] font-extrabold leading-[30px] text-foreground text-justify lg:text-left">
                Every business is different, so we create customized digital marketing strategies based on your goals, audience, and industry.
              </h2>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="font-sans mt-4 text-base leading-relaxed text-muted-foreground text-justify lg:text-left">
                Our focus is to improve search rankings through expert web design, increase website traffic, generate quality leads, and maximize your ROI with transparent and measurable results.
              </p>
            </Reveal>

            <Reveal delay={500}>
              <div className="mt-6 grid grid-cols-1 gap-4 border-t border-border/60 pt-6 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Target className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    Customised Strategies
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    Experienced Professionals
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <BarChart3 className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    Transparent Reporting
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <TrendingUp className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    Long-Term Business Growth
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
