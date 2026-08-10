import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS, SITE, SERVICES } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();
  const serviceLinks = SERVICES.slice(0, 6).map((s) => s.title);

  return (
    <footer 
      className="relative border-t border-white/10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/new/footer.png')" }}
    >
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="container-x py-14 relative z-10">
        <div className="grid gap-10 md:gap-6 lg:gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
          {/* Brand */}
          <div className="flex flex-col h-full">
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src="/new/logo.webp"
                alt="Inymart Labs"
                className="h-10 w-auto"
              />
            </Link>
            <p className="font-sans mt-5 max-w-sm text-sm leading-relaxed text-white/80 text-justify">
              A trusted Digital Marketing Agency in Tamil Nadu and leading
              Digital Marketing Agency in Tiruchirappalli. We help businesses
              improve online visibility, generate quality leads, and achieve
              long-term growth through result-driven digital marketing
              strategies.
            </p>
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

          {/* Contact & Socials */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>{SITE.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>{SITE.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>{SITE.phone}</span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/people/Inymart-Labs/61583856676865/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#1877F2] hover:scale-110" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/inymart_labs/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#E4405F] hover:scale-110" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/company/inymartlabs/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#0A66C2] hover:scale-110" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://www.youtube.com/@InymartLabs" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#FF0000] hover:scale-110" aria-label="YouTube">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
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
