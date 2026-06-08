"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "Jak daleko předem musím rezervovat?",
    a: "Rezervaci lze provést až 2 hodiny před odjezdem. Doporučujeme ale rezervovat alespoň 24 hodin předem pro jistotu dostupnosti vozidla.",
  },
  {
    q: "Co se stane, když bude mít letadlo zpoždění?",
    a: "Sledujeme váš let v reálném čase. Pokud má let zpoždění, řidič automaticky upraví čas příjezdu. Neplatíte žádné příplatky za čekání.",
  },
  {
    q: "Kde mě řidič vyzvedne na letišti?",
    a: "Řidič čeká přímo u výjezdu z celnice v příletové hale s cedulí s vaším jménem. Přesné místo dostanete e-mailem po rezervaci.",
  },
  {
    q: "Mohu zrušit nebo změnit rezervaci?",
    a: "Rezervaci lze zrušit zdarma až 24 hodin před jízdou. Změny trasy nebo času jsou možné po domluvě s dispečinkem.",
  },
  {
    q: "Přijímáte platbu kartou?",
    a: "Ano, platbu kartou online přijímáme přes Stripe — a za online platbu navíc dostanete 10% slevu. Alternativně lze platit hotovostí přímo řidiči.",
  },
  {
    q: "Vozíte také skupiny a velká zavazadla?",
    a: "Ano. Pro velké skupiny nebo hodně zavazadel (lyže, kola, golfové vybavení) doporučujeme minivan. Vše zadejte při rezervaci a my zajistíme vhodné vozidlo.",
  },
  {
    q: "Jezdíte i mimo Prahu?",
    a: "Ano — zajišťujeme transfery z/na letiště Praha pro celou ČR i do sousedních zemí (Vídeň, Drážďany, Varšava a další).",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading label="Otázky" title="Časté otázky" subtitle="Nenašli jste odpověď? Zavolejte nám na +420 606 079 179" />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#E2E8F0] rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#475569] transition-transform duration-200 flex-shrink-0 ml-3 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-[#475569] text-sm leading-relaxed border-t border-[#E2E8F0] pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
