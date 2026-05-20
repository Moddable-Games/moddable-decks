// Shared tabletop tools — dice roller, name generator, scoring tracker.
// Two scopes: a top input row, a card-shaped output stage below.

function Tool({ icon, name, desc, children }) {
  return (
    <section style={{ background: "#fff", border: "1px solid #e6e3d8", borderRadius: 20, padding: 32, marginBottom: 24 }}>
      <header style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 22, paddingBottom: 22, borderBottom: "1px solid #e6e3d8" }}>
        <div style={{ width: 48, height: 48, background: "#0a0d2a", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
          <img src={`../../assets/icons/${icon}.svg`} width="24" height="24" style={{ filter: "invert(1)" }} alt="" />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: "var(--mg-font-display)", fontWeight: 600, fontSize: 24, color: "#14161c", margin: "0 0 4px", letterSpacing: "-0.3px" }}>{name}</h3>
          <p style={{ fontFamily: "var(--mg-font-body)", fontSize: 14, color: "#4f5764", margin: 0 }}>{desc}</p>
        </div>
      </header>
      {children}
    </section>
  );
}

// =========================================================================
// Dice Roller
// =========================================================================
function DieFace({ value, big }) {
  // Render a die face with 1–6 dots arranged the canonical way.
  // Dots are positioned in a 3x3 grid with inset padding so pips stay
  // inside the die outline.
  const positions = {
    1: [[1,1]],
    2: [[0,0],[2,2]],
    3: [[0,0],[1,1],[2,2]],
    4: [[0,0],[2,0],[0,2],[2,2]],
    5: [[0,0],[2,0],[1,1],[0,2],[2,2]],
    6: [[0,0],[0,1],[0,2],[2,0],[2,1],[2,2]],
  }[value] || [];
  const size = big ? 80 : 56;
  const dot = big ? 12 : 8;
  const pad = big ? 14 : 10;  // inset from the die edge to the centre of corner pips
  return (
    <div style={{
      width: size, height: size,
      background: "#fff",
      border: "2px solid #14161c",
      borderRadius: big ? 14 : 10,
      position: "relative",
      flex: "none",
    }}>
      {positions.map(([col, row], i) => (
        <span key={i} style={{
          position: "absolute",
          // For col/row in {0,1,2}: 0 → pad from edge, 1 → centre, 2 → pad from far edge.
          left: col === 0 ? pad : col === 2 ? size - pad : size / 2,
          top:  row === 0 ? pad : row === 2 ? size - pad : size / 2,
          transform: "translate(-50%, -50%)",
          width: dot, height: dot,
          background: "#14161c",
          borderRadius: "50%",
        }} />
      ))}
    </div>
  );
}

