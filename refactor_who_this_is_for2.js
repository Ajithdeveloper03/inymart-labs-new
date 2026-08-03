const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const filesToProcess = [
  'dma/DmaWhoThisIsFor.tsx',
  'dmc/DmcWhoThisIsFor.tsx',
  'local-seo/LocalSeoWhoThisIsFor.tsx',
  'ppc/PpcWhoThisIsFor.tsx',
  'seo/SeoWhoThisIsFor.tsx',
  'smm/SmmWhoThisIsFor.tsx',
  'smo/SmoWhoThisIsFor.tsx',
  'web-analytics/WebAnalyticsWhoThisIsFor.tsx',
  'web-development/WebDevWhoThisIsFor.tsx'
];

const defaultIcons = ['Users', 'Search', 'AlertCircle', 'TrendingUp', 'Target', 'Briefcase', 'BarChart', 'Settings'];
const colors = ['text-pink-500', 'text-emerald-500', 'text-amber-500', 'text-blue-500', 'text-purple-500', 'text-orange-500'];
const bgImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600"
];

for (const relPath of filesToProcess) {
  const filePath = path.join(componentsDir, relPath);
  if (!fs.existsSync(filePath)) {
    console.log('Skipping', relPath);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');

  // Extract Heading
  let headingMatch = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  let heading = headingMatch ? headingMatch[1].trim() : 'Who This Is For';

  // Extract Subtext (paragraph after heading)
  let subtextMatch = content.match(/<\/h2>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/);
  if (!subtextMatch) {
     // Alternative: look for p before the grid or points
     subtextMatch = content.match(/<p[^>]*>([\s\S]*?our service works well for:[\s\S]*?)<\/p>/i);
  }
  let subtext = subtextMatch ? subtextMatch[1].trim() : 'Our service works well for:';

  // Extract Concluding paragraph (usually at the bottom)
  let conclusionMatch = content.match(/<p[^>]*>([\s\S]*?(?:Whether|Our team|Every business)[\s\S]*?)<\/p>/i);
  let conclusionText = '';
  // Since conclusion might be the second or third paragraph, let's grab all paragraphs and take the last one that is relatively long
  let pRegex = /<p[^>]*>([\s\S]*?)<\/p>/g;
  let paragraphs = [];
  let pMatch;
  while ((pMatch = pRegex.exec(content)) !== null) {
      paragraphs.push(pMatch[1].trim().replace(/<[^>]+>/g, ''));
  }
  
  // Exclude the subtext from the search
  let candidateConclusions = paragraphs.filter(p => p !== subtext.replace(/<[^>]+>/g, '') && p.length > 50);
  if (candidateConclusions.length > 0) {
      conclusionText = candidateConclusions[candidateConclusions.length - 1]; // usually the last long text
  }

  // Extract points
  let points = [];
  let arrMatch = content.match(/const (?:points|audiences|groups) = \[([\s\S]*?)\];/);
  if (arrMatch) {
    let arrContent = arrMatch[1];
    if (arrContent.includes('{')) {
      // It's objects
      let objRegex = /\{\s*(?:title:\s*[`"'](.*?[^\\])[`"'],)?\s*(?:desc|description|text):\s*[`"'](.*?[^\\])[`"'](?:\s*,\s*icon:\s*([a-zA-Z0-9_]+))?,?\s*\}/g;
      let m;
      while ((m = objRegex.exec(arrContent)) !== null) {
        points.push({
          title: m[1] ? m[1].replace(/\\'/g, "'").replace(/\\"/g, '"') : null,
          text: m[2].replace(/\\'/g, "'").replace(/\\"/g, '"'),
          icon: m[3] || null
        });
      }
    } else {
      // It's strings
      let strRegex = /[`"'](.*?[^\\])[`"']/g;
      let m;
      while ((m = strRegex.exec(arrContent)) !== null) {
        points.push({
          title: null,
          text: m[1].replace(/\\'/g, "'").replace(/\\"/g, '"'),
          icon: null
        });
      }
    }
  }

  if (points.length === 0) {
    console.log('No points found for', relPath);
    continue;
  }

  // Assign defaults
  points = points.map((p, i) => ({
    title: p.title,
    text: p.text,
    icon: p.icon || defaultIcons[i % defaultIcons.length],
    iconColor: colors[i % colors.length],
    bgImage: bgImages[i % bgImages.length]
  }));

  const iconsUsed = [...new Set(['Users', ...points.map(p => p.icon)])];
  
  let pointsCode = points.map(p => `    {
      title: ${p.title ? `\`${p.title.replace(/`/g, "\\`")}\`` : 'null'},
      text: \`${p.text.replace(/`/g, "\\`")}\`,
      icon: ${p.icon},
      iconColor: "${p.iconColor}",
      bgImage: "${p.bgImage}"
    }`).join(',\n');

  let compName = path.basename(relPath, '.tsx');

  let newFileContent = `'use client';

import { Reveal } from '@/components/Reveal';
import { ${iconsUsed.join(', ')} } from 'lucide-react';

export function ${compName}() {
  const points = [
${pointsCode}
  ];

  return (
    <section className="relative pt-12 pb-16 bg-slate-50">
      <div className="container-x">
        <div className="max-w-6xl mx-auto">
          
          <Reveal>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0">
                  <Users className="w-8 h-8 text-pink-500" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1f2e] font-display">
                  ${heading}
                </h2>
              </div>
              <p className="text-gray-600 text-lg md:text-xl">
                ${subtext}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {points.map((point, i) => {
              const Icon = point.icon;
              return (
                <Reveal key={i} delay={i * 100} className="h-full">
                  <div className="relative flex items-center gap-5 sm:gap-6 p-4 sm:p-5 pr-6 sm:pr-8 rounded-[2.5rem] sm:rounded-[3rem] text-white shadow-xl hover:-translate-y-1 transition-transform duration-300 overflow-hidden group h-full">
                    
                    {/* Background Image Layer */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: \`url(\${point.bgImage})\` }}
                    />
                    
                    {/* Subtle Primary Color Overlay + Dark Gradient for Readability */}
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
                    
                    {/* Icon Container */}
                    <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                       <Icon className={\`w-6 h-6 sm:w-7 sm:h-7 \${point.iconColor}\`} />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex-1 py-2">
                      {point.title && <h3 className="text-white text-lg font-bold mb-1 font-display">{point.title}</h3>}
                      <p className="text-slate-200 text-sm sm:text-base font-medium leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                    
                  </div>
                </Reveal>
              );
            })}
          </div>

          ${conclusionText ? `<Reveal delay={400}>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 text-lg text-center leading-relaxed bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                ${conclusionText}
              </p>
            </div>
          </Reveal>` : ''}
          
        </div>
      </div>
    </section>
  );
}
`;

  fs.writeFileSync(filePath, newFileContent, 'utf-8');
  console.log('Processed', relPath, 'with', points.length, 'points.');
}
