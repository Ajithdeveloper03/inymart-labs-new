'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { notFound } from 'next/navigation';
import { BlogDetailHero } from '@/components/blog/BlogDetailHero';
import { BlogContent } from '@/components/blog/BlogContent';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { API_BASE_URL } from '@/lib/api';
import { BlogPost } from '@/data/blogData';

function BlogDetailContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) {
      setError(true);
      setLoading(false);
      return;
    }

    const fetchPost = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/posts.php?slug=${slug}`, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data && !data.error) {
            setPost(data);
          } else {
            setError(true);
          }
        } else {
          setError(true);
        }

        const resAll = await fetch(`${API_BASE_URL}/posts.php`, { cache: 'no-store' });
        if (resAll.ok) {
          const allPosts = await resAll.json();
          setRelatedPosts(
            allPosts
              .filter((p: BlogPost) => p.slug !== slug)
              .slice(0, 3)
          );
        }
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <div className="flex-1 flex items-center justify-center">
          <p className="animate-pulse text-gray-500">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <div className="flex-1 flex flex-col items-center justify-center gap-4 py-24">
          <h1 className="text-2xl font-bold">Article not found</h1>
          <Link href="/blogs" className="text-primary hover:underline">Back to all articles</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <BlogDetailHero post={post} />
      
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Main Content Area */}
            <div className="w-full lg:w-[70%]">
              <BlogContent post={post} />
            </div>

            {/* Sidebar / Sticky TOC */}
            <div className="w-full lg:w-[30%]">
              <TableOfContents />
            </div>
            
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
    </main>
  );
}

export default function BlogDetailPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="min-h-screen" />}>
        <BlogDetailContent />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </>
  );
}
