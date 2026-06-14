import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Obchodní podmínky | transfer-prague-car s.r.o.",
  description: "Obchodní podmínky společnosti transfer-prague-car s.r.o. provozující službu www.naletistelevne.cz. Přepravní podmínky, storno podmínky, reklamace.",
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

const Ul = ({ items }: { items: string[] }) => (
  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 12px" }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px", fontSize: "15px", color: "#374151", lineHeight: 1.6 }}>
        <i className="ti ti-point-filled" style={{ color: "#F97316", fontSize: "10px", marginTop: "6px", flexShrink: 0 }} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

export default function ObchodniPodminky() {
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
            Obchodní podmínky
          </h1>
          <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "16px" }} />
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px" }}>
            Platné od {updated} · transfer-prague-car s.r.o.
          </p>
        </div>
      </div>

      {/* Obsah */}
      <div style={{ background: "#f8fafc", padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", background: "#fff", borderRadius: "16px", padding: "clamp(24px,5vw,56px)", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>

          <Section title="1. Provozovatel a identifikační údaje">
            <P>Provozovatelem přepravní platformy <strong>www.naletistelevne.cz</strong> (dostupné na adrese <a href="https://www.naletistelevne.cz" style={{ color: "#1E3A8A" }}>naletistelevne.cz</a>) je:</P>
            <div style={{ background: "#f0f4ff", border: "1px solid #dbeafe", borderRadius: "10px", padding: "16px 20px", marginBottom: "12px" }}>
              <strong>transfer-prague-car s.r.o.</strong><br />
              Sídlo: Sochařská 333/2, 170 00 Praha, Česká republika<br />
              IČO: 25706993<br />
              DIČ: CZ25706993<br />
              Zapsáno v obchodním rejstříku vedeném Městským soudem v Praze<br />
              E-mail: <a href="mailto:info@naletistelevne.cz" style={{ color: "#1E3A8A" }}>info@naletistelevne.cz</a><br />
              Telefon: <a href="tel:+420606079179" style={{ color: "#1E3A8A" }}>+420 606 079 179</a>
            </div>
            <P>Tyto obchodní podmínky upravují vztahy mezi provozovatelem a zákazníkem při objednávání a poskytování přepravních služeb.</P>
          </Section>

          <Section title="2. Vymezení pojmů">
            <Ul items={[
              "Provozovatel – transfer-prague-car s.r.o., provozovatel přepravní platformy www.naletistelevne.cz",
              "Zákazník – fyzická nebo právnická osoba, která objednává přepravní službu",
              "Řidič – smluvní partner provozovatele zajišťující fyzickou přepravu",
              "Rezervace – závazná objednávka přepravy vytvoření prostřednictvím rezervačního formuláře",
              "Pevná cena – cena sdělená zákazníkovi při dokončení rezervace, která se nemění (není-li dále uvedeno jinak)",
            ]} />
          </Section>

          <Section title="3. Rezervace a uzavření smlouvy">
            <P>Přepravní smlouva je uzavřena okamžikem, kdy zákazník dokončí objednávku prostřednictvím rezervačního formuláře a obdrží potvrzovací e-mail na adresu uvedenou při rezervaci.</P>
            <P>Zákazník je povinen uvést správné a úplné informace – místo vyzvednutí, cíl cesty, datum a čas, počet cestujících a počet zavazadel. Provozovatel neodpovídá za škody vzniklé z důvodu nesprávně zadaných údajů.</P>
            <P>Rezervaci lze provést:</P>
            <Ul items={[
              "Online přes rezervační formulář na naletistelevne.cz",
              "Telefonicky na +420 606 079 179",
              "E-mailem na info@naletistelevne.cz",
            ]} />
          </Section>

          <Section title="4. Ceny a platební podmínky">
            <P>Ceny jsou uváděny v českých korunách (Kč) včetně DPH. Zobrazená cena je <strong>pevná</strong> a zahrnuje veškeré poplatky spojené s přepravou (dálniční poplatky, palivo, parkování u terminálů).</P>
            <P>Cena <strong>nezahrnuje</strong>: volitelné příplatky (lyže, kola, dětské sedačky), pokud nebyly součástí objednávky.</P>
            <P>Možné způsoby platby:</P>
            <Ul items={[
              "Platba kartou online předem (Visa, Mastercard, Apple Pay, Google Pay) – sleva 10 %",
              "Platba v hotovosti řidiči při nastoupení do vozidla",
              "Bankovní převod (pouze pro firemní zákazníky na základě faktury)",
            ]} />
            <P>Online platby jsou zpracovávány prostřednictvím platební brány <strong>Stripe</strong>. Provozovatel neuchovává čísla platebních karet.</P>
          </Section>

          <Section title="5. Sledování letu a zpoždění">
            <P>Pro přepravy navazující na letecký spoj provozovatel automaticky sleduje aktuální stav letu. V případě zpoždění příjezdu nebo odletu bude čas vyzvednutí automaticky upraven.</P>
            <P>Za zpoždění způsobené leteckou společností, povětrnostními podmínkami nebo vyšší mocí provozovatel <strong>neúčtuje žádný příplatek</strong>.</P>
            <P>Zákazník je povinen uvést správné číslo letu v případě, že zpoždění letového spojení má být zohledněno v době vyzvednutí.</P>
          </Section>

          <Section title="6. Storno podmínky">
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}>
                <thead>
                  <tr style={{ background: "#1E3A8A" }}>
                    <th style={{ padding: "12px 16px", textAlign: "left" as const, color: "#fff", fontWeight: 700, fontSize: "13px" }}>Čas před jízdou</th>
                    <th style={{ padding: "12px 16px", textAlign: "left" as const, color: "#fff", fontWeight: 700, fontSize: "13px" }}>Storno poplatek</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["více než 24 hodin", "Zdarma – plná refundace"],
                    ["12–24 hodin", "50 % z ceny jízdy"],
                    ["méně než 12 hodin", "100 % z ceny jízdy (bez refundace)"],
                    ["No-show (řidič čeká a zákazník se nedostaví)", "100 % z ceny jízdy"],
                  ].map(([cas, poplatek], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#f8fafc" : "#fff" }}>
                      <td style={{ padding: "12px 16px", fontSize: "14px", color: "#374151", borderBottom: "1px solid #e5e7eb" }}>{cas}</td>
                      <td style={{ padding: "12px 16px", fontSize: "14px", color: i === 0 ? "#10b981" : "#ef4444", fontWeight: 600, borderBottom: "1px solid #e5e7eb" }}>{poplatek}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <P>Storno lze provést e-mailem na <a href="mailto:info@naletistelevne.cz" style={{ color: "#1E3A8A" }}>info@naletistelevne.cz</a> nebo telefonicky. Rozhodující je čas doručení žádosti o storno provozovateli.</P>
          </Section>

          <Section title="7. Povinnosti zákazníka">
            <Ul items={[
              "Být připraven na dohodnutém místě vyzvednutí v stanovený čas",
              "Mít funkční telefonní číslo, na kterém je dostupný v den přepravy",
              "Informovat provozovatele o případných zvláštních požadavcích (dětská sedačka, invalidní vozík, nadměrná zavazadla) předem",
              "Nepřekračovat kapacitu vozidla (počet osob a zavazadel)",
              "Chovat se ohleduplně vůči řidiči a vozidlu – kouření, konzumace alkoholu a jídla ve vozidle je zakázána (nevztahuje se na vodu)",
            ]} />
          </Section>

          <Section title="8. Odpovědnost provozovatele">
            <P>Provozovatel odpovídá za škody způsobené zákazníkovi v přímé souvislosti s poskytnutou přepravní službou, zejména za:</P>
            <Ul items={[
              "Nedodání vozidla v dohodnutém čase (bez objektivních důvodů)",
              "Poškození zavazadel přepravovaných ve vozidle prokazatelně zaviněné řidičem",
            ]} />
            <P>Provozovatel <strong>neodpovídá</strong> za:</P>
            <Ul items={[
              "Zpoždění způsobené dopravními nehodami, neprůjezdností komunikací, uzávěrkami nebo vyšší mocí",
              "Škody vzniklé z důvodu nesprávně zadaných údajů zákazníkem",
              "Zmeškaný let nebo spoj v případě, kdy zákazník nesplnil povinnost být připraven v čas",
              "Cenné předměty ponechané ve vozidle",
            ]} />
          </Section>

          <Section title="9. Reklamace">
            <P>Zákazník má právo podat reklamaci do <strong>30 dnů</strong> od uskutečnění jízdy. Reklamaci lze uplatnit:</P>
            <Ul items={[
              "E-mailem: info@naletistelevne.cz",
              "Telefonicky: +420 606 079 179",
            ]} />
            <P>Provozovatel se zavazuje reklamaci vyřídit do <strong>14 pracovních dnů</strong> od jejího obdržení.</P>
            <P>Zákazník, který je spotřebitelem, má právo na mimosoudní řešení spotřebitelského sporu prostřednictvím České obchodní inspekce (www.coi.cz).</P>
          </Section>

          <Section title="10. Ochrana osobních údajů">
            <P>Provozovatel zpracovává osobní údaje zákazníků v souladu s nařízením GDPR a zákonem č. 110/2019 Sb. Podrobné informace o zpracování osobních údajů jsou dostupné v dokumentu <a href="/ochrana-osobnich-udaju" style={{ color: "#1E3A8A" }}>Ochrana osobních údajů</a>.</P>
          </Section>

          <Section title="11. Závěrečná ustanovení">
            <P>Tyto obchodní podmínky jsou platné a účinné od {updated}. Provozovatel si vyhrazuje právo tyto podmínky jednostranně měnit. O změnách bude zákazník informován e-mailem nebo zveřejněním nové verze na webových stránkách.</P>
            <P>Tyto obchodní podmínky a veškeré právní vztahy z nich vyplývající se řídí právním řádem České republiky, zejména zákonem č. 89/2012 Sb. (občanský zákoník).</P>
            <P>V případě sporu jsou příslušné soudy České republiky.</P>
          </Section>

          {/* Kontaktní box */}
          <div style={{ background: "#1E3A8A", borderRadius: "12px", padding: "24px 28px", marginTop: "40px", display: "flex", flexWrap: "wrap" as const, gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>Máte otázky k podmínkám?</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px" }}>Napište nám nebo zavolejte – rádi vše vysvětlíme.</div>
            </div>
            <a href="mailto:info@naletistelevne.cz" style={{ background: "#F97316", color: "#fff", textDecoration: "none", padding: "12px 24px", borderRadius: "10px", fontWeight: 700, fontSize: "14px", whiteSpace: "nowrap" as const }}>
              info@naletistelevne.cz
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
