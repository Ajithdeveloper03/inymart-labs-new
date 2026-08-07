const fs = require('fs');
const path = require('path');

const componentsDir = path.join('c:\\Users\\user\\Desktop\\inymart\\iny lab', 'components');

const replacementBlock = `<div className="max-w-5xl mx-auto relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = (index + 1) % 2 === 0; // step 2, 4, 6
            
            return (
              <Reveal key={index} delay={index * 50}>
                <div className={\`relative flex flex-row \${isEven ? 'md:flex-row-reverse' : ''} gap-6 sm:gap-10 md:gap-0 items-start md:items-center mb-16 md:mb-24 last:mb-0\`}>
                  
                  {/* Vertical Line Segment - Downwards */}
                  {index !== steps.length - 1 && (
                    <div className="absolute w-0.5 bg-primary -z-10
                      left-[27px] top-[28px] h-[calc(100%+36px)]
                      md:left-1/2 md:top-1/2 md:h-[calc(50%+96px)] md:-translate-x-1/2
                    "></div>
                  )}

                  {/* Vertical Line Segment - Upwards */}
                  {index !== 0 && (
                    <div className="absolute w-0.5 bg-primary -z-10
                      left-[27px] top-0 h-[28px]
                      md:left-1/2 md:top-0 md:h-[50%] md:-translate-x-1/2
                    "></div>
                  )}

                  {/* Horizontal Connection Line */}
                  <div className={\`absolute bg-primary -z-10 h-[2px]
                    top-[27px] left-[28px] w-[52px] sm:w-[68px]
                    md:top-1/2 md:-translate-y-1/2
                    \${isEven 
                      ? 'md:left-auto md:right-1/2 md:w-10 lg:w-16' 
                      : 'md:left-1/2 md:w-10 lg:w-16'
                    }
                  \`} />

                  {/* Left Spacer (Desktop only) */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Icon & Number (Center on Desktop, Left on Mobile) */}
                  <div className="relative z-10 flex flex-col items-center shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
                    <div className="w-14 h-14 rounded-full bg-white border-[2px] border-primary shadow-md flex items-center justify-center text-primary font-bold text-xl sm:text-2xl relative">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content (Alternates sides on Desktop) */}
                  <div className={\`md:w-1/2 \${isEven ? 'md:pr-10 lg:pr-16' : 'md:pl-10 lg:pl-16'} pt-2 md:pt-0 w-full\`}>
                    <div className="bg-slate-100 rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>`;

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let modifiedCount = 0;
const blockRegex = /<div className="max-w-5xl mx-auto relative">[\s\S]*?\{steps\.map\([\s\S]*?\}\)\}\s*<\/div>/;

walkDir(componentsDir, (filePath) => {
  if (filePath.endsWith('Process.tsx')) {
    const code = fs.readFileSync(filePath, 'utf8');
    if (blockRegex.test(code)) {
      const newCode = code.replace(blockRegex, replacementBlock);
      if (newCode !== code) {
        fs.writeFileSync(filePath, newCode, 'utf8');
        console.log(`Updated: ${filePath}`);
        modifiedCount++;
      }
    }
  }
});

console.log(`Successfully updated ${modifiedCount} files.`);
