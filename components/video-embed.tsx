"use client";

// Click-to-Load Embed - laedt YouTube/Vimeo erst nach explizitem Klick.
// Bis zum Klick werden KEINE Cookies oder Daten an Drittanbieter
// uebertragen, daher ist auch kein Cookie-Banner noetig. Direkte Video-
// Dateien (mp4 etc.) werden nativ ohne Drittanbieter geladen.

import { useState } from "react";

type Props = {
  url?: string;
  dateiUrl?: string;
  beschriftung?: string;
};

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/embed/")) return u.pathname.split("/")[2];
      return u.searchParams.get("v");
    }
  } catch {}
  return null;
}

function getVimeoId(url: string): string | null {
  try {
    const u = new URL(url);
    if (!u.hostname.includes("vimeo.com")) return null;
    const m = u.pathname.match(/\/(\d+)/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

function isDirectVideo(url: string): boolean {
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url);
}

export function VideoEmbed({ url, dateiUrl, beschriftung }: Props) {
  const [aktiviert, setAktiviert] = useState(false);
  const src = dateiUrl || url;
  if (!src) return null;

  const ytId = url ? getYouTubeId(url) : null;
  const vimeoId = url ? getVimeoId(url) : null;
  const direct = dateiUrl || (url && isDirectVideo(url) ? url : null);

  const anbieter = ytId ? "YouTube" : vimeoId ? "Vimeo" : null;
  const benoetigtConsent = Boolean(anbieter);

  return (
    <figure className="my-8">
      <div className="relative aspect-video rounded-soft overflow-hidden border border-white/10 bg-black">
        {direct ? (
          <video
            controls
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={direct} />
          </video>
        ) : !benoetigtConsent ? (
          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 flex items-center justify-center text-cyber-tuerkis underline"
          >
            Video oeffnen
          </a>
        ) : aktiviert && ytId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1`}
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : aktiviert && vimeoId ? (
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?dnt=1&autoplay=1`}
            title="Video"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setAktiviert(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center bg-gradient-to-br from-weltraum-blau via-weltraum-blau/95 to-cyber-violett/40 hover:from-weltraum-blau hover:to-cyber-violett/60 transition"
            aria-label={`${anbieter}-Video laden`}
          >
            <span className="w-16 h-16 rounded-full bg-cyber-sunrise text-weltraum-blau flex items-center justify-center text-2xl">
              &#9658;
            </span>
            <span className="heading text-xl text-white">
              {anbieter}-Video laden
            </span>
            <span className="text-xs text-white/70 max-w-md leading-relaxed">
              Beim Klick wird eine Verbindung zu {anbieter} hergestellt. Es koennen
              dabei Daten (z.B. IP-Adresse, Cookies) an {anbieter} uebertragen
              werden. Mehr dazu in unserer{" "}
              <a
                href="/datenschutz"
                className="underline text-cyber-tuerkis hover:text-cyber-pink"
                onClick={(e) => e.stopPropagation()}
              >
                Datenschutzerklaerung
              </a>
              .
            </span>
          </button>
        )}
      </div>
      {beschriftung && (
        <figcaption className="mt-3 text-sm text-white/60 italic">
          {beschriftung}
        </figcaption>
      )}
    </figure>
  );
}
