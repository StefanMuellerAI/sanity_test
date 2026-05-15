# StefanAI - KI-Schulungsportfolio (Next.js + Sanity)

Demo-Projekt zum Testen von [Sanity](https://www.sanity.io) als Headless CMS:
eine Marketing-Site fuer das KI-Schulungsportfolio von **StefanAI**, gepflegt
ueber das eingebettete Sanity Studio. Designed nach dem StefanAI Styleguide
(Cyber-Sunrise / Holo-Dream Verlaeufe, Bree Serif / Montserrat / Oxanium).

## Features

- **Next.js 15** (App Router, React 19) + **TypeScript**
- **Tailwind CSS** mit StefanAI Farb-Tokens
- **Sanity Studio** unter `/studio` (Schema fuer `schulung`)
- **Demo-Daten Fallback** - die Seite ist sofort lauffaehig, auch ohne
  konfiguriertes Sanity-Projekt. Sobald `NEXT_PUBLIC_SANITY_PROJECT_ID`
  gesetzt ist, werden Inhalte aus Sanity geladen.
- **One-Click Deploy** auf Vercel: Repo importieren, Build laeuft sofort.

## Schnellstart lokal

```bash
npm install
npm run dev
```

Die App laeuft unter http://localhost:3000, das Studio unter
http://localhost:3000/studio. Ohne Sanity-Konfiguration werden die
Beispiel-Schulungen aus `sanity/lib/sample-data.ts` angezeigt.

## Deployment auf Vercel

1. Repo auf GitHub pushen.
2. Auf [vercel.com/new](https://vercel.com/new) das Repository importieren.
3. **Build laeuft ohne weitere Konfiguration** - die Seite ist nach dem
   Deploy mit den Demo-Schulungen erreichbar.

### Sanity verbinden (optional aber empfohlen)

1. Auf [sanity.io/manage](https://www.sanity.io/manage) ein neues Projekt
   anlegen (kostenloser Plan reicht).
2. In Vercel unter *Project Settings -> Environment Variables* hinzufuegen:

   | Variable | Wert |
   |----------|------|
   | `NEXT_PUBLIC_SANITY_PROJECT_ID` | aus Sanity Manage |
   | `NEXT_PUBLIC_SANITY_DATASET` | `production` |
   | `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-10-01` |

3. In Sanity unter *API -> CORS Origins* die Vercel-URL hinzufuegen
   (mit Credentials), damit das Studio funktioniert.
4. Redeploy in Vercel ausloesen. `/studio` ist nun einsatzbereit, dort
   koennen Schulungen angelegt werden. Die Site zeigt automatisch die
   Sanity-Inhalte an.

## Schema

Eine Schulung (`schulung`) besteht aus:

- Titel, URL-Slug, Untertitel
- Kurzbeschreibung (Teaser)
- Ausfuehrliche Beschreibung (Portable Text)
- Agenda (Liste mit Titel + Beschreibung)
- Dauer, Format (Online/Praesenz/Hybrid), Level, Preis
- Zielgruppe, Voraussetzungen
- Headerbild
- Highlight-Flag, Reihenfolge

Schema-Datei: `sanity/schemaTypes/schulung.ts`.

## Struktur

```
app/
  (site)/                Marketing-Site (mit Header/Footer)
    page.tsx             Startseite mit Portfolio-Listing
    schulungen/[slug]/   Schulungs-Detailseite
  studio/[[...tool]]/    Eingebettetes Sanity Studio
sanity/
  schemaTypes/           Sanity Schema
  lib/                   Client, Queries, Fallback-Daten
components/              UI-Komponenten (Logo, SchulungCard)
```
