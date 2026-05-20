// Cosmic hex-horizon hero — with subtle scroll parallax on the horizon.

function Hero() {
  const bgRef = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      // Parallax: backdrop drifts up at ~30% of scroll speed.
      bgRef.current.style.transform = `translateY(${y * -0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section style={{
      position: "relative",
      minHeight: 780,
      background: "#000",
      color: "#ffffff",
      overflow: "hidden",
      isolation: "isolate",
    }}>
      {/* Parallax backdrop */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "130%",
          backgroundImage: "url('../../assets/hex-horizon.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
        }}
      />

      {/* Top vignette + bottom fade */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,10,30,0.55) 0%, rgba(8,10,30,0.15) 40%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 65%, rgba(0,0,0,0.4) 85%, #000 100%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", padding: "120px 24px 200px", maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <div style={{
          fontFamily: "var(--mg-font-pixel)",
          fontSize: 11,
          color: "#6fb5ff",
          letterSpacing: "2px",
          marginBottom: 28,
          textShadow: "0 0 12px rgba(111,181,255,0.5)",
        }}>
          ▲ MODDABLE.GAMES
        </div>

        <h1 style={{
          fontFamily: "var(--mg-font-display)",
          fontWeight: 600,
          fontSize: "clamp(56px, 8.5vw, 120px)",
          lineHeight: 1.0,
          letterSpacing: "-0.025em",
          margin: 0,
          maxWidth: 1000,
          marginInline: "auto",
          textShadow: "0 4px 30px rgba(0,0,0,0.5)",
        }}>
          Creating games<br/>you already own.
        </h1>

        <p style={{
          fontFamily: "var(--mg-font-body)",
          fontSize: 18,
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.86)",
          maxWidth: 580,
          margin: "32px auto 40px",
          textShadow: "0 2px 16px rgba(0,0,0,0.7)",
        }}>
          Twelve community-built rulebook mods for the boards collecting dust on your shelf —
          plus three original games built to be modded from day one.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <Btn variant="primary">Browse the mods</Btn>
          <Btn variant="outline-dark">Read the manifesto</Btn>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
