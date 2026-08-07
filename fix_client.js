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
  if (content.includes('usePopup')) {
    if (!content.includes("'use client'") && !content.includes('"use client"')) {
      content = "'use client';\n\n" + content;
      fs.writeFileSync(file, content);
      console.log('Added use client to', file);
    }
  }
});
