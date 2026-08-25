/* Injects the build-time render into dist/index.html. Run after both Vite
   builds — see the `build` script in package.json. */
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const PAGE = 'dist/index.html';
const MOUNT = '<div id="root"></div>';

const { render } = await import(pathToFileURL('dist-ssr/entry-server.js').href);
const html = fs.readFileSync(PAGE, 'utf8');

if (!html.includes(MOUNT)) {
  throw new Error(`${PAGE} has no empty ${MOUNT} to fill — did the mount markup change?`);
}

const app = render();
fs.writeFileSync(PAGE, html.replace(MOUNT, `<div id="root">${app}</div>`));
console.log(`prerendered ${(app.length / 1024).toFixed(0)} KB into ${PAGE}`);
