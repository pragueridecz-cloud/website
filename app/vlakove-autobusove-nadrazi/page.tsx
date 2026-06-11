import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Přeprava na vlakové a autobusové nádraží Praha | Taxi na nádraží",
  description: "Transfer na Hlavní nádraží, Smíchovské nádraží, Florenc a jiná nádraží v Praze i mimo ni. Pevné ceny, včasné odvezení, 24/7 dostupnost.",
  keywords: "taxi na nádraží Praha, transfer hlavní nádraží Praha, odvoz na nádraží, přeprava Florenc, taxi Smíchovské nádraží, taxi autobusové nádraží",
  openGraph: {
    title: "Přeprava na vlakové a autobusové nádraží | Naletiště Levně",
    description: "Transfer na Hlavní nádraží, Florenc, Smíchovské nádraží. Pevné ceny 24/7.",
    url: "https://www.naletistelevne.cz/vlakove-autobusove-nadrazi",
  },
  alternates: { canonical: "https://www.naletistelevne.cz/vlakove-autobusove-nadrazi" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Přeprava na vlakové a autobusové nádraží Praha",
  "description": "Transfer na hlavní nádraží, Florenc, Smíchovské nádraží a další.",
  "provider": { "@type": "LocalBusiness", "name": "Transfer Prague Car s.r.o.", "telephone": "+420606079179" },
}

const STATIONS = [
  { name: "Praha Hlavní nádraží", type: "vlak", desc: "Centrální vlaková stanice Prahy" },
  { name: "Praha Smíchovské nádraží", type: "vlak", desc: "Moderní přestupní uzel na jihozápadě" },
  { name: "Praha Masarykovo nádraží", type: "vlak", desc: "Historické centrum Prahy" },
  { name: "Praha Holešovice", type: "vlak", desc: "Mezinárodní vlaky a přestupní bod" },
  { name: "Florenc", type: "autobus", desc: "Hlavní autobusové nádraží Prahy" },
  { name: "ÚAN Černý Most", type: "autobus", desc: "Autobusové nádraží na východě Prahy" },
  { name: "Na Knížecí", type: "autobus", desc: "Jihozápadní autobusový terminál" },
  { name: "Zličín", type: "autobus", desc: "Westfield Zličín – autobusový terminál" },
]

export default function NadraziPage() {
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
                  Vlak · Autobus · Praha
                </div>
                <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.1 }}>
                  Transfer na vlakové<br />a autobusové nádraží<br />
                  <span style={{ color: "#F97316" }}>v Praze</span>
                </h1>
                <p className="mb-8" style={{ color: "rgba(255,255,255,.75)", fontSize: "17px", lineHeight: 1.7, maxWidth: "480px" }}>
                  Spolehlivá přeprava na Hlavní nádraží, Florenc, Smíchovské nádraží a všechna ostatní pražská nádraží. Přijedeme včas, ať stihnete spoj.
                </p>
                <a href="/#rezervace" className="inline-flex items-center gap-3 font-bold rounded-xl text-white"
                  style={{ background: "#F97316", padding: "14px 32px", fontSize: "17px", fontFamily: "Poppins, sans-serif", textDecoration: "none" }}>
                  Rezervovat transfer →
                </a>
              </div>
              <div className="flex-shrink-0">
                <img src="/service-vlakautobus.png" alt="Transfer na nádraží Praha" className="rounded-2xl shadow-2xl" style={{ maxWidth: "380px", width: "100%" }} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>Obsloužená nádraží</div>
              <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>Přepravíme vás na každé nádraží</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {STATIONS.map((s, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-orange-300 transition-all">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: s.type === "vlak" ? "rgba(30,58,138,.08)" : "rgba(249,115,22,.1)" }}>
                    {s.type === "vlak" ? "🚆" : "🚌"}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{s.name}</div>
                    <div className="text-xs text-gray-500">{s.desc}</div>
                  </div>
                  <div className="ml-auto text-xs font-bold px-2 py-1 rounded-full"
                    style={{ background: s.type === "vlak" ? "rgba(30,58,138,.08)" : "rgba(249,115,22,.1)", color: s.type === "vlak" ? "#1E3A8A" : "#F97316" }}>
                    {s.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>Výhody</div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>Proč jet s námi na nádraží</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "⏱️", title: "Přijedeme včas", desc: "Naplánujeme cestu s dostatečnou rezervou, abyste vlak nebo autobus určitě stihli." },
                { icon: "🧳", title: "Pomoc se zavazadly", desc: "Řidič vám pomůže s nakládkou a vykládkou zavazadel, kočárků nebo jízdních kol." },
                { icon: "🔄", title: "Zpáteční jízda", desc: "Objednáte i vyzvednutí z nádraží po návratu. Vše v jedné rezervaci." },
                { icon: "📍", title: "Přesné vyzvednutí", desc: "Vyzvednutí přímo od vašich dveří nebo na dohodnutém místě." },
                { icon: "💰", title: "Pevná cena", desc: "Víte přesně, kolik zaplatíte. Bez taxametru, bez příplatků." },
                { icon: "🌙", title: "Ranní vlaky bez stresu", desc: "Přepravujeme i v brzkých ranních hodinách. Žádný stres s MHD ve 4 ráno." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>FAQ</div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>Časté dotazy</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Jak daleko dopředu mám rezervovat?", a: "Doporučujeme alespoň 2 hodiny předem, ale přijímáme i urgentní objednávky dle aktuální dostupnosti." },
                { q: "Co když vlak přijede se zpožděním?", a: "Pokud vás vyzvedáváme z nádraží, sledujeme aktuální přijezd vašeho vlaku a přizpůsobíme čas vyzvednutí." },
                { q: "Přepravíte jízdní kolo nebo velké zavazadlo?", a: "Ano, pro kola a velká zavazadla doporučujeme minivan. Upřesněte při rezervaci." },
                { q: "Jedete i mimo Prahu?", a: "Samozřejmě, přepravujeme po celé ČR i do zahraničí. Cena se vypočítá automaticky." },
              ].map((item, i) => (
                <details key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    {item.q}<span className="text-gray-400 text-xl ml-4">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: "#1E3A8A" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Rezervujte transfer na nádraží</h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,.75)" }}>Stihnete každý spoj – my se postaráme o včasné odvezení</p>
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
