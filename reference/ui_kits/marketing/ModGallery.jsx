// Mod gallery — 3-up grid on warm-ivory. Real mods + a few invented to fill 6.
// (Real mod copy lifted from moddable.games; invented ones flagged in README.)

const SAMPLE_MODS = [
  {
    // REAL — talisman-hexed
    category: "Reskin",
    baseGame: "Talisman 4e",
    title: "Talisman: Hexed",
    body: "Replaces the Talisman boards with 61 hexagonal tiles arranged in concentric rings. Open-world hex system — every game lays out differently.",
    stats: "2–6 players · 90 min · 13+",
  },
  {
    // REAL — econopoly
    category: "Total conversion",
    baseGame: "Monopoly",
    title: "Econopoly",
    body: "Monopoly converted into a family-friendly Euro-game. Resource management, victory points, no bankruptcy-fuelled estrangements at Christmas.",
    stats: "2–4 players · 60 min · 10+",
  },
  {
    // REAL — hyper-imperium
    category: "Rebalance",
    baseGame: "Twilight Imperium 4e",
    title: "Hyper Imperium",
    body: "Hyper Movement · Hyper Trades · Hyper Objectives · Hyper Factions · Hyper Agendas. A faster ruleset for TI4 that keeps the politics intact.",
    stats: "3–6 players · 4–6 hr · 14+",
  },
  {
    // INVENTED — fills the grid
    category: "Total conversion",
    baseGame: "Catan",
    title: "Are you ready to <em>nuke</em> Catan?",
    body: "A post-apocalyptic rules overhaul. Sheep are scarce, brick is currency, and someone is going to set fire to the road network.",
    stats: "3–5 players · 60 min · 12+",
  },
  {
    // INVENTED
    category: "Total conversion",
    baseGame: "Chess",
    title: "Conquering the constraints of chess",
    body: "An 11×11 board, three new pieces, fog-of-war. Plays like chess if chess were designed by Borges.",
    stats: "2 players · 30 min · 10+",
  },
  {
    // INVENTED
    category: "Reskin",
    baseGame: "Risk",
    title: "Beyond the box",
    body: "Risk on a Martian colony grid. Same rules, new theme, plus a single rule for orbital strikes.",
    stats: "2–6 players · 120 min · 12+",
  },
];

function ModGallery() {
  const [filter, setFilter] = React.useState("All");
  const filters = ["All", "Total conversion", "Rebalance", "Reskin"];
  const visible = filter === "All" ? SAMPLE_MODS : SAMPLE_MODS.filter(m => m.category === filter);

  return (
    <section style={{ background: "#f5f4ef", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 40 }}>
          <div>
            <div style={{
              fontFamily: "var(--mg-font-pixel)",
              fontSize: 10,
              color: "#0c4f8d",
              letterSpacing: "1.5px",
              marginBottom: 14,
            }}>▲ THE LIBRARY</div>
            <h2 style={{
              fontFamily: "var(--mg-font-display)",
              fontWeight: 600,
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "#14161c",
              margin: 0,
            }}>
              Mods for games you already own.
            </h2>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {filters.map(f => (
              <button key={f}
                onClick={() => setFilter(f)}
                style={{
                  fontFamily: "var(--mg-font-body)",
                  fontWeight: 600,
                  fontSize: 13,
                  height: 36,
                  padding: "0 14px",
                  borderRadius: 9999,
                  border: filter === f ? "none" : "1px solid #c3c5cc",
                  background: filter === f ? "#000000" : "transparent",
                  color: filter === f ? "#ffffff" : "#14161c",
                  cursor: "pointer",
                  transition: "all 150ms cubic-bezier(.2,.8,.2,1)",
                }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mg-auto-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {visible.map(m => <ModCard key={m.title} {...m} />)}
        </div>
      </div>
    </section>
  );
}

window.SAMPLE_MODS = SAMPLE_MODS;
window.ModGallery = ModGallery;
