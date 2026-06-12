/**
 * Converts legacy HTML landing pages into Next.js content files.
 * Run: node scripts/convert-landings.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const LANDINGS = [
  {
    slug: 'food',
    source: 'Food_Francises/food_landing.html',
    assetDir: 'Food_Francises',
    title: 'Axiom OS — Business Command Centre for Food Franchises | HypeX',
  },
  {
    slug: 'clinic',
    source: 'Clinic/clinic_landing.html',
    assetDir: 'Clinic',
    title: 'LeadMatrix for Clinics — HypeX',
  },
  {
    slug: 'luxury',
    source: 'Luxury_Fashion_Boutiques/luxury_boutique_landing_v2 (1).html',
    assetDir: 'Luxury_Fashion_Boutiques',
    title: 'LeadMatrix for Luxury Fashion Boutiques — HypeX',
  },
  {
    slug: 'professional',
    source: 'Professional_Services/Professional_Real.html',
    assetDir: 'Professional_Services',
    title: 'LeadMatrix for Professional Services — HypeX',
  },
  {
    slug: 'tours',
    source: 'Tours_&_Travels/tours_v3.html',
    assetDir: 'Tours_&_Travels',
    title: 'LeadMatrix — Tours & Travel Revenue System',
  },
];

function extractBetween(html, startTag, endTag) {
  const start = html.indexOf(startTag);
  if (start === -1) return '';
  const contentStart = start + startTag.length;
  const end = html.indexOf(endTag, contentStart);
  if (end === -1) return '';
  return html.slice(contentStart, end);
}

function extractAllStyles(html) {
  const styles = [];
  const re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    styles.push(match[1].trim());
  }
  return styles.join('\n\n');
}

function extractScripts(html) {
  const external = [];
  const inline = [];
  const headInline = [];

  const re = /<script([^>]*)>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    const attrs = match[1];
    const content = match[2].trim();
    const srcMatch = attrs.match(/\bsrc=["']([^"']+)["']/i);
    if (srcMatch) {
      external.push(srcMatch[1]);
    } else if (content) {
      // Tailwind config and similar head scripts
      if (content.includes('tailwind.config')) {
        headInline.push(content);
      } else {
        inline.push(content);
      }
    }
  }

  return {
    external: [...new Set(external)],
    inline,
    headInline,
  };
}

function scopeStylesToFrame(css) {
  return css
    .replace(/\bbody::/g, '.landing-frame::')
    .replace(/\bbody(?=[.{,:>\s\[])/g, '.landing-frame');
}

function extractBodyClass(html) {
  const match = html.match(/<body[^>]*class=["']([^"']*)["']/i);
  return match?.[1]?.trim() ?? '';
}

function stripScripts(html) {
  return html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
}

function rewriteAssetPaths(html, slug) {
  const prefix = `/assets/${slug}/`;
  return html
    .replace(/\bsrc="([^"#][^"]*)"/g, (full, src) => {
      if (src.startsWith('http') || src.startsWith('data:') || src.startsWith('/')) return full;
      const file = src.split('/').pop();
      return `src="${prefix}${file}"`;
    })
    .replace(/\bposter="([^"#][^"]*)"/g, (full, src) => {
      if (src.startsWith('http') || src.startsWith('/') ) return full;
      const file = src.split('/').pop();
      return `poster="${prefix}${file}"`;
    });
}

function copyAssets(slug, assetDir) {
  const srcDir = path.join(root, assetDir);
  const destDir = path.join(root, 'public', 'assets', slug);
  if (!fs.existsSync(srcDir)) return;

  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir)) {
    const src = path.join(srcDir, entry);
    if (!fs.statSync(src).isFile()) continue;
    const ext = path.extname(entry).toLowerCase();
    if (!['.png', '.jpg', '.jpeg', '.gif', '.webp', '.mp4', '.webm', '.svg'].includes(ext)) continue;
    fs.copyFileSync(src, path.join(destDir, entry));
  }
}

for (const landing of LANDINGS) {
  const htmlPath = path.join(root, landing.source);
  const html = fs.readFileSync(htmlPath, 'utf8');

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) {
    console.error(`No body found in ${landing.source}`);
    continue;
  }

  const bodyClass = extractBodyClass(html);

  let bodyHtml = stripScripts(bodyMatch[1].trim());
  bodyHtml = rewriteAssetPaths(bodyHtml, landing.slug);

  const styles = scopeStylesToFrame(extractAllStyles(html));
  const scripts = extractScripts(html);

  const outDir = path.join(root, 'content', 'landings', landing.slug);
  fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(path.join(outDir, 'body.html'), bodyHtml);
  fs.writeFileSync(path.join(outDir, 'styles.css'), styles);
  fs.writeFileSync(path.join(outDir, 'meta.json'), JSON.stringify({
    title: landing.title,
    slug: landing.slug,
    bodyClass,
    scripts,
  }, null, 2));

  copyAssets(landing.slug, landing.assetDir);
  console.log(`Converted: ${landing.slug}`);
}

console.log('Done.');
