"use client";
import { useState, useEffect, useRef } from "react";

const GMAPS_KEY = "AIzaSyAgl9xkJoahOyxLWTjRLrPEXxYfqTXyH7k";
const PRAGUE = { lat: 50.0755, lng: 14.4378 };

const AIRPORTS = [
  {
    code: "PRG", name: "Letiště Václava Havla Praha", city: "Praha, Česko",
    lat: 50.1008, lng: 14.2600, price: "od 790 Kč", time: "20–35 min",
    country: "🇨🇿", primary: true,
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    desc: "Největší a nejrušnější letiště v ČR s více než 17 miliony cestujících ročně. Dvě terminály – T1 pro Schengen, T2 pro mimoevropské lety. Vzdáleno cca 17 km od centra Prahy.",
    facts: ["Terminál 1 – Schengen (většina evropských letů)", "Terminál 2 – mimo Schengen, zámořské lety", "17 km od Václavského náměstí", "Sledujeme zpoždění vašeho letu"],
  },
  {
    code: "BRQ", name: "Letiště Brno-Tuřany", city: "Brno, Česko",
    lat: 49.1513, lng: 16.6944, price: "od 2 900 Kč", time: "2,5 hod",
    country: "🇨🇿",
    img: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80",
    desc: "Druhé největší letiště v ČR. Pravidelné linky do Londýna, Amsterdamu, Frankfurtu a dalších evropských destinací. Ideální alternativa pro cestující z jižní Moravy.",
    facts: ["210 km od Prahy", "Pravidelné linky Ryanair, Wizz Air", "Velké parkoviště, jednoduchá orientace", "Ideální pro cestovatele z Moravy"],
  },
  {
    code: "OSR", name: "Letiště Ostrava-Mošnov", city: "Ostrava, Česko",
    lat: 49.6963, lng: 18.1111, price: "od 4 900 Kč", time: "3,5 hod",
    country: "🇨🇿",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    desc: "Letiště v srdci Slezska. Sezónní i pravidelné charterové lety do celé Evropy a Turecka. Dobré spojení s Polskem a Slovenskem.",
    facts: ["360 km od Prahy", "Charterové lety do Turecka, Řecka, Egypta", "Blízko polských hranic", "Kapacitní záchytné parkoviště"],
  },
  {
    code: "VIE", name: "Vídeňské mezinárodní letiště", city: "Vídeň, Rakousko",
    lat: 48.1103, lng: 16.5697, price: "od 4 500 Kč", time: "3,5 hod",
    country: "🇦🇹",
    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
    desc: "Největší letiště ve středoevropském regionu s přímými lety do celého světa. Skvělá alternativa pro lety do Asie, Ameriky nebo Blízkého východu, které z Prahy neodjíždí přímo.",
    facts: ["330 km od Prahy", "Přímé lety do 200+ destinací", "Hub Emirates, Austrian Airlines", "Výborná alternativa pro asijské lety"],
  },
  {
    code: "BTS", name: "Letiště Bratislava Štefánik", city: "Bratislava, Slovensko",
    lat: 48.1702, lng: 17.2127, price: "od 4 200 Kč", time: "3,5 hod",
    country: "🇸🇰",
    img: "https://images.unsplash.com/photo-1583170598970-cf6e74bb9f68?w=800&q=80",
    desc: "Blízké slovenské letiště, které používají zejména nízkonákladové aerolinie. Ryanair zde létá do mnoha destinací, které nejsou dostupné z Prahy.",
    facts: ["330 km od Prahy", "Silná základna Ryanair", "Levnější lety do mnoha destinací", "Bez front u bezpečnostní kontroly"],
  },
  {
    code: "BUD", name: "Letiště Budapešť Liszt Ferenc", city: "Budapešť, Maďarsko",
    lat: 47.4298, lng: 19.2611, price: "od 6 900 Kč", time: "5 hod",
    country: "🇭🇺",
    img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80",
    desc: "Jedno z nejrušnějších letišť ve střední Evropě. Wizz Air má v Budapešti silnou základnu s levnými lety do stovek destinací.",
    facts: ["520 km od Prahy", "Největší základna Wizz Air", "Lety do Asie a Ameriky", "Moderní terminály"],
  },
  {
    code: "MUC", name: "Letiště Mnichov", city: "Mnichov, Německo",
    lat: 48.3537, lng: 11.7750, price: "od 7 900 Kč", time: "4 hod",
    country: "🇩🇪",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    desc: "Druhé největší německé letiště a jeden z největších hubů v Evropě. Lufthansa zde operuje mezikontinentální lety do Ameriky, Asie a Austrálie.",
    facts: ["380 km od Prahy", "Hub Lufthansy a Star Alliance", "Dva terminály, výborné přestupy", "Moderní, komfortní letiště"],
  },
  {
    code: "FRA", name: "Letiště Frankfurt", city: "Frankfurt, Německo",
    lat: 50.0379, lng: 8.5622, price: "od 8 900 Kč", time: "4,5 hod",
    country: "🇩🇪",
    img: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?w=800&q=80",
    desc: "Největší německé letiště a jeden z nejvytíženějších hubů v celé Evropě. Ideální pro transatlantické přestupy do celého světa.",
    facts: ["480 km od Prahy", "Největší hub v Evropě", "150+ airlines, 300+ destinací", "Přímé spojení na letiště vlakem"],
  },
  {
    code: "DRS", name: "Letiště Drážďany", city: "Drážďany, Německo",
    lat: 51.1328, lng: 13.7672, price: "od 3 900 Kč", time: "1,5 hod",
    country: "🇩🇪",
    img: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=800&q=80",
    desc: "Malé a přehledné německé letiště pouhých 155 km od Prahy. Ideální pro rychlé lety do Německa bez přestupu v přeplněném Frankfurtu.",
    facts: ["155 km od Prahy – nejbližší zahraniční letiště", "Bez front a stresu", "Lety Lufthansa, Eurowings", "Jednoduché parkování"],
  },
  {
    code: "BER", name: "Berlín Brandenburg", city: "Berlín, Německo",
    lat: 52.3667, lng: 13.5033, price: "od 8 900 Kč", time: "4 hod",
    country: "🇩🇪",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    desc: "Moderní berlínské letiště, brána do německé metropole. Přímé spojení do celé Evropy a zámoří s výbornými přestupními možnostmi.",
    facts: ["480 km od Prahy", "Nové terminály od roku 2020", "Lety do 130+ destinací", "Přímé vlakové spojení do centra Berlína"],
  },
];

