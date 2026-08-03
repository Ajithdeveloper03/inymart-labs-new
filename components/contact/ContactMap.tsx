'use client';

import { Reveal } from '@/components/Reveal';

export function ContactMap() {
  return (
    <section className="relative w-full h-[400px] lg:h-[500px] bg-slate-100">
      <Reveal className="w-full h-full" delay={200}>
        <iframe 
          src="https://maps.google.com/maps?q=Ayodhya%20Complex%2C%20Thennur%20High%20Road%2C%20Srinivasapuram%2C%20Tennur%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620017&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full object-cover filter contrast-125 saturate-50 opacity-90"
          title="Inymart Labs Location"
        ></iframe>
      </Reveal>
    </section>
  );
}
