/**
 * Script to encode all resource URLs in guides-data.ts to Base64
 * Run: node scripts/encode-urls.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, '..', 'lib', 'guides-data.ts');

const content = fs.readFileSync(filePath, 'utf-8');

// Match url: 'https://...' or url: "https://..."
const result = content.replace(
  /url:\s*(['"])(https?:\/\/[^'"]+)\1/g,
  (match, quote, url) => {
    const b64 = Buffer.from(url, 'utf-8').toString('base64');
    return `url: ${quote}${b64}${quote}`;
  }
);

fs.writeFileSync(filePath, result, 'utf-8');

// Count replacements
const count = (content.match(/url:\s*['"]https?:\/\//g) || []).length;
console.log(`Encoded ${count} URLs to Base64 in guides-data.ts`);
