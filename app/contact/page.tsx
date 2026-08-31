import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactBanner } from '@/components/contact/ContactBanner';
import { ContactInfoAndForm } from '@/components/contact/ContactInfoAndForm';
import { ContactMap } from '@/components/contact/ContactMap';

export const metadata: Metadata = {
  alternates: {
    canonical: '/contact/',
  },
  title: 'Contact Us | Inymart Labs - Digital Marketing Agency',
  description: 'Get in touch with Inymart Labs. We are here to help you with your digital marketing, SEO, web development, and more.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-[#f8f9fa]">
        <ContactBanner />
        <ContactInfoAndForm />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}
