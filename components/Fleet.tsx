"use client";
import { useState, useEffect } from "react";
import { Users, Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";

const TAGS: Record<string, string> = {
  economy_van: "Nejoblíbenější",
  premium_van: "Firemní volba",
};

export default function Fleet() {
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/vehicles')
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setCars(data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="vozovy-park" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading label="Vozový park" title="Vozový park a ceny" subtitle="Pevné ceny bez překvapení. Vyberte vozidlo podle počtu cestujících a zavazadel." />
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1,2,3,4].map(i => <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl h-80 animate-pulse" />)}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.map((car: any, idx: number) => {
              const tag = TAGS[car.id] || car.tag || "";
              return (
                <div key={car.id || idx}
                  className="relative bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col">
                  {tag && (
                    <div className="absolute top-3 right-3 bg-[#F97316] text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                      {tag}
                    </div>
                  )}
                  <div className="h-44 overflow-hidden bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] flex items-center justify-center">
                    {car.photo_url ? (
                      <img src={car.photo_url} alt={car.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    ) : (
                      <svg viewBox="0 0 80 40" className="w-28 opacity-20" fill="none">
                        <rect x="5" y="15" width="70" height="20" rx="4" fill="#1E3A8A"/>
                        <rect x="15" y="8" width="35" height="15" rx="3" fill="#1E3A8A"/>
                        <circle cx="18" cy="36" r="5" fill="#1E3A8A"/>
                        <circle cx="60" cy="36" r="5" fill="#1E3A8A"/>
                      </svg>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-[#1E3A8A] text-base mb-3">{car.name}</h3>
                    <div className="flex gap-4 mb-3">
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Users size={13} /> {car.capacity_pax} os.
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Briefcase size={13} /> {car.capacity_bags} kufry
                      </span>
                    </div>
                    {car.description && (
                      <p className="text-xs text-gray-400 mb-3 leading-relaxed">{car.description}</p>
                    )}
                    <div className="border-t border-gray-100 pt-3 flex items-center justify-between mt-auto">
                      <span className="text-lg font-black text-[#1E3A8A]">od {car.price} Kč</span>
                      <a href="/#rezervace" className="text-xs font-bold px-3 py-1.5 rounded-lg text-white"
                        style={{ background: "#F97316", textDecoration: "none" }}>
                        Rezervovat
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
