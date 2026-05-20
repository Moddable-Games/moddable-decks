// Footer — multi-column quicklinks + fan-disclaimer caption.

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 style={{
        fontFamily: "var(--mg-font-body)",
        fontWeight: 600,
        fontSize: 13,
        color: "#fff",
        letterSpacing: "0.3px",
        textTransform: "uppercase",
        margin: "0 0 18px",
      }}>{title}</h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map(l => (
          <li key={l}>
            <a href="#" style={{
              fontFamily: "var(--mg-font-body)",
              fontSize: 14,
              color: "rgba(255,255,255,0.72)",
              textDecoration: "none",
            }}>{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const cols = [
    { title: "Mods",      links: ["All mods", "Total conversions", "Rebalances", "Reskins", "Submit a mod"] },
    { title: "Games",     links: ["Endless Skies", "Mongo", "Nukes", "All games"] },
    { title: "Tools",     links: ["Dice roller", "Random generator", "Rulebook builder"] },
    { title: "Community", links: ["Discord", "News", "Mod jams", "Code of conduct"] },
  ];

  return (
    <footer style={{
      background: "#000",
      color: "#fff",
      padding: "80px 24px 40px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 32,
          paddingBottom: 56,
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}>
          <div>
            <img src="../../assets/moddable-logo-white.png" height="32" alt="Moddable.Games" style={{ marginBottom: 18 }} />
            <p style={{
              fontFamily: "var(--mg-font-body)",
              fontSize: 14,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 280,
              margin: 0,
            }}>
              Creating games you already own. Twelve mods. Three originals. One Discord.
            </p>
          </div>
          {cols.map(c => <FooterColumn key={c.title} {...c} />)}
        </div>

        <div style={{
          paddingTop: 40,
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "space-between",
          fontFamily: "var(--mg-font-mono)",
          fontSize: 12,
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.6,
        }}>
          <span>© 2026 Moddable.Games</span>
          <span style={{ maxWidth: 760, textAlign: "right" }}>
            Fan-made. Not affiliated with Hasbro, Asmodee, Fantasy Flight,
            or any rights-holder of the games we mod. All trademarks belong to their respective owners.
          </span>
        </div>
      </div>
    </footer>
  );
}

window.FooterColumn = FooterColumn;
window.Footer = Footer;
