"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    img: "/service-airport.png",
    label: "Letištní přeprava",
    title: "Letiště Praha",
    desc: "Pevná cena, žádné čekání. Sledujeme váš let v reálném čase a přizpůsobíme čas vyzvednutí případným zpožděním.",
    href: "/letistni-preprava",
  },
  {
    img: "/service-mezimestska.png",
    label: "Meziměstská přeprava",
    title: "Celá ČR i Evropa",
    desc: "Pohodlná přeprava na delší vzdálenosti — Praha, Brno, Ostrava i zahraniční destinace v celé střední Evropě.",
    href: "/mezimestska-doprava",
  },
  {
    img: "/service-vlakautobus.png",
    label: "Nádraží",
    title: "Hlavní nádraží · Florenc",
    desc: "Transfer na vlakové i autobusové nádraží. Přesné načasování, aby vlak nebo autobus nestihnout nebyla vaše starost.",
    href: "/vlakove-autobusove-nadrazi",
  },
  {
    img: "/service-hodinovy.jpg",
    label: "Hodinový pronájem",
    title: "Řidič k dispozici",
    desc: "Řidič po celý den jen pro vás. Ideální pro svatby, obchodní schůzky, výlety nebo víkendové výpravy bez starostí o parkování.",
    href: "/hodinovy-pronajem",
  },
  {
    img: "/service-firmy.png",
    label: "Pro firmy",
    title: "Firemní přeprava",
    desc: "Pravidelné jízdy, fakturace, firemní slevy. Svěřte přepravu svých zaměstnanců a klientů do profesionálních rukou.",
    href: "/preprava-pro-firmy",
  },
];

const INTERVAL = 5000;

// ── Desktop slider ────────────────────────────────────────────────────────────

export default function Services() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((idx: number) => {
    setActive((idx + SERVICES.length) % SERVICES.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / INTERVAL) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        setActive(a => (a + 1) % SERVICES.length);
        setProgress(0);
      }
    }, 30);
    return () => clearInterval(tick);
  }, [active, paused]);

  const current = SERVICES[active];
  const cardIndices = [1, 2, 3].map(offset => (active + offset) % SERVICES.length);

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        <SectionHeading label="Naše služby" title="Přeprava" highlight="pro každou příležitost" />
      </div>

      {/* Mobile carousel */}
      <MobileCarousel />

      {/* Desktop slider */}
      <div className="hidden md:block max-w-6xl mx-auto px-4 pb-16">
        <div
          className="relative overflow-hidden bg-black rounded-2xl"
          style={{ height: "clamp(580px, 72vh, 820px)" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === active ? 1 : 0 }}
            >
              <Image src={s.img} alt={s.title} fill className="object-cover" priority={i === 0} sizes="100vw" />
            </div>
          ))}

          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />

          <div className="absolute left-0 bottom-0 p-14" style={{ maxWidth: "520px" }}>
            <div style={{ width: "32px", height: "2px", background: "#F97316", marginBottom: "14px" }} />
            <div className="text-white/70 text-sm font-medium mb-2" style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "0.05em" }}>
              {current.label}
            </div>
            <h2
              className="text-white font-black mb-4"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              {current.title}
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6" style={{ maxWidth: "380px" }}>
              {current.desc}
            </p>
            <Link
              href={current.href}
              className="inline-flex items-center gap-2 text-white text-sm font-semibold border border-white/30 rounded-full px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-200"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Zjistit více
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          </div>

          <div className="absolute bottom-0 right-0 flex items-end gap-3 p-10" style={{ paddingBottom: "56px" }}>
            {cardIndices.map((idx, pos) => {
              const s = SERVICES[idx];
              const scale = pos === 0 ? 0.82 : pos === 1 ? 0.92 : 1;
              const opacity = pos === 0 ? 0.6 : pos === 1 ? 0.8 : 1;
              return (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className="relative overflow-hidden rounded-xl cursor-pointer flex-shrink-0"
                  style={{
                    width: "clamp(110px, 12vw, 160px)",
                    height: "clamp(130px, 16vw, 195px)",
                    transform: `scale(${scale})`,
                    transformOrigin: "bottom right",
                    opacity,
                    transition: "transform 0.4s ease, opacity 0.4s ease",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image src={s.img} alt={s.title} fill className="object-cover" sizes="160px" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)" }} />
                  <div className="absolute bottom-0 left-0 p-3">
                    <div style={{ width: "20px", height: "2px", background: "#F97316", marginBottom: "6px" }} />
                    <div className="text-white/60 text-[9px] font-semibold uppercase tracking-wider">{s.label}</div>
                    <div className="text-white font-bold text-xs mt-0.5" style={{ fontFamily: "Poppins, sans-serif", lineHeight: 1.2 }}>{s.title}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-14 pb-5 pt-3">
            <div className="flex gap-2">
              {SERVICES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? "24px" : "6px",
                    height: "6px",
                    background: i === active ? "#F97316" : "rgba(255,255,255,0.35)",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => goTo(active - 1)}
                className="flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/20 transition-all"
                style={{ width: "36px", height: "36px" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button
                onClick={() => goTo(active + 1)}
                className="flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/20 transition-all"
                style={{ width: "36px", height: "36px" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
            <div className="h-full bg-orange-500 transition-none" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Mobile horizontal snap carousel ──────────────────────────────────────────

function MobileCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track which card is centered via scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const cardW = el.offsetWidth * 0.82 + 16; // 82vw + gap
      const idx = Math.round(el.scrollLeft / cardW);
      setActiveIdx(Math.min(Math.max(idx, 0), SERVICES.length - 1));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.offsetWidth * 0.82 + 16;
    el.scrollTo({ left: cardW * idx, behavior: "smooth" });
  };

  return (
    <div className="md:hidden pb-12">
      {/* Cards */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          gap: "16px",
          paddingLeft: "9vw",
          paddingRight: "9vw",
          paddingBottom: "4px",
        }}
      >
        <style>{`.mob-carousel::-webkit-scrollbar{display:none}`}</style>
        {SERVICES.map((s, i) => (
          <Link
            key={i}
            href={s.href}
            className="mob-carousel flex-shrink-0 relative overflow-hidden rounded-2xl block"
            style={{
              width: "82vw",
              height: "340px",
              scrollSnapAlign: "center",
              boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
              textDecoration: "none",
            }}
          >
            <Image src={s.img} alt={s.title} fill className="object-cover" sizes="82vw" />
            {/* Gradient */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)" }} />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div style={{ width: "28px", height: "2px", background: "#F97316", marginBottom: "10px" }} />
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.65)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "5px" }}>
                {s.label}
              </div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "22px", color: "#fff", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "8px" }}>
                {s.title}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.55, marginBottom: "14px" }}>
                {s.desc}
              </div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: "#F97316", fontFamily: "Poppins, sans-serif" }}>
                Zjistit více
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {SERVICES.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            style={{
              width: i === activeIdx ? "24px" : "6px",
              height: "6px",
              borderRadius: "9999px",
              background: i === activeIdx ? "#F97316" : "#d1d5db",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "width 0.3s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
