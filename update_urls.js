const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      if (f !== 'node_modules' && f !== '.next' && f !== 'out') walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Match url('/...')
  content = content.replace(/url\('\/([^']+)'\)/g, (match, p1) => {
    if (p1.startsWith('new/')) return match;
    return `url('/new/${p1}')`;
  });
  
  // Match url(\"/...\")
  content = content.replace(/url\(\"\/([^"]+)\"\)/g, (match, p1) => {
    if (p1.startsWith('new/')) return match;
    return `url(\"/new/${p1}\")`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated: ' + filePath);
  }
}

['components', 'app'].forEach(dir => {
  if (fs.existsSync(dir)) walkDir(dir, processFile);
});
