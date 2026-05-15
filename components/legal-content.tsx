// Rendert Rechtsseiten-Inhalt - akzeptiert entweder Portable Text aus Sanity
// oder das einfachere Fallback-Format (Liste aus Sections mit Absaetzen).

import { PortableText, type PortableTextBlock } from "@portabletext/react";
import type { SampleRechtsseite } from "@/sanity/lib/sample-data";

type Props = {
  inhalt?: unknown;
  fallback?: SampleRechtsseite["inhalt"];
};

export function LegalContent({ inhalt, fallback }: Props) {
  const blocks = Array.isArray(inhalt) ? (inhalt as PortableTextBlock[]) : null;

  if (blocks && blocks.length > 0) {
    return (
      <div className="prose prose-invert max-w-none text-white/85 leading-relaxed space-y-5">
        <PortableText value={blocks} />
      </div>
    );
  }

  if (fallback && fallback.length > 0) {
    return (
      <div className="space-y-8 text-white/85 leading-relaxed">
        {fallback.map((section) => (
          <section key={section._key}>
            {section.ueberschrift && (
              <h2 className="heading text-2xl mb-3 text-white">
                {section.ueberschrift}
              </h2>
            )}
            <div className="space-y-3">
              {section.absaetze.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  }

  return <p className="text-white/60">Inhalt folgt in Kuerze.</p>;
}
