import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Inymart Labs',
  description: 'Read our latest articles and insights on digital marketing, SEO, and web development.',
  alternates: {
    canonical: '/blog/',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
