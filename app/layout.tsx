import './styles.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import { CustomCursor } from '@/components/CustomCursor';

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['italic', 'normal'],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
            --font-display: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
          }
          body, p, span, a, button, input, textarea, select, table, th, td, div, li, ul, label {
            font-family: var(--font-sans) !important;
          }
          h1, h2, h3, h4, h5, h6, .font-display {
            font-family: var(--font-display) !important;
          }
        `}} />
      </head>
      <body
        className={cn(
          serif.variable,
          'font-sans bg-background text-foreground'
        )}
      >
        <CustomCursor />
        <div className="font-sans antialiased">
          {children}
        </div>
      </body>
    </html>
  );
}
