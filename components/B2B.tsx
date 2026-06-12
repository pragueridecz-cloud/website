import { FileText, Repeat, PhoneCall, BarChart2, Plane, Users, MapPin, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";

const perks = [
  { icon: FileText, text: "Faktura na firmu — DPH doklad ke každé jízdě" },
  { icon: Repeat, text: "Pravidelné jízdy s fixní cenou a slevou" },
  { icon: BarChart2, text: "Přehled všech jízd a výdajů online" },
  { icon: PhoneCall, text: "Dedikovaná telefonní linka pro firemní zákazníky" },
];

const usecases = [
  { icon: Plane, title: "Letiště", desc: "Odvoz zaměstnanců a klientů na letiště – Praha, Vídeň, Mnichov i další." },
  { icon: Users, title: "Firemní akce", desc: "Přeprava týmu na konference, teambuildingové akce nebo večírky." },
  { icon: MapPin, title: "Obchodní schůzky", desc: "Přesuny mezi schůzkami v Praze i mimo ni bez starostí s parkováním." },
  { icon: Clock, title: "Hodinový pronájem", desc: "Řidič k dispozici na celý den – pro VIP hosty nebo náročný pracovní program." },
];

export default function B2B() {
  return (
    <section id="pro-firmy" className="py-20 bg-[#1E3A8A]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Nadpis ve stylu SectionHeading ale na tmavém pozadí */}
        <div className="mb-12">
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
          <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "16px" }} />
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px", lineHeight: 1.7, maxWidth: "560px" }}>
            Letiště, obchodní schůzky, firemní akce nebo hodinový pronájem s řidičem. Uzavřete firemní smlouvu a mějte dopravu pod kontrolou – s fakturou, přehledem jízd a slevou pro pravidelné zákazníky.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-12 items-start" style={{ maxWidth: "680px" }}>
          <div>
            {/* Případy užití */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {usecases.map((u) => (
                <div key={u.title} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background: "rgba(249,115,22,0.2)" }}>
                    <u.icon size={16} style={{ color: "#F97316" }} />
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{u.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{u.desc}</div>
                </div>
              ))}
            </div>

            {/* Výhody */}
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

          {/* Ceník */}
          <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
            <div className="text-white font-semibold text-lg mb-6">Orientační ceny pro firmy</div>
            <div className="space-y-4">
              {[
                { route: "Praha centrum → letiště PRG", price: "od 790 Kč" },
                { route: "Praha → Vídeň (VIE)", price: "od 4 500 Kč" },
                { route: "Praha → Mnichov (MUC)", price: "od 7 900 Kč" },
                { route: "Praha → Berlín (BER)", price: "od 8 900 Kč" },
                { route: "Hodinový pronájem s řidičem", price: "od 699 Kč/hod" },
                { route: "Firemní akce – skupinová přeprava", price: "na dotaz" },
              ].map((item) => (
                <div key={item.route} className="flex justify-between items-center pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{item.route}</span>
                  <span className="text-white font-semibold text-sm">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
              * Přesná cena závisí na vozidle a počtu cestujících. Pro pravidelné zákazníky individuální slevy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
