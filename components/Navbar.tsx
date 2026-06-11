"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "#1E3A8A" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between" style={{ height: "60px" }}>

          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0" style={{ height: "44px" }}>
            <Image src="/logo.png" alt="NaLetištěLevně.cz" width={495} height={151}
              style={{ height: "40px", width: "auto", objectFit: "contain" }} priority />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <a href="/" className="px-3 py-1.5 text-sm font-semibold rounded-md transition-colors"
              style={{ color: "#F97316" }}>Úvod</a>

            <div className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setTimeout(() => setServicesOpen(false), 150)}>
              <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors"
                style={{ color: "rgba(255,255,255,.85)", background: "none", border: "none", cursor: "pointer" }}>
                Služby <ChevronDown size={13} className={`transition-transform duration-150 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 py-1.5 rounded-lg z-50 min-w-48"
                  style={{ background: "#162d6e", boxShadow: "0 8px 24px rgba(0,0,0,.3)", border: "1px solid rgba(255,255,255,.1)", marginTop: "4px" }}>
                  {services.map((s) => (
                    <a key={s.name} href={s.href} className="block px-4 py-2 text-sm transition-colors"
                      style={{ color: "rgba(255,255,255,.8)" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#F97316"; (e.currentTarget as HTMLElement).style.background = "rgba(249,115,22,.1)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.8)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                      {s.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#jak-to-funguje" className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors"
              style={{ color: "rgba(255,255,255,.85)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F97316")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.85)")}>Jak to funguje</a>
            <a href="#faq" className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors"
              style={{ color: "rgba(255,255,255,.85)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F97316")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.85)")}>FAQ</a>
            <a href="tel:+420606079179" className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors"
              style={{ color: "rgba(255,255,255,.85)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F97316")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.85)")}>
              +420 606 079 179
            </a>
          </nav>

          {/* CTA + lang + hamburger */}
          <div className="flex items-center gap-2">
            <a href="https://www.pragueride.com" target="_blank" rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-xs px-2 py-1 rounded"
              style={{ color: "rgba(255,255,255,.5)", border: "1px solid rgba(255,255,255,.15)" }}>
              EN
            </a>
            <a href="#rezervace" className="hidden md:block text-xs font-bold px-4 py-2 rounded-lg"
              style={{ background: "#F97316", color: "#fff" }}>
              + Rezervovat
            </a>
            <button className="md:hidden p-1.5 rounded" onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "#fff", background: "none", border: "none", cursor: "pointer" }}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-3 flex flex-col gap-2 text-sm"
          style={{ background: "#162d6e", borderTop: "1px solid rgba(255,255,255,.1)" }}>
          <a href="/" onClick={() => setMenuOpen(false)} style={{ color: "#F97316", fontWeight: 600 }}>Úvod</a>
          <div style={{ color: "rgba(255,255,255,.4)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", padding: "4px 0 2px" }}>Služby</div>
          {services.map((s) => (
            <a key={s.name} href={s.href} onClick={() => setMenuOpen(false)}
              className="pl-2" style={{ color: "rgba(255,255,255,.8)" }}>{s.name}</a>
          ))}
          <a href="#jak-to-funguje" onClick={() => setMenuOpen(false)} style={{ color: "rgba(255,255,255,.8)" }}>Jak to funguje</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} style={{ color: "rgba(255,255,255,.8)" }}>FAQ</a>
          <a href="tel:+420606079179" style={{ color: "rgba(255,255,255,.8)" }}>+420 606 079 179</a>
          <a href="#rezervace" onClick={() => setMenuOpen(false)}
            className="mt-1 text-center py-2.5 rounded-lg font-bold"
            style={{ background: "#F97316", color: "#fff" }}>Rezervovat</a>
        </div>
      )}
    </header>
  );
}
