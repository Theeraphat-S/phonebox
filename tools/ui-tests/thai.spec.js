// Thai: the dictionary is complete, the panel renders it, and the bundled Noto Sans Thai is what draws it.
// Against the web demo.
const { test, expect } = require('@playwright/test');

async function openPanel(page, widgets) {
  await page.goto('/panel/');
  await page.evaluate((widgets) => {
    localStorage.clear();
    localStorage.setItem('pb-lang', 'th');
    localStorage.setItem('pb-demo-config', JSON.stringify({
      night: { enabled: false }, rules: [], shortcuts: [],
      display: { language: 'th' },
      pages: [{ id: 'one', title: 'One', widgets }],
    }));
  }, widgets);
  await page.reload();
  await page.waitForFunction(() => window.PhoneBoxI18n);
}

test('Thai has every string English has, with the same placeholders', async ({ page }) => {
  await page.goto('/panel/');
  await page.waitForFunction(() => window.PhoneBoxI18n);
  const report = await page.evaluate(() => {
    const { STRINGS, CATALOG, LANGUAGES } = window.PhoneBoxI18n;
    const vars = (s) => (String(s).match(/\{\w+\}/g) || []).sort().join();
    const missing = [], placeholders = [];
    for (const key of Object.keys(STRINGS.en)) {
      const th = STRINGS.th[key];
      if (th === undefined || th === '') missing.push(key);
      else if (vars(th) !== vars(STRINGS.en[key])) placeholders.push(key);
    }
    const catalogMissing = Object.keys(CATALOG.vi).filter((k) => !CATALOG.th || !CATALOG.th[k]);
    return { listed: LANGUAGES.some((l) => l.code === 'th' && l.locale === 'th-TH'), missing, placeholders, catalogMissing };
  });
  expect(report.listed).toBe(true);
  expect(report.missing).toEqual([]);
  expect(report.placeholders).toEqual([]);
  expect(report.catalogMissing).toEqual([]);
});

test('the panel speaks Thai and draws it with the bundled font', async ({ page }) => {
  await openPanel(page, [{ id: 'c1', type: 'clock', x: 0, y: 0, w: 6, h: 3 }]);
  await expect(page.locator('html')).toHaveAttribute('lang', 'th');
  expect(await page.evaluate(() => window.PhoneBoxI18n.t('time.yesterday'))).toBe('เมื่อวาน');
  // the font is bundled (no network, no system font needed) and only claims the Thai block
  await page.evaluate(() => document.fonts.load('16px "PhoneBox Thai"', 'ก'));
  expect(await page.evaluate(() => document.fonts.check('16px "PhoneBox Thai"', 'ก'))).toBe(true);
  const family = await page.evaluate(() => getComputedStyle(document.body).fontFamily);
  expect(family.startsWith('"PhoneBox Thai"')).toBe(true);
});

test('Thai text is not letter-spaced, so tone marks stay on their letters', async ({ page }) => {
  await openPanel(page, []);
  const spacing = await page.evaluate(() => {
    const el = document.createElement('div');
    el.className = 'w-title';
    document.body.appendChild(el);
    return getComputedStyle(el).letterSpacing;
  });
  expect(['normal', '0px']).toContain(spacing);
});

test('the settings page is translated to Thai', async ({ page }) => {
  await page.goto('/settings/');
  // the settings page takes its language from display.language in the config (the demo keeps it in localStorage)
  await page.evaluate(() => localStorage.setItem('pb-demo-config', JSON.stringify({ display: { language: 'th' } })));
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'th');
  await expect(page.locator('[data-i18n="s.save"]').first()).toHaveText('บันทึก');
});
