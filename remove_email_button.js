const fs = require('fs');
const path = require('path');

const files = [
  'components/web-development/WebDevCta.tsx',
  'components/web-analytics/WebAnalyticsCta.tsx',
  'components/smo/SmoCta.tsx',
  'components/smm/SmmCta.tsx',
  'components/ppc/PpcCta.tsx',
  'components/dmc/DmcCta.tsx',
  'components/local-seo/LocalSeoCta.tsx',
  'components/dma/DmaCta.tsx',
  'components/ai-seo/AiSeoCta.tsx'
];

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    // Regex to match the Email Us <a> tag
    // It starts with <a and ends with </a>
    // We look for Email Us inside.
    const regex = /<a[^>]*href="mailto:[^"]*"[^>]*>[\s\S]*?Email Us[\s\S]*?<\/a>/g;
    
    // Also remove any leading/trailing newlines or spaces if needed, but simple replace is fine
    if (regex.test(content)) {
      content = content.replace(regex, '');
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Updated ${file}`);
    } else {
      console.log(`No match in ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});
