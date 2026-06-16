"use client";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const WHY_US = [
  { num: "01", text: "Pevná cena — žádná překvapení" },
  { num: "02", text: "Sledování letů v reálném čase" },
  { num: "03", text: "Dostupnost 24 hodin denně" },
  { num: "04", text: "Prověření profesionální řidiči" },
];

const NAVBAR_H = 98; // px

function PriceTag() {
  return (
    <div style={{ marginTop: "16px" }}>
      <svg width="280" height="80" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
        <filter id="ptsh">
          <feDropShadow dx="0" dy="3" stdDeviation="8" floodColor="rgba(0,0,0,0.35)"/>
        </filter>
        <path d="M 12 0 L 252 0 Q 280 0 280 25 L 280 32 Q 290 40 280 48 L 280 55 Q 280 80 252 80 L 12 80 Q 0 80 0 68 L 0 12 Q 0 0 12 0 Z"
              fill="#F97316" filter="url(#ptsh)"/>
        <circle cx="265" cy="40" r="8" fill="#1E3A8A"/>
        <circle cx="265" cy="40" r="5" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
        <text x="20" y="47" fontFamily="Poppins,sans-serif" fontSize="13" fontWeight="500" fill="rgba(255,255,255,0.75)">již od</text>
        <text x="68" y="57" fontFamily="Poppins,sans-serif" fontSize="50" fontWeight="900" fill="#fff" letterSpacing="-2">740 Kč</text>
      </svg>
    </div>
  );
}

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCount, setOpenCount] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [widgetStep, setWidgetStep] = useState(1);
  const [widgetH, setWidgetH] = useState(680);
  const ghostRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    WHY_US.forEach((_, i) => {
      setTimeout(() => setVisibleItems(prev => [...prev, i]), 600 + i * 350);
    });
  }, []);

  // Step 1: fixed position tracking ghost div; hide when ghost scrolls out of viewport
  // Dynamic props (top/left/opacity) go ONLY to direct DOM — never in React state,
  // so nll-height re-renders cannot reset them.
  useEffect(() => {
    if (widgetStep > 1) return;
    const el = overlayRef.current;
    const ghost = ghostRef.current;
    if (!el || !ghost) return;

    // Static styles only — no top/left/opacity here
    el.style.cssText = `
      position: fixed;
      z-index: 40;
      border-radius: 12px;
      box-shadow: 0 25px 60px rgba(0,0,0,0.3);
      overflow-y: hidden;
      display: block;
      background: transparent;
      pointer-events: auto;
    `;

    function track() {
      if (widgetStepRef.current > 1) return; // step 2+ owns positioning
      const r = ghost!.getBoundingClientRect();
      const visible = r.bottom > 0 && r.top < window.innerHeight;
      el!.style.opacity = visible ? "1" : "0";
      el!.style.pointerEvents = visible ? "auto" : "none";
      el!.style.top = r.top + "px";
      el!.style.left = r.left + "px";
      el!.style.width = r.width + "px";
      el!.style.height = r.height + "px";
    }

    track();
    window.addEventListener("scroll", track, { passive: true });
    window.addEventListener("resize", track, { passive: true });
    return () => {
      window.removeEventListener("scroll", track);
      window.removeEventListener("resize", track);
    };
  }, [widgetStep, mounted]);

  // Step 2+: position:fixed via JSX overlayStyle — only update width on resize
  useEffect(() => {
    if (widgetStep <= 1) return;
    const el = overlayRef.current;
    if (!el) return;
    function updateWidth() {
      if (el) el.style.width = Math.min(1200, window.innerWidth - 80) + "px";
    }
    window.addEventListener("resize", updateWidth, { passive: true });
    return () => window.removeEventListener("resize", updateWidth);
  }, [widgetStep]);

  const widgetStepRef = useRef(1);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      // Step change
      if (e.data?.type === "nll-step") {
        const s = e.data.step as number;
        widgetStepRef.current = s;
        setWidgetStep(s);
        if (e.data.height) setWidgetH(e.data.height + 32);
        if (s > 1) window.scrollTo({ top: 0, behavior: "smooth" });
      }
      // Height update — keep iframe sized to full content when overlay is open
      if (e.data?.type === "nll-height" && e.data?.height) {
        if (widgetStepRef.current > 1) {
          setWidgetH(e.data.height + 32);
        }
      }
      // Scroll forwarded from inside the iframe (wheel events don't propagate natively)
      if (e.data?.type === "nll-wheel") {
        const delta = e.data.delta as number;
        const el = overlayRef.current;
        if (!el) { window.scrollBy({ top: delta }); return; }
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
        const atTop = el.scrollTop <= 0;
        if ((delta > 0 && !atBottom) || (delta < 0 && !atTop)) {
          el.scrollTop += delta;
        } else {
          window.scrollBy({ top: delta });
        }
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const expanded = widgetStep > 1;

  // Step 1: NO inline styles from React — track() owns all positioning via direct DOM.
  // Step 2: React manages fixed positioning (constant values, safe to re-render).
  const overlayStyle: React.CSSProperties = expanded ? {
    position: "fixed",
    top: NAVBAR_H + 16,
    left: "50%",
    transform: "translateX(-50%)",
    width: Math.min(1200, typeof window !== "undefined" ? window.innerWidth - 80 : 1120),
    height: `calc(100vh - ${NAVBAR_H + 32}px)`,
    zIndex: 40,
    opacity: 1,
    borderRadius: "16px",
    boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
    overflowY: "auto",
    background: "#f0f2f7",
  } : {};

  const widgetEl = (
    <div ref={overlayRef} style={overlayStyle}>
      <iframe
        id="nll-widget-frame"
        src="https://taxisaas-widget.vercel.app/widget.html"
        frameBorder="0"
        title="Rezervační formulář"
        scrolling="no"
        style={{
          width: "100%",
          height: expanded ? `${widgetH}px` : "100%",
          display: "block",
          border: "none",
          background: expanded ? "#f0f2f7" : "#1E3A8A",
          borderRadius: expanded ? "16px" : "12px",
        }}
      />
    </div>
  );

  return (
    <>
      {/* Portal renders outside any transformed ancestor — position:fixed works correctly */}
      {mounted && createPortal(widgetEl, document.body)}

      <section id="rezervace" className="px-4 pt-28 pb-0 md:pb-0" style={{ position: "relative", overflow: "hidden", background: "#0d1f4a" }}>
        {/* Praha fotka */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "url('/hero-prague.png')",
          backgroundSize: "160%", backgroundPosition: "60% 40%",
          opacity: 0.8, mixBlendMode: "luminosity",
        }} />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(180deg, rgba(13,31,74,0.4) 0%, rgba(13,31,74,0.25) 40%, rgba(30,58,138,0.8) 100%)",
        }} />

        <div className="max-w-6xl mx-auto pb-56" style={{ position: "relative", zIndex: 2 }}>

          {/* Desktop */}
          <div className="hidden md:flex items-start gap-12" style={{ paddingTop: "48px", paddingBottom: "40px" }}>

            {/* Levý sloupec — text */}
            <div style={{
              flex: 1, minWidth: 0,
              opacity: expanded ? 0 : 1,
              transition: "opacity 0.3s ease",
              pointerEvents: expanded ? "none" : "auto",
            }}>
              <h1 style={{ color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.1, fontSize: "clamp(32px,4vw,52px)", margin: "0 0 8px" }}>
                Levná přeprava
              </h1>
              <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.1, fontSize: "clamp(32px,4vw,52px)", margin: "0 0 6px", color: "#F97316" }}>
                na letiště Praha
              </h1>
              <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, lineHeight: 1.3, fontSize: "clamp(16px,2vw,22px)", margin: "0 0 28px", color: "#fff" }}>
                a transfery po celé ČR a střední Evropě
              </h2>
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
                    <span style={{ color: "#fff", fontSize: "18px", fontWeight: 500, whiteSpace: "nowrap" }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <PriceTag />
            </div>

            {/* Ghost div — rezervuje místo pro iframe v step 1 */}
            <div
              ref={ghostRef}
              className="flex-shrink-0"
              style={{ width: "520px", height: "680px" }}
            />
          </div>

          {/* Mobil */}
          <div className="md:hidden flex flex-col" style={{ margin: "0 -16px" }}>
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
                      <span style={{ color: "#fff", fontSize: "14px", fontWeight: 500 }}>{item.text}</span>
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
                  <button onClick={() => { setMobileOpen(false); setWidgetStep(1); }}
                    style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: "8px", padding: "7px 14px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>
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
    </>
  );
}
