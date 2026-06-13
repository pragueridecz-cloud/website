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

function StatItem({ stat, active, index }: { stat: typeof stats[0], active: boolean, index: number }) {
  const count = useCounter(stat.value, 1200, stat.decimal, active);
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "28px 16px",
      borderRight: index < stats.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
      opacity: active ? 1 : 0,
      transform: active ? "translateY(0)" : "translateY(12px)",
      transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
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
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ background: "#162d6e", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="grid-trust">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={active} index={i} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .grid-trust { grid-template-columns: repeat(2, 1fr) !important; }
          .grid-trust > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
        }
      `}</style>
    </div>
  );
}
