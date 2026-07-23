import { client, SETTINGS_QUERY, WORKS_QUERY } from "@/sanity/client";
import { works as sampleWorks, type Category, type Work } from "./works";

export interface VideoRef {
  url?: string;
  posterUrl?: string;
}

export interface SiteSettings {
  showreel?: VideoRef;
  /** One optional hover clip per service, in the fixed dictionary order:
   *  [Advertising, Social & Reels, Brand Films, Long Form]. */
  servicePreviews: (VideoRef | null)[];
}

interface RawSettings {
  showreel?: VideoRef;
  advertisingPreview?: VideoRef;
  socialPreview?: VideoRef;
  brandPreview?: VideoRef;
  longFormPreview?: VideoRef;
}

interface RawProject {
  _key: string;
  title?: string;
  client?: string;
  category?: string;
  year?: string;
  runtime?: string;
  video?: {
    url?: string;
    posterUrl?: string;
    width?: number;
    height?: number;
    duration?: number;
  };
}

/** mm:ss from a duration in seconds. */
function formatRuntime(seconds?: number): string {
  if (!seconds || !isFinite(seconds)) return "--:--";
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function toWork(p: RawProject, i: number): Work {
  const w = p.video?.width ?? 0;
  const h = p.video?.height ?? 0;
  return {
    slug: p._key,
    index: String(i + 1).padStart(2, "0"),
    title: p.title ?? "Untitled",
    client: p.client ?? "",
    category: (p.category as Category) ?? "Advertising",
    year: p.year ?? "",
    length: p.runtime || formatRuntime(p.video?.duration),
    tone: (i * 37) % 360,
    vertical: h > w && h > 0,
    videoUrl: p.video?.url,
    posterUrl: p.video?.posterUrl,
  };
}

/**
 * Projects for the Work page. Falls back to the built-in sample set whenever
 * the CMS is unreachable or has no projects, so the site never renders empty.
 */
export async function getWorks(): Promise<Work[]> {
  if (!client) return sampleWorks;
  try {
    const raw = await client.fetch<RawProject[] | null>(
      WORKS_QUERY,
      {},
      { next: { revalidate: 60 } }
    );
    if (!raw || raw.length === 0) return sampleWorks;
    return raw.map(toWork);
  } catch {
    return sampleWorks;
  }
}

export async function getSettings(): Promise<SiteSettings> {
  const empty: SiteSettings = { servicePreviews: [] };
  if (!client) return empty;
  try {
    const raw = await client.fetch<RawSettings | null>(
      SETTINGS_QUERY,
      {},
      { next: { revalidate: 60 } }
    );
    if (!raw) return empty;
    return {
      showreel: raw.showreel,
      servicePreviews: [
        raw.advertisingPreview ?? null,
        raw.socialPreview ?? null,
        raw.brandPreview ?? null,
        raw.longFormPreview ?? null,
      ],
    };
  } catch {
    return empty;
  }
}
