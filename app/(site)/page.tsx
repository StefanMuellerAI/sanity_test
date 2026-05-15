import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { SchulungCard } from "@/components/schulung-card";
import { ServiceCards } from "@/components/service-cards";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
} from "@/components/structured-data";
import { getAllBlogPosts, getAllSchulungen } from "@/sanity/lib/fetch";
import { isSanityConfigured } from "@/sanity/env";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Kuenstliche Intelligenz Schulung, Beratung & Software-Entwicklung",
  description:
    "StefanAI - Spezialist fuer Kuenstliche Intelligenz Schulungen, KI-Beratung und KI-Software-Entwicklung. Praxisnahe Workshops zu ChatGPT, Generative KI, RAG und AI Agents fuer Unternehmen in DACH.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const [schulungen, blogPosts] = await Promise.all([
    getAllSchulungen(),
    getAllBlogPosts(),
  ]);
  const highlights = schulungen.filter((s) => s.highlight);
  const neuesteBeitraege = blogPosts.slice(0, 3);

  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-32 w-[700px] h-[700px] rounded-full bg-cyber-sunrise opacity-40 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-holo-dream opacity-25 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-20 pb-20 lumin-frost">
          {!isSanityConfigured && (
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyber-gelb/40 bg-cyber-gelb/10 px-4 py-2 text-xs text-cyber-gelb">
              <span className="w-2 h-2 rounded-full bg-cyber-gelb animate-pulse" />
              Demo-Modus aktiv - setze NEXT_PUBLIC_SANITY_PROJECT_ID, um Inhalte aus Sanity zu laden.
            </div>
          )}

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 items-center">
            <div>
              <h1 className="heading-caps text-4xl sm:text-5xl lg:text-6xl">
                KI ist gekommen,{" "}
                <span className="text-cyber-sunrise">um zu bleiben.</span>{" "}
                Ihre Organisation auch?
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/85 leading-relaxed">
                StefanAI ist dein Partner fuer Kuenstliche Intelligenz im
                Unternehmen - Schulung, Beratung und Software-Entwicklung aus
                einer Hand. Praxisnah, ehrlich und ohne KI-Hype.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="#kontakt" className="btn-kontakt">
                  Kontakt aufnehmen
                </Link>
                <Link href="#leistungen" className="btn-ghost">
                  Leistungen entdecken
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] lg:aspect-square w-full max-w-xl mx-auto lg:mx-0">
              <div
                aria-hidden
                className="absolute inset-0 bg-cyber-sunrise opacity-30 blur-3xl rounded-full"
              />
              <Image
                src="/keyvisual.png"
                alt="Digit, der KI-Co-Host von StefanAI, in einer Cyberpunk-Stadt"
                fill
                priority
                sizes="(min-width: 1024px) 540px, (min-width: 640px) 80vw, 100vw"
                className="relative object-contain drop-shadow-[0_20px_50px_rgba(230,46,116,0.35)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / Ueber */}
      <section id="ueber" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div>
            <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">
              Willkommen
            </p>
            <h2 className="heading text-4xl sm:text-5xl mb-6">
              Willkommen in der Welt der{" "}
              <span className="text-cyber-sunrise">Vielfalt</span>
            </h2>
            <div className="space-y-4 text-white/85 leading-relaxed">
              <p>
                Diese KI-Konsolidierung verandert nicht nur, was und wie wir
                Software bauen, sondern wie wir als Organisation arbeiten,
                lernen und entscheiden. Ich begleite Unternehmen aller Groessen
                dabei, Kuenstliche Intelligenz nicht als Schlagwort, sondern als
                Werkzeug zu nutzen.
              </p>
              <p>
                Meine Schulungen sind hands-on, meine Beratung ehrlich und
                meine Softwareprojekte produktionsreif - ich helfe euch,
                Klarheit ueber das eigene KI-Vorhaben zu gewinnen und es
                Schritt fuer Schritt umzusetzen.
              </p>
            </div>
          </div>

          <div className="rounded-soft border border-white/10 bg-white/5 p-6 lumin-frost">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-soft mb-5 bg-gradient-to-br from-weltraum-blau via-cyber-violett/40 to-cyber-pink/30">
              <Image
                src="/portrait.jpg"
                alt="Stefan Mueller, Gruender von StefanAI"
                fill
                sizes="(min-width: 1024px) 360px, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="heading text-2xl text-white">Stefan Mueller</p>
              <p className="text-sm text-cyber-tuerkis ki-highlight mt-1">
                Gruender StefanAI
              </p>
              <p className="text-sm text-white/70 mt-3 leading-relaxed">
                Jahrgang 1982 aus Koeln. Tatig im Bereich KI mit Schulungen,
                Beratung und Softwareentwicklung. Dozent u.a. bei dbb akademie
                und Haufe Akademie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats-Bar mit Cyber-Sunrise */}
      <section className="bg-cyber-sunrise text-weltraum-blau py-14 lumin-frost relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            { k: "2.240+", v: "Schulungstage" },
            { k: "103+", v: "Beratungen" },
            { k: "449.879", v: "Zeilen Programmiercode" },
          ].map((item) => (
            <div key={item.v}>
              <div className="heading text-5xl sm:text-6xl">{item.k}</div>
              <div className="text-xs sm:text-sm uppercase tracking-widest mt-2 font-semibold">
                {item.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service-Karten (Dabei helfe ich weiter) */}
      <ServiceCards />

      {/* Highlights */}
      {highlights.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16">
          <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">
            Empfehlungen
          </p>
          <h2 className="heading text-4xl mb-8">Highlight-Schulungen</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((s) => (
              <SchulungCard key={s._id} s={s} />
            ))}
          </div>
        </section>
      )}

      {/* Alle Schulungen */}
      <section id="schulungen" className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">
            Schulungsportfolio
          </p>
          <h2 className="heading-caps text-4xl">Alle Schulungen</h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            Praxisnahe KI-Schulungen - online, in Praesenz oder hybrid.
            Inhalte werden in Sanity gepflegt und sind dort jederzeit
            erweiterbar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schulungen.map((s) => (
            <SchulungCard key={s._id} s={s} />
          ))}
        </div>
      </section>

      {/* Blog */}
      {neuesteBeitraege.length > 0 && (
        <section id="blog" className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-8 gap-6 flex-wrap">
            <div>
              <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">
                Blog
              </p>
              <h2 className="heading text-4xl">Aktuelle Beitraege</h2>
              <p className="mt-2 text-white/70 max-w-xl">
                Artikel mit Begleitvideo und PDF-Downloads - Checklisten,
                Argumentationshilfen und Vorlagen.
              </p>
            </div>
            <Link href="/blog" className="btn-ghost">
              Alle Beitraege
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {neuesteBeitraege.map((p) => (
              <BlogCard key={p._id} p={p} />
            ))}
          </div>
        </section>
      )}

      {/* Kontakt */}
      <section id="kontakt" className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-soft p-10 sm:p-14 bg-cyber-sunrise text-weltraum-blau lumin-frost">
          <p className="ki-highlight text-xs mb-3">Naechster Schritt</p>
          <h2 className="heading-caps text-4xl sm:text-5xl max-w-2xl">
            Lass uns ueber eure KI-Roadmap sprechen.
          </h2>
          <p className="mt-4 max-w-xl">
            Schreib uns kurz, was ihr vorhabt - wir melden uns innerhalb eines
            Werktages mit einem Vorschlag.
          </p>
          <a
            href="mailto:hallo@stefanai.example"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-weltraum-blau text-white px-6 py-3 font-semibold hover:bg-black/70 transition"
          >
            hallo@stefanai.example
          </a>
        </div>
      </section>
    </>
  );
}
