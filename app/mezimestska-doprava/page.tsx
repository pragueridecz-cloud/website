import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SectionHeading from "@/components/SectionHeading"
import { Lock, Car, Clock, Globe, CreditCard, UserCheck } from "lucide-react"

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

const VYHODY = [
  { Icon: Lock,      title: "Fixní cena předem",    desc: "Cena je dohodnutá předem a nemění se. Žádné příplatky za mýto, parkování nebo čekání.", img: "/service-fixni-cena.jpg" },
  { Icon: Car,       title: "Moderní vozidla",      desc: "Komfortní sedany a minivany s klimatizací, Wi-Fi a dostatkem místa pro zavazadla.", img: "/service-vozidla.jpg" },
  { Icon: Clock,     title: "Flexibilní časy",      desc: "Přepravujeme 24 hodin denně, 7 dní v týdnu. Rezervujte kdykoli, i na poslední chvíli.", img: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=600&q=80" },
  { Icon: Globe,     title: "Celá střední Evropa",  desc: "Jezdíme do Německa, Rakouska, Polska, Slovenska, Maďarska a dalších zemí.", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80" },
  { Icon: CreditCard,title: "Platba kartou",        desc: "Platba kartou online nebo hotově řidiči. Na vyžádání faktura na firmu.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" },
  { Icon: UserCheck, title: "Profesionální řidiči", desc: "Zkušení, jazykově vybavení řidiči se znalostí tras a místních podmínek.", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80" },
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

        {/* Hero */}
        <div style={{ background: "#00205B", padding: "100px 24px 60px" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "2px", background: "#F97316" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                Meziměstská doprava
              </span>
            </div>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.15, color: "#fff", fontSize: "clamp(32px,5vw,56px)", margin: "0 0 16px" }}>
              Meziměstské transfery<br />
              <span style={{ color: "#F97316" }}>po celé ČR i Evropě</span>
            </h1>
            <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "20px" }} />
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.7, maxWidth: "600px" }}>
              Pohodlná přeprava mezi městy bez přestupů. Pevná cena, klimatizované vozidlo, door-to-door.
            </p>
          </div>
        </div>

        {/* Trasy */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeading label="Oblíbené trasy" title="Ceny nejoblíbenějších tras" subtitle="Všechny ceny jsou pevné a zahrnují veškeré poplatky. Cena pro jiné trasy se vypočítá automaticky." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ROUTES.map((route, i) => (
                <div key={i} className="rounded-xl p-5 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all">
                  <div className="text-xs text-gray-400 mb-1 font-medium">{route.km} · {route.time}</div>
                  <div className="font-bold text-gray-900 mb-3">{route.from} → {route.to}</div>
                  <div className="text-2xl font-black mb-3" style={{ fontFamily: "Poppins, sans-serif", color: "#00205B" }}>od {route.price} Kč</div>
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

        {/* Výhody */}
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeading label="Výhody" title="Proč cestovat s námi" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VYHODY.map(({ Icon, title, desc, img }) => (
                <div key={title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div style={{ position: "relative", height: "160px" }}>
                    <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,32,91,0.35)" }} />
                    <div style={{ position: "absolute", bottom: "12px", left: "12px", width: "36px", height: "36px", borderRadius: "10px", background: "#F97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={18} color="#fff" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <SectionHeading label="FAQ" title="Časté dotazy" />
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

        {/* CTA */}
        <section className="py-16" style={{ background: "#00205B" }}>
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
