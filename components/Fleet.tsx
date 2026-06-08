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
        <SectionHeading label="Vozový park" title="Vozový park a ceny" subtitle="Pevné ceny bez překvapení. Vyberte vozidlo podle počtu cestujících a zavazadel." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.name}
              className="relative bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col"
            >
              {car.tag && (
                <div className="absolute top-3 right-3 bg-[#F97316] text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {car.tag}
                </div>
              )}
              {/* Placeholder image */}
              <div className="h-40 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] flex items-center justify-center">
                <div className="text-5xl"></div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-[#0F172A] mb-3">{car.name}</h3>
                <div className="flex gap-4 text-sm text-[#475569] mb-3">
                  <span className="flex items-center gap-1">
                    <Users size={14} /> {car.passengers} os.
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase size={14} /> {car.luggage} zavazadel
                  </span>
                </div>
                <ul className="text-xs text-[#475569] space-y-1 mb-4 flex-1">
                  {car.features.map((f) => (
                    <li key={f} className="flex items-center gap-1">
                      <span className="text-[#1E3A8A]"></span> {f}
                    </li>
                  ))}
                </ul>
                <div className="text-[#0F172A] font-bold text-lg mb-3">{car.price}</div>
                <a
                  href="#rezervace"
                  className="block text-center bg-[#1E3A8A] hover:bg-[#1e40af] text-white text-sm font-semibold py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Rezervovat
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
