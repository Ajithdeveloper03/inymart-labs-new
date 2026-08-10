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
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  const searchPattern = /\{\/\* Vertical Line Segment - Downwards \*\/\}([\s\S]*?)\{\/\* Horizontal Connection Line \*\/\}/;
  
  const replacement = `{/* MOBILE Vertical Line - Downwards (Connects Number to Card) */}
                  <div className="absolute w-0.5 bg-primary -z-10 md:hidden
                    left-1/2 top-[56px] h-6 sm:h-10 -translate-x-1/2
                  "></div>

                  {/* MOBILE Vertical Line - Upwards (Connects Previous Card to Number) */}
                  {index !== 0 && (
                    <div className="absolute w-0.5 bg-primary -z-10 md:hidden
                      left-1/2 top-[-64px] h-16 -translate-x-1/2
                    "></div>
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

  if (searchPattern.test(content)) {
    content = content.replace(searchPattern, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', file);
  } else {
    console.log('Pattern not found in', file);
  }
});
