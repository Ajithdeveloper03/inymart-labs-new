'use client';

import { BlogPost } from '@/data/blogData';
import { Reveal } from '@/components/Reveal';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock, Home, ChevronRight } from 'lucide-react';

interface BlogDetailHeroProps {
  post: BlogPost;
}

export function BlogDetailHero({ post }: BlogDetailHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex flex-col justify-center pt-32 pb-12 lg:pt-40">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${post.image}')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0c1f28]/90 via-[#0c1f28]/70 to-[#0c1f28]/95 backdrop-blur-[2px]" />

      <div className="container-x relative z-10 flex flex-col items-center justify-center text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse" />
            <span className="text-sm font-medium text-white/90 tracking-wide uppercase">{post.category}</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl mx-auto mb-8">
            {post.title}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-300 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-primary font-bold">
                IA
              </div>
              <span className="text-white">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-primary" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              {post.readingTime}
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <nav className="mt-12 flex items-center justify-center space-x-2 text-sm font-medium text-zinc-400">
            <Link href="/" className="flex items-center gap-1.5 transition-colors hover:text-primary">
              <Home className="h-4 w-4" /> Home
            </Link>
            <ChevronRight className="h-4 w-4 text-zinc-600" />
            <Link href="/blogs" className="transition-colors hover:text-primary">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4 text-zinc-600" />
            <span className="text-white">Article</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
