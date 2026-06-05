import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Na letiště levně | Doprava na letiště Praha od 790 Kč",
  description: "Rezervujte dopravu na letiště Praha předem. Pevná cena, profesionální řidiči, sledování letu. Sedan od 790 Kč, minivan od 990 Kč. Bez příplatků za zpoždění.",
  keywords: "doprava na letiště Praha, transfer letiště Praha, odvoz na letiště levně, taxi letiště Praha, rezervace auta na letiště",
  openGraph: {
    title: "Na letiště levně | Doprava na letiště Praha od 790 Kč",
    description: "Pevná cena, profesionální řidiči, sledování letu. Bez příplatků za zpoždění letu.",
    url: "https://www.naletistelevne.cz",
    siteName: "NaLetistelevne.cz",
    locale: "cs_CZ",
    type: "website",
  },
  alternates: {
    canonical: "https://www.naletistelevne.cz",
    languages: {
      "cs": "https://www.naletistelevne.cz",
      "en": "https://www.pragueride.com",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <script dangerouslySetInnerHTML={{__html: `
          window.addEventListener('message', function(e) {
            if (!e.data || e.data.type !== 'nll-height') return;
            var h = parseInt(e.data.height);
            if (!h || h < 100) return;
            var iframe = document.querySelector('iframe[title="Rezervační formulář"]');
            if (iframe) { iframe.style.height = h + 'px'; iframe.style.minHeight = h + 'px'; }
          });
        `}} />
      </body>
    </html>
  );
}
