const fs = require('fs');
const path = require('path');

const serviceDirs = [
  'ai-seo', 'dma', 'dmc', 'local-seo', 'ppc', 'seo', 'smm', 'smo', 'web-analytics', 'web-development'
];
const componentsDir = path.join('c:\\Users\\user\\Desktop\\inymart\\iny lab', 'components');

function processTextForGradient(text) {
  // Clean up any existing spans first to start fresh
  let cleanText = text.replace(/<span[^>]*>(.*?)<\/span>/gi, '$1');
  
  // Specific patterns to create a TRUE dual-color effect
  // Format: { full: 'String to match', color: 'Part to color' }
  const dualColorMap = [
    { full: 'Quick Answer', color: 'Answer' },
    { full: 'What We Do', color: 'We Do' },
    { full: 'Who This Is For', color: 'This Is For' },
    { full: 'Digital Marketing Consulting', color: 'Marketing Consulting' },
    { full: 'Digital Marketing Services', color: 'Marketing Services' },
    { full: 'Digital Marketing Agency', color: 'Marketing Agency' },
    { full: 'Web Analytics Service', color: 'Analytics Service' },
    { full: 'Web Development Service', color: 'Development Service' },
    { full: 'Social Media Optimization', color: 'Media Optimization' },
    { full: 'Social Media Marketing', color: 'Media Marketing' },
    { full: 'AI SEO Service', color: 'SEO Service' },
    { full: 'Local SEO Service', color: 'SEO Service' },
    { full: 'SEO Service', color: 'Service' },
    { full: 'Web Analytics', color: 'Analytics' },
    { full: 'Web Development', color: 'Development' },
    { full: 'Social Media', color: 'Media' },
    { full: 'Inymart Labs', color: 'Labs' },
    { full: 'Your Social Presence?', color: 'Social Presence?' },
    { full: 'Your Website Data?', color: 'Website Data?' },
    { full: 'That Works for You?', color: 'Works for You?' },
    { full: 'Marketing Direction?', color: 'Direction?' },
    { full: 'Visibility?', color: 'Visibility?' },
    { full: 'What Results Can You Expect?', color: 'Can You Expect?' },
    { full: 'Frequently Asked Questions', color: 'Asked Questions' },
    { full: 'Types of Websites We Build', color: 'We Build' }
  ];

  for (const item of dualColorMap) {
    if (cleanText.includes(item.full)) {
      // Replace the specific part with a span
      return cleanText.replace(new RegExp(`(${item.color})`, 'g'), '<span className="text-gradient">$1</span>');
    }
  }

  // Fallback: if it has 2 words, color the last one. If 3+, color the last two.
  const words = cleanText.split(' ');
  if (words.length === 2) {
    return `${words[0]} <span className="text-gradient">${words[1]}</span>`;
  } else if (words.length >= 3) {
    const lastTwo = words.slice(-2).join(' ');
    const rest = words.slice(0, -2).join(' ');
    return `${rest} <span className="text-gradient">${lastTwo}</span>`;
  }
  
  return `<span className="text-gradient">${cleanText}</span>`;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to match <h2 ...>...</h2>
  const h2Regex = /<h2\s+className="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g;
  
  let modified = false;
  const newContent = content.replace(h2Regex, (match, classNames, innerText) => {
    const newInner = processTextForGradient(innerText.trim());
    modified = true;
    return `<h2 className="${classNames}">\n  ${newInner}\n</h2>`;
  });

  if (modified && newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

serviceDirs.forEach(dir => {
  const dirPath = path.join(componentsDir, dir);
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach(f => {
      if (f.endsWith('.tsx')) {
        processFile(path.join(dirPath, f));
      }
    });
  }
});

console.log('Finished updating headings for true dual-color.');
