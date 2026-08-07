'use client';

import { Reveal } from '@/components/Reveal';
import { Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const TEAM = [
  { 
    name: 'Mr. Manoj Jeevagan', 
    role: 'Web Traffic Ideator',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500',
    bgColor: 'bg-[#B4BDB3]' 
  },
  { 
    name: 'Mr. Deen Mohamed', 
    role: 'Traffic Team Manager',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500',
    bgColor: 'bg-[#A8B4C4]' 
  },
  { 
    name: 'Ms. Shanthini', 
    role: 'Traffic Team Co-ordinator',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500',
    bgColor: 'bg-[#988290]' 
  },
  { 
    name: 'Mr. Ajith Kumar', 
    role: 'Web Team Lead',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500',
    bgColor: 'bg-[#C1BAB3]' 
  },
  { 
    name: 'Ms. Santhiya', 
    role: 'Digital Marketing Executive',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500',
    bgColor: 'bg-[#D1C8C1]' 
  },
  { 
    name: 'Ms. Swathi', 
    role: 'Digital Marketing Executive',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400&h=500',
    bgColor: 'bg-[#B5C2B7]' 
  },
  { 
    name: 'Ms. Abi', 
    role: 'Digital Marketing Executive',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=500',
    bgColor: 'bg-[#D6C5C0]' 
  },
  { 
    name: 'Mr. Saravanan', 
    role: 'Web Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500',
    bgColor: 'bg-[#C4D4D8]' 
  },
];

export function MeetTheTeam() {
  return (
    <section className="relative bg-white pt-4 pb-12 lg:pt-8 lg:pb-16 overflow-hidden">
      <div className="container-x relative">
        
        {/* Eyebrow */}
        <div className="flex justify-center mb-8">
          <Reveal>
            <div className="bg-[#F3F0FF] px-6 py-2 rounded-full inline-flex">
              <span className="text-[#F97316] font-bold text-sm tracking-widest uppercase font-sans">
                Our Team
              </span>
            </div>
          </Reveal>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal delay={100}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15]">
              Meet the Team Behind the <span className="text-gradient">Growth</span>
            </h2>
          </Reveal>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {TEAM.map((member, idx) => (
            <Reveal key={idx} delay={150 + (idx % 4) * 100} className="w-full">
              <div className="relative bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
                
                {/* Image */}
                <div className={cn("aspect-[4/5] rounded-2xl overflow-hidden mb-5", member.bgColor)}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top mix-blend-normal opacity-90"
                    loading="lazy"
                  />
                </div>
                
                {/* Text Content */}
                <div className="text-center pb-5 px-2">
                  <h3 className="font-bold text-foreground text-[17px] mb-1.5">{member.name}</h3>
                  <div className="font-sans text-[13px] text-muted-foreground">{member.role}</div>
                </div>

                {/* LinkedIn Pill */}
                <a 
                  href="#" 
                  aria-label={`LinkedIn profile for ${member.name}`}
                  className="absolute bottom-[22px] right-0 bg-[#635BFF] rounded-l-full py-1.5 pl-1.5 pr-4 flex items-center shadow-md hover:pr-6 transition-all duration-300 group"
                >
                  <div className="bg-white text-[#635BFF] h-7 w-7 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="h-[14px] w-[14px] fill-current" />
                  </div>
                </a>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
