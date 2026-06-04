"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">NL</span>
          </div>
          <span className="font-bold text-[#1E3A8A] text-lg leading-tight">
            NaLetiště<span className="text-[#F97316]">Levně</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#0F172A]">
          <a href="#jak-to-funguje" className="hover:text-[#1E3A8A] transition-colors cursor-pointer">Jak to funguje</a>
          <a href="#vozovy-park" className="hover:text-[#1E3A8A] transition-colors cursor-pointer">Vozový park</a>
          <a href="#pro-firmy" className="hover:text-[#1E3A8A] transition-colors cursor-pointer">Pro firmy</a>
          <a href="#faq" className="hover:text-[#1E3A8A] transition-colors cursor-pointer">Časté otázky</a>
        </nav>

        {/* CTA + phone */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+420606079179"
            className="flex items-center gap-2 text-sm text-[#0F172A] hover:text-[#1E3A8A] transition-colors cursor-pointer"
          >
            <Phone size={16} />
            +420 606 079 179
          </a>
          <a
            href="#rezervace"
            className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Rezervovat
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm font-medium">
          <a href="#jak-to-funguje" onClick={() => setMenuOpen(false)} className="cursor-pointer">Jak to funguje</a>
          <a href="#vozovy-park" onClick={() => setMenuOpen(false)} className="cursor-pointer">Vozový park</a>
          <a href="#pro-firmy" onClick={() => setMenuOpen(false)} className="cursor-pointer">Pro firmy</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="cursor-pointer">Časté otázky</a>
          <a
            href="tel:+420606079179"
            className="flex items-center gap-2 text-[#1E3A8A] cursor-pointer"
          >
            <Phone size={16} /> +420 606 079 179
          </a>
          <a
            href="#rezervace"
            onClick={() => setMenuOpen(false)}
            className="bg-[#F97316] text-white font-semibold px-4 py-2 rounded-lg text-center cursor-pointer"
          >
            Rezervovat
          </a>
        </div>
      )}
    </header>
  );
}
