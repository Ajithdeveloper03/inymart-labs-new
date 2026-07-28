import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Industries } from '@/components/sections/Industries';
import { WhyDigitalMarketing } from '@/components/sections/WhyDigitalMarketing';
import { Faqs } from '@/components/sections/Faqs';
import { FinalCta } from '@/components/sections/FinalCta';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Inymart Labs',
  description:
    'Digital Marketing Agency in Tamil Nadu and Tiruchirappalli offering SEO, Local SEO, SMO, SMM, Web Analytics, Web Development, PPC, and AI SEO Services.',
  areaServed: 'Tamil Nadu, India',
  foundingDate: '2016',
  slogan: 'Your Trusted Digital Marketing Agency in Tamil Nadu',
};

export const metadata = {
  title: 'Digital Marketing Agency Tamilnadu: Your Growth Partner',
  description: "Partner with our digital marketing agency in Tamil Nadu to unlock your business's potential. Learn how we can help you achieve your growth objectives!",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Portfolio />
        <Industries />
        <WhyDigitalMarketing />
        <Faqs />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
