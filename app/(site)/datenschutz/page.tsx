import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklaerung - StefanAI",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten gemaess DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-10">
        <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">Rechtliches</p>
        <h1 className="heading-caps text-4xl sm:text-5xl">
          <span className="text-cyber-sunrise">Datenschutz</span>
        </h1>
        <p className="mt-4 text-sm text-white/60">
          Informationen gemaess Artikel 13 und 14 DSGVO zur Verarbeitung
          personenbezogener Daten auf dieser Website.
        </p>
      </header>

      <div className="rounded-soft border border-cyber-gelb/40 bg-cyber-gelb/10 p-4 text-xs text-cyber-gelb mb-10">
        Hinweis: Dies ist ein Demoprojekt zum Testen von Sanity. Die folgenden
        Angaben sind Platzhalter, die den tatsaechlich eingesetzten Stack
        (Vercel, Sanity, Google Fonts) abbilden. Vor Live-Schaltung bitte
        durch eine fachkundige Stelle pruefen lassen.
      </div>

      <div className="prose prose-invert max-w-none space-y-8 text-white/85 leading-relaxed">
        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            1. Verantwortlicher
          </h2>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und
            anderer nationaler Datenschutzgesetze sowie sonstiger
            datenschutzrechtlicher Bestimmungen ist:
          </p>
          <p>
            Stefan Mueller<br />
            StefanAI<br />
            Musterstrasse 1<br />
            12345 Musterstadt<br />
            Deutschland<br />
            E-Mail:{" "}
            <a
              href="mailto:hallo@stefanai.example"
              className="text-cyber-pink underline underline-offset-4"
            >
              hallo@stefanai.example
            </a>
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            2. Allgemeines zur Datenverarbeitung
          </h2>
          <p>
            Wir verarbeiten personenbezogene Daten unserer Nutzer:innen
            grundsaetzlich nur, soweit dies zur Bereitstellung einer
            funktionsfaehigen Website sowie unserer Inhalte und Leistungen
            erforderlich ist. Die Verarbeitung erfolgt regelmaessig nur nach
            Einwilligung (Artikel 6 Absatz 1 Buchstabe a DSGVO) oder auf einer
            anderen Rechtsgrundlage, etwa zur Erfuellung eines Vertrags
            (Buchstabe b), zur Erfuellung einer rechtlichen Verpflichtung
            (Buchstabe c) oder zur Wahrung berechtigter Interessen (Buchstabe f).
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            3. Bereitstellung der Website (Server-Logs)
          </h2>
          <p>
            Beim Aufruf dieser Website werden vom Hostinganbieter automatisch
            Informationen erfasst, die der Browser uebermittelt. Diese sind:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>IP-Adresse (gekuerzt, soweit moeglich)</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Aufgerufene URL, Referrer, Statuscode</li>
            <li>Browsertyp, Betriebssystem, Sprache</li>
          </ul>
          <p>
            Rechtsgrundlage ist Artikel 6 Absatz 1 Buchstabe f DSGVO. Berechtigtes
            Interesse ist der sichere und stabile Betrieb der Website. Die Daten
            werden nach kurzer Zeit geloescht, sofern keine Anhaltspunkte fuer
            einen Angriff oder Missbrauch vorliegen.
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            4. Hosting bei Vercel
          </h2>
          <p>
            Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, USA gehostet (im Folgenden Vercel). Vercel
            verarbeitet dabei Verbindungsdaten wie IP-Adresse, Datum, Uhrzeit
            und angeforderte Ressource, um die Auslieferung der Website
            sicherzustellen. Rechtsgrundlage ist Artikel 6 Absatz 1 Buchstabe f
            DSGVO.
          </p>
          <p>
            Eine Datenuebermittlung in die USA kann stattfinden. Vercel hat sich
            dem EU-US Data Privacy Framework unterworfen. Weitere Informationen
            findest du in der Datenschutzerklaerung von Vercel unter{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="text-cyber-pink underline underline-offset-4"
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            5. Content-Management mit Sanity
          </h2>
          <p>
            Die redaktionellen Inhalte der Website werden ueber das Headless-CMS
            Sanity verwaltet, betrieben durch die Sanity.io AS, Stranden 1A,
            0250 Oslo, Norwegen. Beim Aufruf von Inhalten greift die Website auf
            das von Sanity bereitgestellte Content Delivery Network (cdn.sanity.io)
            zu. Dabei wird die IP-Adresse zur Auslieferung verwendet.
            Rechtsgrundlage ist Artikel 6 Absatz 1 Buchstabe f DSGVO.
          </p>
          <p>
            Datenschutzerklaerung von Sanity:{" "}
            <a
              href="https://www.sanity.io/legal/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-cyber-pink underline underline-offset-4"
            >
              sanity.io/legal/privacy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            6. Schriftarten (Google Fonts, selbst gehostet)
          </h2>
          <p>
            Wir nutzen die Schriftarten Bree Serif, Montserrat und Oxanium. Die
            Auslieferung erfolgt ueber die in Next.js eingebaute Schriftoptimierung
            und damit ueber die eigene Domain - es findet kein direkter Aufruf
            der Google-Server beim Laden der Schriften statt.
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            7. Eingebettete Videos
          </h2>
          <p>
            In Blog-Beitraegen koennen Videos von YouTube (Google Ireland Limited,
            Gordon House, Barrow Street, Dublin 4, Irland) oder Vimeo
            (Vimeo Inc., 555 West 18th Street, New York, NY 10011, USA)
            eingebettet sein. Erst beim Klick auf das Video oder dessen
            Embed-Container werden Daten an die jeweiligen Anbieter
            uebermittelt.
          </p>
          <p>
            Rechtsgrundlage ist Artikel 6 Absatz 1 Buchstabe f DSGVO. Weitere
            Informationen:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-cyber-pink underline underline-offset-4"
            >
              policies.google.com/privacy
            </a>{" "}
            sowie{" "}
            <a
              href="https://vimeo.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-cyber-pink underline underline-offset-4"
            >
              vimeo.com/privacy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            8. Kontaktaufnahme
          </h2>
          <p>
            Bei Kontaktaufnahme per E-Mail verarbeiten wir die uebermittelten
            personenbezogenen Daten zur Bearbeitung deiner Anfrage.
            Rechtsgrundlage ist Artikel 6 Absatz 1 Buchstabe b DSGVO
            (Vertragsanbahnung) bzw. Buchstabe f DSGVO (berechtigtes Interesse
            an der Beantwortung). Die Daten werden geloescht, sobald sie zur
            Erreichung des Zwecks ihrer Erhebung nicht mehr erforderlich sind.
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            9. PDF-Downloads
          </h2>
          <p>
            Im Blog stellen wir PDF-Dokumente (Checklisten, Argumentationshilfen,
            Vorlagen) zum direkten Download bereit. Eine Registrierung oder die
            Angabe personenbezogener Daten ist hierfuer nicht erforderlich.
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            10. Cookies
          </h2>
          <p>
            Diese Website setzt grundsaetzlich keine Cookies zu Tracking- oder
            Marketingzwecken ein. Technisch notwendige Cookies, etwa zur Wahrung
            einer Studio-Sitzung unter /studio, koennen lokal im Browser
            gespeichert werden. Rechtsgrundlage ist Paragraph 25 Absatz 2 TDDDG
            in Verbindung mit Artikel 6 Absatz 1 Buchstabe f DSGVO.
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            11. Rechte der betroffenen Personen
          </h2>
          <p>Du hast jederzeit das Recht auf:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Auskunft (Artikel 15 DSGVO)</li>
            <li>Berichtigung (Artikel 16 DSGVO)</li>
            <li>Loeschung (Artikel 17 DSGVO)</li>
            <li>Einschraenkung der Verarbeitung (Artikel 18 DSGVO)</li>
            <li>Datenuebertragbarkeit (Artikel 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Artikel 21 DSGVO)</li>
            <li>Widerruf einer erteilten Einwilligung (Artikel 7 Absatz 3 DSGVO)</li>
          </ul>
          <p>
            Du kannst diese Rechte formlos an die oben genannte E-Mail-Adresse
            geltend machen. Daneben besteht ein Beschwerderecht bei einer
            Aufsichtsbehoerde (Artikel 77 DSGVO).
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            12. Aenderung dieser Datenschutzerklaerung
          </h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklaerung anzupassen, damit
            sie stets den aktuellen rechtlichen Anforderungen entspricht oder um
            Aenderungen unserer Leistungen abzubilden. Es gilt jeweils die zum
            Zeitpunkt deines Besuchs abrufbare Fassung.
          </p>
        </section>
      </div>
    </article>
  );
}
