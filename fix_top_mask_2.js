const fs = require('fs');
const glob = require('glob');
const files = glob.sync('components/**/*Process.tsx');

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Remove the entire index === 0 block regardless of its contents
  content = content.replace(/\{\/\* Mask to hide the line above the first icon \(Desktop only\) \*\/\}[\s\S]*?\{index === 0 && \([\s\S]*?\)\}/g, '');

  // Force the central line to use top-7
  content = content.replace(/className="hidden md:block absolute left-1\/2 top-\d+ bottom-0 w-0\.5 bg-slate-200 -translate-x-1\/2 -z-20"/g, 'className="hidden md:block absolute left-1/2 top-7 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 -z-20"');

  fs.writeFileSync(f, content);
  console.log('Fixed', f);
});
