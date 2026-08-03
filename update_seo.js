const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\user\\Desktop\\inymart\\iny lab\\components\\seo';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  
  // Replace section paddings
  newContent = newContent.replace(/className="(relative\s+)?py-20\s+lg:py-32/g, 'className="$1pt-8 pb-12');
  newContent = newContent.replace(/pt-24\s+pb-12\s+sm:pt-28\s+lg:pt-32\s+lg:pb-16/g, 'pt-8 pb-12');
  
  if (file === 'SeoQuickAnswer.tsx') {
    newContent = newContent.replace('gap-16 items-center', 'gap-16 items-stretch');
    newContent = newContent.replace('<Reveal delay={200}>', '<Reveal delay={200} className="h-full">');
    newContent = newContent.replace('h-[350px] sm:h-[450px] lg:h-[600px]', 'h-full min-h-[350px]');
  }
  
  if (file === 'SeoWhatWeDo.tsx') {
    newContent = newContent.replace('gap-12 lg:gap-20 items-center', 'gap-12 lg:gap-20 items-stretch');
    newContent = newContent.replace(/<div className="order-1 lg:order-2 relative">\s*<Reveal>/, '<div className="order-1 lg:order-2 relative">\n            <Reveal className="h-full">');
    newContent = newContent.replace('aspect-[4/5] sm:aspect-square lg:aspect-[4/5]', 'h-full min-h-[400px]');
  }
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Updated ' + file);
  }
}
