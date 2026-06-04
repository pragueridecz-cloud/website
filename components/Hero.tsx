"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="rezervace" className="pt-16 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-airport.png"
          alt="Doprava na letiště Praha — Mercedes minivan a Škoda Superb před Letištěm Václava Havla"
          fill
          priority
          className="object-cover object-center scale-75 origin-center"
          sizes="100vw"
        />
        {/* Gradient overlay: opaque left → transparent right on desktop, top on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/60 md:hidden" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — headline */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-[#1E3A8A]/10 text-[#1E3A8A] text-sm font-semibold px-3 py-1 rounded-full mb-4 w-fit">
              <span className="w-2 h-2 bg-[#1E3A8A] rounded-full"></span>
              Doprava na letiště Praha
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-4">
              Na letiště levně,<br />
              <span className="text-[#1E3A8A]">spolehlivě</span> a včas
            </h1>
            <p className="text-[#475569] text-lg leading-relaxed mb-6">
              Rezervujte dopravu předem a mějte klid. Pevná cena, profesionální řidič,
              sledování vašeho letu. Žádné překvapení, žádné příplatky.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { text: "Pevná cena předem" },
                { text: "Sledujeme váš let" },
                { text: "Bez příplatků za zpoždění" },
                { text: "Řidič čeká s cedulí" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-[#0F172A]">
                  <span className="text-[#1E3A8A] font-bold">✓</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* Prices */}
            <div className="mt-6 flex gap-4 flex-wrap">
              <div className="bg-white/90 border border-[#CBD5E1] rounded-xl px-4 py-3 text-center shadow-sm backdrop-blur-sm">
                <div className="text-[#475569] text-xs mb-1">Sedan (1–4 os.)</div>
                <div className="text-[#0F172A] font-bold text-lg">od 790 Kč</div>
              </div>
              <div className="bg-white/90 border border-[#CBD5E1] rounded-xl px-4 py-3 text-center shadow-sm backdrop-blur-sm">
                <div className="text-[#475569] text-xs mb-1">Minivan (1–7 os.)</div>
                <div className="text-[#0F172A] font-bold text-lg">od 990 Kč</div>
              </div>
            </div>
          </div>

          {/* Right — widget */}
          <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-[#CBD5E1] bg-white">
            <iframe
              src="https://taxisaas-widget.vercel.app/"
              width="100%"
              height="620"
              frameBorder="0"
              title="Rezervační formulář"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
