"use client";
import { useRef, useState, useEffect } from "react";
import { Users, Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";

const cars = [
  {
    name: "Sedan Economy",
    img: "/cars/sedan-economy.png",
    model: "VW Passat a podobný",
    passengers: 4,
    luggage: 3,
    price: "od 790 Kč",
    hourlyPrice: "699 Kč/h",
    features: ["Klimatizace", "Wi-Fi", "Voda zdarma"],
    tag: null,
    category: "sedan",
  },
  {
    name: "Sedan Business",
    img: "/cars/sedan-business.png",
    model: "Škoda Superb a podobný",
    passengers: 4,
    luggage: 3,
    price: "od 1 090 Kč",
    hourlyPrice: "899 Kč/h",
    features: ["Klimatizace", "Wi-Fi", "Rozšířený interiér"],
    tag: null,
    category: "sedan",
  },
  {
    name: "Sedan Executive",
    img: "/cars/sedan-executive.png",
    model: "Mercedes-Benz C a podobný",
    passengers: 3,
    luggage: 3,
    price: "od 1 290 Kč",
    hourlyPrice: "1 199 Kč/h",
    features: ["Prémiový interiér", "Tiché prostředí", "Voda zdarma"],
    tag: null,
    category: "sedan",
  },
  {
    name: "Minivan Economy",
    img: "/cars/minivan-economy.png",
    model: "Ford Tourneo Custom a podobný",
    passengers: 7,
    luggage: 6,
    price: "od 990 Kč",
    hourlyPrice: "899 Kč/h",
    features: ["Klimatizace", "Wi-Fi", "Velký kufr"],
    tag: "Nejoblíbenější",
    category: "minivan",
  },
  {
    name: "Minivan Business",
    img: "/cars/minivan-business.png",
    model: "Mercedes Vito a podobný",
    passengers: 7,
    luggage: 6,
    price: "od 1 390 Kč",
    hourlyPrice: "1 199 Kč/h",
    features: ["Rozšířený prostor", "Klimatizace", "Wi-Fi"],
    tag: null,
    category: "minivan",
  },
  {
    name: "Minivan Executive",
    img: "/cars/minivan-executive.png",
    model: "Mercedes V-Class a podobný",
    passengers: 7,
    luggage: 6,
    price: "od 1 790 Kč",
    hourlyPrice: "1 599 Kč/h",
    features: ["Mercedes V-Class", "Firemní standard", "Velký prostor"],
    tag: "Firemní volba",
    category: "minivan",
  },
];

const TABS = [
  { id: "sedan", label: "Sedan", desc: "1–4 osoby" },
  { id: "minivan", label: "Minivan", desc: "1–7 osob" },
] as const;

type Category = typeof TABS[number]["id"];

export default function Fleet() {
  const [category, setCategory] = useState<Category>("sedan");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const filtered = cars.filter(c => c.category === category);

  // Reset carousel position when category changes
  useEffect(() => {
    setActiveIdx(0);
    if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: "instant" as ScrollBehavior });
  }, [category]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const cardW = el.offsetWidth * 0.78 + 16;
      const idx = Math.round(el.scrollLeft / cardW);
      setActiveIdx(Math.min(Math.max(idx, 0), filtered.length - 1));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [filtered.length]);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.offsetWidth * 0.78 + 16;
    el.scrollTo({ left: cardW * idx, behavior: "smooth" });
  };

  return (
    <section id="vozovy-park" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading label="Vozový park" title="Vozový park a ceny"
          subtitle="Pevné ceny bez překvapení. Vyberte vozidlo podle počtu cestujících a zavazadel." />

        {/* Category tabs */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "32px" }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setCategory(tab.id)}
              style={{
                display: "flex", flexDirection: "column", alignItems: "flex-start",
                padding: "10px 20px", borderRadius: "12px", border: "2px solid",
                borderColor: category === tab.id ? "#00205B" : "#e2e8f0",
                background: category === tab.id ? "#00205B" : "#fff",
                cursor: "pointer", transition: "all 0.18s",
              }}
            >
              <span style={{
                fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "15px",
                color: category === tab.id ? "#fff" : "#00205B",
              }}>
                {tab.label}
              </span>
              <span style={{ fontSize: "11px", color: category === tab.id ? "rgba(255,255,255,0.65)" : "#94a3b8", marginTop: "1px" }}>
                {tab.desc}
              </span>
            </button>
          ))}
        </div>

        {/* Desktop – 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <CarCard key={car.name} car={car} />
          ))}
        </div>

        {/* Mobile – snap carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "16px",
              paddingBottom: "4px",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              margin: "0 -16px",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            <style>{`.fleet-scroll::-webkit-scrollbar{display:none}`}</style>
            {filtered.map((car) => (
              <div key={car.name} className="fleet-scroll" style={{ minWidth: "78vw", scrollSnapAlign: "start", flexShrink: 0 }}>
                <CarCard car={car} />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "16px" }}>
            {filtered.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                style={{
                  width: i === activeIdx ? "24px" : "6px",
                  height: "6px",
                  borderRadius: "9999px",
                  background: i === activeIdx ? "#00205B" : "#e2e8f0",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
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

function CarCard({ car }: { car: typeof cars[0] }) {
  return (
    <div className="fleet-card relative bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
      {car.tag && (
        <div className="absolute top-3 right-3 bg-[#F97316] text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          {car.tag}
        </div>
      )}
      <div style={{ height: "176px", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", borderBottom: "1px solid #f1f5f9" }}>
        <img src={car.img} alt={car.name}
          style={{ maxHeight: "144px", maxWidth: "100%", objectFit: "contain", display: "block" }} />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-[#00205B] text-base mb-0.5">{car.name}</h3>
        <p className="text-xs text-gray-400 mb-3">{car.model}</p>
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
          <span className="text-lg font-black text-[#00205B]">{car.price}</span>
          <a href="/#rezervace" className="text-xs font-bold px-3 py-1.5 rounded-lg text-white"
            style={{ background: "#F97316", textDecoration: "none" }}>
            Rezervovat
          </a>
        </div>
      </div>
    </div>
  );
}
