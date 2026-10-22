'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LocalSeoRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/services/advance-local-seo/');
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <meta httpEquiv="refresh" content="0; url=/services/advance-local-seo/" />
      <p className="text-sm text-zinc-400">
        Redirecting to <a href="/services/advance-local-seo/" className="text-orange-500 underline">Advance Local SEO</a>...
      </p>
    </div>
  );
}