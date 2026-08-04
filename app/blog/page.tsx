import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { blogData } from '@/data/blogData';
import { Reveal } from '@/components/Reveal';

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-[#f8fafc]">
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
      <Footer />
      <ScrollToTop />
    </>
  );
}
