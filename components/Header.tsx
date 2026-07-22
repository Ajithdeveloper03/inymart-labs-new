'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, TrendingUp, ChevronDown, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // 80vh is the banner height, so we use 75vh to trigger slightly before it ends
      const threshold = window.innerHeight * 0.75;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/70 bg-background/85 py-3 backdrop-blur-xl shadow-sm'
          : 'border-b border-transparent py-5 dark text-foreground'
      )}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <Link href="#home" className="group flex items-center gap-2.5">
          <img
            src="/logo.webp"
            alt="Inymart Labs"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop nav with Services mega-menu */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                {/* Mega-menu panel */}
                <div className="invisible absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-border bg-background/95 p-5 shadow-2xl shadow-primary/10 backdrop-blur-xl">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                        Our Digital Marketing Services
                      </span>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-accent"
                      >
                        View all <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                    <ul className="grid grid-cols-2 gap-1.5">
                      {link.children.map((child, i) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="group/item flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all duration-200 hover:border-border hover:bg-secondary"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-display text-xs font-extrabold text-primary transition-colors duration-200 group-hover/item:bg-accent group-hover/item:text-white">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="text-sm font-semibold text-foreground">
                              {child.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-accent/40"
          >
            Free Consultation
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-smooth',
          open ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container-x flex flex-col gap-1 overflow-y-auto pb-6 pt-4">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 transition-transform duration-300',
                      mobileServicesOpen && 'rotate-180'
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-[max-height] duration-300 ease-smooth',
                    mobileServicesOpen ? 'max-h-[60vh]' : 'max-h-0'
                  )}
                >
                  <ul className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
          >
            Free Consultation &rarr;
          </a>
        </nav>
      </div>
    </header>
  );
}
