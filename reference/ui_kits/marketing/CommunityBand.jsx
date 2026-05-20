// Community band — Discord CTA on the hex horizon backdrop.

function CommunityBand() {
  return (
    <HexHorizon height={520} intensity="muted">
      <div style={{ padding: "120px 24px", maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <div style={{
          fontFamily: "var(--mg-font-pixel)",
          fontSize: 10,
          color: "#6fb5ff",
          letterSpacing: "1.5px",
          marginBottom: 22,
          textShadow: "0 0 12px rgba(111,181,255,0.5)",
        }}>▲ JOIN THE TABLE</div>

        <h2 style={{
          fontFamily: "var(--mg-font-display)",
          fontWeight: 600,
          fontSize: "clamp(40px, 5.5vw, 72px)",
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
          margin: "0 0 24px",
          textShadow: "0 4px 24px rgba(0,0,0,0.6)",
        }}>
          Mod a game with us.
        </h2>

        <p style={{
          fontFamily: "var(--mg-font-body)",
          fontSize: 18,
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.86)",
          margin: "0 0 36px",
          textShadow: "0 2px 14px rgba(0,0,0,0.6)",
        }}>
          2,400+ rule-tinkerers, designers and PnP enthusiasts in the Discord.
          Pitch a mod, test someone else's, or just argue about <em>Catan</em>'s longest road rule.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn variant="primary">Open the Discord</Btn>
          <Btn variant="outline-dark">Submit a mod</Btn>
        </div>
      </div>
    </HexHorizon>
  );
}

window.CommunityBand = CommunityBand;
