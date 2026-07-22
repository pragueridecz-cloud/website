import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SectionHeading from "@/components/SectionHeading"
import { Lock, Car, Clock, Globe, CreditCard, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Dálkové taxi a meziměstská doprava Praha | naletištělevně.cz",
  description: "Dálkové taxi z Prahy za pevnou cenu — Praha–Vídeň od 4 500 Kč, Praha–Berlín od 8 900 Kč, Praha–Bratislava od 3 200 Kč. Meziměstská doprava po celé ČR i Evropě, 24/7.",
  keywords: "meziměstská doprava, mezinárodní transfer, Praha Vídeň taxi, Praha Berlín taxi, Praha Brno taxi, přeprava do zahraničí, taxi Praha Mnichov",
  openGraph: {
    title: "Meziměstská a mezinárodní doprava | naletištělevně.cz",
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
  { from: "Praha", to: "Brno", price: "6 400", km: "227 km", time: "2,5 hod" },
  { from: "Praha", to: "Vídeň", price: "9 750", km: "356 km", time: "3,5 hod" },
  { from: "Praha", to: "Mnichov", price: "10 350", km: "378 km", time: "4 hod" },
  { from: "Praha", to: "Berlín", price: "9 650", km: "352 km", time: "4 hod" },
  { from: "Praha", to: "Drážďany", price: "4 600", km: "153 km", time: "1,5 hod" },
  { from: "Praha", to: "Varšava", price: "17 650", km: "660 km", time: "7 hod" },
  { from: "Praha", to: "Bratislava", price: "9 550", km: "349 km", time: "3,5 hod" },
  { from: "Praha", to: "Wroclaw", price: "7 800", km: "280 km", time: "3 hod" },
  { from: "Praha", to: "Plzeň", price: "3 100", km: "91 km", time: "1 hod" },
  { from: "Praha", to: "České Budějovice", price: "4 950", km: "168 km", time: "2 hod" },
  { from: "Praha", to: "Olomouc", price: "8 400", km: "303 km", time: "3 hod" },
  { from: "Praha", to: "Salzburg", price: "10 800", km: "396 km", time: "4,5 hod" },
]

const VYHODY = [
  { Icon: Lock,      title: "Fixní cena předem",    desc: "Cena je dohodnutá předem a nemění se. Žádné příplatky za mýto, parkování nebo čekání.", img: "/service-fixni-cena.jpg" },
  { Icon: Car,       title: "Moderní vozidla",      desc: "Komfortní sedany a minivany s klimatizací, Wi-Fi a dostatkem místa pro zavazadla.", img: "/service-vozidla.jpg" },
  { Icon: Clock,     title: "Flexibilní časy",      desc: "Přepravujeme 24 hodin denně, 7 dní v týdnu. Rezervujte kdykoli, i na poslední chvíli.", img: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=600&q=80" },
  { Icon: Globe,     title: "Celá střední Evropa",  desc: "Jezdíme do Německa, Rakouska, Polska, Slovenska, Maďarska a dalších zemí.", img: "/service-evropa.jpg" },
  { Icon: CreditCard,title: "Platba kartou",        desc: "Platba kartou online nebo hotově řidiči. Na vyžádání faktura na firmu.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" },
  { Icon: UserCheck, title: "Profesionální řidiči", desc: "Zkušení, jazykově vybavení řidiči se znalostí tras a místních podmínek.", img: "/service-ridici.jpg" },
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

        {/* Trasy - jen "vase trasa neni" box */}
        <section className="py-6 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="p-4 rounded-xl text-sm text-center" style={{ background: "#f8fafc", color: "#64748b" }}>
              Vaše trasa není v seznamu? Zadejte ji do <a href="/#rezervace" style={{ color: "#F97316", fontWeight: 700 }}>rezervačního formuláře</a> – cena se vypočítá okamžitě.
            </div>
          </div>
        </section>

        {/* Dálkové taxi */}
        <section className="py-16" style={{ background: "#fff" }}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "#00205B", marginBottom: "8px" }}>
              Dálkové taxi z Prahy
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, marginBottom: "40px", maxWidth: "680px" }}>
              Dálkový transfer z Prahy do jakéhokoli města v ČR nebo zahraničí — pevná cena dohodnutá předem, bez taxametru a bez překvapení. Dálkové taxi Praha zajišťujeme 24 hodin denně, 7 dní v týdnu, se sedany i minibusy pro skupiny.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { from: "Praha", to: "Vídeň", price: "9 750", km: "356 km" },
                { from: "Praha", to: "Berlín", price: "9 650", km: "352 km" },
                { from: "Praha", to: "Bratislava", price: "9 550", km: "349 km" },
                { from: "Praha", to: "Budapešť", price: "14 300", km: "525 km" },
                { from: "Praha", to: "Mnichov", price: "10 350", km: "378 km" },
                { from: "Praha", to: "Frankfurt", price: "14 750", km: "545 km" },
                { from: "Praha", to: "Drážďany", price: "4 600", km: "153 km" },
                { from: "Praha", to: "Karlovy Vary", price: "3 800", km: "130 km" },
                { from: "Praha", to: "Brno", price: "6 400", km: "227 km" },
              ].map((r) => (
                <div key={r.to} className="flex items-center justify-between rounded-xl p-4"
                  style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#00205B" }}>{r.from} → {r.to}</div>
                    <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "2px" }}>{r.km}</div>
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: 800, color: "#F97316" }}>od {r.price} Kč</div>
                </div>
              ))}
            </div>
            <p style={{ color: "#64748b", fontSize: "13px", marginTop: "16px" }}>
              * Ceny jsou orientační pro sedan (1–4 osoby). Minivan pro skupiny až 7 osob a přesná cena na vyžádání. Platba kartou online nebo hotově řidiči.
            </p>
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
