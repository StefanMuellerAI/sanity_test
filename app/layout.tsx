import type { Metadata } from "next";
import { Bree_Serif, Montserrat, Oxanium } from "next/font/google";
import "./globals.css";

const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bree-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-oxanium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StefanAI - KI-Schulungen mit Substanz",
  description:
    "Praxisnahe KI-Schulungen fuer Entscheider, Fachexperten und Entwickler:innen. Verwaltet mit Sanity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${breeSerif.variable} ${montserrat.variable} ${oxanium.variable}`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
