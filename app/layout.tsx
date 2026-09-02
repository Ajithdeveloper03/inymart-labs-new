import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
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
  metadataBase: new URL('https://inymartlabs.com'),
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
  authors: [{ name: 'Inymart Labs', url: 'https://inymartlabs.com' }],
  creator: 'Inymart Labs',
  publisher: 'Inymart Labs',
  openGraph: {
    title: 'Digital Marketing Agency Tamilnadu: Your Growth Partner',
    description:
      'Partner with our digital marketing agency in Tamil Nadu to unlock your business\'s potential.',
    url: 'https://inymartlabs.com',
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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GF90YKK688"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-GF90YKK688');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://inymartlabs.com/#organization",
                  "name": "Inymart Labs",
                  "url": "https://inymartlabs.com/",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://inymartlabs.com/wp-content/uploads/2026/08/inymart-labs-logo.png"
                  },
                  "description": "Inymart Labs is a digital marketing agency in Tamil Nadu and Tiruchirappalli offering SEO, Local SEO, AEO, GEO, social media marketing, web development, PPC, AI SEO and digital marketing services.",
                  "foundingDate": "2016",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "No.17, C3, 3rd Floor, Ayodhya Complex, Thennur High Road, Srinivasapuram, Tennur",
                    "addressLocality": "Tiruchirappalli",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "620017",
                    "addressCountry": "IN"
                  },
                  "email": "ceo@inymartlabs.com",
                  "telephone": "+91 9994723446",
                  "areaServed": [
                    {
                      "@type": "State",
                      "name": "Tamil Nadu"
                    },
                    {
                      "@type": "Country",
                      "name": "India"
                    },
                    {
                      "@type": "Country",
                      "name": "United Arab Emirates"
                    },
                    {
                      "@type": "Country",
                      "name": "United Kingdom"
                    },
                    {
                      "@type": "Country",
                      "name": "United States"
                    },
                    {
                      "@type": "Country",
                      "name": "Australia"
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://inymartlabs.com/#website",
                  "url": "https://inymartlabs.com/",
                  "name": "Inymart Labs",
                  "publisher": {
                    "@id": "https://inymartlabs.com/#organization"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://inymartlabs.com/#webpage",
                  "url": "https://inymartlabs.com/",
                  "name": "Digital Marketing Agency – Tamil Nadu | Inymart Labs",
                  "description": "Inymart Labs is a digital marketing agency in Tamil Nadu and Tiruchirappalli helping businesses improve online visibility, generate quality leads and achieve long-term growth through SEO, Local SEO, social media marketing, web development, PPC and AI SEO.",
                  "isPartOf": {
                    "@id": "https://inymartlabs.com/#website"
                  },
                  "about": {
                    "@id": "https://inymartlabs.com/#organization"
                  },
                  "publisher": {
                    "@id": "https://inymartlabs.com/#organization"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={cn(
          sans.variable,
          display.variable,
          serif.variable,
          'font-sans bg-background text-foreground'
        )}
      >
        <PopupProvider>
          <div className="font-sans antialiased">
            {children}
          </div>
          <PopupForm />
        </PopupProvider>
      </body>
    </html>
  );
}
