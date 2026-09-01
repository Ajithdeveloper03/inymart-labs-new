const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/user/Desktop/inymart/iny lab';

// Add Breadcrumbs Schemas
const bcSchemas = [
  {
    file: 'app/services/seo/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://inymartlabs.com/services/seo/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inymartlabs.com/" },
        { "@type": "ListItem", "position": 2, "name": "SEO Services", "item": "https://inymartlabs.com/services/seo/" }
      ]
    }
  },
  {
    file: 'app/about/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://inymartlabs.com/about/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inymartlabs.com/" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://inymartlabs.com/about/" }
      ]
    }
  }
];

// Add FAQ Schemas
const faqSchemas = [
  {
    file: 'app/services/smm/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What does a social media marketing agency in Tamil Nadu do?", "acceptedAnswer": { "@type": "Answer", "text": "A social media marketing agency in Tamil Nadu helps businesses promote their products and services through platforms such as Facebook, Instagram, LinkedIn, and other relevant social channels. Services may include strategy, content creation, paid advertising, audience targeting, campaign management, and performance tracking." } },
        { "@type": "Question", "name": "Is social media marketing the same as social media optimization?", "acceptedAnswer": { "@type": "Answer", "text": "No. Social media marketing focuses on promoting a business through organic content and paid advertising, while social media optimization focuses on improving social profiles, content, engagement, and overall visibility. Both can work together as part of a complete social media strategy." } },
        { "@type": "Question", "name": "How much should I budget for social media ads?", "acceptedAnswer": { "@type": "Answer", "text": "The ideal social media advertising budget depends on your business goals, target audience, industry, location, competition, and campaign objectives. Inymart Labs can recommend a suitable budget based on your marketing goals and expected results." } },
        { "@type": "Question", "name": "How soon will I see results from social media ads?", "acceptedAnswer": { "@type": "Answer", "text": "Social media advertising can generate initial data and engagement soon after a campaign launches, but the time required to achieve consistent results varies based on the audience, creative, offer, budget, campaign objective, and ongoing optimisation." } },
        { "@type": "Question", "name": "What makes Inymart Labs the right social media marketing agency in Tamil Nadu and social media marketing agency in Trichy?", "acceptedAnswer": { "@type": "Answer", "text": "Inymart Labs creates customised social media marketing strategies based on your business goals, target audience, industry, and budget. We focus on effective campaign planning, audience targeting, creative testing, performance monitoring, and continuous optimisation." } },
        { "@type": "Question", "name": "Can you run ads for both local and online businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Inymart Labs can manage social media advertising campaigns for both local and online businesses. Campaigns can be customised to target specific locations, audiences, interests, behaviours, or online customer segments." } },
        { "@type": "Question", "name": "Will I know exactly where my ad budget is going?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Campaign performance can be monitored through regular reporting that shows important metrics such as ad spend, impressions, clicks, reach, leads, conversions, cost per result, and overall campaign performance." } }
      ]
    }
  },
  {
    file: 'app/services/web-analytics/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What does a Web Analytics Service do?", "acceptedAnswer": { "@type": "Answer", "text": "A Web Analytics Service helps businesses track, analyse, and understand website data such as traffic, user behaviour, conversions, engagement, and campaign performance. It helps identify opportunities to improve website performance and marketing results." } },
        { "@type": "Question", "name": "I already have Google Analytics installed - do I still need this service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Having Google Analytics installed provides access to data, but a Web Analytics Service helps interpret that data, identify important trends, find conversion issues, track key metrics, and turn website data into actionable marketing insights." } },
        { "@type": "Question", "name": "How often will I receive reports?", "acceptedAnswer": { "@type": "Answer", "text": "Reporting frequency can be customised based on your business requirements. Inymart Labs can provide regular analytics reports covering website traffic, user behaviour, conversions, campaign performance, and other important metrics." } },
        { "@type": "Question", "name": "What makes Inymart Labs the right Web Analytics Service in Tamil Nadu and Web Analytics Service in Trichy?", "acceptedAnswer": { "@type": "Answer", "text": "Inymart Labs provides customised web analytics solutions focused on understanding user behaviour, measuring marketing performance, identifying conversion opportunities, and helping businesses make data-driven decisions." } },
        { "@type": "Question", "name": "Can you help me understand why my website isn't converting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We can analyse website traffic, user journeys, landing pages, engagement metrics, conversion paths, and other available data to identify potential reasons for low conversions and recommend areas for improvement." } },
        { "@type": "Question", "name": "Do I need to buy any special tools for this?", "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. Web analytics can often be managed using tools such as Google Analytics and Google Tag Manager. Depending on your business requirements, additional analytics or reporting tools may be recommended." } }
      ]
    }
  },
  {
    file: 'app/services/web-development/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is a Web Development Service?", "acceptedAnswer": { "@type": "Answer", "text": "A Web Development Service involves designing, developing, testing, and maintaining websites to help businesses build a professional online presence. It can include website development, responsive design, functionality, performance optimisation, and ongoing support." } },
        { "@type": "Question", "name": "How long does it take to build a new website?", "acceptedAnswer": { "@type": "Answer", "text": "The time required to build a website depends on its size, design, functionality, content, and project requirements. A simple business website may take less time, while complex websites with advanced features may require several weeks or more." } },
        { "@type": "Question", "name": "Can you redesign my existing website instead of building a new one?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Inymart Labs can redesign existing websites to improve their visual appearance, user experience, mobile responsiveness, performance, navigation, and overall functionality without necessarily building an entirely new website." } },
        { "@type": "Question", "name": "Will my website work well on mobile phones?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Inymart Labs develops responsive websites designed to provide a smooth and user-friendly experience across mobile phones, tablets, laptops, and desktop devices." } },
        { "@type": "Question", "name": "What makes Inymart Labs the right Web Development Service in Tamil Nadu and Web Development Service in Trichy?", "acceptedAnswer": { "@type": "Answer", "text": "Inymart Labs focuses on building professional, responsive, user-friendly, and performance-oriented websites based on each business's goals, brand identity, target audience, and functional requirements." } },
        { "@type": "Question", "name": "Do you provide support after the website is launched?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Inymart Labs can provide post-launch website support to help with updates, maintenance, troubleshooting, performance improvements, and other website-related requirements." } }
      ]
    }
  },
  {
    file: 'app/services/digital-marketing-consulting/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is Digital Marketing Consulting?", "acceptedAnswer": { "@type": "Answer", "text": "Digital Marketing Consulting provides expert guidance to help businesses plan, improve, and optimise their online marketing strategies. It can cover SEO, paid advertising, social media, content marketing, analytics, conversion optimisation, and overall digital growth." } },
        { "@type": "Question", "name": "Do you only offer advice, or do you also implement the strategy?", "acceptedAnswer": { "@type": "Answer", "text": "Inymart Labs can provide both strategic guidance and implementation support. Depending on your business requirements, we can help develop the strategy and also assist with executing and optimising the recommended digital marketing activities." } },
        { "@type": "Question", "name": "How long does a consulting engagement typically last?", "acceptedAnswer": { "@type": "Answer", "text": "The duration of a digital marketing consulting engagement depends on your business goals, current marketing setup, project scope, and requirements. Consulting can range from short-term strategic sessions to ongoing support and optimisation." } },
        { "@type": "Question", "name": "What makes Inymart Labs the right choice for Digital Marketing Consulting in Tamil Nadu and Trichy?", "acceptedAnswer": { "@type": "Answer", "text": "Inymart Labs provides customised digital marketing consulting based on your business goals, target audience, industry, competition, and existing marketing activities. Our approach focuses on practical strategies, measurable objectives, and actionable recommendations." } },
        { "@type": "Question", "name": "Is this service only for businesses without any marketing in place?", "acceptedAnswer": { "@type": "Answer", "text": "No. Digital Marketing Consulting can benefit businesses at different stages, including businesses that already have marketing campaigns in place. We can review existing strategies, identify gaps, recommend improvements, and help optimise current marketing efforts." } },
        { "@type": "Question", "name": "Will you help my team understand the strategy, not just hand over a report?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Inymart Labs focuses on helping your team understand the recommended strategy, priorities, processes, and key performance metrics so they can confidently apply the insights to their digital marketing activities." } }
      ]
    }
  },
  {
    file: 'app/services/digital-marketing-agency/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What does a Digital Marketing Agency do?", "acceptedAnswer": { "@type": "Answer", "text": "A Digital Marketing Agency helps businesses grow their online presence through services such as SEO, Local SEO, Google Ads, PPC, social media marketing, content marketing, web analytics, and digital marketing strategy." } },
        { "@type": "Question", "name": "Do I need to use all your services, or can I choose just one?", "acceptedAnswer": { "@type": "Answer", "text": "You do not need to use all our services. Inymart Labs offers individual digital marketing services, allowing you to choose the services that best match your business goals, requirements, and budget." } },
        { "@type": "Question", "name": "How is this different from hiring separate freelancers for each service?", "acceptedAnswer": { "@type": "Answer", "text": "Working with Inymart Labs provides a coordinated digital marketing approach where different marketing activities can work together under one strategy, helping maintain consistency and simplify campaign management." } },
        { "@type": "Question", "name": "What makes Inymart Labs the right Digital Marketing Agency in Tamil Nadu and Digital Marketing Agency in Trichy?", "acceptedAnswer": { "@type": "Answer", "text": "Inymart Labs provides customised digital marketing strategies based on your business goals, target audience, industry, competition, and budget. Our approach focuses on measurable performance, continuous optimisation, and long-term online growth." } },
        { "@type": "Question", "name": "How soon will I start seeing results?", "acceptedAnswer": { "@type": "Answer", "text": "The time required to see results depends on the services used, competition, industry, budget, website condition, and campaign strategy. Paid advertising may generate results faster, while SEO and organic strategies generally require consistent effort over several months." } },
        { "@type": "Question", "name": "Will I get regular updates on performance?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Inymart Labs provides regular performance updates based on the services and campaign requirements. Reports may include traffic, leads, conversions, keyword rankings, engagement, advertising performance, and other relevant metrics." } }
      ]
    }
  },
  {
    file: 'app/services/ppc-service/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is PPC?", "acceptedAnswer": { "@type": "Answer", "text": "PPC stands for Pay-Per-Click advertising. It is a digital advertising model where businesses pay when someone clicks on their advertisement. PPC can help businesses reach targeted customers, generate leads, increase website traffic, and drive sales." } },
        { "@type": "Question", "name": "How much should I budget for Google Ads?", "acceptedAnswer": { "@type": "Answer", "text": "The right Google Ads budget depends on your business goals, industry, target audience, competition, location, and expected results. Inymart Labs can recommend a suitable budget based on your specific business requirements." } },
        { "@type": "Question", "name": "How soon will I see results from PPC?", "acceptedAnswer": { "@type": "Answer", "text": "PPC campaigns can start generating traffic and performance data soon after they are launched. The time required to achieve consistent results depends on factors such as budget, competition, targeting, ad quality, landing pages, and ongoing campaign optimisation." } },
        { "@type": "Question", "name": "What makes Inymart Labs the right PPC Service in Tamil Nadu and PPC Service in Trichy?", "acceptedAnswer": { "@type": "Answer", "text": "Inymart Labs provides customised PPC strategies based on your business goals, target audience, industry, location, and budget. Our approach focuses on targeted campaigns, performance tracking, continuous optimisation, and improving the efficiency of your advertising spend." } },
        { "@type": "Question", "name": "Can you run PPC alongside my SEO efforts?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. PPC and SEO can work together as part of a complete digital marketing strategy. PPC can provide immediate paid visibility and valuable campaign data, while SEO focuses on building long-term organic search visibility." } },
        { "@type": "Question", "name": "Will I know exactly where my ad budget is being spent?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Campaign reports can provide visibility into advertising spend, impressions, clicks, conversions, cost per click, cost per lead, and other important performance metrics so you can understand how your budget is being used." } }
      ]
    }
  },
  {
    file: 'app/services/ai-seo-services/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is AEO or AI SEO?", "acceptedAnswer": { "@type": "Answer", "text": "AEO stands for Answer Engine Optimisation, while AI SEO focuses on improving a business's visibility across AI-powered search and answer platforms. These strategies help make content clear, relevant, authoritative, and easier for search engines and AI systems to understand." } },
        { "@type": "Question", "name": "Is AI SEO different from regular SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Traditional SEO primarily focuses on improving visibility in search engine results, while AI SEO also considers how content and business information may be discovered, understood, and referenced by AI-powered search and answer systems. Both approaches can work together." } },
        { "@type": "Question", "name": "How long does it take to see results from AI SEO?", "acceptedAnswer": { "@type": "Answer", "text": "The time required to see results from AI SEO varies depending on factors such as website authority, content quality, competition, online presence, and the strategies implemented. Consistent optimisation and quality content may improve visibility over time." } },
        { "@type": "Question", "name": "What makes Inymart Labs the right AI SEO Service in Tamil Nadu and AI SEO Service in Trichy?", "acceptedAnswer": { "@type": "Answer", "text": "Inymart Labs provides customised AI SEO strategies based on your business goals, industry, target audience, and online presence. Our approach focuses on creating useful content, improving information clarity, strengthening website visibility, and preparing content for AI-powered search experiences." } },
        { "@type": "Question", "name": "Do I still need traditional SEO if I invest in AI SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Traditional SEO remains important because AI SEO and traditional SEO complement each other. A strong technical foundation, quality content, relevant keywords, website optimisation, and authority signals can support visibility across both traditional search engines and AI-powered search experiences." } },
        { "@type": "Question", "name": "Can you fix incorrect information AI tools currently show about my business?", "acceptedAnswer": { "@type": "Answer", "text": "We can help identify inaccurate or inconsistent business information across online sources and improve the accuracy and consistency of your website and business profiles. However, AI platforms control their own outputs, so specific corrections or changes cannot be guaranteed." } }
      ]
    }
  },
  {
    file: 'app/portfolio/page.tsx',
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What kind of businesses has Inymart Labs worked with?", "acceptedAnswer": { "@type": "Answer", "text": "Inymart Labs works with businesses across different industries, including startups, small businesses, local businesses, service providers, and growing companies that want to improve their online presence and generate more leads." } },
        { "@type": "Question", "name": "Does Inymart Labs only work with businesses in Tamil Nadu?", "acceptedAnswer": { "@type": "Answer", "text": "No. Although Inymart Labs is based in Tamil Nadu, the agency can work with businesses from different locations and provide digital marketing services based on their business goals and requirements." } },
        { "@type": "Question", "name": "Can I see examples of Inymart Labs' client work?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Inymart Labs can share relevant examples, case studies, or selected client work where permission is available. The examples may demonstrate different digital marketing strategies and campaign outcomes." } },
        { "@type": "Question", "name": "What services have these clients used?", "acceptedAnswer": { "@type": "Answer", "text": "Clients may use services such as SEO, Local SEO, Google Ads, PPC, social media marketing, social media optimisation, web analytics, web development, and digital marketing consulting depending on their specific business needs." } },
        { "@type": "Question", "name": "What makes Inymart Labs the right Digital Marketing Agency in Trichy, Tamil Nadu?", "acceptedAnswer": { "@type": "Answer", "text": "Inymart Labs provides customised digital marketing strategies based on each business's goals, target audience, industry, competition, and budget. The approach focuses on measurable performance, consistent optimisation, and building sustainable online growth." } }
      ]
    }
  }
];

