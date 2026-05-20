// Top navigation — responsive with hamburger menu at <900px.

const NAV_ITEMS = [
  { id: "Mods",      href: "../marketing/index.html" },
  { id: "Games",     href: "../game-detail/index.html" },
  { id: "Tools",     href: "../tools/index.html" },
  { id: "News",      href: "../news/index.html" },
  { id: "About",     href: "../about/index.html" },
];

function NavBar({ activeSection, onNav, here }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const auto = React.useMemo(() => {
    if (activeSection) return activeSection;
    const path = window.location.pathname;
    if (path.includes("/marketing/"))    return "Mods";
    if (path.includes("/game-detail/")) return "Games";
    if (path.includes("/mod-detail/")) return "Mods";
    if (path.includes("/tools/") || path.includes("/tool/")) return "Tools";
    if (path.includes("/news/")) return "News";
    if (path.includes("/about/") || path.includes("/team/") || path.includes("/community/") || path.includes("/web3/")) return "About";
    if (path.includes("/submit/")) return "Mods";
    return here || "Mods";
  }, [activeSection, here]);

  function NavLink({ item }) {
    const active = auto === item.id;
    return (
      <a href={item.href}
        onClick={onNav ? (e) => { e.preventDefault(); onNav(item.id); setMobileOpen(false); } : () => setMobileOpen(false)}
        style={{
          fontFamily: "var(--mg-font-body)",
          fontWeight: isMobile ? 600 : 500,
          fontSize: isMobile ? 20 : 14,
          letterSpacing: "0.2px",
          color: active ? "#fff" : "rgba(255,255,255,0.65)",
          textDecoration: "none",
          position: "relative",
          padding: isMobile ? "12px 0" : 0,
        }}>
        {item.id}
        {active && !isMobile && (
          <span style={{ position: "absolute", bottom: -20, left: 0, right: 0, height: 2, background: "#6fb5ff" }} />
        )}
        {active && isMobile && (
          <span style={{ display: "inline-block", marginLeft: 8, width: 8, height: 8, background: "#6fb5ff", borderRadius: 2 }} />
        )}
      </a>
    );
  }

  return (
    <>
      <header style={{
        height: 64,
        background: "#000000",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        gap: 24,
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <a href="../marketing/index.html" style={{ display: "flex", alignItems: "center", color: "#fff", textDecoration: "none" }}>
          <img src="../../assets/moddable-logo-white.png" height="28" alt="Moddable.Games" />
        </a>

        {!isMobile && (
          <nav style={{ display: "flex", gap: 22, marginLeft: 18 }}>
            {NAV_ITEMS.map(it => <NavLink key={it.id} item={it} />)}
          </nav>
        )}

        <div style={{ marginLeft: "auto", display: "flex", gap: 12, alignItems: "center" }}>
          {!isMobile && (
            <a href="#" style={{
              fontFamily: "var(--mg-font-pixel)",
              fontSize: 9,
              color: "#6fb5ff",
              letterSpacing: "1.5px",
              textDecoration: "none",
            }}>▲ DISCORD</a>
          )}
          {!isMobile && <Btn variant="primary" style={{ height: 38, fontSize: 13, padding: "0 16px" }} onClick={() => location.href = "../submit/index.html"}>Mod a game</Btn>}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Menu"
              style={{
                width: 40, height: 40, background: "transparent", color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)", borderRadius: 9999,
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              }}>
              <img src={`../../assets/icons/${mobileOpen ? "x" : "menu"}.svg`} width="20" height="20" alt="" style={{ filter: "invert(1)" }} />
            </button>
          )}
        </div>
      </header>

      {/* Mobile drawer */}
      {isMobile && mobileOpen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, bottom: 0,
          background: "#000", zIndex: 49,
          padding: "32px 24px", overflowY: "auto",
        }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV_ITEMS.map(it => <NavLink key={it.id} item={it} />)}
          </nav>
          <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            <Btn variant="primary" style={{ width: "100%" }} onClick={() => location.href = "../submit/index.html"}>Mod a game</Btn>
            <a href="#" style={{ display: "block", marginTop: 20, textAlign: "center", fontFamily: "var(--mg-font-pixel)", fontSize: 10, color: "#6fb5ff", letterSpacing: "1.5px", textDecoration: "none" }}>▲ DISCORD</a>
          </div>
        </div>
      )}
    </>
  );
}

window.NavBar = NavBar;
window.NAV_ITEMS = NAV_ITEMS;
