'use client';

import { Reveal } from '@/components/Reveal';
import { 
  MapPin, Phone, Mail,
  Instagram, Facebook, Linkedin
} from 'lucide-react';

export function ContactInfoAndForm() {
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
                      hello@example.com<br />
                      support@example.com
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
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Social Media Icons */}
              <Reveal delay={400}>
                <div className="mt-4 flex gap-4 ml-[72px] pl-6">
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all duration-300">
                    <Facebook className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all duration-300">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all duration-300">
                    <Linkedin className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all duration-300">
                    <Instagram className="w-3.5 h-3.5" strokeWidth={2} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex flex-col">
            <Reveal delay={200}>
              <div className="text-[#ff6b35] text-sm font-medium mb-3 tracking-wide">
                Have a Question?
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#33353b] mb-4 font-display">
                Send a Message
              </h2>
              <p className="text-gray-500 text-[15px] mb-12">
                Your email address will not be published. We promise not to spam!
              </p>

              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Name" 
                    className="w-full px-5 py-4 rounded-md border-0 bg-white text-gray-700 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:outline-none focus:ring-1 focus:ring-[#ff6b35] transition-all placeholder:text-gray-400 text-[15px]"
                    required
                  />

                  {/* Email */}
                  <input 
                    type="email" 
                    id="email"
                    placeholder="Email" 
                    className="w-full px-5 py-4 rounded-md border-0 bg-white text-gray-700 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:outline-none focus:ring-1 focus:ring-[#ff6b35] transition-all placeholder:text-gray-400 text-[15px]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder="Phone number" 
                    className="w-full px-5 py-4 rounded-md border-0 bg-white text-gray-700 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:outline-none focus:ring-1 focus:ring-[#ff6b35] transition-all placeholder:text-gray-400 text-[15px]"
                  />

                  {/* Subject */}
                  <input 
                    type="text" 
                    id="subject"
                    placeholder="Subject" 
                    className="w-full px-5 py-4 rounded-md border-0 bg-white text-gray-700 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:outline-none focus:ring-1 focus:ring-[#ff6b35] transition-all placeholder:text-gray-400 text-[15px]"
                  />
                </div>

                {/* Message */}
                <textarea 
                  id="message"
                  placeholder="Write your message..." 
                  rows={6}
                  className="w-full px-5 py-4 rounded-md border-0 bg-white text-gray-700 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:outline-none focus:ring-1 focus:ring-[#ff6b35] transition-all placeholder:text-gray-400 resize-none text-[15px]"
                  required
                ></textarea>

                {/* Submit Button */}
                <div className="mt-2">
                  <button 
                    type="submit"
                    className="inline-block py-3.5 px-8 bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-bold text-sm tracking-wide rounded-[4px] shadow-md transition-colors uppercase"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