const injectSchema = (file, schema, varName) => {
  const filePath = path.join(baseDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found for schema injection: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes(varName)) {
    console.log(`${varName} already exists in ${file}`);
    return;
  }

  const schemaStr = `const ${varName} = ${JSON.stringify(schema, null, 2)};\n\n`;
  content = content.replace(/(export default function)/, schemaStr + '$1');

  const scriptTag = `      <script\n        type="application/ld+json"\n        dangerouslySetInnerHTML={{ __html: JSON.stringify(${varName}) }}\n      />\n`;
  
  if (content.includes('return (\n    <>')) {
    content = content.replace(/return \(\n    <>/, 'return (\n    <>\n' + scriptTag);
  } else if (content.includes('return (\n    <div>')) {
    content = content.replace(/return \(\n    <div>/, 'return (\n    <div>\n' + scriptTag);
  } else if (content.includes('<Header />')) {
    content = content.replace(/<Header \/>/, '<Header />\n' + scriptTag);
  } else {
    console.log(`Could not find insertion point in ${file} for ${varName}`);
    return;
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Injected ${varName} into ${file}`);
};

bcSchemas.forEach(({ file, schema }) => injectSchema(file, schema, 'breadcrumbSchemaNew'));
faqSchemas.forEach(({ file, schema }) => injectSchema(file, schema, 'faqSchema'));

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
  const metadataRegex = /export const metadata: Metadata = {([\s\S]*?)};/;
  const match = content.match(metadataRegex);
  if (!match) {
    console.log(`No metadata found in ${file}`);
    return;
  }

  let metadataContent = match[1];
  
  if (metadataContent.includes('keywords:')) {
    // Already has keywords, append to it
    const kwRegex = /keywords:\s*\[([\s\S]*?)\]/;
    const kwMatch = metadataContent.match(kwRegex);
    if (kwMatch) {
      const existingKw = kwMatch[1].trim();
      const additionalKw = newKeywords.map(k => `'${k}'`).join(', ');
      const newKwStr = existingKw ? existingKw + ',\n    ' + additionalKw : additionalKw;
      content = content.replace(kwRegex, `keywords: [${newKwStr}]`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated existing keywords in ${file}`);
    }
  } else {
    // Add keywords field
    const additionalKw = newKeywords.map(k => `'${k}'`).join(', ');
    const newMetadata = `export const metadata: Metadata = {${metadataContent}  keywords: [${additionalKw}],\n};`;
    content = content.replace(metadataRegex, newMetadata);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Added keywords to ${file}`);
  }
};

keywordsUpdates.forEach(({ file, keywords }) => injectKeywords(file, keywords));
