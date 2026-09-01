const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/user/Desktop/inymart/iny lab';

// Update Keywords
const keywordsUpdates = [
  { file: 'app/services/ppc-service/page.tsx', keywords: ["PPC service in Tamil Nadu", "PPC service in Trichy"] },
  { file: 'app/services/digital-marketing-agency/page.tsx', keywords: ["Digital Marketing Service in Tamil Nadu", "Digital Marketing Service in Trichy"] },
  { file: 'app/services/digital-marketing-consulting/page.tsx', keywords: ["Digital Marketing Consulting in Tamil Nadu", "Digital Marketing Consulting in Trichy"] },
  { file: 'app/services/web-development/page.tsx', keywords: ["Web development Service in Tamil Nadu", "Web Development Service in Trichy"] },
  { file: 'app/services/web-analytics/page.tsx', keywords: ["Web Analytics Service in Tamil Nadu", "Web Analytics Service in Trichy"] },
  { file: 'app/services/smo/page.tsx', keywords: ["Social Media Optimization Company in Trichy"] },
  { file: 'app/services/smm/page.tsx', keywords: ["Social Media Marketing Agency in Trichy"] },
  { file: 'app/services/local-seo/page.tsx', keywords: ["Local SEO agency in Tamil Nadu", "Local SEO agency in Trichy"] },
  { file: 'app/services/seo/page.tsx', keywords: ["SEO agency in Trichy"] }
];

const injectKeywords = (file, newKeywords) => {
  const filePath = path.join(baseDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found for keyword injection: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if keywords already exists in metadata
  const metadataRegex = /export const metadata(: Metadata)? = {([\s\S]*?)};/;
  const match = content.match(metadataRegex);
  if (!match) {
    console.log(`No metadata found in ${file}`);
    return;
  }

  let metadataContent = match[2];
  
  if (metadataContent.includes('keywords:')) {
    // Already has keywords, append to it
    const kwRegex = /keywords:\s*\[([\s\S]*?)\]/;
    const kwMatch = metadataContent.match(kwRegex);
    if (kwMatch) {
      const existingKw = kwMatch[1].trim();
      const additionalKw = newKeywords.map(k => `'${k}'`).join(', ');
      const newKwStr = existingKw ? existingKw + ',\n    ' + additionalKw : additionalKw;
      content = content.replace(kwRegex, `keywords: [\n    ${newKwStr}\n  ]`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated existing keywords in ${file}`);
    }
  } else {
    // Add keywords field
    const additionalKw = newKeywords.map(k => `'${k}'`).join(', ');
    const newMetadata = `export const metadata${match[1] ? match[1] : ''} = {${metadataContent}  keywords: [${additionalKw}],\n};`;
    content = content.replace(metadataRegex, newMetadata);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Added keywords to ${file}`);
  }
};

keywordsUpdates.forEach(({ file, keywords }) => injectKeywords(file, keywords));
