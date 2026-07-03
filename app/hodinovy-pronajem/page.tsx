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
  description: "Pronajměte si auto s řidičem na hodiny nebo celý den. Prohlídky Prahy, business schůzky, nákupy, výlety. Od 699 Kč/hod. Sedan, minivan, VIP.",
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
              Řidič k dispozici přesně tak dlouho, jak potřebujete. Ideální pro obchodní schůzky, výlety nebo VIP hosty.
            </p>
          </div>
        </div>

        {/* Ceník */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeading label="Ceník" title="Ceny hodinového pronájmu" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Economy Sedan", price: "699", unit: "Kč/hod", min: "Min. 2 hodiny", cap: "1–4 osoby", features: ["Klimatizace", "Velký kufr", "Wi-Fi"], img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80" },
                { title: "Minivan / Kombi", price: "899", unit: "Kč/hod", min: "Min. 2 hodiny", cap: "1–7 osob", features: ["Klimatizace", "Velký kufr", "Wi-Fi", "Dětská sedačka"], highlight: true, img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80" },
                { title: "VIP / Business", price: "1 299", unit: "Kč/hod", min: "Min. 3 hodiny", cap: "1–4 osoby", features: ["Prémiový interiér", "Voda v autě", "Wi-Fi", "Tichý provoz"], img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80" },
              ].map((p, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border-2 flex flex-col" style={{ borderColor: p.highlight ? "#F97316" : "#e2e8f0" }}>
                  <div style={{ position: "relative", height: "160px" }}>
                    <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    {p.highlight && (
                      <div style={{ position: "absolute", top: "10px", right: "10px", background: "#F97316", color: "#fff", fontSize: "10px", fontWeight: 700, padding: "4px 10px", borderRadius: "20px" }}>NEJOBLÍBENĚJŠÍ</div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1" style={{ background: p.highlight ? "#fff7ed" : "#f8fafc" }}>
                    <h3 className="font-bold text-gray-900 mb-3">{p.title}</h3>
                    <div className="text-4xl font-black mb-1" style={{ fontFamily: "Poppins, sans-serif", color: "#00205B" }}>{p.price} <span className="text-lg font-normal text-gray-500">{p.unit}</span></div>
                    <div className="text-xs text-gray-400 mb-4">{p.min} · {p.cap}</div>
                    <ul className="space-y-2 mb-6 flex-1">
                      {p.features.map((f) => <li key={f} className="text-sm text-gray-600 flex items-center gap-2"><span style={{ color: "#10b981" }}>✓</span>{f}</li>)}
                    </ul>
                    <a href="/#rezervace" className="block text-center py-2.5 rounded-lg text-sm font-bold"
                      style={{ background: p.highlight ? "#F97316" : "#00205B", color: "#fff", textDecoration: "none" }}>
                      Rezervovat
                    </a>
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
