// Mod card — the signature component.
// Coloured top stripe keyed to category: red=Total Conversion, green=Rebalance, blue=Reskin

const CATEGORY_COLORS = {
  "Total conversion": "#d11a1a",
  "Rebalance":        "#3a9928",
  "Reskin":           "#0c4f8d",
};

function ModThumb({ accent = "#0c4f8d" }) {
  // Stylised cosmic thumb (placeholder for real component photography).
  const hex = `<svg xmlns='http://www.w3.org/2000/svg' width='28' height='32' viewBox='0 0 56 64'><path d='M28 1 54 16v32L28 63 2 48V16z' fill='none' stroke='%23fff' stroke-opacity='0.35' stroke-width='1'/></svg>`;
  return (
    <div style={{
      width: "100%",
      aspectRatio: "1.6",
      background: `linear-gradient(135deg, #0a0d2a 0%, ${accent} 100%)`,
      borderRadius: 12,
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url("data:image/svg+xml;utf8,${hex.replace(/#/g, '%23')}")`,
        backgroundSize: "28px 32px",
      }} />
      <div style={{
        position: "absolute",
        bottom: 12,
        left: 12,
        fontFamily: "var(--mg-font-pixel)",
        fontSize: 9,
        color: "rgba(255,255,255,0.6)",
        letterSpacing: "1px",
      }}>v{Math.floor(Math.random()*3)+1}.{Math.floor(Math.random()*9)}.0</div>
    </div>
  );
}

function ModCard({ category, title, baseGame, stats, body, action = "View the rules" }) {
  const accent = CATEGORY_COLORS[category] || "#0c4f8d";
  return (
    <article style={{
      background: "#ffffff",
      border: "1px solid #e6e3d8",
      borderRadius: 20,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      transition: "border-color 180ms cubic-bezier(.2,.8,.2,1), transform 180ms cubic-bezier(.2,.8,.2,1)",
    }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e6e3d8"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div style={{ height: 4, background: accent }} />

      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        <ModThumb accent={accent} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <span style={{
            fontFamily: "var(--mg-font-body)",
            fontWeight: 600,
            fontSize: 11,
            background: accent,
            color: "#ffffff",
            padding: "4px 10px",
            borderRadius: 9999,
            letterSpacing: "0.2px",
          }}>{category}</span>
          <span style={{
            fontFamily: "var(--mg-font-mono)",
            fontSize: 11,
            color: "#7a8290",
          }}>{baseGame}</span>
        </div>

        <h3 style={{
          fontFamily: "var(--mg-font-display)",
          fontWeight: 600,
          fontSize: 24,
          lineHeight: 1.2,
          letterSpacing: "-0.3px",
          color: "#14161c",
          margin: 0,
        }} dangerouslySetInnerHTML={{ __html: title }} />

        <p style={{
          fontFamily: "var(--mg-font-body)",
          fontSize: 14,
          lineHeight: 1.5,
          color: "#4f5764",
          margin: 0,
          flex: 1,
        }}>{body}</p>

        <div style={{
          fontFamily: "var(--mg-font-mono)",
          fontSize: 12,
          color: "#4f5764",
          paddingTop: 12,
          borderTop: "1px solid #e6e3d8",
        }}>{stats}</div>

        <a href="#" style={{
          fontFamily: "var(--mg-font-body)",
          fontWeight: 600,
          fontSize: 14,
          color: accent,
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
        }}>
          {action}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

window.ModCard = ModCard;
window.ModThumb = ModThumb;
window.CATEGORY_COLORS = CATEGORY_COLORS;
