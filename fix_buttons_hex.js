const fs = require('fs');
const glob = require('glob');

const files = glob.sync('c:/Users/user/Desktop/inymart/iny lab/components/**/*.tsx');

let updatedFiles = 0;

for (const file of files) {
  if (file.includes('/about/') || file.includes('/portfolio/') || file.includes('/contact/') || file.includes('/blog/') || file.includes('/blogs/')) continue;
  if (!file.includes('/seo/') && !file.includes('/smo/') && !file.includes('/smm/') && !file.includes('/ppc/') && !file.includes('/local-seo/') && !file.includes('/ai-seo/') && !file.includes('/web-development/') && !file.includes('/web-analytics/') && !file.includes('/dma/') && !file.includes('/dmc/')) continue;

  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Match <button ... className="..."> or <Link ... className="...">
  const buttonOrLinkRegex = /<(?:button|Link)[^>]+className="([^"]+)"/g;
  
  content = content.replace(buttonOrLinkRegex, (match, classes) => {
    // Check if it's styled like a button
    if (classes.includes('bg-primary') || classes.includes('bg-[#ff6b35]') || classes.includes('border-primary') || classes.includes('border-[#ff6b35]')) {
      if (classes.includes('px-') || classes.includes('py-') || classes.includes('p-')) {
        if (!classes.includes('whitespace-nowrap')) {
          // Add whitespace-nowrap
          return match.replace(classes, classes + ' whitespace-nowrap');
        }
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
