const fs = require('fs');
const glob = require('glob');

const files = glob.sync('c:/Users/user/Desktop/inymart/iny lab/components/**/*.tsx');

let updatedFiles = 0;

for (const file of files) {
  // Only process if in a service directory
  if (file.includes('/about/') || file.includes('/portfolio/') || file.includes('/contact/') || file.includes('/blog/') || file.includes('/blogs/')) continue;
  if (!file.includes('/seo/') && !file.includes('/smo/') && !file.includes('/smm/') && !file.includes('/ppc/') && !file.includes('/local-seo/') && !file.includes('/ai-seo/') && !file.includes('/web-development/') && !file.includes('/web-analytics/') && !file.includes('/dma/') && !file.includes('/dmc/')) continue;

  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Simple regex to add whitespace-nowrap to classNames containing 'bg-primary' or 'rounded-full' in Link or button
  content = content.replace(/(<(?:button|Link)[^>]+className="[^"]+)(bg-primary)([^"]*")/g, (match, p1, p2, p3) => {
    if (!match.includes('whitespace-nowrap')) {
      return p1 + p2 + p3.slice(0, -1) + ' whitespace-nowrap"';
    }
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
    updatedFiles++;
  }
}

console.log(`Total updated files: ${updatedFiles}`);
