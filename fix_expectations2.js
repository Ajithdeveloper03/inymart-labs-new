const fs = require('fs');
const path = require('path');

const componentsDir = path.join('c:\\Users\\user\\Desktop\\inymart\\iny lab', 'components');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

const innerReplacement = `{points.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={index} delay={index * 100} className="h-full">
                <div className="bg-[#122b38] rounded-3xl p-8 border border-white/5 h-full hover:border-primary/50 transition-colors flex flex-col items-center justify-center text-center group">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0">
                        <Icon className="w-10 h-10 text-primary stroke-1" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">{point.title}</h3>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>`;

const blockRegex = /(<div className="grid[^>]+gap-6 mb-16">)\s*\{points\.map[\s\S]*?\}\)}\s*<\/div>/;

walkDir(componentsDir, (filePath) => {
  if (filePath.endsWith('Expectations.tsx')) {
    const code = fs.readFileSync(filePath, 'utf8');
    const match = code.match(blockRegex);
    if (match) {
      const newCode = code.replace(blockRegex, match[1] + '\n          ' + innerReplacement);
      if (newCode !== code) {
        fs.writeFileSync(filePath, newCode, 'utf8');
        console.log(`Updated: ${filePath}`);
      }
    }
  }
});
