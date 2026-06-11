"use client";
import { useState, useEffect } from "react";

const WHY_US = [
  { num: "01", text: "Pevná cena — žádná překvapení" },
  { num: "02", text: "Sledování letů v reálném čase" },
  { num: "03", text: "Dostupnost 24 hodin denně" },
  { num: "04", text: "Prověření profesionální řidiči" },
];

function PragueSkyline() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const W = c.width, H = c.height;

    const RAW: [number,number][] = [
      [0,1],[0,.55],[.02,.55],[.02,.45],[.04,.45],[.04,.3],[.045,.3],[.045,.15],
      [.05,.15],[.05,.28],[.055,.28],[.055,.22],[.06,.22],[.06,.18],[.065,.18],
      [.065,.32],[.075,.32],[.075,.42],[.09,.42],[.09,.38],[.1,.38],[.1,.44],
      [.105,.44],[.105,.12],[.108,.12],[.108,.44],[.112,.44],[.112,.1],[.115,.1],
      [.115,.44],[.118,.44],[.118,.42],[.13,.42],[.13,.35],[.14,.35],[.14,.45],
      [.16,.45],[.16,.3],[.18,.3],[.18,.25],[.2,.25],[.2,.3],[.22,.3],[.22,.45],
      [.24,.45],[.24,.5],[.26,.5],[.26,.42],[.28,.42],[.28,.38],[.3,.38],[.3,.5],
      [.31,.5],[.31,.35],[.312,.35],[.312,.08],[.315,.08],[.315,.35],[.318,.35],
      [.318,.5],[.33,.5],[.33,.52],[.35,.52],[.35,.48],[.37,.48],[.37,.55],
      [.38,.55],[.38,.45],[.39,.45],[.39,.4],[.4,.4],[.4,.45],[.41,.45],[.41,.38],
      [.42,.38],[.42,.45],[.43,.45],[.43,.52],[.45,.52],[.45,.48],[.47,.48],
      [.47,.44],[.49,.44],[.49,.5],[.5,.5],[.5,.48],
      [.505,.48],[.505,.25],[.508,.25],[.508,.2],[.511,.2],[.511,.25],[.514,.25],
      [.514,.48],[.52,.48],[.52,.5],[.53,.5],[.53,.48],[.535,.48],[.535,.25],
      [.538,.25],[.538,.2],[.541,.2],[.541,.25],[.545,.25],[.545,.48],[.55,.48],
      [.55,.52],[.57,.52],[.57,.44],[.58,.44],[.58,.48],[.6,.48],[.6,.42],
      [.62,.42],[.62,.45],[.64,.45],[.64,.4],[.66,.4],[.66,.45],[.68,.45],
      [.68,.42],[.69,.42],[.69,.38],[.7,.38],[.7,.44],[.71,.44],[.71,.5],
      [.72,.5],[.72,.46],[.725,.46],[.725,.38],[.728,.38],[.728,.08],[.73,.08],
      [.73,.05],[.732,.05],[.732,.08],[.735,.08],[.735,.38],[.738,.38],[.738,.46],
      [.742,.46],[.742,.5],[.75,.5],[.75,.46],[.76,.46],[.76,.42],[.77,.42],
      [.77,.46],[.78,.46],[.78,.5],[.79,.5],[.79,.44],[.8,.44],[.8,.48],
      [.81,.48],[.81,.44],[.82,.44],[.82,.4],[.83,.4],[.83,.44],[.84,.44],
      [.84,.48],[.85,.48],[.85,.42],[.87,.42],[.87,.46],[.89,.46],[.89,.52],
      [.9,.52],[.9,.48],[.92,.48],[.92,.52],[.94,.52],[.94,.5],[.96,.5],
      [.96,.55],[.98,.55],[.98,.6],[1,.6],[1,1],[0,1]
    ];

    const pts = RAW.map(([x,y]): [number,number] => [x*W, y*H]);
    const totalPts = pts.length - 2;
    let progress = 0;
    let raf: number;

    function lerp(a: number, b: number, t: number) { return a+(b-a)*t; }
    function getPointAt(t: number): [number,number] {
      const idx = Math.floor(t*(totalPts-1));
      const frac = (t*(totalPts-1))-idx;
      const a = pts[Math.min(idx,totalPts-1)];
      const b = pts[Math.min(idx+1,totalPts-1)];
      return [lerp(a[0],b[0],frac), lerp(a[1],b[1],frac)];
    }

    function draw() {
      ctx.clearRect(0,0,W,H);

      if (progress >= 1) {
        ctx.beginPath();
        pts.forEach(([x,y],i) => i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y));
        ctx.closePath();
        ctx.fillStyle='rgba(255,255,255,0.05)';
        ctx.fill();
      }

      const drawCount = Math.floor(progress*(totalPts-1));
      ctx.beginPath();
      ctx.moveTo(pts[0][0],pts[0][1]);
      for(let i=1;i<=drawCount;i++) ctx.lineTo(pts[i][0],pts[i][1]);

      if(progress < 1) {
        const [px,py] = getPointAt(progress);
        ctx.lineTo(px,py);
        ctx.strokeStyle='rgba(255,255,255,0.85)';
        ctx.lineWidth=1.5;
        ctx.lineJoin='round';
        ctx.stroke();
        ctx.beginPath(); ctx.arc(px,py,3,0,Math.PI*2);
        ctx.fillStyle='#fff'; ctx.fill();
        ctx.beginPath(); ctx.arc(px,py,7,0,Math.PI*2);
        ctx.fillStyle='rgba(255,255,255,0.12)'; ctx.fill();
        progress += 0.004;
        raf = requestAnimationFrame(draw);
      } else {
        ctx.strokeStyle='rgba(255,255,255,0.3)';
        ctx.lineWidth=1.5;
        ctx.lineJoin='round';
        ctx.stroke();
      }
    }

    const timer = setTimeout(() => { progress = 0.001; draw(); }, 400);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1200}
      height={220}
      style={{ position:'absolute', bottom:0, left:0, width:'100%', height:'220px', pointerEvents:'none', opacity:.9 }}
    />
  );
}


