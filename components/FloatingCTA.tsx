"use client";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    document.getElementById("rezervace")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        aria-label="Rezervovat přepravu"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "24px",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#F97316",
          color: "#fff",
          border: "none",
          borderRadius: "100px",
          padding: "14px 22px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          fontSize: "15px",
          cursor: "pointer",
          boxShadow: "0 8px 32px rgba(249,115,22,0.45)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          pointerEvents: visible ? "auto" : "none",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = "#ea6c0a";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px) scale(1.02)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 40px rgba(249,115,22,0.55)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = "#F97316";
          (e.currentTarget as HTMLButtonElement).style.transform = visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(249,115,22,0.45)";
        }}
      >
        <i className="ti ti-calendar-plus" style={{ fontSize: "18px" }} aria-hidden="true" />
        <span>Rezervovat</span>
        <span style={{
          background: "rgba(255,255,255,0.2)",
          borderRadius: "100px",
          padding: "2px 10px",
          fontSize: "12px",
          fontWeight: 600,
        }}>od 750 Kč</span>
      </button>
      <style>{`
        @media (max-width: 480px) {
          button[aria-label="Rezervovat přepravu"] span:last-child {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
