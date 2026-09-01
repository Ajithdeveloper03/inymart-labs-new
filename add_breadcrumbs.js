const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/user/Desktop/inymart/iny lab';

const schemas = [
  {
    file: 'app/contact/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://inymartlabs.com/contact/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inymartlabs.com/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://inymartlabs.com/contact/" }
      ]
    }
  },
  {
    file: 'app/blogs/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://inymartlabs.com/blogs/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inymartlabs.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://inymartlabs.com/blogs/" }
      ]
    }
  },
  {
    file: 'app/portfolio/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://inymartlabs.com/portfolio/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inymartlabs.com/" },
        { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://inymartlabs.com/portfolio/" }
      ]
    }
  },
  {
    file: 'app/services/ai-seo-services/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://inymartlabs.com/services/ai-seo-services/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inymartlabs.com/" },
        { "@type": "ListItem", "position": 2, "name": "AI SEO Services", "item": "https://inymartlabs.com/services/ai-seo-services/" }
      ]
    }
  },
  {
    file: 'app/services/ppc-service/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://inymartlabs.com/services/ppc-service/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inymartlabs.com/" },
        { "@type": "ListItem", "position": 2, "name": "PPC Services", "item": "https://inymartlabs.com/services/ppc-service/" }
      ]
    }
  },
  {
    file: 'app/services/digital-marketing-agency/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://inymartlabs.com/services/digital-marketing-agency/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inymartlabs.com/" },
        { "@type": "ListItem", "position": 2, "name": "Digital Marketing Agency", "item": "https://inymartlabs.com/services/digital-marketing-agency/" }
      ]
    }
  },
  {
    file: 'app/services/digital-marketing-consulting/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://inymartlabs.com/services/digital-marketing-consulting/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inymartlabs.com/" },
        { "@type": "ListItem", "position": 2, "name": "Digital Marketing Consulting", "item": "https://inymartlabs.com/services/digital-marketing-consulting/" }
      ]
    }
  },
  {
    file: 'app/services/web-development/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://inymartlabs.com/services/web-development/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inymartlabs.com/" },
        { "@type": "ListItem", "position": 2, "name": "Web Development Services", "item": "https://inymartlabs.com/services/web-development/" }
      ]
    }
  },
  {
    file: 'app/services/web-analytics/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://inymartlabs.com/services/web-analytics/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inymartlabs.com/" },
        { "@type": "ListItem", "position": 2, "name": "Web Analytics Services", "item": "https://inymartlabs.com/services/web-analytics/" }
      ]
    }
  },
  {
    file: 'app/services/smm/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://inymartlabs.com/services/smm/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inymartlabs.com/" },
        { "@type": "ListItem", "position": 2, "name": "SMM Services", "item": "https://inymartlabs.com/services/smm/" }
      ]
    }
  },
  {
    file: 'app/services/smo/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://inymartlabs.com/services/smo/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inymartlabs.com/" },
        { "@type": "ListItem", "position": 2, "name": "SMO Services", "item": "https://inymartlabs.com/services/smo/" }
      ]
    }
  },
  {
    file: 'app/services/local-seo/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://inymartlabs.com/services/local-seo/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inymartlabs.com/" },
        { "@type": "ListItem", "position": 2, "name": "Local SEO Services", "item": "https://inymartlabs.com/services/local-seo/" }
      ]
    }
  }
];

schemas.forEach(({ file, schema }) => {
  const filePath = path.join(baseDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // check if already has breadcrumb schema
  if (content.includes('breadcrumbSchema')) {
    console.log(`Breadcrumb schema already exists in ${file}`);
    return;
  }

  // 1. insert `const breadcrumbSchema = ...` right before `export default function`
  const schemaStr = `const breadcrumbSchema = ${JSON.stringify(schema, null, 2)};\n\n`;
  content = content.replace(/(export default function)/, schemaStr + '$1');

  // 2. insert script tag after `<Header />` or after `return (\n    <>`
  const scriptTag = `      <script\n        type="application/ld+json"\n        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}\n      />\n`;
  
  // try inserting after return ( <>
  if (content.includes('return (\n    <>')) {
    content = content.replace(/return \(\n    <>/, 'return (\n    <>\n' + scriptTag);
  } else if (content.includes('return (\n    <div>')) {
      content = content.replace(/return \(\n    <div>/, 'return (\n    <div>\n' + scriptTag);
  } else if (content.includes('<Header />')) {
    content = content.replace(/<Header \/>/, '<Header />\n' + scriptTag);
  } else {
    console.log(`Could not find insertion point in ${file}`);
    return;
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${file}`);
});
