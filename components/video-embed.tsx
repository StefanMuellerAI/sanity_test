// Bettet ein Begleitvideo ein - akzeptiert YouTube-, Vimeo- oder direkt eine
// Video-Datei-URL (mp4/webm/...). Faellt auf einen einfachen Link zurueck,
// wenn das Format nicht erkannt wird.

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
  const src = dateiUrl || url;
  if (!src) return null;

  const ytId = url ? getYouTubeId(url) : null;
  const vimeoId = url ? getVimeoId(url) : null;
  const direct = dateiUrl || (url && isDirectVideo(url) ? url : null);

  return (
    <figure className="my-8">
      <div className="relative aspect-video rounded-soft overflow-hidden border border-white/10 bg-black">
        {ytId ? (
          <iframe
            src={`https://www.youtube.com/embed/${ytId}`}
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : vimeoId ? (
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}`}
            title="Video"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : direct ? (
          <video
            controls
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={direct} />
          </video>
        ) : (
          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 flex items-center justify-center text-cyber-tuerkis underline"
          >
            Video oeffnen
          </a>
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
