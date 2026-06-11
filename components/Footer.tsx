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
              <img src="/logo-tpc.png" alt="Transfer Prague Car" style={{ height: "40px", objectFit: "contain" }} />
            </div>
            <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
              Spolehlivá doprava na letiště Praha a do celé střední Evropy. Pevná cena, profesionální řidiči, sledování letu.
            </p>
            {/* Social ikonky */}
            <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
              {[
                { href: "https://facebook.com/naletistelevne", label: "Facebook", icon: "ti-brand-facebook" },
                { href: "https://instagram.com/naletistelevne", label: "Instagram", icon: "ti-brand-instagram" },
                { href: "https://linkedin.com/company/transfer-prague-car", label: "LinkedIn", icon: "ti-brand-linkedin" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", textDecoration: "none", transition: "background .15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(249,115,22,.2)"; (e.currentTarget as HTMLElement).style.color = "#F97316"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.08)"; (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}>
                  <i className={`ti ${s.icon}`} style={{ fontSize: 17 }} aria-hidden="true"></i>
                </a>
              ))}
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
              <img src="/logo-tpc.png" alt="Transfer Prague Car" style={{ height: "28px", objectFit: "contain", opacity: 0.7 }} />
              <div>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "#94a3b8" }}>Transfer Prague Car s.r.o.</div>
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
            © {new Date().getFullYear()} NaLetistelevne.cz — provozuje Transfer Prague Car s.r.o. Všechna práva vyhrazena.
          </div>
        </div>
      </div>
    </footer>
  );
}
