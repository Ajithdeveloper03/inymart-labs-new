const fs = require('fs');
const glob = require('glob');

const files = glob.sync('c:/Users/user/Desktop/inymart/iny lab/components/**/*Process.tsx');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  const oldCode = `                <div className={\`relative flex flex-row \${isEven ? 'md:flex-row-reverse' : ''} gap-6 sm:gap-10 md:gap-0 items-start md:items-center mb-16 md:mb-24 last:mb-0\`}>
                  
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
                  <div className={\`md:w-1/2 \${isEven ? 'md:pr-10 lg:pr-16' : 'md:pl-10 lg:pl-16'} pt-2 md:pt-0 w-full\`}>`;

  const newCode = `                <div className={\`relative flex flex-col md:flex-row \${isEven ? 'md:flex-row-reverse' : ''} gap-6 sm:gap-10 md:gap-0 items-center mb-16 md:mb-24 last:mb-0\`}>
                  
                  {/* Vertical Line Segment - Downwards */}
                  {index !== steps.length - 1 && (
                    <div className="absolute w-0.5 bg-primary -z-10
                      left-1/2 top-[56px] h-[calc(100%+8px)]
                      md:top-1/2 md:h-[calc(50%+96px)] -translate-x-1/2
                    "></div>
                  )}

                  {/* Vertical Line Segment - Upwards */}
                  {index !== 0 && (
                    <div className="absolute w-0.5 bg-primary -z-10
                      left-1/2 top-[-64px] h-[64px]
                      md:top-0 md:h-[50%] -translate-x-1/2
                    "></div>
                  )}

                  {/* Horizontal Connection Line */}
                  <div className={\`absolute bg-primary -z-10 h-[2px] hidden md:block
                    md:top-1/2 md:-translate-y-1/2
                    \${isEven 
                      ? 'md:left-auto md:right-1/2 md:w-10 lg:w-16' 
                      : 'md:left-1/2 md:w-10 lg:w-16'
                    }
                  \`} />

                  {/* Left Spacer (Desktop only) */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Icon & Number (Center on both) */}
                  <div className="relative z-10 flex flex-col items-center shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
                    <div className="w-14 h-14 rounded-full bg-white border-[2px] border-primary shadow-md flex items-center justify-center text-primary font-bold text-xl sm:text-2xl relative">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content (Alternates sides on Desktop, Full width on Mobile) */}
                  <div className={\`md:w-1/2 \${isEven ? 'md:pr-10 lg:pr-16' : 'md:pl-10 lg:pl-16'} pt-2 md:pt-0 w-full px-2 sm:px-8 md:px-0\`}>`;

  if (content.includes("Left Spacer (Desktop only)")) {
    content = content.replace(oldCode, newCode);
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  } else {
    console.log(`Skipped ${file}`);
  }
}
