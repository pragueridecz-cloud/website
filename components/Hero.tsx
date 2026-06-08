"use client";
import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section id="rezervace" className="bg-[#1E3A8A] flex flex-col items-center justify-center px-4 pt-24 pb-10 md:pb-16" style={{ minHeight: open ? 'auto' : undefined }}>

      {/* Nadpis a CTA – vždy viditelné */}
      <div className="w-full max-w-xl text-center mb-8">
        <h1 className="text-white font-bold mb-3" style={{ fontSize: 'clamp(28px, 6vw, 48px)', lineHeight: 1.15, fontFamily: 'Poppins, sans-serif' }}>
          Levná přeprava<br />na letiště Praha
        </h1>
        <p className="mb-6" style={{ color: 'rgba(255,255,255,.75)', fontSize: 'clamp(14px, 2.5vw, 18px)', lineHeight: 1.7 }}>
          Spolehlivý taxi transfer 24/7 · Fixní ceny · Žádné příplatky
        </p>

        {/* CTA tlačítko */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-3 font-bold rounded-xl shadow-lg transition-all"
            style={{
              background: '#F97316',
              color: '#fff',
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              padding: '16px 36px',
              fontFamily: 'Poppins, sans-serif',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(249,115,22,.4)',
              transform: 'scale(1)',
              transition: 'transform .15s, box-shadow .15s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.04)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 40px rgba(249,115,22,.5)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(249,115,22,.4)';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Rezervovat jízdu
          </button>
        )}

        {/* Výhody pod tlačítkem */}
        {!open && (
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {[
              { icon: '✓', text: 'Fixní cena předem' },
              { icon: '✓', text: 'Řidič čeká u výstupu' },
              { icon: '✓', text: 'Platba kartou nebo hotově' },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,.8)', fontSize: '13px' }}>
                <span style={{ color: '#F97316', fontWeight: 700 }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Widget – zobrazí se po kliknutí */}
      {open && (
        <div className="w-full max-w-lg md:max-w-xl">
          {/* Zavřít tlačítko */}
          <div className="flex justify-end mb-3">
            <button
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-sm font-semibold rounded-lg px-3 py-1.5 transition-colors"
              style={{ color: 'rgba(255,255,255,.7)', background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Zavřít
            </button>
          </div>
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
      )}
    </section>
  );
}
