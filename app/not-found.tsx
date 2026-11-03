import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight, Home, Compass, PhoneCall } from 'lucide-react';

export const metadata = {
  title: '404 - Page Not Found | Inymart Labs',
  description: 'The page you are looking for does not exist or has been moved. Explore our digital marketing services or return to the home page.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#0c0d12] px-6 py-28 text-center text-white sm:py-36">
        <div className="mx-auto max-w-xl">
          <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400">
            404 Error
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Page Not Found
          </h1>
          <p className="mt-4 text-base text-neutral-300 sm:text-lg leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let us help you find what you need.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-500/20 transition-all hover:scale-105"
            >
              <Home className="h-4 w-4" />
              Return Home
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10"
            >
              <Compass className="h-4 w-4" />
              Explore Services
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

