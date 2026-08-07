const fs = require('fs');
const path = require('path');
const dirs = ['components', 'app', 'data'];

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts') || p.endsWith('.js') || p.endsWith('.css')) {
      let content = fs.readFileSync(p, 'utf8');
      let originalContent = content;
      
      // Replace "/images/... with "/new/images/...
      content = content.replace(/"\/images\//g, '"/new/images/');
      // Replace '/images/... with '/new/images/...
      content = content.replace(/'\/images\//g, "'/new/images/");
      // Replace `/images/... with `/new/images/...
      content = content.replace(/`\/images\//g, '`/new/images/');
      // CSS url('/images/...
      content = content.replace(/url\('\/images\//g, "url('/new/images/");
      content = content.replace(/url\("\/images\//g, 'url("/new/images/');
      content = content.replace(/url\(\/images\//g, "url(/new/images/");

      // Replace "/banner ... with "/new/banner ... for the images in public root
      content = content.replace(/"\/banner /g, '"/new/banner ');
      content = content.replace(/'\/banner /g, "'/new/banner ");
      content = content.replace(/`\/banner /g, '`/new/banner ');
      
      // footer.png
      content = content.replace(/"\/footer.png"/g, '"/new/footer.png"');
      content = content.replace(/'\/footer.png'/g, "'/new/footer.png'");

      // logo.webp
      content = content.replace(/"\/logo.webp"/g, '"/new/logo.webp"');
      content = content.replace(/'\/logo.webp'/g, "'/new/logo.webp'");

      if (content !== originalContent) {
        fs.writeFileSync(p, content, 'utf8');
        console.log('Updated', p);
      }
    }
  }
}

dirs.forEach(walk);
console.log('Done!');
