"use client";

export default function Hero() {
  return (
    <section id="rezervace" className="pt-16 bg-[#1E3A8A] min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <iframe
          src="https://taxisaas-widget.vercel.app/widget.html"
          width="100%"
          height="700"
          frameBorder="0"
          title="Rezervační formulář"
          className="w-full block rounded-xl shadow-2xl"
          scrolling="no"
          style={{ minHeight: 600 }}
        />
      </div>
    </section>
  );
}
