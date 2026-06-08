interface Props {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, highlight, subtitle, center }: Props) {
  return (
    <div className={`mb-10 ${center ? "text-center items-center" : "text-left"}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${center ? "" : ""}`}
        style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>
        {label}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Poppins, sans-serif", lineHeight: 1.2 }}>
        {title}{" "}
        {highlight && <span style={{ color: "#1E3A8A" }}>{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`text-gray-500 text-base leading-relaxed ${center ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
