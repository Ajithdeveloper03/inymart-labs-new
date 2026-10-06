const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.next' && f !== 'out') {
        walkDir(dirPath, callback);
      }
    } else {
      callback(path.join(dir, f));
    }
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace src="/something" with src="/new/something"
  content = content.replace(/src="\/([^"]+)"/g, (match, p1) => {
    if (p1.startsWith('new/')) return match; 
    return `src="/new/${p1}"`;
  });

  // Replace src={'/something'} with src={'/new/something'}
  content = content.replace(/src=\{'\/([^']+)'\}/g, (match, p1) => {
    if (p1.startsWith('new/')) return match;
    return `src={'/new/${p1}'}`;
  });
  
  // Replace src={`/something`} with src={`/new/something`}
  content = content.replace(/src={`\/([^`]+)`}/g, (match, p1) => {
    if (p1.startsWith('new/')) return match;
    return `src={\`/new/${p1}\`}`;
  });

  // Replace image: '/something' with image: '/new/something'
  content = content.replace(/image:\s*'\/([^']+)'/g, (match, p1) => {
    if (p1.startsWith('new/')) return match;
    return `image: '/new/${p1}'`;
  });

  // Replace image: "/something" with image: "/new/something"
  content = content.replace(/image:\s*"\/([^"]+)"/g, (match, p1) => {
    if (p1.startsWith('new/')) return match;
    return `image: "/new/${p1}"`;
  });

  // Generic '/images/...' string literal replacement
  content = content.replace(/'\/images\/([^']+)'/g, (match, p1) => {
    if (p1.startsWith('new/')) return match;
    return `'/new/images/${p1}'`;
  });
  
  // Generic "/images/..." string literal replacement
  content = content.replace(/"\/images\/([^"]+)"/g, (match, p1) => {
    if (p1.startsWith('new/')) return match;
    return `"/new/images/${p1}"`;
  });

  // Fix for ServicesPageCards.tsx which has an array of strings
  if (filePath.includes('ServicesPageCards.tsx')) {
    content = content.replace(/'\/([^']+)'/g, (match, p1) => {
      if ((p1.endsWith('.png') || p1.endsWith('.webp') || p1.endsWith('.jpeg') || p1.endsWith('.jpg')) && !p1.startsWith('new/')) {
        return `'/new/${p1}'`;
      }
      return match;
    });
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

['components', 'app', 'data', 'lib'].forEach(dir => {
  if (fs.existsSync(dir)) {
    walkDir(dir, processFile);
  }
});
