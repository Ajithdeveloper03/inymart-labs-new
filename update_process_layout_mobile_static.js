const fs = require('fs');
const path = require('path');

const files = [
  'components/ai-seo/AiSeoProcess.tsx',
  'components/dma/DmaProcess.tsx',
  'components/dmc/DmcProcess.tsx',
  'components/local-seo/LocalSeoProcess.tsx',
  'components/ppc/PpcProcess.tsx',
  'components/seo/SeoProcess.tsx',
  'components/smm/SmmProcess.tsx',
  'components/smo/SmoProcess.tsx',
  'components/web-analytics/WebAnalyticsProcess.tsx',
  'components/web-development/WebDevProcess.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    return;
  }
  
  // Revert the file to clean state
  require('child_process').execSync(`git checkout -- "${filePath}"`, {cwd: __dirname});
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(
    /className=\{\`relative flex flex-col md:flex-row \$\{isEven \? 'md:flex-row-reverse' : ''\} gap-6 sm:gap-10 md:gap-0 items-center mb-16 md:mb-24 last:mb-0\`\}/g,
    `className={\`relative flex flex-col md:flex-row \${isEven ? 'md:flex-row-reverse' : ''} md:gap-0 items-center mb-0 md:mb-24 last:mb-0\`}`
  );
  
  const blockRegex = /\{\/\* Vertical Line Segment - Downwards \*\/\}([\s\S]*?)\{\/\* Horizontal Connection Line \*\/\}/;
  
  const replacement = `{/* MOBILE Vertical Line - Upwards (Connects Previous Card to Number) */}
                  {index !== 0 && (
                    <div className="w-0.5 h-8 sm:h-12 bg-primary md:hidden shrink-0"></div>
                  )}

                  {/* DESKTOP Vertical Line Segment - Downwards */}
                  {index !== steps.length - 1 && (
                    <div className="absolute w-0.5 bg-primary -z-10 hidden md:block
                      left-1/2 md:top-1/2 md:h-[calc(50%+96px)] -translate-x-1/2
                    "></div>
                  )}

                  {/* DESKTOP Vertical Line Segment - Upwards */}
                  {index !== 0 && (
                    <div className="absolute w-0.5 bg-primary -z-10 hidden md:block
                      left-1/2 md:top-0 md:h-[50%] -translate-x-1/2
                    "></div>
                  )}

                  {/* Horizontal Connection Line */}`;

  if (blockRegex.test(content)) {
    content = content.replace(blockRegex, replacement);
  }

  const iconBlockRegex = /(\{\/\* Icon & Number \(Center on both\) \*\/\}\s*<div className="relative z-10 flex flex-col items-center shrink-0 md:absolute md:left-1\/2 md:-translate-x-1\/2 md:top-1\/2 md:-translate-y-1\/2">\s*<div className="w-14 h-14 rounded-full bg-white border-\[2px\] border-primary shadow-md flex items-center justify-center text-primary font-bold text-xl sm:text-2xl relative">\s*\{index \+ 1\}\s*<\/div>\s*<\/div>)/;

  const iconReplacement = `$1\n\n                  {/* MOBILE Vertical Line - Downwards (Connects Number to Card) */}\n                  <div className="w-0.5 h-8 sm:h-12 bg-primary md:hidden shrink-0"></div>`;
  
  if (iconBlockRegex.test(content)) {
    content = content.replace(iconBlockRegex, iconReplacement);
  }
  
  content = content.replace(/pt-2 md:pt-0 w-full px-2 sm:px-8 md:px-0/g, 'pt-0 w-full px-2 sm:px-8 md:px-0');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated', file);
});
