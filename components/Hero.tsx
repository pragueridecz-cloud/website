"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="rezervace" className="pt-16 relative overflow-hidden bg-white">
      {/* Full-width background image — no cropping */}
      <Image
        src="/hero-airport.png"
        alt="Doprava na letiště Praha — Mercedes minivan a Škoda Superb před Letištěm Václava Havla"
        width={1920}
        height={1080}
        priority
        className="w-full h-auto opacity-20 block"
        sizes="100vw"
      />

      {/* Content overlay */}
      <div className="absolute inset-0 pt-16 z-10 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 w-full flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1E3A8A]/10 text-[#1E3A8A] text-sm font-semibold px-3 py-1 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#1E3A8A] rounded-full"></span>
            Doprava na letiště Praha
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-4">
            Na letiště levně,{" "}
            <span className="text-[#1E3A8A]">spolehlivě</span> a včas
          </h1>
          <p className="text-[#475569] text-lg leading-relaxed mb-6 max-w-2xl">
            Rezervujte dopravu předem a mějte klid. Pevná cena, profesionální řidič,
            sledování vašeho letu. Žádné překvapení, žádné příplatky.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {[
              "Pevná cena předem",
              "Sledujeme váš let",
              "Bez příplatků za zpoždění",
              "Řidič čeká s cedulí",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2 text-sm text-[#0F172A]">
                <span className="text-[#1E3A8A] font-bold">✓</span>
                {text}
              </div>
            ))}
          </div>

          {/* Widget */}
          <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl border border-[#CBD5E1] bg-white">
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

          {/* Prices */}
          <div className="mt-6 flex gap-4 flex-wrap justify-center">
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
      </div>
    </section>
  );
}
