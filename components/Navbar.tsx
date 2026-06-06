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
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-md" : "border-b border-gray-200"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-stretch" style={{ height: '96px' }}>

          {/* Logo */}
          <a href="/" className="flex items-center pr-3 border-r border-gray-200 cursor-pointer flex-shrink-0 py-0">
            <Image src="/logo.png" alt="NaLetištěLevně.cz" width={800} height={240} className="h-full w-auto object-contain" priority />
          </a>

          {/* Pravá část */}
          <div className="flex flex-col flex-1 hidden md:flex">
            {/* Horní řada – kontakty */}
            <div className="flex items-center justify-end gap-5 border-b border-gray-200 h-9 px-4">
              <a href="tel:+420606079179" className="flex items-center gap-1.5 text-xs text-[#475569] hover:text-[#1E3A8A] transition-colors cursor-pointer">
                <Phone size={11} /> +420 606 079 179
              </a>
              <a href="mailto:info@naletistelevne.cz" className="flex items-center gap-1.5 text-xs text-[#475569] hover:text-[#1E3A8A] transition-colors cursor-pointer">
                <Mail size={11} /> info@naletistelevne.cz
              </a>
            </div>

            {/* Dolní řada – navigace */}
            <div className="flex items-center gap-1 px-4 flex-1 justify-between">
              <a href="/" className="px-3 py-1.5 text-sm font-medium text-[#F97316] cursor-pointer">Úvod</a>

              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-[#0F172A] hover:text-[#1E3A8A] transition-colors cursor-pointer">
                  Služby <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-b-lg py-2 min-w-[220px] z-50">
                    {services.map((s) => (
                      <a key={s.name} href={s.href} className="block px-5 py-2.5 text-sm text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#1E3A8A] transition-colors cursor-pointer">
                        {s.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#jak-to-funguje" className="px-3 py-1.5 text-sm font-medium text-[#0F172A] hover:text-[#1E3A8A] transition-colors cursor-pointer">Jak to funguje</a>
              <a href="#pro-firmy" className="px-3 py-1.5 text-sm font-medium text-[#0F172A] hover:text-[#1E3A8A] transition-colors cursor-pointer">Pro firmy</a>
              <a href="#faq" className="px-3 py-1.5 text-sm font-medium text-[#0F172A] hover:text-[#1E3A8A] transition-colors cursor-pointer">FAQ</a>

              <div className="flex items-center gap-2 ml-auto">
                {/* Language switcher */}
                <div className="relative" ref={langRef}>
                  <button onClick={() => setLangOpen(!langOpen)}
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded hover:bg-gray-100 transition-colors cursor-pointer text-sm">
                    <span className="fi fi-cz rounded-sm" style={{width:'20px',height:'15px',display:'inline-block'}}></span>
                    <span className="text-xs font-semibold text-[#0F172A]">CS</span>
                    <ChevronDown size={11} className={`text-[#475569] transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
                  </button>
                  {langOpen && (
                    <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden z-50 min-w-[140px]">
                      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F8FAFC] border-b border-gray-100">
                        <span className="fi fi-cz rounded-sm" style={{width:'20px',height:'15px',display:'inline-block'}}></span>
                        <span className="text-sm font-semibold text-[#1E3A8A]">Čeština</span>
                        <span className="ml-auto text-[10px] text-[#1E3A8A] font-bold">✓</span>
                      </div>
                      <a href="https://www.pragueride.com" target="_blank" rel="noopener noreferrer"
                        onClick={() => setLangOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 hover:bg-[#F8FAFC] transition-colors cursor-pointer">
                        <span className="fi fi-gb rounded-sm" style={{width:'20px',height:'15px',display:'inline-block'}}></span>
                        <span className="text-sm font-medium text-[#0F172A]">English</span>
                      </a>
                    </div>
                  )}
                </div>

                <a href="https://portal.naletistelevne.cz" target="_blank" rel="noopener noreferrer"
                  className="border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white font-semibold text-xs px-3 py-1.5 rounded transition-colors cursor-pointer">
                  Přihlásit se
                </a>
                <a href="#rezervace"
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-xs px-3 py-1.5 rounded transition-colors cursor-pointer">
                  + Rezervovat
                </a>
              </div>
            </div>
          </div>

          {/* Mobile button */}
          <button className="md:hidden ml-auto flex items-center p-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-3 text-sm font-medium shadow-lg">
          <a href="/" onClick={() => setMenuOpen(false)} className="text-[#F97316] cursor-pointer">Úvod</a>
          <div className="text-[#0F172A] font-semibold">Služby</div>
          {services.map((s) => (
            <a key={s.name} href={s.href} onClick={() => setMenuOpen(false)} className="pl-3 text-[#475569] cursor-pointer">{s.name}</a>
          ))}
          <a href="#jak-to-funguje" onClick={() => setMenuOpen(false)} className="cursor-pointer">Jak to funguje</a>
          <a href="#pro-firmy" onClick={() => setMenuOpen(false)} className="cursor-pointer">Pro firmy</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="cursor-pointer">FAQ</a>
          <a href="tel:+420606079179" className="text-[#475569] cursor-pointer flex items-center gap-2"><Phone size={13} /> +420 606 079 179</a>
          <div className="flex gap-2 pt-2">
            <a href="https://portal.naletistelevne.cz" target="_blank" rel="noopener noreferrer" className="flex-1 text-center border border-[#1E3A8A] text-[#1E3A8A] font-semibold py-2 rounded-lg cursor-pointer">Přihlásit se</a>
            <a href="#rezervace" onClick={() => setMenuOpen(false)} className="flex-1 text-center bg-[#F97316] text-white font-semibold py-2 rounded-lg cursor-pointer">Rezervovat</a>
          </div>
        </div>
      )}
    </header>
  );
}
