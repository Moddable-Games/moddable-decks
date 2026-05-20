// Featured Mod band — flat dark with the cube glyph providing the focal point.
// (Reverted from hex-horizon to keep the backdrop scarce — see Caveats in README.)

function CubeGlyph({ size = 160 }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 100 110" aria-hidden="true">
      <polygon points="50,5 92,30 50,55 8,30" fill="#d11a1a" stroke="#000" strokeWidth="2.5"/>
      <polygon points="8,30 50,55 50,105 8,80" fill="#3a9928" stroke="#000" strokeWidth="2.5"/>
      <polygon points="92,30 50,55 50,105 92,80" fill="#0c4f8d" stroke="#000" strokeWidth="2.5"/>
    </svg>
  );
}

function StatsRow({ stats }) {
  return (
    <div style={{
      display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap",
      paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.18)",
    }}>
      {stats.map((s, i) => (
        <React.Fragment key={s.label}>
          {i > 0 && <span style={{ width: 1, height: 24, background: "rgba(255,255,255,0.18)" }} />}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "var(--mg-font-body)", fontSize: 11, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</span>
            <span style={{ fontFamily: "var(--mg-font-mono)", fontWeight: 600, fontSize: 18, color: "#ffffff" }}>{s.value}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

function FeaturedMod() {
  return (
    <section style={{
      position: "relative",
      background: "#000",
      color: "#fff",
      padding: "120px 24px",
      overflow: "hidden",
      isolation: "isolate",
    }}>
      {/* Subtle radial glow behind the cube — atmospheric without imagery */}
      <div style={{
        position: "absolute",
        right: -120,
        top: "50%",
        transform: "translateY(-50%)",
        width: 600,
        height: 600,
        background: "radial-gradient(circle, rgba(58,123,232,0.25) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr auto", gap: 64, alignItems: "center" }}>
        <div>
          <div style={{
            fontFamily: "var(--mg-font-pixel)",
            fontSize: 10,
            color: "#6fb5ff",
            letterSpacing: "1.5px",
            marginBottom: 18,
          }}>▲ MOD OF THE MONTH</div>

          <h2 style={{
            fontFamily: "var(--mg-font-display)",
            fontWeight: 600,
            fontSize: "clamp(40px, 5.5vw, 72px)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            margin: "0 0 24px",
          }}>
            Hyper Imperium
          </h2>

          <p style={{
            fontFamily: "var(--mg-font-body)",
            fontSize: 18,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 560,
            margin: "0 0 32px",
          }}>
            Our homebrew for <em>Twilight Imperium 4e</em> + <em>Prophecy of Kings</em>.
            Hyper Movement, Hyper Trades, Hyper Objectives, Hyper Factions, Hyper Agendas — a faster ruleset that keeps the politics intact.
          </p>

          <div style={{ display: "flex", gap: 12, marginBottom: 36 }}>
            <Btn variant="primary">Download the rules</Btn>
            <Btn variant="outline-dark">View the components</Btn>
          </div>

          <StatsRow stats={[
            { label: "Players", value: "3–6" },
            { label: "Time",    value: "4–6 hr" },
            { label: "Age",     value: "14+" },
            { label: "Version", value: "v2.0.1" },
          ]} />
        </div>

        <div style={{ display: "flex", justifyContent: "center", filter: "drop-shadow(0 8px 50px rgba(58,123,232,0.4))" }}>
          <CubeGlyph size={220} />
        </div>
      </div>
    </section>
  );
}

window.CubeGlyph = CubeGlyph;
window.StatsRow = StatsRow;
window.FeaturedMod = FeaturedMod;
