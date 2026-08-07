const fs = require('fs');
const path = require('path');

function getAllFaqFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFaqFiles(fullPath, arrayOfFiles);
    } else if (fullPath.endsWith('Faq.tsx') && !fullPath.includes('sections\\Faqs.tsx')) {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const componentsDir = path.join(__dirname, 'components');
const files = getAllFaqFiles(componentsDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // 1. Fix heading mobile responsiveness - add sm: prefix variants
  // The service FAQs use "text-sm" in eyebrow without responsive variant
  if (content.includes('text-sm tracking-widest') && !content.includes('[12px] sm:text-sm tracking-widest')) {
    content = content.replace(
      /text-sm tracking-widest uppercase mb-4/g,
      'text-[12px] sm:text-sm tracking-widest uppercase mb-2 sm:mb-4'
    );
    changed = true;
  }

  // 2. Fix mb-10 on heading wrapper - add responsive
  if (content.includes('mb-10 mt-2') && !content.includes('mb-6 sm:mb-10')) {
    content = content.replace(
      /mb-10 mt-2/g,
      'mb-6 sm:mb-10 mt-0 sm:mt-2'
    );
    changed = true;
  }

  // 3. Fix h2 to match home FAQ heading style
  if (content.includes('text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6')) {
    content = content.replace(
      /text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-\[2\.75rem\] lg:leading-\[1\.1\] text-foreground mb-6/g,
      'text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0c1f28] leading-[1.2] mb-3 sm:mb-6'
    );
    changed = true;
  }

  // 4. Fix question text to be responsive
  if (content.includes('text-[15px] text-left leading-snug') && !content.includes('text-[12px] sm:text-[15px]')) {
    content = content.replace(
      /text-\[15px\] text-left leading-snug/g,
      'text-[12px] sm:text-[15px] md:text-[16px] text-left leading-snug'
    );
    changed = true;
  }

  // 5. Fix answer text to be responsive
  if (content.includes('text-[13.5px] leading-relaxed text-slate-500 font-medium"')) {
    content = content.replace(
      /text-\[13\.5px\] leading-relaxed text-slate-500 font-medium"/g,
      'text-[12px] sm:text-[13.5px] md:text-[15px] leading-relaxed text-slate-500 font-medium text-justify md:text-left"'
    );
    changed = true;
  }

  // 6. Add subtitle paragraph if missing (to match home page)
  if (!content.includes('Answers to the questions') && !content.includes('text-justify sm:text-center')) {
    // Find the h2 closing tag and add a paragraph after
    const h2Regex = /(<\/h2>\s*\n\s*<\/div>\s*\n\s*<\/Reveal>)/;
    if (h2Regex.test(content)) {
      content = content.replace(h2Regex, (match) => {
        return match.replace(
          '</h2>',
          '</h2>\n              \n              {/* Paragraph */}\n              <p className="font-sans text-slate-500 text-[12px] sm:text-[15px] leading-relaxed max-w-lg mx-auto text-justify sm:text-center">\n                Find answers to the most common questions about our services.\n              </p>'
        );
      });
      changed = true;
    }
  }

  // 7. Fix number circle badge size on mobile
  if (content.includes('text-sm font-bold text-white') && !content.includes('text-[12px] sm:text-sm font-bold text-white')) {
    content = content.replace(
      /h-\[34px\] w-\[34px\] items-center justify-center rounded-full bg-\[#0c1f28\] text-sm font-bold text-white/g,
      'h-[34px] w-[34px] items-center justify-center rounded-full bg-[#0c1f28] text-[12px] sm:text-sm font-bold text-white'
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${path.basename(file)}`);
  }
});
