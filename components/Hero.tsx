"use client";
import { useEffect } from "react";

export default function Hero() {

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!e.data || e.data.type !== "nll-height") return;
      const h = Number(e.data.height);
      if (!h || h < 200) return;
      const iframe = document.querySelector<HTMLIFrameElement>('iframe[title="Rezervační formulář"]');
      if (iframe) iframe.style.height = h + "px";
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section id="rezervace" className="bg-[#1E3A8A] flex items-center justify-center px-4 pt-20 pb-10 md:pb-16">
      <div className="w-full max-w-2xl">
        <iframe
          src="https://taxisaas-widget.vercel.app/widget.html"
          width="100%"
          height="650"
          frameBorder="0"
          title="Rezervační formulář"
          className="w-full block rounded-xl shadow-2xl"
          scrolling="no"
        />
      </div>
    </section>
  );
}
