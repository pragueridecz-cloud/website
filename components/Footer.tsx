'use client';
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#0F172A", color: "#fff" }}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">

          {/* Brand – TPC logo */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src="/logo-tpc.png" alt="Transfer Prague Car" style={{ height: "40px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
            </div>
            <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
              Spolehlivá doprava na/z letiště Praha a do celé střední Evropy. Pevná cena, profesionální řidiči, sledování letu.
            </p>
            {/* Social ikonky */}
            <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
              {/* Facebook */}
              <a href="https://facebook.com/naletistelevne" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="social-icon"
                style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all .2s", flexShrink: 0 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1877F2"; (e.currentTarget as HTMLElement).style.borderColor = "#1877F2"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.08)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.12)"; }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/naletistelevne" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all .2s", flexShrink: 0 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"; (e.currentTarget as HTMLElement).style.background = "#E1306C"; (e.currentTarget as HTMLElement).style.borderColor = "#E1306C"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.08)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.12)"; }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/company/transfer-prague-car" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all .2s", flexShrink: 0 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0A66C2"; (e.currentTarget as HTMLElement).style.borderColor = "#0A66C2"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.08)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.12)"; }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Služby */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: "16px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#cbd5e1" }}>Služby</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "Letištní přeprava", href: "/letistni-preprava" },
                { label: "Meziměstská doprava", href: "/mezimestska-doprava" },
                { label: "Vlakové a autobusové nádraží", href: "/vlakove-autobusove-nadrazi" },
                { label: "Hodinový pronájem", href: "/hodinovy-pronajem" },
                { label: "Pro firmy", href: "/preprava-pro-firmy" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} style={{ color: "#94a3b8", fontSize: "13px", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: "16px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#cbd5e1" }}>Informace</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "Jak to funguje", href: "#jak-to-funguje" },
                { label: "Časté otázky", href: "#faq" },
                { label: "Obchodní podmínky", href: "/obchodni-podminky" },
                { label: "Ochrana osobních údajů", href: "/ochrana-osobnich-udaju" },
                { label: "PragueRide.com (EN)", href: "https://www.pragueride.com" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} style={{ color: "#94a3b8", fontSize: "13px", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: "16px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#cbd5e1" }}>Kontakt</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <a href="tel:+420606079179" style={{ color: "#94a3b8", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Phone size={13} /> +420 606 079 179
                </a>
              </li>
              <li>
                <a href="mailto:info@naletistelevne.cz" style={{ color: "#94a3b8", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Mail size={13} /> info@naletistelevne.cz
                </a>
              </li>
              <li style={{ color: "#94a3b8", fontSize: "13px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <MapPin size={13} style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>Sochařská 2, 170 00 Praha 7</span>
              </li>
              <li style={{ color: "#64748b", fontSize: "11px", marginTop: "4px" }}>Dispečink 24/7, 365 dní</li>
            </ul>
          </div>
        </div>

        {/* Spodní lišta */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="/logo-tpc.png" alt="Transfer Prague Car" style={{ height: "28px", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.6 }} />
              <div>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "#94a3b8" }}>transfer-prague-car s.r.o.</div>
                <div style={{ fontSize: "11px", color: "#475569" }}>IČO: 25706993 · Sochařská 2, 170 00 Praha</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              {["Obchodní podmínky", "GDPR"].map((l) => (
                <a key={l} href={`/${l.toLowerCase().replace(/ /g, "-")}`}
                  style={{ fontSize: "11px", color: "#475569", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#94a3b8")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#475569")}>
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div style={{ fontSize: "11px", color: "#334155" }}>
            © {new Date().getFullYear()} naletistelevne.cz — provozuje transfer-prague-car s.r.o. Všechna práva vyhrazena.
          </div>
        </div>
      </div>
    </footer>
  );
}
