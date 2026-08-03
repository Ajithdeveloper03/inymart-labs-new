const fs = require('fs');
const transcript = fs.readFileSync('C:/Users/user/.gemini/antigravity-ide/brain/80c1e460-34a0-45c7-99d4-b7e6b92f7a83/.system_generated/logs/transcript_full.jsonl', 'utf8');
const lines = transcript.split('\n');
const extracted = {};

for (const line of lines) {
  if (line.includes('file:///c:/Users/user/Desktop/inymart/iny%20lab/components/seo/')) {
    try {
      const data = JSON.parse(line);
      if (data.type === 'VIEW_FILE' && data.content) {
        const match = data.content.match(/file:\/\/\/c:\/Users\/user\/Desktop\/inymart\/iny%20lab\/components\/seo\/([^`\\]+)/);
        if (match) {
          let name = decodeURIComponent(match[1]);
          if (name.includes('.tsx')) {
            name = name.split('.tsx')[0] + '.tsx';
          }
          const contentStr = data.content;
          let parts = contentStr.split(/The following code has been modified.*?\n/);
          if (parts.length > 1) {
             const codePart = parts[1].split(/\nThe above content/)[0];
             let finalContent = codePart.split('\n').map(l => {
                 return l.replace(/^[0-9]+: /, '');
             }).join('\n');
             extracted[name] = finalContent;
          }
        }
      }
    } catch(e) {}
  }
}
console.log(Object.keys(extracted).join(', '));
for (const [name, text] of Object.entries(extracted)) {
  fs.writeFileSync('c:/Users/user/Desktop/inymart/iny lab/components/seo/' + name, text);
}