declare global { interface Window { google: any; initGMapDetail: () => void; } }

export default function AirportMapDetail() {
  const [active, setActive] = useState("PRG");
  const [mapLoaded, setMapLoaded] = useState(false);
  const [animating, setAnimating] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const linesRef = useRef<any[]>([]);

  const airport = AIRPORTS.find(a => a.code === active)!;

  function selectAirport(code: string) {
    if (code === active) return;
    setAnimating(true);
    setTimeout(() => { setActive(code); setAnimating(false); }, 220);
  }

  useEffect(() => {
    if (window.google?.maps) { initMap(); return; }
    window.initGMapDetail = initMap;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GMAPS_KEY}&callback=initGMapDetail&language=cs`;
    script.async = true;
    document.head.appendChild(script);
    return () => { window.initGMapDetail = () => {}; };
  }, []);

  function initMap() {
    if (!mapRef.current) return;
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 49.8, lng: 14.5 },
      zoom: 5,
      disableDefaultUI: true,
      zoomControl: true,
      styles: [
        { featureType: "all", elementType: "labels.text.fill", stylers: [{ color: "#00205B" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#dbeafe" }] },
        { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f0f9ff" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#bfdbfe" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#93c5fd" }] },
        { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#93c5fd" }, { weight: 1.5 }] },
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        { featureType: "transit", stylers: [{ visibility: "off" }] },
      ],
    });
    mapInstanceRef.current = map;
    setMapLoaded(true);

    // Praha marker
    new window.google.maps.Marker({
      position: PRAGUE, map,
      icon: { path: window.google.maps.SymbolPath.CIRCLE, scale: 10, fillColor: "#00205B", fillOpacity: 1, strokeColor: "#fff", strokeWeight: 3 },
      title: "Praha (výchozí bod)", zIndex: 10,
    });

    AIRPORTS.forEach(ap => {
      const line = new window.google.maps.Polyline({
        path: [PRAGUE, { lat: ap.lat, lng: ap.lng }], map,
        strokeColor: ap.code === "PRG" ? "#F97316" : "#00205B",
        strokeOpacity: ap.code === "PRG" ? 0.8 : 0.2,
        strokeWeight: ap.code === "PRG" ? 2.5 : 1, geodesic: true,
      });
      linesRef.current.push({ code: ap.code, line });

      const marker = new window.google.maps.Marker({
        position: { lat: ap.lat, lng: ap.lng }, map,
        title: ap.name,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: ap.code === "PRG" ? 10 : 7,
          fillColor: ap.code === "PRG" ? "#F97316" : "#00205B",
          fillOpacity: 1, strokeColor: "#fff", strokeWeight: 2,
        },
        label: { text: ap.code, color: "#fff", fontSize: "9px", fontWeight: "bold" },
        zIndex: ap.primary ? 9 : 5,
      });
      marker.addListener("click", () => selectAirport(ap.code));
      markersRef.current.push({ code: ap.code, marker });
    });
  }

  useEffect(() => {
    if (!mapLoaded) return;
    linesRef.current.forEach(({ code, line }) => {
      line.setOptions({
        strokeColor: code === active ? "#F97316" : "#00205B",
        strokeOpacity: code === active ? 0.8 : 0.2,
        strokeWeight: code === active ? 2.5 : 1,
      });
    });
    markersRef.current.forEach(({ code, marker }) => {
      const ap = AIRPORTS.find(a => a.code === code)!;
      marker.setIcon({
        path: window.google?.maps?.SymbolPath?.CIRCLE,
        scale: code === active ? 11 : (ap.primary ? 10 : 7),
        fillColor: code === active ? "#F97316" : (ap.primary ? "#F97316" : "#00205B"),
        fillOpacity: 1, strokeColor: "#fff",
        strokeWeight: code === active ? 3 : 2,
      });
    });
    if (mapInstanceRef.current) {
      const ap = AIRPORTS.find(a => a.code === active)!;
      mapInstanceRef.current.panTo({ lat: (PRAGUE.lat + ap.lat) / 2 - 0.5, lng: (PRAGUE.lng + ap.lng) / 2 });
    }
  }, [active, mapLoaded]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "28px", height: "2px", background: "#F97316" }} />
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Letiště v dosahu
          </span>
        </div>
        <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(28px,3.5vw,40px)", color: "#00205B", marginBottom: "32px", lineHeight: 1.1 }}>
          Kam vás odvezeme — <span style={{ color: "#F97316" }}>10 letišť</span>
        </h2>

        <div className="airport-map-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }}>

          {/* MAPA */}
          <div className="airport-map-sticky" style={{ position: "sticky", top: "120px" }}>
            <div ref={mapRef} style={{ height: "520px", borderRadius: "16px", overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 4px 24px rgba(0,32,91,0.08)" }} />
            {/* Airport list below map */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "14px" }}>
              {AIRPORTS.map(ap => (
                <button key={ap.code} onClick={() => selectAirport(ap.code)}
                  style={{
                    padding: "5px 10px", borderRadius: "20px", border: "1.5px solid",
                    borderColor: active === ap.code ? "#F97316" : "#e2e8f0",
                    background: active === ap.code ? "#FFF7ED" : "#fff",
                    color: active === ap.code ? "#F97316" : "#64748b",
                    fontSize: "11px", fontWeight: 700, cursor: "pointer",
                    transition: "all 0.15s", fontFamily: "monospace",
                  }}>
                  {ap.country} {ap.code}
                </button>
              ))}
            </div>
          </div>

          {/* DETAIL PANEL */}
          <div style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(8px)" : "translateY(0)",
            transition: "opacity 0.22s ease, transform 0.22s ease",
          }}>
            {/* Fotka */}
            <div style={{ position: "relative", height: "240px", borderRadius: "16px", overflow: "hidden", marginBottom: "20px" }}>
              <img src={airport.img} alt={airport.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,32,91,0.75) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "24px" }}>{airport.country}</span>
                  <span style={{ background: "#F97316", color: "#fff", fontFamily: "monospace", fontWeight: 800, fontSize: "14px", padding: "3px 10px", borderRadius: "6px" }}>
                    {airport.code}
                  </span>
                </div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "20px", color: "#fff", marginTop: "6px", lineHeight: 1.2 }}>
                  {airport.name}
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", marginTop: "3px" }}>{airport.city}</div>
              </div>
            </div>

            {/* Cena + čas */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
              <div style={{ background: "#FFF7ED", border: "1.5px solid #FED7AA", borderRadius: "12px", padding: "16px", textAlign: "center" as const }}>
                <div style={{ fontSize: "10px", color: "#94a3b8", textTransform: "uppercase" as const, letterSpacing: "1px", marginBottom: "6px", fontWeight: 600 }}>Cena od</div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, color: "#F97316", fontSize: "22px" }}>{airport.price}</div>
              </div>
              <div style={{ background: "#EFF6FF", border: "1.5px solid #BFDBFE", borderRadius: "12px", padding: "16px", textAlign: "center" as const }}>
                <div style={{ fontSize: "10px", color: "#94a3b8", textTransform: "uppercase" as const, letterSpacing: "1px", marginBottom: "6px", fontWeight: 600 }}>Délka jízdy</div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, color: "#00205B", fontSize: "22px" }}>{airport.time}</div>
              </div>
            </div>

            {/* Popis */}
            <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.7, marginBottom: "20px" }}>
              {airport.desc}
            </p>

            {/* Facts */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column" as const, gap: "8px" }}>
              {airport.facts.map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "#334155" }}>
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#F97316", color: "#fff", fontSize: "10px", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a href="/#rezervace"
              style={{ display: "block", textAlign: "center" as const, background: "#F97316", color: "#fff", textDecoration: "none", padding: "14px", borderRadius: "12px", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "15px", boxShadow: "0 4px 16px rgba(249,115,22,0.3)" }}>
              Rezervovat transfer na {airport.code} →
            </a>
          </div>
        </div>

        {/* Mobile: airport chips */}
        <style>{`
          @media (max-width: 768px) {
            .airport-map-grid { grid-template-columns: 1fr !important; }
            .airport-map-sticky { position: static !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
