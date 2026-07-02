import { FileText, Repeat, PhoneCall, BarChart2, Plane, Users, MapPin, Calendar, Star, Presentation } from "lucide-react";

const perks = [
  { icon: FileText, text: "Faktura na firmu — DPH doklad ke každé jízdě" },
  { icon: Repeat, text: "Pravidelné jízdy s fixní cenou a slevou" },
  { icon: BarChart2, text: "Přehled všech jízd a výdajů online" },
  { icon: PhoneCall, text: "Dedikovaná telefonní linka pro firemní zákazníky" },
];

const useCases = [
  { icon: Plane,         title: "Přeprava zaměstnanců na letiště",       desc: "Včasné odvezení na pracovní cesty s fakturou pro HR oddělení." },
  { icon: Users,         title: "Vyzvednutí obchodních partnerů",         desc: "Reprezentativní přivítání klientů přímo na letišti nebo nádraží." },
  { icon: MapPin,        title: "Přesuny mezi schůzkami",                 desc: "Flexibilní doprava v průběhu celého dne bez starostí s parkováním." },
  { icon: Calendar,      title: "Firemní akce a teambuildingy",           desc: "Přeprava celého týmu na firemní event nebo za hranice města." },
  { icon: Presentation,  title: "Roadshow a konference",                  desc: "Logistika přepravy pro účastníky konferencí a roadshow po Praze." },
  { icon: Star,          title: "VIP hosté a delegace",                   desc: "Prémiový servis pro zahraniční delegace nebo VIP hosty." },
];

export default function B2B() {
  return (
    <section id="pro-firmy" className="py-20 bg-[#00205B]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Vlevo – text + výhody */}
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

          {/* Vpravo – 6 využití */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" as const, letterSpacing: "2px", marginBottom: "20px" }}>
              Kdy nás využít
            </div>
            <div className="grid grid-cols-1 gap-3">
              {useCases.map((u) => (
                <div key={u.title} className="flex items-start gap-4 rounded-xl p-4"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(249,115,22,0.15)" }}>
                    <u.icon size={17} style={{ color: "#F97316" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "13px", color: "#fff", marginBottom: "2px" }}>{u.title}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{u.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
