"use client";
import { useState, useEffect } from "react";
import { Users, Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";

const SUPABASE_URL = "https://pqmoyykyshmtiapnowxc.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxbW95eWt5c2htdGlhcG5vd3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTYyMDUsImV4cCI6MjA2MjczMjIwNX0.jDhdSwH09to0eJvDoGTeUHiSjV_vnWhgEK7Pt1_R7PA";
const TENANT_ID = "768a3345-9118-421b-a162-2508a3b462dd";

// Fallback vozidla pokud Supabase selže
const FALLBACK = [
  { name: "Sedan Economy", passengers: 4, luggage: 3, price: "od 790 Kč", features: ["Klimatizace", "Wi-Fi", "Voda zdarma"], tag: null, photo_url: null },
  { name: "Minivan Economy", passengers: 7, luggage: 6, price: "od 990 Kč", features: ["Klimatizace", "Wi-Fi", "Velký kufr"], tag: "Nejoblíbenější", photo_url: null },
  { name: "Sedan Premium", passengers: 3, luggage: 3, price: "od 1 290 Kč", features: ["Mercedes / BMW", "Prémiový interiér", "Tiché prostředí"], tag: null, photo_url: null },
  { name: "Minivan Executive", passengers: 7, luggage: 6, price: "od 1 790 Kč", features: ["Mercedes V-Class", "Firemní standard", "Velký prostor"], tag: "Firemní volba", photo_url: null },
];

export default function Fleet() {
  const [cars, setCars] = useState<any[]>(FALLBACK);

  useEffect(() => {
    fetch(`${SUPABASE_URL}/rest/v1/tenant_settings?select=vehicles&id=eq.${TENANT_ID}`, {
      headers: { apikey: ANON_KEY, Authorization: `Bearer ${ANON_KEY}` }
    })
      .then(r => r.json())
      .then(data => {
        const vehicles = data?.[0]?.vehicles;
        if (vehicles && vehicles.length > 0) {
          const active = vehicles.filter((v: any) => v.active !== false);
          if (active.length > 0) setCars(active);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="vozovy-park" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading label="Vozový park" title="Vozový park a ceny" subtitle="Pevné ceny bez překvapení. Vyberte vozidlo podle počtu cestujících a zavazadel." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car: any) => (
            <div key={car.name}
              className="relative bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col">
              {car.tag && (
                <div className="absolute top-3 right-3 bg-[#F97316] text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                  {car.tag}
                </div>
              )}
              {/* Fotka vozidla */}
              <div className="h-44 overflow-hidden bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] flex items-center justify-center">
                {car.photo_url ? (
                  <img src={car.photo_url} alt={car.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <svg viewBox="0 0 80 40" className="w-32 opacity-30" fill="none">
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
                    <Users size={13} /> {car.passengers || car.max_passengers} os.
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Briefcase size={13} /> {car.luggage || car.max_luggage} kufry
                  </span>
                </div>
                <ul className="space-y-1 mb-4 flex-1">
                  {(car.features || []).map((f: string) => (
                    <li key={f} className="text-xs text-gray-500 flex items-center gap-1.5">
                      <span className="text-green-500 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                  <span className="text-lg font-black text-[#1E3A8A]">{car.price || car.base_price ? `od ${car.base_price} Kč` : "–"}</span>
                  <a href="/#rezervace" className="text-xs font-bold px-3 py-1.5 rounded-lg text-white"
                    style={{ background: "#F97316", textDecoration: "none" }}>
                    Rezervovat
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
