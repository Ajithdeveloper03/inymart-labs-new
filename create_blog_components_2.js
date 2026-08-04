const fs = require('fs');
const path = require('path');

const componentsDir = 'c:\\Users\\user\\Desktop\\inymart\\iny lab\\components\\blog';
const pagesDir = 'c:\\Users\\user\\Desktop\\inymart\\iny lab\\app\\blog';
const slugDir = 'c:\\Users\\user\\Desktop\\inymart\\iny lab\\app\\blog\\[slug]';

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}
if (!fs.existsSync(slugDir)) {
  fs.mkdirSync(slugDir, { recursive: true });
}

// 5. app/blog/page.tsx (Blog Listing Page)
const blogListingPage = \`import { BlogHero } from '@/components/blog/BlogHero';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { blogData } from '@/data/blogData';
import { Reveal } from '@/components/Reveal';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <BlogHero />
      
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post, i) => (
              <Reveal key={post.id} delay={i * 50}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={200}>
            <BlogPagination />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
\`;
fs.writeFileSync(path.join(pagesDir, 'page.tsx'), blogListingPage);

// 6. BlogDetailHero
const blogDetailHeroContent = \`'use client';

import { BlogPost } from '@/data/blogData';
import { Reveal } from '@/components/Reveal';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock, User } from 'lucide-react';

interface BlogDetailHeroProps {
  post: BlogPost;
}

export function BlogDetailHero({ post }: BlogDetailHeroProps) {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              {post.category}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-8">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-primary font-bold">
                  IA
                </div>
                <span className="text-white">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-slate-400" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                {post.readingTime}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
\`;
fs.writeFileSync(path.join(componentsDir, 'BlogDetailHero.tsx'), blogDetailHeroContent);

// 7. TableOfContents
const tocContent = \`'use client';

import { useEffect, useState } from 'react';

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>('');
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    // Find all h2 and h3 in the article
    const elements = Array.from(document.querySelectorAll('article h2, article h3'));
    
    const parsedHeadings = elements.map((element, index) => {
      // Add id to element if it doesn't have one
      if (!element.id) {
        element.id = \`heading-\${index}\`;
      }
      return {
        id: element.id,
        text: element.textContent || '',
        level: element.tagName === 'H2' ? 2 : 3
      };
    });

    setHeadings(parsedHeadings);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -60% 0%' }
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hidden lg:block">
      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Table of Contents</h3>
      <ul className="space-y-3">
        {headings.map((heading) => (
          <li 
            key={heading.id}
            style={{ paddingLeft: heading.level === 3 ? '1rem' : '0' }}
          >
            <a
              href={\`#\${heading.id}\`}
              className={\`text-sm transition-colors block \${
                activeId === heading.id 
                  ? 'text-primary font-bold' 
                  : 'text-slate-600 hover:text-primary'
              }\`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
\`;
fs.writeFileSync(path.join(componentsDir, 'TableOfContents.tsx'), tocContent);

console.log('Created app/blog/page.tsx, BlogDetailHero, and TableOfContents.');
