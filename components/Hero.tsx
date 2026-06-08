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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCount, setOpenCount] = useState(0);

  return (
    <section id="rezervace" className="bg-[#1E3A8A] px-4 pt-24 pb-10 md:pb-16">
      <div className="max-w-6xl mx-auto">

        {/* Desktop: levý text + pravý widget vedle sebe */}
        <div className="hidden md:flex items-start gap-12">

          {/* Levý sloupec */}
          <div className="flex-1 pt-4">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(249,115,22,.2)', color: '#F97316', border: '1px solid rgba(249,115,22,.3)' }}>
              <i className="ti ti-map-2" aria-hidden="true"></i>
              Celá ČR · Střední Evropa · 24/7
            </div>
            <h1 style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(32px, 4vw, 52px)', margin: '0 0 16px' }}>
              Levná přeprava<br />
              <span style={{ color: '#F97316' }}>na letiště Praha</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '16px', lineHeight: 1.7, margin: '0 0 28px', maxWidth: '460px' }}>
              Spolehlivý taxi transfer po celé České republice a střední Evropě. Fixní ceny, žádné příplatky.
            </p>
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

          {/* Pravý sloupec – widget vždy viditelný na desktopu */}
          <div className="flex-shrink-0 w-full max-w-md">
            <iframe
              src="https://taxisaas-widget.vercel.app/widget.html"
              width="100%"
              height="680"
              frameBorder="0"
              title="Rezervační formulář"
              className="w-full block rounded-xl shadow-2xl"
              scrolling="no"
              style={{ background: "#1E3A8A" }}
            />
          </div>
        </div>

        {/* Mobil: text + CTA tlačítko, widget schovaný */}
        <div className="md:hidden flex flex-col">

          {!mobileOpen && (
            <>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs font-semibold self-start"
                style={{ background: 'rgba(249,115,22,.2)', color: '#F97316', border: '1px solid rgba(249,115,22,.3)' }}>
                <i className="ti ti-map-2" aria-hidden="true"></i>
                Celá ČR · Střední Evropa · 24/7
              </div>
              <h1 style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(30px, 8vw, 42px)', margin: '0 0 14px' }}>
                Levná přeprava<br />
                <span style={{ color: '#F97316' }}>na letiště Praha</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '14px', lineHeight: 1.7, margin: '0 0 24px' }}>
                Taxi transfer po celé ČR a střední Evropě. Fixní ceny, žádné příplatky.
              </p>
              <button
                onClick={() => { setMobileOpen(true); setOpenCount(c => c + 1); }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#F97316', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '17px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', padding: '14px 28px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(249,115,22,.4)', marginBottom: '24px', alignSelf: 'flex-start' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#EA580C'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#F97316'; }}
              >
                <i className="ti ti-calendar-plus" style={{ fontSize: 20 }} aria-hidden="true"></i>
                Rezervovat jízdu
              </button>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {WHY_US.map(item => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'rgba(249,115,22,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={`ti ${item.icon}`} style={{ fontSize: 12, color: '#F97316' }} aria-hidden="true"></i>
                    </div>
                    <span style={{ color: 'rgba(255,255,255,.8)', fontSize: '12px', fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {mobileOpen && (
            <div className="w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 700, margin: 0 }}>Rezervovat jízdu</h2>
                <button onClick={() => setMobileOpen(false)}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,.7)', background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', borderRadius: '8px', padding: '7px 14px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                  <i className="ti ti-arrow-left" style={{ fontSize: 14 }} aria-hidden="true"></i>
                  Zpět
                </button>
              </div>
              <iframe
                key={openCount}
                src="https://taxisaas-widget.vercel.app/widget.html"
                width="100%"
                height="680"
                frameBorder="0"
                title="Rezervační formulář"
                className="w-full block rounded-xl shadow-2xl"
                scrolling="no"
                style={{ background: "#1E3A8A" }}
              />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
