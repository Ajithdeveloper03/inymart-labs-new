const fs = require('fs');
const path = require('path');
let missed = [];
function walkDir(dir) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      if (!['node_modules', '.next', 'out'].includes(f)) walkDir(dirPath);
    } else if (dirPath.endsWith('.tsx') || dirPath.endsWith('.ts')) {
      let content = fs.readFileSync(dirPath, 'utf8');
      
      // Match any string that ends with an image extension and doesn't start with http or /new/
      let regex = /['"](?!\/?new\/|http)[^'"]+\.(png|jpeg|jpg|webp|svg|gif|avif)['"]/gi;
      let matches = content.match(regex);
      if (matches) missed.push({file: dirPath, matches});
    }
  });
}
['components', 'app', 'lib', 'data'].forEach(dir => {
  if (fs.existsSync(dir)) walkDir(dir);
});
console.log(JSON.stringify(missed, null, 2));
