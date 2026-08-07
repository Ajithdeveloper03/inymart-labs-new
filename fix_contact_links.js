const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const dirs = [
  path.join(__dirname, 'components'),
  path.join(__dirname, 'app'),
];

let allFiles = [];
dirs.forEach(d => { allFiles = getAllFiles(d, allFiles); });

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace raw <a href="/contact"> with <Link href="/contact"> 
  // but only when Link is already imported or add the import
  if (content.includes('href="/contact"') && !content.includes("import Link from 'next/link'")) {
    // Has raw anchor with /contact but no Link import yet
    // Check if it's a simple <a href="/contact" — replace with Link
    if (content.includes('<a\n') || content.includes('<a ')) {
      content = "import Link from 'next/link';\n" + content;
      changed = true;
    }
  }

  // Replace <a href="/contact"> with <Link href="/contact">
  // and </a> closing tag
  const aContactRegex = /<a(\s[^>]*?)href="\/contact"([^>]*?)>([\s\S]*?)<\/a>/g;
  content = content.replace(aContactRegex, (match, p1, p2, inner) => {
    changed = true;
    return `<Link${p1}href="/contact"${p2}>${inner}</Link>`;
  });

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Fixed /contact links in: ${path.basename(file)}`);
  }
});
