// Intra (www.cinemataztic.com/intra/): its content lives only in intra/intra.enc.json, encrypted, because this
// repository is public. It is encrypted with the shared password (the one for Playlist) and the same salt as
// markets/live.enc.json, so one login opens both.
//
// To change Intra:
//   1. MARKETS_PASSWORD=... node tools/intra.mjs unpack   writes the content to intra/src/ (never committed):
//        main.html    the buttons, alerts and FAQ; <div id="sections"> is where the links go
//        links.json   the link sections: [{ title, layout: "list" (optional), links: [{ name, url, description }] }]
//        images       files main.html uses (src="parking-qr.png"); they are put inside the encrypted file
//   2. Edit the files in intra/src/
//   3. MARKETS_PASSWORD=... node tools/intra.mjs build    encrypts intra/src/ into intra/intra.enc.json; commit that
// After a new shared password (live.enc.json gets a new salt): unpack with the old password, build with the new one.
// Never put the password in a file.

import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { webcrypto as crypto } from 'node:crypto';

const cmd = process.argv[2];
const password = process.env.MARKETS_PASSWORD;
if (!['unpack', 'build'].includes(cmd)) { console.error('Usage: MARKETS_PASSWORD=... node tools/intra.mjs unpack|build'); process.exit(1); }
if (!password) { console.error('MARKETS_PASSWORD is not set'); process.exit(1); }

const SRC = new URL('../intra/src/', import.meta.url);
const OUT = new URL('../intra/intra.enc.json', import.meta.url);
const b64 = buf => Buffer.from(buf).toString('base64');
const unb64 = s => new Uint8Array(Buffer.from(s, 'base64'));
const TYPES = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', svg: 'image/svg+xml', webp: 'image/webp', gif: 'image/gif' };

async function keyFor(file) {
    const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt: unb64(file.salt), iterations: file.iterations }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}
const decrypt = async (file, key) => JSON.parse(new TextDecoder().decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(file.iv) }, key, unb64(file.data))));

if (cmd === 'unpack') {
    const file = JSON.parse(await readFile(OUT, 'utf8'));
    let data;
    try { data = await decrypt(file, await keyFor(file)); } catch { console.error('Wrong password for intra/intra.enc.json'); process.exit(1); }
    await mkdir(SRC, { recursive: true });
    let main = data.main;
    for (const [name, uri] of Object.entries(data.images || {})) {
        await writeFile(new URL(name, SRC), unb64(uri.split(',')[1]));
        main = main.split(`src="${uri}"`).join(`src="${name}"`);
    }
    await writeFile(new URL('main.html', SRC), main + '\n');
    await writeFile(new URL('links.json', SRC), JSON.stringify(data.sections, null, 2) + '\n');
    console.log(`Unpacked to intra/src/ (main.html, links.json${Object.keys(data.images || {}).map(n => `, ${n}`).join('')})`);
}

if (cmd === 'build') {
    // The same salt as live.enc.json, and its password, so Playlist and Intra share one login
    const live = JSON.parse(await readFile(new URL('../markets/live.enc.json', import.meta.url), 'utf8'));
    const key = await keyFor(live);
    try { await decrypt(live, key); } catch { console.error('MARKETS_PASSWORD does not open markets/live.enc.json; use the Playlist password'); process.exit(1); }

    let main = (await readFile(new URL('main.html', SRC), 'utf8')).trim();
    const sections = JSON.parse(await readFile(new URL('links.json', SRC), 'utf8'));
    const images = {};
    const files = new Set(await readdir(SRC));
    for (const [, name] of main.matchAll(/src="([^":]+)"/g)) {
        const type = TYPES[name.split('.').pop().toLowerCase()];
        if (!files.has(name) || !type) { console.error(`main.html uses ${name}, which is not an image in intra/src/`); process.exit(1); }
        images[name] = `data:${type};base64,${b64(await readFile(new URL(name, SRC)))}`;
        main = main.split(`src="${name}"`).join(`src="${images[name]}"`);
    }
    if (!main.includes('id="sections"')) { console.error('main.html has no <div id="sections"></div> for the links'); process.exit(1); }

    const payload = { updated: new Date().toISOString(), main, sections, images };
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const data = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(JSON.stringify(payload)));
    await writeFile(OUT, JSON.stringify({ v: 1, kdf: live.kdf, iterations: live.iterations, salt: live.salt, iv: b64(iv), data: b64(data) }) + '\n');
    console.log(`Wrote intra/intra.enc.json (${sections.length} link sections, ${Object.keys(images).length} images)`);
}
