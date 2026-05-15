import type { Metadata } from "next";
import { Bree_Serif, Montserrat, Oxanium } from "next/font/google";
import {
  defaultDescription,
  defaultKeywords,
  siteName,
  siteUrl,
} from "@/lib/seo";
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
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Kuenstliche Intelligenz Schulung, Beratung & Software-Entwicklung | StefanAI",
    template: "%s | StefanAI",
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
    languages: { "de-DE": "/" },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName,
    url: siteUrl,
    title:
      "Kuenstliche Intelligenz Schulung, Beratung & Software-Entwicklung | StefanAI",
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kuenstliche Intelligenz Schulung, Beratung & Software-Entwicklung | StefanAI",
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, address: false, email: false },
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
