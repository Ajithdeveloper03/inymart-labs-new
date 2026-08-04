const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\user\\Desktop\\inymart\\iny lab\\components';
const getFiles = (dir) => {
  const result = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      result.push(...getFiles(filePath));
    } else if (filePath.endsWith('Faq.tsx') || filePath.endsWith('Faqs.tsx')) {
      result.push(filePath);
    }
  }
  return result;
};

const files = getFiles(dir);
let updatedCount = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // The block we want to replace looks like this:
  // <AccordionContent className="bg-white p-5 border-t border-slate-100">
  //   <div className="flex gap-5 items-center">
  //     <div className="shrink-0 rounded-lg overflow-hidden h-[60px] w-[80px]">
  //       <img 
  //         src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=200&q=80" 
  //         alt="FAQ Detail" 
  //         className="w-full h-full object-cover" 
  //       />
  //     </div>
  //     <div className="border-l-[3px] border-slate-200 pl-4 text-[13.5px] leading-relaxed text-slate-500 font-medium">
  //       {faq.a}
  //     </div>
  //   </div>
  // </AccordionContent>

  const regex = /<AccordionContent className="bg-white p-5 border-t border-slate-100">\s*<div className="flex gap-5 items-center">\s*<div className="shrink-0 rounded-lg overflow-hidden h-\[60px\] w-\[80px\]">\s*<img[^>]*\/>\s*<\/div>\s*(<div className="border-l-\[3px\] border-slate-200 pl-4 text-\[13\.5px\] leading-relaxed text-slate-500 font-medium">\s*\{faq\.a\}\s*<\/div>)\s*<\/div>\s*<\/AccordionContent>/g;

  if (regex.test(content)) {
    content = content.replace(regex, '<AccordionContent className="bg-white p-5 border-t border-slate-100">\n                    $1\n                  </AccordionContent>');
    fs.writeFileSync(file, content);
    updatedCount++;
    console.log('Updated:', file);
  } else {
    console.log('No match in:', file);
  }
}
console.log('Total updated FAQ files:', updatedCount);
