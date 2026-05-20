// Moddable.Games — the brand's defining backdrop.
// Wraps any section in the hex-horizon imagery + vignette so text reads well.
// Use for: hero, featured mod, community band, mod-detail header.
//
// Props:
//   height — minimum height in px (the image scales to cover this)
//   intensity — "full" (hero) | "muted" (interior bands) | "low" (header tightening)
//   children — content rendered above the backdrop

function HexHorizon({ height = 720, intensity = "full", children, style = {} }) {
  const overlays = {
    full: {
      top: "linear-gradient(180deg, rgba(8,10,30,0.55) 0%, rgba(8,10,30,0.15) 40%, transparent 60%)",
      bottom: "linear-gradient(180deg, transparent 65%, rgba(0,0,0,0.4) 85%, #000 100%)",
    },
    muted: {
      top: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(8,10,30,0.4) 50%, rgba(8,10,30,0.2) 100%)",
      bottom: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6) 90%, #000 100%)",
    },
    low: {
      top: "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(8,10,30,0.65) 60%, rgba(8,10,30,0.4) 100%)",
      bottom: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)",
    },
  };
  const o = overlays[intensity] || overlays.full;

  return (
    <section style={{
      position: "relative",
      minHeight: height,
      background: "#000",
      color: "#ffffff",
      overflow: "hidden",
      isolation: "isolate",
      ...style,
    }}>
      {/* Backdrop image */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('../../assets/hex-horizon.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
      }} />

      {/* Top vignette — darkens sky so headline reads white */}
      <div style={{ position: "absolute", inset: 0, background: o.top, zIndex: 1, pointerEvents: "none" }} />

      {/* Bottom fade — lets the next section butt without a hard cut */}
      <div style={{ position: "absolute", inset: 0, background: o.bottom, zIndex: 1, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2, height: "100%" }}>
        {children}
      </div>
    </section>
  );
}

window.HexHorizon = HexHorizon;
