import Link from "next/link";
import { SchulungCard } from "@/components/schulung-card";
import { getAllSchulungen } from "@/sanity/lib/fetch";
import { isSanityConfigured } from "@/sanity/env";

export const revalidate = 60;

export default async function HomePage() {
  const schulungen = await getAllSchulungen();
  const highlights = schulungen.filter((s) => s.highlight);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full bg-cyber-sunrise opacity-30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-holo-dream opacity-20 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 lumin-frost">
          {!isSanityConfigured && (
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyber-gelb/40 bg-cyber-gelb/10 px-4 py-2 text-xs text-cyber-gelb">
              <span className="w-2 h-2 rounded-full bg-cyber-gelb animate-pulse" />
              Demo-Modus aktiv - setze NEXT_PUBLIC_SANITY_PROJECT_ID, um Inhalte aus Sanity zu laden.
            </div>
          )}

          <p className="ki-highlight text-cyber-tuerkis text-sm mb-6">
            KI-Schulungen 2026
          </p>
          <h1 className="heading-caps text-5xl sm:text-6xl lg:text-7xl max-w-4xl">
            Mach dein Team{" "}
            <span className="text-cyber-sunrise">KI-fest</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            Praxisnahe Schulungen rund um Generative KI - von der strategischen
            Einordnung bis zum produktiven Einsatz. Konzipiert fuer Entscheider,
            Fachexperten und Entwickler:innen.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#schulungen" className="btn-primary">
              Portfolio entdecken
            </Link>
            <Link href="#kontakt" className="btn-ghost">
              Beratung anfragen
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            {[
              { k: "120+", v: "Schulungstage / Jahr" },
              { k: "98%", v: "Weiterempfehlung" },
              { k: "6", v: "Formate" },
              { k: "1:1", v: "Coaching auf Wunsch" },
            ].map((item) => (
              <div key={item.v}>
                <dt className="heading text-3xl text-cyber-sunrise">{item.k}</dt>
                <dd className="text-xs uppercase tracking-wider text-white/60 mt-1">
                  {item.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Highlights */}
      {highlights.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">
                Empfehlungen der Redaktion
              </p>
              <h2 className="heading text-4xl">Highlights</h2>
            </div>
          </div>
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
            Alle Inhalte werden in Sanity gepflegt. Unter{" "}
            <Link href="/studio" className="text-cyber-pink underline underline-offset-4">
              /studio
            </Link>{" "}
            kannst du Schulungen anlegen, bearbeiten und veroeffentlichen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schulungen.map((s) => (
            <SchulungCard key={s._id} s={s} />
          ))}
        </div>
      </section>

      {/* Ueber */}
      <section id="ueber" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">Ueber StefanAI</p>
            <h2 className="heading text-4xl mb-6">
              Praxis statt <span className="text-cyber-sunrise">Buzzwords</span>.
            </h2>
            <p className="text-white/80 leading-relaxed">
              StefanAI begleitet Organisationen seit Jahren beim Einsatz von
              kuenstlicher Intelligenz - von der ersten Strategie-Session bis
              zum produktiven Multi-Agent-System. Unsere Schulungen sind
              hands-on, ehrlich und vermeiden den ueblichen KI-Hype.
            </p>
          </div>
          <div className="rounded-soft border border-white/10 bg-white/5 p-8 lumin-frost">
            <ul className="space-y-4 text-sm text-white/85">
              {[
                "Trainer:innen mit echter Projekterfahrung",
                "Maximal 12 Teilnehmende pro Workshop",
                "Materialien und Aufzeichnung inklusive",
                "Optionales 1:1 Follow-Up nach 30 Tagen",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-cyber-sunrise shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

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
