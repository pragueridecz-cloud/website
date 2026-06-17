"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Zpět nahoru"
      style={{
        position: "fixed", bottom: "96px", right: "24px", zIndex: 998,
        width: "44px", height: "44px", borderRadius: "50%",
        background: "#00205B", color: "#fff", border: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", boxShadow: "0 4px 16px rgba(30,58,138,0.3)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#162d6e"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#00205B"; }}
    >
      <i className="ti ti-arrow-up" style={{ fontSize: "18px" }} aria-hidden="true" />
    </button>
  );
}
