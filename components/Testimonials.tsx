import SectionHeading from "./SectionHeading";

const reviews = [
  {
    name: "Markéta S.",
    text: "Rezervovala jsem den předem, přijel přesně na čas. Řidič byl moc milý, pomohl mi se zavazadly. Cena přesně taková, jak bylo uvedeno. Určitě znovu!",
    stars: 5,
    source: "Google",
  },
  {
    name: "Tomáš K.",
    text: "Let měl 2 hodiny zpoždění a řidič stejně čekal. Zaplatil jsem stejnou cenu jako rezervoval. Tohle je přesně to, co člověk potřebuje po dlouhém letu.",
    stars: 5,
    source: "TripAdvisor",
  },
  {
    name: "Jana P.",
    text: "Jezdíme firemně každý týden. Fakturace bez problémů, řidiči spolehliví, auta čistá. Doporučuji každé firmě.",
    stars: 5,
    source: "Google",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading label="Recenze" title="Co říkají naši zákazníci" subtitle="4,9/5 z 500+ recenzí na Google a TripAdvisoru" />
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-yellow-400 text-lg mb-3">
                {"★".repeat(r.stars)}
              </div>
              <p className="text-[#0F172A] text-sm leading-relaxed mb-4 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-[#0F172A]">{r.name}</span>
                <span className="text-xs text-[#475569] bg-[#F1F5F9] px-2 py-1 rounded-full">
                  {r.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
