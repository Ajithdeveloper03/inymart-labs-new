const fs = require('fs');
const path = require('path');

const dirs = [
  'web-development', 'web-analytics', 'smo', 'smm', 'seo', 'ppc', 'dmc', 'local-seo', 'ai-seo', 'dma'
];

dirs.forEach(dir => {
  const dirPath = path.join(__dirname, 'components', dir);
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);
  const bannerFile = files.find(f => f.endsWith('HeroBanner.tsx'));
  
  if (bannerFile) {
    const filePath = path.join(dirPath, bannerFile);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('usePopup')) {
      content = content.replace(/(import .* from 'lucide-react';\nimport Link from 'next\/link';)/, "$1\nimport { usePopup } from '@/components/providers/PopupProvider';");
      // Fallback if the first replace doesn't match
      if (!content.includes('usePopup')) {
          content = content.replace(/(import Link from 'next\/link';)/, "$1\nimport { usePopup } from '@/components/providers/PopupProvider';");
      }
      
      content = content.replace(/(export function \w+\(\) {)/, "$1\n  const { openPopup } = usePopup();");
      
      content = content.replace(/<Link[\s\n]*href="\/contact"([\s\S]*?)<\/Link>/g, (match, p1) => {
        return `<button\n              onClick={openPopup}${p1}</button>`;
      });
      
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${bannerFile}`);
    }
  }
});
