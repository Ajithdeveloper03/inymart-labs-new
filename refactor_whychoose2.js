const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const filesToProcess = [
  'local-seo/LocalSeoWhyChoose.tsx',
  'ai-seo/AiSeoWhyChoose.tsx',
  'web-analytics/WebAnalyticsWhyChoose.tsx',
  'dma/DmaWhyChoose.tsx',
  'dmc/DmcWhyChoose.tsx',
  'smo/SmoWhyChoose.tsx',
  'web-development/WebDevWhyChoose.tsx',
  'ppc/PpcWhyChoose.tsx',
  'smm/SmmWhyChoose.tsx'
];

const iconsList = ['MousePointerClick', 'Zap', 'Map', 'Target', 'Users', 'MapPin', 'BarChart', 'LineChart', 'PieChart', 'Code', 'Smartphone', 'Globe', 'Search', 'Briefcase', 'Activity', 'Award'];

for (const relPath of filesToProcess) {
  const filePath = path.join(componentsDir, relPath);
  if (!fs.existsSync(filePath)) {
    console.log('Skipping', relPath);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');

  // Extract the Heading (h2)
  let headingMatch = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  let heading = headingMatch ? headingMatch[1].trim() : 'Why Choose Us';

  // Extract top level paragraphs (intro text)
  // Usually right after the h2, before the grid or within the same container.
  // In SmmWhyChoose: <p className="text-gray-600 text-lg leading-relaxed">...</p>
  // In LocalSeoWhyChoose, the paragraphs are inside <div className="space-y-6...">.
  // We need to distinguish between intro paragraphs and card paragraphs.

  let introP = '';
  let introMatch = content.match(/<div className="text-center max-w-3xl mx-auto mb-16">[\s\S]*?<h2[^>]*>[\s\S]*?<\/h2>\s*(<p[^>]*>[\s\S]*?<\/p>)?\s*<\/div>/);
  if (introMatch && introMatch[1]) {
    introP = introMatch[1].trim();
  }

  // Try to find cards
  const cardRegex = /<([A-Z][a-zA-Z0-9]*)[^>]*className="w-12 h-12[^>]*\/>[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g;
  let cards = [];
  let match;
  while ((match = cardRegex.exec(content)) !== null) {
    cards.push({
      icon: match[1].trim(),
      title: match[2].trim(),
      desc: match[3].trim()
    });
  }

  // If no cards found, it means it's a bunch of <p> tags inside a container (like LocalSeoWhyChoose)
  if (cards.length === 0) {
    // Extract paragraphs inside space-y-6 or similar
    let pContainerMatch = content.match(/<div className="space-y-[^>]*>([\s\S]*?)<\/div>/);
    if (pContainerMatch) {
      let pContent = pContainerMatch[1];
      let pRegex = /<p>([\s\S]*?)<\/p>/g;
      let pMatch;
      let idx = 0;
      while ((pMatch = pRegex.exec(pContent)) !== null) {
        cards.push({
          icon: iconsList[idx % iconsList.length], // Assign a default icon
          title: null,
          desc: pMatch[1].trim()
        });
        idx++;
      }
    }
  }
  
  if (cards.length === 0) {
      console.log('Failed to extract cards for', relPath);
      continue;
  }

  const iconsUsed = [...new Set(cards.map(c => c.icon))];
  const gridClass = cards.length === 2 
    ? "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto relative" 
    : "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto relative";

  let newCardsHtml = cards.map((card, i) => {
    let titleHtml = card.title ? `\n              <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-3 font-display transition-colors duration-300">\n                ${card.title}\n              </h3>\n` : '';
    
    return `          {/* Card ${i + 1} */}
          <Reveal delay={${(i + 1) * 100}} className="h-full">
            <div className="relative bg-white hover:bg-[#3f3840] rounded-lg p-6 lg:p-8 border border-slate-200 hover:border-[#3f3840] h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group z-0 hover:z-10">
              <PixelScatter />
              
              <div className="mb-4 mt-2 relative">
                <div className="absolute top-0 right-0 w-8 h-[1px] bg-white/10 -rotate-45 -translate-y-2 translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-0 w-6 h-[1px] bg-white/10 -rotate-45 translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <${card.icon} className="w-12 h-12 text-slate-700 group-hover:text-[#ff6b35] stroke-[1.5] transition-colors duration-300" />
              </div>
              ${titleHtml}
              {/* Separator */}
              <div className="w-12 h-[2px] bg-transparent group-hover:bg-[#ff6b35] mb-4 transition-colors duration-300" />

              <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-[15px] mb-6 grow transition-colors duration-300">
                ${card.desc}
              </p>

              <Link href="/contact" className="text-[#ff6b35] font-bold text-sm hover:text-[#e55a2b] transition-colors">
                Learn More
              </Link>
            </div>
          </Reveal>`
  }).join('\n\n');

  let compName = path.basename(relPath, '.tsx');

  let newFileContent = `'use client';

import { Reveal } from '@/components/Reveal';
import { ${iconsUsed.join(', ')} } from 'lucide-react';
import Link from 'next/link';

const PixelScatter = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute top-4 left-4 opacity-80">
      <rect x="0" y="0" width="8" height="8" className="fill-slate-300 group-hover:fill-[#ff6b35] transition-colors duration-300" />
      <rect x="12" y="4" width="4" height="4" className="fill-slate-200 group-hover:fill-[#ff6b35] transition-colors duration-300" />
      <rect x="24" y="0" width="6" height="6" className="fill-slate-300 group-hover:fill-[#ff6b35] transition-colors duration-300" />
      <rect x="4" y="14" width="4" height="4" className="fill-slate-200 group-hover:fill-[#ff6b35] transition-colors duration-300" />
      <rect x="16" y="16" width="3" height="3" className="fill-slate-300 group-hover:fill-[#ff6b35] transition-colors duration-300" />
      <rect x="8" y="24" width="3" height="3" className="fill-slate-200 group-hover:fill-[#ff6b35] transition-colors duration-300" />
    </svg>
  );
};

export function ${compName}() {
  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              ${heading}
            </h2>
            ${introP}
          </div>
        </Reveal>

        <div className="${gridClass}">
          
${newCardsHtml}

        </div>
      </div>
    </section>
  );
}
`;

  fs.writeFileSync(filePath, newFileContent, 'utf-8');
  console.log('Processed', relPath, 'with', cards.length, 'cards.');
}
