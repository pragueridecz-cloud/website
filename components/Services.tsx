import Image from "next/image";
import SectionHeading from "./SectionHeading";

const services = [
  {
    img: "/service-airport.png",
    title: "Letištní přeprava",
    desc: "Praha · Vídeň · Berlín a další",
    colSpan: "col-span-1",
    rowSpan: "",
  },
  {
    img: "/service-mezimestska.png",
    title: "Meziměstská přeprava",
    desc: "Celá ČR i zahraniční destinace",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    img: "/service-vlakautobus.png",
    title: "Vlakové a autobusové nádraží",
    desc: "Hlavní nádraží · Florenc",
    colSpan: "col-span-1",
    rowSpan: "",
  },
  {
    img: "/service-hodinovy.png",
    title: "Hodinový pronájem",
    desc: "Řidič k dispozici na celý den",
    colSpan: "col-span-1",
    rowSpan: "",
  },
  {
    img: "/service-firmy.png",
    title: "Pro firmy",
    desc: "Faktura · opakované jízdy · sleva",
    colSpan: "col-span-1",
    rowSpan: "",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading label="Naše služby" title="Přeprava" highlight="pro každou příležitost" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {/* Letištní přeprava */}
          <div className="relative overflow-hidden min-h-[220px] group cursor-default">
            <Image src="/service-airport.png" alt="Letištní přeprava" fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <div className="text-white font-semibold text-base">Letištní přeprava</div>
              <div className="text-white/60 text-sm mt-1">Praha · Vídeň · Berlín a další</div>
            </div>
          </div>

          {/* Meziměstská — 2 řádky */}
          <div className="relative overflow-hidden row-span-2 group cursor-default" style={{minHeight: '442px'}}>
            <Image src="/service-mezimestska.png" alt="Meziměstská přeprava" fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <div className="text-white font-bold text-lg">Meziměstská přeprava</div>
              <div className="text-white/60 text-sm mt-1">Celá ČR i zahraniční destinace</div>
            </div>
          </div>

          {/* Vlakové */}
          <div className="relative overflow-hidden min-h-[220px] group cursor-default">
            <Image src="/service-vlakautobus.png" alt="Vlakové a autobusové nádraží" fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <div className="text-white font-semibold text-base">Vlakové a autobusové nádraží</div>
              <div className="text-white/60 text-sm mt-1">Hlavní nádraží · Florenc</div>
            </div>
          </div>

          {/* Hodinový */}
          <div className="relative overflow-hidden min-h-[220px] group cursor-default">
            <Image src="/service-hodinovy.png" alt="Hodinový pronájem" fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <div className="text-white font-semibold text-base">Hodinový pronájem</div>
              <div className="text-white/60 text-sm mt-1">Řidič k dispozici na celý den</div>
            </div>
          </div>

          {/* Pro firmy */}
          <div className="relative overflow-hidden min-h-[220px] group cursor-default">
            <Image src="/service-firmy.png" alt="Pro firmy" fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <div className="text-white font-semibold text-base">Pro firmy</div>
              <div className="text-white/60 text-sm mt-1">Faktura · opakované jízdy · sleva</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
