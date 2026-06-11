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

        <section style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #162d6e 100%)", paddingTop: "120px", paddingBottom: "64px" }}>
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(249,115,22,.2)", color: "#F97316", border: "1px solid rgba(249,115,22,.3)" }}>
                  Business transfer · Praha
                </div>
                <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.1 }}>
                  Přeprava<br />
                  <span style={{ color: "#F97316" }}>pro firmy</span>
                </h1>
                <p className="mb-8" style={{ color: "rgba(255,255,255,.75)", fontSize: "17px", lineHeight: 1.7, maxWidth: "480px" }}>
                  Spolehlivá firemní přeprava pro zaměstnance, klienty i obchodní partnery. Faktura na IČO, měsíční vyúčtování a profesionální přístup.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/#rezervace" className="inline-block font-bold rounded-xl text-white"
                    style={{ background: "#F97316", padding: "14px 32px", fontSize: "17px", fontFamily: "Poppins, sans-serif", textDecoration: "none" }}>
                    Rezervovat →
                  </a>
                  <a href="mailto:info@naletistelevne.cz" className="inline-block font-bold rounded-xl"
                    style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.3)", padding: "14px 32px", fontSize: "17px", fontFamily: "Poppins, sans-serif", textDecoration: "none", color: "#fff" }}>
                    Napsat nám
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img src="/service-firmy.png" alt="Firemní přeprava Praha" className="rounded-2xl shadow-2xl" style={{ maxWidth: "380px", width: "100%" }} />
              </div>
            </div>
          </div>
        </section>

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
