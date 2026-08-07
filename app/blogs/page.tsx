'use client';

import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { Reveal } from '@/components/Reveal';
import { API_BASE_URL } from '@/lib/api';

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/posts.php`, { cache: 'no-store' })
      .then((res) => {
        if (res.ok) return res.json();
        return [];
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-[#f8fafc]">
        <BlogHero />
        
        <section className="py-16 lg:py-24">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? (
                <div className="col-span-full text-center py-12 text-gray-500">
                  <p className="animate-pulse">Loading latest articles...</p>
                </div>
              ) : posts.length === 0 ? (
                <div className="col-span-full text-center py-12 text-gray-500">
                  <p>No blog posts found. (Is the PHP backend running?)</p>
                </div>
              ) : (
                posts.map((post: any, i: number) => (
                  <Reveal key={post.id} delay={i * 50}>
                    <BlogCard post={post} />
                  </Reveal>
                ))
              )}
            </div>
            
            {posts.length > 0 && !loading && (
              <Reveal delay={200}>
                <BlogPagination />
              </Reveal>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
