import {
  Search,
  MapPin,
  Share2,
  Megaphone,
  BarChart3,
  Code2,
  Lightbulb,
  Rocket,
  Target,
  Sparkles,
  GraduationCap,
  HeartPulse,
  Building2,
  Factory,
  ShoppingBag,
  ShoppingCart,
  UtensilsCrossed,
  Briefcase,
  Zap,
  PenTool,
  type LucideIcon,
} from 'lucide-react';

export const SITE = {
  name: 'Inymart Labs',
  tagline: 'Digital Marketing Agency in Tamil Nadu',
  location: 'No.17, C3, 3rd Floor, Ayodhya Complex, Thennur High Road, Srinivasapuram, Tennur, Tiruchirappalli, Tamil Nadu 620017.',
  email: 'ceo@inymartlabs.com',
  phone: '+91 9994723446',
  established: '2016',
} as const;

export const HERO_STATS = [
  { value: '10+', label: 'Years of Experience' },
  { value: '2016', label: 'Serving Since' },
  { value: '50+', label: 'Happy Clients' },
] as const;

export const TRUST_BADGES = [
  '10+ Years of Experience',
  'Serving Since 2016',
  '50+ Happy Clients',
  'Customised Strategies',
  'Experienced Professionals',
  'Transparent Reporting',
  'Long-Term Business Growth',
] as const;

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    title: 'SEO',
    description:
      'Improve search rankings and organic visibility with data-driven search engine optimisation.',
    icon: Search,
  },
  {
    title: 'Local SEO',
    description:
      'Appear in Google Search and Google Maps where nearby customers are looking for you.',
    icon: MapPin,
  },
  {
    title: 'SMO',
    description:
      'Build a strong, consistent social media presence that grows brand trust and reach.',
    icon: Share2,
  },
  {
    title: 'SMM',
    description:
      'Engage your audience with strategic social media marketing campaigns that convert.',
    icon: Megaphone,
  },
  {
    title: 'Web Analytics',
    description:
      'Turn raw data into decisions with clear analytics and transparent performance reporting.',
    icon: BarChart3,
  },
  {
    title: 'Web Development',
    description:
      'Fast, responsive, SEO-friendly websites designed to rank and convert from day one.',
    icon: Code2,
  },
  {
    title: 'Digital Marketing Consulting',
    description:
      'Get expert guidance to shape a clear, measurable digital growth roadmap for your business.',
    icon: Lightbulb,
  },
  {
    title: 'Digital Marketing Agency',
    description:
      'Complete, end-to-end digital marketing solutions tailored to your goals and budget.',
    icon: Rocket,
  },
  {
    title: 'PPC Service',
    description:
      'Maximise ROI with targeted pay-per-click campaigns engineered for qualified leads.',
    icon: Target,
  },
  {
    title: 'AI SEO Services',
    description:
      'Stay ahead in AI-powered search platforms with optimised, future-ready content strategies.',
    icon: Sparkles,
  },
];

export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; href: string; children?: NavLink[] };

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const NAV_LINKS: NavGroup[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: SERVICES.map((s) => ({
      label: s.title,
      href: `/services/${slugify(s.title)}`,
    })),
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
];

export const BRANDS = [
  'Covai Tech Park',
  'Ellora',
  'SG Education (Sarathi Groups)',
  'SGNL (Sarathi Groups Nidhi Limited)',
  'Lesoko',
  'Arsen Interiors',
] as const;

export type Industry = {
  name: string;
  icon: LucideIcon;
};

export const INDUSTRIES: Industry[] = [
  { name: 'Educational Institutions', icon: GraduationCap },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Real Estate', icon: Building2 },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'E-commerce', icon: ShoppingCart },
  { name: 'Hospitality', icon: UtensilsCrossed },
  { name: 'Corporate Companies', icon: Briefcase },
  { name: 'Startups', icon: Zap },
  { name: 'Professional Services', icon: PenTool },
];

export const DIGITAL_MARKETING_CHANNELS = [
  'SEO',
  'Local SEO',
  'Website Development',
  'AI Search Optimization',
  'Performance Marketing',
  'Social Media Marketing',
] as const;

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: 'Why should I choose Inymart Labs for digital marketing?',
    a: 'Inymart Labs combines 10+ years of experience, customized strategies, transparent reporting, and result-driven marketing to help businesses improve their online presence, generate quality leads, and achieve sustainable growth.',
  },
  {
    q: 'What digital marketing services do you offer?',
    a: 'We provide complete digital marketing solutions, including SEO, Local SEO, AI Search Optimization, Website Design & Development, Social Media Marketing, Content Marketing, Google Business Profile Optimization, and Branding Services.',
  },
  {
    q: 'Do you work with startups and small businesses?',
    a: 'Yes. We work with startups, small businesses, SMEs, corporate companies, educational institutions, healthcare providers, and eCommerce businesses by creating strategies that fit their goals and budget.',
  },
  {
    q: 'How long does SEO take to show results?',
    a: 'SEO is a long-term investment. Depending on your industry, competition, and website condition, noticeable improvements usually take 3 to 6 months, while continuous optimisation delivers long-term growth.',
  },
  {
    q: 'What is Local SEO, and why is it important?',
    a: 'Local SEO helps your business appear in Google Search and Google Maps when customers search for services near them. It improves local visibility, attracts nearby customers, and increases enquiries.',
  },
  {
    q: 'Can you help improve my Google Business Profile ranking?',
    a: 'Yes. We optimize your Google Business Profile by improving business information, local citations, reviews, keywords, geo-tagging, and local SEO strategies to enhance your Google Maps visibility.',
  },
  {
    q: 'Do you provide customised digital marketing packages?',
    a: 'Yes. We offer Basic, Premium, and Ecommerce Packages, and we can also create customised digital marketing solutions based on your business objectives, industry, and budget.',
  },
  {
    q: 'How do you measure the success of a digital marketing campaign?',
    a: 'We track important performance metrics such as website traffic, keyword rankings, lead generation, conversions, user engagement, and return on investment (ROI) to measure campaign success.',
  },
  {
    q: 'Why is digital marketing important for my business?',
    a: 'Digital marketing helps your business increase online visibility, reach the right audience, build brand credibility, generate qualified leads, improve customer engagement, and grow revenue in today\'s competitive digital landscape.',
  },
  {
    q: 'How can I get started with Inymart Labs?',
    a: 'Getting started is simple. Contact our team for a free consultation, discuss your business goals, receive a customized digital marketing strategy, and let our experts help you achieve measurable growth in your business online.',
  },
];
