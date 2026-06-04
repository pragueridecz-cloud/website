import { Plane, Train, Clock, MapPin, Building2 } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Letištní přeprava",
    desc: "Praha · Vídeň · Berlín a další",
    span: "col-span-1",
    gradient: "from-[#1E3A8A] to-[#1e40af]",
  },
  {
    icon: MapPin,
    title: "Meziměstská přeprava",
    desc: "Celá ČR i zahraniční destinace",
    span: "col-span-1 row-span-2",
    gradient: "from-[#1e40af] to-[#1d4ed8]",
  },
  {
    icon: Train,
    title: "Vlakové a autobusové nádraží",
    desc: "Hlavní nádraží · Florenc · Holešovice",
    span: "col-span-1",
    gradient: "from-[#1E3A8A] to-[#312e81]",
  },
  {
    icon: Clock,
    title: "Hodinový pronájem",
    desc: "Řidič k dispozici na celý den",
    span: "col-span-1",
    gradient: "from-[#1e3a8a] to-[#075985]",
  },
  {
    icon: Building2,
    title: "Pro firmy",
    desc: "Faktura, opakované jízdy, sleva",
    span: "col-span-1",
    gradient: "from-[#0c4a6e] to-[#1E3A8A]",
  },
];

const icons = [Plane, Train, Clock, MapPin, Building2];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-[#F97316]"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-[#F97316]">Naše služby</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
            Přeprava<br />
            <span className="text-[#1E3A8A]">pro každou příležitost</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#F97316] mt-4"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {/* Letištní přeprava */}
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1e40af] p-8 flex flex-col justify-end min-h-[220px] cursor-default group hover:brightness-110 transition-all duration-200">
            <Plane size={36} className="text-white/20 mb-auto mt-0 group-hover:text-white/30 transition-colors" />
            <div>
              <div className="text-white font-semibold text-base">Letištní přeprava</div>
              <div className="text-white/50 text-sm mt-1">Praha · Vídeň · Berlín a další</div>
            </div>
          </div>

          {/* Meziměstská — velká, 2 řádky */}
          <div className="bg-gradient-to-br from-[#1e40af] to-[#1d4ed8] p-8 flex flex-col justify-end row-span-2 cursor-default group hover:brightness-110 transition-all duration-200">
            <MapPin size={36} className="text-white/20 mb-auto mt-0 group-hover:text-white/30 transition-colors" />
            <div>
              <div className="text-white font-bold text-lg">Meziměstská přeprava</div>
              <div className="text-white/50 text-sm mt-1">Celá ČR i zahraniční destinace</div>
            </div>
          </div>

          {/* Vlakové */}
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#312e81] p-8 flex flex-col justify-end min-h-[220px] cursor-default group hover:brightness-110 transition-all duration-200">
            <Train size={36} className="text-white/20 mb-auto mt-0 group-hover:text-white/30 transition-colors" />
            <div>
              <div className="text-white font-semibold text-base">Vlakové a autobusové nádraží</div>
              <div className="text-white/50 text-sm mt-1">Hlavní nádraží · Florenc</div>
            </div>
          </div>

          {/* Hodinový */}
          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#075985] p-8 flex flex-col justify-end min-h-[220px] cursor-default group hover:brightness-110 transition-all duration-200">
            <Clock size={36} className="text-white/20 mb-auto mt-0 group-hover:text-white/30 transition-colors" />
            <div>
              <div className="text-white font-semibold text-base">Hodinový pronájem</div>
              <div className="text-white/50 text-sm mt-1">Řidič k dispozici na celý den</div>
            </div>
          </div>

          {/* Pro firmy */}
          <div className="bg-gradient-to-br from-[#0c4a6e] to-[#1E3A8A] p-8 flex flex-col justify-end min-h-[220px] cursor-default group hover:brightness-110 transition-all duration-200">
            <Building2 size={36} className="text-white/20 mb-auto mt-0 group-hover:text-white/30 transition-colors" />
            <div>
              <div className="text-white font-semibold text-base">Pro firmy</div>
              <div className="text-white/50 text-sm mt-1">Faktura · opakované jízdy · sleva</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
