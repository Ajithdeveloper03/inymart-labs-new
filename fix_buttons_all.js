const fs = require('fs');
const glob = require('glob');

const files = glob.sync('c:/Users/user/Desktop/inymart/iny lab/components/**/*.tsx');

let updatedFiles = 0;

for (const file of files) {
  if (file.includes('/about/') || file.includes('/portfolio/') || file.includes('/contact/') || file.includes('/blog/') || file.includes('/blogs/')) continue;
  if (!file.includes('/seo/') && !file.includes('/smo/') && !file.includes('/smm/') && !file.includes('/ppc/') && !file.includes('/local-seo/') && !file.includes('/ai-seo/') && !file.includes('/web-development/') && !file.includes('/web-analytics/') && !file.includes('/dma/') && !file.includes('/dmc/')) continue;

  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Find all classNames in the file
  content = content.replace(/className="([^"]+)"/g, (match, classes) => {
    // If it looks like a button (bg-primary, rounded-full, px-, py-)
    if (classes.includes('bg-primary') && classes.includes('rounded-full') && classes.includes('px-') && classes.includes('py-')) {
      if (!classes.includes('whitespace-nowrap')) {
        return `className="${classes} whitespace-nowrap"`;
      }
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
