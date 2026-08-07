const fs = require('fs');
const glob = require('glob');

const files = glob.sync('c:/Users/user/Desktop/inymart/iny lab/components/**/*Process.tsx');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // We want to replace:
  //                 {/* Vertical Line Segment - Upwards */}
  //                 {index !== 0 && (
  //                   <div className="absolute w-0.5 bg-primary -z-10
  //                     left-1/2 top-[-64px] h-[64px]
  //                     md:top-0 md:h-[50%] -translate-x-1/2
  //                   "></div>
  //                 )}
  // with:
  //                 {/* Vertical Line Segment - Upwards */}
  //                 {index !== 0 && (
  //                   <div className="absolute w-0.5 bg-primary -z-10 hidden md:block
  //                     left-1/2 top-[-64px] h-[64px]
  //                     md:top-0 md:h-[50%] -translate-x-1/2
  //                   "></div>
  //                 )}

  const oldCode1 = `<div className="absolute w-0.5 bg-primary -z-10
                      left-1/2 top-[-64px] h-[64px]`;
  const newCode1 = `<div className="absolute w-0.5 bg-primary -z-10 hidden md:block
                      left-1/2 top-[-64px] h-[64px]`;

  if (content.includes(oldCode1)) {
    content = content.replaceAll(oldCode1, newCode1);
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
