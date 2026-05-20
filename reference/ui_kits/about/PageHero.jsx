// Shared layout primitives for company sub-pages (About / Team / Community / Web3).

function PageHero({ eyebrow, title, lede, accent = "#6fb5ff", withHorizon = false }) {
  const horizon = withHorizon ? {
    backgroundImage: "url('../../assets/hex-horizon.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
  } : {};
  return (
    <section style={{
      position: "relative",
      color: "#fff",
      overflow: "hidden",
      isolation: "isolate",
      background: "#000",
      minHeight: withHorizon ? 460 : 380,
    }}>
      {withHorizon && <div style={{ position: "absolute", inset: 0, ...horizon }} />}
      {withHorizon && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(8,10,30,0.4) 60%, rgba(0,0,0,0.5) 100%)" }} />}
      {!withHorizon && <div style={{ position: "absolute", right: -150, top: "30%", width: 600, height: 600, background: `radial-gradient(circle, ${accent}44 0%, transparent 60%)`, pointerEvents: "none" }} />}

      <div style={{ position: "relative", padding: "72px 32px 88px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--mg-font-pixel)", fontSize: 11, color: accent, letterSpacing: "2px", marginBottom: 22, textShadow: `0 0 12px ${accent}66` }}>{eyebrow}</div>
        <h1 style={{
          fontFamily: "var(--mg-font-display)",
          fontWeight: 600,
          fontSize: "clamp(56px, 7.5vw, 112px)",
          lineHeight: 0.95,
          letterSpacing: "-0.025em",
          margin: 0,
          maxWidth: 900,
          textShadow: "0 4px 30px rgba(0,0,0,0.5)",
        }}>{title}</h1>
        {lede && (
          <p style={{
            fontFamily: "var(--mg-font-body)",
            fontSize: 19,
            lineHeight: 1.55,
            color: "rgba(255,255,255,0.82)",
            margin: "24px 0 0",
            maxWidth: 720,
          }}>{lede}</p>
        )}
      </div>
    </section>
  );
}

function Prose({ children }) {
  return (
    <section style={{ background: "#f5f4ef", padding: "72px 32px 96px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {children}
      </div>
    </section>
  );
}

function ProseTitle({ children }) {
  return <h2 style={{ fontFamily: "var(--mg-font-display)", fontWeight: 600, fontSize: 36, lineHeight: 1.15, letterSpacing: "-0.5px", color: "#14161c", margin: "48px 0 16px" }}>{children}</h2>;
}

function ProseP({ children }) {
  return <p style={{ fontFamily: "var(--mg-font-body)", fontSize: 18, lineHeight: 1.65, color: "#1f2228", margin: "0 0 20px" }}>{children}</p>;
}

window.PageHero = PageHero;
window.Prose = Prose;
window.ProseTitle = ProseTitle;
window.ProseP = ProseP;
