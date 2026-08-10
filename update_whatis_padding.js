const fs = require('fs');
const path = require('path');

const files = [
  'components/ai-seo/AiSeoWhatIs.tsx',
  'components/dma/DmaWhatIs.tsx',
  'components/dmc/DmcWhatIs.tsx',
  'components/ppc/PpcWhatIs.tsx',
  'components/smm/SmmWhatIs.tsx',
  'components/web-analytics/WebAnalyticsWhatIs.tsx',
  'components/web-development/WebDevWhatIs.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // The class we want to replace is:
  // className="relative flex-1 flex flex-col items-center justify-center py-8 md:py-12 lg:py-16 pl-0 pr-4 z-10 text-center"
  // We want to change 'pl-0 pr-4' to 'px-4 lg:pl-0 lg:pr-4'
  
  const searchPattern = /pl-0 pr-4/g;
  const replaceStr = 'px-4 lg:pl-0 lg:pr-4';
  
  if (searchPattern.test(content)) {
    content = content.replace(searchPattern, replaceStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', file);
  } else {
    console.log('Pattern not found in', file);
  }
});
