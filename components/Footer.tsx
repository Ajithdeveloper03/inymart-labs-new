import Link from 'next/link';
import { TrendingUp, Mail, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS, SITE, SERVICES } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();
  const serviceLinks = SERVICES.slice(0, 6).map((s) => s.title);

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x py-14">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-2.5">
              <img
                src="/new/logo.webp"
                alt="Inymart Labs"
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A trusted Digital Marketing Agency in Tamil Nadu and leading
              Digital Marketing Agency in Tiruchirappalli. We help businesses
              improve online visibility, generate quality leads, and achieve
              long-term growth through result-driven digital marketing
              strategies.
            </p>
            <ul className="mt-6 flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-accent" />
                {SITE.location}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent" />
                {SITE.email}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent" />
                {SITE.phone}
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Digital Marketing Agency in Tamil Nadu &amp; Tiruchirappalli
          </p>
        </div>
      </div>
    </footer>
  );
}
