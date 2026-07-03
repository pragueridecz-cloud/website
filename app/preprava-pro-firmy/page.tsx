import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { FileText, Repeat, PhoneCall, BarChart2, Plane, Users, MapPin, Calendar, Star, Presentation } from "lucide-react";

const perks = [
  { icon: FileText, text: "Faktura na firmu — DPH doklad ke každé jízdě" },
  { icon: Repeat, text: "Pravidelné jízdy s fixní cenou a slevou" },
  { icon: BarChart2, text: "Přehled všech jízd a výdajů online" },
  { icon: PhoneCall, text: "Dedikovaná telefonní linka pro firemní zákazníky" },
];

const useCases = [
  { icon: Plane,        title: "Přeprava zaměstnanců na letiště",   desc: "Včasné odvezení na pracovní cesty s fakturou pro HR oddělení." },
  { icon: Users,        title: "Vyzvednutí obchodních partnerů",     desc: "Reprezentativní přivítání klientů přímo na letišti nebo nádraží." },
  { icon: MapPin,       title: "Přesuny mezi schůzkami",             desc: "Flexibilní doprava v průběhu celého dne bez starostí s parkováním." },
  { icon: Calendar,     title: "Firemní akce a teambuildingy",       desc: "Přeprava celého týmu na firemní event nebo za hranice města." },
  { icon: Presentation, title: "Roadshow a konference",              desc: "Logistika přepravy pro účastníky konferencí a roadshow po Praze." },
  { icon: Star,         title: "VIP hosté a delegace",               desc: "Prémiový servis pro zahraniční delegace nebo VIP hosty." },
];

export default function PrepravaPropFirmy() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg, #00205B 0%, #0a3a8a 100%)", padding: "80px 20px 60px" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: "32px", height: "2px", background: "#F97316", flexShrink: 0 }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase" as const, letterSpacing: "1.5px" }}>
                Pro firmy a korporace
              </span>
            </div>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.15, color: "#fff", fontSize: "clamp(32px,5vw,56px)", margin: "0 0 20px" }}>
              Firemní doprava<br />
              <span style={{ color: "#F97316" }}>na každou příležitost</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.7, maxWidth: "600px", marginBottom: "36px" }}>
              Letiště, obchodní schůzky, firemní akce nebo hodinový pronájem s řidičem. Uzavřete firemní smlouvu a mějte dopravu pod kontrolou – s fakturou, přehledem jízd a slevou.
            </p>
            <a href="mailto:info@naletistelevne.cz?subject=Firemní spolupráce"
              style={{ display: "inline-block", background: "#F97316", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "15px", padding: "14px 32px", borderRadius: "12px", textDecoration: "none" }}>
              Domluvit firemní spolupráci →
            </a>
          </div>
        </section>

        {/* Výhody */}
        <section style={{ background: "#fff", padding: "64px 20px" }}>
          <div className="max-w-6xl mx-auto">
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "#00205B", marginBottom: "8px" }}>
              Proč firemní účet?
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", marginBottom: "40px" }}>Výhody, které oceníte při pravidelné firemní přepravě.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {perks.map((p) => (
                <div key={p.text} className="flex items-center gap-4 rounded-xl p-5"
                  style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#fff7ed" }}>
                    <p.icon size={18} style={{ color: "#F97316" }} />
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#1e293b" }}>{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kdy nás využít */}
        <section style={{ background: "#f8fafc", padding: "64px 20px" }}>
          <div className="max-w-6xl mx-auto">
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "#00205B", marginBottom: "8px" }}>
              Kdy nás využít
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", marginBottom: "40px" }}>Pokryjeme každou situaci, kdy vaše firma potřebuje spolehlivou přepravu.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((u) => (
                <div key={u.title} className="flex items-start gap-4 rounded-xl p-5"
                  style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#fff7ed" }}>
                    <u.icon size={18} style={{ color: "#F97316" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "14px", color: "#00205B", marginBottom: "4px" }}>{u.title}</div>
                    <div style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.5 }}>{u.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partneři */}
        <section style={{ background: "#00205B", padding: "48px 20px" }}>
          <div className="max-w-6xl mx-auto text-center">
            <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase" as const, letterSpacing: "2px", marginBottom: "24px" }}>
              Nám důvěřují
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[{ name: "Česká televize", logo: "/partner-ct.png" }, { name: "Blažek", logo: "/partner-blazek.png" }].map((p) => (
                <div key={p.name} className="flex items-center justify-center rounded-xl px-7 py-3"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", minWidth: "130px" }}>
                  <img src={p.logo} alt={p.name}
                    style={{ maxHeight: "64px", maxWidth: "160px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                </div>
              ))}
              <div className="flex items-center justify-center rounded-xl px-7 py-3"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", minWidth: "130px" }}>
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", fontWeight: 600 }}>a mnoho dalších…</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#fff", padding: "64px 20px", textAlign: "center" }}>
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "#00205B", marginBottom: "12px" }}>
              Připraveni začít?
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, marginBottom: "32px" }}>
              Ozvěte se nám a připravíme nabídku na míru vaší firmě.
            </p>
            <a href="mailto:info@naletistelevne.cz?subject=Firemní spolupráce"
              style={{ display: "inline-block", background: "#F97316", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 40px", borderRadius: "12px", textDecoration: "none", marginRight: "12px" }}>
              Napsat nám →
            </a>
            <a href="tel:+420606079179"
              style={{ display: "inline-block", background: "#f1f5f9", color: "#00205B", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 40px", borderRadius: "12px", textDecoration: "none" }}>
              +420 606 079 179
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
