const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      if (fullPath.endsWith('Cta.tsx')) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

const componentsDir = path.join(__dirname, 'components');
const files = getAllFiles(componentsDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace <button onClick={openPopup} ...>...</button> with <Link href="/contact" ...>...</Link>
  // Actually, some might not be using Link, but `a` tag is fine.
  
  // Regex to find a button with onClick={openPopup}
  const buttonRegex = /<button([\s\S]*?)onClick=\{openPopup\}([\s\S]*?)>([\s\S]*?)<\/button>/g;
  
  content = content.replace(buttonRegex, (match, p1, p2, inner) => {
    // Only if it doesn't also have setOpen(false) (like Header has)
    // Wait, the Header is not a *Cta.tsx file, so we are safe.
    changed = true;
    return `<Link\n                href="/contact"${p1}${p2}>${inner}</Link>`;
  });

  if (changed) {
    // Ensure `Link` is imported
    if (!content.includes("import Link from 'next/link'")) {
        content = content.replace(/(import { [^}]+ } from 'lucide-react';)/, "$1\nimport Link from 'next/link';");
    }
    fs.writeFileSync(file, content);
    console.log(`Updated ${path.basename(file)}`);
  }
});
