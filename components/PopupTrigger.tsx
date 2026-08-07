'use client';

import { useEffect, useRef } from 'react';
import { usePopup } from '@/components/providers/PopupProvider';

export function PopupTrigger() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const { openPopup } = usePopup();
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          // Set a slight timeout so it doesn't feel jarring
          setTimeout(() => {
            openPopup();
          }, 500);
          
          if (triggerRef.current) {
            observer.unobserve(triggerRef.current);
          }
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [openPopup]);

  return <div ref={triggerRef} className="h-1 w-full opacity-0 pointer-events-none" aria-hidden="true" />;
}
