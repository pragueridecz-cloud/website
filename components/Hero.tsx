"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // postMessage listener
    function onMessage(e: MessageEvent) {
      if (!e.data || e.data.type !== "nll-height") return;
      const h = Number(e.data.height);
      if (!h || h < 300) return;
      const iframe = iframeRef.current;
      if (iframe) iframe.style.height = h + "px";
    }
    window.addEventListener("message", onMessage);

    // Fallback polling — každé 2s zkontroluje přes iframe.contentWindow pokud same-origin
    // a zvětší iframe pokud přišla zpráva
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section id="rezervace" className="bg-[#1E3A8A] flex items-center justify-center px-4 pt-20 pb-10 md:pb-16">
      <div className="w-full max-w-2xl">
        <iframe
          ref={iframeRef}
          src="https://taxisaas-widget.vercel.app/widget.html"
          width="100%"
          height="1050"
          frameBorder="0"
          title="Rezervační formulář"
          className="w-full block rounded-xl shadow-2xl"
          scrolling="no"
          style={{ background: "#1E3A8A" }}
          onLoad={() => {
            // Po načtení iframe počkej a naslouchej — widget začne posílat výšku
            console.log("[NLL] iframe loaded");
          }}
        />
      </div>
    </section>
  );
}
