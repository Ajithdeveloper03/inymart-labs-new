const fs = require('fs');
const path = require('path');

const componentsDir = 'c:\\Users\\user\\Desktop\\inymart\\iny lab\\components\\blog';

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// 2. BlogHero
const blogHeroContent = `'use client';

import { Reveal } from '@/components/Reveal';
import { ChevronRight, Home, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

export function BlogHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#f8fafc]">
      <div className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      
      <div className="container-x relative z-10 flex flex-col items-center justify-center text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <LayoutGrid className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold tracking-wider text-slate-700 uppercase">Insights & Articles</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl max-w-3xl mx-auto mb-6">
            Explore the Latest in Digital Marketing & Tech
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Expert strategies, industry updates, and actionable guides to help your business thrive in the digital landscape.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <nav className="flex items-center justify-center space-x-2 text-sm font-medium text-slate-500">
            <Link href="/" className="flex items-center gap-1.5 transition-colors hover:text-primary">
              <Home className="h-4 w-4" /> Home
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <span className="text-slate-900">Blog</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(componentsDir, 'BlogHero.tsx'), blogHeroContent);

// 3. BlogCard
const blogCardContent = `'use client';

import { BlogPost } from '@/data/blogData';
import Link from 'next/link';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image */}
      <Link href={\`/blog/\${post.slug}\`} className="relative h-[220px] sm:h-[240px] overflow-hidden block shrink-0">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-primary rounded-full shadow-sm">
            {post.category}
          </span>
        </div>
      </Link>
      
      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
          <div className="flex items-center gap-1.5">
            <CalendarDays className="w-3.5 h-3.5" />
            {post.date}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </div>
        </div>
        
        <Link href={\`/blog/\${post.slug}\`}>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Footer */}
        <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-primary font-bold text-sm">
              IA
            </div>
            <span className="text-sm font-semibold text-slate-900">{post.author}</span>
          </div>
          
          <Link 
            href={\`/blog/\${post.slug}\`}
            className="flex items-center gap-1.5 text-sm font-bold text-primary group/link"
          >
            Read Article
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
`;
fs.writeFileSync(path.join(componentsDir, 'BlogCard.tsx'), blogCardContent);

// 4. BlogPagination
const blogPaginationContent = `'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

export function BlogPagination() {
  return (
    <div className="flex items-center justify-center gap-2 mt-12 pt-12 border-t border-slate-200">
      <button className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-colors" disabled>
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold shadow-md shadow-primary/20">
        1
      </button>
      
      <button className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-600 hover:text-primary hover:border-primary font-medium transition-colors">
        2
      </button>

      <span className="flex items-center justify-center w-10 h-10 text-slate-400">...</span>

      <button className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
`;
fs.writeFileSync(path.join(componentsDir, 'BlogPagination.tsx'), blogPaginationContent);

console.log('Created BlogHero, BlogCard, and BlogPagination.');
