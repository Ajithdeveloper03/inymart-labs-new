const fs = require('fs');
const glob = require('glob');

const files = glob.sync('c:/Users/user/Desktop/inymart/iny lab/components/**/*Process.tsx');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // We want to replace:
  // <div className="bg-slate-100 rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center">
  // with:
  // <div className="relative z-20 bg-slate-100 rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center">

  const oldStr = 'className="bg-slate-100 rounded-2xl p-6';
  const newStr = 'className="relative z-20 bg-slate-100 rounded-2xl p-6';

  if (content.includes(oldStr)) {
    content = content.replace(newStr, oldStr); // just in case it was already added, to prevent duplication, wait no, let's just do a normal replace
    content = content.replaceAll(oldStr, newStr);
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
