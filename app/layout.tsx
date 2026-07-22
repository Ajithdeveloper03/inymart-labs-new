import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.inymartlabs.com'),
  title: 'Digital Marketing Agency Tamilnadu: Your Growth Partner',
  description:
    'Partner with our digital marketing agency in Tamil Nadu to unlock your business\'s potential. Learn how we can help you achieve your growth objectives!',
  keywords: [
    'Digital Marketing Agency Tamil Nadu',
    'Digital Marketing Agency Tiruchirappalli',
    'SEO Company Tamil Nadu',
    'Local SEO',
    'AI SEO Services',
    'PPC service',
    'Social Media Marketing',
  ],
  authors: [{ name: 'Inymart Labs' }],
  openGraph: {
    title: 'Digital Marketing Agency Tamilnadu: Your Growth Partner',
    description:
      'Partner with our digital marketing agency in Tamil Nadu to unlock your business\'s potential.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Inymart Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency Tamilnadu: Your Growth Partner',
    description:
      'Partner with our digital marketing agency in Tamil Nadu to unlock your business\'s potential.',
  },
  alternates: {
    canonical: '/',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          sans.variable,
          display.variable,
          'font-sans bg-background text-foreground'
        )}
      >
        {children}
      </body>
    </html>
  );
}
