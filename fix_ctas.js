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
      if (fullPath.endsWith('.tsx')) {
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

  // 1. Fix #home -> /
  if (content.includes('href="#home"')) {
    content = content.replace(/href="#home"/g, 'href="/"');
    changed = true;
  }

  // 2. Fix #contact -> /contact (temporary normalization)
  if (content.includes('href="#contact"')) {
    content = content.replace(/href="#contact"/g, 'href="/contact"');
    changed = true;
  }
  
  // 3. Check for /contact links that should be popup
  const linkRegex = /<(Link|a)([\s\S]*?)href="\/contact"([\s\S]*?)>([\s\S]*?)<\/\1>/g;
  let hasPopupUse = false;
  
  content = content.replace(linkRegex, (match, tag, p1, p2, textContent) => {
      // Clean up textContent to just text
      const cleanText = textContent.replace(/<[^>]+>/g, '').trim().toLowerCase();
      
      const popupKeywords = ['talk', 'quote', 'consultation', 'start', 'grow', 'ready', 'audit', 'analysis', 'proposal', 'join', 'journey'];
      const shouldBePopup = popupKeywords.some(kw => cleanText.includes(kw));
      
      if (shouldBePopup || cleanText.includes('talk to our') || cleanText.includes('start your')) {
          hasPopupUse = true;
          return `<button${p1}onClick={openPopup}${p2}>${textContent}</button>`;
      }
      return match; // keep as /contact
  });

  if (hasPopupUse) {
      changed = true;
      if (!content.includes('usePopup')) {
          // Add import
          if (content.includes("import Link from 'next/link'")) {
              content = content.replace(/(import Link from ['"]next\/link['"];?)/, "$1\nimport { usePopup } from '@/components/providers/PopupProvider';");
          } else {
              content = "import { usePopup } from '@/components/providers/PopupProvider';\n" + content;
          }
          
          // Add use client if not present
          if (!content.includes("'use client'") && !content.includes('"use client"')) {
              content = "'use client';\n\n" + content;
          }
          
          // Add hook inside component
          content = content.replace(/(export function \w+\([^)]*\)\s*{)/, "$1\n  const { openPopup } = usePopup();");
      }
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${path.basename(file)}`);
  }
});