function DiceRoller() {
  const [notation, setNotation] = React.useState("2d6");
  const [rolls, setRolls] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [rolling, setRolling] = React.useState(false);
  const [cubeMode, setCubeMode] = React.useState(false);  // brand-cube face mode
  const [tumbleKey, setTumbleKey] = React.useState(0);

  function roll() {
    const m = notation.match(/^(\d*)d(\d+)(?:\s*([+-])\s*(\d+))?$/i);
    if (!m) return;
    const count = parseInt(m[1] || "1", 10);
    const sides = parseInt(m[2], 10);
    const mod = m[3] ? (m[3] === "+" ? 1 : -1) * parseInt(m[4], 10) : 0;
    if (count < 1 || count > 20 || sides < 2 || sides > 100) return;

    setRolling(true);
    setTumbleKey(k => k + 1);

    // Tumble effect — flash through random faces during the tumble
    let ticks = 0;
    const interval = setInterval(() => {
      const fake = Array.from({ length: count }, () => Math.ceil(Math.random() * sides));
      setRolls(fake);
      ticks++;
      if (ticks >= 8) {
        clearInterval(interval);
        const out = Array.from({ length: count }, () => Math.ceil(Math.random() * sides));
        setRolls(out);
        setTotal(out.reduce((a, b) => a + b, 0) + mod);
        setRolling(false);
      }
    }, 60);
  }

  React.useEffect(() => { roll(); }, []);

  const allD6 = rolls.length > 0 && rolls.every(r => r <= 6);

  return (
    <Tool icon="d6" name="Dice roller" desc="Standard dice notation — 2d6, 1d20+3, 4d8-1. Cap 20 dice, sides 2–100.">
      <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
        <input
          value={notation}
          onChange={(e) => setNotation(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && roll()}
          style={{
            flex: 1, minWidth: 200, height: 52, padding: "0 18px",
            border: "1px solid #e6e3d8", borderRadius: 12,
            fontFamily: "var(--mg-font-mono)", fontSize: 18, fontWeight: 500,
            background: "#fff", color: "#14161c",
            outline: "none",
          }}
          aria-label="Dice notation"
        />
        <Btn variant="dark" onClick={roll} disabled={rolling}>
          <img src="../../assets/icons/roll.svg" width="18" height="18" alt="" style={{ filter: "invert(1)" }} />
          {rolling ? "Rolling…" : "Roll"}
        </Btn>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
        {["1d6","2d6","1d20","3d6","2d10","4d6"].map(p => (
          <button key={p} onClick={() => setNotation(p)} style={{
            height: 32, padding: "0 12px", fontFamily: "var(--mg-font-mono)",
            fontSize: 12, background: notation === p ? "#14161c" : "#f5f4ef", color: notation === p ? "#fff" : "#14161c",
            border: "1px solid " + (notation === p ? "#14161c" : "#e6e3d8"), borderRadius: 9999, cursor: "pointer"
          }}>{p}</button>
        ))}
        <span style={{ marginLeft: "auto", display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ fontFamily: "var(--mg-font-mono)", fontSize: 11, color: "#7a8290", textTransform: "uppercase", letterSpacing: "0.5px" }}>Face:</span>
          <button onClick={() => setCubeMode(false)} style={{
            height: 32, padding: "0 12px", fontFamily: "var(--mg-font-mono)", fontSize: 12,
            background: !cubeMode ? "#14161c" : "transparent", color: !cubeMode ? "#fff" : "#14161c",
            border: "1px solid " + (!cubeMode ? "#14161c" : "#c3c5cc"),
            borderRadius: 9999, cursor: "pointer",
          }}>Classic</button>
          <button onClick={() => setCubeMode(true)} style={{
            height: 32, padding: "0 12px", fontFamily: "var(--mg-font-mono)", fontSize: 12,
            background: cubeMode ? "#14161c" : "transparent", color: cubeMode ? "#fff" : "#14161c",
            border: "1px solid " + (cubeMode ? "#14161c" : "#c3c5cc"),
            borderRadius: 9999, cursor: "pointer",
          }}>Cube</button>
        </span>
      </div>

      <div style={{
        background: "#0a0d2a",
        color: "#fff",
        borderRadius: 16,
        padding: 32,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        minHeight: 280,
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 100%, rgba(58,123,232,0.3) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative" }}>
          <div key={tumbleKey} style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
            {rolls.map((r, i) => {
              const sides = parseInt((notation.match(/d(\d+)/i) || [])[1] || "6", 10);
              return (
                <div key={i} style={{
                  animation: rolling ? `mg-tumble 360ms cubic-bezier(.4,.2,.6,1.4) ${i * 40}ms` : "none",
                }}>
                  {cubeMode && sides === 6
                    ? <CubeDie value={r} big />
                    : cubeMode && [8, 10, 12, 20].includes(sides)
                      ? <PolyDie value={r} sides={sides} big />
                      : allD6
                        ? <DieFace value={r} big />
                        : <NumberFace value={r} sides={sides} />}
                </div>
              );
            })}
          </div>

          <div style={{ fontFamily: "var(--mg-font-pixel)", fontSize: 10, color: "#6fb5ff", letterSpacing: "1.5px", marginBottom: 8 }}>▲ TOTAL</div>
          <div style={{
            fontFamily: "var(--mg-font-display)",
            fontWeight: 600,
            fontSize: 80,
            lineHeight: 1,
            letterSpacing: "-2px",
            color: "#fff",
            opacity: rolling ? 0.4 : 1,
            transition: "opacity 200ms",
          }}>{total}</div>
        </div>
      </div>

      <style>{`
        @keyframes mg-tumble {
          0%   { transform: rotate(0deg) scale(1); }
          25%  { transform: rotate(180deg) scale(0.85); }
          50%  { transform: rotate(360deg) scale(0.9); }
          75%  { transform: rotate(540deg) scale(0.95); }
          100% { transform: rotate(720deg) scale(1); }
        }
      `}</style>
    </Tool>
  );
}

// Number face used for d8/d10/d12/d20/etc — mono digit on dark tile,
// or a polyhedron silhouette if you ask for cube-mode on a d20.
function NumberFace({ value, sides = 6 }) {
  return (
    <span style={{
      fontFamily: "var(--mg-font-mono)", fontWeight: 600, fontSize: 32,
      width: 80, height: 80, lineHeight: "80px",
      background: "rgba(255,255,255,0.08)", color: "#fff",
      borderRadius: 14, display: "inline-block",
      position: "relative",
    }}>
      {value}
      <span style={{
        position: "absolute", top: 6, right: 8,
        fontFamily: "var(--mg-font-mono)", fontSize: 9, opacity: 0.5,
        fontWeight: 400,
      }}>d{sides}</span>
    </span>
  );
}

// d20 / d8 / d12 — polyhedron faces rendered in SVG for the Cube mode.
// Each shows the rolled value over a coloured polygon keyed to die type.
function PolyDie({ value, sides, big }) {
  const sz = big ? 80 : 56;
  const fill = sides === 20 ? "#0c4f8d" : sides === 12 ? "#3a9928" : sides === 10 ? "#d11a1a" : "#3a7be8";

  // d20 icosahedron: front-facing triangle + edges suggesting volume
  if (sides === 20) {
    return (
      <div style={{ width: sz, height: sz * 1.08, position: "relative", flex: "none", display: "inline-block" }}>
        <svg width={sz} height={sz * 1.08} viewBox="0 0 100 108" style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.4))" }}>
          <defs>
            <linearGradient id="d20grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#1a6dc4"/>
              <stop offset="100%" stopColor="#07335c"/>
            </linearGradient>
          </defs>
          {/* Top tetra */}
          <polygon points="50,3 92,30 50,55 8,30" fill="#1a6dc4" stroke="#000" strokeWidth="1.5" opacity="0.7"/>
          {/* Left tetra */}
          <polygon points="8,30 50,55 28,98" fill="#0c4f8d" stroke="#000" strokeWidth="1.5"/>
          {/* Right tetra */}
          <polygon points="92,30 50,55 72,98" fill="#07335c" stroke="#000" strokeWidth="1.5"/>
          {/* Bottom centre triangle (the front face) */}
          <polygon points="28,98 50,55 72,98" fill="url(#d20grad)" stroke="#000" strokeWidth="1.5"/>
          {/* Internal edges for volume */}
          <line x1="50" y1="55" x2="50" y2="3" stroke="#000" strokeWidth="0.8" opacity="0.4"/>
          {/* Value on the front face */}
          <text x="50" y="86" fontFamily="var(--mg-font-display)" fontWeight="700" fontSize="22" fill="#fff" textAnchor="middle">{value}</text>
        </svg>
      </div>
    );
  }

  // d12 dodecahedron approximated — pentagon stack
  if (sides === 12) {
    return (
      <div style={{ width: sz, height: sz * 1.08, position: "relative", flex: "none", display: "inline-block" }}>
        <svg width={sz} height={sz * 1.08} viewBox="0 0 100 108" style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.4))" }}>
          <polygon points="50,8 90,38 75,86 25,86 10,38" fill="#3a9928" stroke="#000" strokeWidth="1.5"/>
          {/* Inner pentagon for volume */}
          <polygon points="50,28 76,46 67,76 33,76 24,46" fill="#2c7320" stroke="#000" strokeWidth="1.2" opacity="0.8"/>
          <text x="50" y="65" fontFamily="var(--mg-font-display)" fontWeight="700" fontSize="22" fill="#fff" textAnchor="middle">{value}</text>
        </svg>
      </div>
    );
  }

  // d10 / d8 — bipyramid silhouette
  return (
    <div style={{ width: sz, height: sz * 1.08, position: "relative", flex: "none", display: "inline-block" }}>
      <svg width={sz} height={sz * 1.08} viewBox="0 0 100 108" style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.4))" }}>
        <polygon points="50,5 92,42 70,72 50,103 30,72 8,42" fill={fill} stroke="#000" strokeWidth="1.5"/>
        <polygon points="50,5 92,42 50,72 8,42" fill="rgba(0,0,0,0.2)" stroke="#000" strokeWidth="1"/>
        <text x="50" y="60" fontFamily="var(--mg-font-display)" fontWeight="700" fontSize="22" fill="#fff" textAnchor="middle">{value}</text>
      </svg>
    </div>
  );
}

