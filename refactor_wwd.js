const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const configs = [
  { file: 'seo/SeoWhatWeDo.tsx', comp: 'SeoWhatWeDo', btn: 'Talk to Our SEO Team', img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074', alt: 'SEO Strategy' },
  { file: 'local-seo/LocalSeoWhatWeDo.tsx', comp: 'LocalSeoWhatWeDo', btn: 'Talk to Our Local SEO Team', img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074', alt: 'Local SEO' },
  { file: 'ai-seo/AiSeoWhatWeDo.tsx', comp: 'AiSeoWhatWeDo', btn: 'Talk to Our AI SEO Team', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965', alt: 'AI SEO' },
  { file: 'web-analytics/WebAnalyticsWhatWeDo.tsx', comp: 'WebAnalyticsWhatWeDo', btn: 'Talk to Our Analytics Team', img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076', alt: 'Web Analytics' },
  { file: 'dma/DmaWhatWeDo.tsx', comp: 'DmaWhatWeDo', btn: 'Talk to Our Team', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070', alt: 'Digital Marketing Agency' },
  { file: 'dmc/DmcWhatWeDo.tsx', comp: 'DmcWhatWeDo', btn: 'Talk to Our Consultants', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070', alt: 'Digital Marketing Consulting' },
  { file: 'smo/SmoWhatWeDo.tsx', comp: 'SmoWhatWeDo', btn: 'Talk to Our SMO Team', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974', alt: 'Social Media Optimization' },
  { file: 'web-development/WebDevWhatWeDo.tsx', comp: 'WebDevWhatWeDo', btn: 'Talk to Our Web Dev Team', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070', alt: 'Web Development' },
  { file: 'ppc/PpcWhatWeDo.tsx', comp: 'PpcWhatWeDo', btn: 'Talk to Our Ads Team', img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070', alt: 'PPC Services' }
];

const template = `'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function __COMP_NAME__() {
  return (
    <section className="relative pt-8 pb-12 bg-white overflow-hidden">
      <div className="container-x">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left: Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start lg:pr-8">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1f2e] mb-6 font-display leading-[1.2]">
                What We Do
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
            </Reveal>

__CONTENT__

            <Reveal delay={300}>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 group"
              >
                __BTN__
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          {/* Right: Visual (Image) */}
          <div className="order-1 lg:order-2 relative">
            <Reveal className="h-full">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-t-[32px] rounded-br-[32px] rounded-bl-[120px] sm:rounded-bl-[160px] lg:rounded-bl-[200px] shadow-[0_20px_60px_rgb(0,0,0,0.1)]">
                <img 
                  src="__MAIN_IMG__" 
                  alt="__ALT__" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
              </div>
            </Reveal>
            
            {/* Decorative background blob behind image */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
`;

for (const config of configs) {
  const filePath = path.join(componentsDir, config.file);
  if (!fs.existsSync(filePath)) {
    console.log('Skipping missing file:', filePath);
    continue;
  }
  let oldContent = fs.readFileSync(filePath, 'utf-8');
  
  // Extract paragraphs. In SeoWhatWeDo they are inside <div className="space-y-6 ...">
  let paragraphs = [];
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/g;
  let match;
  while ((match = pRegex.exec(oldContent)) !== null) {
    paragraphs.push(match[1].trim());
  }

  // Generate new content
  let contentHtml = paragraphs.map((p, i) => {
    let classes = i === 0 ? "text-gray-600 text-lg leading-relaxed mb-6 font-medium" : "text-gray-600 text-lg leading-relaxed mb-10";
    return `            <Reveal delay={${100 + i * 100}}>
              <p className="${classes}">
                ${p}
              </p>
            </Reveal>`;
  }).join('\n');

  let newFile = template
    .replace('__COMP_NAME__', config.comp)
    .replace('__MAIN_IMG__', config.img)
    .replace('__ALT__', config.alt)
    .replace('__BTN__', config.btn)
    .replace('__CONTENT__', contentHtml);

  fs.writeFileSync(filePath, newFile, 'utf-8');
  console.log('Processed', config.file);
}
