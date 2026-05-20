// Moddable.Games buttons — variant-driven, all pill-shaped.
// Variants: primary | dark | blue | green | red | outline-dark | outline-light | soft | pill

const mgBtnBase = {
  fontFamily: "var(--mg-font-body)",
  fontWeight: 600,
  fontSize: 15,
  letterSpacing: "0.2px",
  borderRadius: 9999,
  border: "none",
  cursor: "pointer",
  height: 48,
  padding: "0 24px",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  transition: "background 180ms cubic-bezier(.2,.8,.2,1), color 180ms cubic-bezier(.2,.8,.2,1), transform 180ms cubic-bezier(.2,.8,.2,1)",
  whiteSpace: "nowrap",
};

const mgBtnVariants = {
  primary:        { background: "#ffffff", color: "#14161c" },
  dark:           { background: "#000000", color: "#ffffff" },
  blue:           { background: "#0c4f8d", color: "#ffffff" },
  green:          { background: "#3a9928", color: "#ffffff" },
  red:            { background: "#d11a1a", color: "#ffffff" },
  "outline-dark": { background: "transparent", color: "#ffffff", border: "1px solid rgba(255,255,255,0.4)", padding: "0 23px" },
  "outline-light":{ background: "#ffffff", color: "#14161c", border: "1px solid #14161c", padding: "0 23px" },
  soft:           { background: "#f5f4ef", color: "#14161c" },
  pill:           { background: "rgba(255,255,255,0.08)", color: "#ffffff", height: 36, fontSize: 13, padding: "0 14px" },
};

function Btn({ variant = "primary", children, onClick, style, ...rest }) {
  const v = mgBtnVariants[variant] || mgBtnVariants.primary;
  return (
    <button
      onClick={onClick}
      style={{ ...mgBtnBase, ...v, ...style }}
      onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.97)"; e.currentTarget.style.opacity = "0.88"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.opacity = "1"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.opacity = "1"; }}
      {...rest}
    >
      {children}
    </button>
  );
}

window.Btn = Btn;
