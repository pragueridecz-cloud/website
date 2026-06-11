"use client";

import { useState, useRef } from "react";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const services = [
  { name: "Letištní přeprava", href: "/letistni-preprava" },
  { name: "Vlakové a autobusové nádraží", href: "/vlakove-autobusove-nadrazi" },
  { name: "Meziměstská doprava", href: "/mezimestska-doprava" },
  { name: "Hodinový pronájem", href: "/hodinovy-pronajem" },
  { name: "Pro firmy", href: "/preprava-pro-firmy" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "#1E3A8A" }}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Horní lišta – telefon + email */}
        <div className="hidden md:flex items-center justify-end gap-6 py-1.5"
          style={{ borderBottom: "1px solid rgba(255,255,255,.12)", fontSize: "12px" }}>
          <a href="tel:+420606079179"
            className="flex items-center gap-1.5 transition-colors"
            style={{ color: "rgba(255,255,255,.7)", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#F97316")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.7)")}>
            <Phone size={11} /> +420 606 079 179
          </a>
          <a href="mailto:info@naletistelevne.cz"
            className="flex items-center gap-1.5 transition-colors"
            style={{ color: "rgba(255,255,255,.7)", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#F97316")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.7)")}>
            <Mail size={11} /> info@naletistelevne.cz
          </a>
        </div>

        {/* Hlavní navigace */}
        <div className="flex items-stretch" style={{ height: "66px" }}>

          {/* Logo */}
          <a href="/" className="flex items-center pr-5 cursor-pointer flex-shrink-0 py-2"
            style={{ borderRight: "1px solid rgba(255,255,255,.15)" }}>
            <Image src="/logo.png" alt="NaLetištěLevně.cz" width={495} height={151}
              style={{ height: "42px", width: "auto", objectFit: "contain" }} priority />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 px-4 flex-1 justify-between">
            <a href="/" className="px-3 py-1.5 text-sm font-semibold cursor-pointer"
              style={{ color: "#F97316" }}>Úvod</a>

            {/* Dropdown Služby */}
            <div className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setTimeout(() => setServicesOpen(false), 150)}>
              <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium cursor-pointer"
                style={{ color: "rgba(255,255,255,.85)", background: "none", border: "none" }}>
                Služby <ChevronDown size={13} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 py-2 z-50 rounded-lg min-w-56"
                  style={{ background: "#162d6e", border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 8px 24px rgba(0,0,0,.3)", marginTop: "4px" }}>
                  {services.map(s => (
                    <a key={s.name} href={s.href}
                      className="block px-5 py-2.5 text-sm cursor-pointer"
                      style={{ color: "rgba(255,255,255,.8)", textDecoration: "none" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#F97316"; (e.currentTarget as HTMLElement).style.background = "rgba(249,115,22,.1)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.8)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                      {s.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#jak-to-funguje" className="px-3 py-1.5 text-sm font-medium cursor-pointer"
              style={{ color: "rgba(255,255,255,.85)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F97316")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.85)")}>Jak to funguje</a>
            <a href="#pro-firmy" className="px-3 py-1.5 text-sm font-medium cursor-pointer"
              style={{ color: "rgba(255,255,255,.85)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F97316")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.85)")}>Pro firmy</a>
            <a href="#faq" className="px-3 py-1.5 text-sm font-medium cursor-pointer"
              style={{ color: "rgba(255,255,255,.85)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F97316")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.85)")}>FAQ</a>

            <div className="flex items-center gap-2">
              {/* Language switcher */}
              <div className="relative" ref={langRef}>
                <button onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-2 py-1.5 rounded text-sm cursor-pointer"
                  style={{ color: "rgba(255,255,255,.7)", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)" }}>
                  <span className="text-xs font-semibold">CS</span>
                  <ChevronDown size={11} />
                </button>
                {langOpen && (
                  <div className="absolute top-full right-0 mt-1 rounded-lg overflow-hidden z-50 min-w-36"
                    style={{ background: "#162d6e", border: "1px solid rgba(255,255,255,.15)", boxShadow: "0 8px 24px rgba(0,0,0,.3)" }}>
                    <div className="px-4 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,.1)", color: "#F97316", fontSize: "13px", fontWeight: 600 }}>
                      Čeština ✓
                    </div>
                    <a href="https://www.pragueride.com" target="_blank" rel="noopener noreferrer"
                      onClick={() => setLangOpen(false)}
                      className="block px-4 py-2.5 text-sm cursor-pointer"
                      style={{ color: "rgba(255,255,255,.8)", textDecoration: "none" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "rgba(249,115,22,.1)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                      English
                    </a>
                  </div>
                )}
              </div>

              <a href="https://portal.naletistelevne.cz" target="_blank" rel="noopener noreferrer"
                className="text-xs font-semibold px-3 py-1.5 rounded cursor-pointer"
                style={{ border: "1px solid rgba(255,255,255,.3)", color: "#fff", background: "rgba(255,255,255,.08)", textDecoration: "none" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.18)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.08)"; }}>
                Přihlásit se
              </a>
              <a href="#rezervace"
                className="text-xs font-bold px-4 py-1.5 rounded cursor-pointer"
                style={{ background: "#F97316", color: "#fff", textDecoration: "none" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#EA580C")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#F97316")}>
                + Rezervovat
              </a>
            </div>
          </div>

          {/* Hamburger */}
          <button className="md:hidden ml-auto flex items-center px-4 cursor-pointer"
            style={{ color: "#fff", background: "none", border: "none" }}
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-4 flex flex-col gap-3 text-sm"
          style={{ background: "#162d6e", borderTop: "1px solid rgba(255,255,255,.1)" }}>
          <a href="tel:+420606079179" className="flex items-center gap-2" style={{ color: "rgba(255,255,255,.6)", textDecoration: "none" }}>
            <Phone size={13} /> +420 606 079 179
          </a>
          <a href="mailto:info@naletistelevne.cz" className="flex items-center gap-2" style={{ color: "rgba(255,255,255,.6)", textDecoration: "none" }}>
            <Mail size={13} /> info@naletistelevne.cz
          </a>
          <hr style={{ borderColor: "rgba(255,255,255,.1)" }} />
          <a href="/" onClick={() => setMenuOpen(false)} style={{ color: "#F97316", fontWeight: 600 }}>Úvod</a>
          <div style={{ color: "rgba(255,255,255,.4)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em" }}>Služby</div>
          {services.map(s => (
            <a key={s.name} href={s.href} onClick={() => setMenuOpen(false)}
              className="pl-2" style={{ color: "rgba(255,255,255,.8)", textDecoration: "none" }}>{s.name}</a>
          ))}
          <a href="#jak-to-funguje" onClick={() => setMenuOpen(false)} style={{ color: "rgba(255,255,255,.8)" }}>Jak to funguje</a>
          <a href="#pro-firmy" onClick={() => setMenuOpen(false)} style={{ color: "rgba(255,255,255,.8)" }}>Pro firmy</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} style={{ color: "rgba(255,255,255,.8)" }}>FAQ</a>
          <div className="flex gap-2 pt-1">
            <a href="https://portal.naletistelevne.cz" target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-lg font-semibold text-sm"
              style={{ border: "1px solid rgba(255,255,255,.3)", color: "#fff", textDecoration: "none" }}>Přihlásit se</a>
            <a href="#rezervace" onClick={() => setMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-lg font-bold text-sm"
              style={{ background: "#F97316", color: "#fff", textDecoration: "none" }}>Rezervovat</a>
          </div>
        </div>
      )}
    </header>
  );
}
