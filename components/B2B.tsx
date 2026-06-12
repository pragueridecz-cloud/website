import { FileText, Repeat, PhoneCall, BarChart2 } from "lucide-react";

const perks = [
  { icon: FileText, text: "Faktura na firmu — DPH doklad ke každé jízdě" },
  { icon: Repeat, text: "Pravidelné jízdy s fixní cenou a slevou" },
  { icon: BarChart2, text: "Přehled všech jízd a výdajů online" },
  { icon: PhoneCall, text: "Dedikovaná telefonní linka pro firemní zákazníky" },
];

export default function B2B() {
  return (
    <section id="pro-firmy" className="py-20 bg-[#1E3A8A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Vlevo – text */}
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
              Letiště, obchodní schůzky, firemní akce nebo hodinový pronájem s řidičem. Uzavřete firemní smlouvu a mějte dopravu pod kontrolou – s fakturou, přehledem jízd a slevou pro pravidelné zákazníky.
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
            <a href="mailto:info@naletistelevne.cz?subject=Firemní spolupráce"
              className="inline-block font-bold px-6 py-3 rounded-xl text-sm"
              style={{ background: "#F97316", color: "#fff", textDecoration: "none" }}>
              Domluvit firemní spolupráci →
            </a>
          </div>

          {/* Vpravo – fotka */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
              alt="Firemní přeprava"
              style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
