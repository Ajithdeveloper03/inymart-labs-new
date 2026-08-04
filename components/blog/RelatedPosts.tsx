'use client';

import { BlogPost } from '@/data/blogData';
import { BlogCard } from './BlogCard';
import { Reveal } from '@/components/Reveal';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-[#f8fafc] border-t border-slate-200 mt-16 lg:mt-24">
      <div className="container-x">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Related Articles
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Continue reading to stay updated with the latest trends and strategies.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 100}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
