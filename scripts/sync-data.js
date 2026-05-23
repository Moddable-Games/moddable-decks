const fs = require('fs');
const path = require('path');

const WEBSITE_PATH = process.argv[2] || path.resolve(__dirname, '../../moddable-website');
const OUTPUT = path.resolve(__dirname, '../data/synced.json');

function readJSON(filePath) {
  const full = path.resolve(WEBSITE_PATH, filePath);
  if (!fs.existsSync(full)) {
    console.error(`ERROR: Missing source file: ${full}`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(full, 'utf8'));
}

function extractMilestones() {
  const roadmapPath = path.resolve(WEBSITE_PATH, 'js/mg-roadmap-page.js');
  if (!fs.existsSync(roadmapPath)) {
    console.warn('WARN: mg-roadmap-page.js not found — milestones will be empty');
    return [];
  }
  const src = fs.readFileSync(roadmapPath, 'utf8');
  const milestones = [];
  const re = /\{\s*quarter:\s*['"]([^'"]+)['"]\s*,\s*text:\s*['"]([^'"]+)['"]\s*,\s*color:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    milestones.push({ quarter: m[1], text: m[2], color: m[3] });
  }
  if (milestones.length === 0) {
    console.warn('WARN: No milestones extracted from mg-roadmap-page.js');
  }
  return milestones;
}

const gamesSync = readJSON('data/games-sync.json');
const team = readJSON('data/team.json');
const mods = readJSON('data/mods.json');

const milestones = extractMilestones();

const output = {
  _meta: {
    syncedAt: new Date().toISOString(),
    websitePath: WEBSITE_PATH,
    version: 1
  },
  games: gamesSync,
  team: team.map(({ handle, name, role, bio, img }) => ({ handle, name, role, bio, img })),
  milestones,
  mods: mods.map(({ title, category, baseGame, stats, path: p }) => ({ title, category, baseGame, stats, path: p }))
};

fs.writeFileSync(OUTPUT, JSON.stringify(output, null, 2) + '\n');

console.log(`Synced to ${OUTPUT}`);
console.log(`  Games: ${Object.keys(output.games).length}`);
console.log(`  Team: ${output.team.length}`);
console.log(`  Milestones: ${output.milestones.length}`);
console.log(`  Mods: ${output.mods.length}`);
