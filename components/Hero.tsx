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
  const [wrapperPos, setWrapperPos] = useState<React.CSSProperties>({ opacity: 0 });
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    WHY_US.forEach((_, i) => {
      setTimeout(() => setVisibleItems(prev => [...prev, i]), 600 + i * 350);
    });
  }, []);

  // Step 1: measure ghost div once (on mount + resize), position wrapper absolutely
  useEffect(() => {
    if (widgetStep > 1) return;
    function updatePos() {
      const ghost = ghostRef.current;
      if (!ghost) return;
      const r = ghost.getBoundingClientRect();
      setWrapperPos({
        position: "absolute",
        top: r.top + window.scrollY,
        left: r.left + window.scrollX,
        width: r.width,
        height: r.height,
        zIndex: 40,
        opacity: 1,
        borderRadius: "12px",
        boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
        overflowY: "hidden" as const,
      });
    }
    updatePos();
    window.addEventListener("resize", updatePos);
    return () => window.removeEventListener("resize", updatePos);
  }, [widgetStep]);

  // Step 2+: set overlay base styles, then pin position via direct DOM on every scroll
  useEffect(() => {
    if (widgetStep <= 1) return;
    const el = overlayRef.current;
    if (!el) return;

    const overlayH = `calc(100vh - ${NAVBAR_H + 32}px)`;
    const overlayW = Math.min(1200, window.innerWidth - 80);

    // Base styles via React state (non-position props)
    setWrapperPos({
      position: "absolute", // will be overridden by direct DOM below
      top: NAVBAR_H + 16 + window.scrollY,
      left: "50%",
      transform: "translateX(-50%)",
      width: overlayW,
      height: overlayH,
      zIndex: 40,
      opacity: 1,
      borderRadius: "16px",
      boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
      overflowY: "auto" as const,
      WebkitOverflowScrolling: "touch" as const,
      overscrollBehavior: "contain" as const,
    });

    // Manually keep overlay pinned by updating top directly on scroll (bypasses CSS fixed issues)
    function pin() {
      if (el) el.style.top = (NAVBAR_H + 16 + window.scrollY) + "px";
    }
    window.addEventListener("scroll", pin, { passive: true });

    function updateWidth() {
      if (el) el.style.width = Math.min(1200, window.innerWidth - 80) + "px";
    }
    window.addEventListener("resize", updateWidth, { passive: true });

    return () => {
      window.removeEventListener("scroll", pin);
      window.removeEventListener("resize", updateWidth);
    };
  }, [widgetStep]);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "nll-step") {
        const s = e.data.step as number;
        setWidgetStep(s);
        if (e.data.height) setWidgetH(e.data.height + 32);
        if (s > 1) window.scrollTo({ top: 0, behavior: "smooth" });
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
  const hidden = typeof wrapperPos.opacity === "number" && wrapperPos.opacity === 0;

  const widgetEl = (
    <div
      ref={overlayRef}
      style={{
        ...wrapperPos,
        display: hidden ? "none" : "block",
        background: expanded ? "#f0f2f7" : "transparent",
      }}
    >
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
