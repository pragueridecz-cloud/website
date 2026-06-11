import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Doprava na letiště Praha | Transfer od 790 Kč | Naletiště Levně",
  description: "Rezervujte přepravu na letiště Václava Havla Praha předem. Pevná cena od 790 Kč, řidič čeká u výstupu, sledování letu, 24/7. Sedan, minivan, VIP vozidla.",
  keywords: "doprava na letiště Praha, transfer letiště Václava Havla, taxi letiště Praha, odvoz na letiště, přeprava na letiště Praha levně, airport transfer Praha",
  openGraph: {
    title: "Doprava na letiště Praha | Transfer od 790 Kč",
    description: "Pevná cena, řidič čeká u výstupu, sledování letu. Rezervujte online 24/7.",
    url: "https://www.naletistelevne.cz/letistni-preprava",
    images: [{ url: "https://www.naletistelevne.cz/service-airport.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.naletistelevne.cz/letistni-preprava" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Doprava na letiště Praha",
  "description": "Profesionální přeprava na letiště Václava Havla Praha a z něj. Pevné ceny, sledování letu, 24/7.",
  "provider": { "@type": "LocalBusiness", "name": "Transfer Prague Car s.r.o.", "telephone": "+420606079179", "url": "https://www.naletistelevne.cz" },
  "areaServed": { "@type": "City", "name": "Praha" },
  "offers": { "@type": "Offer", "priceCurrency": "CZK", "price": "790", "description": "Sedan Praha centrum → Letiště Václava Havla" },
}

export default function LetistniPreprava() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main>

        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #162d6e 100%)", paddingTop: "120px", paddingBottom: "64px" }}>
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(249,115,22,.2)", color: "#F97316", border: "1px solid rgba(249,115,22,.3)" }}>
                  Letiště Václava Havla Praha (PRG)
                </div>
                <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.1 }}>
                  Doprava na letiště Praha<br />
                  <span style={{ color: "#F97316" }}>od 790 Kč</span>
                </h1>
                <p className="mb-8" style={{ color: "rgba(255,255,255,.75)", fontSize: "17px", lineHeight: 1.7, maxWidth: "480px" }}>
                  Profesionální přeprava na letiště Václava Havla Praha a zpět. Pevná cena, bez příplatků za zpoždění letu, řidič čeká u výstupu s cedulkou.
                </p>
                <a href="/#rezervace" className="inline-flex items-center gap-3 font-bold rounded-xl text-white"
                  style={{ background: "#F97316", padding: "14px 32px", fontSize: "17px", fontFamily: "Poppins, sans-serif", textDecoration: "none" }}>
                  Rezervovat transfer →
                </a>
              </div>
              <div className="flex-shrink-0">
                <img src="/service-airport.png" alt="Transfer na letiště Praha" className="rounded-2xl shadow-2xl" style={{ maxWidth: "380px", width: "100%" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Ceny */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>Ceník</div>
              <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>
                Pevné ceny bez překvapení
              </h2>
              <p className="text-gray-500 max-w-xl">Ceny jsou fixní a platí v jakoukoliv denní i noční hodinu. Žádné příplatky za zpoždění letu nebo nočních jízd.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { from: "Praha centrum", to: "Letiště PRG", price: "790", vehicle: "Sedan (1–4 osoby)" },
                { from: "Praha centrum", to: "Letiště PRG", price: "990", vehicle: "Minivan (1–7 osob)" },
                { from: "Praha centrum", to: "Letiště PRG", price: "1 290", vehicle: "VIP / Business" },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl p-6 border-2" style={{ borderColor: i === 0 ? "#F97316" : "#e2e8f0", background: i === 0 ? "#fff7ed" : "#f8fafc" }}>
                  {i === 0 && <div className="text-xs font-bold mb-2" style={{ color: "#F97316" }}>NEJOBLÍBENĚJŠÍ</div>}
                  <div className="text-sm text-gray-500 mb-1">{item.from} → {item.to}</div>
                  <div className="text-4xl font-black mb-1" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>{item.price} Kč</div>
                  <div className="text-sm font-medium text-gray-600">{item.vehicle}</div>
                  <a href="/#rezervace" className="mt-4 block text-center py-2.5 rounded-lg text-sm font-bold"
                    style={{ background: i === 0 ? "#F97316" : "#1E3A8A", color: "#fff", textDecoration: "none" }}>
                    Rezervovat
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jak to funguje */}
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>Jak to funguje</div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>Jednoduché jako 1-2-3</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "Rezervujte online", desc: "Vyplňte odkud, kam a kdy. Cena se zobrazí okamžitě. Platba kartou nebo hotově řidiči." },
                { num: "2", title: "Sledujeme váš let", desc: "Automaticky sledujeme zpoždění vašeho letu. Řidič přijede ve správný čas." },
                { num: "3", title: "Řidič čeká u výstupu", desc: "Váš řidič čeká s cedulkou s vaším jménem přímo u výstupu z celnice." },
              ].map((step) => (
                <div key={step.num} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg font-black flex-shrink-0"
                    style={{ background: "#1E3A8A", fontFamily: "Poppins, sans-serif" }}>{step.num}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>FAQ</div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>Časté dotazy</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Co když má můj let zpoždění?", a: "Sledujeme váš let v reálném čase. Řidič přijede přizpůsoben skutečnému příletu – neplatíte žádné příplatky za čekání způsobené zpožděním letu." },
                { q: "Kde mě řidič vyzvedne?", a: "U odletů vás vyzvedne na adrese, kterou zadáte při rezervaci. U příletů vás řidič čeká přímo v příletové hale s cedulkou s vaším jménem." },
                { q: "Jak zaplatím?", a: "Platbu kartou online nebo hotově řidiči při nastoupení. Na vyžádání vystavíme fakturu na firmu." },
                { q: "Mohu přivézt velká zavazadla nebo lyže?", a: "Samozřejmě. Při rezervaci uveste počet zavazadel a speciální požadavky. Pro lyže, kočárky a podobně doporučujeme minivan." },
                { q: "Jak rychle musím rezervovat?", a: "Doporučujeme alespoň 2 hodiny předem, ale přijímáme i poslední chvíle dle dostupnosti." },
              ].map((item, i) => (
                <details key={i} className="border border-gray-200 rounded-xl overflow-hidden group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    {item.q}
                    <span className="text-gray-400 text-xl ml-4">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16" style={{ background: "#1E3A8A" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Rezervujte transfer na letiště</h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,.75)" }}>Pevná cena, spolehlivý řidič, žádné starosti</p>
            <a href="/#rezervace" className="inline-block font-bold rounded-xl px-8 py-4 text-lg"
              style={{ background: "#F97316", color: "#fff", fontFamily: "Poppins, sans-serif", textDecoration: "none" }}>
              Zarezervovat nyní
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
