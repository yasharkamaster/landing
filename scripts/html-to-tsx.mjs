/**
 * Converts legacy HTML landing pages into React TSX components.
 * Run: node scripts/html-to-tsx.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const LANDINGS = [
  {
    slug: 'food',
    componentName: 'FoodLanding',
    source: 'Food_Francises/food_landing.html',
    assetDir: 'Food_Francises',
    title: 'Axiom OS — Business Command Centre for Food Franchises | HypeX',
    sourceField: 'food',
    formId: 'auditForm',
    formHandler: 'audit',
    features: ['gsap', 'theme', 'levelSelect', 'fadeUp', 'navScroll'],
  },
  {
    slug: 'clinic',
    componentName: 'ClinicLanding',
    source: 'Clinic/clinic_landing.html',
    assetDir: 'Clinic',
    title: 'LeadMatrix for Clinics — HypeX',
    sourceField: 'clinic',
    formId: 'auditForm',
    formHandler: 'audit',
    features: ['tailwind', 'faq', 'fadeUp', 'navScroll'],
  },
  {
    slug: 'luxury',
    componentName: 'LuxuryLanding',
    source: 'Luxury_Fashion_Boutiques/luxury_boutique_landing_v2 (1).html',
    assetDir: 'Luxury_Fashion_Boutiques',
    title: 'LeadMatrix for Luxury Fashion Boutiques — HypeX',
    sourceField: 'luxury',
    formId: 'leadForm',
    formHandler: 'luxury',
    features: ['gsap', 'theme', 'luxuryFaq', 'fadeUp', 'navScroll'],
  },
  {
    slug: 'professional',
    componentName: 'ProfessionalLanding',
    source: 'Professional_Services/Professional_Real.html',
    assetDir: 'Professional_Services',
    title: 'LeadMatrix for Professional Services — HypeX',
    sourceField: 'professional',
    formId: 'auditForm',
    formHandler: 'audit',
    features: ['gsap', 'theme', 'levelSelect', 'fadeUp', 'navScroll'],
  },
  {
    slug: 'tours',
    componentName: 'ToursLanding',
    source: 'Tours_&_Travels/tours_v3.html',
    assetDir: 'Tours_&_Travels',
    title: 'LeadMatrix — Tours & Travel Revenue System',
    sourceField: 'tours',
    formId: 'auditForm',
    formHandler: 'tours',
    features: ['gsap', 'theme', 'fadeUp', 'navScroll'],
  },
];

const VOID_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr',
]);

const ATTR_MAP = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  autofocus: 'autoFocus',
  autocomplete: 'autoComplete',
  crossorigin: 'crossOrigin',
  maxlength: 'maxLength',
  minlength: 'minLength',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen',
  autoplay: 'autoPlay',
  playsinline: 'playsInline',
  contenteditable: 'contentEditable',
  spellcheck: 'spellCheck',
  viewbox: 'viewBox',
  preserveaspectratio: 'preserveAspectRatio',
  fillrule: 'fillRule',
  cliprule: 'clipRule',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-miterlimit': 'strokeMiterlimit',
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'text-anchor': 'textAnchor',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'xlink:href': 'xlinkHref',
};

const EVENT_ATTRS = new Set([
  'onclick', 'onsubmit', 'onchange', 'oninput', 'onfocus', 'onblur',
  'onkeydown', 'onkeyup', 'onload', 'onerror',
]);

const NUMERIC_ATTRS = new Set([
  'tabindex', 'colspan', 'rowspan', 'cols', 'rows', 'span', 'start',
  'maxlength', 'minlength', 'size', 'width', 'height',
]);

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
      if (content.includes('tailwind.config')) {
        headInline.push(content);
      } else if (
        !content.includes('handleAuditSubmit') &&
        !content.includes('handleFormSubmit') &&
        !content.includes('handleToursSubmit') &&
        !content.includes('toggleFaq') &&
        !content.includes('themeToggle') &&
        !content.includes('localStorage.getItem("theme")')
      ) {
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
    .replace(/\bbody\.light-mode/g, '.landing-frame.light-mode')
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
      if (src.startsWith('http') || src.startsWith('/')) return full;
      const file = src.split('/').pop();
      return `poster="${prefix}${file}"`;
    });
}

function escapeJsxText(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/{/g, '&#123;')
    .replace(/}/g, '&#125;');
}

function styleStringToJsx(styleStr) {
  const pairs = styleStr.split(';').filter(Boolean);
  const entries = [];
  for (const pair of pairs) {
    const colon = pair.indexOf(':');
    if (colon === -1) continue;
    const key = pair.slice(0, colon).trim();
    const val = pair.slice(colon + 1).trim();
    if (!key || !val) continue;
    const jsxKey = key.startsWith('--')
      ? `'${key}'`
      : key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    entries.push(`${jsxKey}: '${val.replace(/'/g, "\\'")}'`);
  }
  if (entries.length === 0) return null;
  const inner = entries.join(', ');
  const hasCustomProp = entries.some((e) => e.startsWith("'--"));
  return hasCustomProp ? `{{ ${inner} } as CSSProperties}` : `{{ ${inner} }}`;
}

function convertAttrs(attrString) {
  if (!attrString.trim()) return '';

  const attrs = [];
  const re = /([^\s=/>]+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
  let match;

  while ((match = re.exec(attrString)) !== null) {
    const rawName = match[1].toLowerCase();
    const value = match[2] ?? match[3] ?? match[4] ?? '';

    if (EVENT_ATTRS.has(rawName)) continue;

    const name = ATTR_MAP[rawName] ?? rawName;

    if (rawName === 'style' && value) {
      const jsxStyle = styleStringToJsx(value);
      if (jsxStyle) attrs.push(`style=${jsxStyle}`);
      continue;
    }

    if (rawName === 'value' && value === '') {
      attrs.push('value=""');
      continue;
    }

    if (NUMERIC_ATTRS.has(rawName) && value !== '' && /^\d+$/.test(value)) {
      attrs.push(`${name}={${value}}`);
      continue;
    }

    if (value === '' && ['disabled', 'checked', 'selected', 'multiple', 'readonly', 'required', 'autofocus'].includes(rawName)) {
      attrs.push(name);
      continue;
    }

    if (value === '') {
      attrs.push(name);
      continue;
    }

    const escaped = value
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '&quot;')
      .replace(/{/g, '&#123;')
      .replace(/}/g, '&#125;');
    attrs.push(`${name}="${escaped}"`);
  }

  return attrs.length ? ' ' + attrs.join(' ') : '';
}

function findMatchingClose(html, tagName, fromIndex) {
  const lower = html.toLowerCase();
  const openNeedle = `<${tagName}`;
  const closeNeedle = `</${tagName}>`;
  let depth = 1;
  let pos = fromIndex;

  while (pos < html.length && depth > 0) {
    const lt = html.indexOf('<', pos);
    if (lt === -1) return -1;

    if (html.startsWith('<!--', lt)) {
      const end = html.indexOf('-->', lt);
      pos = end === -1 ? html.length : end + 3;
      continue;
    }

    const gt = html.indexOf('>', lt);
    if (gt === -1) return -1;

    const tagSlice = html.slice(lt + 1, gt).trim();
    const isClose = tagSlice.startsWith('/');
    const selfClosing = tagSlice.endsWith('/') || tagSlice.endsWith(' /');
    const clean = tagSlice.replace(/^\//, '').replace(/\/\s*$/, '').trim();
    const spaceIdx = clean.search(/\s/);
    const name = (spaceIdx === -1 ? clean : clean.slice(0, spaceIdx)).toLowerCase();

    if (name === tagName) {
      if (isClose) {
        depth -= 1;
        if (depth === 0) return lt;
      } else if (!VOID_TAGS.has(name) && !selfClosing) {
        depth += 1;
      }
    }

    pos = gt + 1;
  }

  return -1;
}

function htmlToJsx(html) {
  let result = '';
  let i = 0;

  while (i < html.length) {
    if (html[i] === '<') {
      if (html.startsWith('<!--', i)) {
        const end = html.indexOf('-->', i);
        i = end === -1 ? html.length : end + 3;
        continue;
      }

      if (html.startsWith('<!', i) || html.startsWith('<?', i)) {
        const end = html.indexOf('>', i);
        i = end === -1 ? html.length : end + 1;
        continue;
      }

      const close = html.indexOf('>', i);
      if (close === -1) break;

      const tagContent = html.slice(i + 1, close).trim();
      const isCloseTag = tagContent.startsWith('/');
      const selfClosing = tagContent.endsWith('/') || tagContent.endsWith(' /');
      const cleanTag = tagContent.replace(/^\//, '').replace(/\/\s*$/, '').trim();

      const spaceIdx = cleanTag.search(/\s/);
      const tagName = (spaceIdx === -1 ? cleanTag : cleanTag.slice(0, spaceIdx)).toLowerCase();
      const attrPart = isCloseTag ? '' : (spaceIdx === -1 ? '' : cleanTag.slice(spaceIdx));
      const attrs = convertAttrs(attrPart);

      if (isCloseTag) {
        result += `</${tagName}>`;
        i = close + 1;
        continue;
      }

      if (VOID_TAGS.has(tagName) || selfClosing) {
        result += `<${tagName}${attrs} />`;
        i = close + 1;
        continue;
      }

      const endIdx = findMatchingClose(html, tagName, close + 1);

      if (endIdx === -1) {
        result += `<${tagName}${attrs} />`;
        i = close + 1;
        continue;
      }

      const inner = html.slice(close + 1, endIdx);
      const innerJsx = htmlToJsx(inner);
      result += `<${tagName}${attrs}>${innerJsx}</${tagName}>`;
      i = endIdx + `</${tagName}>`.length;
      continue;
    }

    const nextTag = html.indexOf('<', i);
    const textEnd = nextTag === -1 ? html.length : nextTag;
    const text = html.slice(i, textEnd);
    if (text) result += escapeJsxText(text);
    i = textEnd;
  }

  return result;
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

function generateEffectsComponent(landing, scripts) {
  const features = JSON.stringify(landing.features);
  const scriptsJson = JSON.stringify(scripts, null, 2).replace(/"/g, "'");

  return `'use client';

import LandingEffects from '../shared/LandingEffects';
import type { LandingScripts } from '@/lib/landing-types';

const scripts: LandingScripts = ${JSON.stringify(scripts, null, 2)};

const config = {
  source: '${landing.sourceField}',
  formId: '${landing.formId}',
  formHandler: '${landing.formHandler}' as const,
  features: ${features} as const,
};

export default function ${landing.componentName}Effects() {
  return <LandingEffects scripts={scripts} config={config} />;
}
`;
}

function generateLandingComponent(landing, bodyClass, jsx) {
  const frameClass = bodyClass
    ? `landing-frame ${bodyClass}`
    : 'landing-frame';

  return `import type { CSSProperties } from 'react';
import ${landing.componentName}Effects from './${landing.componentName}Effects';
import './${landing.slug}.css';

export default function ${landing.componentName}() {
  return (
    <div className="${frameClass}">
      <${landing.componentName}Effects />
      <div id="landing-root">
${indentJsx(jsx, 8)}
      </div>
    </div>
  );
}
`;
}

function indentJsx(jsx, spaces) {
  const pad = ' '.repeat(spaces);
  return jsx
    .split('\n')
    .map((line) => (line.trim() ? pad + line : ''))
    .join('\n');
}

const registryEntries = [];

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
  const jsx = htmlToJsx(bodyHtml);

  const outDir = path.join(root, 'components', 'landings', landing.slug);
  fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(path.join(outDir, `${landing.slug}.css`), styles);
  fs.writeFileSync(
    path.join(outDir, `${landing.componentName}.tsx`),
    generateLandingComponent(landing, bodyClass, jsx)
  );
  fs.writeFileSync(
    path.join(outDir, `${landing.componentName}Effects.tsx`),
    generateEffectsComponent(landing, scripts)
  );

  copyAssets(landing.slug, landing.assetDir);
  registryEntries.push({ slug: landing.slug, componentName: landing.componentName, title: landing.title });
  console.log(`Converted: ${landing.slug} → ${landing.componentName}.tsx`);
}

const registryContent = `import type { ComponentType } from 'react';
import FoodLanding from './food/FoodLanding';
import ClinicLanding from './clinic/ClinicLanding';
import LuxuryLanding from './luxury/LuxuryLanding';
import ProfessionalLanding from './professional/ProfessionalLanding';
import ToursLanding from './tours/ToursLanding';

export type LandingPageProps = Record<string, never>;

const registry: Record<string, { component: ComponentType; title: string }> = {
  food: { component: FoodLanding, title: ${JSON.stringify(registryEntries.find((e) => e.slug === 'food')?.title ?? '')} },
  clinic: { component: ClinicLanding, title: ${JSON.stringify(registryEntries.find((e) => e.slug === 'clinic')?.title ?? '')} },
  luxury: { component: LuxuryLanding, title: ${JSON.stringify(registryEntries.find((e) => e.slug === 'luxury')?.title ?? '')} },
  professional: { component: ProfessionalLanding, title: ${JSON.stringify(registryEntries.find((e) => e.slug === 'professional')?.title ?? '')} },
  tours: { component: ToursLanding, title: ${JSON.stringify(registryEntries.find((e) => e.slug === 'tours')?.title ?? '')} },
};

export function getLandingComponent(slug: string) {
  return registry[slug] ?? null;
}

export function getAllLandingSlugs(): string[] {
  return Object.keys(registry);
}
`;

fs.writeFileSync(path.join(root, 'components', 'landings', 'registry.ts'), registryContent);
console.log('Done. Registry written to components/landings/registry.ts');
