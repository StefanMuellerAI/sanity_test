// Zentrale SEO-Konfiguration. Wenn auf Vercel die Variable
// NEXT_PUBLIC_SITE_URL gesetzt ist (z.B. https://stefanai.de), werden
// kanonische URLs, OpenGraph- und JSON-LD-Eintraege automatisch korrekt
// gesetzt. Andernfalls greift der Default.

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://stefanai.de"
).replace(/\/$/, "");

export const siteName = "StefanAI";

export const defaultDescription =
  "StefanAI bietet praxisnahe Schulungen, Beratung und Software-Entwicklung rund um Kuenstliche Intelligenz (KI). Vom Workshop fuer Entscheider bis zur produktiven GenAI-Implementierung.";

export const defaultKeywords = [
  "Kuenstliche Intelligenz Schulung",
  "KI Schulung",
  "KI Training",
  "KI Beratung",
  "Kuenstliche Intelligenz Beratung",
  "KI Software Entwicklung",
  "AI Consulting",
  "Generative KI",
  "ChatGPT Schulung",
  "Prompt Engineering",
  "RAG",
  "AI Agents",
  "EU AI Act",
  "StefanAI",
];

export function absoluteUrl(path = "/") {
  if (!path.startsWith("/")) path = "/" + path;
  return `${siteUrl}${path}`;
}
