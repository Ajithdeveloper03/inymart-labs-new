const fs = require('fs');
const path = require('path');
function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) getFiles(fullPath, files);
    else if (fullPath.endsWith('.tsx')) files.push(fullPath);
  }
  return files;
}
const all = [...getFiles('components'), ...getFiles('app')];
const remaining = [];
for (const f of all) {
  if (f.includes('admin') || f.includes('layout.tsx')) continue;
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('<img ') || content.includes('<Image ')) {
    const matches = content.match(/alt=["']([^"']*)["']/g);
    if (matches) {
      matches.forEach(m => {
        let altText = m.split('=')[1].replace(/["']/g, '');
        // Check if the alt text is generic or short, but not dynamic { like alt={title}
        if (!altText.includes('{') && (altText === '' || altText.toLowerCase() === 'image' || altText.toLowerCase() === 'logo' || altText.length < 10)) {
          remaining.push(`${path.basename(f)}: "${altText}"`);
        }
      });
    }
  }
}
console.log([...new Set(remaining)].join('\n'));
