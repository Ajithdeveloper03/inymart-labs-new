import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import { CustomCursor } from '@/components/CustomCursor';
import { PopupProvider } from '@/components/providers/PopupProvider';
import { PopupForm } from '@/components/PopupForm';

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

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['italic', 'normal'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.inymartlabs.com'),
  title: {
    default: 'Digital Marketing Agency Tamilnadu: Your Growth Partner | Inymart Labs',
    template: '%s | Inymart Labs',
  },
  description:
    'Partner with our top-tier digital marketing agency in Tamil Nadu to unlock your business\'s true potential. Specializing in AI SEO, PPC, and localized strategies for unparalleled growth.',
  applicationName: 'Inymart Labs',
  category: 'Marketing',
  keywords: [
    'Digital Marketing Agency Tamil Nadu',
    'Digital Marketing Agency Tiruchirappalli',
    'SEO Company Tamil Nadu',
    'Local SEO',
    'AI SEO Services',
    'PPC service',
    'Social Media Marketing',
    'Best Marketing Agency in Trichy',
  ],
  authors: [{ name: 'Inymart Labs', url: 'https://www.inymartlabs.com' }],
  creator: 'Inymart Labs',
  publisher: 'Inymart Labs',
  openGraph: {
    title: 'Digital Marketing Agency Tamilnadu: Your Growth Partner',
    description:
      'Partner with our digital marketing agency in Tamil Nadu to unlock your business\'s potential.',
    url: 'https://www.inymartlabs.com',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Inymart Labs',
    images: [
      {
        url: '/logo.webp',
        width: 800,
        height: 600,
        alt: 'Inymart Labs Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency Tamilnadu: Your Growth Partner',
    description:
      'Partner with our digital marketing agency in Tamil Nadu to unlock your business\'s potential.',
    images: ['/logo.webp'],
    creator: '@inymartlabs',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.webp',
    shortcut: '/logo.webp',
    apple: '/logo.webp',
  },
  verification: {
    // google: 'your-google-verification-code', // Add your code here
    // yandex: 'yandex-verification-code', // Add your code here
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
          serif.variable,
          'font-sans bg-background text-foreground'
        )}
      >
        <PopupProvider>
          <CustomCursor />
          <div className="font-sans antialiased">
            {children}
          </div>
          <PopupForm />
        </PopupProvider>
      </body>
    </html>
  );
}
