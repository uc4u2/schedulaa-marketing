import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const messagesDir = path.join(root, 'src', 'i18n', 'messages');
const files = fs
  .readdirSync(messagesDir)
  .filter((file) => file.endsWith('.json'))
  .sort();

const flatten = (value, prefix = '', out = new Set()) => {
  if (Array.isArray(value)) {
    value.forEach((item, index) => flatten(item, `${prefix}[${index}]`, out));
    return out;
  }
  if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, child]) => {
      const next = prefix ? `${prefix}.${key}` : key;
      flatten(child, next, out);
    });
    return out;
  }
  out.add(prefix);
  return out;
};

if (!files.includes('en.json')) {
  console.error('Missing baseline locale file: src/i18n/messages/en.json');
  process.exit(1);
}

const baseline = JSON.parse(fs.readFileSync(path.join(messagesDir, 'en.json'), 'utf8'));
const baselineKeys = flatten(baseline);
const errors = [];

for (const file of files) {
  if (file === 'en.json') continue;
  const current = JSON.parse(fs.readFileSync(path.join(messagesDir, file), 'utf8'));
  const currentKeys = flatten(current);

  const missing = [...baselineKeys].filter((key) => !currentKeys.has(key));
  const extra = [...currentKeys].filter((key) => !baselineKeys.has(key));

  if (missing.length || extra.length) {
    errors.push(
      [
        `Locale parity failed for ${file}:`,
        missing.length ? `  Missing keys (${missing.length}): ${missing.join(', ')}` : null,
        extra.length ? `  Extra keys (${extra.length}): ${extra.join(', ')}` : null,
      ]
        .filter(Boolean)
        .join('\n'),
    );
  }
}

if (errors.length) {
  console.error(errors.join('\n\n'));
  process.exit(1);
}

console.log(`Locale parity OK across ${files.length} message files.`);
