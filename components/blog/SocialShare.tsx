'use client';

import { Facebook, Twitter, Linkedin, Link as LinkIcon, Check } from 'lucide-react';
import { useState } from 'react';

export function SocialShare() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-8 mt-12 border-t border-slate-200">
      <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">Share this article:</span>
      <div className="flex items-center gap-3">
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-[#0077b5] hover:text-white transition-colors">
          <Linkedin className="w-4 h-4" />
        </button>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-[#1DA1F2] hover:text-white transition-colors">
          <Twitter className="w-4 h-4" />
        </button>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-[#1877F2] hover:text-white transition-colors">
          <Facebook className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-slate-200 mx-1" />
        <button 
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors text-sm font-medium"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <LinkIcon className="w-4 h-4" />
              Copy Link
            </>
          )}
        </button>
      </div>
    </div>
  );
}
