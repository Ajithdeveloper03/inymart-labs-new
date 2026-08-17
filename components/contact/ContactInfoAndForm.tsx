'use client';
import { useState } from 'react';

import { Reveal } from '@/components/Reveal';
import { 
  MapPin, Phone, Mail,
  Instagram, Facebook, Linkedin, Youtube
} from 'lucide-react';

export function ContactInfoAndForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data = {
      formType: 'Contact Form',
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api/contact.php';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      let result;
      const text = await response.text();
      try {
        result = JSON.parse(text);
      } catch (e) {
        console.error('Failed to parse JSON response. Status:', response.status, 'Body:', text);
        throw new Error('Invalid API response');
      }

      if (response.ok && result.success) {
        setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
        form.reset();
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus({ type: 'error', message: result?.message || 'Failed to send message.' });
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Optional: Subtle map/dotted background pattern could go here */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Information */}
          <div className="flex flex-col">
            <Reveal>
              <div className="text-[#ff6b35] text-sm font-medium mb-3 tracking-wide">
                Contact Us
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#33353b] mb-4 font-display">
                Say Hello
              </h2>
              <p className="text-gray-500 text-[15px] mb-12">
                Your email address will not be published. We promise not to spam!
              </p>
            </Reveal>

            <div className="flex flex-col gap-10">
              {/* Address */}
              <Reveal delay={100}>
                <div className="flex items-start gap-6 group">
                  {/* Icon Container with Dashed Border */}
                  <div className="relative flex items-center justify-center w-[72px] h-[72px] shrink-0">
                    <div className="absolute inset-0 border border-dashed border-[#ff6b35] rounded-full animate-[spin_20s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-14 h-14 bg-[#ff6b35] rounded-full flex items-center justify-center relative z-10 text-white shadow-md">
                      <MapPin className="w-6 h-6" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-xl font-bold text-[#33353b] mb-2 font-display">Address</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      No.17, C3, 3rd Floor, Ayodhya Complex, Thennur High Road, Srinivasapuram, Tennur, Tiruchirappalli, Tamil Nadu 620017
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Email */}
              <Reveal delay={200}>
                <div className="flex items-start gap-6 group">
                  <div className="relative flex items-center justify-center w-[72px] h-[72px] shrink-0">
                    <div className="absolute inset-0 border border-dashed border-[#ff6b35] rounded-full animate-[spin_20s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-14 h-14 bg-[#ff6b35] rounded-full flex items-center justify-center relative z-10 text-white shadow-md">
                      <Mail className="w-6 h-6" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-xl font-bold text-[#33353b] mb-2 font-display">Email</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      <a href="mailto:ceo@inymartlabs.com" className="hover:text-[#ff6b35] transition-colors">ceo@inymartlabs.com</a>
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Phone */}
              <Reveal delay={300}>
                <div className="flex items-start gap-6 group">
                  <div className="relative flex items-center justify-center w-[72px] h-[72px] shrink-0">
                    <div className="absolute inset-0 border border-dashed border-[#ff6b35] rounded-full animate-[spin_20s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-14 h-14 bg-[#ff6b35] rounded-full flex items-center justify-center relative z-10 text-white shadow-md">
                      <Phone className="w-6 h-6" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-xl font-bold text-[#33353b] mb-2 font-display">Phone</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      <a href="tel:+919994723446" className="hover:text-[#ff6b35] transition-colors">+91 99947 23446</a>
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Social Media Icons */}
              <Reveal delay={400}>
                <div className="mt-4 flex gap-4 ml-[72px] pl-6">
                  <a href="https://www.facebook.com/people/Inymart-Labs/61583856676865/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                    <Facebook className="w-5 h-5 fill-current" strokeWidth={0} />
                  </a>
                  <a href="https://www.instagram.com/inymart_labs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                    <Instagram className="w-5 h-5" strokeWidth={2} />
                  </a>
                  <a href="https://www.youtube.com/@InymartLabs" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                    <Youtube className="w-5 h-5" strokeWidth={2} />
                  </a>
                  <a href="https://www.linkedin.com/company/inymartlabs/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                    <Linkedin className="w-5 h-5 fill-current" strokeWidth={0} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex flex-col h-full lg:max-w-[540px] w-full lg:ml-auto">
            <Reveal delay={200} className="h-full">
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-center relative overflow-hidden">
                {/* Subtle top decoration */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ff6b35] to-[#ff8c61]"></div>
                
                <div className="text-[#ff6b35] text-sm font-bold mb-3 tracking-wider uppercase">
                  Have a Question?
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#33353b] mb-4 font-display">
                  Send a Message
                </h2>
                <p className="text-gray-500 text-[15px] mb-8">
                  Your email address will not be published. We promise not to spam!
                </p>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                {status && (
                  <div className={`p-4 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {status.message}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Name" 
                    className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-slate-50 text-gray-700 focus:outline-none focus:ring-4 focus:ring-[#ff6b35]/10 focus:border-[#ff6b35] focus:bg-white transition-all duration-300 placeholder:text-gray-400 text-[15px] hover:border-slate-300"
                    required
                  />

                  {/* Email */}
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="Email" 
                    className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-slate-50 text-gray-700 focus:outline-none focus:ring-4 focus:ring-[#ff6b35]/10 focus:border-[#ff6b35] focus:bg-white transition-all duration-300 placeholder:text-gray-400 text-[15px] hover:border-slate-300"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Phone */}
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    placeholder="Phone number" 
                    className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-slate-50 text-gray-700 focus:outline-none focus:ring-4 focus:ring-[#ff6b35]/10 focus:border-[#ff6b35] focus:bg-white transition-all duration-300 placeholder:text-gray-400 text-[15px] hover:border-slate-300"
                  />

                  {/* Subject */}
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    placeholder="Subject" 
                    className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-slate-50 text-gray-700 focus:outline-none focus:ring-4 focus:ring-[#ff6b35]/10 focus:border-[#ff6b35] focus:bg-white transition-all duration-300 placeholder:text-gray-400 text-[15px] hover:border-slate-300"
                  />
                </div>

                {/* Message */}
                <textarea 
                  id="message"
                  name="message"
                  placeholder="Write your message..." 
                  rows={6}
                  className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-slate-50 text-gray-700 focus:outline-none focus:ring-4 focus:ring-[#ff6b35]/10 focus:border-[#ff6b35] focus:bg-white transition-all duration-300 placeholder:text-gray-400 resize-none text-[15px] hover:border-slate-300"
                  required
                ></textarea>

                {/* Submit Button */}
                <div className="mt-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center py-3.5 px-8 bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-bold text-sm tracking-wide rounded-[4px] shadow-md hover:shadow-lg transition-all duration-300 uppercase w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
