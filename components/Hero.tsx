"use client";

export default function Hero() {
  return (
    <section id="rezervace" className="bg-[#1E3A8A] flex items-center justify-center px-4 pt-24 pb-10 md:pb-16">
      <div className="w-full max-w-lg md:max-w-xl">
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
    </section>
  );
}
