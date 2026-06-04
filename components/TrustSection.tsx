const reasons = [
  {
    num: "01",
    title: "Pevná cena — žádná překvapení",
    desc: "Cenu vidíte před rezervací. Nikdy nepřidáváme příplatky za čekání nebo zpoždění letu.",
  },
  {
    num: "02",
    title: "Sledování letů v reálném čase",
    desc: "Napojení na live data. Řidič přijede přesně tehdy, kdy ho skutečně potřebujete.",
  },
  {
    num: "03",
    title: "Dostupnost 24 hodin denně",
    desc: "Ranní let v 5:00 nebo noční příjezd — jsme zde vždy bez příplatku.",
  },
  {
    num: "04",
    title: "Prověření profesionální řidiči",
    desc: "Všichni řidiči jsou proškoleni, pojištění a pravidelně hodnoceni zákazníky.",
  },
];

const stats = [
  { value: "8 400+", label: "Zákazníků celkem" },
  { value: "4.9★", label: "Průměrné hodnocení" },
  { value: "24/7", label: "Hodin dostupnosti" },
  { value: "5+", label: "Let zkušeností" },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-[#F97316]"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-[#F97316]">Proč si vybrat nás</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-2">
              Přeprava které
              <br />
              <span className="text-[#F97316]">můžete věřit</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#F97316] mb-10"></div>

            <div className="space-y-8">
              {reasons.map((r) => (
                <div key={r.num} className="flex gap-5">
                  <div className="text-[#F97316] font-bold text-sm w-8 flex-shrink-0 pt-0.5">{r.num}</div>
                  <div>
                    <div className="font-bold text-[#0F172A] mb-1">{r.title}</div>
                    <div className="text-[#475569] text-sm leading-relaxed">{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="bg-[#1E3A8A] rounded-2xl p-8">
            <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-6">Naše výsledky</div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/10 border border-white/10 rounded-xl p-5">
                  <div className="text-3xl font-bold text-white mb-1">
                    {s.value.includes("★")
                      ? <>{s.value.replace("★", "")}<span className="text-[#F97316]">★</span></>
                      : s.value.includes("+") && s.value !== "24/7"
                      ? <>{s.value.replace("+", "")}<span className="text-[#F97316]">+</span></>
                      : s.value
                    }
                  </div>
                  <div className="text-white/40 text-xs font-bold tracking-wider uppercase">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="border border-white/10 rounded-xl p-5">
              <p className="text-white/70 text-sm italic leading-relaxed mb-3">
                &ldquo;Fantastická služba. Řidič čekal i přes zpoždění letu a byl velmi profesionální. Určitě využiji opakovaně.&rdquo;
              </p>
              <div className="text-white/40 text-xs font-bold tracking-wider uppercase">Martina K. · Praha</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
