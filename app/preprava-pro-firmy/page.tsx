import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SectionHeading from "@/components/SectionHeading"
import { FileText, BarChart2, UserCheck, Clock, Plane, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Firemní přeprava Praha | Transfer pro firmy | Naletiště Levně",
  description: "Firemní taxi a transfer Praha pro zaměstnance, klienty i obchodní partnery. Faktura na firmu, měsíční vyúčtování, řidiči ve formálním oblečení. Bez DPH na IČO.",
  keywords: "firemní přeprava Praha, taxi pro firmy Praha, firemní transfer Praha, přeprava zaměstnanců Praha, business travel Praha, faktura na firmu taxi",
  openGraph: {
    title: "Firemní přeprava Praha | Faktura na IČO | Naletiště Levně",
    description: "Transfer pro firmy – faktura na firmu, měsíční vyúčtování, profesionální řidiči.",
    url: "https://www.naletistelevne.cz/preprava-pro-firmy",
  },
  alternates: { canonical: "https://www.naletistelevne.cz/preprava-pro-firmy" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Firemní přeprava Praha",
  "description": "Profesionální taxi a transfer pro firmy. Faktura na IČO, měsíční vyúčtování.",
  "provider": { "@type": "LocalBusiness", "name": "Transfer Prague Car s.r.o.", "telephone": "+420606079179" },
}

const VYHODY = [
  { Icon: FileText,   title: "Faktura na IČO",          desc: "Každá jízda s daňovým dokladem. Neplátci DPH i plátci DPH.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" },
  { Icon: BarChart2,  title: "Měsíční vyúčtování",      desc: "Pro pravidelné zákazníky nabízíme měsíční vyúčtování a hromadné faktury.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  { Icon: UserCheck,  title: "Profesionální řidiči",     desc: "Řidiči ve formálním oblečení s chováním odpovídajícím firemnímu prostředí.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80" },
  { Icon: Clock,      title: "Přesnost a spolehlivost",  desc: "Víme, že v byznysu záleží na každé minutě. Přijedeme vždy včas.", img: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=600&q=80" },
  { Icon: Plane,      title: "Letišťní transfer",        desc: "Vyzvednutí a odvoz zaměstnanců a klientů na letiště. Sledování letu.", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" },
  { Icon: Phone,      title: "Dedikovaná linka",         desc: "Pro firemní zákazníky prioritní telefonická podpora 24/7.", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80" },
]

const UTILIZATION = [
  { title: "Přeprava zaměstnanců na letiště", desc: "Včasné odvezení na pracovní cesty s fakturou pro HR oddělení." },
  { title: "Vyzvednutí obchodních partnerů", desc: "Reprezentativní přivítání klientů přímo na letišti nebo nádraží." },
  { title: "Přesuny mezi schůzkami", desc: "Flexibilní doprava v průběhu celého dne bez starostí s parkováním." },
  { title: "Firemní akce a teambuildingové výjezdy", desc: "Přeprava celého týmu na firemní event nebo za hranice města." },
  { title: "Roadshow a konference", desc: "Logistika přepravy pro účastníky konferencí a roadshow po Praze." },
  { title: "VIP hosté a delegace", desc: "Prémiový servis pro zahraniční delegace nebo VIP hosty." },
]

export default function PrepravaPropFirmy() {
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
                Firemní přeprava
              </span>
            </div>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.15, color: "#fff", fontSize: "clamp(32px,5vw,56px)", margin: "0 0 16px" }}>
              Přeprava pro firmy<br />
              <span style={{ color: "#F97316" }}>a korporace</span>
            </h1>
            <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "20px" }} />
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.7, maxWidth: "600px" }}>
              Letiště, konference, firemní akce nebo hodinový pronájem. Faktura, přehled jízd, slevy pro stálé zákazníky.
            </p>
          </div>
        </div>

        {/* Výhody */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeading label="Výhody pro firmy" title="Proč nás volí firmy" />
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

        {/* Využití */}
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeading label="Využití" title="Kdy využít firemní přepravu" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {UTILIZATION.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 flex gap-4 items-start shadow-sm">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
                    style={{ background: "#00205B" }}>{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <SectionHeading label="Kontakt" title="Domluvme firemní spolupráci" center />
            <p className="text-gray-500 mb-8 leading-relaxed">
              Pro firmy s pravidelnou potřebou přepravy nabízíme výhodné podmínky, měsíční fakturu a dedikovanou podporu. Napište nám nebo zavolejte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+420606079179" className="inline-flex items-center justify-center gap-2 font-bold rounded-xl px-8 py-4"
                style={{ background: "#00205B", color: "#fff", fontFamily: "Poppins, sans-serif", textDecoration: "none" }}>
                <Phone size={18} /> +420 606 079 179
              </a>
              <a href="mailto:info@naletistelevne.cz" className="inline-flex items-center justify-center gap-2 font-bold rounded-xl px-8 py-4"
                style={{ background: "#F97316", color: "#fff", fontFamily: "Poppins, sans-serif", textDecoration: "none" }}>
                <FileText size={18} /> info@naletistelevne.cz
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
