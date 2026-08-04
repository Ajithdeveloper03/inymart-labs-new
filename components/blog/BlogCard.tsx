'use client';

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
      <Link href={`/blog/${post.slug}`} className="relative h-[220px] sm:h-[240px] overflow-hidden block shrink-0">
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
        
        <Link href={`/blog/${post.slug}`}>
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
            href={`/blog/${post.slug}`}
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
