import { Shield, Clock, MapPin, CreditCard, Plane, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: Shield,
    title: "Pevná cena, žádná překvapení",
    desc: "Cenu vidíte předem při rezervaci. Nikdy nezaplatíte více — ani za zácpy, ani za delší cestu.",
  },
  {
    icon: Plane,
    title: "Sledujeme váš let",
    desc: "Systém hlídá přílet v reálném čase. Pokud má let zpoždění, řidič počká. Bez příplatku.",
  },
  {
    icon: Clock,
    title: "Dostupnost 24/7",
    desc: "Rezervujte kdykoliv. Ranní lety, noční přílety — jsme tu vždy, 365 dní v roce.",
  },
  {
    icon: MapPin,
    title: "Řidič čeká na místě",
    desc: "Řidič vás vyzvedne přímo u výjezdu z celnice s cedulí s vaším jménem.",
  },
  {
    icon: CreditCard,
    title: "Platba kartou nebo hotovostí",
    desc: "Zaplaťte online předem se slevou 10 %, nebo hotově řidiči. Firemní faktura k dispozici.",
  },
  {
    icon: Users,
    title: "Profesionální řidiči",
    desc: "Prověření řidiči se zkušeností. Mluví česky, anglicky i německy. Pomoc se zavazadly.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading label="Výhody" title="Proč si vybrat nás?" highlight="" subtitle="Nejsme taxi. Jsme předem rezervovaná doprava s garantovanou cenou a profesionálním přístupem." center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-md transition-shadow duration-200 cursor-default"
            >
              <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                <f.icon size={20} className="text-[#1E3A8A]" />
              </div>
              <h3 className="font-semibold text-[#0F172A] mb-2">{f.title}</h3>
              <p className="text-[#475569] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
