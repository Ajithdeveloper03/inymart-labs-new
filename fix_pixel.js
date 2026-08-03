const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'components');
for(let relPath of ['dmc/DmcWhyChoose.tsx', 'smm/SmmWhyChoose.tsx']) {
  let file = path.join(componentsDir, relPath);
  if(fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    content = content.replace(/<PixelScatter className="w-12 h-12 text-slate-700/g, '<Target className="w-12 h-12 text-slate-700');
    if(!content.includes('Target')) {
       content = content.replace(/import \{([^}]*)\} from 'lucide-react';/, (match, p1) => {
          let imports = p1.split(',').map(s=>s.trim());
          if(!imports.includes('Target')) imports.push('Target');
          return `import { ${imports.join(', ')} } from 'lucide-react';`;
       });
    }
    fs.writeFileSync(file, content);
  }
}
