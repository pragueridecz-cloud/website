import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Ochrana osobních údajů (GDPR) | Transfer Prague Car s.r.o.",
  description: "Zásady ochrany osobních údajů společnosti Transfer Prague Car s.r.o. Jak zpracováváme vaše data, jaká máte práva a jak nás kontaktovat.",
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

const Ul = ({ items }: { items: (string | React.ReactNode)[] }) => (
  <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
    {items.map((item, i) => (
      <li key={i} style={{ marginBottom: "8px" }}>{item}</li>
    ))}
  </ul>
)

const RightBox = ({ icon, title, text }: { icon: string; title: string; text: string }) => (
  <div style={{ background: "#f0f4ff", border: "1px solid #dbeafe", borderRadius: "10px", padding: "16px 20px", marginBottom: "10px", display: "flex", gap: "14px" }}>
    <div style={{ fontSize: "24px", flexShrink: 0 }}>{icon}</div>
    <div>
      <div style={{ fontWeight: 700, color: "#1E3A8A", fontSize: "14px", marginBottom: "4px" }}>{title}</div>
      <div style={{ color: "#475569", fontSize: "13px", lineHeight: 1.6 }}>{text}</div>
    </div>
  </div>
)

export default function OchranaOsobnichUdaju() {
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
            Ochrana osobních údajů
          </h1>
          <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "16px" }} />
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px" }}>
            Platné od {updated} · Nařízení GDPR (EU) 2016/679
          </p>
        </div>
      </div>

      {/* Obsah */}
      <div style={{ background: "#f8fafc", padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", background: "#fff", borderRadius: "16px", padding: "clamp(24px,5vw,56px)", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>

          <Section title="1. Správce osobních údajů">
            <P>Správcem vašich osobních údajů je:</P>
            <div style={{ background: "#f0f4ff", border: "1px solid #dbeafe", borderRadius: "10px", padding: "16px 20px", marginBottom: "12px" }}>
              <strong>Transfer Prague Car s.r.o.</strong><br />
              Sídlo: [doplňte sídlo]<br />
              IČO: [doplňte IČO]<br />
              E-mail: <a href="mailto:info@naletistelevne.cz" style={{ color: "#1E3A8A" }}>info@naletistelevne.cz</a><br />
              Telefon: <a href="tel:+420777123456" style={{ color: "#1E3A8A" }}>+420 777 123 456</a>
            </div>
            <P>Tato stránka popisuje, jaké osobní údaje shromažďujeme, k jakým účelům je používáme a jaká máte v souvislosti s jejich zpracováním práva.</P>
          </Section>

          <Section title="2. Jaké osobní údaje zpracováváme">
            <P><strong>Při rezervaci přepravy:</strong></P>
            <Ul items={[
              "Jméno a příjmení",
              "E-mailová adresa",
              "Telefonní číslo",
              "Místo vyzvednutí a cíl cesty",
              "Datum a čas přepravy",
              "Číslo letu (pokud je relevantní)",
              "Počet cestujících a zavazadel",
              "Zvláštní požadavky (dětská sedačka, nadměrná zavazadla)",
            ]} />
            <P><strong>Při platbě kartou:</strong></P>
            <Ul items={[
              "Platební údaje jsou zpracovávány výhradně naším poskytovatelem platebních služeb – my samotní číslo karty ani CVC kód nikdy nevidíme ani neuchováváme",
              "Zpracovatel plateb sídlí v USA a zpracování probíhá na základě standardních smluvních doložek schválených Evropskou komisí",
            ]} />
            <P><strong>Při návštěvě webu:</strong></P>
            <Ul items={[
              "IP adresa a technické informace o zařízení (prostřednictvím analytických nástrojů)",
              "Cookies – viz naše Zásady cookies",
            ]} />
          </Section>

          <Section title="3. Účely a právní základ zpracování">
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "12px", fontSize: "14px" }}>
                <thead>
                  <tr style={{ background: "#1E3A8A" }}>
                    <th style={{ padding: "11px 14px", textAlign: "left" as const, color: "#fff", fontWeight: 700 }}>Účel</th>
                    <th style={{ padding: "11px 14px", textAlign: "left" as const, color: "#fff", fontWeight: 700 }}>Právní základ</th>
                    <th style={{ padding: "11px 14px", textAlign: "left" as const, color: "#fff", fontWeight: 700 }}>Doba uchování</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Zajištění přepravy (realizace smlouvy)", "Plnění smlouvy (čl. 6 odst. 1 písm. b)", "Po dobu trvání smluvního vztahu + 1 rok"],
                    ["Zasílání potvrzení a komunikace", "Plnění smlouvy (čl. 6 odst. 1 písm. b)", "Po dobu trvání smluvního vztahu"],
                    ["Vystavení daňových dokladů", "Právní povinnost (čl. 6 odst. 1 písm. c)", "10 let (dle daňových předpisů)"],
                    ["Řešení reklamací a sporů", "Oprávněný zájem (čl. 6 odst. 1 písm. f)", "3 roky od skončení přepravy"],
                    ["Zasílání obchodních sdělení", "Souhlas (čl. 6 odst. 1 písm. a)", "Do odvolání souhlasu"],
                    ["Bezpečnost a prevence podvodů", "Oprávněný zájem (čl. 6 odst. 1 písm. f)", "1 rok"],
                  ].map(([ucel, zaklad, doba], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#f8fafc" : "#fff" }}>
                      <td style={{ padding: "10px 14px", borderBottom: "1px solid #e5e7eb" }}>{ucel}</td>
                      <td style={{ padding: "10px 14px", borderBottom: "1px solid #e5e7eb", color: "#475569" }}>{zaklad}</td>
                      <td style={{ padding: "10px 14px", borderBottom: "1px solid #e5e7eb", color: "#475569" }}>{doba}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. Příjemci osobních údajů">
            <P>Vaše osobní údaje sdílíme pouze s důvěryhodnými partnery, kteří jsou vázáni zpracovatelskými smlouvami a jsou povinni vaše data chránit:</P>
            <Ul items={[
              <><strong>Řidiči a partnerští dopravci</strong> – jméno, telefon a trasa jízdy pro účely realizace přepravy</>,
              <><strong>Poskytovatel platebních služeb</strong> – zpracování online plateb kartou (server v USA, ochrana dle standardních smluvních doložek EU)</>,
              <><strong>Poskytovatel e-mailových a notifikačních služeb</strong> – odesílání potvrzovacích e-mailů a SMS notifikací (server v EU/USA)</>,
              <><strong>Cloudová databáze</strong> – bezpečné uložení rezervací a zákaznických dat (infrastruktura v EU)</>,
              <><strong>Mapové a geolokační služby</strong> – výpočet trasy a vzdálenosti (Google Maps, předávání pouze adresních dat)</>,
              <><strong>Orgány veřejné moci</strong> – pouze pokud to ukládá zákon (např. finanční správa, soudy)</>,
            ]} />
            <P>Žádné osobní údaje neprodáváme třetím stranám ani je nepředáváme pro marketingové účely bez vašeho výslovného souhlasu.</P>
          </Section>

          <Section title="5. Vaše práva">
            <P>Jako subjekt údajů máte tato práva, která můžete uplatnit kdykoliv kontaktováním správce:</P>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px", marginBottom: "16px" }}>
              <RightBox icon="👁️" title="Právo na přístup" text="Máte právo vědět, jaké údaje o vás zpracováváme a získat jejich kopii." />
              <RightBox icon="✏️" title="Právo na opravu" text="Pokud jsou vaše údaje nesprávné nebo neúplné, máte právo na jejich opravu." />
              <RightBox icon="🗑️" title="Právo na výmaz" text="Za určitých podmínek máte právo požádat o smazání vašich osobních údajů." />
              <RightBox icon="⏸️" title="Právo na omezení" text="Můžete požádat o omezení zpracování, například pokud zpochybňujete přesnost údajů." />
              <RightBox icon="📦" title="Právo na přenositelnost" text="Údaje zpracovávané automatizovaně na základě souhlasu nebo smlouvy vám předáme ve strojově čitelném formátu." />
              <RightBox icon="🚫" title="Právo vznést námitku" text="Proti zpracování na základě oprávněného zájmu můžete kdykoliv vznést námitku." />
            </div>
            <P>Svá práva uplatněte e-mailem na <a href="mailto:info@naletistelevne.cz" style={{ color: "#1E3A8A" }}>info@naletistelevne.cz</a>. Na vaši žádost odpovíme do <strong>30 dnů</strong>.</P>
            <P>Pokud se domníváte, že zpracováváme vaše údaje v rozporu s GDPR, máte právo podat stížnost u Úřadu pro ochranu osobních údajů (<a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" style={{ color: "#1E3A8A" }}>www.uoou.cz</a>).</P>
          </Section>

          <Section title="6. Zabezpečení údajů">
            <P>Přijímáme technická a organizační opatření k ochraně vašich osobních údajů před neoprávněným přístupem, ztrátou nebo zneužitím:</P>
            <Ul items={[
              "Šifrování přenosu dat (HTTPS/TLS)",
              "Šifrování dat v databázi",
              "Přístup k datům pouze pro oprávněné osoby na základě potřeby znát",
              "Pravidelné bezpečnostní audity a aktualizace systémů",
              "Smluvní závazky zpracovatelů k ochraně dat",
            ]} />
          </Section>

          <Section title="7. Cookies">
            <P>Náš web používá cookies. Podrobné informace o tom, jaké cookies používáme a jak je lze spravovat, naleznete v našich <a href="/zasady-zpracovani-cookies" style={{ color: "#1E3A8A" }}>Zásadách zpracování cookies</a>.</P>
          </Section>

          <Section title="8. Změny těchto zásad">
            <P>Tyto zásady ochrany osobních údajů mohou být průběžně aktualizovány. O podstatných změnách vás budeme informovat e-mailem nebo upozorněním na webu. Datum poslední aktualizace je uvedeno v záhlaví tohoto dokumentu.</P>
          </Section>

          {/* Kontaktní box */}
          <div style={{ background: "#1E3A8A", borderRadius: "12px", padding: "24px 28px", marginTop: "40px", display: "flex", flexWrap: "wrap" as const, gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>Chcete uplatnit svá práva nebo se zeptat?</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px" }}>Napište nám – odpovíme do 30 dnů.</div>
            </div>
            <a href="mailto:info@naletistelevne.cz" style={{ background: "#F97316", color: "#fff", textDecoration: "none", padding: "12px 24px", borderRadius: "10px", fontWeight: 700, fontSize: "14px", whiteSpace: "nowrap" as const }}>
              info@naletistelevne.cz
            </a>
          </div>

          {/* Navigace mezi dokumenty */}
          <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" as const }}>
            <a href="/obchodni-podminky" style={{ color: "#1E3A8A", textDecoration: "none", fontSize: "13px", padding: "8px 16px", border: "1px solid #dbeafe", borderRadius: "8px", background: "#f0f4ff" }}>
              ← Obchodní podmínky
            </a>
            <a href="/zasady-zpracovani-cookies" style={{ color: "#1E3A8A", textDecoration: "none", fontSize: "13px", padding: "8px 16px", border: "1px solid #dbeafe", borderRadius: "8px", background: "#f0f4ff" }}>
              Zásady cookies →
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
