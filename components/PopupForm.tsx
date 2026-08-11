'use client';

import { useState, useEffect } from 'react';
import { usePopup } from '@/components/providers/PopupProvider';
import { SERVICES } from '@/lib/content';
import { X, Send, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function PopupForm() {
  const { isPopupOpen, closePopup, openPopup } = usePopup();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data = {
      formType: 'Popup Form',
      fullName: formData.get('fullName'),
      message: formData.get('message'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      service: formData.get('service'),
    };

    try {
      const response = await fetch('/new/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ type: 'success', message: 'Your enquiry has been sent successfully!' });
        form.reset();
        setTimeout(() => {
          setStatus(null);
          closePopup();
        }, 3000);
      } else {
        setStatus({ type: 'error', message: result.message || 'Failed to send enquiry.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    
    // Check if we've already shown the popup in this session
    const hasShownPopup = sessionStorage.getItem('hasAutoShownPopup');
    
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        openPopup();
        sessionStorage.setItem('hasAutoShownPopup', 'true');
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [openPopup]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPopupOpen]);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500",
        isPopupOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={closePopup}
      />
      
      {/* Modal */}
      <div 
        className={cn(
          "relative w-full max-w-lg bg-[#0c0d12] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,112,0,0.15)] border border-white/10 transition-all duration-500 transform",
          isPopupOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        )}
      >
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full bg-orange-600/20 blur-[80px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] rounded-full bg-blue-600/15 blur-[80px] pointer-events-none mix-blend-screen" />
        
        {/* Close Button */}
        <button 
          type="button"
          onClick={closePopup}
          className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative z-10 p-6 sm:p-8">
          <div className="mb-6 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Get Your <span className="text-gradient">Free Consultation</span>
            </h2>
            <p className="text-sm text-neutral-400">
              Fill out the form below and our experts will get back to you shortly.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {status && (
              <div className={cn("p-3 rounded-xl text-sm font-medium", status.type === 'success' ? "bg-green-500/20 text-green-200 border border-green-500/30" : "bg-red-500/20 text-red-200 border border-red-500/30")}>
                {status.message}
              </div>
            )}
            
            <div className="space-y-1">
              <label htmlFor="fullName" className="text-xs font-semibold text-neutral-300 ml-1">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-semibold text-neutral-300 ml-1">Message</label>
                <input 
                  type="text" 
                  id="message" 
                  name="message"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  placeholder="Your Message"
                  required
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="phone" className="text-xs font-semibold text-neutral-300 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-semibold text-neutral-300 ml-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                placeholder="Your Email Address"
                required
              />
            </div>

            <div className="space-y-1 relative">
              <label htmlFor="service" className="text-xs font-semibold text-neutral-300 ml-1">Select Service</label>
              <div className="relative">
                <select 
                  id="service" 
                  name="service"
                  className="w-full bg-[#13141a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all appearance-none"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-neutral-500">Select a Service</option>
                  {SERVICES.map(s => (
                    <option key={s.title} value={s.title}>{s.title}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff7000] to-[#e64000] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,112,0,0.3)] hover:shadow-[0_0_30px_rgba(255,112,0,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                {!isSubmitting && <Send className="h-4 w-4" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
