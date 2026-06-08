"use client";
import { useState } from "react";

const WHY_US = [
  { icon: "ti-clock-24", text: "Dostupní 24/7" },
  { icon: "ti-shield-check", text: "Fixní cena předem" },
  { icon: "ti-user-check", text: "Profesionální řidiči" },
  { icon: "ti-credit-card", text: "Platba kartou nebo hotově" },
  { icon: "ti-plane", text: "Čekáme u výstupu" },
  { icon: "ti-map-2", text: "Celá ČR a střední Evropa" },
  { icon: "ti-baby-carriage", text: "Dětské sedačky" },
  { icon: "ti-receipt", text: "Faktura na firmu" },
];

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [openCount, setOpenCount] = useState(0);

  return (
    <section id="rezervace" className="bg-[#1E3A8A] px-4 pt-24 pb-10 md:pb-16">
      <div className="max-w-5xl mx-auto">

        {/* Obsah – skryje se po kliknutí na rezervovat */}
        {!open && (
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">

            {/* Levý sloupec – text */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(249,115,22,.2)', color: '#F97316', border: '1px solid rgba(249,115,22,.3)' }}>
                <i className="ti ti-map-2" aria-hidden="true"></i>
                Celá ČR · Střední Evropa · 24/7
              </div>

              <h1 style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(32px, 5.5vw, 56px)', margin: '0 0 16px' }}>
                Levná přeprava<br />
                <span style={{ color: '#F97316' }}>na letiště Praha</span>
              </h1>

              <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 'clamp(14px, 2vw, 17px)', lineHeight: 1.7, margin: '0 0 28px', maxWidth: '480px' }}>
                Spolehlivý taxi transfer po celé České republice a střední Evropě. Fixní ceny, žádné příplatky, platba kartou nebo hotově.
              </p>

              {/* CTA */}
              <button
                onClick={() => { setOpen(true); setOpenCount(c => c + 1); }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: '#F97316', color: '#fff', border: 'none', cursor: 'pointer',
                  fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 700, fontFamily: 'Poppins, sans-serif',
                  padding: '14px 32px', borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(249,115,22,.4)', marginBottom: '32px',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#EA580C'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#F97316'; }}
              >
                <i className="ti ti-calendar-plus" style={{ fontSize: 20 }} aria-hidden="true"></i>
                Rezervovat jízdu
              </button>

              {/* Proč si vybrat nás */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {WHY_US.map(item => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(249,115,22,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={`ti ${item.icon}`} style={{ fontSize: 14, color: '#F97316' }} aria-hidden="true"></i>
                    </div>
                    <span style={{ color: 'rgba(255,255,255,.85)', fontSize: '13px', fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pravý sloupec – cena */}
            <div className="md:w-72 flex-shrink-0">
              <div style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '8px' }}>Ceny již od</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '48px', fontWeight: 900, color: '#F97316', lineHeight: 1 }}>790 Kč</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.6)', marginTop: '6px', marginBottom: '20px' }}>Praha centrum → Letiště Václava Havla</div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: '16px' }}>
                  {[
                    ['Praha → Letiště', '790 Kč'],
                    ['Praha → Brno', 'od 2 500 Kč'],
                    ['Praha → Vídeň', 'od 4 500 Kč'],
                    ['Praha → Berlín', 'od 8 900 Kč'],
                  ].map(([route, price]) => (
                    <div key={route} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,.06)', fontSize: '13px' }}>
                      <span style={{ color: 'rgba(255,255,255,.7)' }}>{route}</span>
                      <span style={{ color: '#fff', fontWeight: 700 }}>{price}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => { setOpen(true); setOpenCount(c => c + 1); }}
                  style={{ width: '100%', marginTop: '16px', padding: '11px', background: '#F97316', color: '#fff', border: 'none', borderRadius: '8px', fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#EA580C'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#F97316'; }}
                >
                  Spočítat cenu →
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Widget – zobrazí se, vše ostatní zmizí */}
        {open && (
          <div className="w-full max-w-lg md:max-w-xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 700, margin: 0 }}>Rezervovat jízdu</h2>
              <button onClick={() => setOpen(false)}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,.7)', background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', borderRadius: '8px', padding: '7px 14px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                <i className="ti ti-arrow-left" style={{ fontSize: 14 }} aria-hidden="true"></i>
                Zpět
              </button>
            </div>
            <iframe
              src="https://taxisaas-widget.vercel.app/widget.html"
              width="100%"
              height="680"
              frameBorder="0"
              key={openCount}
              title="Rezervační formulář"
              className="w-full block rounded-xl shadow-2xl"
              scrolling="no"
              style={{ background: "#1E3A8A" }}
            />
          </div>
        )}

      </div>
    </section>
  );
}
