import { cn } from '@/lib/utils';
import { Reveal } from '@/components/Reveal';
import { Check } from 'lucide-react';

type CtaBannerProps = {
  title: string;
  points: string[];
  /** id anchor target for the consultation section */
  ctaHref?: string;
  ctaLabel?: string;
  className?: string;
  /** dark background variant */
  variant?: 'light' | 'dark' | 'accent';
  stacked?: boolean;
};

const variantStyles: Record<NonNullable<CtaBannerProps['variant']>, string> = {
  light: 'bg-secondary text-foreground border border-border',
  dark: 'bg-primary text-primary-foreground',
  accent:
    'bg-gradient-to-br from-accent to-chart-4 text-white shadow-xl shadow-accent/20',
};

/**
 * Reusable call-to-action band used across multiple sections of the homepage.
 * Each point from the document is rendered with a check mark.
 */
export function CtaBanner({
  title,
  points,
  ctaHref = '#contact',
  ctaLabel = 'Book Your Free Consultation',
  className,
  variant = 'dark',
  stacked = false,
}: CtaBannerProps) {
  return (
    <Reveal
      className={cn(
        'relative overflow-hidden rounded-[20px] px-6 py-6',
        stacked ? 'sm:px-8' : 'sm:px-8 sm:py-8 lg:px-10 lg:py-8',
        variantStyles[variant],
        className
      )}
    >
      {variant !== 'light' && (
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      )}
      <div className={cn("relative flex flex-col", !stacked ? "gap-6 lg:flex-row lg:items-center lg:justify-between" : "items-center text-center")}>
        <div className={cn("max-w-2xl", stacked && "flex flex-col items-center")}>
          <h3 className={cn("font-display font-bold tracking-tight", stacked ? "text-xl leading-6" : "text-xl sm:text-2xl lg:text-[28px] lg:leading-tight")}>
            {title}
          </h3>
          <ul className={cn("mt-3 flex flex-wrap items-center gap-x-6 gap-y-2", stacked && "justify-center")}>
            {points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm sm:text-[15px]"
              >
                <span className={variant === 'light' ? 'text-accent' : 'text-white/80'}>
                  <Check className="h-4 w-4" strokeWidth={3.5} />
                </span>
                <span className={variant === 'light' ? 'text-foreground font-medium' : 'text-white/95 font-medium'}>
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={cn("shrink-0", stacked && "mt-2")}>
          <a
            href={ctaHref}
            className={cn(
              'group inline-flex items-center justify-center text-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:shadow-lg',
              variant === 'light'
                ? 'bg-accent text-white hover:bg-accent/90 hover:shadow-accent/30'
                : variant === 'accent'
                  ? 'bg-white text-accent hover:bg-slate-50 hover:shadow-black/10'
                  : 'bg-white text-primary hover:bg-slate-50 hover:shadow-black/10'
            )}
          >
            {ctaLabel}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </Reveal>
  );
}
