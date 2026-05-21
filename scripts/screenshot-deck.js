const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost/MODDABLE/moddable-decks/';
const OUTPUT_DIR = path.join(__dirname, '..', 'pdf', 'screenshots');
const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;

const deckName = process.argv[2] || 'opportunities';

async function main() {
  const deckDir = path.join(OUTPUT_DIR, deckName);
  if (!fs.existsSync(deckDir)) fs.mkdirSync(deckDir, { recursive: true });

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: SLIDE_WIDTH, height: SLIDE_HEIGHT, deviceScaleFactor: 1 });

  const url = BASE_URL + '?deck=' + deckName;
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for deck-stage
  await page.waitForSelector('deck-stage');
  await page.evaluate(() => new Promise(r => setTimeout(r, 1000)));

  // Get visible slide indices (absolute positions in the DOM)
  const visibleIndices = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('deck-stage section[data-decks]'));
    const indices = [];
    sections.forEach((s, i) => {
      if (!s.hasAttribute('data-deck-skip')) indices.push(i);
    });
    return indices;
  });

  console.log(`${deckName}: ${visibleIndices.length} slides`);

  for (let vi = 0; vi < visibleIndices.length; vi++) {
    const absIdx = visibleIndices[vi];
    // Navigate to slide
    await page.evaluate((idx) => {
      const stage = document.querySelector('deck-stage');
      if (stage && stage.goTo) stage.goTo(idx);
    }, absIdx);
    await page.evaluate(() => new Promise(r => setTimeout(r, 300)));

    const filename = `slide-${String(vi + 1).padStart(2, '0')}.png`;
    await page.screenshot({ path: path.join(deckDir, filename), fullPage: false });
    process.stdout.write(`  ${filename}\r`);
  }

  console.log(`\n  Saved to ${deckDir}`);
  await browser.close();
}

main().catch(err => { console.error(err); process.exit(1); });
