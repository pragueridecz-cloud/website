import { FileText, Repeat, PhoneCall, BarChart2 } from "lucide-react";

const perks = [
  { icon: FileText, text: "Faktura na firmu — DPH doklad každá jízda" },
  { icon: Repeat, text: "Pravidelné jízdy s fixní cenou" },
  { icon: BarChart2, text: "Přehled jízd a výdajů online" },
  { icon: PhoneCall, text: "Dedikovaná telefonní linka pro firmy" },
];

export default function B2B() {
  return (
    <section id="pro-firmy" className="py-16 bg-[#1E3A8A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Pro firmy a korporace
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Firemní doprava na letiště bez starostí
            </h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              Posíláte zaměstnance nebo klienty na letiště opakovaně? Uzavřete s námi
              firemní smlouvu a mějte vše pod kontrolou. Faktura, přehled jízd a sleva
              pro pravidelné zákazníky.
            </p>
            <ul className="space-y-3 mb-8">
              {perks.map((p) => (
                <li key={p.text} className="flex items-center gap-3 text-white text-sm">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <p.icon size={16} className="text-white" />
                  </div>
                  {p.text}
                </li>
              ))}
            </ul>
            <a
              href="mailto:info@naletistelevne.cz?subject=Firemní spolupráce"
              className="inline-block bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer text-sm"
            >
              Domluvit firemní spolupráci
            </a>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
            <div className="text-white font-semibold text-lg mb-6">
              Orientační ceny pro firmy
            </div>
            <div className="space-y-4">
              {[
                { route: "Praha centrum → letiště", price: "od 790 Kč" },
                { route: "Letiště → Praha centrum", price: "od 790 Kč" },
                { route: "Praha → Brno", price: "od 2 900 Kč" },
                { route: "Praha → Vídeň", price: "od 4 500 Kč" },
              ].map((item) => (
                <div
                  key={item.route}
                  className="flex justify-between items-center border-b border-white/10 pb-3"
                >
                  <span className="text-blue-100 text-sm">{item.route}</span>
                  <span className="text-white font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="text-blue-200 text-xs mt-4">
              * Přesná cena závisí na vozidle a počtu zastávek. Rezervujte online nebo volejte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
