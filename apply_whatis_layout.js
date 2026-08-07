const fs = require('fs');
const path = require('path');

const files = [
  'components/ai-seo/AiSeoWhatIs.tsx',
  'components/dma/DmaWhatIs.tsx',
  'components/ppc/PpcWhatIs.tsx',
  'components/web-analytics/WebAnalyticsWhatIs.tsx',
  'components/web-development/WebDevWhatIs.tsx'
];

files.forEach(file => {
  const filePath = path.join('c:\\Users\\user\\Desktop\\inymart\\iny lab', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Change image width to 40%
    content = content.replace('md:w-[50%]', 'md:w-[40%]');
    
    // Change content padding to 0px left, 1rem right
    content = content.replace('p-8 md:p-12 lg:p-16', 'py-8 md:py-12 lg:py-16 pl-0 pr-4');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
