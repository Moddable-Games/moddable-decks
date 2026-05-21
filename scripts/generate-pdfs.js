const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost/MODDABLE/moddable-decks/';
const OUTPUT_DIR = path.join(__dirname, '..', 'pdf');
const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;

const DECKS = [
  'opportunities',
  'crowdfunding',
  'press',
  'partner',
  'expo',
  'hiring',
  'product'
];

async function generateDeckPDF(browser, deckName) {
  const page = await browser.newPage();
  await page.setViewport({ width: SLIDE_WIDTH, height: SLIDE_HEIGHT });

  const url = BASE_URL + '?deck=' + deckName;
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for deck-stage to be defined and rendered
  await page.waitForSelector('deck-stage', { timeout: 10000 });
  await page.evaluate(() => {
    return new Promise((resolve) => {
      const stage = document.querySelector('deck-stage');
      if (stage && stage.shadowRoot) return resolve();
      const check = () => {
        if (stage && stage.shadowRoot) resolve();
        else requestAnimationFrame(check);
      };
      requestAnimationFrame(check);
    });
  });
  await page.evaluate(() => new Promise(r => setTimeout(r, 500)));

  // Get visible slide count
  const slideCount = await page.evaluate(() => {
    const sections = document.querySelectorAll('deck-stage section[data-decks]');
    let count = 0;
    sections.forEach(s => { if (!s.hasAttribute('data-deck-skip')) count++; });
    return count;
  });

  console.log(`  ${deckName}: ${slideCount} slides`);

  // Generate PDF using print media
  const pdfPath = path.join(OUTPUT_DIR, deckName + '.pdf');
  await page.emulateMediaType('print');
  await page.pdf({
    path: pdfPath,
    width: SLIDE_WIDTH + 'px',
    height: SLIDE_HEIGHT + 'px',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: false
  });

  await page.close();
  return { deck: deckName, slides: slideCount, path: pdfPath };
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const results = [];
  for (const deck of DECKS) {
    try {
      const result = await generateDeckPDF(browser, deck);
      results.push(result);
    } catch (err) {
      console.error(`  ERROR generating ${deck}: ${err.message}`);
    }
  }

  await browser.close();

  console.log('\nDone:');
  results.forEach(r => {
    const size = (fs.statSync(r.path).size / 1024).toFixed(0);
    console.log(`  ${r.deck}.pdf — ${r.slides} slides, ${size}KB`);
  });
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
