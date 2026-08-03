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
for(let relPath of filesToProcess) {
  let file = path.join(componentsDir, relPath);
  if(fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    content = content.replace(/import \{([^}]*)\} from 'lucide-react';/, (match, p1) => {
        let imports = p1.split(',').map(s => s.trim()).filter(s => s !== 'PixelScatter' && s !== '');
        return `import { ${imports.join(', ')} } from 'lucide-react';`;
    });
    fs.writeFileSync(file, content);
  }
}
