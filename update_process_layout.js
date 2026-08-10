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
  
  const blockRegex = /<div className="max-w-5xl mx-auto relative">[\s\S]*?<\/Reveal>\s*\);\s*\}\)\}\s*<\/div>/;
  
  const newBlock = `<div className="max-w-3xl mx-auto relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <Reveal key={index} delay={index * 50}>
                <div className="flex flex-col items-center w-full">
                  
                  {/* Top Line Segment */}
                  {index !== 0 && (
                    <div className="w-0.5 h-8 sm:h-12 bg-primary"></div>
                  )}

                  {/* Icon & Number */}
                  <div className="relative z-10 flex flex-col items-center shrink-0">
                    <div className="w-14 h-14 rounded-full bg-white border-[2px] border-primary shadow-md flex items-center justify-center text-primary font-bold text-xl sm:text-2xl relative">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Bottom Line Segment */}
                  <div className="w-0.5 h-8 sm:h-12 bg-primary"></div>

                  {/* Content */}
                  <div className="w-full px-4 sm:px-8">
                    <div className="relative z-20 bg-slate-100 rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>`;

  if (blockRegex.test(content)) {
    content = content.replace(blockRegex, newBlock);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', file);
  } else {
    console.log('Pattern not found in', file);
  }
});
