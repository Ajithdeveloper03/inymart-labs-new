const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const filesToProcess = [
  'ai-seo/AiSeoExpectations.tsx',
  'dma/DmaExpectations.tsx',
  'dmc/DmcExpectations.tsx',
  'local-seo/LocalSeoExpectations.tsx',
  'ppc/PpcExpectations.tsx',
  'seo/SeoExpectations.tsx',
  'smm/SmmExpectations.tsx',
  'smo/SmoExpectations.tsx',
  'web-analytics/WebAnalyticsExpectations.tsx',
  'web-development/WebDevExpectations.tsx'
];

const defaultIcons = ['TrendingUp', 'PhoneCall', 'LineChart', 'MapPin', 'FileText', 'BarChart3', 'Target', 'Settings'];

for (const relPath of filesToProcess) {
  const filePath = path.join(componentsDir, relPath);
  if (!fs.existsSync(filePath)) {
    console.log('Skipping', relPath);
    continue;
  }
  
  if (relPath.includes('seo/SeoExpectations.tsx')) {
    console.log('Skipping SeoExpectations as it is the reference');
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Extract Heading
  let headingMatch = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  let heading = headingMatch ? headingMatch[1].trim() : 'What Results Can You Expect?';

  // Extract Subtext (paragraph after heading)
  let subtextMatch = content.match(/<\/h2>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/);
  if (!subtextMatch) {
     // Alternative: look for p before the grid or points
     subtextMatch = content.match(/<p[^>]*>([\s\S]*?(?:strategy is in motion|typically see)[\s\S]*?)<\/p>/i);
  }
  let subtext = subtextMatch ? subtextMatch[1].trim() : 'Once your strategy is in motion, here\'s what businesses typically see over time:';

  // Extract Concluding paragraph (usually at the bottom)
  let conclusionText = '';
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
  let arrMatch = content.match(/const (?:points|results|expectations|outcomes) = \[([\s\S]*?)\];/);
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
  }));

  const iconsUsed = [...new Set([...points.map(p => p.icon)])];
  
  let pointsCode = points.map(p => `    {
      title: ${p.title ? `\`${p.title.replace(/`/g, "\\`")}\`` : 'null'},
      text: \`${p.text.replace(/`/g, "\\`")}\`,
      icon: ${p.icon},
    }`).join(',\n');

  let compName = path.basename(relPath, '.tsx');
  
  let colsClass = 'lg:grid-cols-3 xl:grid-cols-5'; // Default for 5 points
  if (points.length === 4) colsClass = 'lg:grid-cols-4';
  if (points.length === 3) colsClass = 'lg:grid-cols-3';
  if (points.length === 6) colsClass = 'lg:grid-cols-3';

  let newFileContent = `'use client';

import { Reveal } from '@/components/Reveal';
import { ${iconsUsed.join(', ')} } from 'lucide-react';

export function ${compName}() {
  const points = [
${pointsCode}
  ];

  return (
    <section className="relative pt-8 pb-12 bg-[#0c1f28]">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 font-display">
              ${heading}
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              ${subtext}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 ${colsClass} gap-6 mb-16">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={index} delay={index * 100} className="h-full">
                <div className="bg-[#122b38] rounded-3xl p-8 border border-white/5 h-full hover:border-primary/50 transition-colors flex flex-col group">
                  {point.title && <h3 className="text-lg font-bold text-white mb-8 pr-4 leading-snug">{point.title}</h3>}
                  <div className="mb-6">
                    <Icon className="w-10 h-10 text-primary stroke-1" />
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        ${conclusionText ? `<Reveal delay={200}>
          <div className="max-w-4xl mx-auto mt-16 bg-[#122b38] border border-white/5 rounded-2xl p-8 text-center">
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              ${conclusionText}
            </p>
          </div>
        </Reveal>` : ''}
      </div>
    </section>
  );
}
`;

  fs.writeFileSync(filePath, newFileContent, 'utf-8');
  console.log('Processed', relPath, 'with', points.length, 'points.');
}
