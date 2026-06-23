"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: "ti-device-laptop",
    title: "Rezervujte online",
    desc: "Zadejte odkud, kam a kdy — letiště, hotel, nebo přímo domů. Cena se zobrazí okamžitě, pevná a bez skrytých poplatků.",
    detail: "Platba kartou online se slevou 10 %, nebo hotově řidiči.",
  },
  {
    icon: "ti-plane",
    title: "Sledujeme váš let",
    desc: "Systém hlídá zpoždění v reálném čase a automaticky upraví čas příjezdu řidiče.",
    detail: "Bez příplatků za zpoždění. Bez telefonování.",
  },
  {
    icon: "ti-user-check",
    title: "Řidič čeká na místě",
    desc: "Přesné vyzvednutí na dohodnutém místě — u letišť v příletové hale, jinak přímo před vašimi dveřmi.",
    detail: "Pomoc se zavazadly, klimatizované auto, Wi-Fi.",
  },
  {
    icon: "ti-armchair",
    title: "Pohodlná jízda",
    desc: "Dovezeme vás přesně tam, kam potřebujete. Čistá auta, profesionální řidiči.",
    detail: "Voda zdarma, tiché prostředí, faktura na vyžádání.",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(-1);
  const [lineWidth, setLineWidth] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Animuj linku a kroky postupně
          let w = 0;
          const lineInterval = setInterval(() => {
            w += 2;
            setLineWidth(Math.min(w, 100));
            if (w >= 100) clearInterval(lineInterval);
          }, 12);
          // Aktivuj kroky s odstupem
          steps.forEach((_, i) => {
            setTimeout(() => setActive(i), i * 280 + 200);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="jak-to-funguje" ref={sectionRef} style={{ background: "#f8fafc", padding: "80px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Nadpis */}
        <div style={{ marginBottom: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "32px", height: "2px", background: "#F97316" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase" as const, letterSpacing: "1.5px" }}>
              Jak to funguje
            </span>
          </div>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,44px)", color: "#0f172a", margin: "0 0 12px", lineHeight: 1.15 }}>
            Od rezervace k cíli<br />
            <span style={{ color: "#F97316" }}>ve 4 krocích</span>
          </h2>
          <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px" }} />
        </div>

        {/* Timeline desktop */}
        <div className="hidden md:block">
          {/* Linka */}
          <div style={{ position: "relative", marginBottom: "0" }}>
            <div style={{ position: "absolute", top: "28px", left: "12.5%", right: "12.5%", height: "2px", background: "#e2e8f0", zIndex: 0 }} />
            <div style={{ position: "absolute", top: "28px", left: "12.5%", height: "2px", background: "#F97316", zIndex: 1, width: `${lineWidth}%`, maxWidth: "75%", transition: "width 0.05s linear", borderRadius: "1px" }} />

            {/* Kroky */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", position: "relative", zIndex: 2 }}>
              {steps.map((step, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 16px" }}>
                  {/* Ikona kruh */}
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "50%",
                    background: active >= i ? "#00205B" : "#fff",
                    border: `2px solid ${active >= i ? "#00205B" : "#e2e8f0"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "20px", flexShrink: 0,
                    transition: "background 0.4s ease, border-color 0.4s ease",
                    boxShadow: active >= i ? "0 0 0 6px rgba(30,58,138,0.08)" : "none",
                  }}>
                    <i className={`ti ${step.icon}`} style={{
                      fontSize: "22px",
                      color: active >= i ? "#fff" : "#94a3b8",
                      transition: "color 0.4s ease",
                    }} aria-hidden="true" />
                  </div>

                  {/* Číslo */}
                  <div style={{
                    fontSize: "11px", fontWeight: 800, color: active >= i ? "#F97316" : "#cbd5e1",
                    letterSpacing: "1px", marginBottom: "8px",
                    transition: "color 0.4s ease",
                  }}>0{i + 1}</div>

                  {/* Text */}
                  <h3 style={{
                    fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "16px",
                    color: active >= i ? "#00205B" : "#94a3b8",
                    textAlign: "center", marginBottom: "8px",
                    transition: "color 0.4s ease",
                  }}>{step.title}</h3>
                  <p style={{
                    fontSize: "13px", color: active >= i ? "#475569" : "#cbd5e1",
                    textAlign: "center", lineHeight: 1.6, marginBottom: "8px",
                    transition: "color 0.4s ease",
                  }}>{step.desc}</p>
                  <p style={{
                    fontSize: "12px", color: active >= i ? "#F97316" : "#e2e8f0",
                    textAlign: "center", lineHeight: 1.5, fontStyle: "italic",
                    transition: "color 0.4s ease",
                    opacity: active >= i ? 1 : 0,
                  }}>{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobil – vertikální timeline */}
        <div className="md:hidden" style={{ position: "relative", paddingLeft: "32px", borderLeft: "2px solid #e2e8f0" }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              position: "relative", marginBottom: "32px",
              opacity: active >= i ? 1 : 0.3,
              transform: active >= i ? "translateX(0)" : "translateX(-8px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}>
              {/* Dot na lince */}
              <div style={{
                position: "absolute", left: "-43px", top: "4px",
                width: "20px", height: "20px", borderRadius: "50%",
                background: active >= i ? "#00205B" : "#e2e8f0",
                border: "3px solid #f8fafc",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.4s ease",
              }}>
                <i className={`ti ${step.icon}`} style={{ fontSize: "10px", color: active >= i ? "#fff" : "#94a3b8" }} aria-hidden="true" />
              </div>
              <div style={{ fontSize: "10px", fontWeight: 800, color: "#F97316", letterSpacing: "1px", marginBottom: "4px" }}>0{i + 1}</div>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "16px", color: "#00205B", marginBottom: "6px" }}>{step.title}</h3>
              <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.6, marginBottom: "4px" }}>{step.desc}</p>
              <p style={{ fontSize: "12px", color: "#F97316", fontStyle: "italic" }}>{step.detail}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <a href="/#rezervace" style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "#00205B", color: "#fff", textDecoration: "none",
            padding: "14px 32px", borderRadius: "12px",
            fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "15px",
            boxShadow: "0 4px 16px rgba(30,58,138,0.2)",
          }}>
            Rezervovat přepravu
            <i className="ti ti-arrow-right" style={{ fontSize: "16px" }} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