// Cube die — uses the brand RGB cube faces oriented to show the rolled value.
// Each value 1–6 picks a distinct cube orientation; faces show the value as
// a pip count in cube-mark style.
function CubeDie({ value, big }) {
  const sz = big ? 80 : 56;
  // Pip configurations per value (in 3x3 grid: 0/1/2 columns and rows)
  const pips = {
    1: [[1,1]],
    2: [[0,0],[2,2]],
    3: [[0,0],[1,1],[2,2]],
    4: [[0,0],[2,0],[0,2],[2,2]],
    5: [[0,0],[2,0],[1,1],[0,2],[2,2]],
    6: [[0,0],[0,1],[0,2],[2,0],[2,1],[2,2]],
  }[value] || [];
  const pad = big ? 18 : 12;
  const pipSize = big ? 8 : 6;

  return (
    <div style={{ width: sz, height: sz * 1.08, position: "relative", flex: "none", display: "inline-block" }}>
      <svg width={sz} height={sz * 1.08} viewBox="0 0 100 108" style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.4))" }}>
        {/* top face — Mod Red */}
        <polygon points="50,4 90,28 50,52 10,28" fill="#d11a1a" stroke="#000" strokeWidth="2"/>
        {/* left face — Mod Green */}
        <polygon points="10,28 50,52 50,103 10,79" fill="#3a9928" stroke="#000" strokeWidth="2"/>
        {/* right face — Mod Blue */}
        <polygon points="90,28 50,52 50,103 90,79" fill="#0c4f8d" stroke="#000" strokeWidth="2"/>
        {/* Value label on the front face (right side of cube) */}
        <text x="70" y="80" fontFamily="var(--mg-font-display)" fontWeight="700" fontSize="28" fill="#fff" textAnchor="middle">{value}</text>
      </svg>
    </div>
  );
}

