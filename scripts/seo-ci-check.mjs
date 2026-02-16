import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const reportPath = path.join(ROOT, 'docs/LEGACY_ROUTE_PARITY_REPORT.md');
const actionListPath = path.join(ROOT, 'docs/SEO_ACTION_LIST.md');

const reservedNonIndexable = new Set(
  ['/manager', '/employee', '/app', '/admin', '/recruiter', '/client', '/sales', '/dashboard']
);

execFileSync('node', [path.join(ROOT, 'scripts/seo-audit.mjs')], { stdio: 'inherit' });

const report = fs.readFileSync(reportPath, 'utf8');
const lines = report.split('\n').filter((line) => line.startsWith('| `'));

const rows = lines.map((line) => {
  const cells = line.split('|').map((cell) => cell.trim());
  const route = cells[1].replace(/`/g, '');
  const inSitemap = cells[2] === 'Yes';
  const inSeoRoutes = cells[3] === 'Yes';
  const status = cells[5];
  return { route, inSitemap, inSeoRoutes, status };
});

const indexedLegacyRows = rows.filter(
  (row) => (row.inSitemap || row.inSeoRoutes) && !reservedNonIndexable.has(row.route)
);

const missingCritical = indexedLegacyRows.filter((row) => row.status === 'missing');
const redirectedCritical = indexedLegacyRows.filter((row) => row.status === 'REDIRECTS');

const actionList = fs.readFileSync(actionListPath, 'utf8');
const mustBecomeSection = actionList.match(
  /## Must become 200 pages \(indexable SEO\)\n([\s\S]*?)\n## Allowed redirects/m
);
const mustBecome200Lines = (mustBecomeSection?.[1].match(/^-\s+`\/.+`/gm) || []).filter(
  (line) => !line.includes('None')
);

if (missingCritical.length || redirectedCritical.length || mustBecome200Lines.length) {
  console.error('\nSEO CI CHECK FAILED\n');
  if (missingCritical.length) {
    console.error('Missing legacy indexable routes:');
    for (const row of missingCritical) {
      console.error(`- ${row.route}`);
    }
  }
  if (redirectedCritical.length) {
    console.error('\nLegacy indexable routes that are currently redirects (should become 200 pages):');
    for (const row of redirectedCritical) {
      console.error(`- ${row.route}`);
    }
  }
  if (mustBecome200Lines.length) {
    console.error('\nRoute registry intended indexable routes not currently 200:');
    for (const line of mustBecome200Lines) {
      console.error(line.replace(/^- /, '- ').replace(/`/g, ''));
    }
  }
  process.exit(1);
}

console.log('SEO CI CHECK PASSED');
