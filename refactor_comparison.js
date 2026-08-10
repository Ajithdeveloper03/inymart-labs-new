const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if it's already using the exact Dmc style maybe? (We'll overwrite anyway, but Dmc is the template)
  
  const componentNameMatch = content.match(/export function (\w+)/);
  if (!componentNameMatch) return;
  const componentName = componentNameMatch[1];
  
  const h2Match = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  if (!h2Match) return;
  const h2Content = h2Match[1].trim();

  const h2EndIndex = content.indexOf('</h2>');
  const afterH2 = content.substring(h2EndIndex);
  const pMatch = afterH2.match(/<p[^>]*>([\s\S]*?)<\/p>/);
  const pContent = pMatch ? pMatch[1].trim() : "Businesses often ask how these compare. Here's the difference:";

  const theadMatch = content.match(/<thead[^>]*>([\s\S]*?)<\/thead>/);
  if (!theadMatch) return;
  const theadStr = theadMatch[1];
  const thRegex = /<th[^>]*>([\s\S]*?)<\/th>/g;
  let thMatch;
  const headers = [];
  while ((thMatch = thRegex.exec(theadStr)) !== null) {
    headers.push(thMatch[1].trim());
  }
  if (headers.length < 3) return;

  const thTagsRegex = /<th([^>]*)>[\s\S]*?<\/th>/g;
  let thTagMatch;
  let highlightColIndex = -1;
  let colIndex = 0;
  while ((thTagMatch = thTagsRegex.exec(theadStr)) !== null) {
    const classStr = thTagMatch[1];
    if (classStr.includes('text-primary') || classStr.includes('#ff6b35') || classStr.includes('bg-[#ff6b35]') || classStr.includes('bg-primary')) {
      highlightColIndex = colIndex;
    }
    colIndex++;
  }
  if (highlightColIndex === -1) {
    highlightColIndex = 2; // Default to last column
  }

  const tbodyMatch = content.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/);
  if (!tbodyMatch) return;
  
  const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
  let trMatch;
  const rows = [];
  while ((trMatch = trRegex.exec(tbodyMatch[1])) !== null) {
    const tdRegex = /<td[^>]*>([\s\S]*?)<\/td>/g;
    let tdMatch;
    const cols = [];
    while ((tdMatch = tdRegex.exec(trMatch[1])) !== null) {
      cols.push(tdMatch[1].trim());
    }
    if (cols.length >= 3) {
      rows.push(cols);
    }
  }

  const newContent = `'use client';

import { Reveal } from '@/components/Reveal';

export function ${componentName}() {
  return (
    <section className="relative pt-8 pb-12 bg-slate-50 border-t border-slate-100">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-foreground mb-6">
              ${h2Content}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              ${pContent}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-5xl mx-auto bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-6 px-6 font-bold text-slate-800 text-lg w-[20%]">${headers[0]}</th>
                    <th className={\`py-6 px-6 font-bold text-lg w-[40%] border-l border-slate-200 \${${highlightColIndex === 1} ? 'text-primary bg-primary/5' : 'text-slate-800'}\`}>${headers[1]}</th>
                    <th className={\`py-6 px-6 font-bold text-lg w-[40%] border-l border-slate-200 \${${highlightColIndex === 2} ? 'text-primary bg-primary/5' : 'text-slate-800'}\`}>${headers[2]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
${rows.map(row => `                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-slate-700">${row[0]}</td>
                    <td className={\`py-5 px-6 font-medium border-l border-slate-100 \${${highlightColIndex === 1} ? 'text-slate-800 bg-primary/5' : 'text-slate-600'}\`}>${row[1]}</td>
                    <td className={\`py-5 px-6 border-l border-slate-100 \${${highlightColIndex === 2} ? 'text-slate-800 font-medium bg-primary/5' : 'text-slate-600'}\`}>${row[2]}</td>
                  </tr>`).join('\n')}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
`;

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('Updated', filePath);
}

const findComparisonFiles = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findComparisonFiles(fullPath);
    } else if (file.endsWith('Comparison.tsx')) {
      processFile(fullPath);
    }
  }
};

findComparisonFiles(path.join(__dirname, 'components'));
