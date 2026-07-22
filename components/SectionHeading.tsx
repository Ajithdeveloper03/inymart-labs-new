import { cn } from '@/lib/utils';
import { Reveal } from '@/components/Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  /** light text for dark backgrounds */
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  invert = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]',
            invert
              ? 'bg-white/10 text-white/80 ring-1 ring-white/15'
              : 'bg-accent/10 text-accent ring-1 ring-accent/20'
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]',
          invert ? 'text-white' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-base leading-relaxed text-pretty sm:text-lg',
            invert ? 'text-white/70' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
