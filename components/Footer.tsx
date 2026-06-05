import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NL</span>
              </div>
              <span className="font-bold text-lg">
                NaLetiště<span className="text-[#F97316]">Levně</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Spolehlivá doprava na letiště Praha. Pevná cena, profesionální řidiči, sledování letu.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">Služby</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#rezervace" className="hover:text-white transition-colors cursor-pointer">Doprava na letiště Praha</a></li>
              <li><a href="#vozovy-park" className="hover:text-white transition-colors cursor-pointer">Sedan od 790 Kč</a></li>
              <li><a href="#vozovy-park" className="hover:text-white transition-colors cursor-pointer">Minivan od 990 Kč</a></li>
              <li><a href="#pro-firmy" className="hover:text-white transition-colors cursor-pointer">Firemní doprava</a></li>
              <li><a href="#rezervace" className="hover:text-white transition-colors cursor-pointer">Mezinárodní transfery</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">Informace</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#jak-to-funguje" className="hover:text-white transition-colors cursor-pointer">Jak to funguje</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors cursor-pointer">Časté otázky</a></li>
              <li><a href="/obchodni-podminky" className="hover:text-white transition-colors cursor-pointer">Obchodní podmínky</a></li>
              <li><a href="/ochrana-osobnich-udaju" className="hover:text-white transition-colors cursor-pointer">Ochrana osobních údajů</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">Kontakt</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="tel:+420606079179" className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <Phone size={14} /> +420 606 079 179
                </a>
              </li>
              <li>
                <a href="mailto:info@naletistelevne.cz" className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <Mail size={14} /> info@naletistelevne.cz
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Letiště Václava Havla, Praha</span>
              </li>
              <li className="text-slate-500 text-xs mt-2">Dispečink: 24/7, 365 dní</li>
              <li className="flex gap-3 mt-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors cursor-pointer text-xs font-semibold">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors cursor-pointer text-xs font-semibold">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NaLetistelevne.cz — Všechna práva vyhrazena.</p>
          <div className="flex gap-4">
            <a href="https://www.pragueride.com" className="hover:text-slate-300 transition-colors cursor-pointer" target="_blank" rel="noopener noreferrer">
              PragueRide.com (English)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
