import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Mezinárodní a meziměstská doprava | Praha–Vídeň, Praha–Berlín | Naletiště Levně",
  description: "Přeprava mezi městy a do zahraničí. Praha–Brno od 2 500 Kč, Praha–Vídeň od 4 500 Kč, Praha–Berlín od 8 900 Kč. Pevné ceny, komfortní vozidla, 24/7.",
  keywords: "meziměstská doprava, mezinárodní transfer, Praha Vídeň taxi, Praha Berlín taxi, Praha Brno taxi, přeprava do zahraničí, taxi Praha Mnichov",
  openGraph: {
    title: "Mezinárodní a meziměstská doprava | Pevné ceny",
    description: "Praha–Vídeň od 4 500 Kč, Praha–Berlín od 8 900 Kč. Komfortní přeprava po celé Evropě.",
    url: "https://www.naletistelevne.cz/mezimestska-doprava",
  },
  alternates: { canonical: "https://www.naletistelevne.cz/mezimestska-doprava" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mezinárodní a meziměstská doprava",
  "description": "Přeprava mezi městy v ČR a do zahraničí – Vídeň, Berlín, Mnichov, Varšava a další.",
  "provider": { "@type": "LocalBusiness", "name": "Transfer Prague Car s.r.o.", "telephone": "+420606079179" },
  "areaServed": [
    { "@type": "Country", "name": "Česká republika" },
    { "@type": "Country", "name": "Německo" },
    { "@type": "Country", "name": "Rakousko" },
    { "@type": "Country", "name": "Polsko" },
    { "@type": "Country", "name": "Slovensko" },
  ],
}

const ROUTES = [
  { from: "Praha", to: "Brno", price: "2 500", km: "210 km", time: "2,5 hod" },
  { from: "Praha", to: "Vídeň", price: "4 500", km: "330 km", time: "3,5 hod" },
  { from: "Praha", to: "Mnichov", price: "7 900", km: "380 km", time: "4 hod" },
  { from: "Praha", to: "Berlín", price: "8 900", km: "350 km", time: "4 hod" },
  { from: "Praha", to: "Drážďany", price: "3 900", km: "155 km", time: "1,5 hod" },
  { from: "Praha", to: "Varšava", price: "11 900", km: "660 km", time: "7 hod" },
  { from: "Praha", to: "Bratislava", price: "4 900", km: "330 km", time: "3,5 hod" },
  { from: "Praha", to: "Wroclaw", price: "6 900", km: "280 km", time: "3 hod" },
]

const FAQ_ITEMS = [
  { q: "Jezdíte i mimo ČR?", a: "Ano, přepravujeme po celé střední Evropě – Německo, Rakousko, Slovensko, Polsko, Maďarsko a další. Cenu trasy získáte ihned po zadání do rezervačního formuláře." },
  { q: "Je cena fixní i pro mezinárodní trasy?", a: "Ano, cena je vždy fixní a dohodnuta předem. Žádné příplatky za mýto, zpoždění nebo noční jízdu." },
  { q: "Mohu rezervovat cestu tam a zpět?", a: "Samozřejmě, v rezervačním formuláři jednoduše přidejte zpáteční cestu se slevou." },
  { q: "Jak probíhá platba za dlouhé trasy?", a: "Platba kartou online nebo hotově řidiči. U tras nad 5 000 Kč je možná záloha předem." },
  { q: "Co když trasa není v ceníku?", a: "Zadejte ji do rezervačního formuláře – cena se vypočítá automaticky podle vzdálenosti. Nebo nás kontaktujte přímo." },
]

export default function MezimestskaPage() {
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
                  Celá ČR a střední Evropa
                </div>
                <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.1 }}>
                  Mezinárodní a meziměstská<br />
                  <span style={{ color: "#F97316" }}>doprava</span>
                </h1>
                <p className="mb-8" style={{ color: "rgba(255,255,255,.75)", fontSize: "17px", lineHeight: 1.7, maxWidth: "480px" }}>
                  Komfortní přeprava mezi městy v České republice i do zahraničí. Pevné ceny, žádné příplatky, profesionální řidiči.
                </p>
                <a href="/#rezervace" className="inline-flex items-center gap-3 font-bold rounded-xl text-white"
                  style={{ background: "#F97316", padding: "14px 32px", fontSize: "17px", fontFamily: "Poppins, sans-serif", textDecoration: "none" }}>
                  Rezervovat přepravu →
                </a>
              </div>
              <div className="flex-shrink-0">
                <img src="/service-mezimestska.png" alt="Mezinárodní doprava" className="rounded-2xl shadow-2xl" style={{ maxWidth: "380px", width: "100%" }} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>Oblíbené trasy</div>
              <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>Ceny nejoblíbenějších tras</h2>
              <p className="text-gray-500">Všechny ceny jsou pevné a zahrnují veškeré poplatky. Cena pro jiné trasy se vypočítá automaticky.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ROUTES.map((route, i) => (
                <div key={i} className="rounded-xl p-5 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all">
                  <div className="text-xs text-gray-400 mb-1 font-medium">{route.km} · {route.time}</div>
                  <div className="font-bold text-gray-900 mb-3">{route.from} → {route.to}</div>
                  <div className="text-2xl font-black mb-3" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>od {route.price} Kč</div>
                  <a href="/#rezervace" className="block text-center py-2 rounded-lg text-sm font-bold text-white"
                    style={{ background: "#F97316", textDecoration: "none" }}>
                    Rezervovat
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl text-sm text-center" style={{ background: "#f8fafc", color: "#64748b" }}>
              Vaše trasa není v seznamu? Zadejte ji do <a href="/#rezervace" style={{ color: "#F97316", fontWeight: 700 }}>rezervačního formuláře</a> – cena se vypočítá okamžitě.
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>Výhody</div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>Proč cestovat s námi</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "🔒", title: "Fixní cena předem", desc: "Cena je dohodnutá předem a nemění se. Žádné příplatky za mýto, parkování nebo čekání." },
                { icon: "🚗", title: "Moderní vozidla", desc: "Komfortní sedany a minivany s klimatizací, Wi-Fi a dostatkem místa pro zavazadla." },
                { icon: "⏰", title: "Flexibilní časy", desc: "Přepravujeme 24 hodin denně, 7 dní v týdnu. Rezervujte kdykoli, i na poslední chvíli." },
                { icon: "🌍", title: "Celá střední Evropa", desc: "Jezdíme do Německa, Rakouska, Polska, Slovenska, Maďarska a dalších zemí." },
                { icon: "💳", title: "Platba kartou", desc: "Platba kartou online nebo hotově řidiči. Na vyžádání faktura na firmu." },
                { icon: "👤", title: "Profesionální řidiči", desc: "Zkušení, jazykově vybavení řidiči se znalostí tras a místních podmínek." },
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
              {FAQ_ITEMS.map((item, i) => (
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
            <h2 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Rezervujte meziměstskou přepravu</h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,.75)" }}>Pevná cena, komfortní vozidlo, spolehlivý řidič</p>
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
