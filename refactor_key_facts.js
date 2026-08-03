const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const filesToProcess = [
  'seo/SeoKeyFacts.tsx',
  'local-seo/LocalSeoKeyFacts.tsx',
  'ai-seo/AiSeoKeyFacts.tsx',
  'web-analytics/WebAnalyticsKeyFacts.tsx',
  'dma/DmaKeyFacts.tsx',
  'dmc/DmcKeyFacts.tsx',
  'smo/SmoKeyFacts.tsx',
  'web-development/WebDevKeyFacts.tsx',
  'ppc/PpcKeyFacts.tsx'
];

const labelToIcon = {
  'service': 'Building2',
  'headquarters': 'MapPin',
  'experience': 'Award',
  'brands served': 'Globe',
  'core process': 'Settings',
  'reporting': 'FileText',
  'service areas': 'MapPin', 
  'typical timeline': 'Clock',
  'platforms covered': 'MonitorSmartphone',
  'ai platforms covered': 'MonitorSmartphone',
  'platforms': 'MonitorSmartphone',
  'tools used': 'Wrench',
  'services': 'Layers',
  'engagement options': 'Handshake',
  'areas covered': 'MapPin',
  'typical posting frequency': 'Calendar',
  'website types': 'Layout',
  'platforms managed': 'MonitorSmartphone',
  'support': 'LifeBuoy',
  'search engines covered': 'Search'
};

const newJsxTemplate = `  return (
    <section className="relative pt-8 pb-12 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f2e] mb-6 font-display">
              {HEADING}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <Reveal key={index} delay={index * 100}>
                <div className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[#ff6b35]/30 hover:bg-white hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#ff6b35]/30 group-hover:bg-[#ff6b35]/5 transition-colors">
                      <Icon className="w-6 h-6 text-slate-600 group-hover:text-[#ff6b35] transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
                        {fact.label}
                      </h3>
                      <p className="text-slate-800 font-medium leading-snug">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}`;

for (const relPath of filesToProcess) {
  const filePath = path.join(componentsDir, relPath);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Find the facts array
  const factsMatch = content.match(/const facts = \[\s*([\s\S]*?)\s*\];/);
  if (!factsMatch) {
    console.error('Could not find facts array in ' + filePath);
    continue;
  }
  
  let factsContent = factsMatch[1];
  let iconsNeeded = new Set();
  
  // Parse lines in facts array
  const factLines = factsContent.split('\n').filter(line => line.trim().length > 0);
  const newFactLines = factLines.map(line => {
    const labelMatch = line.match(/label:\s*["'](.*?)["']/);
    let label = '';
    if (labelMatch) label = labelMatch[1];
    
    const iconName = labelToIcon[label.toLowerCase()] || 'CheckCircle';
    iconsNeeded.add(iconName);
    
    // Add icon to the object
    return line.replace('{ label', `{ icon: ${iconName}, label`);
  });
  
  const newFactsStr = `const facts = [\n${newFactLines.join('\n')}\n  ];`;
  content = content.replace(factsMatch[0], newFactsStr);

  // Replace imports
  const iconsArray = Array.from(iconsNeeded).join(', ');
  const importStatement = `import {\n  ${Array.from(iconsNeeded).join(',\n  ')}\n} from 'lucide-react';`;
  
  if (content.includes("import { BookOpen } from 'lucide-react';")) {
    content = content.replace("import { BookOpen } from 'lucide-react';", importStatement);
  } else if (content.includes('import { BookOpen } from "lucide-react";')) {
    content = content.replace('import { BookOpen } from "lucide-react";', importStatement);
  } else if (content.includes("import { Reveal } from '@/components/Reveal';")) {
    // If no lucide import exists yet
    content = content.replace("import { Reveal } from '@/components/Reveal';", `import { Reveal } from '@/components/Reveal';\n${importStatement}`);
  }

  // Find the heading
  const headingMatch = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  let heading = "Key Facts About Inymart Labs";
  if (headingMatch) {
    heading = headingMatch[1].trim();
  }

  // Replace return statement
  const returnMatch = content.match(/return \([\s\S]*?\n\}/);
  if (returnMatch) {
    const newReturn = newJsxTemplate.replace('{HEADING}', heading);
    content = content.replace(returnMatch[0], newReturn + '\n}');
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Processed ' + filePath);
}
