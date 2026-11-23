// Builds intra/intra.enc.json, the encrypted content of the Intra page (www.cinemataztic.com/intra/), from the
// private repository cinemataztic/intra (its index.html, js/links.js and img/parking-qr.png). The website repository
// is public, so the content is only ever published encrypted, with the shared password (the one for Playlist) and the
// same salt as markets/live.enc.json: anyone logged in to Playlist gets straight into Intra, and the other way round.
//
// Run it after a change in the intra repository, or after a new shared password (when live.enc.json has a new salt):
//   MARKETS_PASSWORD=... node tools/intra-build.mjs ~/GitHub/intra
// Never put the password in a file.

import { readFile, writeFile } from 'node:fs/promises';
import { webcrypto as crypto } from 'node:crypto';
import vm from 'node:vm';
import path from 'node:path';

const src = process.argv[2];
const password = process.env.MARKETS_PASSWORD;
if (!src) { console.error('Usage: MARKETS_PASSWORD=... node tools/intra-build.mjs <path to the intra repository>'); process.exit(1); }
if (!password) { console.error('MARKETS_PASSWORD is not set'); process.exit(1); }

const live = JSON.parse(await readFile(new URL('../markets/live.enc.json', import.meta.url), 'utf8'));
const OUT = new URL('../intra/intra.enc.json', import.meta.url);
const b64 = buf => Buffer.from(buf).toString('base64');
const unb64 = s => new Uint8Array(Buffer.from(s, 'base64'));

async function keyFor(salt) {
    const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: live.iterations }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}
const key = await keyFor(unb64(live.salt));
// The password must be the one live.enc.json is made with, or Playlist and Intra would need two logins
try { await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(live.iv) }, key, unb64(live.data)); }
catch { console.error('MARKETS_PASSWORD does not open markets/live.enc.json; use the Playlist password'); process.exit(1); }

// The content: everything inside <main> of the intra page, with the QR code inlined, and the link sections
const html = await readFile(path.join(src, 'index.html'), 'utf8');
let main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)[1];
const qr = await readFile(path.join(src, 'img/parking-qr.png'));
main = main.replace('src="img/parking-qr.png"', `src="data:image/png;base64,${b64(qr)}"`);
if (/src="(?!data:|https:)/.test(main)) { console.error('A local file in <main> is not inlined yet; add it to tools/intra-build.mjs'); process.exit(1); }
const sandbox = { window: {} };
vm.runInNewContext(await readFile(path.join(src, 'js/links.js'), 'utf8'), sandbox);
const payload = { updated: new Date().toISOString(), main: main.trim(), sections: sandbox.window.SECTIONS };

const iv = crypto.getRandomValues(new Uint8Array(12));
const data = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(JSON.stringify(payload)));
await writeFile(OUT, JSON.stringify({ v: 1, kdf: live.kdf, iterations: live.iterations, salt: live.salt, iv: b64(iv), data: b64(data) }) + '\n');
console.log(`Wrote intra/intra.enc.json (${payload.sections.length} link sections)`);
