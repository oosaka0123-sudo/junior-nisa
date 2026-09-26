import { readFile, readdir, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const dist = new URL('../dist/', import.meta.url);
const distPath = decodeURIComponent(dist.pathname).replace(/^\/(.:\/)/, '$1');
const base = '/junior-nisa/';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

async function exists(path) {
  try { await stat(path); return true; } catch { return false; }
}

function targetCandidates(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean.startsWith(base)) return [];
  const rel = decodeURIComponent(clean.slice(base.length)).replace(/^\/+/, '');
  if (!rel) return [join(distPath, 'index.html')];

  if (extname(rel)) return [join(distPath, rel)];

  const normalized = rel.replace(/\/$/, '');
  return [
    join(distPath, normalized, 'index.html'),
    join(distPath, normalized + '.html')
  ];
}

const htmlFiles = (await walk(distPath)).filter((file) => file.endsWith('.html'));
const failures = [];

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const hrefs = [...html.matchAll(/href=["']([^"'<>]+)["']/g)].map((m) => m[1]);
  for (const href of hrefs) {
    if (
      href.startsWith('#') ||
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('javascript:')
    ) continue;

    const candidates = targetCandidates(href);
    if (!candidates.length) continue;
    const ok = (await Promise.all(candidates.map(exists))).some(Boolean);
    if (!ok) failures.push({ file, href });
  }
}

if (failures.length) {
  console.error('Broken internal links found:');
  for (const item of failures) console.error(`- ${item.href} in ${item.file}`);
  process.exit(1);
}

console.log(`Internal link check passed: ${htmlFiles.length} HTML files scanned.`);
