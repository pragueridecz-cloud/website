'use client'
import { useState } from "react"
import { FileText, Repeat, PhoneCall, BarChart2 } from "lucide-react"

const perks = [
  {
    icon: FileText,
    title: "Faktura na firmu a DPH doklad",
    short: "Faktura na firmu — DPH doklad ke každé jízdě",
    desc: "Ke každé jízdě vystavíme daňový doklad s DPH, který jednoduše uplatníte jako firemní výdaj. Firemní taxi Praha s fakturou ocení zejména HR oddělení, office manažeři i účetní — žádné sbírání papírových paragonů, vše elektronicky na váš firemní email.",
  },
  {
    icon: Repeat,
    title: "Firemní slevy a pevné sazby",
    short: "Pravidelné jízdy s fixní cenou a slevou",
    desc: "Při uzavření firemní smlouvy na pravidelnou přepravu získáte fixní sazby a množstevní slevy. Korporátní přeprava Praha za předem dohodnutou cenu — bez taxametru, bez přirážek za víkend nebo noční hodiny, bez překvapení na faktuře.",
  },
  {
    icon: BarChart2,
    title: "Přehled jízd a výdajů online",
    short: "Přehled všech jízd a výdajů online",
    desc: "Všechny jízdy, výdaje a dokumenty na jednom místě. Firemní zákazníci mají přístup k přehledu přepravy zaměstnanců — kdo jezdil, kdy, kam a za kolik. Ideální pro controlling, schvalování výdajů i interní reporty.",
  },
  {
    icon: PhoneCall,
    title: "Dedikovaná linka pro firemní zákazníky",
    short: "Dedikovaná telefonní linka pro firemní zákazníky",
    desc: "Firemní klienti mají přímý kontakt na dispečink bez čekání. Business taxi Praha k dispozici 24/7 — ať potřebujete odvézt zaměstnance na ranní let v 5:00 nebo vyzvednout VIP hosta z večerního vlaku, vždy víme, kdo volá a co potřebujete.",
  },
]

export default function FirmsPerks() {
  const [active, setActive] = useState(0)
  const p = perks[active]

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      {/* Vlevo – seznam */}
      <div className="flex flex-col gap-3">
        {perks.map((item, i) => {
          const Icon = item.icon
          const sel = active === i
          return (
            <button key={i} onClick={() => setActive(i)}
              style={{
                display: "flex", alignItems: "center", gap: "14px",
                padding: "14px 16px", borderRadius: "12px", textAlign: "left",
                border: sel ? "2px solid #00205B" : "1.5px solid #e2e8f0",
                background: sel ? "#00205B" : "#f8fafc",
                cursor: "pointer", transition: "all .2s", fontFamily: "inherit",
                boxShadow: sel ? "0 4px 16px rgba(0,32,91,.15)" : "none",
              }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "8px", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: sel ? "rgba(249,115,22,.2)" : "#fff7ed",
                transition: "background .2s",
              }}>
                <Icon size={17} style={{ color: "#F97316" }} />
              </div>
              <span style={{
                fontSize: "13px", fontWeight: 700,
                color: sel ? "#fff" : "#1e293b",
                transition: "color .2s",
              }}>{item.short}</span>
              {sel && <div style={{ marginLeft: "auto", color: "#F97316", fontSize: "18px", flexShrink: 0 }}>›</div>}
            </button>
          )
        })}
      </div>

      {/* Vpravo – detail */}
      <div style={{
        background: "#f8fafc", border: "1.5px solid #e2e8f0",
        borderRadius: "16px", padding: "32px", minHeight: "200px",
        transition: "all .2s",
      }}>
        <div style={{
          width: "44px", height: "44px", borderRadius: "10px",
          background: "#fff7ed", display: "flex", alignItems: "center",
          justifyContent: "center", marginBottom: "16px",
        }}>
          <p.icon size={20} style={{ color: "#F97316" }} />
        </div>
        <h3 style={{
          fontFamily: "Poppins, sans-serif", fontWeight: 700,
          fontSize: "18px", color: "#00205B", marginBottom: "12px",
        }}>
          {p.title}
        </h3>
        <p style={{ color: "#475569", fontSize: "15px", lineHeight: 1.8 }}>
          {p.desc}
        </p>
        <div style={{ marginTop: "20px", display: "flex", gap: "8px" }}>
          {perks.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{
                width: "8px", height: "8px", borderRadius: "50%", border: "none",
                background: active === i ? "#F97316" : "#d0dbe8",
                cursor: "pointer", padding: 0, transition: "background .2s",
              }} />
          ))}
        </div>
      </div>
    </div>
  )
}
