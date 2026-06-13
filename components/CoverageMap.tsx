"use client";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const AIRPORTS = [
  { code: "PRG", name: "Praha Václava Havla", x: 48, y: 42, price: "od 790 Kč", time: "20–35 min", primary: true },
  { code: "BRQ", name: "Brno-Tuřany", x: 62, y: 52, price: "od 2 900 Kč", time: "2.5 hod" },
  { code: "OSR", name: "Ostrava-Mošnov", x: 76, y: 38, price: "od 4 900 Kč", time: "3.5 hod" },
  { code: "VIE", name: "Vídeň", x: 58, y: 72, price: "od 4 500 Kč", time: "3.5 hod" },
  { code: "BTS", name: "Bratislava", x: 72, y: 68, price: "od 4 200 Kč", time: "3.5 hod" },
  { code: "BUD", name: "Budapešť", x: 78, y: 78, price: "od 6 900 Kč", time: "5 hod" },
  { code: "MUC", name: "Mnichov", x: 28, y: 72, price: "od 7 900 Kč", time: "4 hod" },
  { code: "FRA", name: "Frankfurt", x: 12, y: 48, price: "od 8 900 Kč", time: "4.5 hod" },
  { code: "DRS", name: "Drážďany", x: 36, y: 28, price: "od 3 900 Kč", time: "1.5 hod" },
  { code: "BER", name: "Berlín", x: 38, y: 14, price: "od 8 900 Kč", time: "4 hod" },
];

