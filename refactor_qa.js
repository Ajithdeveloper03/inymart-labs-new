const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const configs = [
  { file: 'local-seo/LocalSeoQuickAnswer.tsx', comp: 'LocalSeoQuickAnswer', tag: 'L-SEO', img: 'https://images.unsplash.com/photo-1524146128017-b9dd0bfd2778?q=80&w=2070', alt: 'Local SEO Maps' },
  { file: 'ai-seo/AiSeoQuickAnswer.tsx', comp: 'AiSeoQuickAnswer', tag: 'AI', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070', alt: 'AI Technology' },
  { file: 'web-analytics/WebAnalyticsQuickAnswer.tsx', comp: 'WebAnalyticsQuickAnswer', tag: 'DATA', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070', alt: 'Data Charts' },
  { file: 'dma/DmaQuickAnswer.tsx', comp: 'DmaQuickAnswer', tag: 'DMA', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015', alt: 'Digital Marketing Team' },
  { file: 'dmc/DmcQuickAnswer.tsx', comp: 'DmcQuickAnswer', tag: 'DMC', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070', alt: 'Consulting Meeting' },
  { file: 'smo/SmoQuickAnswer.tsx', comp: 'SmoQuickAnswer', tag: 'SMO', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974', alt: 'Social Media Apps' },
  { file: 'web-development/WebDevQuickAnswer.tsx', comp: 'WebDevQuickAnswer', tag: 'DEV', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072', alt: 'Coding on Laptop' },
  { file: 'ppc/PpcQuickAnswer.tsx', comp: 'PpcQuickAnswer', tag: 'PPC', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070', alt: 'Online Advertising' },
  { file: 'smm/SmmQuickAnswer.tsx', comp: 'SmmQuickAnswer', tag: 'SMM', img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070', alt: 'Social Media Marketing' }
];

const template = `'use client';

import { Reveal } from '@/components/Reveal';
import { Lightbulb } from 'lucide-react';

export function __COMP_NAME__() {
  return (
    <section id="quick-answer" className="relative pt-8 pb-12 bg-white overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Left Side: Image with Tag */}
          <div className="order-1 relative w-full pr-8 sm:pr-12 lg:pr-16 pb-8 sm:pb-12 lg:pb-16 pt-8 pl-4 lg:pl-10">
            <Reveal delay={200} className="h-full">
              {/* Main Image */}
              <div className="relative h-full min-h-[350px] w-full rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgb(0,0,0,0.1)] border-4 border-white">
                <img 
                  src="__MAIN_IMG__" 
                  alt="__ALT__" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tag Overlay */}
              <div className="absolute bottom-0 right-0 z-20">
                {/* Orange Circle Background */}
                <div className="absolute -right-4 -bottom-4 w-28 h-28 sm:w-36 sm:h-36 bg-[#ff6b35] rounded-[32px] sm:rounded-[40px] z-0 shadow-lg" />
                
                {/* White Box with Rotated Text */}
                <div className="relative z-10 bg-white rounded-3xl p-4 sm:p-6 shadow-2xl flex items-center justify-center min-w-[80px] sm:min-w-[120px] h-[200px] sm:h-[280px]">
                  <span 
                    className="text-[80px] sm:text-[110px] font-black tracking-tighter"
                    style={{ 
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1
                    }}
                  >
                    __TAG__
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Content */}
          <div className="order-2 flex flex-col items-start lg:pl-12">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1f2e] font-display">
                  Quick Answer
                </h2>
              </div>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-10"></div>
            </Reveal>

            <div className="space-y-6">
__CONTENT__
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
`;

for (const config of configs) {
  const filePath = path.join(componentsDir, config.file);
  let oldContent = fs.readFileSync(filePath, 'utf-8');
  
  // Extract paragraphs
  let paragraphs = [];
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/g;
  let match;
  while ((match = pRegex.exec(oldContent)) !== null) {
    paragraphs.push(match[1].trim());
  }

  // Generate new content
  let contentHtml = paragraphs.map((p, i) => {
    let classes = i === 0 ? "text-lg sm:text-xl text-gray-700 leading-relaxed font-medium" : "text-lg text-gray-600 leading-relaxed";
    return `              <Reveal delay={${100 + i * 100}}>
                <p className="${classes}">
                  ${p}
                </p>
              </Reveal>`;
  }).join('\n');

  let newFile = template
    .replace('__COMP_NAME__', config.comp)
    .replace('__MAIN_IMG__', config.img)
    .replace('__ALT__', config.alt)
    .replace('__TAG__', config.tag)
    .replace('__CONTENT__', contentHtml);

  fs.writeFileSync(filePath, newFile, 'utf-8');
  console.log('Processed', config.file);
}
