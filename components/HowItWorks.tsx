import SectionHeading from "./SectionHeading";

export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Vyplňte rezervaci",
      desc: "Zadejte odkud, kam a kdy. Systém vám okamžitě ukáže pevnou cenu bez skrytých poplatků.",
    },
    {
      num: "2",
      title: "Potvrďte a zaplaťte",
      desc: "Zaplaťte kartou online (10% sleva) nebo zvolte platbu hotovostí řidiči. Ihned dostanete potvrzení e-mailem.",
    },
    {
      num: "3",
      title: "Užijte si cestu",
      desc: "Řidič vás vyzvedne přesně na čas. Sledujeme váš let — pokud má zpoždění, řidič počká.",
    },
  ];

  return (
    <section id="jak-to-funguje" className="py-16 bg-[#EFF6FF]">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading label="Postup" title="Jak to funguje?" subtitle="Rezervace trvá 2 minuty. Vše ostatní zařídíme my." />
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* connector line on desktop */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-[#CBD5E1] z-0" />
          {steps.map((step) => (
            <div key={step.num} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1E3A8A] text-white text-2xl font-bold flex items-center justify-center mb-4 shadow-md">
                {step.num}
              </div>
              <h3 className="font-semibold text-[#0F172A] text-lg mb-2">{step.title}</h3>
              <p className="text-[#475569] text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#rezervace"
            className="inline-block bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-8 py-3 rounded-xl transition-colors cursor-pointer text-sm"
          >
            Rezervovat dopravu
          </a>
        </div>
      </div>
    </section>
  );
}
