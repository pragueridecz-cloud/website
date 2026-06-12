"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const WHY_US = [
  { num: "01", text: "Pevná cena — žádná překvapení" },
  { num: "02", text: "Sledování letů v reálném čase" },
  { num: "03", text: "Dostupnost 24 hodin denně" },
  { num: "04", text: "Prověření profesionální řidiči" },
];


function TypewriterPrice() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const full = "již od 740,-";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= full.length) {
        setDisplayed(full.slice(0, i));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: "8px" }}>
      <span style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: "clamp(42px, 5vw, 68px)",
        fontWeight: 900,
        color: "#F97316",
        letterSpacing: "-1px",
        lineHeight: 1,
        display: "inline-block",
      }}>
        {displayed}
        {!done && (
          <span style={{
            display: "inline-block",
            width: "3px",
            height: "0.8em",
            background: "#F97316",
            marginLeft: "4px",
            verticalAlign: "middle",
            animation: "blink 0.7s step-end infinite",
          }} />
        )}
      </span>
      <style>{`@keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0 } }`}</style>
    </div>
  );
}

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCount, setOpenCount] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    WHY_US.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, i]);
      }, 600 + i * 350);
    });
  }, []);

  return (
    <section id="rezervace" className="px-4 pt-28 pb-0 md:pb-0" style={{ position:"relative", overflow:"hidden", background:"#0d1f4a" }}>
      {/* Praha fotka v pozadí */}
      <div style={{
        position:"absolute", inset:0, zIndex:0,
        backgroundImage:"url('/hero-prague.png')",
        backgroundSize:"160%",
        backgroundPosition:"60% 40%",
        opacity:0.8,
        mixBlendMode:"luminosity",
      }} />
      {/* Barevný overlay – navy + oranžový přechod jako západ slunce */}
      <div style={{
        position:"absolute", inset:0, zIndex:1,
        background:"linear-gradient(180deg, rgba(13,31,74,0.4) 0%, rgba(13,31,74,0.25) 40%, rgba(30,58,138,0.8) 100%)",
      }} />
      <div className="max-w-6xl mx-auto pb-56" style={{ position:"relative", zIndex:2 }}>

        {/* Desktop */}
        <div className="hidden md:flex items-start gap-12" style={{ paddingTop:"48px", paddingBottom:"40px" }}>
          <div className="flex-1" style={{ paddingTop: "0" }}>
            {/* Nadpis */}
            <h1 style={{ color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.1, fontSize: "clamp(32px,4vw,52px)", margin: "0 0 8px" }}>
              Levná přeprava
            </h1>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.1, fontSize: "clamp(32px,4vw,52px)", margin: "0 0 6px", color: "#F97316" }}>
              na letiště Praha
            </h1>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, lineHeight: 1.3, fontSize: "clamp(16px,2vw,22px)", margin: "0 0 28px", color: "rgba(255,255,255,.7)" }}>
              a transfery po celé ČR a střední Evropě
            </h2>
            {/* 4 body s čísly */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
              {WHY_US.map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  opacity: visibleItems.includes(i) ? 1 : 0,
                  transform: visibleItems.includes(i) ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 800, color: "#F97316", minWidth: "26px", opacity: .8 }}>{item.num}</span>
                  <div style={{ width: "1px", height: "20px", background: "rgba(249,115,22,.3)", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,.9)", fontSize: "18px", fontWeight: 500 }}>{item.text}</span>
                </div>
              ))}
            </div>
            <TypewriterPrice />
          </div>

          {/* Widget */}
          <div className="flex-shrink-0 w-full max-w-md">
            <iframe src="https://taxisaas-widget.vercel.app/widget.html" width="100%" height="680"
              frameBorder="0" title="Rezervační formulář" className="w-full block rounded-xl shadow-2xl"
              scrolling="no" style={{ background: "#1E3A8A" }} />
          </div>
        </div>

        {/* Mobil */}
        <div className="md:hidden flex flex-col">
          {!mobileOpen && (
            <>
              <h1 style={{ color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.1, fontSize: "clamp(30px,8vw,42px)", margin: "0 0 4px" }}>
                Levná přeprava
              </h1>
              <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.1, fontSize: "clamp(30px,8vw,42px)", margin: "0 0 20px", color: "#F97316" }}>
                na letiště Praha
              </h1>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                {WHY_US.map((item, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: "14px",
                    opacity: visibleItems.includes(i) ? 1 : 0,
                    transform: visibleItems.includes(i) ? "translateX(0)" : "translateX(-16px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                  }}>
                    <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "12px", fontWeight: 800, color: "#F97316", minWidth: "22px", opacity: .8 }}>{item.num}</span>
                    <div style={{ width: "1px", height: "18px", background: "rgba(249,115,22,.3)", flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,.9)", fontSize: "14px", fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => { setMobileOpen(true); setOpenCount(c => c + 1); }}
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#F97316", color: "#fff", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: 700, fontFamily: "Poppins, sans-serif", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 8px 32px rgba(249,115,22,.4)", alignSelf: "flex-start" }}>
                Rezervovat jízdu →
              </button>
            </>
          )}
          {mobileOpen && (
            <div className="w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 style={{ color: "#fff", fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 700, margin: 0 }}>Rezervovat jízdu</h2>
                <button onClick={() => setMobileOpen(false)}
                  style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,.7)", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: "8px", padding: "7px 14px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>
                  ← Zpět
                </button>
              </div>
              <iframe key={openCount} src="https://taxisaas-widget.vercel.app/widget.html"
                width="100%" height="680" frameBorder="0" title="Rezervační formulář"
                className="w-full block rounded-xl shadow-2xl" scrolling="no" style={{ background: "#1E3A8A" }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
