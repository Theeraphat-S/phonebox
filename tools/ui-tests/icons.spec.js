// Every built-in icon the code, the catalog and the templates name must exist in icons.js, and the catalog must not
// fall back to emoji. Plain file checks: no browser needed.
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const www = path.join(root, 'android', 'app', 'src', 'main', 'assets', 'www');
const agent = path.join(root, 'agent', 'PhoneBox.Agent');
const read = (f) => fs.readFileSync(f, 'utf8');
const have = new Set([...read(path.join(www, 'icons.js')).matchAll(/^ {4}'([a-z0-9-]+)':/gm)].map((m) => m[1]));

test('icons.js ships the icon set and its picker only offers icons it has', () => {
  expect(have.size).toBeGreaterThan(150);
  const picker = read(path.join(www, 'icons.js')).match(/const PICKER = \[(.*?)\];/s)[1];
  const names = [...picker.matchAll(/'([a-z0-9-]+)'/g)].map((m) => m[1]);
  expect(names.length).toBeGreaterThan(50);
  expect(names.filter((n) => !have.has(n))).toEqual([]);
});

test('every icon name used by the panel code exists', () => {
  const files = [...fs.readdirSync(www).filter((f) => f.endsWith('.js')).map((f) => path.join(www, f)),
    ...fs.readdirSync(path.join(www, 'widgets')).map((f) => path.join(www, 'widgets', f)), path.join(agent, 'settings.html')]
    .filter((f) => !/icons\.js$|i18n\.js$/.test(f));
  const missing = [];
  for (const f of files) {
    const text = read(f);
    for (const m of text.matchAll(/\b(?:icon|iconOf|iconText|wxIcon)\(\s*'([a-z][a-z0-9-]+)'/g)) if (!have.has(m[1])) missing.push(`${path.basename(f)}: ${m[1]}`);
    for (const m of text.matchAll(/'icon:([a-z0-9-]+)'/g)) if (!have.has(m[1])) missing.push(`${path.basename(f)}: icon:${m[1]}`);
  }
  expect(missing).toEqual([]);
});

test('the widget catalog and the page templates use built-in icons', () => {
  for (const file of ['widgets.json', 'templates.json']) {
    for (const entry of JSON.parse(read(path.join(agent, file)))) {
      expect(entry.icon, `${file}: ${entry.type || entry.id}`).toMatch(/^icon:/);
      expect(have.has(entry.icon.slice(5)), `${file}: ${entry.type || entry.id} → ${entry.icon}`).toBe(true);
    }
  }
});