window.DiceRoller = DiceRoller;
window.NumberFace = NumberFace;
window.CubeDie = CubeDie;

// =========================================================================
// Name Generator
// =========================================================================
const NAME_PARTS = {
  prefix: ["Zog", "Bran", "Cas", "Mar", "Vex", "Thur", "Lir", "Mor", "Aly", "Quib"],
  middle: ["a", "i", "o", "u", "ae", "ya", "ir"],
  suffix: ["dor", "wyn", "rax", "thune", "lin", "vor", "mond", "sek", "draeth", "fang"],
  title:  ["the Bold", "the Patient", "of the Hex", "the Even-handed", "the Unfortunate", "of Clan Talisman", "the Last", "the Fifth"],
};

function NameGenerator() {
  const [names, setNames] = React.useState([]);
  function gen() {
    const out = Array.from({ length: 6 }, () => {
      const p = NAME_PARTS.prefix[Math.floor(Math.random()*NAME_PARTS.prefix.length)];
      const m = NAME_PARTS.middle[Math.floor(Math.random()*NAME_PARTS.middle.length)];
      const s = NAME_PARTS.suffix[Math.floor(Math.random()*NAME_PARTS.suffix.length)];
      const t = NAME_PARTS.title[Math.floor(Math.random()*NAME_PARTS.title.length)];
      return { name: p + m + s, title: t };
    });
    setNames(out);
  }
  React.useEffect(gen, []);
  return (
    <Tool icon="meeple" name="Character name generator" desc="Six fresh fantasy names with epithets — for Talisman: Hexed and similar role-play mods.">
      <div style={{ marginBottom: 18 }}>
        <Btn variant="dark" onClick={gen}>
          <img src="../../assets/icons/sparkles.svg" width="18" height="18" alt="" style={{ filter: "invert(1)" }} />
          Generate six
        </Btn>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {names.map((n, i) => (
          <div key={i} style={{
            background: "#f5f4ef", padding: "12px 16px", borderRadius: 10,
            display: "flex", flexDirection: "column",
          }}>
            <span style={{ fontFamily: "var(--mg-font-display)", fontWeight: 600, fontSize: 18, color: "#14161c", letterSpacing: "-0.2px" }}>{n.name}</span>
            <span style={{ fontFamily: "var(--mg-font-mono)", fontSize: 11, color: "#4f5764", marginTop: 2 }}>{n.title}</span>
          </div>
        ))}
      </div>
    </Tool>
  );
}

