'use client';

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
        element.id = `heading-${index}`;
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
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Table of Contents</h3>
      <ul className="space-y-3">
        {headings.map((heading) => (
          <li 
            key={heading.id}
            style={{ paddingLeft: heading.level === 3 ? '1rem' : '0' }}
          >
            <a
              href={`#${heading.id}`}
              className={`text-sm transition-colors block ${
                activeId === heading.id 
                  ? 'text-primary font-bold' 
                  : 'text-slate-600 hover:text-primary'
              }`}
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
