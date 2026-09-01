export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML format to support rich text and headings
  category: string;
  author: string;
  date: string;
  readingTime: string;
  image: string;
  imageAlt?: string;
  schema?: string;
}

export const blogData: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-ai-seo',
    title: 'The Future of AI SEO: How Artificial Intelligence is Reshaping Search',
    excerpt: 'Discover how AI is revolutionizing search engine optimization, from generative AI in search results to automated content strategies that drive real growth.',
    content: `
      <h2>The Rise of AI in Search</h2>
      <p>Search engines are evolving faster than ever. With the integration of AI-powered features like Google's Search Generative Experience (SGE), traditional ranking factors are being augmented by machine learning algorithms that understand user intent on a conversational level.</p>
      
      <h2>Why Your Strategy Needs to Change</h2>
      <p>Keyword stuffing and thin content have been dead for years, but AI makes search engines even smarter at detecting low-value content. Now, the focus is entirely on <strong>E-E-A-T</strong> (Experience, Expertise, Authoritativeness, Trustworthiness). AI tools can help analyze data, but human expertise is what truly ranks.</p>
      
      <h3>1. Embracing Generative Answers</h3>
      <p>Users are increasingly getting direct answers without clicking a link. To survive, websites must optimize for long-tail, conversational queries and aim to be the source material that AI quotes.</p>
      
      <h3>2. Automating the Routine</h3>
      <p>While AI shouldn't write your final copy unchecked, it is incredible for automating routine SEO tasks like meta description generation, keyword clustering, and technical site audits.</p>
      
      <h2>The Inymart Labs Approach</h2>
      <p>At Inymart Labs, we blend cutting-edge AI tools with deep human expertise to craft AI SEO strategies that keep businesses in Tamil Nadu ahead of algorithm updates.</p>
    `,
    category: 'AI SEO',
    author: 'Inymart Admin',
    date: 'August 14, 2026',
    readingTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200'
  }
];