function TypewriterPrice() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const full = "již od 740,-";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= full.length) {
        setDisplayed(full.slice(0, i));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: "8px" }}>
      <span style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: "clamp(42px, 5vw, 68px)",
        fontWeight: 900,
        color: "#F97316",
        letterSpacing: "-1px",
        lineHeight: 1,
        display: "inline-block",
      }}>
        {displayed}
        {!done && (
          <span style={{
            display: "inline-block",
            width: "3px",
            height: "0.8em",
            background: "#F97316",
            marginLeft: "4px",
            verticalAlign: "middle",
            animation: "blink 0.7s step-end infinite",
          }} />
        )}
      </span>
      <style>{`@keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0 } }`}</style>
    </div>
  );
}

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCount, setOpenCount] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    WHY_US.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, i]);
      }, 600 + i * 350);
    });
  }, []);

  return (
    <section id="rezervace" className="bg-[#1E3A8A] px-4 pt-20 pb-0 md:pb-0" style={{ position:"relative", overflow:"hidden" }}>
      <div className="max-w-6xl mx-auto pb-56">

        {/* Desktop */}
        <div className="hidden md:flex items-start gap-12">
          <div className="flex-1 pt-6">
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: "32px", height: "2px", background: "#F97316" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                Celá ČR · Střední Evropa · 24/7
              </span>
            </div>
            {/* Nadpis */}
            <h1 style={{ color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.1, fontSize: "clamp(32px,4vw,52px)", margin: "0 0 8px" }}>
              Levná přeprava
            </h1>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.1, fontSize: "clamp(32px,4vw,52px)", margin: "0 0 6px", color: "#F97316" }}>
              na letiště Praha
            </h1>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, lineHeight: 1.3, fontSize: "clamp(16px,2vw,22px)", margin: "0 0 28px", color: "rgba(255,255,255,.7)" }}>
              a transfery po celé ČR a střední Evropě
            </h2>
            {/* 4 body s čísly */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
              {WHY_US.map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  opacity: visibleItems.includes(i) ? 1 : 0,
                  transform: visibleItems.includes(i) ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 800, color: "#F97316", minWidth: "26px", opacity: .8 }}>{item.num}</span>
                  <div style={{ width: "1px", height: "20px", background: "rgba(249,115,22,.3)", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,.9)", fontSize: "18px", fontWeight: 500 }}>{item.text}</span>
                </div>
              ))}
            </div>
            <TypewriterPrice />
          </div>

          {/* Widget */}
          <div className="flex-shrink-0 w-full max-w-md" style={{ paddingTop: "24px" }}>
            <iframe src="https://taxisaas-widget.vercel.app/widget.html" width="100%" height="680"
              frameBorder="0" title="Rezervační formulář" className="w-full block rounded-xl shadow-2xl"
              scrolling="no" style={{ background: "#1E3A8A" }} />
          </div>
        </div>

        {/* Mobil */}
        <div className="md:hidden flex flex-col">
          {!mobileOpen && (
            <>
              <div className="flex items-center gap-3 mb-4">
                <div style={{ width: "24px", height: "2px", background: "#F97316" }} />
                <span style={{ fontSize: "10px", fontWeight: 700, color: "#F97316", textTransform: "uppercase", letterSpacing: "1.5px" }}>Celá ČR · Střední Evropa · 24/7</span>
              </div>
              <h1 style={{ color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.1, fontSize: "clamp(30px,8vw,42px)", margin: "0 0 4px" }}>
                Levná přeprava
              </h1>
              <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.1, fontSize: "clamp(30px,8vw,42px)", margin: "0 0 20px", color: "#F97316" }}>
                na letiště Praha
              </h1>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                {WHY_US.map((item, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: "14px",
                    opacity: visibleItems.includes(i) ? 1 : 0,
                    transform: visibleItems.includes(i) ? "translateX(0)" : "translateX(-16px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                  }}>
                    <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "12px", fontWeight: 800, color: "#F97316", minWidth: "22px", opacity: .8 }}>{item.num}</span>
                    <div style={{ width: "1px", height: "18px", background: "rgba(249,115,22,.3)", flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,.9)", fontSize: "14px", fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => { setMobileOpen(true); setOpenCount(c => c + 1); }}
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#F97316", color: "#fff", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: 700, fontFamily: "Poppins, sans-serif", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 8px 32px rgba(249,115,22,.4)", alignSelf: "flex-start" }}>
                Rezervovat jízdu →
              </button>
            </>
          )}
          {mobileOpen && (
            <div className="w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 style={{ color: "#fff", fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 700, margin: 0 }}>Rezervovat jízdu</h2>
                <button onClick={() => setMobileOpen(false)}
                  style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,.7)", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: "8px", padding: "7px 14px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>
                  ← Zpět
                </button>
              </div>
              <iframe key={openCount} src="https://taxisaas-widget.vercel.app/widget.html"
                width="100%" height="680" frameBorder="0" title="Rezervační formulář"
                className="w-full block rounded-xl shadow-2xl" scrolling="no" style={{ background: "#1E3A8A" }} />
            </div>
          )}
        </div>
      </div>
      <PragueSkyline />
    </section>
  );
}
