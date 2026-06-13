import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Firemní přeprava Praha | Transfer pro firmy | Naletiště Levně",
  description: "Firemní taxi a transfer Praha pro zaměstnance, klienty i obchodní partnery. Faktura na firmu, měsíční vyúčtování, řidiči ve formálním oblečení. Bez DPH na IČO.",
  keywords: "firemní přeprava Praha, taxi pro firmy Praha, firemní transfer Praha, přeprava zaměstnanců Praha, business travel Praha, faktura na firmu taxi",
  openGraph: {
    title: "Firemní přeprava Praha | Faktura na IČO | Naletiště Levně",
    description: "Transfer pro firmy – faktura na firmu, měsíční vyúčtování, profesionální řidiči.",
    url: "https://www.naletistelevne.cz/preprava-pro-firmy",
  },
  alternates: { canonical: "https://www.naletistelevne.cz/preprava-pro-firmy" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Firemní přeprava Praha",
  "description": "Profesionální taxi a transfer pro firmy. Faktura na IČO, měsíční vyúčtování.",
  "provider": { "@type": "LocalBusiness", "name": "Transfer Prague Car s.r.o.", "telephone": "+420606079179" },
}

export default function PrepravaPropFirmy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main>

                {/* Hero nadpis */}
        <div style={{ background: "#1E3A8A", padding: "100px 24px 60px" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "2px", background: "#F97316" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                Firemní přeprava
              </span>
            </div>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.15, color: "#fff", fontSize: "clamp(32px,5vw,56px)", margin: "0 0 16px" }}>
              Přeprava pro firmy<br />
              <span style={{ color: "#F97316" }}>a korporace</span>
            </h1>
            <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "20px" }} />
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.7, maxWidth: "600px" }}>
              Letiště, konference, firemní akce nebo hodinový pronájem. Faktura, přehled jízd, slevy pro stálé zákazníky.
            </p>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>Výhody pro firmy</div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>Proč nás volí firmy</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "📄", title: "Faktura na IČO", desc: "Každá jízda s daňovým dokladem. Neplátci DPH i plátci DPH." },
                { icon: "📊", title: "Měsíční vyúčtování", desc: "Pro pravidelné zákazníky nabízíme měsíční vyúčtování a hromadné faktury." },
                { icon: "👔", title: "Profesionální řidiči", desc: "Řidiči ve formálním oblečení s chováním odpovídajícím firemnímu prostředí." },
                { icon: "🕐", title: "Přesnost a spolehlivost", desc: "Víme, že v byznysu záleží na každé minutě. Přijedeme vždy včas." },
                { icon: "🌍", title: "Letišťní transfer", desc: "Vyzvednutí a odvoz zaměstnanců a klientů na letiště. Sledování letu." },
                { icon: "📞", title: "Dedikovaná linka", desc: "Pro firemní zákazníky prioritní telefonická podpora 24/7." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-all">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>Využití</div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>Kdy využít firemní přepravu</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Přeprava zaměstnanců na letiště", desc: "Včasné odvezení na pracovní cesty s fakturou pro HR oddělení." },
                { title: "Vyzvednutí obchodních partnerů", desc: "Reprezentativní přivítání klientů přímo na letišti nebo nádraží." },
                { title: "Přesuny mezi schůzkami", desc: "Flexibilní doprava v průběhu celého dne bez starostí s parkováním." },
                { title: "Firemní akce a teambuildingové výjezdy", desc: "Přeprava celého týmu na firemní event nebo za hranice města." },
                { title: "Roadshow a konference", desc: "Logistika přepravy pro účastníky konferencí a roadshow po Praze." },
                { title: "VIP hosté a delegace", desc: "Prémiový servis pro zahraniční delegace nebo VIP hosty." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 flex gap-4 items-start shadow-sm">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
                    style={{ background: "#1E3A8A" }}>{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6"
              style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>Kontakt</div>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>
              Domluvme firemní spolupráci
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Pro firmy s pravidelnou potřebou přepravy nabízíme výhodné podmínky, měsíční fakturu a dedikovanou podporu. Napište nám nebo zavolejte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+420606079179" className="inline-block font-bold rounded-xl px-8 py-4"
                style={{ background: "#1E3A8A", color: "#fff", fontFamily: "Poppins, sans-serif", textDecoration: "none" }}>
                📞 +420 606 079 179
              </a>
              <a href="mailto:info@naletistelevne.cz" className="inline-block font-bold rounded-xl px-8 py-4"
                style={{ background: "#F97316", color: "#fff", fontFamily: "Poppins, sans-serif", textDecoration: "none" }}>
                ✉️ info@naletistelevne.cz
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
