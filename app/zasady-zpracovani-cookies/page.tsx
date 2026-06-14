import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Zásady zpracování cookies | Transfer Prague Car s.r.o.",
  description: "Informace o cookies používaných na webu naletistelevne.cz – jaké cookies používáme, k čemu slouží a jak je spravovat.",
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: "40px" }}>
    <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "20px", color: "#1E3A8A", marginBottom: "16px", paddingBottom: "10px", borderBottom: "2px solid #F97316", display: "inline-block" }}>
      {title}
    </h2>
    <div style={{ color: "#374151", fontSize: "15px", lineHeight: 1.8 }}>
      {children}
    </div>
  </div>
)

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ marginBottom: "12px" }}>{children}</p>
)

const CookieRow = ({ name, type, purpose, duration, essential }: {
  name: string; type: string; purpose: string; duration: string; essential: boolean
}) => (
  <tr>
    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e5e7eb", fontFamily: "monospace", fontSize: "13px", color: "#1E3A8A" }}>{name}</td>
    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e5e7eb" }}>
      <span style={{ fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "10px", background: essential ? "#dcfce7" : "#fef3c7", color: essential ? "#166534" : "#92400e" }}>
        {type}
      </span>
    </td>
    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e5e7eb", fontSize: "13px", color: "#475569" }}>{purpose}</td>
    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e5e7eb", fontSize: "13px", color: "#475569", whiteSpace: "nowrap" as const }}>{duration}</td>
  </tr>
)

