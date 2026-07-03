import { FileText, Repeat, PhoneCall, BarChart2 } from "lucide-react";

const perks = [
  { icon: FileText, text: "Faktura na firmu ke každé jízdě" },
  { icon: Repeat,   text: "Pravidelné jízdy se slevou" },
  { icon: BarChart2,text: "Přehled jízd a výdajů online" },
  { icon: PhoneCall,text: "Dedikovaná telefonní linka" },
];

export default function B2B() {
  return (
    <section id="pro-firmy" className="pt-20 pb-10 bg-[#00205B]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Vlevo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: "32px", height: "2px", background: "#F97316", flexShrink: 0 }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase" as const, letterSpacing: "1.5px" }}>
                Pro firmy a korporace
              </span>
            </div>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.15, color: "#fff", fontSize: "clamp(28px,4vw,44px)", margin: "0 0 12px" }}>
              Firemní doprava<br />
              <span style={{ color: "#F97316" }}>na každou příležitost</span>
            </h2>
            <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "20px" }} />
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px", lineHeight: 1.7, marginBottom: "28px" }}>
              Letiště, obchodní schůzky, firemní akce nebo hodinový pronájem s řidičem. Uzavřete firemní smlouvu a mějte dopravu pod kontrolou.
            </p>
            <ul className="space-y-3 mb-8">
              {perks.map((p) => (
                <li key={p.text} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.9)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <p.icon size={15} style={{ color: "#F97316" }} />
                  </div>
                  {p.text}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 flex-wrap">
              <a href="/preprava-pro-firmy"
                className="inline-block font-bold px-6 py-3 rounded-xl text-sm"
                style={{ background: "#F97316", color: "#fff", textDecoration: "none" }}>
                Více o firemní přepravě →
              </a>
              <a href="mailto:info@naletistelevne.cz?subject=Firemní spolupráce"
                className="inline-block font-bold px-6 py-3 rounded-xl text-sm"
                style={{ background: "rgba(255,255,255,0.1)", color: "#fff", textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
                Napsat nám
              </a>
            </div>
          </div>

          {/* Vpravo – 3x2 grid využití */}
          <div className="grid grid-cols-2 gap-3">
            {[
              ["✈️", "Letiště", "Transfer na jakékoliv letiště v regionu"],
              ["🤝", "Obchodní partneři", "Reprezentativní vyzvednutí klientů"],
              ["📅", "Schůzky", "Přesuny mezi schůzkami celý den"],
              ["🎉", "Firemní akce", "Teambuildingy a eventy"],
              ["🎤", "Konference", "Logistika pro účastníky"],
              ["⭐", "VIP hosté", "Prémiový servis pro delegace"],
            ].map(([icon, title, desc]) => (
              <div key={title as string} className="rounded-xl p-4"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: "20px", marginBottom: "6px" }}>{icon}</div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "12px", color: "#fff", marginBottom: "2px" }}>{title}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>{desc}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Partner bar */}
        <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase" as const, letterSpacing: "2px", textAlign: "center" as const, marginBottom: "20px" }}>
            Nám důvěřují
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4" style={{ maxWidth: "640px", margin: "0 auto" }}>
            {[{ name: "Česká televize", logo: "/partner-ct.png" }, { name: "Blažek", logo: "/partner-blazek.png" }].map((p) => (
              <div key={p.name} className="flex items-center justify-center rounded-xl px-7 py-3"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", minWidth: "130px" }}>
                <img src={p.logo} alt={p.name}
                  style={{ maxHeight: "64px", maxWidth: "160px", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 1 }} />
              </div>
            ))}
            <div className="flex items-center justify-center rounded-xl px-7 py-3"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", minWidth: "130px" }}>
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", fontWeight: 600 }}>a mnoho dalších…</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
