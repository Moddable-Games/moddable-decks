// Nuke Catan section — Direct treatment (chosen variant A), embedded on home.

function NukeCatanFeature() {
  return (
    <section style={{ background: "#000", color: "#fff", padding: "100px 24px", position: "relative", overflow: "hidden", textAlign: "center" }}>
      {/* Warm red ground glow */}
      <div style={{ position: "absolute", left: "50%", top: "55%", transform: "translateX(-50%)", width: 1100, height: 420, background: "radial-gradient(ellipse, rgba(209,26,26,0.4) 0%, transparent 65%)", pointerEvents: "none", filter: "blur(24px)" }} />

      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--mg-font-pixel)", fontSize: 11, color: "#e63232", letterSpacing: "2px", marginBottom: 24, textShadow: "0 0 14px rgba(230,50,50,0.5)" }}>▲ TOTAL CONVERSION · CATAN</div>

        <img src="../../assets/illustrations/nuke-catan-family.png" alt=""
             style={{ maxWidth: 620, width: "min(620px, 90%)", height: "auto", filter: "drop-shadow(0 30px 60px rgba(209,26,26,0.32))" }} />

        <h2 style={{
          fontFamily: "var(--mg-font-display)",
          fontWeight: 600,
          fontSize: "clamp(48px, 7vw, 96px)",
          lineHeight: 0.95,
          letterSpacing: "-2.5px",
          margin: "0 auto 24px",
          maxWidth: 900,
          textShadow: "0 4px 30px rgba(0,0,0,0.6)",
        }}>
          Are you ready<br/>to <em style={{ color: "#e63232" }}>nuke</em> Catan?
        </h2>

        <p style={{
          fontFamily: "var(--mg-font-body)",
          fontSize: 18,
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.82)",
          maxWidth: 540,
          margin: "0 auto 32px",
        }}>
          A family-friendly post-apocalyptic rules overhaul. Same tiles, same dice, brand new economy — and yes, your kids are going to love arguing about who set fire to the road network.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn variant="red">Download the rules</Btn>
          <Btn variant="outline-dark">Read the brief</Btn>
        </div>
      </div>
    </section>
  );
}

window.NukeCatanFeature = NukeCatanFeature;
