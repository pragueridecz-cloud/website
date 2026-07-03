import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import FirmsPerks from "@/components/FirmsPerks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Firemní přeprava Praha | naletištělevně.cz",
  description: "Firemní taxi Praha na fakturu s DPH. Přeprava zaměstnanců na letiště, korporátní transfery, VIP přeprava pro delegace. Business taxi Praha — pevná cena, měsíční fakturace, dedikovaná linka.",
};


export default function PrepravaPropFirmy() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg, #00205B 0%, #0a3a8a 100%)", padding: "80px 20px 60px" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: "32px", height: "2px", background: "#F97316", flexShrink: 0 }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase" as const, letterSpacing: "1.5px" }}>
                Pro firmy a korporace
              </span>
            </div>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.15, color: "#fff", fontSize: "clamp(32px,5vw,56px)", margin: "0 0 20px" }}>
              Firemní doprava<br />
              <span style={{ color: "#F97316" }}>na každou příležitost</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.7, maxWidth: "600px", marginBottom: "36px" }}>
              Firemní taxi Praha na fakturu s DPH dokladem ke každé jízdě. Zajišťujeme přepravu zaměstnanců na letiště, vyzvednutí obchodních partnerů, korporátní transfery i VIP přepravu pro delegace. Business taxi Praha s pevnou cenou, měsíční fakturací a dedikovanou linkou pro firemní zákazníky. Uzavřete firemní smlouvu a mějte dopravu pod kontrolou.
            </p>
            <a href="mailto:info@naletistelevne.cz?subject=Firemní spolupráce"
              style={{ display: "inline-block", background: "#F97316", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "15px", padding: "14px 32px", borderRadius: "12px", textDecoration: "none" }}>
              Domluvit firemní spolupráci →
            </a>
          </div>
        </section>

        {/* Výhody */}
        <section style={{ background: "#fff", padding: "64px 20px" }}>
          <div className="max-w-6xl mx-auto">
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "#00205B", marginBottom: "8px" }}>
              Proč firemní účet?
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", marginBottom: "48px" }}>Výhody, které oceníte při pravidelné firemní přepravě.</p>
            <FirmsPerks />
          </div>
        </section>

        {/* Kdy nás využít */}
        <section style={{ background: "#f8fafc", padding: "64px 20px" }}>
          <div className="max-w-6xl mx-auto">
            <div style={{ marginBottom: "48px" }}>
              <p style={{ fontSize: "13px", color: "#94a3b8", textTransform: "uppercase" as const, letterSpacing: "2px", marginBottom: "8px" }}>Kdy nás využít</p>
              <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", color: "#00205B", lineHeight: 1.1 }}>
                Přeprava pro<br />
                <span style={{ color: "#F97316" }}>každou situaci</span>
              </h2>
            </div>

            {/* BA-style masonry grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "280px 220px", gap: "12px" }}>

              {/* Velká karta vlevo nahoře */}
              <div style={{ gridColumn: "1", gridRow: "1", borderRadius: "16px", overflow: "hidden", position: "relative", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.querySelector("img") as HTMLImageElement).style.transform = "scale(1.05)"}
                onMouseLeave={e => (e.currentTarget.querySelector("img") as HTMLImageElement).style.transform = "scale(1)"}>
                <img src="/service-ridici.jpg" alt="Přeprava zaměstnanců na letiště"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,32,91,.85) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>Přeprava zaměstnanců na letiště</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,.7)" }}>Včasné odvezení s fakturou pro HR oddělení</div>
                </div>
              </div>

              {/* Střední karta nahoře uprostřed */}
              <div style={{ gridColumn: "2", gridRow: "1", borderRadius: "16px", overflow: "hidden", position: "relative", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.querySelector("img") as HTMLImageElement).style.transform = "scale(1.05)"}
                onMouseLeave={e => (e.currentTarget.querySelector("img") as HTMLImageElement).style.transform = "scale(1)"}>
                <img src="/service-firmy.png" alt="Vyzvednutí obchodních partnerů"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,32,91,.85) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>Vyzvednutí obchodních partnerů</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,.7)" }}>Reprezentativní přivítání klientů na letišti</div>
                </div>
              </div>

              {/* Velká karta vpravo — přes 2 řádky */}
              <div style={{ gridColumn: "3", gridRow: "1 / 3", borderRadius: "16px", overflow: "hidden", position: "relative", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.querySelector("img") as HTMLImageElement).style.transform = "scale(1.05)"}
                onMouseLeave={e => (e.currentTarget.querySelector("img") as HTMLImageElement).style.transform = "scale(1)"}>
                <img src="/service-hodinovy.jpg" alt="Hodinový pronájem a firemní akce"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,32,91,.9) 0%, transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px" }}>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>Firemní akce a teambuildingy</div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,.75)", lineHeight: 1.5 }}>Přeprava celého týmu na firemní event nebo výjezdní zasedání</div>
                </div>
              </div>

              {/* Karta dole vlevo */}
              <div style={{ gridColumn: "1", gridRow: "2", borderRadius: "16px", overflow: "hidden", position: "relative", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.querySelector("img") as HTMLImageElement).style.transform = "scale(1.05)"}
                onMouseLeave={e => (e.currentTarget.querySelector("img") as HTMLImageElement).style.transform = "scale(1)"}>
                <img src="/service-mezimestska.png" alt="Roadshow a konference"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,32,91,.85) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px" }}>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "2px" }}>Roadshow a konference</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,.7)" }}>Logistika přepravy po Praze i za hranice</div>
                </div>
              </div>

              {/* Karta dole uprostřed */}
              <div style={{ gridColumn: "2", gridRow: "2", borderRadius: "16px", overflow: "hidden", position: "relative", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.querySelector("img") as HTMLImageElement).style.transform = "scale(1.05)"}
                onMouseLeave={e => (e.currentTarget.querySelector("img") as HTMLImageElement).style.transform = "scale(1)"}>
                <img src="/service-vozidla.jpg" alt="VIP hosté a delegace"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,32,91,.85) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px" }}>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "2px" }}>VIP hosté a delegace</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,.7)" }}>Prémiový servis pro zahraniční hosty</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Partneři */}
        <section style={{ background: "#00205B", padding: "48px 20px" }}>
          <div className="max-w-6xl mx-auto text-center">
            <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase" as const, letterSpacing: "2px", marginBottom: "24px" }}>
              Nám důvěřují
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[{ name: "Česká televize", logo: "/partner-ct.png" }, { name: "Blažek", logo: "/partner-blazek.png" }].map((p) => (
                <div key={p.name} className="flex items-center justify-center rounded-xl px-7 py-3"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", minWidth: "130px" }}>
                  <img src={p.logo} alt={p.name}
                    style={{ maxHeight: "64px", maxWidth: "160px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                </div>
              ))}
              <div className="flex items-center justify-center rounded-xl px-7 py-3"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", minWidth: "130px" }}>
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", fontWeight: 600 }}>a mnoho dalších…</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#fff", padding: "64px 20px", textAlign: "center" }}>
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "#00205B", marginBottom: "12px" }}>
              Připraveni začít?
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, marginBottom: "32px" }}>
              Ozvěte se nám a připravíme nabídku na míru vaší firmě.
            </p>
            <a href="mailto:info@naletistelevne.cz?subject=Firemní spolupráce"
              style={{ display: "inline-block", background: "#F97316", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 40px", borderRadius: "12px", textDecoration: "none", marginRight: "12px" }}>
              Napsat nám →
            </a>
            <a href="tel:+420606079179"
              style={{ display: "inline-block", background: "#f1f5f9", color: "#00205B", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 40px", borderRadius: "12px", textDecoration: "none" }}>
              +420 606 079 179
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
