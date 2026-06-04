interface Props {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, highlight, subtitle, center }: Props) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <div className={`flex items-center gap-3 mb-3 ${center ? "justify-center" : ""}`}>
        <span className="w-8 h-0.5 bg-[#F97316]"></span>
        <span className="text-xs font-bold tracking-widest uppercase text-[#F97316]">{label}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
        {title}
        {highlight && (
          <>
            <br />
            <span className="text-[#1E3A8A]">{highlight}</span>
          </>
        )}
      </h2>
      <div className={`w-12 h-0.5 bg-[#F97316] mt-4 ${center ? "mx-auto" : ""}`}></div>
      {subtitle && <p className="text-[#475569] mt-4 max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}
