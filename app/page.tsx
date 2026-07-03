import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import TrustNumbers from "@/components/TrustNumbers"
import FloatingCTA from "@/components/FloatingCTA"
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Fleet from "@/components/Fleet";
import Testimonials from "@/components/Testimonials";
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
        <TrustNumbers />
        <HowItWorks />
        <Services />
        <Fleet />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />

      <FloatingCTA />
    </>
  );
}
