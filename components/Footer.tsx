import Link from 'next/link';
import { TrendingUp, Mail, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS, SITE, SERVICES } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();
  const serviceLinks = SERVICES.slice(0, 6).map((s) => s.title);

  return (
    <footer 
      className="relative border-t border-white/10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/footer.png')" }}
    >
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="container-x py-14 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-2.5">
              <img
                src="/logo.webp"
                alt="Inymart Labs"
                className="h-10 w-auto"
              />
            </Link>
            <p className="font-sans mt-5 max-w-sm text-sm leading-relaxed text-white/80">
              A trusted Digital Marketing Agency in Tamil Nadu and leading
              Digital Marketing Agency in Tiruchirappalli. We help businesses
              improve online visibility, generate quality leads, and achieve
              long-term growth through result-driven digital marketing
              strategies.
            </p>
            <ul className="mt-6 flex flex-col gap-2.5 text-sm text-white/80">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-primary" />
                {SITE.location}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary" />
                {SITE.email}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary" />
                {SITE.phone}
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="font-sans text-xs text-white/60">
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/60">
            Digital Marketing Agency in Tamil Nadu &amp; Tiruchirappalli
          </p>
        </div>
      </div>
    </footer>
  );
}
