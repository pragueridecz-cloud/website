import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SectionHeading from "@/components/SectionHeading"
import {
  Landmark, Briefcase, ShoppingBag, TreePine,
  Heart, Music, Plane, Activity, DollarSign,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Hodinový pronájem auta s řidičem Praha | naletištělevně.cz",
  description: "Auto s řidičem Praha od 699 Kč/hod — chauffeur service, VIP přeprava, pronájem řidiče na hodiny nebo celý den. Business schůzky, svatby, výlety za město. Sedan i minivan.",
  keywords: "pronájem auta s řidičem Praha, chauffeur service Praha, auto s šoférem Praha, hodinový transfer Praha, firemní řidič Praha, prohlídka Prahy s řidičem",
  openGraph: {
    title: "Hodinový pronájem auta s řidičem Praha | Od 699 Kč/hod | naletištělevně.cz",
    description: "Auto s řidičem na celý den nebo pár hodin. Business, turistika, nákupy.",
    url: "https://www.naletistelevne.cz/hodinovy-pronajem",
  },
  alternates: { canonical: "https://www.naletistelevne.cz/hodinovy-pronajem" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hodinový pronájem auta s řidičem Praha",
  "description": "Pronájem vozidla s profesionálním řidičem na hodiny nebo celý den.",
  "provider": { "@type": "LocalBusiness", "name": "Transfer Prague Car s.r.o.", "telephone": "+420606079179" },
  "offers": { "@type": "Offer", "priceCurrency": "CZK", "price": "699" },
}

const USES = [
  { Icon: Landmark,    title: "Prohlídka Prahy",    desc: "Navštivte Hradčany, Starý Město a Malou Stranu v klidu s průvodcem za volantem." },
  { Icon: Briefcase,   title: "Business schůzky",   desc: "Přesuny mezi schůzkami bez parkování a stresu. Pracujte v autě." },
  { Icon: ShoppingBag, title: "Nákupy",              desc: "Velký nákup nebo výprodeje bez starostí se zavazadly a parkováním." },
  { Icon: TreePine,    title: "Výlet za město",      desc: "Český ráj, Karlštejn, Kutná Hora. Bez kompromisů s jízdním řádem." },
  { Icon: Heart,       title: "Svatba",              desc: "Exkluzivní přepravu pro novomanžele nebo hosty na velký den." },
  { Icon: Music,       title: "Kulturní akce",       desc: "Opera, divadlo, konference. Dorazíte včas a v komfortu." },
  { Icon: Plane,       title: "VIP transfer",        desc: "Vyzvednutí z letiště s čekáním a přesuny po celý den." },
  { Icon: Activity,    title: "Zdravotní přesuny",   desc: "Pohodlné přepravení k lékaři nebo na rehabilitaci." },
]

export default function HodinPronajem() {
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
                Hodinový pronájem
              </span>
            </div>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.15, color: "#fff", fontSize: "clamp(32px,5vw,56px)", margin: "0 0 16px" }}>
              Auto s řidičem<br />
              <span style={{ color: "#F97316" }}>na hodiny nebo celý den</span>
            </h1>
            <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "20px" }} />
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.7, maxWidth: "600px" }}>
              Pronájem auta s řidičem Praha od 699 Kč/hod — chauffeur service pro business i soukromé účely. Ideální pro obchodní schůzky, VIP přepravu, prohlídky Prahy, nákupy nebo výlety za město. Sedany i minibusy, k dispozici na hodiny nebo celý den. Řidič čeká pouze na vás — žádné sdílené jízdy, žádný stres s parkováním.
            </p>
          </div>
        </div>

        {/* Ceník */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeading label="Ceník" title="Ceny hodinového pronájmu" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Sedan Economy", model: "VW Passat a podobný", price: "699 Kč/hod", from: "od 790 Kč / jízda", cap: "1–4 osoby", luggage: 3, min: "Min. 2 hodiny", features: ["Klimatizace", "Velký kufr", "Wi-Fi"], img: "/cars/sedan-economy.jpg", tag: null },
                { title: "Minivan Economy", model: "Ford Tourneo Custom a podobný", price: "899 Kč/hod", from: "od 990 Kč / jízda", cap: "1–7 osob", luggage: 6, min: "Min. 2 hodiny", features: ["Klimatizace", "Velký kufr", "Wi-Fi", "Dětská sedačka"], img: "/cars/minivan-economy.jpg", tag: "Nejoblíbenější" },
                { title: "Sedan Executive", model: "Mercedes-Benz C a podobný", price: "1 199 Kč/hod", from: "od 1 290 Kč / jízda", cap: "1–4 osoby", luggage: 3, min: "Min. 3 hodiny", features: ["Prémiový interiér", "Voda v autě", "Wi-Fi", "Tichý provoz"], img: "/cars/sedan-executive.jpg", tag: null },
              ].map((p, i) => (
                <div key={i} className="relative bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                  {p.tag && (
                    <div className="absolute top-3 right-3 bg-[#F97316] text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                      {p.tag}
                    </div>
                  )}
                  <div style={{ height: "176px", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", borderBottom: "1px solid #f1f5f9" }}>
                    <img src={p.img} alt={p.title} style={{ maxHeight: "144px", maxWidth: "100%", objectFit: "contain", display: "block" }} />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-[#00205B] text-base mb-0.5">{p.title}</h3>
                    <p className="text-xs text-gray-400 mb-2">{p.model}</p>
                    <div className="flex gap-4 mb-3">
                      <span className="text-xs text-gray-500">👤 {p.cap}</span>
                      <span className="text-xs text-gray-500">🧳 {p.luggage} kufry</span>
                    </div>
                    <ul className="space-y-1 mb-4 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="text-xs text-gray-500 flex items-center gap-1.5">
                          <span className="text-green-500 font-bold">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-gray-100 pt-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-lg font-black text-[#00205B]">{p.price}</span>
                        <span className="text-xs text-gray-400">{p.min}</span>
                      </div>
                      <div className="text-xs text-gray-400 mb-3">{p.from}</div>
                      <a href="/#rezervace" className="block text-center text-xs font-bold px-3 py-2 rounded-lg text-white"
                        style={{ background: "#F97316", textDecoration: "none" }}>
                        Rezervovat
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Využití */}
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeading label="Využití" title="Kdy se hodí auto s řidičem" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {USES.map(({ Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-5 shadow-sm text-center">
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#FFF7ED", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                    <Icon size={20} color="#F97316" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16" style={{ background: "#00205B" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Pronajměte si auto s řidičem</h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,.75)" }}>Flexibilní, komfortní, bez starostí</p>
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
