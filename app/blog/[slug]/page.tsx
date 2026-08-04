import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { blogData } from '@/data/blogData';
import { notFound } from 'next/navigation';
import { BlogDetailHero } from '@/components/blog/BlogDetailHero';
import { BlogContent } from '@/components/blog/BlogContent';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { RelatedPosts } from '@/components/blog/RelatedPosts';

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get 3 random/related posts for the related section
  const relatedPosts = blogData
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-white">
        <BlogDetailHero post={post} />
        
        <section className="py-16 lg:py-24">
          <div className="container-x">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              
              {/* Main Content Area */}
              <div className="w-full lg:w-[70%]">
                <BlogContent content={post.content} />
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
      <Footer />
      <ScrollToTop />
    </>
  );
}