export default function CoverageMap() {
  const [active, setActive] = useState<string | null>("PRG");

  const activeAirport = AIRPORTS.find(a => a.code === active);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          label="Pokrytí"
          title="Kam vás odvezeme"
          highlight="po celé střední Evropě"
          subtitle="Praha je naše základna. Přepravujeme na všechna letiště v dosahu 700 km."
        />

        <div className="grid md:grid-cols-5 gap-8 items-start">

          {/* Mapa – SVG */}
          <div className="md:col-span-3">
            <div style={{ position: "relative", background: "#EFF6FF", borderRadius: "16px", overflow: "hidden", aspectRatio: "4/3" }}>
              {/* SVG mapa střední Evropy – zjednodušená */}
              <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%", display: "block" }}>
                {/* Pozadí – moře/okolí */}
                <rect width="100" height="100" fill="#dbeafe" />

                {/* Zjednodušené obrysy zemí */}
                {/* Česká republika */}
                <path d="M 36 35 L 55 30 L 72 33 L 75 42 L 70 50 L 55 55 L 40 52 L 33 44 Z"
                  fill="#1E3A8A" opacity="0.15" stroke="#1E3A8A" strokeWidth="0.5" />
                {/* Německo */}
                <path d="M 8 20 L 35 18 L 36 35 L 33 44 L 28 55 L 20 65 L 8 62 L 5 40 Z"
                  fill="#1E3A8A" opacity="0.08" stroke="#1E3A8A" strokeWidth="0.3" />
                {/* Rakousko */}
                <path d="M 33 55 L 55 55 L 70 50 L 72 60 L 65 70 L 45 72 L 30 68 L 28 60 Z"
                  fill="#1E3A8A" opacity="0.08" stroke="#1E3A8A" strokeWidth="0.3" />
                {/* Slovensko */}
                <path d="M 70 50 L 88 48 L 90 58 L 75 62 L 65 60 L 70 50 Z"
                  fill="#1E3A8A" opacity="0.08" stroke="#1E3A8A" strokeWidth="0.3" />
                {/* Maďarsko */}
                <path d="M 65 65 L 88 60 L 92 75 L 75 80 L 58 76 L 58 68 Z"
                  fill="#1E3A8A" opacity="0.08" stroke="#1E3A8A" strokeWidth="0.3" />
                {/* Polsko */}
                <path d="M 38 14 L 72 10 L 78 30 L 75 35 L 55 30 L 36 35 L 35 20 Z"
                  fill="#1E3A8A" opacity="0.08" stroke="#1E3A8A" strokeWidth="0.3" />

                {/* Dosahové kruhy od Prahy */}
                <circle cx="48" cy="42" r="18" fill="none" stroke="#F97316" strokeWidth="0.4" strokeDasharray="1.5 1.5" opacity="0.4" />
                <circle cx="48" cy="42" r="32" fill="none" stroke="#F97316" strokeWidth="0.3" strokeDasharray="1 2" opacity="0.25" />

                {/* Linie od Prahy k letištím */}
                {AIRPORTS.filter(a => a.code !== "PRG").map(a => (
                  <line key={a.code}
                    x1="48" y1="42" x2={a.x} y2={a.y}
                    stroke={active === a.code ? "#F97316" : "#1E3A8A"}
                    strokeWidth={active === a.code ? "0.6" : "0.3"}
                    strokeDasharray="1.5 1.5"
                    opacity={active === a.code ? 0.8 : 0.2}
                  />
                ))}

                {/* Body letišť */}
                {AIRPORTS.map(a => (
                  <g key={a.code} onClick={() => setActive(a.code)} style={{ cursor: "pointer" }}>
                    <circle cx={a.x} cy={a.y} r={active === a.code ? 4 : 3}
                      fill={a.primary ? "#F97316" : active === a.code ? "#F97316" : "#1E3A8A"}
                      stroke="white" strokeWidth="1"
                      opacity={1}
                    />
                    {/* Pulsující kruh pro aktivní */}
                    {active === a.code && (
                      <circle cx={a.x} cy={a.y} r="6" fill="none" stroke="#F97316" strokeWidth="0.8" opacity="0.5" />
                    )}
                    {/* Label */}
                    <text x={a.x + 5} y={a.y + 1} fontSize="3.5" fill={active === a.code ? "#F97316" : "#1E3A8A"}
                      fontWeight={active === a.code ? "bold" : "normal"} fontFamily="Poppins, sans-serif">
                      {a.code}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            <p style={{ fontSize: "12px", color: "#94a3b8", textAlign: "center", marginTop: "8px" }}>
              Klikněte na letiště pro více informací
            </p>
          </div>

          {/* Info panel vpravo */}
          <div className="md:col-span-2">
            {activeAirport && (
              <div style={{
                background: "#f8fafc", border: "1px solid #e2e8f0",
                borderRadius: "16px", padding: "24px",
                borderTop: `3px solid #F97316`,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <div style={{
                    background: "#1E3A8A", color: "#fff",
                    fontFamily: "monospace", fontWeight: 700, fontSize: "14px",
                    padding: "4px 10px", borderRadius: "6px",
                  }}>{activeAirport.code}</div>
                  <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#1E3A8A", fontSize: "16px", margin: 0 }}>
                    {activeAirport.name}
                  </h3>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
                  <div style={{ background: "#fff", borderRadius: "10px", padding: "14px", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase" as const, letterSpacing: "0.5px", marginBottom: "4px" }}>Cena</div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, color: "#F97316", fontSize: "20px" }}>{activeAirport.price}</div>
                  </div>
                  <div style={{ background: "#fff", borderRadius: "10px", padding: "14px", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase" as const, letterSpacing: "0.5px", marginBottom: "4px" }}>Čas jízdy</div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, color: "#1E3A8A", fontSize: "20px" }}>{activeAirport.time}</div>
                  </div>
                </div>
                <a href="/#rezervace" style={{
                  display: "block", textAlign: "center" as const,
                  background: "#F97316", color: "#fff", textDecoration: "none",
                  padding: "12px", borderRadius: "10px",
                  fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "14px",
                }}>
                  Rezervovat na {activeAirport.code} →
                </a>
              </div>
            )}

            {/* Seznam letišť */}
            <div style={{ marginTop: "16px" }}>
              {AIRPORTS.map(a => (
                <button key={a.code} onClick={() => setActive(a.code)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", padding: "10px 12px", marginBottom: "4px",
                    background: active === a.code ? "#EFF6FF" : "transparent",
                    border: active === a.code ? "1px solid #BFDBFE" : "1px solid transparent",
                    borderRadius: "8px", cursor: "pointer", textAlign: "left" as const,
                    transition: "all 0.15s",
                  }}>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: active === a.code ? "#1E3A8A" : "#475569" }}>
                    {a.code} – {a.name}
                  </span>
                  <span style={{ fontSize: "12px", color: "#F97316", fontWeight: 700 }}>{a.price}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
