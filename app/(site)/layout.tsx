import Link from "next/link";
import { Logo } from "@/components/logo";
import { isSanityConfigured } from "@/sanity/env";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-white/10 bg-weltraum-blau/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-10 w-auto" />
          </Link>
          <nav className="hidden sm:flex items-center gap-8 text-sm font-semibold">
            <Link href="/#schulungen" className="hover:text-cyber-pink transition">
              Schulungen
            </Link>
            <Link href="/blog" className="hover:text-cyber-pink transition">
              Blog
            </Link>
            <Link href="/team" className="hover:text-cyber-pink transition">
              Team
            </Link>
            <Link href="/presse" className="hover:text-cyber-pink transition">
              Presse
            </Link>
            <Link href="/#kontakt" className="hover:text-cyber-pink transition">
              Kontakt
            </Link>
            <Link
              href="/studio"
              className="text-cyber-tuerkis hover:text-cyber-pink transition"
              title="Sanity Studio oeffnen"
            >
              Studio
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-4 text-sm text-white/70">
          <div className="sm:col-span-1">
            <Logo className="h-9 w-auto mb-3" />
            <p>KI-Schulungen mit Substanz. Made with Sanity & Next.js.</p>
          </div>
          <div>
            <h3 className="heading text-base text-white mb-2">Navigation</h3>
            <ul className="space-y-1">
              <li><Link href="/#schulungen" className="hover:text-cyber-pink">Schulungen</Link></li>
              <li><Link href="/blog" className="hover:text-cyber-pink">Blog</Link></li>
              <li><Link href="/team" className="hover:text-cyber-pink">Team</Link></li>
              <li><Link href="/presse" className="hover:text-cyber-pink">Presse</Link></li>
              <li><Link href="/#kontakt" className="hover:text-cyber-pink">Kontakt</Link></li>
              <li><Link href="/studio" className="hover:text-cyber-pink">Sanity Studio</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="heading text-base text-white mb-2">Rechtliches</h3>
            <ul className="space-y-1">
              <li><Link href="/impressum" className="hover:text-cyber-pink">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-cyber-pink">Datenschutz</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="heading text-base text-white mb-2">Status</h3>
            <p>
              Sanity:{" "}
              {isSanityConfigured ? (
                <span className="text-cyber-tuerkis">verbunden</span>
              ) : (
                <span className="text-cyber-gelb">Demo-Daten aktiv</span>
              )}
            </p>
          </div>
        </div>
        <div className="text-center text-xs text-white/40 pb-8">
          (c) {new Date().getFullYear()} StefanAI - Demoprojekt zum Testen von Sanity.
        </div>
      </footer>
    </>
  );
}
