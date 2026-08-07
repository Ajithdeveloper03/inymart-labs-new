const fs = require('fs');
const path = require('path');

const componentsDir = path.join('c:\\Users\\user\\Desktop\\inymart\\iny lab', 'components');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let modifiedCount = 0;

walkDir(componentsDir, (filePath) => {
  if (filePath.endsWith('Process.tsx')) {
    const code = fs.readFileSync(filePath, 'utf8');
    
    // We want to add 'relative z-20' to the title container
    const regex = /<div className="text-center max-w-3xl mx-auto mb-20">/g;
    
    if (regex.test(code)) {
      const newCode = code.replace(regex, '<div className="text-center max-w-3xl mx-auto mb-20 relative z-20">');
      if (newCode !== code) {
        fs.writeFileSync(filePath, newCode, 'utf8');
        console.log(`Updated: ${filePath}`);
        modifiedCount++;
      }
    } else {
      console.log(`Skipped (pattern not found or already updated): ${filePath}`);
    }
  }
});

console.log(`Successfully updated ${modifiedCount} files.`);
