"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Spokojených jízd", icon: "ti-car" },
  { value: 4.9, suffix: "★", label: "Průměrné hodnocení", icon: "ti-star", decimal: true },
  { value: 8, suffix: "+", label: "Letišť v dosahu", icon: "ti-plane" },
  { value: 24, suffix: "/7", label: "Dostupnost", icon: "ti-clock" },
];

function useCounter(target: number, duration: number, decimal = false, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const steps = 60;
    const increment = target / steps;
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(interval); }
      else setCount(decimal ? Math.round(start * 10) / 10 : Math.floor(start));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [active, target, duration, decimal]);
  return count;
}

function StatItem({ stat, active, index, borderRight }: { stat: typeof stats[0], active: boolean, index: number, borderRight?: boolean }) {
  const count = useCounter(stat.value, 1200, stat.decimal, active);
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "28px 16px",
      borderRight: borderRight ? "1px solid rgba(255,255,255,0.12)" : "none",
      opacity: active ? 1 : 0,
      transform: active ? "translateY(0)" : "translateY(12px)",
      transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      flexShrink: 0,
    }}>
      <i className={`ti ${stat.icon}`} style={{ fontSize: "20px", color: "#F97316", marginBottom: "8px" }} aria-hidden="true" />
      <div style={{
        fontFamily: "Poppins, sans-serif", fontWeight: 900,
        fontSize: "clamp(28px, 4vw, 42px)",
        color: "#fff", lineHeight: 1, letterSpacing: "-1px",
      }}>
        {stat.decimal ? count.toFixed(1) : count.toLocaleString('cs-CZ')}{stat.suffix}
      </div>
      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", marginTop: "6px", fontWeight: 500, textAlign: "center" }}>
        {stat.label}
      </div>
    </div>
  );
}

export default function TrustNumbers() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ background: "#162d6e", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      {/* Desktop: 4-column grid */}
      <div className="hidden md:block" style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={active} index={i} borderRight={i < stats.length - 1} />
          ))}
        </div>
      </div>

      {/* Mobile: horizontal scroll carousel */}
      <div
        className="md:hidden"
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          display: "flex",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`.trust-carousel::-webkit-scrollbar { display: none; }`}</style>
        <div
          className="trust-carousel"
          style={{ display: "flex", width: "100%" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                flex: "0 0 52vw",
                scrollSnapAlign: "start",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
              }}
            >
              <StatItem stat={stat} active={active} index={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
