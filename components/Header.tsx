'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { NAV_LINKS, SERVICES, slugify } from '@/lib/content';
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
        <div className="relative w-full bg-orange-600 px-4 py-2.5 text-white shadow-sm transition-all duration-300 font-sans">
          <div className="flex flex-wrap items-center justify-center text-[11px] sm:text-xs font-medium gap-x-2 gap-y-1.5 text-center px-6 sm:px-10">
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              <Sparkles className="h-2.5 w-2.5 text-amber-200" /> Trusted Agency
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
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <div
        className={cn(
          'w-full transition-all duration-300 backdrop-blur-md font-sans',
          scrolled
            ? 'border-b border-neutral-200/80 py-3 shadow-sm bg-white/95'
            : 'border-b border-white/10 py-4 bg-transparent'
        )}
      >
        <div className="container-x flex items-center justify-between gap-4 xl:gap-6">
          {/* Brand Logo */}
          <Link href="#home" className="group flex items-center gap-2.5">
            <img
              src="/new/logo.webp"
              alt="Inymart Labs"
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Navigation links */}
          <nav className="hidden items-center xl:gap-8 xl:flex">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="group relative">
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center gap-1 text-[14px] font-medium transition-colors duration-200 py-2',
                      scrolled ? 'text-neutral-600 hover:text-neutral-900' : 'text-white/90 hover:text-white'
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown / Mega panel - Visually stunning with large bold text and neat image containers */}
                  <div className="invisible absolute left-1/2 top-full z-50 w-[780px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-2xl shadow-neutral-900/10 backdrop-blur-xl">
                      <div className="mb-4 flex items-center justify-between border-b border-neutral-100 pb-3">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                          Our Digital Marketing Services
                        </span>
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-1 text-xs font-bold text-neutral-900 hover:text-orange-600 transition-colors"
                        >
                          View all Services <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                      
                      <ul className="grid grid-cols-3 gap-4">
                        {SERVICES.map((service) => {
                          const href = `/services/${slugify(service.title)}`;
                          // Map each service to a highly relevant free Unsplash image
                          const serviceImages: Record<string, string> = {
                            'SEO': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=120&h=120&fit=crop&q=80',
                            'Local SEO': 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=120&h=120&fit=crop&q=80',
                            'SMO': 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=120&h=120&fit=crop&q=80',
                            'SMM': 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=120&h=120&fit=crop&q=80',
                            'Web Analytics': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=120&fit=crop&q=80',
                            'Web Development': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=120&h=120&fit=crop&q=80',
                            'Digital Marketing Consulting': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=120&h=120&fit=crop&q=80',
                            'Digital Marketing Service': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=120&fit=crop&q=80',
                            'PPC Service': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=120&h=120&fit=crop&q=80',
                            'AI SEO Services': 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=120&h=120&fit=crop&q=80'
                          };
                          const imgUrl = serviceImages[service.title] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=120&fit=crop&q=80';

                          return (
                            <li key={service.title}>
                              <Link
                                href={href}
                                className="group/item flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-neutral-100 hover:bg-neutral-50/70"
                              >
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl overflow-hidden bg-neutral-100 shadow-sm transition-transform duration-300 group-hover/item:scale-105">
                                  <img
                                    src={imgUrl}
                                    alt={service.title}
                                    className="h-full w-full object-cover"
                                  />
                                </span>
                                <span className="text-[14px] font-extrabold tracking-tight text-neutral-800 transition-colors group-hover/item:text-orange-600 leading-snug">
                                  {service.title}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'text-[14px] font-medium transition-colors duration-200',
                    scrolled ? 'text-neutral-600 hover:text-neutral-900' : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right CTA Button: Exact pill shape with outline border & arrow icon */}
          <div className="hidden xl:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-orange-600 bg-orange-600 px-5 py-2 text-[12px] font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:shadow-md"
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
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full border transition-colors xl:hidden',
              scrolled
                ? 'border-neutral-200 bg-white text-neutral-800'
                : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
            )}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={cn(
            'xl:hidden overflow-y-auto transition-[max-height,opacity] duration-300 ease-in-out',
            open ? 'max-h-[calc(100vh-110px)] opacity-100' : 'max-h-0 opacity-0'
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
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-orange-600 bg-orange-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-orange-500"
            >
              FREE CONSULTATION <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
