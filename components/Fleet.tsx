"use client";
import { Users, Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";

const cars = [
  {
    name: "Sedan Economy",
    img: "/cars/sedan-economy.jpg",
    passengers: 4,
    luggage: 3,
    price: "od 790 Kč",
    features: ["Klimatizace", "Wi-Fi", "Voda zdarma"],
    tag: null,
  },
  {
    name: "Minivan Economy",
    img: "/cars/minivan-economy.jpg",
    passengers: 7,
    luggage: 6,
    price: "od 990 Kč",
    features: ["Klimatizace", "Wi-Fi", "Velký kufr"],
    tag: "Nejoblíbenější",
  },
  {
    name: "Sedan Premium",
    img: "/cars/sedan-premium.jpg",
    passengers: 3,
    luggage: 3,
    price: "od 1 290 Kč",
    features: ["Mercedes / BMW", "Prémiový interiér", "Tiché prostředí"],
    tag: null,
  },
  {
    name: "Minivan Executive",
    img: "/cars/minivan-executive.jpg",
    passengers: 7,
    luggage: 6,
    price: "od 1 790 Kč",
    features: ["Mercedes V-Class", "Firemní standard", "Velký prostor"],
    tag: "Firemní volba",
  },
];

export default function Fleet() {
  return (
    <section id="vozovy-park" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading label="Vozový park" title="Vozový park a ceny"
          subtitle="Pevné ceny bez překvapení. Vyberte vozidlo podle počtu cestujících a zavazadel." />

        {/* Desktop – grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car.name} car={car} />
          ))}
        </div>

        {/* Mobil – karusel */}
        <div className="md:hidden">
          <div style={{ display: "flex", overflowX: "auto", gap: "16px", paddingBottom: "12px", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}>
            {cars.map((car) => (
              <div key={car.name} style={{ minWidth: "78vw", scrollSnapAlign: "start", flexShrink: 0 }}>
                <CarCard car={car} />
              </div>
            ))}
          </div>
          {/* Dots indikátor */}
          <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "12px" }}>
            {cars.map((_, i) => (
              <div key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", background: i === 0 ? "#1E3A8A" : "#e2e8f0" }} />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .fleet-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .fleet-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(30,58,138,0.12) !important; }
      `}</style>
    </section>
  );
}

function CarCard({ car }: { car: any }) {
  return (
    <div className="fleet-card relative bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
      {car.tag && (
        <div className="absolute top-3 right-3 bg-[#F97316] text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          {car.tag}
        </div>
      )}
      {/* Bílé pozadí + auto */}
      <div style={{ height: "176px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", borderBottom: "1px solid #f1f5f9" }}>
        <img src={car.img} alt={car.name}
          style={{ maxHeight: "144px", maxWidth: "100%", objectFit: "contain", display: "block" }} />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-[#1E3A8A] text-base mb-3">{car.name}</h3>
        <div className="flex gap-4 mb-3">
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <Users size={13} /> {car.passengers} os.
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <Briefcase size={13} /> {car.luggage} kufry
          </span>
        </div>
        <ul className="space-y-1 mb-4 flex-1">
          {car.features.map((f: string) => (
            <li key={f} className="text-xs text-gray-500 flex items-center gap-1.5">
              <span className="text-green-500 font-bold">✓</span> {f}
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
          <span className="text-lg font-black text-[#1E3A8A]">{car.price}</span>
          <a href="/#rezervace" className="text-xs font-bold px-3 py-1.5 rounded-lg text-white"
            style={{ background: "#F97316", textDecoration: "none" }}>
            Rezervovat
          </a>
        </div>
      </div>
    </div>
  );
}
