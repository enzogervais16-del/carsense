import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CARSENSE – Nettoyage & Rénovation Automobile à Domicile | Bordeaux",
  description:
    "CARSENSE, spécialiste du nettoyage, lustrage et rénovation automobile à domicile en Gironde. Polissage carrosserie, rénovation de phares, protection céramique. Service disponible 6j/7 de 9h à 20h.",
  keywords: [
    "nettoyage auto domicile",
    "lustrage voiture Bordeaux",
    "rénovation phares Eysines",
    "detailing automobile Gironde",
    "polissage carrosserie Bordeaux",
    "protection céramique voiture",
    "nettoyage voiture à domicile Bordeaux",
    "CARSENSE",
    "rénovation automobile Eysines",
    "coup de clés voiture",
  ],
  openGraph: {
    title: "CARSENSE – Nettoyage & Rénovation Automobile à Domicile",
    description:
      "Votre voiture mérite le meilleur. Nettoyage, lustrage, polissage et protection céramique à domicile en Gironde. Disponible 6j/7 de 9h à 20h.",
    url: "https://carsense.fr",
    siteName: "CARSENSE",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "CARSENSE – Nettoyage automobile à domicile",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://carsense.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
