// News row — three-up post tiles on warm-ivory.

const SAMPLE_NEWS = [
  { tag: "Devlog",     date: "May 12", title: "Mongo enters open playtest", body: "Our second original game opens its playtest doors. 200 spots." },
  { tag: "Mod update", date: "May 09", title: "Econopoly v1.4: the audit patch", body: "Cash-pile tax cap raised. Bankruptcy chain reactions buffed." },
  { tag: "Community",  date: "May 02", title: "Mod jam #3 wraps up", body: "Twelve submissions. One won a literal trophy made of meeples." },
];

function NewsTile({ tag, date, title, body }) {
  return (
    <a href="#" style={{
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: 24,
      background: "#ffffff",
      border: "1px solid #e6e3d8",
      borderRadius: 20,
      textDecoration: "none",
      color: "inherit",
      transition: "border-color 180ms cubic-bezier(.2,.8,.2,1)",
    }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#14161c"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e6e3d8"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{
          fontFamily: "var(--mg-font-body)",
          fontWeight: 600,
          fontSize: 11,
          background: "#14161c",
          color: "#fff",
          padding: "3px 10px",
          borderRadius: 9999,
          letterSpacing: "0.3px",
        }}>{tag}</span>
        <span style={{ fontFamily: "var(--mg-font-mono)", fontSize: 12, color: "#7a8290" }}>{date}</span>
      </div>

      <h3 style={{
        fontFamily: "var(--mg-font-display)",
        fontWeight: 600,
        fontSize: 22,
        lineHeight: 1.25,
        letterSpacing: "-0.25px",
        color: "#14161c",
        margin: 0,
      }}>{title}</h3>

      <p style={{
        fontFamily: "var(--mg-font-body)",
        fontSize: 14,
        lineHeight: 1.55,
        color: "#4f5764",
        margin: 0,
      }}>{body}</p>

      <span style={{
        fontFamily: "var(--mg-font-body)",
        fontWeight: 600,
        fontSize: 13,
        color: "#0c4f8d",
        marginTop: "auto",
      }}>
        Read more →
      </span>
    </a>
  );
}

function NewsRow() {
  return (
    <section style={{ background: "#f5f4ef", padding: "88px 24px", borderTop: "1px solid #e6e3d8" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
          <h2 style={{
            fontFamily: "var(--mg-font-display)",
            fontWeight: 600,
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.4px",
            color: "#14161c",
            margin: 0,
          }}>From the table.</h2>
          <a href="#" style={{
            fontFamily: "var(--mg-font-body)",
            fontWeight: 600,
            fontSize: 14,
            color: "#0c4f8d",
            textDecoration: "none",
          }}>All posts →</a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {SAMPLE_NEWS.map(n => <NewsTile key={n.title} {...n} />)}
        </div>
      </div>
    </section>
  );
}

window.NewsTile = NewsTile;
window.NewsRow = NewsRow;
