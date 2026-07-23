import { client, SETTINGS_QUERY, WORKS_QUERY } from "@/sanity/client";
import { works as sampleWorks, type Category, type Work } from "./works";

export interface SiteSettings {
  showreel?: { url?: string; posterUrl?: string };
  stats: { label: string; value: string }[];
  clients: string[];
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

const DEFAULT_STATS = [
  { label: "Since", value: "2021" },
  { label: "Based", value: "Andorra" },
  { label: "Films cut", value: "120+" },
  { label: "Avg. turnaround", value: "10 days" },
];

const DEFAULT_CLIENTS = [
  "Maison Lumière",
  "Atelier V728",
  "Kösk Studios",
  "Vireo",
  "Béton Brut",
  "Halden",
  "Studio Norr",
  "Édition Neuf",
];

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
 * the CMS is not configured yet or has no projects, so the site never renders
 * empty during setup.
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
  const fallback: SiteSettings = {
    stats: DEFAULT_STATS,
    clients: DEFAULT_CLIENTS,
  };
  if (!client) return fallback;
  try {
    const raw = await client.fetch<Partial<SiteSettings> | null>(
      SETTINGS_QUERY,
      {},
      { next: { revalidate: 60 } }
    );
    if (!raw) return fallback;
    return {
      showreel: raw.showreel,
      stats: raw.stats?.length ? raw.stats : fallback.stats,
      clients: raw.clients?.length ? raw.clients : fallback.clients,
    };
  } catch {
    return fallback;
  }
}
