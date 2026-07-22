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
}: CtaBannerProps) {
  return (
    <Reveal
      className={cn(
        'relative overflow-hidden rounded-2xl px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12',
        variantStyles[variant],
        className
      )}
    >
      {variant !== 'light' && (
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      )}
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {title}
          </h3>
          <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-sm sm:text-base"
              >
                <span
                  className={cn(
                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
                    variant === 'light'
                      ? 'bg-accent/10 text-accent'
                      : 'bg-white/15 text-white'
                  )}
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className={variant === 'light' ? 'text-foreground' : 'text-white/90'}>
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="shrink-0">
          <a
            href={ctaHref}
            className={cn(
              'group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:shadow-lg',
              variant === 'light'
                ? 'bg-accent text-white hover:bg-accent/90 hover:shadow-accent/30'
                : 'bg-white text-primary hover:bg-white/90 hover:shadow-black/20'
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
