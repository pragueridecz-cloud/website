import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import AirportMapDetail from "@/components/AirportMapDetail"
import Footer from "@/components/Footer"
import SectionHeading from "@/components/SectionHeading"

export const metadata: Metadata = {
  title: "Doprava na letiště Praha | naletištělevně.cz",
  description: "Transfer na/z letiště Václava Havla Praha od 750 Kč. Také Vídeň, Bratislava, Budapešť, Mnichov, Frankfurt. Pevná cena, řidič čeká u výstupu, sledování letu 24/7.",
  keywords: "doprava na letiště Praha, transfer letiště Václava Havla, taxi letiště Vídeň, transfer letiště Bratislava, přeprava letiště Mnichov, airport transfer Praha",
  openGraph: {
    title: "Doprava na letiště Praha a okolní letiště | naletištělevně.cz",
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
    price: "od 750 Kč",
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
    img: "/airport-brno.jpg",
    facts: ["210 km od Prahy", "Pravidelné linky Ryanair, Wizz Air"],
  },
  {
    code: "OSR",
    name: "Letiště Ostrava-Mošnov",
    city: "Ostrava",
    desc: "Letiště v srdci Slezska. Sezónní i pravidelné charterové lety do celé Evropy a Turecka. Dobré spojení s Polskem a Slovenskem.",
    price: "od 4 900 Kč",
    time: "3,5 hod z Prahy",
    img: "/airport-ostrava.jpg",
    facts: ["360 km od Prahy", "Charterové lety do Turecka, Řecka, Egypta"],
  },
]


export default function LetistniPreprava() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main>

        {/* HERO */}
        <div style={{ background: "#00205B", padding: "100px 24px 60px" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
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
                  Taxi na/z letiště Václava Havla Praha od 750 Kč — pevná cena, žádné příplatky za čekání ani zpoždění letu. Zajišťujeme také transfer na letiště Vídeň, Bratislava, Budapešť, Mnichov, Frankfurt a Drážďany. Řidič čeká s cedulkou v příletové hale, sleduje váš let v reálném čase a odveze vás z letiště Ruzyně přímo domů nebo do hotelu.
                </p>
              </div>
              <div className="hidden md:block" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
                <img src="/driver-sign.jpg" alt="Řidič s cedulkou čeká na zákazníka u výstupu z letiště"
                  style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>
        </div>

        {/* LETIŠTĚ V ČR */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeading label="Letiště v České republice" title="Česká letiště" subtitle="Přepravujeme na všechna letiště v České republice. Nejčastěji samozřejmě na Letiště Václava Havla Praha, ale také do Brna a Ostravy." />

            {/* PRG – full width */}
            {(() => {
              const prg = AIRPORTS_CZ[0];
              return (
                <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 flex-shrink-0">
                      <img src={prg.img} alt={prg.name} style={{ width: "100%", height: "280px", objectFit: "cover" }} />
                    </div>
                    <div className="flex-1 p-8">
                      <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                        <div>
                          <span className="text-xs font-mono font-bold px-2 py-1 rounded mr-2" style={{ background: "#00205B", color: "#fff" }}>{prg.code}</span>
                          <h3 className="text-2xl font-bold mt-2" style={{ fontFamily: "Poppins, sans-serif", color: "#00205B" }}>{prg.name}</h3>
                          <div className="text-gray-400 text-sm">{prg.city}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-black" style={{ fontFamily: "Poppins, sans-serif", color: "#F97316" }}>{prg.price}</div>
                          <div className="text-xs text-gray-400">⏱ {prg.time}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-5">{prg.desc}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        {prg.facts.map((fact) => (
                          <li key={fact} className="flex items-center gap-2 text-sm text-gray-600">
                            <span style={{ color: "#10b981", fontWeight: 700 }}>✓</span> {fact}
                          </li>
                        ))}
                      </ul>
                      <a href="/#rezervace" style={{ background: "#00205B", color: "#fff", padding: "11px 28px", borderRadius: "10px", fontWeight: 700, fontSize: "14px", textDecoration: "none", display: "inline-block" }}>
                        Rezervovat na {prg.code} →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* BRQ + OSR – side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {AIRPORTS_CZ.slice(1).map((airport) => (
                <div key={airport.code} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                  <img src={airport.img} alt={airport.name} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <span className="text-xs font-mono font-bold px-2 py-1 rounded mr-2" style={{ background: "#00205B", color: "#fff" }}>{airport.code}</span>
                        <h3 className="text-xl font-bold mt-2" style={{ fontFamily: "Poppins, sans-serif", color: "#00205B" }}>{airport.name}</h3>
                        <div className="text-gray-400 text-sm">{airport.city}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black" style={{ fontFamily: "Poppins, sans-serif", color: "#F97316" }}>{airport.price}</div>
                        <div className="text-xs text-gray-400">⏱ {airport.time}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{airport.desc}</p>
                    <ul className="space-y-1.5 mb-5">
                      {airport.facts.map((fact) => (
                        <li key={fact} className="flex items-center gap-2 text-sm text-gray-600">
                          <span style={{ color: "#10b981", fontWeight: 700 }}>✓</span> {fact}
                        </li>
                      ))}
                    </ul>
                    <a href="/#rezervace" style={{ background: "#00205B", color: "#fff", padding: "10px 20px", borderRadius: "10px", fontWeight: 700, fontSize: "13px", textDecoration: "none", display: "inline-block" }}>
                      Rezervovat na {airport.code} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERAKTIVNÍ MAPA LETIŠŤ */}
        <AirportMapDetail />

        {/* PROČ MY */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeading label="Proč si vybrat nás" title="Co dostanete s každou jízdou" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  img: "/flight-tracking.jpg",
                  imgPos: "65% 0%",
                  imgZoom: 1.3,
                  title: "Sledování letu v reálném čase",
                  desc: "Automaticky monitorujeme zpoždění vašeho letu. Řidič přijede přesně na čas – ani dříve, ani později. Nečekáte, neplatíte extra.",
                },
                {
                  img: "/driver-sign.jpg",
                  title: "Řidič s cedulkou u výstupu",
                  desc: "Po příletu vás váš řidič čeká přímo v příletové hale s cedulkou s vaším jménem. Žádné hledání, žádný stres po dlouhém letu.",
                },
                {
                  img: "/fixed-price-payment.jpg",
                  title: "Pevná cena bez příplatků",
                  desc: "Cena je dohodnutá předem a nemění se. Žádné příplatky za mýto, zpoždění, noční jízdu ani velká zavazadla.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div style={{ width: "100%", height: "200px", overflow: "hidden", position: "relative" }}>
                    <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: item.imgPos || "center", transform: item.imgZoom ? `scale(${item.imgZoom})` : undefined, transformOrigin: "center" }} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Poppins, sans-serif", color: "#00205B" }}>{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto px-4">
            <SectionHeading label="Časté dotazy" title="Máte otázky?" />
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
        <section style={{ background: "linear-gradient(135deg, #00205B 0%, #0d1f4a 100%)", padding: "80px 0", position: "relative", overflow: "hidden" }}>
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