export default function ZasadyCookies() {
  const updated = "1. 6. 2025"

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div style={{ background: "#1E3A8A", padding: "100px 24px 50px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "32px", height: "2px", background: "#F97316" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase" as const, letterSpacing: "1.5px" }}>
              Právní dokumenty
            </span>
          </div>
          <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,44px)", color: "#fff", margin: "0 0 12px", lineHeight: 1.15 }}>
            Zásady zpracování cookies
          </h1>
          <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "16px" }} />
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px" }}>
            Platné od {updated} · Transfer Prague Car s.r.o.
          </p>
        </div>
      </div>

      {/* Obsah */}
      <div style={{ background: "#f8fafc", padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", background: "#fff", borderRadius: "16px", padding: "clamp(24px,5vw,56px)", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>

          <Section title="1. Co jsou cookies">
            <P>Cookies jsou malé textové soubory, které se ukládají do vašeho zařízení (počítač, tablet, telefon) při návštěvě webových stránek. Slouží k tomu, aby si web zapamatoval vaše preference a chování, čímž zlepšuje váš uživatelský zážitek.</P>
            <P>Cookies samy o sobě neobsahují žádné osobní identifikační údaje a nemohou spouštět programy ani přenášet viry.</P>
          </Section>

          <Section title="2. Jaké cookies používáme">

            {/* Nezbytné */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span style={{ fontSize: "20px" }}>🔒</span>
                <div>
                  <div style={{ fontWeight: 700, color: "#1E3A8A", fontSize: "15px" }}>Nezbytné cookies</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>Vždy aktivní – bez nich web nemůže fungovat. Souhlas se nevyžaduje.</div>
                </div>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                  <thead>
                    <tr style={{ background: "#f0f4ff" }}>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#1E3A8A", fontSize: "12px" }}>Název</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#1E3A8A", fontSize: "12px" }}>Typ</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#1E3A8A", fontSize: "12px" }}>Účel</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#1E3A8A", fontSize: "12px" }}>Platnost</th>
                    </tr>
                  </thead>
                  <tbody style={{ background: "#fff" }}>
                    <CookieRow name="sb-session" type="Nezbytné" purpose="Uchování přihlášení zákazníka do zákaznické zóny" duration="Session" essential={true} />
                    <CookieRow name="nll_currency" type="Nezbytné" purpose="Zapamatování vybrané měny v rezervačním formuláři" duration="30 dní" essential={true} />
                    <CookieRow name="nll_lang" type="Nezbytné" purpose="Zapamatování jazykové předvolby (CS/EN)" duration="30 dní" essential={true} />
                    <CookieRow name="NEXT_LOCALE" type="Nezbytné" purpose="Jazyková verze webu" duration="1 rok" essential={true} />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Funkční */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span style={{ fontSize: "20px" }}>⚙️</span>
                <div>
                  <div style={{ fontWeight: 700, color: "#1E3A8A", fontSize: "15px" }}>Funkční cookies</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>Zlepšují funkčnost webu. Lze odmítnout, ale některé funkce pak nemusí fungovat správně.</div>
                </div>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                  <thead>
                    <tr style={{ background: "#fefce8" }}>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#92400e", fontSize: "12px" }}>Název</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#92400e", fontSize: "12px" }}>Typ</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#92400e", fontSize: "12px" }}>Účel</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#92400e", fontSize: "12px" }}>Platnost</th>
                    </tr>
                  </thead>
                  <tbody style={{ background: "#fff" }}>
                    <CookieRow name="__gmaps_*" type="Funkční" purpose="Google Maps – zobrazení interaktivní mapy a výpočet trasy" duration="Session" essential={false} />
                    <CookieRow name="__stripe_*" type="Funkční" purpose="Platební brána – prevence podvodů a bezpečnost online plateb" duration="Session / 1 rok" essential={false} />
                    <CookieRow name="nll_booking_*" type="Funkční" purpose="Uchování rozpracované rezervace při zavření/otevření widgetu" duration="2 hodiny" essential={false} />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Analytické */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span style={{ fontSize: "20px" }}>📊</span>
                <div>
                  <div style={{ fontWeight: 700, color: "#1E3A8A", fontSize: "15px" }}>Analytické cookies</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>Pomáhají nám pochopit, jak návštěvníci web používají. Všechna data jsou anonymizovaná.</div>
                </div>
              </div>
              <p style={{ color: "#64748b", fontSize: "13px", marginBottom: "12px" }}>
                V současné době nepoužíváme žádné analytické cookies třetích stran. Pokud to v budoucnu změníme, tento dokument aktualizujeme a požádáme vás o souhlas.
              </p>
            </div>

          </Section>

          <Section title="3. Cookies třetích stran">
            <P>Některé cookies jsou nastavovány poskytovateli služeb třetích stran, které na webu využíváme. Tyto cookies se řídí zásadami ochrany soukromí daných společností:</P>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px", marginBottom: "12px" }}>
              {[
                { name: "Mapové služby (Google Maps)", purpose: "Zobrazení interaktivní mapy a výpočet vzdálenosti trasy", link: "https://policies.google.com/privacy" },
                { name: "Platební brána", purpose: "Bezpečné zpracování online plateb kartou, prevence podvodů", link: null },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "8px" }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "#1E3A8A", fontSize: "14px", marginBottom: "3px" }}>{item.name}</div>
                    <div style={{ fontSize: "13px", color: "#64748b" }}>{item.purpose}</div>
                  </div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "#1E3A8A", textDecoration: "none", padding: "5px 12px", border: "1px solid #dbeafe", borderRadius: "6px", whiteSpace: "nowrap" as const }}>
                      Zásady ochrany →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Section>

          <Section title="4. Jak spravovat cookies">
            <P>Cookies můžete spravovat nebo odmítnout přímo v nastavení vašeho prohlížeče. Upozorňujeme, že odmítnutí některých cookies může omezit funkčnost webu (např. načítání mapy nebo online platbu).</P>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px", marginBottom: "16px" }}>
              {[
                { browser: "Google Chrome", link: "https://support.google.com/chrome/answer/95647" },
                { browser: "Mozilla Firefox", link: "https://support.mozilla.org/cs/kb/povoleni-zakazani-cookies" },
                { browser: "Safari", link: "https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" },
                { browser: "Microsoft Edge", link: "https://support.microsoft.com/cs-cz/microsoft-edge/odstr%C3%A1n%C4%9Bn%C3%AD-soubor%C5%AF-cookie-v-prohlí%C5%BEe%C4%8Di-microsoft-edge" },
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 14px", background: "#f0f4ff", border: "1px solid #dbeafe", borderRadius: "8px", textDecoration: "none", color: "#1E3A8A", fontSize: "13px", fontWeight: 600 }}>
                  🌐 {item.browser}
                </a>
              ))}
            </div>
            <P>Pro mobilní zařízení nastavení cookies najdete v nastavení příslušného prohlížeče nebo operačního systému.</P>
          </Section>

          <Section title="5. Změny těchto zásad">
            <P>Tyto zásady zpracování cookies mohou být průběžně aktualizovány – například při přidání nových služeb na web. Datum poslední aktualizace je vždy uvedeno v záhlaví tohoto dokumentu.</P>
            <P>Při podstatných změnách vás upozorníme prostřednictvím banneru na webu.</P>
          </Section>

          {/* Kontaktní box */}
          <div style={{ background: "#1E3A8A", borderRadius: "12px", padding: "24px 28px", marginTop: "40px", display: "flex", flexWrap: "wrap" as const, gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>Otázky ohledně cookies?</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px" }}>Napište nám na info@naletistelevne.cz</div>
            </div>
            <a href="mailto:info@naletistelevne.cz" style={{ background: "#F97316", color: "#fff", textDecoration: "none", padding: "12px 24px", borderRadius: "10px", fontWeight: 700, fontSize: "14px", whiteSpace: "nowrap" as const }}>
              Kontaktovat nás
            </a>
          </div>

          {/* Navigace mezi dokumenty */}
          <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" as const }}>
            <a href="/ochrana-osobnich-udaju" style={{ color: "#1E3A8A", textDecoration: "none", fontSize: "13px", padding: "8px 16px", border: "1px solid #dbeafe", borderRadius: "8px", background: "#f0f4ff" }}>
              ← Ochrana osobních údajů
            </a>
            <a href="/obchodni-podminky" style={{ color: "#1E3A8A", textDecoration: "none", fontSize: "13px", padding: "8px 16px", border: "1px solid #dbeafe", borderRadius: "8px", background: "#f0f4ff" }}>
              Obchodní podmínky →
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
