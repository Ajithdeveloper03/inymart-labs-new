const fs = require('fs');
let file = 'c:/Users/user/Desktop/inymart/iny lab/components/dmc/DmcWhyChoose.tsx';
let content = fs.readFileSync(file, 'utf-8');
content = content.replace(/import \{([^}]*)\} from 'lucide-react';/, (match, p1) => {
    let parts = p1.split(',').map(s=>s.trim()).filter(Boolean);
    if(!parts.includes('Target')) parts.push('Target');
    return `import { ${parts.join(', ')} } from 'lucide-react';`;
});
fs.writeFileSync(file, content);

file = 'c:/Users/user/Desktop/inymart/iny lab/components/smm/SmmWhyChoose.tsx';
content = fs.readFileSync(file, 'utf-8');
content = content.replace(/import \{([^}]*)\} from 'lucide-react';/, (match, p1) => {
    let parts = p1.split(',').map(s=>s.trim()).filter(Boolean);
    if(!parts.includes('Target')) parts.push('Target');
    return `import { ${parts.join(', ')} } from 'lucide-react';`;
});
fs.writeFileSync(file, content);
