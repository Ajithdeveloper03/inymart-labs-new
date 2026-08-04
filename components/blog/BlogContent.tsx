'use client';

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <article 
      className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-slate-900 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-slate-800 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-primary prose-a:font-semibold hover:prose-a:text-primary/80 prose-strong:text-slate-900 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:text-slate-600 prose-li:mb-2"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
