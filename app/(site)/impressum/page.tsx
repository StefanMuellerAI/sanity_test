import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - StefanAI",
  description: "Impressum und Anbieterkennzeichnung gemaess Paragraph 5 DDG.",
};

export default function ImpressumPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-10">
        <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">Rechtliches</p>
        <h1 className="heading-caps text-4xl sm:text-5xl">
          <span className="text-cyber-sunrise">Impressum</span>
        </h1>
        <p className="mt-4 text-sm text-white/60">
          Angaben gemaess Paragraph 5 DDG (Digitale-Dienste-Gesetz, vormals TMG).
        </p>
      </header>

      <div className="rounded-soft border border-cyber-gelb/40 bg-cyber-gelb/10 p-4 text-xs text-cyber-gelb mb-10">
        Hinweis: Dies ist ein Demoprojekt zum Testen von Sanity. Die folgenden
        Angaben sind Platzhalter und muessen vor Live-Schaltung durch eure
        tatsaechlichen Daten ersetzt werden.
      </div>

      <div className="prose prose-invert max-w-none space-y-8 text-white/85 leading-relaxed">
        <section>
          <h2 className="heading text-2xl mb-3 text-white">Anbieter</h2>
          <p>
            Stefan Mueller<br />
            StefanAI<br />
            Musterstrasse 1<br />
            12345 Musterstadt<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">Kontakt</h2>
          <p>
            Telefon: +49 (0) 000 000000<br />
            E-Mail:{" "}
            <a
              href="mailto:hallo@stefanai.example"
              className="text-cyber-pink underline underline-offset-4"
            >
              hallo@stefanai.example
            </a>
            <br />
            Web:{" "}
            <a
              href="https://stefanai.de"
              className="text-cyber-pink underline underline-offset-4"
            >
              stefanai.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            Umsatzsteuer-ID
          </h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemaess Paragraph 27a
            Umsatzsteuergesetz:<br />
            DE000000000
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            Redaktionell verantwortlich
          </h2>
          <p>
            Stefan Mueller (Anschrift wie oben)
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            EU-Streitschlichtung
          </h2>
          <p>
            Die Europaeische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noreferrer"
              className="text-cyber-pink underline underline-offset-4"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse findest du oben.
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            Haftung fuer Inhalte
          </h2>
          <p>
            Als Diensteanbieter sind wir gemaess Paragraph 7 Absatz 1 DDG fuer
            eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach Paragraphen 8 bis 10 DDG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, uebermittelte oder
            gespeicherte fremde Informationen zu ueberwachen oder nach Umstaenden
            zu forschen, die auf eine rechtswidrige Taetigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberuehrt. Eine diesbezuegliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung moeglich.
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
            diese Inhalte umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">
            Haftung fuer Links
          </h2>
          <p>
            Unser Angebot enthaelt Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb koennen wir fuer diese
            fremden Inhalte auch keine Gewaehr uebernehmen. Fuer die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Eine permanente inhaltliche Kontrolle der
            verlinkten Seiten ist ohne konkrete Anhaltspunkte einer
            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="heading text-2xl mb-3 text-white">Urheberrecht</h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfaeltigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der
            Grenzen des Urheberrechtes beduerfen der schriftlichen Zustimmung
            des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser
            Seite sind nur fuer den privaten, nicht kommerziellen Gebrauch
            gestattet.
          </p>
        </section>
      </div>
    </article>
  );
}
