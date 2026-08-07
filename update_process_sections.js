const fs = require('fs');
const path = require('path');

const componentsDir = path.join('c:\\Users\\user\\Desktop\\inymart\\iny lab', 'components');
const seoProcessPath = path.join(componentsDir, 'seo', 'SeoProcess.tsx');

const seoCode = fs.readFileSync(seoProcessPath, 'utf8');

const blockRegex = /<div className="max-w-5xl mx-auto relative">[\s\S]*?\{steps\.map\([\s\S]*?\}\)\}\s*<\/div>/;

const match = seoCode.match(blockRegex);
if (!match) {
  console.error("Could not find the target block in SeoProcess.tsx!");
  process.exit(1);
}

const replacementBlock = match[0];
console.log("Found replacement block, length:", replacementBlock.length);

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let modifiedCount = 0;

walkDir(componentsDir, (filePath) => {
  if (filePath.endsWith('Process.tsx') && filePath !== seoProcessPath) {
    const code = fs.readFileSync(filePath, 'utf8');
    if (blockRegex.test(code)) {
      const newCode = code.replace(blockRegex, replacementBlock);
      if (newCode !== code) {
        fs.writeFileSync(filePath, newCode, 'utf8');
        console.log(`Updated: ${filePath}`);
        modifiedCount++;
      }
    } else {
      console.log(`Skipped (pattern not found): ${filePath}`);
    }
  }
});

console.log(`Successfully updated ${modifiedCount} files.`);
