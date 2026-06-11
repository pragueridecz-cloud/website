import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Hodinový pronájem auta s řidičem Praha | Chauffeur service",
  description: "Pronajměte si auto s řidičem na hodiny nebo celý den. Prohlídky Prahy, business schůzky, nákupy, výlety. Od 699 Kč/hod. Sedan, minivan, VIP.",
  keywords: "pronájem auta s řidičem Praha, chauffeur service Praha, auto s šoférem Praha, hodinový transfer Praha, firemní řidič Praha, prohlídka Prahy s řidičem",
  openGraph: {
    title: "Hodinový pronájem auta s řidičem Praha | Od 699 Kč/hod",
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

export default function HodinPronajem() {
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
                  Chauffeur service · Praha
                </div>
                <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.1 }}>
                  Auto s řidičem<br />
                  <span style={{ color: "#F97316" }}>na hodiny</span>
                </h1>
                <p className="mb-8" style={{ color: "rgba(255,255,255,.75)", fontSize: "17px", lineHeight: 1.7, maxWidth: "480px" }}>
                  Prohlídka Prahy, firemní schůzky, nákupy nebo výlet za město. Pronajměte si komfortní vozidlo s profesionálním řidičem na libovolný čas.
                </p>
                <a href="/#rezervace" className="inline-flex items-center gap-3 font-bold rounded-xl text-white"
                  style={{ background: "#F97316", padding: "14px 32px", fontSize: "17px", fontFamily: "Poppins, sans-serif", textDecoration: "none" }}>
                  Rezervovat →
                </a>
              </div>
              <div className="flex-shrink-0">
                <img src="/service-hodinovy.png" alt="Hodinový pronájem auta s řidičem" className="rounded-2xl shadow-2xl" style={{ maxWidth: "380px", width: "100%" }} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(249,115,22,.1)", color: "#F97316", border: "1px solid rgba(249,115,22,.2)" }}>Ceník</div>
              <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>Ceny hodinového pronájmu</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Economy Sedan", price: "699", unit: "Kč/hod", min: "Min. 2 hodiny", cap: "1–4 osoby", features: ["Klimatizace", "Velký kufr", "Wi-Fi"] },
                { title: "Minivan / Kombi", price: "899", unit: "Kč/hod", min: "Min. 2 hodiny", cap: "1–7 osob", features: ["Klimatizace", "Velký kufr", "Wi-Fi", "Dětská sedačka"], highlight: true },
                { title: "VIP / Business", price: "1 299", unit: "Kč/hod", min: "Min. 3 hodiny", cap: "1–4 osoby", features: ["Prémiový interiér", "Voda v autě", "Wi-Fi", "Tichý provoz"] },
              ].map((p, i) => (
                <div key={i} className="rounded-2xl p-6 border-2" style={{ borderColor: p.highlight ? "#F97316" : "#e2e8f0", background: p.highlight ? "#fff7ed" : "#f8fafc" }}>
                  {p.highlight && <div className="text-xs font-bold mb-2" style={{ color: "#F97316" }}>NEJOBLÍBENĚJŠÍ</div>}
                  <h3 className="font-bold text-gray-900 mb-3">{p.title}</h3>
                  <div className="text-4xl font-black mb-1" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>{p.price} <span className="text-lg font-normal text-gray-500">{p.unit}</span></div>
                  <div className="text-xs text-gray-400 mb-4">{p.min} · {p.cap}</div>
                  <ul className="space-y-2 mb-6">
                    {p.features.map((f) => <li key={f} className="text-sm text-gray-600 flex items-center gap-2"><span style={{ color: "#10b981" }}>✓</span>{f}</li>)}
                  </ul>
                  <a href="/#rezervace" className="block text-center py-2.5 rounded-lg text-sm font-bold"
                    style={{ background: p.highlight ? "#F97316" : "#1E3A8A", color: "#fff", textDecoration: "none" }}>
                    Rezervovat
                  </a>
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
              <h2 className="text-3xl font-bold" style={{ fontFamily: "Poppins, sans-serif", color: "#1E3A8A" }}>Kdy se hodí auto s řidičem</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "🏛️", title: "Prohlídka Prahy", desc: "Navštivte Hradčany, Starý Město a Malou Stranu v klidu s průvodcem za volantem." },
                { icon: "💼", title: "Business schůzky", desc: "Přesuny mezi schůzkami bez parkování a stresu. Pracujte v autě." },
                { icon: "🛍️", title: "Nákupy", desc: "Velký nákup nebo výprodeje bez starostí se zavazadly a parkováním." },
                { icon: "🌿", title: "Výlet za město", desc: "Český ráj, Karlštejn, Kutná Hora. Bez kompromisů s jízdním řádem." },
                { icon: "💒", title: "Svatba", desc: "Exkluzivní přepravu pro novomanžele nebo hosty na velký den." },
                { icon: "🎭", title: "Kulturní akce", desc: "Opera, divadlo, konference. Dorazíte včas a v komfortu." },
                { icon: "✈️", title: "VIP transfer", desc: "Vyzvednutí z letiště s čekáním a přesuny po celý den." },
                { icon: "🏥", title: "Zdravotní přesuny", desc: "Pohodlné přepravení k lékaři nebo na rehabilitaci." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: "#1E3A8A" }}>
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
