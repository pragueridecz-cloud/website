interface Props {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, highlight, subtitle, center }: Props) {
  return (
    <div className={`mb-10 ${center ? "text-center" : "text-left"}`}>
      {/* Label s oranžovou čárou vlevo */}
      <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
        <div style={{ width: "32px", height: "2px", background: "#F97316", flexShrink: 0 }} />
        <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase", letterSpacing: "1.5px" }}>
          {label}
        </span>
      </div>
      {/* Nadpis – velký, tučný, tmavý */}
      <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.15, color: "#0f172a", fontSize: "clamp(28px,4vw,44px)", margin: "0 0 12px" }}>
        {title}
        {highlight && (
          <><br /><span style={{ color: "#F97316" }}>{highlight}</span></>
        )}
      </h2>
      {/* Oranžová linka pod nadpisem */}
      <div className={center ? "mx-auto" : ""} style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: subtitle ? "16px" : "0" }} />
      {subtitle && (
        <p style={{ color: "#64748b", fontSize: "16px", lineHeight: 1.7, maxWidth: center ? "none" : "540px" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