// =========================================================================
// Scoring Tracker
// =========================================================================
function ScoringTracker() {
  const [players, setPlayers] = React.useState([
    { name: "Riley", score: 4, color: "#d11a1a" },
    { name: "Sam",   score: 2, color: "#3a9928" },
    { name: "Joel",  score: 5, color: "#0c4f8d" },
    { name: "Tess",  score: 3, color: "#e89a1a" },
  ]);
  function adjust(i, delta) {
    setPlayers(ps => ps.map((p, idx) => idx === i ? { ...p, score: Math.max(0, p.score + delta) } : p));
  }
  const leader = Math.max(...players.map(p => p.score));
  return (
    <Tool icon="bar-chart" name="Score tracker" desc="A scoreboard for any house-ruled game. Tap + / − to adjust.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
        {players.map((p, i) => (
          <div key={i} style={{
            background: "#f5f4ef",
            border: p.score === leader ? `2px solid ${p.color}` : "2px solid transparent",
            borderRadius: 12,
            padding: 16,
            display: "flex",
            alignItems: "center",
            gap: 14,
            transition: "border-color 180ms",
          }}>
            <div style={{ width: 12, height: 12, background: p.color, borderRadius: 3, flex: "none" }} />
            <span style={{ fontFamily: "var(--mg-font-display)", fontWeight: 600, fontSize: 16, color: "#14161c", flex: 1 }}>{p.name}</span>
            <button onClick={() => adjust(i, -1)} aria-label="Decrease" style={{ width: 36, height: 36, border: "1px solid #c3c5cc", background: "#fff", borderRadius: 9999, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="../../assets/icons/minus.svg" width="14" height="14" alt="" />
            </button>
            <span style={{ fontFamily: "var(--mg-font-mono)", fontWeight: 600, fontSize: 24, color: "#14161c", minWidth: 28, textAlign: "center" }}>{p.score}</span>
            <button onClick={() => adjust(i, 1)} aria-label="Increase" style={{ width: 36, height: 36, border: "1px solid #c3c5cc", background: "#fff", borderRadius: 9999, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="../../assets/icons/plus.svg" width="14" height="14" alt="" />
            </button>
          </div>
        ))}
      </div>
    </Tool>
  );
}

window.Tool = Tool;
window.DiceRoller = DiceRoller;
window.NameGenerator = NameGenerator;
window.ScoringTracker = ScoringTracker;
