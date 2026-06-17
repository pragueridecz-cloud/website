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

  // Position widget in document (absolute) — scrolls with page, stays in hero section.
  // All props via direct DOM so React re-renders (from nll-height) never overwrite them.
  useEffect(() => {
    if (!mounted) return;
    const el = overlayRef.current;
    const ghost = ghostRef.current;
    if (!el || !ghost) return;

    function place(animate = false) {
      if (!el || !ghost) return;
      if (widgetStepRef.current <= 1) {
        // Step 1: instant tracking — no transition
        const r = ghost.getBoundingClientRect();
        el.style.cssText = `
          position: absolute;
          top: ${r.top + window.scrollY}px;
          left: ${r.left + window.scrollX}px;
          width: ${r.width}px;
          height: ${r.height}px;
          z-index: 40;
          border-radius: 12px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.3);
          overflow: hidden;
          display: block;
          background: transparent;
        `;
      } else {
        // Step 2+: centered overlay. Use px left (not 50%) so CSS can animate from step 1.
        const w = Math.min(1200, window.innerWidth - 80);
        const targetLeft = Math.round((window.innerWidth - w) / 2);
        const targetTop = NAVBAR_H + 16;
        if (animate) {
          // Animate from current step-1 position to step-2 position
          el.style.transition = "top 0.5s cubic-bezier(0.4,0,0.2,1), left 0.5s cubic-bezier(0.4,0,0.2,1), width 0.5s cubic-bezier(0.4,0,0.2,1), border-radius 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease";
          requestAnimationFrame(() => {
            el!.style.top = targetTop + "px";
            el!.style.left = targetLeft + "px";
            el!.style.width = w + "px";
            el!.style.borderRadius = "16px";
            el!.style.boxShadow = "0 32px 80px rgba(0,0,0,0.45)";
            el!.style.background = "#f0f2f7";
            el!.style.overflowY = "auto";
            setTimeout(() => { if (el) el.style.transition = ""; }, 600);
          });
        } else {
          el.style.cssText = `
            position: absolute;
            top: ${targetTop}px;
            left: ${targetLeft}px;
            width: ${w}px;
            z-index: 40;
            border-radius: 16px;
            box-shadow: 0 32px 80px rgba(0,0,0,0.45);
            overflow-y: auto;
            display: block;
            background: #f0f2f7;
          `;
        }
      }
    }

    // Animate only when entering step 2+ for the first time
    place(widgetStep > 1);
    window.addEventListener("resize", () => place(false), { passive: true });
    return () => window.removeEventListener("resize", () => place(false));
  }, [mounted, widgetStep]);

  const widgetStepRef = useRef(1);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      // Step change
      if (e.data?.type === "nll-step") {
        const s = e.data.step as number;
        widgetStepRef.current = s;
        setWidgetStep(s);
        if (e.data.height) setWidgetH(e.data.height + 32);
        if (s > 1) window.scrollTo({ top: 0, behavior: "instant" });
      }
      // Height update — always sync iframe and ghost div to widget content height
      if (e.data?.type === "nll-height" && e.data?.height) {
        const h = e.data.height + 32;
        setWidgetH(h);
        // Update ghost div height directly to avoid layout re-render cascade
        if (ghostRef.current && widgetStepRef.current <= 1) {
          ghostRef.current.style.height = h + "px";
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

  const widgetEl = (
    <div ref={overlayRef}>
      <iframe
        id="nll-widget-frame"
        src="https://taxisaas-widget.vercel.app/widget.html"
        frameBorder="0"
        title="Rezervační formulář"
        scrolling="no"
        style={{
          width: "100%",
          height: `${widgetH}px`,
          display: "block",
          border: "none",
          background: expanded ? "#f0f2f7" : "transparent",
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
        <div className="hero-bg" style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "url('/hero-prague.png')",
          backgroundSize: "cover", backgroundPosition: "65% 40%",
          opacity: 0.8, mixBlendMode: "luminosity",
        }} />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(180deg, rgba(13,31,74,0.4) 0%, rgba(13,31,74,0.25) 40%, rgba(30,58,138,0.8) 100%)",
        }} />

        <div className="max-w-6xl mx-auto pb-0 md:pb-56" style={{ position: "relative", zIndex: 2 }}>

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
              style={{ width: "520px", height: `${widgetH}px`, transition: "height 0.2s ease" }}
            />
          </div>

          {/* Mobil */}
          <div className="md:hidden flex flex-col pb-5" style={{ margin: "0 -16px" }}>
            <h1 style={{ color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.1, fontSize: "clamp(28px,8vw,40px)", margin: "0 0 4px" }}>
              Levná přeprava
            </h1>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.1, fontSize: "clamp(28px,8vw,40px)", margin: "0 0 16px", color: "#F97316" }}>
              na letiště Praha
            </h1>
            <iframe
              src="https://taxisaas-widget.vercel.app/widget.html"
              frameBorder="0"
              title="Rezervační formulář"
              scrolling="no"
              style={{
                width: "100%",
                height: "calc(100dvh - 280px)",
                minHeight: "460px",
                display: "block",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
                background: "#f0f2f7",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
