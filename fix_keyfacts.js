const fs = require('fs');
const path = require('path');

const componentsDir = path.join('c:\\Users\\user\\Desktop\\inymart\\iny lab', 'components');

const replacementBlock = `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <Reveal key={index} delay={index * 100}>
                <div className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[#ff6b35]/30 hover:bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#ff6b35]/30 group-hover:bg-[#ff6b35]/5 transition-colors">
                        <Icon className="w-6 h-6 text-slate-600 group-hover:text-[#ff6b35] transition-colors" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                        {fact.label}
                      </h3>
                    </div>
                    <p className="text-slate-800 font-medium leading-snug">
                      {fact.value}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>`;

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let modifiedCount = 0;
const blockRegex = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">[\s\S]*?<\/section>/;

walkDir(componentsDir, (filePath) => {
  if (filePath.endsWith('KeyFacts.tsx')) {
    const code = fs.readFileSync(filePath, 'utf8');
    if (blockRegex.test(code)) {
      const newCode = code.replace(blockRegex, replacementBlock);
      if (newCode !== code) {
        fs.writeFileSync(filePath, newCode, 'utf8');
        console.log(`Updated: ${filePath}`);
        modifiedCount++;
      }
    }
  }
});

console.log(`Successfully updated ${modifiedCount} files.`);
