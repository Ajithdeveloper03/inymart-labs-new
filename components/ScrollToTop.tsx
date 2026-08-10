'use client';

import { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex flex-col items-center transition-all duration-500',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      )}
    >
      <button
        type="button"
        onClick={scrollToTop}
        className="relative z-10 flex h-14 w-11 items-center justify-center rounded-[50%] bg-orange-600 text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Scroll to top"
      >
        <Rocket className="h-6 w-6 mb-1 -rotate-45" strokeWidth={2.5} />
      </button>
      {/* Oval Shadow below */}
      <div className="mt-1 h-3 w-14 rounded-[50%] bg-orange-600/40 blur-[1px]" />
    </div>
  );
}
