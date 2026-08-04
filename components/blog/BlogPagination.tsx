'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

export function BlogPagination() {
  return (
    <div className="flex items-center justify-center gap-2 mt-12 pt-12 border-t border-slate-200">
      <button className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-colors" disabled>
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold shadow-md shadow-primary/20">
        1
      </button>
      
      <button className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-600 hover:text-primary hover:border-primary font-medium transition-colors">
        2
      </button>

      <span className="flex items-center justify-center w-10 h-10 text-slate-400">...</span>

      <button className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
