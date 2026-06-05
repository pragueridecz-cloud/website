"use client";
import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>

      {/* Top bar — kontakty */}
      <div className="bg-[#0F172A] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-end gap-6">
          <a href="tel:+420606079179" className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer">
            <Phone size={12} /> +420 606 079 179
          </a>
          <a href="mailto:info@naletistelevne.cz" className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer">
            <Mail size={12} /> info@naletistelevne.cz
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-6">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 cursor-pointer flex-shrink-0">
            <div className="w-8 h-8 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NL</span>
            </div>
            <span className="font-bold text-[#1E3A8A] text-lg leading-tight">
              NaLetiště<span className="text-[#F97316]">Levně</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            <a href="/" className="px-3 py-2 text-sm font-medium text-[#F97316] cursor-pointer">Úvod</a>

            {/* Služby dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#0F172A] hover:text-[#1E3A8A] transition-colors cursor-pointer">
                Služby <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
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

            <a href="#jak-to-funguje" className="px-3 py-2 text-sm font-medium text-[#0F172A] hover:text-[#1E3A8A] transition-colors cursor-pointer">Jak to funguje</a>
            <a href="#pro-firmy" className="px-3 py-2 text-sm font-medium text-[#0F172A] hover:text-[#1E3A8A] transition-colors cursor-pointer">Pro firmy</a>
            <a href="#faq" className="px-3 py-2 text-sm font-medium text-[#0F172A] hover:text-[#1E3A8A] transition-colors cursor-pointer">FAQ</a>
          </nav>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <a
              href="https://porta.naletistelevne.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Přihlásit se
            </a>
            <a
              href="#rezervace"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              + Rezervovat
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4 flex flex-col gap-3 text-sm font-medium shadow-lg">
          <a href="/" onClick={() => setMenuOpen(false)} className="text-[#F97316] cursor-pointer">Úvod</a>
          <div className="text-[#0F172A] font-semibold">Služby</div>
          {services.map((s) => (
            <a key={s.name} href={s.href} onClick={() => setMenuOpen(false)} className="pl-3 text-[#475569] cursor-pointer">{s.name}</a>
          ))}
          <a href="#jak-to-funguje" onClick={() => setMenuOpen(false)} className="cursor-pointer">Jak to funguje</a>
          <a href="#pro-firmy" onClick={() => setMenuOpen(false)} className="cursor-pointer">Pro firmy</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="cursor-pointer">FAQ</a>
          <div className="flex gap-2 pt-2">
            <a href="https://porta.naletistelevne.cz" target="_blank" rel="noopener noreferrer" className="flex-1 text-center border border-[#1E3A8A] text-[#1E3A8A] font-semibold py-2 rounded-lg cursor-pointer">Přihlásit se</a>
            <a href="#rezervace" onClick={() => setMenuOpen(false)} className="flex-1 text-center bg-[#F97316] text-white font-semibold py-2 rounded-lg cursor-pointer">Rezervovat</a>
          </div>
        </div>
      )}
    </header>
  );
}
