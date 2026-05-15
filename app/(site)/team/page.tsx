import type { Metadata } from "next";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { getAllTeamMitglieder, type TeamMitglied } from "@/sanity/lib/fetch";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Team - KI-Trainer & Berater",
  description:
    "Das Team hinter StefanAI - erfahrene Trainer:innen, AI Engineers und Berater:innen fuer KI-Schulung, KI-Beratung und KI-Software-Entwicklung.",
  alternates: { canonical: "/team" },
};

function Initialen({ name }: { name: string }) {
  const parts = name.trim().split(/\s+/);
  const ini = (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "");
  return (
    <div className="w-24 h-24 rounded-full bg-cyber-sunrise text-weltraum-blau flex items-center justify-center font-bold text-2xl heading shrink-0">
      {ini.toUpperCase()}
    </div>
  );
}

function MemberBio({ bio }: { bio?: unknown }) {
  if (!bio) return null;
  const arr = Array.isArray(bio) ? bio : [];
  if (arr.length === 0) return null;
  const isPlainStrings = arr.every((b) => typeof b === "string");

  if (isPlainStrings) {
    return (
      <div className="mt-3 space-y-2 text-sm text-white/75 leading-relaxed">
        {(arr as string[]).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    );
  }
  return (
    <div className="mt-3 text-sm text-white/75 leading-relaxed prose prose-invert max-w-none">
      <PortableText value={arr as PortableTextBlock[]} />
    </div>
  );
}

export default async function TeamPage() {
  const team = await getAllTeamMitglieder();

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-12 max-w-2xl">
        <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">Team</p>
        <h1 className="heading-caps text-5xl mb-4">
          Menschen hinter <span className="text-cyber-sunrise">StefanAI</span>
        </h1>
        <p className="text-white/75 leading-relaxed">
          Trainer:innen, Engineers und Strateg:innen, die KI nicht nur erklaeren,
          sondern selbst produktiv einsetzen.
        </p>
      </header>

      <ul className="space-y-8">
        {team.map((m: TeamMitglied) => (
          <li
            key={m._id}
            className="rounded-soft border border-white/10 bg-white/5 p-6 sm:p-8 flex flex-col sm:flex-row gap-6"
          >
            <Initialen name={m.name} />
            <div className="flex-1">
              <h2 className="heading text-2xl text-white">{m.name}</h2>
              {m.rolle && (
                <p className="ki-highlight text-xs text-cyber-tuerkis mt-1">
                  {m.rolle}
                </p>
              )}
              {m.kurztext && (
                <p className="mt-3 text-white/85 leading-relaxed">{m.kurztext}</p>
              )}
              <MemberBio bio={m.bio} />
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                {m.email && (
                  <a
                    href={`mailto:${m.email}`}
                    className="text-cyber-pink hover:underline underline-offset-4"
                  >
                    {m.email}
                  </a>
                )}
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyber-tuerkis hover:underline underline-offset-4"
                  >
                    LinkedIn
                  </a>
                )}
                {m.website && (
                  <a
                    href={m.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyber-tuerkis hover:underline underline-offset-4"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
