const fs = require('fs');

const configs = [
  {
    file: 'components/dma/DmaWhatIs.tsx',
    componentName: 'DmaWhatIs',
    iconName: 'Megaphone',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    altText: 'Digital Marketing Team'
  },
  {
    file: 'components/ppc/PpcWhatIs.tsx',
    componentName: 'PpcWhatIs',
    iconName: 'MousePointerClick',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    altText: 'PPC Analytics Data'
  },
  {
    file: 'components/web-analytics/WebAnalyticsWhatIs.tsx',
    componentName: 'WebAnalyticsWhatIs',
    iconName: 'Search',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    altText: 'Web Analytics Dashboard'
  },
  {
    file: 'components/web-development/WebDevWhatIs.tsx',
    componentName: 'WebDevWhatIs',
    iconName: 'Code',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    altText: 'Web Development Coding'
  }
];

function generateTemplate({ componentName, iconName, imageUrl, altText, headingHtml, paragraphHtml }) {
  return `'use client';

import { Reveal } from '@/components/Reveal';
import { ${iconName} } from 'lucide-react';

export function ${componentName}() {
  return (
    <section className="relative pt-12 pb-16 bg-white">
      <div className="container-x">
        <Reveal>
          {/* Banner Container */}
          <div className="group relative overflow-hidden rounded-[20px] border-[1.5px] border-[#c6a052]/70 bg-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(198,160,82,0.15)] flex flex-col md:flex-row min-h-[350px]">
            
            {/* Left Image Section */}
            <div className="relative w-full md:w-[50%] h-[250px] md:h-auto shrink-0 overflow-hidden">
              <img 
                src="${imageUrl}" 
                alt="${altText}" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100"
              />
              {/* Gradient overlay to seamlessly fade the image into the white background */}
              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-white/30 to-white"></div>
            </div>

            {/* Right Content Section */}
            <div className="relative flex-1 flex flex-col items-center justify-center p-8 md:p-12 lg:p-16 z-10 text-center">
              
              {/* Faint Background Watermark Icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.05]">
                <${iconName} className="w-[280px] h-[280px] text-black" />
              </div>

              <div className="relative z-10 max-w-3xl">
                <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-[#0c1f28] mb-6">
                  ${headingHtml.trim()}
                </h2>
                
                <p className="text-slate-600 leading-relaxed text-base sm:text-[17px] font-medium">
                  ${paragraphHtml.trim()}
                </p>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
`;
}

configs.forEach(config => {
  const content = fs.readFileSync(config.file, 'utf8');
  
  // Extract h2 contents
  const h2Match = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  const headingHtml = h2Match ? h2Match[1] : '';

  // Extract p contents
  const pMatch = content.match(/<p[^>]*>([\s\S]*?)<\/p>/);
  const paragraphHtml = pMatch ? pMatch[1] : '';

  const newContent = generateTemplate({
    componentName: config.componentName,
    iconName: config.iconName,
    imageUrl: config.imageUrl,
    altText: config.altText,
    headingHtml: headingHtml,
    paragraphHtml: paragraphHtml
  });

  fs.writeFileSync(config.file, newContent, 'utf8');
  console.log('Updated: ' + config.file);
});
