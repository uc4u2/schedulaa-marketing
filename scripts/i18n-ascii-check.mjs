import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const messagesDir = path.join(root, 'src', 'i18n', 'messages');
const files = fs
  .readdirSync(messagesDir)
  .filter((file) => file.endsWith('.json'))
  .sort();

const nonAscii = /[^\x00-\x7F]/;
const invalid = [];

for (const file of files) {
  const fullPath = path.join(messagesDir, file);
  const content = fs.readFileSync(fullPath, 'utf8');
  if (nonAscii.test(content)) invalid.push(path.relative(root, fullPath));
}

if (invalid.length) {
  console.error('Found non-ASCII characters in locale files:');
  invalid.forEach((item) => console.error(`- ${item}`));
  process.exit(1);
}

console.log(`ASCII check OK across ${files.length} message files.`);
