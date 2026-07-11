'use client'

const cards = [
  { img: "/firmy-letiste-zamestnanci.jpg", title: "Přeprava zaměstnanců na letiště",  desc: "Včasné odvezení s fakturou pro HR oddělení" },
  { img: "/firmy-konference.jpg",          title: "Roadshow a konference",            desc: "Logistika přepravy po Praze i za hranice" },
  { img: "/service-firmy.png",             title: "Vyzvednutí obchodních partnerů",   desc: "Reprezentativní přivítání klientů na letišti" },
  { img: "/firmy-teambuilding.jpg",        title: "Firemní akce a teambuildingy",     desc: "Přeprava celého týmu na firemní event nebo výjezdní zasedání" },
  { img: "/service-vozidla.jpg",           title: "VIP hosté a delegace",             desc: "Prémiový servis pro zahraniční hosty" },
]

// Layout: big card center (row 1-2, col 2), 4 cards around it same size
const gridStyles = [
  { gridColumn: "1", gridRow: "1" },   // top-left
  { gridColumn: "3", gridRow: "1" },   // top-right
  { gridColumn: "1", gridRow: "2" },   // bottom-left
  { gridColumn: "2", gridRow: "1 / 3" }, // CENTER - tall
  { gridColumn: "3", gridRow: "2" },   // bottom-right
]

export default function FirmsUseCases() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "260px 260px", gap: "12px" }}>
      {[0,1,2,4,3].map((idx, pos) => (
        <PhotoCard key={idx} {...cards[idx]} gridStyle={[
          { gridColumn: "1", gridRow: "1" },
          { gridColumn: "3", gridRow: "1" },
          { gridColumn: "1", gridRow: "2" },
          { gridColumn: "3", gridRow: "2" },
          { gridColumn: "2", gridRow: "1 / 3" },
        ][pos]} />
      ))}
    </div>
  )
}

function PhotoCard({ img, title, desc, gridStyle }: { img: string; title: string; desc: string; gridStyle: any }) {
  return (
    <div style={{ ...gridStyle, borderRadius: "16px", overflow: "hidden", position: "relative", cursor: "pointer" }}
      onMouseEnter={e => { const el = e.currentTarget.querySelector("img") as HTMLImageElement; if (el) el.style.transform = "scale(1.06)" }}
      onMouseLeave={e => { const el = e.currentTarget.querySelector("img") as HTMLImageElement; if (el) el.style.transform = "scale(1)" }}>
      <img src={img} alt={title}
        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease", display: "block" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,32,91,.88) 0%, transparent 55%)" }} />
      <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
        <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(14px,1.4vw,20px)", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>{title}</div>
        <div style={{ fontSize: "clamp(11px,1vw,13px)", color: "rgba(255,255,255,.75)", lineHeight: 1.4 }}>{desc}</div>
      </div>
    </div>
  )
}

export default function FirmsUseCases() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "280px 220px", gap: "12px" }}>
      {cards.map((c, i) => (
        <PhotoCard key={i} {...c} gridStyle={[
          { gridColumn: "1", gridRow: "1" },
          { gridColumn: "2", gridRow: "1" },
          { gridColumn: "3", gridRow: "1 / 3" },
          { gridColumn: "1", gridRow: "2" },
          { gridColumn: "2", gridRow: "2" },
        ][i]} />
      ))}
    </div>
  )
}

function PhotoCard({ img, title, desc, gridStyle }: { img: string; title: string; desc: string; gridStyle: any }) {
  return (
    <div style={{ ...gridStyle, borderRadius: "16px", overflow: "hidden", position: "relative", cursor: "pointer" }}
      onMouseEnter={e => { const el = e.currentTarget.querySelector("img") as HTMLImageElement; if (el) el.style.transform = "scale(1.06)" }}
      onMouseLeave={e => { const el = e.currentTarget.querySelector("img") as HTMLImageElement; if (el) el.style.transform = "scale(1)" }}>
      <img src={img} alt={title}
        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease", display: "block" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,32,91,.88) 0%, transparent 55%)" }} />
      <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
        <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(14px,1.4vw,20px)", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>{title}</div>
        <div style={{ fontSize: "clamp(11px,1vw,13px)", color: "rgba(255,255,255,.75)", lineHeight: 1.4 }}>{desc}</div>
      </div>
    </div>
  )
}
