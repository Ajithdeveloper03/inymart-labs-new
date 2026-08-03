const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const filesToProcess = [
  'local-seo/LocalSeoProcess.tsx',
  'ai-seo/AiSeoProcess.tsx',
  'web-analytics/WebAnalyticsProcess.tsx',
  'dma/DmaProcess.tsx',
  'dmc/DmcProcess.tsx',
  'smo/SmoProcess.tsx',
  'web-development/WebDevProcess.tsx',
  'ppc/PpcProcess.tsx',
  'smm/SmmProcess.tsx'
];

const defaultIcons = ['Activity', 'Search', 'Target', 'Settings', 'PenTool', 'Link2', 'BarChart', 'Zap', 'Layers', 'Briefcase', 'MessageSquare', 'LayoutDashboard', 'MonitorPlay', 'LineChart', 'PieChart'];

for (const relPath of filesToProcess) {
  const filePath = path.join(componentsDir, relPath);
  if (!fs.existsSync(filePath)) {
    console.log('Skipping', relPath);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');

  // Extract Heading
  let headingMatch = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  let heading = headingMatch ? headingMatch[1].trim() : 'Our Process';

  // Extract Link text
  let linkMatch = content.match(/See Our[\s\S]*?(?:Process|Action)[\s\S]*?(?:Action|Process)/i);
  if(!linkMatch) linkMatch = content.match(/See Our[\s\S]*?Action/i);
  let linkText = linkMatch ? linkMatch[0].replace(/<[^>]+>/g, '').trim() : 'See Our Process in Action';

  // Extract steps array
  let stepsMatch = content.match(/const (?:processS|s)teps = \[([\s\S]*?)\];/);
  let steps = [];
  if (stepsMatch) {
    let stepsContent = stepsMatch[1];
    // We can just eval the array if it's safe, but let's use regex
    // To handle 'what\\'s' and other escaped strings, we just extract everything
    let objRegex = /\{\s*title:\s*[`"'](.*?[^\\])[`"'],\s*(?:desc|description):\s*[`"'](.*?[^\\])[`"'](?:\s*,\s*icon:\s*([a-zA-Z0-9_]+))?\s*\}/g;
    let match;
    while ((match = objRegex.exec(stepsContent)) !== null) {
      steps.push({
        // Unescape any escaping that was there
        title: match[1].replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/^\d+\.\s*/, ''),
        desc: match[2].replace(/\\'/g, "'").replace(/\\"/g, '"'),
        icon: match[3] || null
      });
    }
  }

  if (steps.length === 0) {
    console.log('No steps found for', relPath);
    continue;
  }

  // Assign default icons if missing
  steps = steps.map((s, i) => ({
    ...s,
    icon: s.icon || defaultIcons[i % defaultIcons.length]
  }));

  const iconsUsed = [...new Set(steps.map(s => s.icon === 'ImageIcon' ? 'Image as ImageIcon' : s.icon))];
  
  let stepsCode = steps.map(s => `    {
      title: \`${s.title.replace(/`/g, "\\`")}\`,
      desc: \`${s.desc.replace(/`/g, "\\`")}\`,
      icon: ${s.icon}
    }`).join(',\n');

  let compName = path.basename(relPath, '.tsx');

  let newFileContent = `'use client';

import { Reveal } from '@/components/Reveal';
import { ArrowRight, ${iconsUsed.join(', ')} } from 'lucide-react';
import Link from 'next/link';

export function ${compName}() {
  const steps = [
${stepsCode}
  ];

  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              ${heading}
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mx-auto"></div>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto relative">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>
          
          {/* Left Line for Mobile */}
          <div className="block md:hidden absolute left-7 sm:left-9 top-8 bottom-0 w-0.5 bg-slate-200"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = (index + 1) % 2 === 0; // step 2, 4, 6
            
            return (
              <Reveal key={index} delay={index * 50}>
                <div className={\`relative flex flex-row \${isEven ? 'md:flex-row-reverse' : ''} gap-6 sm:gap-10 md:gap-0 items-start md:items-center mb-16 md:mb-24 last:mb-0\`}>
                  
                  {/* Left Spacer (Desktop only) */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Icon & Number (Center on Desktop, Left on Mobile) */}
                  <div className="relative z-10 flex flex-col items-center shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-white border-4 border-slate-50 shadow-md flex items-center justify-center text-primary font-bold text-xl sm:text-2xl relative">
                      {index + 1}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border-2 border-white text-slate-500">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content (Alternates sides on Desktop) */}
                  <div className={\`md:w-1/2 \${isEven ? 'md:pr-10 lg:pr-16' : 'md:pl-10 lg:pl-16'} pt-2 md:pt-0 w-full\`}>
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors group text-lg"
            >
              ${linkText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
`;

  fs.writeFileSync(filePath, newFileContent, 'utf-8');
  console.log('Processed', relPath, 'with', steps.length, 'steps.');
}
