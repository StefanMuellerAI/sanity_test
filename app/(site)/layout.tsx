import Link from "next/link";
import Image from "next/image";
import { isSanityConfigured } from "@/sanity/env";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-white/10 bg-weltraum-blau/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {/* Animiertes Logo - Platzhalter unter public/logo-animated.gif ersetzen */}
            <Image
              src="/logo-animated.gif"
              alt="StefanAI Logo"
              width={56}
              height={56}
              priority
              unoptimized
              className="h-12 w-12 rounded-full bg-gradient-to-br from-cyber-pink via-cyber-orange to-cyber-gelb"
            />
            <span className="heading text-2xl text-white hidden sm:inline">
              StefanAI
            </span>
          </Link>
          <nav className="flex-1 hidden lg:flex items-center justify-center gap-6 text-sm font-semibold">
            <Link href="/#ueber" className="hover:text-cyber-pink transition">
              Ueber
            </Link>
            <Link href="/#schulungen" className="hover:text-cyber-pink transition">
              Schulung
            </Link>
            <Link href="/#beratung" className="hover:text-cyber-pink transition">
              Beratung
            </Link>
            <Link href="/#software" className="hover:text-cyber-pink transition">
              Software
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
          </nav>
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/#kontakt" className="btn-kontakt hidden sm:inline-flex">
              Kontakt aufnehmen
            </Link>
            <Link
              href="/studio"
              className="w-10 h-10 rounded-full bg-cyber-pink/90 text-white flex items-center justify-center hover:bg-cyber-pink transition"
              title="Sanity Studio"
              aria-label="Sanity Studio"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-4 text-sm text-white/70">
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/logo-animated.gif"
                alt="StefanAI"
                width={36}
                height={36}
                unoptimized
                className="h-9 w-9 rounded-full bg-gradient-to-br from-cyber-pink via-cyber-orange to-cyber-gelb"
              />
              <span className="heading text-xl text-white">StefanAI</span>
            </div>
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
