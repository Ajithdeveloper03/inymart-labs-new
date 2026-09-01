const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, files);
    } else if (fullPath.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

const allFiles = [...getFiles('components'), ...getFiles('app')];
const components = {};
for (const file of allFiles) {
  const basename = path.basename(file, '.tsx');
  components[basename] = file;
}

const updates = [
  { comp: 'WhyChooseUs', alt: "Business professional presenting a growth chart on a tablet during a corporate meeting." },
  { comp: 'SeoQuickAnswer', alt: "Laptop displaying Google search results with a highlighted top result, representing search engine optimization and online visibility." },
  { comp: 'SeoWhatWeDo', alt: " Digital marketer researching local search results on a laptop while taking notes in a notebook at a desk." },
  { comp: 'LocalSeoQuickAnswer', alt: "Tablet displaying a city map with multiple location pins, representing local search and location-based business visibility" },
  { comp: 'LocalSeoWhatWeDo', alt: "Digital marketing and local SEO concept featuring a laptop with analytics, a location map and pin, global map, and city landmarks representing local business growth" },
  { comp: 'SmoQuickAnswer', alt: "Social media marketing concept featuring Facebook, Instagram, and LinkedIn icons, a smartphone, engagement symbols, analytics charts, and a rising growth arrow." },
  { comp: 'SmoWhatWeDo', alt: "Social media marketing concept featuring a smartphone, Facebook, Instagram, and LinkedIn icons, audience engagement, analytics charts, a target, and upward growth arrows." },
  { comp: 'SmmQuickAnswer', alt: " Instagram ad for a saree business displayed on a smartphone, with WhatsApp new-lead notifications showing customer inquiries about products, prices, and delivery." },
  { comp: 'SmmWhatIs', alt: " Content creator filming an Instagram Reel with a smartphone and ring light while planning social media content on a laptop" },
  { comp: 'SmmWhatWeDo', alt: "Digital marketing team planning a local business growth campaign, with a strategist explaining Reels, Meta lead ads, WhatsApp conversions, retargeting, and campaign performance metrics." },
  { comp: 'WebAnalyticsQuickAnswer', alt: " Digital marketing performance audit displayed on a tablet, showing Google Search Console, Google Analytics, website traffic, clicks, impressions, conversions, and SEO keyword data." },
  { comp: 'WebAnalyticsWhatIs', alt: " Digital marketing professionals reviewing a website traffic and lead conversion report on a tablet during a business meeting." },
  { comp: 'WebAnalyticsWhatWeDo', alt: " Website analytics dashboard showing users, sessions, traffic sources, click heatmaps, conversion funnel, top pages, device breakdown, and data-driven growth metrics." },
  { comp: 'WebDevQuickAnswer', alt: " Web designer reviewing an old and new website design on a tablet alongside a website wireframe sketchbook" },
  { comp: 'WebDevWhatIs', alt: " Responsive web design concept showing a mobile website displayed on a smartphone alongside its desktop version on a laptop." },
  { comp: 'WebDevWhatWeDo', alt: " Web development workspace featuring a laptop with coding software, a desktop monitor displaying a responsive website, and a smartphone showing the mobile version." },
  { comp: 'DmcQuickAnswer', alt: " Digital marketing analytics concept featuring a laptop with website performance charts, traffic sources, social media icons, target and growth graphics, and a rising analytics graph." },
  { comp: 'DmcWhatIs', alt: " Digital marketing analytics concept featuring a laptop with performance charts, SEO, social media, digital marketing icons, traffic sources, and business growth metrics" },
  { comp: 'DmcWhatWeDo', alt: "Digital marketing analytics concept featuring a laptop with SEO and traffic performance charts, social media icons, global connectivity, and an upward growth arrow." },
  { comp: 'DmaQuickAnswer', alt: " Digital marketing professional reviewing a unified dashboard showing website, WhatsApp, Google Ads, Meta Ads, Instagram, and SEO leads, with a marketing strategy notebook beside the tablet." },
  { comp: 'DmaWhatIs', alt: " Digital marketing team discussing a growth funnel, with a strategist presenting local SEO, Instagram Reels, Meta lead ads, and WhatsApp sales strategies on a whiteboard." },
  { comp: 'DmaWhatWeDo', alt: "Digital marketing workspace featuring a website on a desktop monitor, Meta Ads campaign dashboard on a laptop, Google Search Console analytics on a tablet, and a digital growth strategy notebook." },
  { comp: 'PpcQuickAnswer', alt: " Google Ads campaign dashboard showing clicks, leads, conversions, and campaign performance alongside a smartphone displaying a Google Ads call lead screen." },
  { comp: 'PpcWhatIs', alt: " Google search results for a digital marketing agency in Trichy, showing a sponsored Inymart Labs listing, local business map results, and a negative keywords checklist." },
  { comp: 'PpcWhatWeDo', alt: "Digital marketer creating Google Ads campaigns and display banner designs on dual monitors, with ad copy ideas, performance notes, and color palettes on the desk" },
  { comp: 'AiSeoQuickAnswer', alt: "AI-powered digital marketing concept showing a website connected to multiple AI tools, with a central artificial intelligence brain, verified outputs, and global digital connectivity." },
  { comp: 'AiSeoWhatIs', alt: " Digital marketing team analyzing a glowing map of India with connected technology icons, representing digital connectivity, local marketing, and business growth in India." },
  { comp: 'AiSeoWhatWeDo', alt: "Humanoid robot sitting on a wooden bench while holding a tablet in an indoor setting." },
  { comp: 'PortfolioQuickAnswer', alt: " Digital growth hub concept featuring a storefront, laptop analytics dashboard, SEO, social media, branding, advertising, traffic sources, conversions, and business growth metrics." },
  { comp: 'PortfolioWhyTrustUs', alt: " Modern IT park website design displayed on a large screen, featuring a futuristic business campus, infrastructure highlights, occupancy metrics, tenant information, and visit or enquiry options." },
  { comp: 'Brands', alt: " Digital marketing team collaborating on a strategy, with a presenter explaining ideas on a whiteboard while team members review notes and website content." },
  { comp: 'WhyDigitalMarketing', alt: " Business professional celebrating organic traffic growth, with an upward analytics chart displayed on a laptop and a banner highlighting SEO and AI search optimization." }
];

let changedCount = 0;

for (const { comp, alt } of updates) {
  const filePath = components[comp];
  if (!filePath) {
    console.log("Component not found:", comp);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace alt="something" or alt='something' with alt="new text"
  // For <Image ... alt="..."> or <img ... alt="...">
  const regex = /alt=(["'])(.*?)\1/g;
  
  let matchFound = false;
  let newContent = content.replace(regex, (match, p1, p2) => {
    // We only replace if the tag is Image or img, but it's simpler to just replace all `alt=""` since typically there's only one main image per section here, or the prompt specifically asks for the image alt text in that component.
    // Let's refine the regex to only match inside <Image or <img
    return `alt="${alt.replace(/"/g, '&quot;')}"`;
  });

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log("Updated", comp);
    changedCount++;
  } else {
    console.log("No alt attribute found to replace in", comp);
  }
}

console.log("Total updated:", changedCount);

// Find files that still have standard/empty alt texts like alt="" or alt="image" or alt="Image"
console.log("\n--- Components with empty or generic alt text ---");
for (const [comp, filePath] of Object.entries(components)) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('alt=""') || content.includes("alt=''") || content.includes('alt="image"') || content.includes('alt="Image"')) {
    console.log(comp);
  }
}
