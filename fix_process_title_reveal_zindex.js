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

walkDir(componentsDir, (filePath) => {
  if (filePath.endsWith('Process.tsx')) {
    let code = fs.readFileSync(filePath, 'utf8');
    
    // First, remove the previously added relative z-20 from the inner div
    code = code.replace(/<div className="text-center max-w-3xl mx-auto mb-20 relative z-20">/g, '<div className="text-center max-w-3xl mx-auto mb-20">');
    
    // Then wrap the Reveal with a div having relative z-20
    // We look for the Reveal that wraps the title.
    // It's usually like:
    // <Reveal>
    //   <div className="text-center max-w-3xl mx-auto mb-20">
    // ...
    //   </div>
    // </Reveal>
    
    const titleRegex = /(<Reveal>\s*<div className="text-center max-w-3xl mx-auto mb-20">[\s\S]*?<\/div>\s*<\/Reveal>)/;
    
    if (titleRegex.test(code)) {
      // Check if not already wrapped
      if (!code.includes('<div className="relative z-20">\n        <Reveal>\n          <div className="text-center max-w-3xl mx-auto mb-20">')) {
        code = code.replace(titleRegex, '<div className="relative z-20">\n          $1\n        </div>');
        fs.writeFileSync(filePath, code, 'utf8');
        console.log(`Updated: ${filePath}`);
      }
    }
  }
});
