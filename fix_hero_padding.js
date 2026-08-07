const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('HeroBanner.tsx') || file.endsWith('Hero.tsx') || file.endsWith('Banner.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('c:\\Users\\user\\Desktop\\inymart\\iny lab\\components');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace pt-8 pb-12 with pt-32 pb-12 lg:pt-40
  // Or if they just have pt-8, replace with pt-32 lg:pt-40
  
  const originalContent = content;
  
  content = content.replace(/pt-8 pb-12/g, 'pt-32 pb-12 lg:pt-40');
  content = content.replace(/pt-12 pb-16/g, 'pt-32 pb-16 lg:pt-40'); // just in case some use pt-12
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed overlap in ${path.basename(file)}`);
  }
});
