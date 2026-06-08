"use client";
import { useState, useEffect, useRef } from "react";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const services = [
  { name: "Letištní přeprava", href: "#rezervace" },
  { name: "Vlakové a autobusové nádraží", href: "#rezervace" },
  { name: "Meziměstská doprava", href: "#rezervace" },
  { name: "Hodinový pronájem", href: "#rezervace" },
  { name: "Pro firmy", href: "#pro-firmy" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-xl" : ""}`}
      style={{ background: "#1E3A8A" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-stretch" style={{ height: "88px" }}>

          {/* Logo */}
          <a href="/" className="flex items-center pr-4 cursor-pointer flex-shrink-0 py-1"
            style={{ borderRight: "1px solid rgba(255,255,255,.15)" }}>
            <Image src="/logo-new.png" alt="NaLetištěLevně.cz" width={220} height={80}
              className="h-full w-auto object-contain" priority />
          </a>

          {/* Pravá část – desktop */}
          <div className="flex flex-col flex-1 hidden md:flex">
            {/* Horní řada – kontakty */}
            <div className="flex items-center justify-end gap-5 h-9 px-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,.12)" }}>
              <a href="tel:+420606079179"
                className="flex items-center gap-1.5 text-xs cursor-pointer transition-colors"
                style={{ color: "rgba(255,255,255,.7)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F97316")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.7)")}>
                <Phone size={11} /> +420 606 079 179
              </a>
              <a href="mailto:info@naletistelevne.cz"
                className="flex items-center gap-1.5 text-xs cursor-pointer transition-colors"
                style={{ color: "rgba(255,255,255,.7)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F97316")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.7)")}>
                <Mail size={11} /> info@naletistelevne.cz
              </a>
            </div>

            {/* Dolní řada – navigace */}
            <div className="flex items-center gap-1 px-4 flex-1 justify-between">
              <a href="/" className="px-3 py-1.5 text-sm font-semibold cursor-pointer transition-colors"
                style={{ color: "#F97316" }}>Úvod</a>

              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium cursor-pointer transition-colors"
                  style={{ color: "rgba(255,255,255,.85)", background: "none", border: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#F97316")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.85)")}>
                  Služby <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 py-2 min-w-[220px] z-50 rounded-b-lg"
                    style={{ background: "#162d6e", border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 8px 24px rgba(0,0,0,.3)" }}>
                    {services.map((s) => (
                      <a key={s.name} href={s.href}
                        className="block px-5 py-2.5 text-sm transition-colors cursor-pointer"
                        style={{ color: "rgba(255,255,255,.8)" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#F97316"; (e.currentTarget as HTMLElement).style.background = "rgba(249,115,22,.1)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.8)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                        {s.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#jak-to-funguje" className="px-3 py-1.5 text-sm font-medium cursor-pointer transition-colors"
                style={{ color: "rgba(255,255,255,.85)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F97316")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.85)")}>Jak to funguje</a>
              <a href="#pro-firmy" className="px-3 py-1.5 text-sm font-medium cursor-pointer transition-colors"
                style={{ color: "rgba(255,255,255,.85)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F97316")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.85)")}>Pro firmy</a>
              <a href="#faq" className="px-3 py-1.5 text-sm font-medium cursor-pointer transition-colors"
                style={{ color: "rgba(255,255,255,.85)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F97316")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.85)")}>FAQ</a>

              <div className="flex items-center gap-2">
                {/* Language switcher */}
                <div className="relative" ref={langRef}>
                  <button onClick={() => setLangOpen(!langOpen)}
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded transition-colors cursor-pointer text-sm"
                    style={{ color: "rgba(255,255,255,.7)", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)" }}>
                    <span className="fi fi-cz rounded-sm" style={{ width: "20px", height: "15px", display: "inline-block" }}></span>
                    <span className="text-xs font-semibold">CS</span>
                    <ChevronDown size={11} className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
                  </button>
                  {langOpen && (
                    <div className="absolute top-full right-0 mt-1 rounded-lg overflow-hidden z-50 min-w-[140px]"
                      style={{ background: "#162d6e", border: "1px solid rgba(255,255,255,.15)", boxShadow: "0 8px 24px rgba(0,0,0,.3)" }}>
                      <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,.1)" }}>
                        <span className="fi fi-cz rounded-sm" style={{ width: "20px", height: "15px", display: "inline-block" }}></span>
                        <span className="text-sm font-semibold" style={{ color: "#F97316" }}>Čeština</span>
                        <span className="ml-auto text-xs font-bold" style={{ color: "#F97316" }}>✓</span>
                      </div>
                      <a href="https://www.pragueride.com" target="_blank" rel="noopener noreferrer"
                        onClick={() => setLangOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 cursor-pointer transition-colors"
                        style={{ color: "rgba(255,255,255,.8)" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "rgba(249,115,22,.1)")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                        <span className="fi fi-gb rounded-sm" style={{ width: "20px", height: "15px", display: "inline-block" }}></span>
                        <span className="text-sm font-medium">English</span>
                      </a>
                    </div>
                  )}
                </div>

                <a href="https://portal.naletistelevne.cz" target="_blank" rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1.5 rounded transition-colors cursor-pointer"
                  style={{ border: "1px solid rgba(255,255,255,.3)", color: "#fff", background: "rgba(255,255,255,.08)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.18)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.08)"; }}>
                  Přihlásit se
                </a>
                <a href="#rezervace"
                  className="text-xs font-bold px-4 py-1.5 rounded transition-colors cursor-pointer"
                  style={{ background: "#F97316", color: "#fff" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#EA580C")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#F97316")}>
                  + Rezervovat
                </a>
              </div>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden ml-auto flex items-center px-4 cursor-pointer"
            style={{ color: "#fff", background: "none", border: "none" }}
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-4 flex flex-col gap-3 text-sm font-medium"
          style={{ background: "#162d6e", borderTop: "1px solid rgba(255,255,255,.1)" }}>
          <a href="/" onClick={() => setMenuOpen(false)} style={{ color: "#F97316" }} className="cursor-pointer">Úvod</a>
          <div style={{ color: "rgba(255,255,255,.5)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em" }}>Služby</div>
          {services.map((s) => (
            <a key={s.name} href={s.href} onClick={() => setMenuOpen(false)}
              className="pl-3 cursor-pointer" style={{ color: "rgba(255,255,255,.8)" }}>{s.name}</a>
          ))}
          <a href="#jak-to-funguje" onClick={() => setMenuOpen(false)} style={{ color: "rgba(255,255,255,.8)" }} className="cursor-pointer">Jak to funguje</a>
          <a href="#pro-firmy" onClick={() => setMenuOpen(false)} style={{ color: "rgba(255,255,255,.8)" }} className="cursor-pointer">Pro firmy</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} style={{ color: "rgba(255,255,255,.8)" }} className="cursor-pointer">FAQ</a>
          <a href="tel:+420606079179" style={{ color: "rgba(255,255,255,.6)" }} className="cursor-pointer flex items-center gap-2">
            <Phone size={13} /> +420 606 079 179
          </a>
          <div className="flex gap-2 pt-2">
            <a href="https://portal.naletistelevne.cz" target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded-lg cursor-pointer text-sm font-semibold"
              style={{ border: "1px solid rgba(255,255,255,.3)", color: "#fff" }}>Přihlásit se</a>
            <a href="#rezervace" onClick={() => setMenuOpen(false)}
              className="flex-1 text-center py-2 rounded-lg cursor-pointer text-sm font-bold"
              style={{ background: "#F97316", color: "#fff" }}>Rezervovat</a>
          </div>
        </div>
      )}
    </header>
  );
}
