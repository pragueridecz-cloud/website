"use client";
import { useState, useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";

const GMAPS_KEY = "AIzaSyAgl9xkJoahOyxLWTjRLrPEXxYfqTXyH7k";

const AIRPORTS = [
  { code: "PRG", name: "Praha Václava Havla", lat: 50.1008, lng: 14.2600, price: "od 790 Kč", time: "20–35 min", primary: true, country: "🇨🇿" },
  { code: "BRQ", name: "Brno-Tuřany", lat: 49.1513, lng: 16.6944, price: "od 2 900 Kč", time: "2,5 hod", country: "🇨🇿" },
  { code: "OSR", name: "Ostrava-Mošnov", lat: 49.6963, lng: 18.1111, price: "od 4 900 Kč", time: "3,5 hod", country: "🇨🇿" },
  { code: "VIE", name: "Vídeň International", lat: 48.1103, lng: 16.5697, price: "od 4 500 Kč", time: "3,5 hod", country: "🇦🇹" },
  { code: "BTS", name: "Bratislava Štefánik", lat: 48.1702, lng: 17.2127, price: "od 4 200 Kč", time: "3,5 hod", country: "🇸🇰" },
  { code: "BUD", name: "Budapešť Liszt Ferenc", lat: 47.4298, lng: 19.2611, price: "od 6 900 Kč", time: "5 hod", country: "🇭🇺" },
  { code: "MUC", name: "Mnichov", lat: 48.3537, lng: 11.7750, price: "od 7 900 Kč", time: "4 hod", country: "🇩🇪" },
  { code: "FRA", name: "Frankfurt am Main", lat: 50.0379, lng: 8.5622, price: "od 8 900 Kč", time: "4,5 hod", country: "🇩🇪" },
  { code: "DRS", name: "Drážďany", lat: 51.1328, lng: 13.7672, price: "od 3 900 Kč", time: "1,5 hod", country: "🇩🇪" },
  { code: "BER", name: "Berlín Brandenburg", lat: 52.3667, lng: 13.5033, price: "od 8 900 Kč", time: "4 hod", country: "🇩🇪" },
];

declare global {
  interface Window { google: any; initGMap: () => void; }
}

export default function CoverageMap() {
  const [active, setActive] = useState("PRG");
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const linesRef = useRef<any[]>([]);
  const circlesRef = useRef<any[]>([]);

  const activeAirport = AIRPORTS.find(a => a.code === active)!;
  const PRAGUE = { lat: 50.0755, lng: 14.4378 };

  useEffect(() => {
    if (window.google?.maps) { initMap(); return; }
    window.initGMap = initMap;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GMAPS_KEY}&callback=initGMap&language=cs`;
    script.async = true;
    document.head.appendChild(script);
    return () => { window.initGMap = () => {}; };
  }, []);

  function initMap() {
    if (!mapRef.current) return;
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 49.5, lng: 14.0 },
      zoom: 5,
      mapTypeId: "roadmap",
      disableDefaultUI: true,
      zoomControl: true,
      styles: [
        { featureType: "all", elementType: "labels.text.fill", stylers: [{ color: "#1E3A8A" }] },
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

    // Dosahové kruhy od Prahy
    [200000, 400000, 700000].forEach((radius, i) => {
      const circle = new window.google.maps.Circle({
        map,
        center: PRAGUE,
        radius,
        strokeColor: "#F97316",
        strokeOpacity: 0.15 - i * 0.04,
        strokeWeight: 1,
        fillColor: "#F97316",
        fillOpacity: 0.02,
      });
      circlesRef.current.push(circle);
    });

    // Praha marker (střed)
    new window.google.maps.Marker({
      position: PRAGUE,
      map,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: "#1E3A8A",
        fillOpacity: 1,
        strokeColor: "#fff",
        strokeWeight: 3,
      },
      title: "Praha (výchozí bod)",
      zIndex: 10,
    });

    // Letiště markery
    AIRPORTS.forEach(airport => {
      const marker = new window.google.maps.Marker({
        position: { lat: airport.lat, lng: airport.lng },
        map,
        title: airport.name,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: airport.primary ? 9 : 7,
          fillColor: airport.primary ? "#F97316" : "#1E3A8A",
          fillOpacity: 1,
          strokeColor: "#fff",
          strokeWeight: 2,
        },
        label: {
          text: airport.code,
          color: "#fff",
          fontSize: "9px",
          fontWeight: "bold",
        },
        zIndex: airport.primary ? 9 : 5,
      });

      const line = new window.google.maps.Polyline({
        path: [PRAGUE, { lat: airport.lat, lng: airport.lng }],
        map,
        strokeColor: active === airport.code ? "#F97316" : "#1E3A8A",
        strokeOpacity: active === airport.code ? 0.8 : 0.2,
        strokeWeight: active === airport.code ? 2 : 1,
        geodesic: true,
      });
      linesRef.current.push({ code: airport.code, line });

      marker.addListener("click", () => setActive(airport.code));
      markersRef.current.push({ code: airport.code, marker });
    });
  }

  // Aktualizuj linky při změně aktivního letiště
  useEffect(() => {
    if (!mapLoaded) return;
    linesRef.current.forEach(({ code, line }) => {
      line.setOptions({
        strokeColor: code === active ? "#F97316" : "#1E3A8A",
        strokeOpacity: code === active ? 0.8 : 0.2,
        strokeWeight: code === active ? 2.5 : 1,
      });
    });
    markersRef.current.forEach(({ code, marker }) => {
      const airport = AIRPORTS.find(a => a.code === code)!;
      marker.setIcon({
        path: window.google?.maps?.SymbolPath?.CIRCLE,
        scale: code === active ? 10 : (airport.primary ? 9 : 7),
        fillColor: code === active ? "#F97316" : (airport.primary ? "#F97316" : "#1E3A8A"),
        fillOpacity: 1,
        strokeColor: "#fff",
        strokeWeight: code === active ? 3 : 2,
      });
    });
    // Pan na aktivní letiště
    if (mapInstanceRef.current) {
      const airport = AIRPORTS.find(a => a.code === active)!;
      mapInstanceRef.current.panTo({ lat: (PRAGUE.lat + airport.lat) / 2, lng: (PRAGUE.lng + airport.lng) / 2 });
    }
  }, [active, mapLoaded]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          label="Pokrytí"
          title="Kam vás odvezeme"
          highlight="10 letišť v dosahu"
          subtitle="Praha je naše základna. Přepravujeme na všechna letiště v dosahu 700 km – z domu až na terminál."
        />

        <div className="grid md:grid-cols-5 gap-6 items-start">
          {/* Google Maps */}
          <div className="md:col-span-3">
            <div ref={mapRef} style={{ height: "420px", borderRadius: "16px", overflow: "hidden", border: "1px solid #e2e8f0" }} />
          </div>

          {/* Info panel */}
          <div className="md:col-span-2 flex flex-col gap-3">
            {/* Aktivní letiště detail */}
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderTop: "3px solid #F97316", borderRadius: "14px", padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <span style={{ fontSize: "22px" }}>{activeAirport.country}</span>
                <div>
                  <div style={{ background: "#1E3A8A", color: "#fff", fontFamily: "monospace", fontWeight: 700, fontSize: "13px", padding: "2px 8px", borderRadius: "5px", display: "inline-block" }}>{activeAirport.code}</div>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#1E3A8A", fontSize: "15px", marginTop: "3px" }}>{activeAirport.name}</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
                <div style={{ background: "#fff", borderRadius: "10px", padding: "12px", border: "1px solid #e2e8f0", textAlign: "center" as const }}>
                  <div style={{ fontSize: "10px", color: "#94a3b8", textTransform: "uppercase" as const, letterSpacing: "0.5px", marginBottom: "4px" }}>Cena od</div>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, color: "#F97316", fontSize: "18px" }}>{activeAirport.price}</div>
                </div>
                <div style={{ background: "#fff", borderRadius: "10px", padding: "12px", border: "1px solid #e2e8f0", textAlign: "center" as const }}>
                  <div style={{ fontSize: "10px", color: "#94a3b8", textTransform: "uppercase" as const, letterSpacing: "0.5px", marginBottom: "4px" }}>Čas jízdy</div>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, color: "#1E3A8A", fontSize: "18px" }}>{activeAirport.time}</div>
                </div>
              </div>
              <a href="/#rezervace" style={{ display: "block", textAlign: "center" as const, background: "#F97316", color: "#fff", textDecoration: "none", padding: "11px", borderRadius: "10px", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "14px" }}>
                Rezervovat na {activeAirport.code} →
              </a>
            </div>

            {/* Seznam letišť */}
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "12px", maxHeight: "220px", overflowY: "auto" as const }}>
              {AIRPORTS.map(a => (
                <button key={a.code} onClick={() => setActive(a.code)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "8px 10px", marginBottom: "3px", background: active === a.code ? "#EFF6FF" : "transparent", border: active === a.code ? "1px solid #BFDBFE" : "1px solid transparent", borderRadius: "8px", cursor: "pointer", textAlign: "left" as const, transition: "all 0.15s" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 600, color: active === a.code ? "#1E3A8A" : "#475569" }}>
                    <span>{a.country}</span>
                    <span style={{ fontFamily: "monospace", fontSize: "11px", background: active === a.code ? "#1E3A8A" : "#e2e8f0", color: active === a.code ? "#fff" : "#64748b", padding: "1px 5px", borderRadius: "4px" }}>{a.code}</span>
                    {a.name.length > 20 ? a.name.substring(0, 20) + "…" : a.name}
                  </span>
                  <span style={{ fontSize: "11px", color: "#F97316", fontWeight: 700, flexShrink: 0 }}>{a.price}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
