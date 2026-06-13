import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import CoverageMap from "@/components/CoverageMap"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Doprava na letiště | Praha, Vídeň, Bratislava, Mnichov | Naletiště Levně",
  description: "Transfer na letiště Václava Havla Praha od 790 Kč. Také Vídeň, Bratislava, Budapešť, Mnichov, Frankfurt. Pevná cena, řidič čeká u výstupu, sledování letu 24/7.",
  keywords: "doprava na letiště Praha, transfer letiště Václava Havla, taxi letiště Vídeň, transfer letiště Bratislava, přeprava letiště Mnichov, airport transfer Praha",
  openGraph: {
    title: "Doprava na letiště Praha a okolní letiště | Naletiště Levně",
    description: "Transfer na letiště PRG, VIE, BTS, BUD, MUC, FRA. Pevná cena, sledování letu.",
    url: "https://www.naletistelevne.cz/letistni-preprava",
    images: [{ url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/PRG_Airport_Terminal_2.jpg/1280px-PRG_Airport_Terminal_2.jpg", width: 1280, height: 720 }],
  },
  alternates: { canonical: "https://www.naletistelevne.cz/letistni-preprava" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Letištní transfer Praha",
  "provider": { "@type": "LocalBusiness", "name": "Transfer Prague Car s.r.o.", "telephone": "+420606079179", "url": "https://www.naletistelevne.cz" },
  "areaServed": [
    { "@type": "Airport", "name": "Letiště Václava Havla Praha", "iataCode": "PRG" },
    { "@type": "Airport", "name": "Vídeňské mezinárodní letiště", "iataCode": "VIE" },
    { "@type": "Airport", "name": "Letisko M. R. Štefánika Bratislava", "iataCode": "BTS" },
  ],
  "offers": { "@type": "Offer", "priceCurrency": "CZK", "price": "790" },
}

const AIRPORTS_CZ = [
  {
    code: "PRG",
    name: "Letiště Václava Havla Praha",
    city: "Praha",
    desc: "Největší a nejrušnější letiště v ČR s více než 17 miliony cestujících ročně. Dvě terminály – T1 pro Schengen, T2 pro mimoevropské lety. Vzdáleno cca 17 km od centra Prahy.",
    price: "od 790 Kč",
    time: "20–35 min",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    facts: ["Terminál 1 – Schengen (většina evropských letů)", "Terminál 2 – mimo Schengen, zámořské lety", "17 km od Václavského náměstí", "Sledujeme zpoždění vašeho letu"],
  },
  {
    code: "BRQ",
    name: "Letiště Brno-Tuřany",
    city: "Brno",
    desc: "Druhé největší letiště v ČR. Pravidelné linky do Londýna, Amsterdamu, Frankfurtu a dalších evropských destinací. Ideální alternativa pro cestující z jižní Moravy.",
    price: "od 2 900 Kč",
    time: "2,5 hod z Prahy",
    img: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80",
    facts: ["210 km od Prahy", "Pravidelné linky Ryanair, Wizz Air", "Velké parkoviště, jednoduchá orientace", "Ideální pro cestovatele z Moravy"],
  },
  {
    code: "OSR",
    name: "Letiště Ostrava-Mošnov",
    city: "Ostrava",
    desc: "Letiště v srdci Slezska. Sezónní i pravidelné charterové lety do celé Evropy a Turecka. Dobré spojení s Polskem a Slovenskem.",
    price: "od 4 900 Kč",
    time: "3,5 hod z Prahy",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    facts: ["360 km od Prahy", "Charterové lety do Turecka, Řecka, Egypta", "Blízko polských hranic", "Kapacitní záchytné parkoviště"],
  },
]

const AIRPORTS_INTL = [
  {
    code: "VIE",
    name: "Vídeňské letiště",
    city: "Vídeň, Rakousko",
    desc: "Největší letiště ve středoevropském regionu s přímými lety do celého světa. Skvělá alternativa pro lety do Asie, Ameriky nebo Blízkého východu, které z Prahy neodjíždí přímo.",
    price: "od 4 500 Kč",
    time: "3,5 hod",
    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
    facts: ["330 km od Prahy", "Přímé lety do 200+ destinací", "Hub Emirates, Austrian Airlines", "Výborná alternativa pro asijské lety"],
  },
  {
    code: "BTS",
    name: "Letiště Bratislava (Štefánik)",
    city: "Bratislava, Slovensko",
    desc: "Blízké slovenské letiště, které používají zejména nízkonákladové aerolinie. Ryanair zde létá do mnoha destinací, které nejsou dostupné z Prahy. Vzdálenost jen 330 km.",
    price: "od 4 200 Kč",
    time: "3,5 hod",
    img: "https://images.unsplash.com/photo-1583170598970-cf6e74bb9f68?w=800&q=80",
    facts: ["330 km od Prahy", "Silná základna Ryanair", "Levnější lety do mnoha destinací", "Bez front u bezpečnostní kontroly"],
  },
  {
    code: "BUD",
    name: "Letiště Budapešť Liszt Ferenc",
    city: "Budapešť, Maďarsko",
    desc: "Jedno z nejrušnějších letišť ve střední Evropě s výborným spojením do celého světa. Wizz Air má v Budapešti silnou základnu s levnými lety do stovek destinací.",
    price: "od 6 900 Kč",
    time: "5 hod",
    img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80",
    facts: ["520 km od Prahy", "Největší základna Wizz Air", "Lety do Asie a Ameriky", "Moderní terminály"],
  },
  {
    code: "MUC",
    name: "Letiště Mnichov",
    city: "Mnichov, Německo",
    desc: "Druhé největší německé letiště a jeden z největších hubů v Evropě. Lufthansa zde operuje mezikontinentální lety do Ameriky, Asie a Austrálie s výbornými přestupy.",
    price: "od 7 900 Kč",
    time: "4 hod",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    facts: ["380 km od Prahy", "Hub Lufthansy a Star Alliance", "Dva terminály, výborné přestupy", "Moderní, komfortní letiště"],
  },
  {
    code: "FRA",
    name: "Letiště Frankfurt",
    city: "Frankfurt, Německo",
    desc: "Největší německé letiště a jeden z nejvytíženějších hubů v celé Evropě. Lufthansa a její partneři odtud létají do téměř každého koutu světa. Ideální pro transatlantické přestupy.",
    price: "od 8 900 Kč",
    time: "4,5 hod",
    img: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?w=800&q=80",
    facts: ["480 km od Prahy", "Největší hub v Evropě", "150+ airlines, 300+ destinací", "Přímé spojení na letiště vlakem"],
  },
  {
    code: "DRS",
    name: "Letiště Drážďany",
    city: "Drážďany, Německo",
    desc: "Malé a přehledné německé letiště pouhých 155 km od Prahy. Ideální pro rychlé lety do Německa a dalších evropských destinací bez přestupu v přeplněném Frankfurtu.",
    price: "od 3 900 Kč",
    time: "1,5 hod",
    img: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=800&q=80",
    facts: ["155 km od Prahy – nejbližší zahraniční letiště", "Bez front a stresu", "Lety Lufthansa, Eurowings", "Jednoduché parkování"],
  },
]

export default function LetistniPreprava() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main>

        {/* HERO */}
                {/* Hero nadpis */}
        <div style={{ background: "#1E3A8A", padding: "100px 24px 60px" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "2px", background: "#F97316" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                Letištní přeprava
              </span>
            </div>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.15, color: "#fff", fontSize: "clamp(32px,5vw,56px)", margin: "0 0 16px" }}>
              Transfer na letiště<br />
              <span style={{ color: "#F97316" }}>Praha a střední Evropa</span>
            </h1>
            <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "20px" }} />
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.7, maxWidth: "600px" }}>
              Přepravujeme na všechna hlavní letiště v dosahu 700 km. Pevná cena, sledování letu, řidič na místě.
            </p>
          </div>
        </div>

        {/* LETIŠTĚ V ČR */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>
                🇨🇿 Letiště v České republice
              </div>
              <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>
                Česká letiště
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl">
                Přepravujeme na všechna letiště v České republice. Nejčastěji samozřejmě na Letiště Václava Havla Praha, ale také do Brna a Ostravy.
              </p>
            </div>

            <div className="space-y-8">
              {AIRPORTS_CZ.map((airport, i) => (
                <div key={airport.code} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 flex-shrink-0">
                      <img src={airport.img} alt={airport.name}
                        style={{ width: "100%", height: "280px", objectFit: "cover" }}
  
                      />
                    </div>
                    <div className="flex-1 p-8">
                      <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                        <div>
                          <span className="text-xs font-mono font-bold px-2 py-1 rounded mr-2"
                            style={{ background: "#1E3A8A", color: "#fff" }}>{airport.code}</span>
                          <h3 className="text-2xl font-bold mt-2" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>
                            {airport.name}
                          </h3>
                          <div className="text-gray-400 text-sm">{airport.city}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-black" style={{ fontFamily: "Poppins, sans-serif", color: "#F97316" }}>{airport.price}</div>
                          <div className="text-xs text-gray-400">⏱ {airport.time}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-5">{airport.desc}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        {airport.facts.map((fact) => (
                          <li key={fact} className="flex items-center gap-2 text-sm text-gray-600">
                            <span style={{ color: "#10b981", fontWeight: 700 }}>✓</span> {fact}
                          </li>
                        ))}
                      </ul>
                      <a href="/#rezervace" style={{ background: "#1E3A8A", color: "#fff", padding: "11px 28px", borderRadius: "10px", fontWeight: 700, fontSize: "14px", textDecoration: "none", display: "inline-block" }}>
                        Rezervovat na {airport.code} →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLÍZKÁ ZAHRANIČNÍ LETIŠTĚ */}
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>
                🌍 Blízká zahraniční letiště
              </div>
              <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>
                Zahraniční letiště v dosahu
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl">
                Někdy se vyplatí letět z Vídně, Bratislavy nebo Mnichova. Přepravíme vás i tam – bez starostí, za pevnou cenu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {AIRPORTS_INTL.map((airport) => (
                <div key={airport.code} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img src={airport.img} alt={airport.name}
                      style={{ width: "100%", height: "200px", objectFit: "cover" }}

                    />
                    <div style={{ position: "absolute", top: "12px", left: "12px", background: "#1E3A8A", color: "#fff", fontFamily: "monospace", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", fontSize: "14px" }}>
                      {airport.code}
                    </div>
                    <div style={{ position: "absolute", top: "12px", right: "12px", background: "#F97316", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 800, padding: "4px 12px", borderRadius: "6px", fontSize: "14px" }}>
                      {airport.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>{airport.name}</h3>
                    <div className="text-sm text-gray-400 mb-3">📍 {airport.city} · ⏱ {airport.time} z Prahy</div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{airport.desc}</p>
                    <ul className="space-y-1.5 mb-5">
                      {airport.facts.map((fact) => (
                        <li key={fact} className="flex items-center gap-2 text-sm text-gray-600">
                          <span style={{ color: "#10b981", fontWeight: 700 }}>✓</span> {fact}
                        </li>
                      ))}
                    </ul>
                    <a href="/#rezervace" style={{ background: "#F97316", color: "#fff", padding: "10px 24px", borderRadius: "8px", fontWeight: 700, fontSize: "13px", textDecoration: "none", display: "inline-block" }}>
                      Rezervovat na {airport.code} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROČ MY */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>
                Proč si vybrat nás
              </div>
              <h2 className="text-4xl font-bold" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>
                Co dostanete s každou jízdou
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
                  title: "Sledování letu v reálném čase",
                  desc: "Automaticky monitorujeme zpoždění vašeho letu. Řidič přijede přesně na čas – ani dříve, ani později. Nečekáte, neplatíte extra.",
                },
                {
                  img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
                  title: "Řidič s cedulkou u výstupu",
                  desc: "Po příletu vás váš řidič čeká přímo v příletové hale s cedulkou s vaším jménem. Žádné hledání, žádný stres po dlouhém letu.",
                },
                {
                  img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
                  title: "Pevná cena bez příplatků",
                  desc: "Cena je dohodnutá předem a nemění se. Žádné příplatky za mýto, zpoždění, noční jízdu ani velká zavazadla.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <img src={item.img} alt={item.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mapa pokrytí */}
        <CoverageMap />

        {/* FAQ */}
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto px-4">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>
                Časté dotazy
              </div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>Máte otázky?</h2>
            </div>
            <div className="space-y-3">
              {[
                { q: "Přepravíte mě i na letiště ve Vídni nebo Mnichově?", a: "Ano, přepravujeme na všechna letiště v dosahu přibližně 700 km od Prahy. Vídeň, Bratislava, Budapešť, Mnichov, Frankfurt, Drážďany a další. Cenu dostanete ihned po zadání do rezervačního formuláře." },
                { q: "Jak funguje sledování zpoždění letu?", a: "Při rezervaci zadáte číslo letu. Náš systém automaticky sleduje reálný čas příletu a informuje řidiče. Pokud má váš let zpoždění, řidič dorazí pozdě – a vy neplatíte žádný příplatek za čekání." },
                { q: "Kde mě řidič vyzvedne po příletu?", a: "Řidič vás čeká přímo v příletové hale s cedulkou s vaším jménem, ihned za výstupem z celnice. Nemusíte nikam volat ani hledat." },
                { q: "Mohu platit kartou?", a: "Ano, platba kartou online při rezervaci nebo hotově řidiči. Na vyžádání vystavíme fakturu na firmu s DIČ." },
                { q: "Co když potřebuji převézt hodně zavazadel nebo lyže?", a: "Při rezervaci upřesněte počet zavazadel a speciální požadavky. Pro velká zavazadla, lyže nebo kočárky rezervujeme minivan s dostatkem místa." },
                { q: "Je možné rezervovat zpáteční cestu?", a: "Samozřejmě. V rezervačním formuláři jednoduše přidejte zpáteční cestu. Zpáteční jízdu je možné objednat i samostatně." },
              ].map((item, i) => (
                <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 list-none">
                    <span>{item.q}</span>
                    <span className="text-gray-400 text-2xl ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #0d1f4a 100%)", padding: "80px 0", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=60)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.1 }} />
          <div className="max-w-3xl mx-auto px-4 text-center" style={{ position: "relative" }}>
            <h2 className="text-white font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px,4vw,44px)" }}>
              Kam letíte?
            </h2>
            <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,.75)" }}>
              Zadejte odkud a na které letiště – cena se zobrazí okamžitě.
            </p>
            <a href="/#rezervace" style={{ background: "#F97316", color: "#fff", padding: "18px 48px", borderRadius: "14px", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "18px", textDecoration: "none", display: "inline-block", boxShadow: "0 8px 32px rgba(249,115,22,.4)" }}>
              Rezervovat transfer →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
