import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Fleet from "@/components/Fleet";
import Testimonials from "@/components/Testimonials";
import B2B from "@/components/B2B";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "NaLetistelevne.cz",
  "description": "Spolehlivá a levná doprava na letiště Praha. Pevná cena, profesionální řidiči, sledování letu.",
  "url": "https://www.naletistelevne.cz",
  "telephone": "+420606079179",
  "email": "info@naletistelevne.cz",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Praha",
    "addressCountry": "CZ",
  },
  "priceRange": "790 - 1790 CZK",
  "openingHours": "Mo-Su 00:00-23:59",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 50.1008,
      "longitude": 14.2600,
    },
    "geoRadius": "200000",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Transfery na letiště Praha",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Sedan Economy",
        "description": "Transfer sedan pro 1-4 cestující",
        "price": "790",
        "priceCurrency": "CZK",
      },
      {
        "@type": "Offer",
        "name": "Minivan Economy",
        "description": "Transfer minivan pro 1-7 cestující",
        "price": "990",
        "priceCurrency": "CZK",
      },
    ],
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Fleet />
        <Testimonials />
        <B2B />
        <FAQ />
      </main>
      <Footer />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 p-3 flex gap-2 shadow-lg">
        <a
          href="tel:+420606079179"
          className="flex-1 flex items-center justify-center gap-2 border border-[#1E3A8A] text-[#1E3A8A] font-semibold text-sm py-3 rounded-xl cursor-pointer"
        >
          Zavolat
        </a>
        <a
          href="#rezervace"
          className="flex-1 flex items-center justify-center bg-[#F97316] text-white font-semibold text-sm py-3 rounded-xl cursor-pointer"
        >
          Rezervovat online
        </a>
      </div>
    </>
  );
}
