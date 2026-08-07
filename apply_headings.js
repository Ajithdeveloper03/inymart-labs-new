const fs = require('fs');
const path = require('path');

const serviceDirs = [
  'ai-seo', 'dma', 'dmc', 'local-seo', 'ppc', 'seo', 'smm', 'smo', 'web-analytics', 'web-development'
];
const componentsDir = path.join('c:\\Users\\user\\Desktop\\inymart\\iny lab', 'components');

function processTextForGradient(text) {
  // If it already has a span with text-gradient, just clean it up if needed, but it's easier to strip and re-apply
  let cleanText = text.replace(/<span[^>]*>(.*?)<\/span>/gi, '$1');
  
  // Specific keyword matches
  const keywords = [
    'Digital Marketing Consulting',
    'Digital Marketing Services',
    'Digital Marketing Agency',
    'Web Analytics Service',
    'Web Development Service',
    'Social Media Optimization',
    'Social Media Marketing',
    'AI SEO Service',
    'Local SEO Service',
    'SEO Service',
    'Web Analytics',
    'Web Development',
    'Social Media',
    'Inymart Labs',
    'Your Social Presence?',
    'Your Website Data?',
    'That Works for You?',
    'Marketing Direction?',
    'Visibility?',
    'Results',
    'Who This Is For',
    'What We Do',
    'Questions',
    'Websites We Build'
  ];

  for (const kw of keywords) {
    if (cleanText.includes(kw)) {
      return cleanText.replace(new RegExp(`(${kw})`, 'g'), '<span className="text-gradient">$1</span>');
    }
  }

  // Fallback: wrap last 2 words
  const words = cleanText.split(' ');
  if (words.length >= 3) {
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
    // Preserve text-white if present
    const isWhite = classNames.includes('text-white');
    const colorClass = isWhite ? 'text-white' : 'text-[#0c1f28]'; // using a dark color, text-foreground might not be defined explicitly in all scopes if they don't use it. Home page uses text-foreground, let's use text-foreground.
    
    // Exact classes from SectionHeading.tsx on the Home page
    const newClasses = `font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${isWhite ? 'text-white' : 'text-foreground'}`;
    
    // Add any specific alignment classes if they were directly on the h2, like text-center.
    // Actually, it's safer to just apply the new classes. The parent divs usually handle alignment.
    // If the original had mb-4 or mb-6, we should probably keep it to avoid breaking spacing.
    const spacingClasses = classNames.split(' ').filter(c => c.startsWith('mb-') || c.startsWith('mt-') || c.startsWith('pb-') || c.startsWith('pt-')).join(' ');
    
    const finalClasses = `${newClasses} ${spacingClasses}`.trim();
    
    const newInner = processTextForGradient(innerText.trim());
    
    modified = true;
    return `<h2 className="${finalClasses}">\n  ${newInner}\n</h2>`;
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

console.log('Finished updating headings.');
