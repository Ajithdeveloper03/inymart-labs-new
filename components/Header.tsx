'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { NAV_LINKS } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {/* Top Announcement Banner Bar - Orange background matching reference image */}
      {bannerVisible && (
        <div className="relative w-full bg-orange-600 px-4 py-2 text-white shadow-sm transition-all duration-300">
          <div className="flex items-center justify-center text-xs font-medium gap-2 sm:gap-3 text-center pr-8">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              <Sparkles className="h-3 w-3 text-amber-200" /> Trusted Agency
            </span>
            <span className="font-semibold text-white/95">
              Digital Marketing Agency in Tamil Nadu &amp; Tiruchirappalli
            </span>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1 font-bold text-white underline underline-offset-4 hover:text-amber-100 transition-colors"
            >
              Get Free Consultation
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          {/* Right Close Button - absolutely positioned */}
          <button
            type="button"
            aria-label="Close announcement"
            onClick={() => setBannerVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <div
        className={cn(
          'w-full transition-all duration-300 bg-white/90 backdrop-blur-md',
          scrolled
            ? 'border-b border-neutral-200/80 py-3 shadow-sm bg-white/95'
            : 'border-b border-neutral-100/60 py-4'
        )}
      >
        <div className="container-x flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <Link href="#home" className="group flex items-center gap-2.5">
            <img
              src="/logo.webp"
              alt="Inymart Labs"
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Navigation links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="group relative">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-[14px] font-medium text-neutral-600 transition-colors duration-200 hover:text-neutral-900"
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown / Mega panel */}
                  <div className="invisible absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-xl shadow-neutral-900/5 backdrop-blur-xl">
                      <div className="mb-3 flex items-center justify-between border-b border-neutral-100 pb-2.5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                          Digital Marketing Services
                        </span>
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 hover:text-primary"
                        >
                          View all <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                      <ul className="grid grid-cols-2 gap-1.5">
                        {link.children.map((child, i) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="group/item flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 transition-all duration-200 hover:border-neutral-200 hover:bg-neutral-50"
                            >
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 font-display text-[11px] font-bold text-neutral-700 transition-colors group-hover/item:bg-primary group-hover/item:text-white">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className="text-xs font-semibold text-neutral-800 transition-colors group-hover/item:text-neutral-900">
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
                  className="text-[14px] font-medium text-neutral-600 transition-colors duration-200 hover:text-neutral-900"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right CTA Button: Exact pill shape with outline border & arrow icon */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-neutral-950 px-5 py-2 text-[12px] font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-800 hover:shadow-md"
            >
              FREE CONSULTATION
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out',
            open ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <nav className="container-x flex flex-col gap-1 border-t border-neutral-100 pb-6 pt-4">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform duration-300',
                        mobileServicesOpen && 'rotate-180'
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-[max-height] duration-300 ease-in-out',
                      mobileServicesOpen ? 'max-h-[60vh]' : 'max-h-0'
                    )}
                  >
                    <ul className="ml-3 flex flex-col gap-1 border-l border-neutral-200 pl-3 my-1">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
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
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-sm"
            >
              FREE CONSULTATION <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
